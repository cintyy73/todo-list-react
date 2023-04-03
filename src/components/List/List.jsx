import { VStack } from "@chakra-ui/react"
import Item from "../Item/Item"

const List = ({value, setValue}) => {
   
  return (
    <VStack 
      whidth='80%'
      paddingTop={3}>
      {   
        (value.list.sort((x,y)=>(y.priority-x.priority))).filter((item) =>{
          if(value.filter === 'pending'){
            return !item.complete
          }
          if(value.filter === 'complete'){
            return item.complete
          }
          return item
          }).map((item) =><Item 
            setValue={setValue} 
            value={value} 
            item= {item}
            key={item.id} /> 
        )
      }
    </VStack>
  )
}

export default List

