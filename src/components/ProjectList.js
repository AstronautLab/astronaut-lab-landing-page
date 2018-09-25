import React from "react"
import postieLogo from "../images/postieLogo.png"
import styled from "styled-components"

const ProjectTile = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background: ${props => props.background};
`

const ProjectList = ({ className }) => (
  <ul className={className}>
    <li>
      <ProjectTile href="https://astronautlab.co" background="#fff">
        Our Projects
      </ProjectTile>
    </li>

    <li>
      <ProjectTile href="https://gopostie.com" background="#ff5722">
        <img src={postieLogo} width="80" alt="Postie" />
      </ProjectTile>
    </li>
  </ul>
)

export default styled(ProjectList)`
  display: flex;
  position: absolute;
  list-style: none;
  bottom: 0;
  left: 0;
  height: 120px;
  width: 100%;

  @media only screen and (max-height: 660px) {
    position: relative;
    top: 20vh;
  }
`
