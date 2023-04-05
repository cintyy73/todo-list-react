import { setItemLS } from '../../utils/js/utils'
import { 
  useState,
  useRef 
} from 'react'

import { 
  CheckIcon,  
  EditIcon,  
  DeleteIcon 
} from "@chakra-ui/icons"

import { 
  IconButton,
  Icon, 
  useDisclosure,
  Stack, 
  Badge,
  Button, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Text, 
  ButtonGroup, 
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter, 
  Tooltip,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack, 
  SliderThumb,
  Divider,
  AlertIcon,
  Alert
} from "@chakra-ui/react"
const Item = ({ value, setValue, item }) => {

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )
  const btnRef = useRef()
  const [isModal, setIsModal] = useState(false)
  const [edit, setEdit] = useState(item.task)
  const [editError, setEditError] = useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<OverlayTwo />)
  const [sliderValue, setSliderValue] = useState(item.priority)
  const [showTooltip, setShowTooltip] = useState(false)
  const handleText = (id)=>{
    const newList = [...value.list].map((item)=>{ 
      if(item.id===id){
        item.complete=!item.complete
      } return item
    })

    setValue({
      ...value,
      list:newList
    })

    setItemLS('tasks', newList)
  }

  const editTask = (event) => {
    setEdit(event.target.value)
    if(edit.length<3){
      setEditError(true)
      console.log(editError)
    }else{setEditError(false)}
  }

  const handleTask = (id)=>{
   
  

    const editList = [...value.list].map((item)=>{ 
      if(item.id===id){
        item.task=edit
      } return item
    })
  
     setValue({
      ...value,
      list:editList
    })

    setItemLS('tasks', editList)

  }

  const priority = (id,v) =>{
   const priorityList = [...value.list].map((item)=>{ 
      if(item.id===id){
        item.priority=v
      } return item
    })
    setItemLS('tasks', priorityList)  
    setTimeout(() => {
      setValue({
        ...value,
        list:priorityList
      })
    }, 2000);  
   
  }

  const deleteTask = (id) => {
  
    setValue({
      ...value,
      list:((value.list).filter((item)=>item.id!==id)) 
    })
    setItemLS('tasks',(value.list).filter((item)=>item.id!==id))
 
  }
    
  
  return (
    <Stack     
      direction={{base:"column", md:"row"}}
      alignItems={{base:'center', md:'flex-start'}}
      justifyContent='center'
      background='rgba(244 ,206, 170, 1)'
      rounded='md'
      padding={1}
      width='100%'
      gap={2}>
      <Stack
        paddinn={2}
        gap={2}
        justifyContent='center' >
      <Slider
      borderColor='black'
      id='slider'
      defaultValue={item.priority}
      min={0}
      max={10}
      colorScheme='red'
     
      onChange={(v) => {
        setSliderValue(v)
        priority(item.id, v)

      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      margin={1}
      
      gap={3} 
      width='20'
      padding={2}>
      <SliderMark value={0} padding={1}fontSize={8}>
        Baja
      </SliderMark>
      <SliderMark value={5} padding={1} fontSize={8}>
            Media
      </SliderMark>
      <SliderMark value={10} padding={1} fontSize={8}>
        Alta
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='blue'
        placement='top'
        isOpen={showTooltip}
        label={`Prioridad`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>

        <Badge
          textAlign='center'
          fontSize={6}
          variant='outline' 
          colorScheme={item.complete?'green':'red'}> 
          <Icon viewBox='0 0 200 200' color={item.complete?'green.500':'red.500'}>
            <path
              fill='currentColor'
              d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
              />
          </Icon> {item.complete?'Realizada':'Pendiente'}
        </Badge>
      </Stack>

      <Text  
        width='60%'
        fontFamily='mogena'
        textShadow={ item.complete?'0px 0px 5px rgba(0, 168, 0, 1)':'0px 0px 5px rgba(168, 0, 0, 1)'}
        color='black'
        fontSize={{base:'md', sm:'xl'}}
        borderColor={'black'} 
        as={item.complete?'del': ''}
        marginLeft={2} 
        padding={3}>
        {item.task} 
      </Text>
            
      <ButtonGroup
        spacing={2}>
        <Tooltip 
          label={item.complete?'Marcar como incompleta':'Marcar como completa'} background={item.complete?'red.600':'green.600'}> 
          <IconButton
            onClick={()=>handleText(item.id)} 
            variant='ghost'
            colorScheme={item.complete?'red':'green'}
            aria-label='Complete'
            fontSize='15px'
            icon={<CheckIcon />}
          />
        </Tooltip>
        <>  
        <Tooltip 
          label='Eliminar' background='red.600'>  
          <IconButton 
            onClick={() => {
              setOverlay(<OverlayTwo />)
              onOpen()
              setIsModal(true)
            }}
            variant='ghost'
            colorScheme='red'
            aria-label='Complete'
            fontSize='15px'
            icon={<DeleteIcon />}
          />
        </Tooltip>
        <Modal 
          size='xs'
          isCentered 
          isOpen={isModal?isOpen:onclose} 
          closeOnOverlayClick={false}
          onClose={()=>{
            onClose()
            setIsModal(true)
          }}>
          {overlay}
          <ModalContent>
            <ModalHeader  
              fontSize='sm'
              background={item.complete ? 'green.100':'red.100' } >
              <Stack>
                <Alert fontSize='sm' status={item.complete? 'success' : 'error'}>   
                  <AlertIcon />
                  {item.complete?'Tarea completa!':'Aún no has realizado ésta tarea'}
                </Alert>
              </Stack>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody textAlign='center' background='orange.100' >
              <Text>
                {item.complete?`¿Deseas que 👉 "${item.task}" sea eliminada permanentemente?` : ` ¿Deseas eliminar permanentemente 👉 "${item.task}" sin haberla completado?`}
              </Text>

            </ModalBody>
            <ModalFooter background='orange.100'>
              <ButtonGroup 
                size='xs'>
                <Tooltip 
                  label='Cerrar' 
                  background='gray.800'> 
                  <Button 
                    colorScheme='gray' 
                    onClick={()=>{
                      onClose()
                      setIsModal(false)
                    }}>Cancelar</Button>
                </Tooltip>
                <Tooltip 
                label='Eliminar' 
                background='red.600'> 
                <Button 
                  colorScheme='red' 
                  onClick={()=>{
                    deleteTask(item.id)
                    setIsModal(false)
                  }}>
                  Ok
                </Button>
                </Tooltip>
              </ButtonGroup> 
            </ModalFooter>
          </ModalContent>
        </Modal>
        </>
        <>
        <Tooltip 
          label='Editar' background='blue.600'>  
          <IconButton 
            ref={btnRef}
            onClick={onOpen}
            variant='ghost'
            colorScheme='blue'
            aria-label='Edit'
            fontSize='15px'
            icon={<EditIcon />}
          />
        </Tooltip>  
          <Drawer
            isOpen={!isModal?isOpen:onclose}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef} >
            <DrawerOverlay />
            <DrawerContent 
            background='rgba(244 ,206, 170, 1)'
            >
              <DrawerCloseButton />
              <DrawerHeader >
                Editar tarea : "{item.task}"
                
              </DrawerHeader>
              <DrawerBody>
                  <Text>
                    Tarea editada: 
                  </Text>   
                  <Divider
                    color='black'
                    size='xl'/>
                  <Input
                  background='blue.100'
                  m={2} 
                  type='text' 
                  value={edit} 
                  onChange={editTask} 
                  placeholder={item.task}/>
                  {editError && (
                    <Alert size="xs" fontSize="xs" status="error">
                      <AlertIcon />
                      OUCH!🥴 ¡Debe ingresar un texto mínimo de 4 letras!
                    </Alert>
                  )}
              </DrawerBody>
              <DrawerFooter>
                <ButtonGroup
                  size='sm'>
                  <Button 
                    backgroundColor='gray.200' 
                    mr={3} 
                    onClick={()=>{onClose()
                      setEditError(false)}}>
                    Cancelar
                  </Button>
                  <Button  
                    isDisabled={editError?true:false}
                    onClick={()=>{
                      handleTask(item.id)
                      onClose(true)
                      } 
                    }
                    colorScheme='blue'>
                    Editar
                  </Button>
                </ButtonGroup>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          </>
      </ButtonGroup>
    </Stack>
  ) 
}

export default Item