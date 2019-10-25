import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import coffeeImage from '../images/coffee.jpg'
import styled from '@emotion/styled'


const Jumbotron = styled.div`
  height:100vh;
  display:flex;
  // justify-content:center;
  align-items:center;
  background: url(${coffeeImage}) no-repeat;
  background-size: cover;
  background-position:center center;
  div{
    // text-align:center;
    margin-left:10%;
  }
  h1{
    color:white;
    font-size:5em;
    font-weight:bold;
  }
  h2{
    color:rgba(255,255,255,0.9);
  }
`
const AboutUs = styled.section`
  background:white;
  min-height:40vh;
  margin-left:2em;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron>
      <div>
        <h1>San local</h1>
        <h2>Explore local bussinesses</h2>
      </div>

    </Jumbotron>
    <AboutUs>
      <h1>About us</h1>
    </AboutUs>
  </Layout>
)

export default IndexPage
