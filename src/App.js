/*global Mixcloud*/

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import AboutPage from './pages/About'
import ArchivePage from './pages/Archive'
import CulturePage from './pages/Culture'
import BlogPage from './pages/Blog'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import CreateMixPage from './pages/CreateMixPage'
import Home from './pages/Home'
import Header from './components/Header'
import FeaturedMix from './components/FeaturedMix'
import userUtil from './utils/userUtil'
import mixesUtil from './utils/mixesUtil'
import 'tachyons'

class App extends Component {
  state = {
    mixes: [],
    user: userUtil.getUser(),
    isAdding: false,
    playing: false,
    currentMix: ''
  }

  /*************************************************
  // * General Purpose Methods  
  *************************************************/

  handleLogout = () => {
    userUtil.logout()
    this.setState({ user: null })
  }
  handleSignupOrLogin = () => {
    this.setState({ user: userUtil.getUser() })
  }

  // general purpose for handline Mixcloud Widget
  mountAudio = async () => {
    // when the app uses the this keyword, the widget is
    // now accessible anywhere inside the component
    this.widget = Mixcloud.PlayerWidget(this.player)
    // here the app waits for the widget to be ready before continuing
    await this.widget.ready

    // using the mixcloud widget events, the app can detect when the audio has been paused, set playing state to false
    this.widget.events.pause.on(() => this.setState({ playing: false }))

    // audio is playing again, set playing state to true
    this.widget.events.play.on(() => this.setState({ playing: true }))
  }

  actions = {
    togglePlay: () => {
      this.widget.togglePlay()
    },
    playMix: mixName => {
      this.setState({ currentMix: mixName })
      this.widget.load(mixName, true)
    }
  }

  handleAddMix = ({ link }) => {
    this.setState(
      state => ({ isAdding: !this.state.isPosting }),
      async function() {
        console.log(link)

        await mixesUtil.create(link).then(result =>
          this.setState({
            mixes: [{ result }, ...this.state.mixes]
          })
        )
      }
    )
  }

  /*************************************************
  // * Lifecycle Methods 
  *************************************************/
  componentDidMount() {
    this.mountAudio()
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/make-mixes"
            render={() => <CreateMixPage handleAddMix={this.handleAddMix} />}
          />
          <Route
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <div className="flex-l justify-end">
            {/* Featured Mix Component */}
            <FeaturedMix />
            <div className="w-50-l relative z-1">
              <Header user={this.state.user} handleLogout={this.handleLogout} />
              {/* Routed Pages */}
              {/* Pass state and any actions */}
              {/* // TODO: Create Protected Routes */}
              <Route
                exact
                path="/"
                render={props => <Home {...this.state} {...this.actions} />}
              />
              <Route exact path="/about" render={() => <AboutPage />} />

              <Route
                path="/archive"
                render={props =>
                  userUtil.getUser() ? (
                    <ArchivePage togglePlay={this.togglePlay} />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
              />
              <Route
                path="/culture"
                togglePlay={this.togglePlay}
                render={() => <CulturePage />}
              />
              <Route
                path="/blog"
                togglePlay={this.togglePlay}
                render={() => <BlogPage />}
              />
            </div>
          </div>
        </Switch>

        {/* Audio Player */}
        <iframe
          width="100%"
          height="60"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Fmount-kimbie-king-krule-19th-april-2017%2F"
          frameBorder="0"
          title="Audio Player"
          className="db fixed bottom-0 z-5"
          ref={player => (this.player = player)}
        />
      </Router>
    )
  }
}

export default App
