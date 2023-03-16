import React from "react"
import styled from "styled-components"
import InputForm from "./InputForm"
import OutputForm from "./OutputForm"

const DisplayBox = () => {
  return (
    <Wrapper>
      <InputForm></InputForm>
      <OutputForm></OutputForm>
    </Wrapper>
  )
}

const Wrapper = styled.main`

  margin: 0 auto;
  width: clamp(50%, 90%, 600px ) ;
  /* border: 1px solid red; */
  height: 100vh;
`

export default DisplayBox
