import React, { useState } from 'react'
import TodoInput from './TodoInput'
import { nanoid } from "nanoid"
import TodoList  from './TodoList'

function Todo() {

    let todoArr = JSON.parse(localStorage.getItem("todos")) || [];

    {
      if (todoArr.length === 0) {
        todoArr = [
          {
            title: "Hey, welcome to the todo list application",
            status: false,
            id: nanoid(4),
          },
          {
            title: "I am completed todo",
            status: true,
            id: nanoid(4),
          },
          {
            title: "You can also deletE todo from list by clicking deletE button",
            status: false,
            id: nanoid(4),
          },
        ];
        // console.log("Hey....sets the array");
      } 
    }



    const [Todos, setTodos] = useState(todoArr)

    const [page, setPage] = useState(1)

    const [show, setShow] = useState(true);

    const getTodo = (todo) => {
        const newtodo = {
            title: todo,
            status: false,
            id: nanoid(4),
        };

        setTodos([...Todos, newtodo]);
    };


    function handleStatus(id){

        // console.log(id)

        setTodos(Todos.map((elem) => (elem.id === id ? { ...elem, status: !elem.status } : elem)));
    };
    


    function handleDelete(id){
// console.log(id)

setTodos(Todos.filter((elem)=> elem.id !== id))
    }


    localStorage.setItem("todos", JSON.stringify(Todos));
    return (
        <div>

            <div className="todoContainer-bigbucket">
                <h1 style={{ fontSize: "50px" }}>TodoList</h1>
                <TodoInput getTodo={getTodo} />



                {show ? (<div>          <TodoList 
                todos={Todos.slice(5 * (page - 1), 5 * page)}
                    handleStatus={handleStatus}
                    handleDelete={handleDelete}
                />

                    <button className="btn1"onClick={() => {
                        page !== 1 ? setPage(page - 1) : setPage(page)
                    }}>Previous</button>



                    <button className="btn1" onClick={() => {
                        page !== Math.ceil(Todos.length / 5) ? setPage(page + 1) : setPage(page)
                    }}>Next</button>
                </div>) : null}

            </div>

            <button className="btn1" onClick={() => {
                setShow(!show)
            }}> {show ? "Show Completed Todos" : "Show All Todos"}</button>

            {show ? null : (
                <TodoList

                    todos={Todos.filter((todo) => todo.status == true)}
                    handleStatus={handleStatus}
                    handleDelete={handleDelete}
                />
            )}

        </div>
    )
}

export default Todo