import React from 'react';
import './App.css';
import {useState}from 'react';

function App() {
  const [todolist, setTodolist] = useState([])
  const [form, setForm] = useState({
    todo :'',
    status: false
  })

  const resetInput = ()=>{
    setForm({
      todo : '',
      status: false
    })
  }


  const handleChange =(event)=>{
    setForm({
      ...form,
      todo : event.target.value,
      status : false
    })
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    if(form.index || form.index === 0){

      const newTodo =todolist.map((e, i)=>{
        if(i === form.index){
          return form
        }else{
          return e
        }
      })
      setTodolist(newTodo)

    }else{

      setTodolist([
        ...todolist,
        form
      ])
    }
    resetInput()
  }

  const handleCheck = (index)=>{
    const newTodo = todolist.map((e,i)=>{
      if(i === index){
        return {
          todo: e.todo,
          status : true
        }
      }else{
        return e
      }
    })
    setTodolist(newTodo)
  }
  const handleDelete = (index)=>{
    const newTodo = todolist.filter((e, i)=>{
       if(i !== index){
        return e
       }
    })
    setTodolist(newTodo)
  }
  const handleEdit = (index)=>{
    const detailTodo ={
      index,
      ...todolist[index]
    }
    setForm(detailTodo)
  }

  return (
    <div>
      <div className='title'>
        <h1>TO DO LIST</h1>
        
        
        <form className='mb-3' method='post' onSubmit={handleSubmit}>
        <div class="col-sm-5">
        <input type="text" className='form-control' name='todo' onChange={handleChange} value= {form.todo}placeholder="masukan kegiatan"></input>
        
          <button type='submit' className='btn btn-primary'>submit</button>
          </div>
        </form>
      </div>
      <div className='content'>

        {
          todolist.map((e,i)=>(

        <div key={i}>
          <div className='action'>
          </div>
            <div className='button-action'>
              <input type='checkbox' checked={e.status?true:false} onChange={()=>handleCheck(i)}></input>
              <div className='text'>{e.todo}
              <button className='btn btn-warning plus float-right' onClick={()=>handleEdit(i)}>Edit</button>
              <button className='btn btn-danger plus float-right' onClick={()=>handleDelete(i)}>Delete</button>
            </div>
          </div>
        </div>
          ))
        }


      </div>
    </div>
  );
}

export default App;
