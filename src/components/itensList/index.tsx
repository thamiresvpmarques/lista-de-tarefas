import { useState } from "react";
import { Item } from "../../types/item";

import * as C from './style'

type Props ={
    item:Item,
    onChange: (id:number, done:boolean) => void
}
export const ItensList = ({item,onChange}:Props) =>{  
   
  return(
     <C.Container done={item.done}>
        <input 
        type='checkbox' 
        checked={item.done}
        onChange={e => onChange(item.id, e.target.checked)}
        />
        <label>{item.name} - {item.done.toString()}</label>
        
     </C.Container>
  )

}