import React, { useState, useContext } from "react"
import styled from "styled-components"
import { MileContext } from "../context/MileContext"

const InputForm = () => {
  const [mileage, setMileage] = useState("")
  const [date, setDate] = useState("")

  const { mileData, submitData } = useContext(MileContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(mileage == "") return
    // console.log(date, mileage)
    submitData(mileage, date)
    setMileage('')
    setDate('')
  }

  const handleMileageChange = (e) => {
    setMileage(e.target.value)
  }

  const handleDateChange = (e) => {
    // console.log(e.target.value)
    setDate(e.target.value)
  }
  return (
    <Wrapper>
      <form>
        {/* <label htmlFor="vin">VIN</label>
        <input type="text" name="vin"  />
        <br /> */}
        <label htmlFor="date">Date: </label>
        <input type="text" value={date} onChange={(e) => handleDateChange(e)} />
        <label htmlFor="date">Mileage: </label>
        <input
          type="number"
          value={mileage}
          required
          onChange={(e) => handleMileageChange(e)}
        />
        <button onClick={(e) => handleSubmit(e)}>ADD</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  form {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }
  label {
    font-size: 1.2rem;
  }
  input {
    width: 50%;
    padding: 15px;
    font-size: 1.3rem;
  }
  button {
    margin: 20px 0;
    padding: 10px 20px;
    background-color: green;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      opacity: 0.9;
    }
    &:active {
      background-color: #4e8500;
    }
  }
  /* border: 1px solid yellow; */
`
export default InputForm
