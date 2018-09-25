import React, { Fragment } from "react"
import { Router } from "react-static"
import Routes from "react-static-routes"
import GlobalStyles from "./components/GlobalStyles"

import { hot } from "react-hot-loader"

const App = () => (
  <Fragment>
    <GlobalStyles />

    <Router>
      <Routes />
    </Router>
  </Fragment>
)

export default hot(module)(App)
