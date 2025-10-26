import React from 'react'
import {useState} from 'react'
const Hook1 = () => {
const [todoList,setTodoList]=useState([])
const [inputValue,setInputValue]=useState("")
const handleSubmit=(e)=>{
e.preventDefault()
setTodoList([...todoList,inputValue])


}
const handleDelete=(index)=>{
setTodoList(todoList.filter((item,i)=>i!==index))
}

  return (
    <div className=' flex flex-col bg-blue-300  w-[100vw]  items-center justify-center h-[100vh]'>
      <h1 className='text-white font-bold mb-2'>Simple todo list</h1>
      
<form onSubmit={handleSubmit} className='flex flex-col bg-amber-100 p-8 space-y-4 rounded-lg'>

<input
className='h-12 w-[200px] p-2 bg-pink-200 placeholder:text-center border rounded-full border-pink-900 outline-none'
type="text"
value={inputValue}
onChange={(e) => setInputValue(e.target.value)}
placeholder="Enter a todo item"


/>

<button type="submit" className='p-4 border border-blue-800 bg-blue-200 text-white rounded-lg'>
  Submit Data

</button>

</form>
      
<div className='p-4 text-start border rounded-lg border-amber-800 mt-4'>
  <h1 className='font-bold text-blue-600 text-xl'>List of odos</h1>

  <div>
    {todoList.map((item,index)=>(<div className='flex gap-2 justify-between'>
      
      
      
      
      <p key={index} className='text-white'>{item}</p><button onClick={()=>handleDelete(index)}>Delete</button ></div>))}



  </div>
</div>
      
      
      
      
      </div>
  )
}

export default Hook1