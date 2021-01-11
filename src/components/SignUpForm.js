import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [isSmoker, setIsSmoker] = useState('')
  const [haveSickness, setHaveSickness] = useState('')
  const [success, setSucess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = {
      username,
      password,
      age: parseInt(age),
      isSmoker: String(isSmoker),
      coughSickness: String(haveSickness),
    }

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    }
    try {
      const response = await (
        await fetch('https://epsilon.run-eu-central1.goorm.io/api/v1/user/register', fetchOptions)
      ).json()
      if (response.message === 'USER_REGISTERED') {
        setSucess(true)
        window.location.replace('/login')
      } else if (response.message === 'USERNAME_ALREADY_EXISTS') {
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
          Registered successfully. Redirecting to Login Page
          <Redirect to='login' />
        </Alert>
      )}
      {error && <Alert variant='danger'>Registration error</Alert>}
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
        <div class='form-group'>
          <label for='age'>Age</label>
          <input
            type='number'
            class='form-control'
            name='age'
            id='age'
            placeholder='Age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div class='form-group'>
          <label for='cough'>Do you have any sickness related to cough? </label>
          <div class='form-check form-check-inline ml-1'>
            <input
              class='form-check-input'
              type='radio'
              name='cough-true'
              id='cough-true'
              value='true'
              checked={haveSickness === 'true'}
              onChange={(e) => setHaveSickness(e.target.value)}
            />
            <label class='form-check-label' for='cough-true'>
              Yes
            </label>
          </div>
          <div class='form-check form-check-inline'>
            <input
              class='form-check-input'
              type='radio'
              name='cough-false'
              id='cough-false'
              value='false'
              checked={haveSickness === 'false'}
              onChange={(e) => setHaveSickness(e.target.value)}
            />
            <label class='form-check-label' for='cough-false'>
              No
            </label>
          </div>
        </div>
        <div class='form-group'>
          <label for='age'>Do you smoke ? </label>
          <div class='form-check form-check-inline ml-1'>
            <input
              class='form-check-input'
              type='radio'
              name='smoker-true'
              id='smoker-true'
              value='true'
              checked={isSmoker === 'true'}
              onChange={(e) => setIsSmoker(e.target.value)}
            />
            <label class='form-check-label' for='smoker-true'>
              Yes
            </label>
          </div>
          <div class='form-check form-check-inline'>
            <input
              class='form-check-input'
              type='radio'
              name='smoker-false'
              id='smoker-false'
              value='false'
              checked={isSmoker === 'false'}
              onChange={(e) => setIsSmoker(e.target.value)}
            />
            <label class='form-check-label' for='smoker-false'>
              No
            </label>
          </div>
        </div>

        <button type='submit' class='btn btn-primary'>
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?<a href='/login'>Login</a>
      </p>
    </div>
  )
}

export default SignUpForm
