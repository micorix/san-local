import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from '@emotion/styled'
import mapboxgl from 'mapbox-gl'
import * as firebase from 'firebase'

const MapWrapper = styled.div`
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css');
  height:100vh;
`

export default class extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      spots: []
    }
    this.mapContainer = React.createRef()
    firebase.database().ref('users')
    .on('value', snapshot => {
      this.setState({
        spots: Object.values(snapshot.val())
      }, () => this.setMarkers())
      
    })
    this.setMarkers = this.setMarkers.bind(this)
  }
  setMarkers(data){
    this.state.spots.forEach(spot => {
      let markerEl = document.createElement('span')
      markerEl.classList.add('map-marker')
      let marker = new mapboxgl.Marker({
        // element: markerEl
      })
  .setLngLat([spot.placeLng, spot.placeLat])
  .addTo(this.map)
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
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <Layout>
        <MapWrapper ref={el => this.mapContainer = el} />
      </Layout>
    )
  }
}