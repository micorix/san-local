import React from 'react'
import { navigate } from 'gatsby'
import * as firebase from 'firebase'

export default props => {
    if(!firebase.auth().currentUser){

        navigate('/owner/signin')
    }else{
        navigate('/owner/dashboard')
    }
    return null
}