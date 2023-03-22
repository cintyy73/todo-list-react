import { useState } from 'react'

import { Box, Heading } from "@chakra-ui/react"
import Header from "./components/Header/Header"
import List from './components/List/List'
function App() {
  const [value, setValue] = useState({
    task: "",
    filter:"all",
    list:[
      {
        task:'',
        id:'',
        complete: false
      }
    ]
  })

  // const [index, setIndex] = useState([0])
  //const images = ["url('./assets/background/fractal-3.jpg')"]
  
  // const handdleIndex = () => {
  //   index = Math.floor(Math.random()*10)
  //   if(index === Math.floor(Math.random()*10)){
  //     index = Math.floor(Math.random()*10)
  //   }
  //   setBackground(index)
  //}
  //agregar a box bgImage={images[index]}

  return (
    <Box>
      <Heading>TOdo List ✔</Heading>
      <Header value={value} setValue={setValue} />
      <List value={value} />
    </Box>
  )
}

{/* <button onClick={handdleIndex}>
click
</button> */}
export default App