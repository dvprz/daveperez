import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'

import Logo from './logo'

const Hamburger = styled.button`
  border: none;
  background-color: transparent;
  width: 50px;
  height: 50px;
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 20px;
  transition: all 300ms ease;

  :hover {
    background-color: #4f4f4f;

    span {
      background-color: white;
    }
  }

  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: #4f4f4f;
    margin-bottom: 8px;
    transition: all 300ms ease;    
  }

  span:last-of-type {
    margin-bottom: 0;
  }
`

const Button = () => (
  <Hamburger type='button'>
    <span></span>
    <span></span>
    <span></span>
  </Hamburger>
)

const StyledHeader = styled.header`
  margin: 0;
  padding: 0;
`

const StyledHeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledHeaderWrapper>
      <Logo siteTitle={siteTitle} />
      <Button />
    </StyledHeaderWrapper>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
