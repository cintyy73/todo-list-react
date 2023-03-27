import { VStack } from "@chakra-ui/react"
import Item from "../Item/Item"

const List = ({value, setValue, complete, setComplete}) => {
    // const filter = () => {
    //     if(value.filter==="pending"){
    //         return (value.list).filter(task=>)
    //     }
    // }
    // filterList=filter()
  return (
    <VStack>
       <Item setValue={setValue} value={value} complete={complete} setComplete={setComplete}/>
    </VStack>
  )
}

export default List
