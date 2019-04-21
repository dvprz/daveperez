import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'

const StyledNavigation = styled.nav`
  margin: 0;
  padding: 0;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;  
  bottom: 0;
  background-color: #4f4f4f;
  padding: 20px;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;    

    li {
      display: inherit;
      margin: 0 30px;
    }
  }

  a {
    color: white;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

const Navigation = () => (
  <StyledNavigation>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/about/">Resume</Link>
      </li>      
    </ul>
  </StyledNavigation>
)

export default Navigation
