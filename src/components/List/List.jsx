import { VStack } from "@chakra-ui/react"
import Item from "../Item/Item"

const List = ({value, setValue}) => {
   
  return (
    <VStack>
        {(value.list).map((item) =><Item 
        setValue={setValue} 
        value={value} 
        item= {item}
        key={item.id} /> )} 

    </VStack>
  )
}

export default List