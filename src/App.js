import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ArchivePage from './pages/Archive'
import MixesPage from './pages/Mixes'
import CulturePage from './pages/Culture'
import BlogPage from './pages/Blog'
import FeaturedMix from './components/FeaturedMix'
import 'tachyons'

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div className="flex-l justify-end">
          {/* Featured Mix Component */}
          <FeaturedMix />
          <div className="w-50-l relative z-1">
            <Header />
            {/* Routed Pages */}
            {/* Pass state and any actions */}
            {/* // TODO: Create Protected Routes */}
            <Route exact path="/" render={() => <HomePage />} />
            <Route path="/about" render={() => <AboutPage />} />
            <Route path="/archive" render={() => <ArchivePage />} />
            <Route path="/mixes" render={() => <MixesPage />} />
            <Route path="/culture" render={() => <CulturePage />} />
            <Route path="/blog" render={() => <BlogPage />} />
          </div>
        </div>
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
