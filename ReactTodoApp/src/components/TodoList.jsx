import React from 'react'

function TodoList({ todos, handleStatus, handleDelete }) {
    return (
        <div>

            {todos.map((elem) => (

                <div className='todoListContainer'>

                    <div style={
                        elem.status
                            ? {
                                textDecorationLine: "line-through",
                                textDecorationColor: "grey",
    
                            }
                            : { textDecorationLine: "none" }
                    }>
                        {elem.title}
                    </div>




                    <div className='crossbutton'>
                        <button className='doneone'

                            onClick={() => {
                                handleStatus(elem.id);
                            }}
                        >
                            {elem.status == false ? "check" : "clear"}
                        </button>
                        <button 
                           className='deleteone'
                            onClick={() => handleDelete(elem.id)}
                        >
                            delete
                        </button>
                    </div>


                </div>

            ))}



        </div>
    )
}

export default TodoList