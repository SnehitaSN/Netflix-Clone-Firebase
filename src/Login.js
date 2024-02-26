import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from './firebase.js'
import { useNavigate } from 'react-router-dom'

function Login(data) 
{
    console.log(data)
    function signIn()
    {
        signInWithPopup(auth, provider)
        .then(function(result)
        {
            data.setIsLogged(true)
            console.log(data.isLogged)
            window.location.pathname= "/home"
        })
        .catch(function(error)
        {
            console.log(error)
        })
    }

  return (
    <div>
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Login
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" style={{marginRight: 150}} onClick={signIn}>Continue with Google</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}



export default Login