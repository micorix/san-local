import React, { useState } from 'react'
import Layout from '../../components/layout'
import styled from '@emotion/styled'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { navigate, Link } from 'gatsby'

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
    }
`
const Err = styled.p`
    color:${props => props.color === 'success' ? 'green' : 'red'};
`
export default props => {
    const [email, setEmail]= useState('')
    const [pass, setPass] = useState('')
    const [message, setMessage] = useState(null)
    const handleSubmit = e => {
        e.preventDefault()
        setMessage(null)
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then((result) => {
            if(result && result.user){
                setMessage({
                    type:'success',
                    text: 'You signed up properly'
                })
                setTimeout(() => {
                    navigate('/owner/dashboard')
                    
                }, 2000)
            }
      }).catch(function(error) {
        setMessage({
            type:'error',
            text: error.message
        })
            setPass('')
          })
    }
    return (
        <Layout>
            <Box>
                <h1>Rejestracja</h1>
                <form onSubmit={handleSubmit}>
                    {message && <Err color={message.type}>{message.text}</Err>}
                    <input placeholder="Email" onChange={e => setEmail(e.target.value)} value={email}/>
                    <input placeholder="Hasło" type="password" value={pass} onChange={e => setPass(e.target.value)} />
                    <button type="submit">Zarejestruj się</button>
                    <Link to="/owner/signin">Zaloguj się</Link>
                </form>
            </Box>
        </Layout>
    )
}