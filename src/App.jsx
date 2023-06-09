import styled from "styled-components"
import DisplayBox from "./components/DisplayBox"

function App() {
  return (
    <Wrapper>
      <h1>Mileage Calculator</h1>

      <DisplayBox></DisplayBox>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  text-align: center;
  h1 {
    color: #333;
  }
`

export default App
