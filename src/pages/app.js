import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from '@emotion/styled'
import mapboxgl from 'mapbox-gl'
import * as firebase from 'firebase'

const MapWrapper = styled.div`
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  height:100vh;
  .map-marker{
    img{
      width:3em;
    }
  }
  .marker-popup{
    .mapboxgl-popup-close-button:hover{
      color:black !important;
    }
    h3{
      color:#CD3333;
    }
    a{
      display:block;
      margin:10px 0;
    }
  }
`

export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      spots: [],
      markers: []
    }
    this.mapContainer = React.createRef()
   

  }
  setMarkers(data){
    const map = this.map
    this.state.markers.forEach(marker => marker.remove())
    this.setState({
      markers: this.state.spots.map(spot => {
        if(!spot || !spot.placeName){
          return {
            remove: () => null
          }
        }
        let markerEl = document.createElement('span')
        markerEl.innerHTML = `<span>
        ${spot.placeType === 'food' ? `<img src="${require('../images/hamburger.svg')}" />` : `<img src="${require('../images/kawa.svg')}" />`}
       </span>`
        markerEl.classList.add('map-marker')
        let popup = new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(`
            <div class="marker-popup">
            <h4>${spot.placeName}</h4>
            ${spot.placeGoogleMapsURI ? `<a href="${spot.placeGoogleMapsURI}" target="_blank">Wskazówki dojazdu</a>` : ''}
            ${spot.placeWebsiteURI ? `<a href="${spot.placeWebsiteURI}" target="_blank">Strona internetowa</a>` : ''}
            ${(!spot.placeGoogleMapsURI || !spot.placeWebsiteURI) ? `No data available :(` : ''}
            </div>
        `)
        
        return new mapboxgl.Marker({
          element: markerEl
        })
    .setLngLat([spot.placeLng, spot.placeLat])
    .setPopup(popup)
    .addTo(map)
    })
    })
  }
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      accessToken: 'pk.eyJ1IjoibWljb3JpeCIsImEiOiJjanJ0cjN2Y2IwcjZiM3ltaWw4a2EwMzNlIn0.9aYkpqbDoPBGO3hTuIvdvw',
      zoom: [12],
      center: [21.017532, 52.237049]
    })
    this.map.addControl(new mapboxgl.NavigationControl())
    firebase.database().ref('users')
    .on('value', snapshot => {
      this.setState({
        spots: Object.values(snapshot.val())
      }, () => this.setMarkers.call(this))
      
    })
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <Layout>
        <SEO title="Aplikacja" />
        <MapWrapper ref={el => this.mapContainer = el} />
      </Layout>
    )
  }
}