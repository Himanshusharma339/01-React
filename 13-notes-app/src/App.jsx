import React, { useState } from "react";
import { X } from 'lucide-react';

function App() {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])
  
  const submitHandler=(e)=>{
    e.preventDefault();
    
    const copyTask = [...task];
    copyTask.push({title,details})

    setTask(copyTask)

    // console.log(task);
    
    
     
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) =>{
   const copyTask = [...task];
   copyTask.splice(idx,1)

   setTask(copyTask)

   
  }


  return (

    <div className="h-screen lg:flex bg-black text-white ">
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className=" flex lg:w-1/2 p-10 gap-4  flex-col items-start ">

        <h1 className="text-3xl font bold">Add Notes</h1>
       {/* PEHLA INPUT FOR HEADING  */}
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 w-full py-2 font-medium border-2 outline-none rounded"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
              
            }}
          />

          {/* DETAIL WALA INPUT  */}
          <textarea
            type="text"
            placeholder="Enter details here"
            className="px-5  w-full  h-32 py-2 flex items-start flex-row  border-2 rounded outline-none"
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
              
            }}
          />
          <button className="bg-white active:scale-95 font-medium w-full text-black px-5   py-2 rounded outline-none">
            Add Notes
          </button>
      </form>
      <div className=" lg:w-1/2 lg:border-l-2  p-10">
      <h1 className="text-4xl font-bold ">Recent Notes</h1>
       <div className="flex flex-wrap items-start justify-start gap-5 h-[90%] overflow-auto mt-6 " >

        {task.map(function(elem,idx){

          return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl py-9 px-4 text-black bg-white pt-9 pb-4 bg-cover bg-[url('https://inkpx.com/media/template/feature/note-pages/04ea588c-4f90-47a6-b144-34ed62d8f70d.png')]">
            
           <div>
             <h3 className="leading-tight text-lg font-bold">{elem.title}</h3>
            <p className="mt-2 leading-tight text-xs font-semi text-gray-500">{elem.details}</p>
           </div>
             <button onClick={() =>{
              deleteNote(idx)
             }} className="w-full cursor-pointer active:scale-95  bg-red-500 py-1 text-xs text-white rounded font-bold">Delete </button>
           
          </div>
          
     
        })}
       
     
       </div>
      </div>
    </div>
  )
}

export default App;
