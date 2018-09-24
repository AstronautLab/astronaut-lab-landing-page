import React from "react"
import { Router, Link } from "react-static"
import { hot } from "react-hot-loader"

import Routes from "react-static-routes"
import GlobalStyles from "./components/GlobalStyles"

const App = () => (
  <GlobalStyles>
    <Router>
      <Routes />
    </Router>
  </GlobalStyles>
)

export default hot(module)(App)
