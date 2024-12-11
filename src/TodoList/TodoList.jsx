import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let [todos , setTodos] = useState([{task:"sample-task" , id:uuidv4() , markAsDone:false}]);
    let [newTodo , setNewTodo] = useState("");

    let addNewTask = ()=>{
        //console.log("clicked");
        setTodos((prevtodos)=>{
           return [...prevtodos, {task:newTodo,id:uuidv4(),markAsDone:false}]});    //markasdone!!//
        setNewTodo("");
    }

    let updateTodoValue = (event)=>{
       // console.log(event.target.value);
        setNewTodo(event.target.value)
    }

    let deleteTodo =(id)=>{
       setTodos( (prevtodo)=> todos.filter((prevtodo)=> prevtodo.id != id));
    }

    let upperCaseAll = ()=>{
        setTodos((prevtodo)=>
            prevtodo.map((todo)=>{
            return{
                ...todo,
                task: todo.task.toUpperCase(),
            }
        })
      );
    };

    let upperCaseOneTodo = (id)=>{
        setTodos((prevtodo)=>
        prevtodo.map((todo)=>{
            if(todo.id == id){
                return{
                    ...todo, 
                    task: todo.task.toUpperCase(),
                };
            }
            else{
                return todo;
            }
        })
    );
    }

    let markDone =(id)=>{
        //console.log("clicked");
        setTodos((prevtodo)=>
            prevtodo.map((todo)=>{
                if(todo.id==id){
               return{ 
                ...todo,
                markAsDone: true,
             }
        }
    else{
        return todo;
    }
})
)
};
    let markAllAsDone = ()=>{
        setTodos((prevtodos)=>
            prevtodos.map((todo)=>{
                return{
                    ...todo,
                    markAsDone:true,
                }
            })
    )
    }



    return(
        <div>

            <h1 class="display-2 m-3">TODO-LIST <i class="fa-solid fa-book" style={{color: "#f1f4f9"}}></i></h1>

            <input placeholder="enter todo" value={newTodo} onChange={updateTodoValue} class="form-control"></input>
            <br></br><br></br>
            <button onClick={addNewTask} type="button" class="btn btn-outline-primary"> Add </button>
            <br></br>
            <br></br>
            <br></br>


<hr></hr>
            <h4><u>Task todo</u></h4>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                       <span style={todo.markAsDone ? {textDecoration: "line-through"} : null}> {todo.task} </span> 
                       &nbsp; &nbsp; &nbsp; &nbsp;
                       <button onClick={ ()=> deleteTodo(todo.id)} type="button" class="btn btn-outline-danger m-4">Delete</button>
                       <button onClick={ ()=> upperCaseOneTodo(todo.id)} type="button" class="btn btn-outline-light m-4">Upper Case One</button>
                       <button onClick={ ()=> markDone(todo.id)} type="button" class="btn btn-outline-success m-4">Mark As Done!</button>

                    </li>
                ))}
            </ul>
            <br></br>
            <button onClick={upperCaseAll} type="button" class="btn btn-outline-secondary m-4">Upper Case All</button>
            <button onClick={markAllAsDone} type="button" class="btn btn-outline-secondary m-4">Mark ALL as done</button>
        </div>
    )
}