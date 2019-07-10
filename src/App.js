import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ArchivePage from './pages/Archive'
import MixesPage from './pages/Mixes'
import CulturePage from './pages/Culture'
import BlogPage from './pages/Blog'
import 'tachyons'

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div className="flex-l justify-end">
          <div className="w-50-l relative z-1">
            <Header />
            <Route exact path="/" render={() => <HomePage />} />
            <Route path="/about" render={() => <AboutPage />} />
            <Route path="/archive" render={() => <ArchivePage />} />
            <Route path="/mixes" render={() => <MixesPage />} />
            <Route path="/culture" render={() => <CulturePage />} />
            <Route path="/blog" render={() => <BlogPage />} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
