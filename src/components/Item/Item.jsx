import { CheckIcon,  EditIcon,  DeleteIcon } from "@chakra-ui/icons"
import { IconButton, Flex, Text } from "@chakra-ui/react"
import { setItemLS } from '../../utils/js/utils'
//import { useState } from 'react'
//import DrawerEditor from "../Drawer/Drawer"

const Item = ({ value, setValue, item }) => {

   

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

  const deleteTask = (id) => {
  setValue({
   ...value,
    list:((value.list).filter((item)=>item.id!==id)) })
    setItemLS('tasks',(value.list).filter((item)=>item.id!==id))
 
  }

  return (
    <Flex 
        key={item.id} 
        alignItems={"center"} 
        justifyContent={"space-evenly"}
        gap={3}>
       
      <Text 
        fontSize={'15px'} 
        borderColor={'black'} 
        as={item.complete?'del': ''}>
          
        {item.task}  
      </Text>
      <>
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
      <IconButton 
       //onClick={()=>deleteTask(item.id)}
        variant='ghost'
        colorScheme='blue'
        aria-label='Edit'
        fontSize='15px'
        icon={<EditIcon />}
      />

     </> 
    </Flex>)
  
}

export default Item
