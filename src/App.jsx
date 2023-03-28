import { useState } from 'react'
import { Box, Button, Heading, VStack } from "@chakra-ui/react"

import Header from "./components/Header/Header"
import List from './components/List/List'
//import DrawerExample from './components/Drawer/Drawer'

import img0 from "./assets/background/img-10.jpg"
import img1 from "./assets/background/img-1.jpg"
import img2 from "./assets/background/img-2.jpg"
import img3 from "./assets/background/img-3.jpg"
import img4 from "./assets/background/img-4.jpg"
import img5 from "./assets/background/img-5.jpg"
import img6 from "./assets/background/img-6.jpg"
import img7 from "./assets/background/img-7.jpg"
import img8 from "./assets/background/img-8.jpg"
import img9 from "./assets/background/img-9.jpg"
import img10 from "./assets/background/img-11.jpg"
import { getItemLS } from './utils/js/utils'

const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

function App() {
  const [value, setValue] = useState({
    task: "",
    filter:"all",
    list:getItemLS('tasks')||[],
  })
 
  const [index, setIndex] = useState(10) 
  
  return (
  <VStack  
    minHeight={'100vh'} 
    width={'100%'}  
    bgImage={`url(${images[index]})`} 
    backgroundSize={'cover'}>
    <Button 
      type={'button'}
      size={'s'}
      fontFamily={'monospace'}
      alignSelf={'flex-start'}//en mobile no! arreglar
      //color={"current"}
      colorScheme={'orange'} 
      margin={8} 
      padding={1}
      border={'current'}
      onClick={()=>setIndex(Math.floor(Math.random()*10))} 
      children={'Cambiar tema'}>    
    </Button>
    <Box   
      width={'60%'} 
      background={'orange.400'} 
      boxShadow={'dark-lg'} 
      p={6} 
      rounded={'md'}
      display={'flex'} 
      justifyContent={'center'} 
      alignItems={'center'} 
      padding={5}
      gap={3}>
      <VStack 
        whidth='100%' >
        <Heading 
          textAlign={'center'}>
          ToDo List ✔   
        </Heading>
        <Header 
          value={value} 
          setValue={setValue} 
        />
        <List 
          value={value} 
          setValue={setValue}  
        />
      </VStack>
    </Box>
  </VStack>  
  )
} 

export default App