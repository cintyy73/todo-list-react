import { HStack, Button, Input, Select, list } from '@chakra-ui/react'
import { setItemLS } from '../../utils/js/utils'
// import { useState } from 'react'

const Header = ({ value, setValue}) => {
    const handleChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: (event.target.value)
        })
            
             if ((event.target.value)==="pending"){
               
                 console.log("pending")
               const filterPending = [...value.list].filter((item)=>!item.complete)
              setItemLS('tasks', filterPending)
             }
          if ((event.target.value)==="complete"){
          
             const filterComplete = [...value.list].filter((item)=>item.complete) 
              setItemLS('tasks', filterComplete )

            //   setItemLS('tasks',[...value.list, {
            //       pendingList,
        
            //   }])
         }
           if ((event.target.value)==="all"){
            
              setItemLS('tasks', value.list)
           }   
       
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
                <option value='complete'>Tareas listas</option>
                <option value='pending'>Tareas pendientes</option>
            </Select>

        </header>
    )
}

export default Header
