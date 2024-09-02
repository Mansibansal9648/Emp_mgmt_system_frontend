import React from 'react'
import clipboard from '../../../../assets/images/clipboard.png'

function Todo() {
  return (
    
    <div className="container  ps-5 pt-4">
            <div className="fluid-container d-flex flex-column justify-content-center align-items-center py-5">
            <img src={clipboard} alt="" />
            <h5 my-2>No Tasks Available</h5>
            <button className='btn btn-primary px-3 py-2 my-2'>Create Task</button>
            </div>
        </div>
  )
}

export default Todo