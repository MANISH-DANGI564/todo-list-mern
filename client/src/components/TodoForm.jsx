import {useState} from "react"; //useState is a hook
import React from 'react';
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

const TodoForm = () => {

    const[text,setText]=useState("")
    // setText is a function to set value of Text

    const dispatch=useDispatch();

    const onFormSubmit = (e) => {

         e.preventDefault(); 
        dispatch(addNewTodo(text));
        setText(' ');
    }

    const OnInputChange = (e) =>{
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                placeholder="Enter new Todo..."
                className="input"
                onChange={OnInputChange}
                value={text}
            />
        </form>
    )
}
export default TodoForm;