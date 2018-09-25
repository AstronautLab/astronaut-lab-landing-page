import React from "react"
import astroLogo from "../images/logo.png"
import ContactButton from "../components/ContactButton"
import Copyright from "../components/Copyright"
import styled from "styled-components"

const Home = ({ className }) => (
  <div className={className}>
    <Logo>
      <img src={astroLogo} alt="Astronaut Lab" width="auto" height="70" />
    </Logo>

    <Introduction>
      What’s really getting done on the space station - building software
      products!
    </Introduction>

    <ContactButton href="mailto:pete@astronautlab.co">
      Get in touch
    </ContactButton>

    <Copyright>© 2018 Astronaut Lab.</Copyright>
  </div>
)

const Logo = styled.h1`
  margin-bottom: 40px;
`

const Introduction = styled.h2`
  font-size: 32px;
  color: #fff;
  text-align: center;
  max-width: 600px;
  margin-bottom: 40px;
`

export default styled(Home)`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20vh;
  min-height: 100vh;
  background: #333;
  background-image: url("https://astronautlab.co/images/bg.jpg?c86b88c827c5b05fcab3b7f033a37cc4");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
