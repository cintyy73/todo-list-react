import { useState } from 'react'
import { Box, Button, Heading, VStack, Center} from "@chakra-ui/react"
import { getItemLS } from './utils/js/utils'

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


const images = [img10, img1, img2, img3, img4, img5, img6, img7, img8, img9, img0]

function App() {
  const [value, setValue] = useState({
    task: "",
    filter:"all",
    list:getItemLS('tasks')||[],
  })
 
  const [index, setIndex] = useState(0) 
  
  return (
  <Center  
    minHeight='100vh' 
    width='100vw'  
    bgImage={`url(${images[index]})`} 
    backgroundSize='cover'>
   
    <Box   
      width={{base:'80%', md:'60%'}} 
      minHeigth='90vh'
      marginTop={8}
      background='rgba(246, 178, 107, 0.2)'
      boxShadow='dark-lg'
      rounded='md'
      display='flex'
      justifyContent='space-around'
      padding={5}
      gap={3}
    >

      <VStack>
        <Heading 
          color='rgba(0, 0, 0, 1)'
          textAlign='center'
        >
          <Button 
            display={{base:'none', md:'inline'}}
            type='button'
            size='sm'
            fontFamily='monospace'
           
            colorScheme='orange'
            bgImage={`url(${images[index +1 || index-1]})`}
            backgroundSize='cover'
            margin={8} 
            children='Tema'
            padding={1}
            onClick={()=>setIndex(Math.floor(Math.random()*10))} 
          >  
          </Button> 
          
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
  </Center>  
  )
} 

export default App