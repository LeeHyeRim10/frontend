import React, { useState } from 'react'
import EmployeeTable from '../no2_components/employee/EmployeeTable';
import Register from '../no2_components/employee/Register';

const initState = [
  {id : 1, name : "John", email : "testttt@tttt.com", job: "frontend", pay: 600},
  {id : 2, name : "qqqq", email : "qqqq@tttt.com", job: "backend", pay: 600},
  {id : 3, name : "wwww", email : "wwww@tttt.com", job: "db", pay: 600},
  {id : 4, name : "eeee", email : "eeee@tttt.com", job: "ai", pay: 600}
]

const EmployeePage = () => {

  const [infos, setInfos] = useState(initState); // state 구성


  return (
    <div>
      <EmployeeTable infos={infos}/>
      <Register setInfos={setInfos}/>
    </div>
  )
}

export default EmployeePage
