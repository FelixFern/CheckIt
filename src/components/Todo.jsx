import axios from 'axios'
import { useContext, useState } from 'react'
import { AiFillCheckCircle, AiFillDelete} from 'react-icons/ai'
import { dataContext } from '../global/global-state'

const Todo = ({todo}) => {
    const { data, setData } = useContext(dataContext)

    const deleteTodo = (data) => {
        axios.delete("http://localhost:5000/api/" + data).then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return(
        <div className='flex items-center justify-between px-6 py-4 m-auto my-5 border-2 rounded w-96 bg-slate-50 border-b-red-500'>
            <h1 className='text-lg font-bold'>{todo}</h1>
            <div className='flex gap-x-2 '>
                {/* <button onClick={() => {}}><AiFillCheckCircle className='text-2xl hover:text-green-400'/></button> */}
                <button onClick={() => { deleteTodo(todo) }}><AiFillDelete className='text-2xl hover:text-red-400'/></button>
            </div>
        </div>
    )
}

export default Todo