import { 
    VStack,
    HStack,
    IconButton,
    Input,
    Select,
    list,
    InputRightElement,
    InputGroup,
    Tooltip  
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { setItemLS } from '../../utils/js/utils'

const Header = ({ value, setValue}) => {
    const handleChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: (event.target.value)
        })
    }  

    const handleList = () => {
        setValue({
            ...value,
            list: [...value.list, {
                ...list,
                task: value.task,
                id: self.crypto.randomUUID(),
                complete:false
            }]
        })

        setItemLS('tasks',[...value.list, {
            ...list,
            task: value.task,
            id: self.crypto.randomUUID(),
            complete:false
    
        }]
        )
    }

    return (
        <VStack>
            
            <HStack >

                <InputGroup  size='md'>

                    <Input
                        
                        pr='4.5rem'
                        type='text'
                        name='task'
                        value={value.task}
                        onChange={handleChange}
                        placeholder='Anadir nueva tarea'
                        _placeholder={{color:'black'}}
                        background='rgba(246, 178, 107, 0.8)'

                    />

                   <InputRightElement width='4.5rem'>
                        <Tooltip 
                            label='Añadir tarea' background='green.400'>  
                            <IconButton 
                                colorScheme='green'
                                h='1.75rem'     
                                size='sm' 
                                onClick={handleList} 
                                icon={<CheckCircleIcon />} 
                            />
                        </Tooltip>  
                    </InputRightElement>

                </InputGroup>

            </HStack>

            <Select
                name='filter'
                value={value.filter}
                onChange={handleChange}
                _placeholder={{color:'black'}}
                background='rgba(246, 178, 107, 0.8)'
                 
            >
                <option 
                    style={{color:"black", background:"rgba(246, 178, 107, 0.8)"}}
                    value='all'>
                    Seleccionar filtro
                </option>

                <option 
                    style={{color:"black", background:"rgba(246, 178, 107, 0.8)"}}
                    value='all'>
                    Todas las tareas
                </option>

                <option 
                    style={{color:"black", background:"rgba(246, 178, 107, 0.8)"}}                value='complete'>
                    Tareas completadas
                </option>

                <option 
                    style={{color:"black", background:"rgba(246, 178, 107, 0.8)"}}                 value='pending'>
                    Tareas pendientes
                </option>

            </Select>

        </VStack>
    )
}

export default Header
