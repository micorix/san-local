/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Link } from "gatsby"

require('normalize.css')
const LayoutWrapper = styled.div`
  *{
    font-family: 'Roboto Mono';
  }
  h1,h1,h3,h4,h5,h6{
    font-family:'Poppins';
  }
  input, select{
    padding:5px;
    margin:10px;
    border:2px solid black;
    outline: 2px dashed #eee;
  }
  button{
    cursor:pointer;
    padding:5px;
    margin:10px;
    border:2px solid black;
    background:black;
    color:white;
    outline: 2px dashed #eee;
  }


  display:grid;
  grid-template-columns:1fr 12fr;

  aside{
    background:black;
    width: calc(1/13 * 100%);
    top:0;
    left:0;
    height:100%;
    position:fixed;
  }
  a{
    all:unset;
    cursor:pointer;
    
    text-decoration:underline;
    &:hover{
      background:black;
      color:white;
    }
  }
`
const Brand = styled.h1`
  color:white;
  text-align:center;
  margin:10px 0;
  padding:0;
`
const Menu = styled.div`
  a{
    display:block;
    color:white;
    margin:1em 0;
    padding: 0 10px;
    font-size:1.4em;
    text-align:center;
    text-decoration:none;
    &:hover{
      text-decoration:underline;
    }
  }
`
const Layout = ({ children }) => {

  return (
    <LayoutWrapper>
      <aside>
    <Brand>S</Brand>
    <Menu>
      <Link to="/">O Nas</Link>
      <Link to="/app">Aplikacja</Link>
      <Link to="/owner">Strefa ownera</Link>
    </Menu>
      </aside>
      <div></div>
        <main>{children}</main>
        
      
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
