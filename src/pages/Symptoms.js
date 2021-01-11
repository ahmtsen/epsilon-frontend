import React, { useState, useEffect, useContext,useRef } from 'react'
import Axios from 'axios'
import { UserContext } from '../userContext'
import NavbarComp from '../components/NavbarComp'
import SymptomsChart from '../components/SymptomChart'
import SymptomsTable from '../components/SymptomsTable'

const Symptoms = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showSymptomIndex, setShowSymptomIndex] = useState(0)
  const [showStatistics, setShowStatistics] = useState(false)
  const [mainRawData, setMainRawData] = useState([])
  const [mainDataSet, setMainDataSet] = useState([])
  const [tempAvgData, setTempAvgData] = useState([])
  const [tempMaxData, setTempMaxData] = useState([])
  const [tempMinData, setTempMinData] = useState([])
  const [heartAvgData, setheartAvgData] = useState([])
  const [heartMaxData, setheartMaxData] = useState([])
  const [heartMinData, setheartMinData] = useState([])
  const [respAvgData, setRespAvgData] = useState([])
  const [respMaxData, setRespMaxData] = useState([])
  const [respMinData, setRespMinData] = useState([])
  const [bloodAvgData, setBloodAvgData] = useState([])
  const [bloodMaxData, setBloodMaxData] = useState([])
  const [bloodMinData, setBloodMinData] = useState([])
  const [coughCountData, setCoughCountData] = useState([])
  const userContext = useContext(UserContext)

  const getUserData = useRef(()=>{})
  getUserData.current = async (userid) => {
    const response = await Axios({
      method: 'GET',
      url: 'https://epsilon.run-eu-central1.goorm.io/api/v1/symptoms?UID1=' + userContext.UID,
    })
    let data = response.data
    data.sort((a, b) => new Date(a.ts) - new Date(b.ts))
    setMainRawData(data)
    let labels = []
    let chartData = [
      {
        title: 'Temperature',
        data: [],
      },
      {
        title: 'Heart Rate',
        data: [],
      },
      {
        title: 'Respiration Rate',
        data: [],
      },
      {
        title: 'Blood Oxygen',
        data: [],
      },
    ]
    data.forEach((d) => {
      labels.push(new Date(d.ts))
      if (d.temperature) {
        chartData[0].data.push({
          time: new Date(d.ts),
          value: d.temperature,
        })
      }
      if (d.heartRate) {
        chartData[1].data.push({
          time: new Date(d.ts),
          value: d.heartRate,
        })
      }
      if (d.respRate) {
        chartData[2].data.push({
          time: new Date(d.ts),
          value: d.respRate,
        })
      }
      if (d.bloodOxygen) {
        chartData[3].data.push({
          time: new Date(d.ts),
          value: d.bloodOxygen,
        })
      }
    })
    setMainDataSet(chartData)
    //getStats
    const response2 = await fetch(
      'https://epsilon.run-eu-central1.goorm.io/api/v1/statistics/' + userContext.UID
    )
    data = await response2.json()
    const { temperature, respRate, heartRate, bloodOxygen, cough } = data
    setTempAvgData(
      temperature.tempAvg.sort((a, b) => new Date(a.time) - new Date(b.time))
    )
    setTempMaxData(temperature.tempMax)
    setTempMinData(temperature.tempMin)
    setheartAvgData(
      heartRate.heartAvg.sort((a, b) => new Date(a.time) - new Date(b.time))
    )
    setheartMaxData(heartRate.heartMax)
    setheartMinData(heartRate.heartMin)
    setRespAvgData(
      respRate.respAvg.sort((a, b) => new Date(a.time) - new Date(b.time))
    )
    setRespMaxData(respRate.respMax)
    setRespMinData(respRate.respMin)
    setBloodAvgData(
      bloodOxygen.bloodAvg.sort((a, b) => new Date(a.time) - new Date(b.time))
    )
    setBloodMaxData(bloodOxygen.bloodMax)
    setBloodMinData(bloodOxygen.bloodMin)
    setCoughCountData(
      cough.coughCount.sort((a, b) => new Date(a.time) - new Date(b.time))
    )
    setIsLoading(false)
  }

  useEffect(() => {
    getUserData.current()
  }, [])

  if (!isLoading) {
    return (
      <div>
        <NavbarComp />
        <div className='d-flex justify-content-center'>
          <button
            className='btn btn-light'
            onClick={() => setShowSymptomIndex(0)}
          >
            Temperature
          </button>
          <button
            className='btn btn-light'
            onClick={() => setShowSymptomIndex(1)}
          >
            Hearth Rate
          </button>
          <button
            className='btn btn-light'
            onClick={() => setShowSymptomIndex(2)}
          >
            Respiration Rate
          </button>
          <button
            className='btn btn-light'
            onClick={() => setShowSymptomIndex(3)}
          >
            Blood Oxygen
          </button>
          <button
            className='btn btn-light'
            onClick={() => setShowSymptomIndex(4)}
          >
            Cough
          </button>
        </div>
        <div className='d-flex justify-content-center'>
          <button
            className='btn btn-light'
            onClick={() => setShowStatistics(false)}
          >
            Raw Data
          </button>
          <button
            className='btn btn-light'
            onClick={() => setShowStatistics(true)}
          >
            Statistics
          </button>
        </div>
        {showSymptomIndex === 0 &&
          (!showStatistics ? (
            <SymptomsChart
              dataset={mainDataSet[0]}
              color='#ff0000'
              title='Temperature'
              minTick='34'
              maxTick='40'
            />
          ) : (
            <SymptomsChart
              datasets1={tempAvgData}
              color1='#000000'
              title1='Average Temperature'
              datasets2={tempMaxData}
              color2='#ff0000'
              title2='Maximum Temperature'
              datasets3={tempMinData}
              color3='#0000ff'
              title3='Minimum Temperature'
              minTick='33'
              maxTick='40'
            />
          ))}
        {showSymptomIndex === 1 &&
          (!showStatistics ? (
            <SymptomsChart
              dataset={mainDataSet[1]}
              color='#00ff00'
              title='Hearth Rate'
              minTick='55'
              maxTick='115'
            />
          ) : (
            <SymptomsChart
              datasets1={heartAvgData}
              color1='#000000'
              title1='Average Heart Rate'
              datasets2={heartMaxData}
              color2='#ff0000'
              title2='Maximum Heart Rate'
              datasets3={heartMinData}
              color3='#0000ff'
              title3='Minimum Heart Rate'
              minTick='70'
              maxTick='100'
            />
          ))}
        {showSymptomIndex === 2 &&
          (!showStatistics ? (
            <SymptomsChart
              dataset={mainDataSet[2]}
              color='#0000ff'
              title='Respiration Rate'
              minTick='0'
              maxTick='30'
            />
          ) : (
            <SymptomsChart
              datasets1={respAvgData}
              color1='#000000'
              title1='Average Respiration Rate'
              datasets2={respMaxData}
              color2='#ff0000'
              title2='Maximum Respiration Rate'
              datasets3={respMinData}
              color3='#0000ff'
              title3='Minimum Respiration Rate'
              minTick='0'
              maxTick='40'
            />
          ))}
        {showSymptomIndex === 3 &&
          (!showStatistics ? (
            <SymptomsChart
              dataset={mainDataSet[3]}
              color='#000000'
              title='Blood Oxygen'
              minTick='90'
              maxTick='100'
            />
          ) : (
            <SymptomsChart
              datasets1={bloodAvgData}
              color1='#000000'
              title1='Average Blood Oxygen'
              datasets2={bloodMaxData}
              color2='#ff0000'
              title2='Maximum Blood Oxygen'
              datasets3={bloodMinData}
              color3='#0000ff'
              title3='Minimum Blood Oxygen'
              minTick='88'
              maxTick='100'
            />
          ))}
        {showSymptomIndex === 4 && (
          <SymptomsChart
            dataset={{ data: coughCountData }}
            color='#00ff00'
            title='Cough Count'
            minTick='0'
            maxTick='40'
          />
        )}
        <div className='c'>
          <SymptomsTable
            dataset={mainRawData.filter(
              (d) => d.temperature || d.heartRate || d.respRate
            )}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <h1 className='display-1'>Loading...</h1>
      </div>
    )
  }
}

export default Symptoms
