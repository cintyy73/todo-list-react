import { CheckCircleIcon } from '@chakra-ui/icons'
import { VStack, HStack,  IconButton, Input, Select, list, InputRightElement, InputGroup } from '@chakra-ui/react'
import { setItemLS } from '../../utils/js/utils'
// import { useState } from 'react'

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

                <InputGroup size='md'>

                    <Input
                        pr='4.5rem'
                        type='text'
                        name='task'
                        value={value.task}
                        onChange={handleChange}
                        placeholder='Anadir nueva tarea'
                        size='sm'
                    />

                   <InputRightElement width='4.5rem'>
                       
                        <IconButton 
                            h='1.75rem'     
                            size='sm' 
                            onClick={handleList} 
                            icon={<CheckCircleIcon />} 
                        />
                        
                    </InputRightElement>

                </InputGroup>

            </HStack>

            <Select
                name='filter'
                value={value.filter}
                onChange={handleChange}
            >
                <option value='all'>Seleccionar filtro</option>
                <option value='all'>Todas las tareas</option>
                <option value='complete'>Tareas listas</option>
                <option value='pending'>Tareas pendientes</option>
            </Select>

        </VStack>
    )
}

export default Header
