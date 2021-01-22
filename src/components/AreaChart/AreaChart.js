import React from 'react'
import { Chart } from 'react-charts';
const config = require("../../config.js")
 function AreaChart(props) {
  const data = React.useMemo(
    () => props.data,
    [props.data]
  )

  const series = React.useMemo(
     () => ({
       type: props.type,
     }),
     [props.type]
   )

   const axes = React.useMemo(
   () => config.config[props.type],
   [props.type]
 )
  return (
    <div  style={{height: "250px"}}>
       <Chart data={data} series={series} axes={axes} tooltip />
    </div>
  )
}

export default AreaChart
