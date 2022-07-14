import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
    const [ data, setData ] = useState()
    const [ value, setValue ] = useState('')

    useEffect(() => {
        axios.get("http://localhost:5000/api").then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const addUser = () => {
        axios.post("http://localhost:5000/api/"+value).then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    const deleteUser = () => {
        axios.delete("http://localhost:5000/api/"+value).then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    if (typeof data === "undefined") return <h1>Loading...</h1>
    
    return (
        <div>
            <h1>Name List</h1>
            <div className='form'>
                <input type="text" onChange={(e) => setValue(e.target.value)}></input>
                <button onClick={() => addUser() }>Add</button>
                <button onClick={() => deleteUser() }>Delete</button>
            </div>
            <ul>
                {data.name.map((data, i) => {
                    return (<li key={i}>{data}</li>)
                })}
            </ul>
        </div>
    )
}

export default App