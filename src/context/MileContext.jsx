import React, { useState, useEffect } from "react"
const MileContext = React.createContext()

const MileContextProvider = ({ children }) => {
  const [mileData, setMileData] = useState([
    { date: "In service", mile: "0" },
    // { date: "05/08/2017", mile: "7200" },
    // {date: '01/01/2018', mile: '14000'},
    // {date: '05/17/2023', mile: '65507'},
    // {date: '03/15/2022', mile: '49055'},
    // {date: '02/01/2019', mile: '21510'},
    // {date: '02/09/2021', mile: '36020'}
  ])

const deleteRecord = (record) => { 
  if(record == '0') return
  setMileData(
    mileData.filter(item => {
    return record !== item.mile
  } )
  )
  
 }

  const submitData = (mile, date) => {
    // console.log("miledata log", mile, date)
    setMileData((prev) => {
      return [...prev, { date, mile }]
    })
  }

  // console.log(mileData, " in context")
  return (
    <MileContext.Provider value={{ mileData, submitData, deleteRecord }}>
      {children}
    </MileContext.Provider>
  )
}

export { MileContext, MileContextProvider }
