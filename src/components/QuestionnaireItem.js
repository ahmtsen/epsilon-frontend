import React, { useState } from 'react'

import { FaPlus, FaMinus } from 'react-icons/fa'

const QuestionnaireItem = ({
  exitQuestion,
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  result,
  ts,
}) => {
  const [show, setShow] = useState(false)

  if (exitQuestion === 1) {
    return (
      <div class='card text-white bg-danger mb-3'>
        <div class='card-header'>
          {new Date(ts).toLocaleString()}
          {show ? (
            <FaMinus
              style={{ float: 'right' }}
              onClick={() => setShow(!show)}
            />
          ) : (
            <FaPlus style={{ float: 'right' }} onClick={() => setShow(!show)} />
          )}
        </div>
        {show && (
          <div class='card-body'>
            <h5 class='card-title'>Question 1</h5>
            <p class='card-text'>
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
              <h2>Answer: Yes</h2>
            </p>
          </div>
        )}
      </div>
    )
  }

  if (exitQuestion === 2) {
    return (
      <div class='card text-white bg-danger mb-3'>
        <div class='card-header'>
          {new Date(ts).toLocaleString()}
          {show ? (
            <FaMinus
              style={{ float: 'right' }}
              onClick={() => setShow(!show)}
            />
          ) : (
            <FaPlus style={{ float: 'right' }} onClick={() => setShow(!show)} />
          )}
        </div>
        {show && (
          <div class='card-body'>
            <h5 class='card-title'>Question 1</h5>
            <p class='card-text'>
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
              <h2>Answer: No</h2>
            </p>
            <h5 class='card-title'>Question 2</h5>
            <p class='card-text'>
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
              <h2>Point: 3</h2>
            </p>
          </div>
        )}
      </div>
    )
  }

  if (exitQuestion === 4 && question4 === 'true') {
    return (
      <div class='card text-white bg-danger mb-3'>
        <div class='card-header'>
          {new Date(ts).toLocaleString()}
          {show ? (
            <FaMinus
              style={{ float: 'right' }}
              onClick={() => setShow(!show)}
            />
          ) : (
            <FaPlus style={{ float: 'right' }} onClick={() => setShow(!show)} />
          )}
        </div>
        {show && (
          <div class='card-body'>
            <h5 class='card-title'>Question 1</h5>
            <p class='card-text'>
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
              <h2>Answer: No</h2>
            </p>
            <h5 class='card-title'>Question 2</h5>
            <p class='card-text'>
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
              <h2>Point: {question2}</h2>
            </p>
            <h5 class='card-title'>Question 3</h5>
            <p class='card-text'>
              <p>Are you (they) feeling sick? </p>
              <h2>Answer: Yes</h2>
            </p>
            <h5 class='card-title'>Question 4</h5>
            <p class='card-text'>
              <p>Do you (they) have any of the following symptoms? </p>
              <ul>
                <li>Sore throat</li>
                <li>Muscle aches or body aches</li>
                <li>Diarrhea</li>
                <li>Stomach ache or pain in abdomen</li>
                <li>New loss of taste or smell</li>
                <li>Congestion or runny nose</li>
              </ul>
              <h2>Answer: Yes</h2>
            </p>
          </div>
        )}
      </div>
    )
  }

  if (exitQuestion === 4 && question4 === 'false') {
    return (
      <div class='card text-white bg-success mb-3'>
        <div class='card-header'>
          {new Date(ts).toLocaleString()}
          {show ? (
            <FaMinus
              style={{ float: 'right' }}
              onClick={() => setShow(!show)}
            />
          ) : (
            <FaPlus style={{ float: 'right' }} onClick={() => setShow(!show)} />
          )}
        </div>
        {show && (
          <div class='card-body'>
            <h5 class='card-title'>Question 1</h5>
            <p class='card-text'>
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
              <h2>Answer: No</h2>
            </p>
            <h5 class='card-title'>Question 2</h5>
            <p class='card-text'>
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
              <h2>Point: {question2}</h2>
            </p>
            <h5 class='card-title'>Question 3</h5>
            <p class='card-text'>
              <p>Are you (they) feeling sick? </p>
              <h2>Answer: Yes</h2>
            </p>
            <h5 class='card-title'>Question 4</h5>
            <p class='card-text'>
              <p>Do you (they) have any of the following symptoms? </p>
              <ul>
                <li>Sore throat</li>
                <li>Muscle aches or body aches</li>
                <li>Diarrhea</li>
                <li>Stomach ache or pain in abdomen</li>
                <li>New loss of taste or smell</li>
                <li>Congestion or runny nose</li>
              </ul>
              <h2>Answer: No</h2>
            </p>
          </div>
        )}
      </div>
    )
  }

  if (exitQuestion === 5 && question5 === 'true') {
    return (
      <div class='card text-white bg-danger mb-3'>
        <div class='card-header'>
          {new Date(ts).toLocaleString()}
          {show ? (
            <FaMinus
              style={{ float: 'right' }}
              onClick={() => setShow(!show)}
            />
          ) : (
            <FaPlus style={{ float: 'right' }} onClick={() => setShow(!show)} />
          )}
        </div>
        {show && (
          <div class='card-body'>
            <h5 class='card-title'>Question 1</h5>
            <p class='card-text'>
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
              <h2>Answer: No</h2>
            </p>
            <h5 class='card-title'>Question 2</h5>
            <p class='card-text'>
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
              <h2>Point: {question2}</h2>
            </p>
            <h5 class='card-title'>Question 3</h5>
            <p class='card-text'>
              <p>Are you (they) feeling sick? </p>
              <h2>Answer: No</h2>
            </p>
            <h5 class='card-title'>Question 5</h5>
            <p class='card-text'>
              <p>
                In the last two weeks, did you (they) care for or have close
                contact (within 6 feet of an infected person for a cumulative
                total of 15 minutes in a 24-hour period) with someone with
                symptoms of COVID-19, tested for COVID- 19, or diagnosed with
                COVID-19?
              </p>
              <h2>Answer: Yes</h2>
            </p>
          </div>
        )}
      </div>
    )
  }

  if (exitQuestion === 5 && question5 === 'false') {
    return (
      <div class='card text-white bg-success mb-3'>
        <div class='card-header'>
          {new Date(ts).toLocaleString()}
          {show ? (
            <FaMinus
              style={{ float: 'right' }}
              onClick={() => setShow(!show)}
            />
          ) : (
            <FaPlus style={{ float: 'right' }} onClick={() => setShow(!show)} />
          )}
        </div>
        {show && (
          <div class='card-body'>
            <h5 class='card-title'>Question 1</h5>
            <p class='card-text'>
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
              <h2>Answer: No</h2>
            </p>
            <h5 class='card-title'>Question 2</h5>
            <p class='card-text'>
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
              <h2>Point: {question2}</h2>
            </p>
            <h5 class='card-title'>Question 3</h5>
            <p class='card-text'>
              <p>Are you (they) feeling sick? </p>
              <h2>Answer: No</h2>
            </p>
            <h5 class='card-title'>Question 5</h5>
            <p class='card-text'>
              <p>
                In the last two weeks, did you (they) care for or have close
                contact (within 6 feet of an infected person for a cumulative
                total of 15 minutes in a 24-hour period) with someone with
                symptoms of COVID-19, tested for COVID- 19, or diagnosed with
                COVID-19?
              </p>
              <h2>Answer: No</h2>
            </p>
          </div>
        )}
      </div>
    )
  }

  if (exitQuestion === 6 && question6 === 'false') {
    return (
      <div class='card text-white bg-success mb-3'>
        <div class='card-header'>
          {new Date(ts).toLocaleString()}
          {show ? (
            <FaMinus
              style={{ float: 'right' }}
              onClick={() => setShow(!show)}
            />
          ) : (
            <FaPlus style={{ float: 'right' }} onClick={() => setShow(!show)} />
          )}
        </div>
        {show && (
          <div class='card-body'>
            <h5 class='card-title'>Question 1</h5>
            <p class='card-text'>
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
              <h2>Answer: No</h2>
            </p>
            <h5 class='card-title'>Question 2</h5>
            <p class='card-text'>
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
              <h2>Point: {question2}</h2>
            </p>
            <h5 class='card-title'>Question 3</h5>
            <p class='card-text'>
              <p>Are you (they) feeling sick? </p>
              <h2>Answer: No</h2>
            </p>
            <h5 class='card-title'>Question 5</h5>
            <p class='card-text'>
              <p>
                In the last two weeks, did you (they) care for or have close
                contact (within 6 feet of an infected person for a cumulative
                total of 15 minutes in a 24-hour period) with someone with
                symptoms of COVID-19, tested for COVID- 19, or diagnosed with
                COVID-19?
              </p>
              <h2>Answer: I don't know</h2>
            </p>
            <h5 class='card-title'>Question 6</h5>
            <p class='card-text'>
              <p>
                In the last two weeks, have you (they) attended or spent time in
                a group setting (for example school, dormitory, child care,
                sporting event)?
              </p>
              <h2>Answer: Yes</h2>
            </p>
          </div>
        )}
      </div>
    )
  }

  if (exitQuestion === 6 && question6 === 'true') {
    return (
      <div class='card text-white bg-danger mb-3'>
        <div class='card-header'>
          {new Date(ts).toLocaleString()}
          {show ? (
            <FaMinus
              style={{ float: 'right' }}
              onClick={() => setShow(!show)}
            />
          ) : (
            <FaPlus style={{ float: 'right' }} onClick={() => setShow(!show)} />
          )}
        </div>
        {show && (
          <div class='card-body'>
            <h5 class='card-title'>Question 1</h5>
            <p class='card-text'>
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
              <h2>Answer: No</h2>
            </p>
            <h5 class='card-title'>Question 2</h5>
            <p class='card-text'>
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
              <h2>Point: {question2}</h2>
            </p>
            <h5 class='card-title'>Question 3</h5>
            <p class='card-text'>
              <p>Are you (they) feeling sick? </p>
              <h2>Answer: No</h2>
            </p>
            <h5 class='card-title'>Question 5</h5>
            <p class='card-text'>
              <p>
                In the last two weeks, did you (they) care for or have close
                contact (within 6 feet of an infected person for a cumulative
                total of 15 minutes in a 24-hour period) with someone with
                symptoms of COVID-19, tested for COVID- 19, or diagnosed with
                COVID-19?
              </p>
              <h2>Answer: I don't know</h2>
            </p>
            <h5 class='card-title'>Question 6</h5>
            <p class='card-text'>
              <p>
                In the last two weeks, have you (they) attended or spent time in
                a group setting (for example school, dormitory, child care,
                sporting event)?
              </p>
              <h2>Answer: No</h2>
            </p>
          </div>
        )}
      </div>
    )
  }

  return (
    <React.Fragment>
      <div class='card text-white bg-danger mb-3'>
        <h1>ERROR</h1>
      </div>
    </React.Fragment>
  )
}

export default QuestionnaireItem
