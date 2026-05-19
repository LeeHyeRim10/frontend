import React, { useState } from 'react'

const initState = {
    id : '', name: '',email : '', job: '', pay: null
}

const Register = ({setInfos}) => {
    const [info, setInfo] = useState(initState);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setInfo(prev => (
            {...prev, [name]: value}
        ))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setInfos(prev => (
            [...prev, info]
        ))
    }


  return (
    // name, email, job, pay 입력값 받아오기
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>이름 : </label>
            <input type='text' name="name" value={info.name} onChange={handleChange} placeholder='이름 입력'/>
        </div>
        <div>
            <label>이메일 : </label>
            <input type='email' name="email" value={info.email} onChange={handleChange} placeholder='이메일 입력'/>
        </div>
        <div>
            <label>직업 : </label>
            <input type='text' name="job" value={info.job} onChange={handleChange} placeholder='직업 입력'/>
        </div>
        <div>
            <label>급여 : </label>
            <input type='number' name="pay" value={info.pay} onChange={handleChange} placeholder='월급 입력'/> 
        </div>
        <button>등록하기</button>
      </form>
    </div>
  )
}

export default Register
