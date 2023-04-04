import { CheckCircleIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { 
    setItemLS,
    handleChange
 
 } from '../../utils/js/utils'
import { 
    VStack,
    HStack,
    IconButton,
    Input,
    Select,
    list,
    Alert,
    AlertIcon,
    InputRightElement,
    InputGroup,
    CloseButton,
    Tooltip  
} from '@chakra-ui/react'
const Header = ({ value, setValue}) => {

    const [isError, setIsError] = useState(false)

    const handleList = () => {
        setIsError(false)
        if( value.task.length>3){
            setValue({
                ...value,
                task:'',
                list: [...value.list, {
                    ...list,
                    task: value.task,
                    id: self.crypto.randomUUID(),
                    complete:false,
                    priority:1
                }]
            })

            setItemLS('tasks',[...value.list, {
                ...list,
                task: value.task,
                id: self.crypto.randomUUID(),
                complete:false,
                priority:1       
            }])
        } else{

            setIsError(true) 
        }  

    } 
    



    return (

        <VStack as='form' onSubmit={(e)=>handleChange(e, value, setValue)}>
                {isError &&
                    <Alert size='xs' fontSize='xs' status='error'>
                        <AlertIcon />
                        OUCH!🥴 ¡Debe ingresar un texto mínimo de 4 letras!
                    </Alert>
                }
            
            <HStack >


            <InputGroup  size='md'>

                    <Input
                        
                        pr='4.5rem'
                        type='text'
                        name='task'
                        value={value.task}
                        onChange={(e)=>{handleChange(e, value, setValue)
                        }
            }
                        placeholder='Anadir nueva tarea'
                        _placeholder={{color:'black'}}
                        background='rgba(246, 178, 107, 0.8)'

                    />

                   <InputRightElement width='4.5rem'>
                        <Tooltip 
                            label='Añadir tarea' background='green.400'>  
                            <IconButton 
                                type='submit'
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
                onChange={(e)=>
                    handleChange(e, value, setValue)
                }
                _placeholder={{color:'black'}}
                background='rgba(246, 178, 107, 0.8)'
                 
            >
                <option 
                    style={{
                        color:"black", 
                        background:"rgba(246, 178, 107, 0.8)"
                    }}
                    value='all'>
                    Seleccionar filtro
                </option>

                <option 
                    style={{
                        color:"black", 
                        background:"rgba(246, 178, 107, 0.8)"
                    }}
                    value='all'>
                    Todas las tareas
                </option>

                <option 
                    style={{
                        color:"black", 
                        background:"rgba(246, 178, 107, 0.8)"
                    }}                
                    value='complete'>
                    Tareas completadas
                </option>

                <option 
                    style={{color:"black", 
                        background:"rgba(246, 178, 107, 0.8)"
                    }}                 
                    value='pending'>
                    Tareas pendientes
                </option>

            </Select>

        </VStack>
    )
}

export default Header
