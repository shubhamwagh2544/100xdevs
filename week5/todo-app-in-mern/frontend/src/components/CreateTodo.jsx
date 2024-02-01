import { useState } from "react";

export function CreateTodo() {
    // function state
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="title" onChange={(e) => {
                setTitle(e.target.value);
            }} /> <br /><br />

            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="description" onChange={(e) => {
                setDescription(e.target.value);
            }} /> <br /> <br />

            <button style={{
                padding: 10,
                margin: 10
            }} onClick={() => {
                fetch('http://localhost:3000/todos', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                    .then(async (res) => {
                        const response = await res.json();
                        alert('hey')
                    })
            }}>Add Todo</button>
        </div>
    )
}