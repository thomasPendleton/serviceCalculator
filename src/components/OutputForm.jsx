import React, { useContext } from "react"
import { MileContext } from "../context/MileContext"
import styled from "styled-components"
import {BiTrash} from 'react-icons/bi'

// Need to be able to delete a single record

const OutputForm = () => {
  const { mileData, submitData, deleteRecord } = useContext(MileContext)

  return (
    <Wrapper>
      {mileData
        .sort((a, b) => a.mile - b.mile)
        .map((item, idx) => {
          const { date, mile } = item

          const deviationTotal = idx > 0 && item.mile - mileData[idx - 1].mile
          const numberMile = +mile
          return (
            <div key={idx}>

              <button onClick={(e) => deleteRecord(mile)}><BiTrash/></button>


              <h2 contentEditable="true" className="date">{date}</h2>
              {/* <h2 contentEditable="true">{item.mile}</h2> */}
              <h2>{numberMile.toLocaleString()}</h2>
              <h2 className={deviationTotal > 15000 ? "deviation" : null}>
                {deviationTotal ? deviationTotal.toLocaleString() : null}
              </h2>
            </div>
          )
        })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 500px;
  div {
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr;
    /* grid-template-rows: 50px; */
    h2 {
      margin: 5px 10px;
      /* background-color: yellow; */
    }
    button {
      display: grid;
      place-content: center;
      cursor: pointer;

      font-size: 1.5rem;
      margin: 5px 5px;
      background-color: orangered;
    }
    .deviation {
      background-color: red;
    }
    .date{
      max-height: 100%;
    }
  }
`
export default OutputForm
