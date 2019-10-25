import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import coffeeImage from '../images/coffee.jpg'
import styled from '@emotion/styled'


const Jumbotron = styled.div`
  height:90vh;
  display:flex;
  // justify-content:center;
  align-items:center;
  background: url(${coffeeImage}) no-repeat;
  clip-path: polygon(0 0,100% 0,100% 100%,0 90%);
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
  a{
    background:black;
    color:white;
    padding:10px;
    font-size:1.5em;
    marg                                          
  }
`
const AboutUs = styled.section`
  background:white;
  min-height:40vh;
  margin-left:2em;
`
const Container = styled.div`
width:75%;
margin:auto;
p{
  line-height:2em;
  font-size:1.2em;
  color:#777;
}
h1{
  letter-spacing:.8em;
  margin-bottom:2em;
}
`
const Button = styled(Link)`

`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron>
      <div>
        <h1>San local</h1>
        <h2>Exploruj lokalną gastronomię</h2>
      <Button to="/app">Sprawdź, jak to działa</Button>
      </div>

    </Jumbotron>
    <AboutUs>
      
      <Container>
      <h1>O Nas</h1>
        <p>San Local pomoże ci w znalezieniu lokalnych gastronomii. Jeśli
jesteś turystą to dla ciebie świetna okazja do lepszego poznania okolicy, do
której podróżujesz. Na razie aplikacja działa tylko na terenie Warszawy,
planujemy update w przyszłości. Jeżeli jesteś miejscowym, to nasza
aplikacja pokaże ci ciekawe miejsca na posiłek lub na spędzenie przerwy
podczas pracy, zamiast kolejnego burgera.  Na specjalnej mapie możesz odkrywać
miejscowe kawiarnie i restauracje i dokonać wybo, aby wspierać lokalnych przedsiębiorców. Jak dołączyć? - po
prostu instalujesz i szukasz czegoś dla siebie. Bez rejestracji i podawania
danych osobowych. <br /><Link to="/app">Dołącz już dziś do społeczności San Local.</Link></p>

      </Container>
    
    <Container>
    <h1>Dla przedsiębiorców</h1>
      <p>
      Jeśli masz biznes gastronomiczny, ale nie wiesz jak się wybić, to San Local pomoże ci rozwinąć skrzydła! Zasada działania aplikacji jest
prosta, ty udostępniasz nam dane Swojego lokalu, a my umieszczamy go
na specjalnej mapie, którą udostępniamy potencjalnym konsumentom. Jak
na razie działamy tylko w Warszawie, ale w przyszłości planujemy
ekspansję. Co nas wyróżnia? To, że wspieramy lokalne biznesy, stronimy o
„sieciówek” i globalnych korporacji.
      </p>
      <h3>Jak dołączyć do społeczności przedsiębiorców w San Local?</h3>
      <p>
      <Link to="/owner/signup">Zarejestruj się</Link> (wpisz nazwę lokalu i koordynaty do
formularza kontaktowego.
      </p>
    </Container>
    </AboutUs>
  </Layout>
)

export default IndexPage
