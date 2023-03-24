import { Flex } from "@chakra-ui/react"
import Editor from "../Editor/Editor"

const List = ({value}) => {
    // const filter = () => {
    //     if(value.filter==="pending"){
    //         return (value.list).filter(task=>)
    //     }
    // }
    // filterList=filter()
  return (
    <Flex>
      <ul>

        {(value.list).map((item) => <li key={item.id}>
                {item.task}
                <Editor />
            </li>)}
      </ul>
    </Flex>
  )
}

export default List
