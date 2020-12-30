import React, { useState, useEffect, useContext } from 'react'
import { Alert } from 'react-bootstrap'
import { UserContext } from '../userContext'
import { Redirect } from 'react-router-dom'
const LogInForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSucess] = useState(false)
  const [error, setError] = useState(false)
  const userContext = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = {
      username,
      password,
    }

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    }
    try {
      console.log(JSON.stringify(newUser))
      const response = await (
        await fetch('http://localhost:3002/api/v1/user/login', fetchOptions)
      ).json()
      console.log(response)
      if (response.message === 'AUTH_SUCCESS') {
        userContext.setIsLoggedIn(true)
        userContext.setUID(response.user.UID)
        userContext.setQuestionnaireNeeded(response.user.questionnaireNeeded)
        userContext.setIsCovid(response.user.isCOVID)
        setSucess(true)
      } else if (response.message === 'AUTH_ERROR') {
        setError(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const timeout1 = setTimeout(() => setError(false), 2000)
    return () => {
      clearTimeout(timeout1)
    }
  }, [error])
  return (
    <div class='container'>
      {success && (
        <Alert variant='success'>
          Successfully logged in
          <Redirect to='/symptoms' />
        </Alert>
      )}
      {error && (
        <Alert variant='danger'>Username or Password is not correct</Alert>
      )}
      <form onSubmit={handleSubmit}>
        <div class='form-group'>
          <label for='username'>Username</label>
          <input
            type='text'
            class='form-control'
            name='username'
            id='username'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class='form-group'>
          <label for='exampleInputPassword1'>Password</label>
          <input
            type='password'
            class='form-control'
            name='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' class='btn btn-primary'>
          Log In
        </button>
      </form>
      <p>
        Don't have an account ? <a href='/signup'>Sign Up</a>
      </p>
    </div>
  )
}

export default LogInForm
