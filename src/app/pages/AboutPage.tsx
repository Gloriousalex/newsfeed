import styled from "styled-components"
import { StyledComponent } from "../components/styles"

export const AboutPage = () => {

  return (
    <StyledComponent.HomePageWrapper>
    <StyledInfoText>This site is developed by <strong>Alex Sytnyk</strong> to present his poor developing skills </StyledInfoText>
    </StyledComponent.HomePageWrapper>
  )
}

const StyledInfoText = styled.p`
  position: relative;
  top:20px;
  margin-top: 0%;
`