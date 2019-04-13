import { Link } from 'gatsby'
import styled from 'styled-components'
import React from 'react'

const StyledLogo = styled.h1`
  margin: 0;
  padding: 0;
  font-family: BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen",
    "Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Helvetica","Arial",sans-serif;
  font-size: 42px;
  font-weight: 200;
  line-height: 1;
  letter-spacing: 2px;

  a {
    color: black;    
    text-decoration: none;
  }
`

const Logo = ({ siteTitle }) => (
  <StyledLogo>
    <Link to="/">
      {siteTitle}
    </Link>
  </StyledLogo>
)

export default Logo
