import { 
  Box,
  Button,
  Heading,
  VStack,
  HStack,
  Tooltip,
  Avatar,
  Wrap,
  WrapItem
} from "@chakra-ui/react"

import { useState } from 'react'
import { getItemLS } from './utils/js/utils'
import Header from "./components/Header/Header"
import List from './components/List/List'
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



const images = [img10, img1, img2, img3, img4, img5, img6, img7, img8, img9, img0]//falta validacion para q no se repita el index

function App() {
  const [value, setValue] = useState({
    task: "",
    filter:"all",
    list:getItemLS('tasks')||[],
  })
 
  const [index, setIndex] = useState(0) 
  
  return (
  <HStack  
    alignItems='flex-start'
    justifyContent='center'
    minHeight='100vh' 
    width='100vw'  
    bgImage={`url(${images[index]})`} 
    backgroundSize='cover'>
   <Wrap 
    position='fixed'
    left={12}
    top={3}
    display={{base:'none', md:'flex'}}
  >
      <WrapItem>
        <Avatar 
          size={{base:'md', md:'xl', xl:'2xl'}}
          src='https://cintyy73.github.io/modulo-01-portafolio-ada-2022/assets/portada-proyectos/logo.png' />
      </WrapItem>
   </Wrap>
    <Box   
      justifySelf='flex-Start'
      minHeight='90vh' 
      width={{base:'80%', md:'60%'}} 
      marginTop={8}
      background='rgba(246, 178, 107, 0.3)'
      boxShadow='dark-lg'
      rounded='md'
      display='flex'
      justifyContent='space-around'
      padding={5}
      gap={3}
    >

      <VStack 
        color='current'>
        <Heading 
          textShadow='1px 1px white'
          size={{base:'2xl', xl:'4xl'}}
          color='rgba(0, 0, 0, 1)'
          textAlign='center'>
          <Tooltip label='Cambiar fondo' background='rgba(246, 178, 107, 0.8)' > 
            <Button 
              display={{base:'none', md:'inline'}}
              type='button'
              size='xl'
              fontSize='2xl'
              fontFamily='monospace'
              colorScheme='orange'
              bgImage={`url(${images[index +1 || index-1]})`}
              backgroundSize='cover'
              margin={8} 
              padding={1}
              onClick={(prev)=>{
                setIndex(Math.floor(Math.random()*images.length))}
              } >
              🎨
            </Button> 
          </Tooltip>  
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
  </HStack>  
  )
} 

export default App