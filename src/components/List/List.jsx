import { Flex } from "@chakra-ui/react"

const List = ({value}) => {
  return (
    <Flex>
      <ul>
        {(value.list).map((task) => <li key={value.list.indexOf()}>{task}</li>)}
      </ul>
    </Flex>
  )
}

export default List
