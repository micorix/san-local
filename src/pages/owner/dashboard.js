import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import styled from '@emotion/styled'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { navigate, Link } from 'gatsby'
import SEO from '../../components/seo'

const Box = styled.div`
    padding-top:20vh;
    width:40%;
    margin:auto;
    input{
        width:100%;
        display:block;
    }
    a{
        display:block;
        margin-top:1em;
        font-size:0.8em;
    }
`
const Err = styled.p`
    color:${props => props.color === 'success' ? 'green' : 'red'};
`
export default props => {
    const [placeName, setPlaceName]= useState('')
    const [placeType, setPlaceType]= useState(null)
    const [placeLat, setPlaceLat]= useState('')
    const [placeLng, setPlaceLng]= useState('')
    const [placeGoogleMapsURI, setPlaceGoogleMapsURI]= useState('')
    const [placeWebsiteURI, setPlaceWebsiteURI]= useState('')
    const [message, setMessage] = useState(null)
    if(!firebase.auth().currentUser){

        navigate('/owner/signin')
        return null
    }
    
    const userId = firebase.auth().currentUser.uid

    useEffect(() => {
        firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
           setPlaceName((snapshot.val() && snapshot.val().placeName) || '')
           setPlaceType((snapshot.val() && snapshot.val().placeType) || null)
           setPlaceLat((snapshot.val() && snapshot.val().placeLat) || '')
           setPlaceLng((snapshot.val() && snapshot.val().placeLng) || '')
          })
    }, [])
    const signOut = () => {
        firebase.auth().signOut().then(function() {
           navigate('/')
          })
    }
    const handleSubmit = e => {
        e.preventDefault()
        setMessage(null)
        firebase.database().ref('users/' + userId).set({
            placeName,
            placeType,
            placeLng,
            placeLat,
            placeWebsiteURI,
            placeGoogleMapsURI
          })
        .then((result) => {
           
                setMessage({
                    type:'success',
                    text: 'You saved changes'
                })
            
      }).catch(function(error) {
        setMessage({
            type:'error',
            text: error.message
        })
 
          })
    }
    return (
        <Layout>
            <SEO title="Moje miejsce" />
            <Box>
                <h1>Moje miejsce</h1>
                <form onSubmit={handleSubmit}>
                    {message && <Err color={message.type}>{message.text}</Err>}
                    <input placeholder="Nazwa" onChange={e => setPlaceName(e.target.value)} value={placeName}/>
                    <select onChange={e => setPlaceType(e.target.value)} value={placeType}>
                        <option selected tabIndex="-1" disabled>Typ miejsca</option>
                        <option value="coffee">Kawiarnia</option>
                        <option value="food">Restauracja/bar</option>
                    </select>
                    <input placeholder="Długość geograficzna" type="number" value={placeLng} onChange={e => setPlaceLng(e.target.value)} />
                    <input placeholder="Szerokość geograficzna" type="number" value={placeLat} onChange={e => setPlaceLat(e.target.value)} />
                    <input placeholder="Adres miejsca w Mapach Google (z https)" value={placeGoogleMapsURI} onChange={e => setPlaceGoogleMapsURI(e.target.value)} />
                    <input placeholder="Strona internetowa (z http/https)" value={placeWebsiteURI} onChange={e => setPlaceWebsiteURI(e.target.value)} />
                   <button type="submit">Zapisz</button>
                    <a href="#" onClick={signOut}>Wyloguj się</a>
                </form>
            </Box>
        </Layout>
    )
}