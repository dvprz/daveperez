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

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      display: flex;
    }
  }
`

const Navigation = () => (
  <StyledNavigation>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/">Go to About</Link>
      </li>      
    </ul>
  </StyledNavigation>
)

export default Navigation
