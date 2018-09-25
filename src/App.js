import React from "react"
import Routes from "react-static-routes"
import GlobalStyles from "./components/GlobalStyles"

import { hot } from "react-hot-loader"

const App = () => (
  <GlobalStyles>
    <Routes />
  </GlobalStyles>
)

export default hot(module)(App)
