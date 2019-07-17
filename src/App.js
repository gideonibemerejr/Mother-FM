/*global Mixcloud*/

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink
} from 'react-router-dom'
import AboutPage from './pages/About'
import ArchivePage from './pages/Archive'
import BlogPage from './pages/Blog'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import CreateMixPage from './pages/CreateMixPage'
import CreatePostPage from './pages/CreatePostPage'
import Home from './pages/Home'
import Header from './components/Header'
import FeaturedMix from './components/FeaturedMix'
import userUtil from './utils/userUtil'
import mixesUtil from './utils/mixesUtil'
import postsUtil from './utils/postsUtil'

class App extends Component {
  state = {
    mixes: [],
    posts: [],
    user: userUtil.getUser(),
    isAdding: false,
    isOpen: false,
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
  handleMenuClick = () => {
    console.log('clicking')
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  // general purpose for handline Mixcloud Widget
  mountAudio = async () => {
    // when the app uses the this keyword, the widget is
    // now accessible anywhere inside the component
    this.widget = Mixcloud.PlayerWidget(this.player)
    // here the app waits for the widget to be ready before continuing
    await this.widget.ready
    this.widget.play()
    // using the mixcloud widget events, the app can detect when the audio has been paused, set playing state to false
    this.widget.events.pause.on(this.handlePause)
    // audio is playing again, set playing state to true
    this.widget.events.play.on(this.handlePlay)
  }

  handlePause = () => {
    this.setState({ playing: false })
  }
  handlePlay = () => {
    this.setState({ playing: true })
  }

  actions = {
    togglePlay: () => {
      this.widget.togglePlay()
    },
    playMix: mixName => {
      // if mixName is the same as the currently playing mix, the app should pause it instead
      const { currentMix } = this.state
      if (mixName === currentMix) {
        return this.widget.togglePlay()
      }

      // update the currentMix by its name and then start playing it immediately
      this.setState({ currentMix: mixName })

      // load a new mix by its name and then start playing it immediately (true)
      this.widget.load(mixName, true)
    }
  }

  handleAddMix = link => {
    this.setState(
      state => ({ isAdding: !this.state.isAdding }),
      async function() {
        await mixesUtil.createMix(link).then(result =>
          this.setState({
            mixes: [{ result }, ...this.state.mixes]
          })
        )
      }
    )
  }

  handleAddPost = post => {
    this.setState(
      state => ({ isAdding: !this.state.isAdding }),
      async function() {
        await postsUtil.createPost(post).then(result =>
          this.setState({
            posts: [{ result }, ...this.state.posts]
          })
        )
      }
    )
  }

  handleGetMixes = async () => {
    const urls = await mixesUtil.index()
    urls.map(async mix => {
      try {
        const response = await fetch(`https://api.mixcloud.com${mix.link}`)
        const singleMix = await response.json()
        this.handleUpdateMixes(singleMix)
      } catch (error) {
        console.log(error)
      }
    })
  }

  handleGetPosts = async () => {
    const posts = await postsUtil.index()
    console.log(posts)
    // urls.map(async mix => {
    //   try {
    //     const response = await fetch(`https://api.mixcloud.com${mix.link}`)
    //     const singleMix = await response.json()
    //     this.handleUpdatePosts(single)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // })
  }

  handleUpdateMixes = singleMix => {
    this.setState((state, props) => ({ mixes: [...state.mixes, singleMix] }))
  }

  /*************************************************
  // * Lifecycle Methods 
  *************************************************/
  componentDidMount() {
    this.mountAudio()
    this.handleGetMixes()
  }

  render() {
    const [firstMix = {}] = this.state.mixes
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/create-mix"
            render={() => <CreateMixPage handleAddMix={this.handleAddMix} />}
          />
          <Route
            exact
            path="/create-post"
            render={() => <CreatePostPage handleAddPost={this.handleAddPost} />}
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
            <FeaturedMix
              {...this.state}
              {...this.actions}
              {...firstMix}
              id={firstMix.key}
            />
            {this.state.user ? (
              <nav className="profile flex justify-center items-center bg-black">
                <ul onClick={this.handleMenuClick} className="list flex">
                  <li className="mh5">
                    <NavLink
                      className="nav-link link biryani-black f6 ttu white"
                      to="create-mix"
                    >
                      Add Mix
                    </NavLink>
                  </li>
                  <li className="mh5">
                    <NavLink
                      className="nav-link link biryani-black f6 ttu white"
                      to="create-post"
                    >
                      Add Post
                    </NavLink>
                  </li>
                  <li className="mh5">
                    <Link
                      className="nav-link link biryani-black f6 ttu white"
                      to=""
                      onClick={this.handleLogout}
                    >
                      Log Out, {this.state.user.name}
                    </Link>
                  </li>
                </ul>
              </nav>
            ) : null}

            <div
              id="main"
              className={`w-50-l bg-white relative z-1 ${
                this.state.isOpen ? 'open' : ''
              }`}
            >
              {this.state.user ? (
                <div
                  onClick={this.handleMenuClick}
                  className="mt4 ph4 ph4-l flex justify-end items-center icon"
                >
                  {this.state.isOpen ? (
                    <>
                      close &nbsp;
                      <i className="zmdi zmdi-close zmdi-hc-lg" />
                    </>
                  ) : (
                    <>
                      {this.state.user.name}&nbsp;&nbsp;
                      <i className=" zmdi zmdi-account  zmdi-hc-lg" />
                    </>
                  )}
                </div>
              ) : null}
              <Header
                user={this.state.user}
                handleLogout={this.handleLogout}
                handleMenuClick={this.handleMenuClick}
                isOpen={this.state.isOpen}
              />
              {/* Routed Pages */}
              {/* Pass state and any actions */}
              {/* // TODO: Create Protected Routes */}
              <Route
                exact
                path="/"
                render={() => (
                  <Home
                    handleUpdateMixes={this.handleUpdateMixes}
                    {...this.state}
                    {...this.actions}
                  />
                )}
              />
              <Route
                exact
                path="/about"
                render={() => <AboutPage {...this.state} />}
              />

              <Route
                path="/archive"
                render={() =>
                  userUtil.getUser() ? (
                    <ArchivePage
                      handleUpdateMixes={this.handleUpdateMixes}
                      {...this.state}
                      {...this.actions}
                    />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
              />

              <Route
                path="/blog"
                render={() => (
                  <BlogPage
                    handleUpdatePosts={this.handleUpdatePosts}
                    handleGetPosts={this.handleGetPosts}
                    {...this.state}
                    {...this.actions}
                  />
                )}
              />
            </div>
          </div>
        </Switch>

        {/* Audio Player */}
        <iframe
          width="100%"
          height="60"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FDJDimsa%2Fcapture-deep-jazzy-house-mix-2019%2F"
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
