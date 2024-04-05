import React from 'react';
import {BsTrash} from "react-icons/bs";
import {BiEditAlt} from "react-icons/bi";
import axios from 'axios';
import { baseURL } from '../utilis/constant';

function List({id, task, setUpdateMode, updateMode, setUpdateUI}) {

    const removeTask = () => {
        axios.delete(`${baseURL}/delete/${id}`).then((res)=>{
            console.log(res);
            setUpdateUI((prevState)=> !prevState);
        });
    }
  return <li>
    {task}
    <div className='icon_holder'>
        <BiEditAlt className='icon' onClick={()=> updateMode(id, task)}/>
        <BsTrash className='icon' onClick={removeTask} />
    </div>
    </li>
  
}

export default List