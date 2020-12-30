import React from 'react'

const SymptomsTable = ({ dataset }) => {
  console.log(dataset)
  return (
    <div className='container '>
      <table class='table'>
        <thead>
          <tr>
            <th id='ts' scope='col'>
              Timestamp
            </th>
            <th id='temp' scope='col'>
              Temperature
            </th>
            <th id='hearth' scope='col'>
              Heart Rate
            </th>
            <th id='resp' scope='col'>
              Respiration Rate
            </th>
          </tr>
        </thead>
        <tbody id='table'>
          {dataset.map((d) => {
            return (
              <tr class='bg-light'>
                <th scope='row'>{new Date(d.ts).toLocaleString()}</th>
                <td>{d.temperature}</td>
                <td>{d.heartRate}</td>
                <td>{d.respRate}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default SymptomsTable
