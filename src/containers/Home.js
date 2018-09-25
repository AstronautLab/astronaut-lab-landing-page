import React from "react"
import astroLogo from "../images/logo.png"
import ContactButton from "../components/ContactButton"
import Copyright from "../components/Copyright"
import ProjectList from "../components/ProjectList"
import styled from "styled-components"

const Home = ({ className }) => (
  <div className={className}>
    <Logo>
      <img src={astroLogo} alt="Astronaut Lab" width="auto" height="70" />
    </Logo>

    <Introduction>
      Fuel your business with software products that are out of this world!
      <br />
      🚀
    </Introduction>

    <ContactButton href="mailto:pete@astronautlab.co">
      Get in touch
    </ContactButton>

    <Copyright>© 2018 Astronaut Lab.</Copyright>

    <ProjectList />
  </div>
)

const Logo = styled.h1`
  margin-bottom: 40px;
`

const Introduction = styled.h2`
  font-size: 32px;
  color: #fff;
  text-align: center;
  padding: 0 40px;
  max-width: 600px;
  margin-bottom: 40px;
`

export default styled(Home)`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 20vh;
  min-height: 100vh;
  position: relative;
  background: #333;
  background-image: url("https://astronautlab.co/images/bg.jpg?c86b88c827c5b05fcab3b7f033a37cc4");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
