import { useState } from "react";
import { Item } from "../../types/item";
import { ItensList } from "../itensList";
import { AddArea } from "../addArea";

import * as C from './style';

export const List = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar um bolo.', done: false },
    { id: 2, name: 'Passear no parque.', done: true },
  ]);
  const handleAddTask = (taskName:string) =>{
     let newList = [...list];
     newList.push({
       id:list.length + 1,
       name:taskName,
       done:false,
     });
     setList(newList)
  }
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }
  
  return (
    <C.Section>
      <C.Title>Lista de Tarefas</C.Title>
      <AddArea onEnter ={handleAddTask}/>
      <C.ContainerList>
        {list.map((item, index) => {
          return (
            <ItensList key={index} 
            item={item}
            onChange={handleTaskChange}/>
          )
        })
        };
      </C.ContainerList>
    </C.Section>
  )
};