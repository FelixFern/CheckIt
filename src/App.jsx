import React, { useEffect, useState } from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import axios from 'axios'

import './App.css'
import Todo from './components/Todo'
import { dataContext } from './global/global-state'


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

    const addTodo = () => {
        axios.post("http://localhost:5000/api/"+value).then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
        setValue('')
    }
    

    if (typeof data === "undefined") return <h1>Loading...</h1>
    
    return (
        <dataContext.Provider value={{ data, setData }}>
        <div className='container'>
            <header className='flex items-center justify-center p-3 font-bold text-center bg-red-500 gap-x-2'>
                <BsCheck2Circle className='text-2xl text-white'></BsCheck2Circle>
                <h1 className='text-2xl text-white'>CheckIt!</h1>
            </header>
            <h1 className='m-5 text-xl font-bold text-center'>Add To-do</h1>
            <div className='flex items-center justify-center m-5 gap-x-2'>
                <input 
                    value={value}
                    placeholder='New Task' 
                    className='h-8 text-center border border-red-500 rounded w-72'
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                >                    
                </input>
                <button 
                    className='flex items-center justify-center w-8 h-8 text-white bg-red-500 rounded hover:opacity-80'
                    onClick={() => addTodo()}
                >   
                    <h1 className='font-bold'>+</h1>
                </button>
            </div>
            <h1 className='m-5 text-xl font-bold text-center'>To-do List</h1>
            {data.todo.map((todo, i) => {
                return (
                    <Todo 
                        todo={todo}
                    ></Todo>
                )
            })}
        </div>
        </dataContext.Provider>
    )
}

export default App