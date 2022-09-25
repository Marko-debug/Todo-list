import React, {Fragment, useState} from 'react';

function InputTodo(){

    const [description, setDescription] = useState("")

    const SubmitButton = async e=>{
        e.preventDefault();
        try{
            const body = {description};
            const response= await fetch(("http://localhost:5000/todos"), {
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location="/";
        }
        catch(err){
            console.log(err.message)
        }
    }

    return(
        <Fragment>
                <div className="header">PernTodo</div>
                <form className="form-add" onSubmit={SubmitButton}>
                    <input 
                        className="input" 
                        type="text"
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                        >
                    </input>
                    <button className="btn-add">Add</button>
                </form>
        </Fragment>
    )
}

export default InputTodo