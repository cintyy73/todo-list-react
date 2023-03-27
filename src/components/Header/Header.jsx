import { HStack, Button, Input, Select, list } from '@chakra-ui/react'
import { setItemLS } from '../../utils/js/utils'
// import { useState } from 'react'
let filterList=[];
const Header = ({ value, setValue }) => {
    const handleChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: (event.target.value)
        })
            
             if ((event.target.value)==="pending"){
                filterList=[];
                 console.log("pending")
                filterList = [...value.list].map((item)=>{
                   item.complete
                   return filterList
                 })
              // setItemLS('tasks',[...value.list, {
              //     pendingList,
          
              // }]
              // )
             }
          if ((event.target.value)==="complete"){
            filterList=[];
              filterList = [...value.list].map((item)=>{
                !item.complete
                  return filterList
          }  ) 
              // setItemLS('tasks',[...value.list, {
              //     pendingList,
        
              // }])
         }
           if ((event.target.value)==="all"){
            filterList=[...value.list, {
                          valueList,
                  
                      }];
        //       setItemLS('tasks',[...value.list, {
        //           valueList,
          
        //       }])
           }   
                  console.log(filterList)
          
          
       
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
