import React from 'react'
import './modal.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { deleteEmployee } from '../../../../api/employeeApi'
import { useSelector } from 'react-redux'

const DeleteModal = ({ show, onClose, getData, deleteData }) => {
    const user = useSelector((state) => state.user)
    if (!show) {
        return null
    }

    const handleDelete = async (id) => {
        // console.log("ID:",id)
        const res = await deleteEmployee(id,user.accessToken)
        // console.log("response", res)
        if (res && res.data.responseCode === 401) {
            toast.error(res.data.errMessage);
        }else if (res && res.data.responseCode === 200) {
            toast.success(res.data.resMessage)
            getData()
        } else if (res && res.data.responseCode === 400) {
            toast.error(res.data.errMessage)
        } else {
            toast.error('Something went wrong..')
        }
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content d-flex justify-content-center align-items-center"
                onClick={(e) => e.stopPropagation()}
            >
               <div className="deleteModal_content rounded-1">
                <h4>Do you really want to Delete ?</h4>
               <div className="delete_buttons">
               <button className='btn btn-danger' onClick={()=>{
                handleDelete(deleteData)
                onClose()
               }}>Confirm</button>
               <button className='btn btn-secondary' onClick={onClose}>Cancel</button>
               </div>
               </div>
               
            </div>
        </div>
    )
}

export default DeleteModal
