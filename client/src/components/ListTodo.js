import React, {Fragment, useState, useEffect} from 'react';
import EditTodo from './EditTodo.js';
import {GlobalStyle} from '../globalStyled';

function ListTodo(){

    const [todos, setTodos]= useState([]);
    const [showModal, setShowModal]=useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    const DeleteData = async (id)=>{
        try {
            const response = await fetch((`http://localhost:5000/todos/${id}`),{
                method: "DELETE"
            }) 

            setTodos(todos.filter(todo=> todo.todo_id !== id))
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(()=>{
        const getData = async()=>{
        try{
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            setTodos(jsonData);
        }catch(err){
            console.log(err.message)
            }
        }

        getData();
    }, [])


    return(
        <Fragment>
            <GlobalStyle/>
            <table className="list">
                <thead>
                    <tr className="table-header">
                        <th className="h-description">Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo =>(
                        <tr key={todo.todo_id}>
                            <td className="description">{todo.description}</td>
                            <td>
                                <button 
                                    className="btn-edit"
                                    data-toggle="modal"
                                    data-target={`#id${todo.todo_id}`}
                                    onClick={openModal}
                                    > 
                                    Edit
                                </button>
                                <EditTodo showModal={showModal} openModal={openModal} todo={todo}/>
                            </td>
                            <td>
                                <button className="btn-delete" onClick={()=> DeleteData(todo.todo_id)}>
                                    Delete
                                </button>
                            </td>
                        </tr> 
                    ))
                    }
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodo;