import React from "react"
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, font, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td {
    font-family: "Slabo 27px", serif;
    font-weight: 400;
    color: #2a2a2a;
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: none;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }
`