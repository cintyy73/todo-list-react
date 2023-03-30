import { setItemLS } from '../../utils/js/utils'
import { useState,useRef } from 'react'
import { CheckIcon,  EditIcon,  DeleteIcon } from "@chakra-ui/icons"
import { 
  IconButton,
  useDisclosure,
  Stack, Button, 
  // EditableTextarea,
  // EditablePreview,
  // Editable,
  // EditableInput,
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
} from "@chakra-ui/react"

//import DrawerEditor from "../Drawer/Drawer"

const Item = ({ value, setValue, item }) => {
  const [isModal, setIsModal] = useState(false)
  const [edit, setEdit] = useState(item.task)
  const btnRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const OverlayTwo = () => (
    <ModalOverlay
    bg='none'
    backdropFilter='auto'
    backdropInvert='80%'
    backdropBlur='2px'
    />
    )
    const [overlay, setOverlay] = useState(<OverlayTwo />)
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
    console.log(event.target.value)
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
    >

      <Text  
        width='60%'
        fontFamily='mogena'
        textShadow={ item.complete?'0px 0px 5px rgba(0, 168, 0, 1)':'0px 0px 5px rgba(168, 0, 0, 1)'}
        color='black'
        fontSize={{base:'md', sm:'xl'}}
        borderColor={'black'} 
        as={item.complete?'del': ''}
        padding={1}

      >
      {item.task}  </Text>
            
      <ButtonGroup
        spacing={2}
      >
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
            // onClick={()=>deleteTask(item.id)}
            variant='ghost'
            colorScheme='red'
            aria-label='Complete'
            fontSize='15px'
            icon={<DeleteIcon />}
          />
        </Tooltip>
        <Modal isCentered isOpen={isModal?isOpen:onclose} onClose={()=>{
          onClose()
          setIsModal(true)
        }}>
        {overlay}
        <ModalContent>
          <ModalHeader>{item.task}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>¿Desea eliminar permanentemente esta tarea?</Text>
          </ModalBody>
          <ModalFooter>
           <ButtonGroup >
           <Tooltip 
          label='Cerrar' background='blue.600'> 
           <Button colorScheme='blue' onClick={()=>{
              onClose()
              setIsModal(false)
           }}>Close</Button>
          </Tooltip>
           <Tooltip 
          label='Eliminar' background='red.600'> 
            <Button colorScheme='red' onClick={()=>{
              deleteTask(item.id)
              setIsModal(false)
              }}>Eliminar</Button>
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
            background='rgba(244 ,206, 170, 1)'
            isOpen={!isModal?isOpen:onclose}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef} >
            <DrawerOverlay />
            <DrawerContent >
              <DrawerCloseButton />
              <DrawerHeader>
                Editar tarea
              </DrawerHeader>
              <DrawerBody>
                <Input m={2} type='text' value={edit} onChange={editTask} placeholder={item.task}/>         
              </DrawerBody>
              <DrawerFooter>
                <Button variant='red.500' mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button  onClick={()=>{
                  handleTask(item.id)
                  onClose(true)} }
                  colorScheme='blue'
                >
                  Editar
                </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
      </ButtonGroup>
    </Stack>
  ) 
}

export default Item
 {/* <Modal 
        blockScrollOnMount={false} 
        isOpen={isOpen} 
        onClose={onClose}
        background='rgba(0, 0, 0, 0.4)'
        >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Tarea</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <Editable defaultValue={item.task}>
              <EditablePreview value= {`${item.task}  ${<EditIcon />}` }/>
              <EditableInput value={edit} onChange={editTask}/>
            </Editable>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={()=>{
              handleTask(item.id)
              onClose(true)} }variant='ghost'>Editar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}