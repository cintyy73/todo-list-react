import { CheckIcon,  CloseIcon,  DeleteIcon } from "@chakra-ui/icons"
import { IconButton, Flex, Text } from "@chakra-ui/react"
//import DrawerEditor from "../Drawer/Drawer"

const Item = ({ value }) => {
  return (
    (value.list).map((item) => <Flex alignItems={"center"} justifyContent={"space-evenly"}gap={3}>
       
      <Text fontSize={'15px'} borderColor={'black'} key={item.id}>
      {item.task}  
      </Text>
      <>
        <IconButton   
        variant='ghost'
        colorScheme='green'
        aria-label='Complete'
        fontSize='15px'
        icon={value.list['Complete']?<CloseIcon />:<CheckIcon />}
      /><IconButton 
        variant='ghost'
        colorScheme='red'
        aria-label='Complete'
        fontSize='15px'
        icon={<DeleteIcon />}
      />
     </> 
    </Flex>)
  )
}

export default Item
