import React, { useState } from 'react'


function TodoInput({getTodo}) {
    const [text, setText] = useState("")

    return (
        <div className='TodoInputbox'>

            <input className='Inputbox' onChange={(e) => {
                setText(e.target.value)
            }} type="text" placeholder='Add your todo....' />
            <button className="AddBtn" onClick={()=>{
                text.length !==0 ? getTodo(text) : alert("Please create atleast 1 Todo")
            }} >Add Todo</button>

        </div>
    )
}

export default TodoInput