import React, { useState, useEffect, useContext,useRef } from 'react'
import QuestionnaireItem from './QuestionnaireItem'
import { Alert } from 'react-bootstrap'
import { UserContext } from '../userContext'

const QuestionnaireForm = () => {
  const [questionIndex, setQuestionIndex] = useState(1)
  const [question1, setQuestion1] = useState('')
  const [question2, setQuestion2] = useState(0)
  const [question3, setQuestion3] = useState('')
  const [question4, setQuestion4] = useState('')
  const [question5, setQuestion5] = useState('')
  const [question6, setQuestion6] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [result, setResult] = useState(false)
  const [showCovidMessage, setShowCovidMessage] = useState(false)
  const [showOKMessage, setOKMessage] = useState(false)
  const [questionnaireResults, setQuestionnaireResults] = useState([])
  const userContext = useContext(UserContext)

  const clearStates = () => {
    setQuestionIndex(1)
    setQuestion1('')
    setQuestion2(0)
    setQuestion3('')
    setQuestion4('')
    setQuestion5('')
    setQuestion6('')
  }
  const getQuestionnaireData = useRef(()=>{})
  getQuestionnaireData.current = async () => {
    try {
      const response = await fetch(
        'https://epsilon.run-eu-central1.goorm.io/api/v1/questionnaire/' + userContext.UID
      )
      const data = await response.json()
      setQuestionnaireResults(data)
    } catch (error) {
      console.error(error)
    }
  }

  const sendQuestionnaireToAPI = async () => {
    const QuestionnaireResult = {
      ts: new Date().toISOString(),
      UID: userContext.UID,
      question1: String(question1),
      question2: parseInt(question2),
      question3: String(question3),
      question4: String(question4),
      question5: String(question5),
      question6: String(question6),
      exitQuestion: parseInt(questionIndex),
      result: String(result),
    }
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(QuestionnaireResult),
    }
    try {
      const response = await (
        await fetch('https://epsilon.run-eu-central1.goorm.io/api/v1/questionnaire', fetchOptions)
      ).json()
      if (response.message === 'added') {
        getQuestionnaireData.current();
      } else {
        throw new Error(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleNext = async (question) => {
    switch (question) {
      case 1:
        if (question1 === 'true') {
          setResult(true)
          setShowForm(false)
          await sendQuestionnaireToAPI()
          clearStates()
          setShowCovidMessage(true)
        } else {
          setQuestionIndex(2)
        }
        break
      case 2:
        if (parseInt(question2) === 3) {
          setResult(true)
          setShowForm(false)
          sendQuestionnaireToAPI()
          clearStates()
          setShowCovidMessage(true)
        } else {
          setQuestionIndex(3)
        }
        break
      case 3:
        if (question3 === 'true') {
          setQuestionIndex(4)
        } else {
          setQuestionIndex(5)
        }
        break
      case 4:
        if (question4 === 'true') {
          setResult(true)
          setShowForm(false)
          sendQuestionnaireToAPI()
          clearStates()
          setShowCovidMessage(true)
        } else {
          setResult(false)
          setShowForm(false)
          sendQuestionnaireToAPI()
          clearStates()
          setOKMessage(true)
        }
        break
      case 5:
        if (question5 === 'true') {
          setResult(true)
          setShowForm(false)
          sendQuestionnaireToAPI()
          clearStates()
          setShowCovidMessage(true)
        } else if (question5 === 'idk') {
          setQuestionIndex(6)
        } else {
          setResult(false)
          setShowForm(false)
          sendQuestionnaireToAPI()
          clearStates()
          setOKMessage(true)
        }
        break
      case 6:
        if (question6 === 'true') {
          setResult(true)
          setShowForm(false)
          sendQuestionnaireToAPI()
          clearStates()
          setShowCovidMessage(true)
        } else {
          setResult(false)
          setShowForm(false)
          sendQuestionnaireToAPI()
          clearStates()
          setOKMessage(true)
        }
        break
      default:
        return
    }
  }

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setOKMessage(false)
    }, 10000)
    const timeout2 = setTimeout(() => {
      setShowCovidMessage(false)
    }, 10000)
    if (showCovidMessage && showOKMessage) {
      window.location.replace('/questionnaire')
    }
    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }
  }, [showCovidMessage, showOKMessage])



  useEffect(() => {
    getQuestionnaireData.current()
  }, [])

  if (showForm) {
    return (
      <React.Fragment>
        {questionIndex === 1 && (
          <div className='container'>
            <p>Do you (they) have any of these life-threatening symptoms? </p>
            <ul>
              <li>Bluishlips or face</li>
              <li>Severe and constant pain or pressure in the chest</li>
              <li>
                Extreme difficulty breathing (such as gasping for air, being
                unable to walk or talk without catching your (their) breath,
                severe wheezing, nostrils flaring, grunting, or using extra
                muscles around the chest to help breathe)
              </li>
              <li>Frequent vomitting</li>
            </ul>
            <div className='form-group'>
              <div className='form-check form-check-inline ml-1'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='question1-true'
                  id='question1-true'
                  value='true'
                  checked={question1 === 'true'}
                  onChange={(e) => setQuestion1(e.target.value)}
                />
                <label className='form-check-label' for='question1-true'>
                  Yes
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='question1-false'
                  id='question1-false'
                  value='false'
                  checked={question1 === 'false'}
                  onChange={(e) => setQuestion1(e.target.value)}
                />
                <label className='form-check-label' for='question1-false'>
                  No
                </label>
              </div>
            </div>
            <button className='btn btn-primary' onClick={() => handleNext(1)}>
              Next
            </button>
          </div>
        )}
        {questionIndex === 2 && (
          <div className='container'>
            <p>Do you (they) have any of these life-threatening symptoms? </p>
            <ul>
              <li>
                Signs of low blood pressure (too weak to stand, dizziness,
                lightheaded, feeling cold, pale, clammy skin)(1 point)
              </li>
              <li>
                Dehydration (dry lips and mouth, not urinating much, sunken
                eyes) (1 point)
              </li>
              <li>Refusing to drink liquids (1 point)</li>
            </ul>
            <div className='form-group'>
              <div className='form-check form-check-inline ml-1'>
                <label for='question2' className='form-check-label'>
                  Point :
                </label>
                <input
                  className='form-check-input'
                  type='number'
                  name='question2'
                  id='question2'
                  min='0'
                  max='3'
                  value={question2}
                  onChange={(e) => setQuestion2(e.target.value)}
                />
              </div>
            </div>
            <button className='btn btn-primary' onClick={() => handleNext(2)}>
              Next
            </button>
          </div>
        )}
        {questionIndex === 3 && (
          <div className='container'>
            <p>Are you (they) feeling sick? </p>
            <div className='form-group'>
              <div className='form-check form-check-inline ml-1'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='question3-true'
                  id='question3-true'
                  value='true'
                  checked={question3 === 'true'}
                  onChange={(e) => setQuestion3(e.target.value)}
                />
                <label className='form-check-label' for='question3-true'>
                  Yes
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='question3-false'
                  id='question3-false'
                  value='false'
                  checked={question3 === 'false'}
                  onChange={(e) => setQuestion3(e.target.value)}
                />
                <label className='form-check-label' for='question3-false'>
                  No
                </label>
              </div>
            </div>
            <button className='btn btn-primary' onClick={() => handleNext(3)}>
              Next
            </button>
          </div>
        )}
        {questionIndex === 4 && (
          <div className='container'>
            <p>Do you (they) have any of the following symptoms? </p>
            <ul>
              <li>Sore throat</li>
              <li>Muscle aches or body aches</li>
              <li>Diarrhea</li>
              <li>Stomach ache or pain in abdomen</li>
              <li>New loss of taste or smell</li>
              <li>Congestion or runny nose</li>
            </ul>
            <div className='form-group'>
              <div className='form-check form-check-inline ml-1'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='question4-true'
                  id='question4-true'
                  value='true'
                  checked={question4 === 'true'}
                  onChange={(e) => setQuestion4(e.target.value)}
                />
                <label className='form-check-label' for='question4-true'>
                  Yes
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='question4-false'
                  id='question4-false'
                  value='false'
                  checked={question4 === 'false'}
                  onChange={(e) => setQuestion4(e.target.value)}
                />
                <label className='form-check-label' for='question4-false'>
                  No
                </label>
              </div>
            </div>
            <button className='btn btn-primary' onClick={() => handleNext(4)}>
              Next
            </button>
          </div>
        )}
        {questionIndex === 5 && (
          <div className='container'>
            <p>
              In the last two weeks, did you (they) care for or have close
              contact (within 6 feet of an infected person for a cumulative
              total of 15 minutes in a 24-hour period) with someone with
              symptoms of COVID-19, tested for COVID- 19, or diagnosed with
              COVID-19?
            </p>
            <div className='form-group'>
              <div className='form-check form-check-inline ml-1'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='question5-true'
                  id='question5-true'
                  value='true'
                  checked={question5 === 'true'}
                  onChange={(e) => setQuestion5(e.target.value)}
                />
                <label className='form-check-label' for='question5-true'>
                  Yes
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='question5-false'
                  id='question5-false'
                  value='false'
                  checked={question5 === 'false'}
                  onChange={(e) => setQuestion5(e.target.value)}
                />
                <label className='form-check-label' for='question5-false'>
                  No
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='question5-idk'
                  id='question5-idk'
                  value='idk'
                  checked={question5 === 'idk'}
                  onChange={(e) => setQuestion5(e.target.value)}
                />
                <label className='form-check-label' for='question5-idk'>
                  I don't know
                </label>
              </div>
            </div>
            <button className='btn btn-primary' onClick={() => handleNext(5)}>
              Next
            </button>
          </div>
        )}
        {questionIndex === 6 && (
          <div className='container'>
            <p>
              In the last two weeks, have you (they) attended or spent time in a
              group setting (for example school, dormitory, child care, sporting
              event)?
            </p>
            <div className='form-group'>
              <div className='form-check form-check-inline ml-1'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='question6-true'
                  id='question6-true'
                  value='true'
                  checked={question6 === 'true'}
                  onChange={(e) => setQuestion6(e.target.value)}
                />
                <label className='form-check-label' for='question6-true'>
                  Yes
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='question6-false'
                  id='question6-false'
                  value='false'
                  checked={question6 === 'false'}
                  onChange={(e) => setQuestion6(e.target.value)}
                />
                <label className='form-check-label' for='question6-false'>
                  No
                </label>
              </div>
            </div>
            <button className='btn btn-primary' onClick={() => handleNext(6)}>
              Next
            </button>
          </div>
        )}
      </React.Fragment>
    )
  } else {
    return (
      <div className='container'>
        {showCovidMessage && <Alert variant='danger'>Seek medical help</Alert>}
        {showOKMessage && (
          <Alert variant='success'>No medical help needed</Alert>
        )}
        <button className='btn btn-primary' onClick={() => setShowForm(true)}>
          New Questionnaire
        </button>
        <div className='container'>
          {questionnaireResults.map((q) => {
            return <QuestionnaireItem {...q} />
          })}
        </div>
      </div>
    )
  }
}

export default QuestionnaireForm
