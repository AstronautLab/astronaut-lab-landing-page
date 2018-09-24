import React from "react"
import { ServerStyleSheet } from "styled-components"

export default {
  getSiteData: () => ({
    title: "Astronaut Lab",
  }),

  // Routes and their respective data
  getRoutes: async () => {
    return [
      {
        path: "/",
        component: "src/containers/Home",
      },
      {
        is404: true,
        component: "src/containers/404",
      },
    ]
  },

  // We need to override `renderToHtml` and inject computed styles from
  // styled-components
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()

    return html
  },

  // We need to do a few custom things with the Document, such as pre-rendering
  // styles and injecting some external stuff we need
  Document: ({ Html, Head, Body, children, renderMeta }) => (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Slab 27px - Google Fonts*/}
        <link
          href="https://fonts.googleapis.com/css?family=Slabo+27px"
          rel="stylesheet"
        />

        {renderMeta.styleTags}

        <title>Astronaut Lab</title>
      </Head>
    </Html>
  ),
}
