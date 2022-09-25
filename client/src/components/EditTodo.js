import React, {Fragment, useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {Background, ModalDialog, ButtonTimes, Input, ModalTitle, FirstHr, SecondHr, ModalFooter, ButtonEdit, ButtonClose} from '../style';


function EditTodo({showModal, ...props}){
    const [description, setDescription] = useState("");

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const updateDescription = async(e)=>{
        e.preventDefault();
        try{
            const body = {description};
            const response = await fetch((`http://localhost:5000/todos/${props.todo.todo_id}`), {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location ="/" ;
        }catch(err){
            console.log(err.message);
        }
    }
    return(
        <Fragment>
            {showModal ? 
                <Background 
                    id={`id${props.todo.todo_id}`} 
                    onClick={()=>setDescription(props.todo.description)}> 
                    <animated.div style={animation}>
                        <ModalDialog>
                            <ButtonTimes 
                                onClick={()=>{setDescription(props.todo.description); props.openModal()}}
                            >
                                &times;
                            </ButtonTimes>

                            <ModalTitle>Edit Todo</ModalTitle>

                            <FirstHr/>

                            <Input
                                value={description}
                                onChange={e=>setDescription(e.target.value)}
                                />
                                    
                            <SecondHr/>

                            <ModalFooter>
                                <ButtonEdit
                                    onClick={e=>updateDescription(e)}
                                >
                                    Edit
                                </ButtonEdit>
                                <ButtonClose
                                    onClick={()=>{setDescription(props.todo.description); props.openModal()}}
                                >
                                    Close
                                </ButtonClose>
                            </ModalFooter>
                        </ModalDialog>
                    </animated.div>
                </Background>
            : null}
        </Fragment>
    ) 
}

export default EditTodo;