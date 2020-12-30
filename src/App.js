import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { UserContext } from './userContext'
//pages
import Symptoms from './pages/Symptoms'
import Questionnaire from './pages/Questionnaire'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [UID, setUID] = useState('')
  const [questionnaireNeeded, setQuestionnaireNeeded] = useState(false)
  const [isCovid, setIsCovid] = useState(false)

  const userSettings = {
    isLoggedIn,
    UID,
    questionnaireNeeded,
    isCovid,
    setIsLoggedIn,
    setUID,
    setQuestionnaireNeeded,
    setIsCovid,
  }
  return (
    <UserContext.Provider value={userSettings}>
      <Router>
        <Switch>
          {isLoggedIn && (
            <>
              <Route exact path='/'>
                <Redirect to='/symptoms' />
              </Route>
              <Route path='/symptoms'>
                <Symptoms />
              </Route>
              <Route path='/questionnaire'>
                <Questionnaire />
              </Route>
              <Route path='/profile'>
                <Profile />
              </Route>
              <Route path='/SignUp'>
                <SignUp />
              </Route>
              <Route path='/LogIn'>
                <LogIn />
              </Route>
            </>
          )}
          {!isLoggedIn && (
            <>
              <Route exact path='/'>
                <Redirect to='/LogIn' />
              </Route>
              <Route path='/symptoms'>
                <Redirect to='/LogIn' />
              </Route>
              <Route path='/questionnaire'>
                <Redirect to='/LogIn' />
              </Route>
              <Route path='/profile'>
                <Redirect to='/LogIn' />
              </Route>
              <Route path='/SignUp'>
                <SignUp />
              </Route>
              <Route path='/LogIn'>
                <LogIn />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App
