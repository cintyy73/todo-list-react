import { HStack, Button, Input, Select, list } from '@chakra-ui/react'
import { setItemLS } from '../../utils/js/utils'
// import { useState } from 'react'

const Header = ({ value, setValue }) => {
    const handleChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: (event.target.value)
        })
        console.log(event.target.name)
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
        <header>
            <HStack whidth={'50'}>
                <Input
                    name='task'
                    value={value.task}
                    onChange={handleChange}
                    placeholder='Anadir nueva tarea'
                    size='sm'
                />
                <Button onClick={handleList} >Agregar  </Button>
            </HStack>

            <Select
                name='filter'
                value={value.filter}
                onChange={handleChange}
            >
                <option value='all'>Seleccionar filtro</option>
                <option value='all'>Todas las tareas</option>
                <option value='list'>Tareas listas</option>
                <option value='pending'>Tareas pendientes</option>
            </Select>

        </header>
    )
}

export default Header
