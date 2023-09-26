import React,{useState,useRef,useEffect} from 'react'
import './Todo.css'
import {MdDelete} from 'react-icons/md'
import {IoMdDoneAll} from 'react-icons/io'
import {FiEdit} from 'react-icons/fi'


const Todo = () => {
    const[todo,setTodo]= useState('')
    const [todos,setTodos] = useState([])
    const [editId,setEditID] = useState(0)


const handleSubmit=(e)=>{
    e.preventDefault()
}

    const addTodo = ()=>{
       if(todo  !== ''){
        setTodos([...todos,{list : todo, id: Date.now(),status:false}])
        console.log(todos)
        setTodo('')
       }
    
    }
    const inputRef = useRef('null')

    useEffect(()=>{
        inputRef.current.focus()
    })

    const onDelete = (id)=>{
        setTodos(todos.filter((to)=>to.id !==id))
    }

const onComplete = (id)=>{
    let complete= todos.map((list)=>{
        if(list.id === id){
            return({...list,status : !list.status })
        }
        return list
    })
    setTodos(complete)
}


  return (
    <div className='container'>
        <h2>TODO App</h2>
        <form className='form-group' onSubmit={handleSubmit}>
            <input type='text' value={todo} ref={inputRef}  placeholder='Enter the task' className='form-control' onChange={(event)=>setTodo(event.target.value)}></input>
            <button onClick={addTodo}>ADD</button>
        </form>
        <div className='list'>
            <ul>
              {
               todos.map((to)=>{
                return(
                    <>
                    <li  className='form-control' id={to.status ? 'list-item': ''}>{to.list}
                    <span>
                        <IoMdDoneAll id='done' title='Complete' onClick={()=>onComplete(to.id)}/>
                        <FiEdit id='edit' title='Edit' />
                        <MdDelete id='delete' title='Delete' onClick={()=>onDelete(to.id)}/>
                        </span></li>
                    </>
                )
               
               })
              }
            </ul>
        </div>
    </div>
  )
}

export default Todo