import { HStack, Button, Input, Select, list } from '@chakra-ui/react'
// import { useState } from 'react'

const Header = ({ value, setValue }) => {
    const handleChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: (event.target.value)
        })
        console.log(event.target.name)
    }
    const handleList = (event) => {
        setValue({
            ...value,
            list: [...value.list, {
                ...list,
                task: value.task,
                id: self.crypto.randomUUID()
        
            }]
        })
        console.log(value.list)
    }
    return (
        <header>
            <HStack >
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
                <option value='all'>Todas las tareas</option>
                <option value='list'>Tareas listas</option>
                <option value='pending'>Tareas pendientes</option>
            </Select>

        </header>
    )
}

export default Header
