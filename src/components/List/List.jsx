import { VStack } from "@chakra-ui/react"
import Item from "../Item/Item"

const List = ({value}) => {
    // const filter = () => {
    //     if(value.filter==="pending"){
    //         return (value.list).filter(task=>)
    //     }
    // }
    // filterList=filter()
  return (
    <VStack>
       <Item  value={value}/>
    </VStack>
  )
}

export default List
