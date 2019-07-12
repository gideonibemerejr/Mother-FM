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
import Home from './pages/Home'
import Header from './components/Header'
import FeaturedMix from './components/FeaturedMix'
import userUtil from './utils/userUtil'
import 'tachyons'

class App extends Component {
  state = {
    mixes: [],
    user: userUtil.getUser()
  }
  handleLogout = () => {
    userUtil.logout()
    this.setState({ user: null })
  }
  handleSignupOrLogin = () => {
    this.setState({ user: userUtil.getUser() })
  }

  render() {
    return (
      <Router>
        <Switch>
          <div className="flex-l justify-end">
            {/* Featured Mix Component */}
            <FeaturedMix />
            <div className="w-50-l relative z-1">
              <Header user={this.state.user} handleLogout={this.handleLogout} />
              {/* Routed Pages */}
              {/* Pass state and any actions */}
              {/* // TODO: Create Protected Routes */}
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/about" render={() => <AboutPage />} />

              <Route
                path="/archive"
                render={() =>
                  userUtil.getUser() ? (
                    <ArchivePage />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
              />
              <Route path="/culture" render={() => <CulturePage />} />
              <Route path="/blog" render={() => <BlogPage />} />
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
            </div>
          </div>
        </Switch>

        {/* Audio Player */}
        <iframe
          width="100%"
          height="60"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ftiffany-calver-12th-july-2017%2F"
          frameBorder="0"
          title="Audio Player"
          className="db fixed bottom-0 z-5"
        />
      </Router>
    )
  }
}

export default App
