import { CheckIcon,  EditIcon,  DeleteIcon } from "@chakra-ui/icons"
import { 
  IconButton,
  useDisclosure,
  HStack, Button, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  EditableTextarea,
  EditablePreview,
  Editable,
  EditableInput,
  Input,
  Text, 
  ButtonGroup 
} from "@chakra-ui/react"
import { useState } from 'react'

import { setItemLS } from '../../utils/js/utils'
//import DrawerEditor from "../Drawer/Drawer"

const Item = ({ value, setValue, item }) => {
  const [edit, setEdit] = useState()
  const { isOpen, onOpen, onClose } = useDisclosure()
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
    list:((value.list).filter((item)=>item.id!==id)) })
    setItemLS('tasks',(value.list).filter((item)=>item.id!==id))
 
  }
  //const [editing, setEditing] = useState(false)
  
    return (<HStack 
              alignItems='flex-start'
              justifyContent='center'
              background={item.complete?'rgba(90 ,220, 90, 0.99)':'rgba(228, 60, 60, 0.99)'}
              rounded='md'
              padding={1}
              width='100%'
            > 
           <Text  width='60%'
           fontFamily='mogena'
           color='black'
          fontSize='md'
          borderColor={'black'} 
          as={item.complete?'del': ''}
          >
            {item.task}  </Text>
            <ButtonGroup
          spacing={2}>
        <IconButton
          onClick={()=>handleText(item.id)} 
          variant='ghost'
          colorScheme={item.complete?'red':'green'}
          aria-label='Complete'
          fontSize='15px'
          icon={<CheckIcon />}
        /><IconButton 
          onClick={()=>deleteTask(item.id)}
          variant='ghost'
          colorScheme='red'
          aria-label='Complete'
          fontSize='15px'
          icon={<DeleteIcon />}
        />
         
         <>
        <IconButton 
          onClick={onOpen}
          variant='ghost'
          colorScheme='blue'
          aria-label='Edit'
          fontSize='15px'
          icon={<EditIcon />}
        />
        
        <Modal 
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
      </Modal>
      </> 

      </ButtonGroup>
      </HStack>

      ) 
  
   }

export default Item
