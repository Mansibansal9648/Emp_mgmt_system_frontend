import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getEmployees } from '../../../../api/employeeApi'
import './employee.css'
import del from '../../../../assets/images/delete.png'
import edit from '../../../../assets/images/edit.png'
import Modal from '../modal/Modal'
import DeleteModal from '../modal/deleteModal'
import PaginationComponent from '../../../common/pagination/pagination'
import { useSelector } from 'react-redux'

function Employees() {
    const user=useSelector((state)=>state.user)
    const initialPaginationState = {
        page: 1,
        totalPages: 1,
        totalItems: 0,
    }

    const [employees, setEmployees] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(5) // Adjust as needed
    const [pagination, setPagination] = useState(initialPaginationState)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        getData()
    }, [currentPage])

    const getData = async () => {
        const res = await getEmployees(currentPage, itemsPerPage,user.accessToken)
        if (res && res.data.responseCode === 401) {
            toast.error(res.data.errMessage);
        }else if (res && res.data.responseCode === 200) {
            setEmployees(res.data.data)
            setPagination({
                page: res.data.pagination.page,
                totalPages: res.data.pagination.totalPages,
                totalItems: res.data.pagination.totalItems,
            })
        } else if (res && res.data.responseCode === 400) {
            toast.error(res.data.errMessage)
        } else {
            toast.error('Something went wrong...')
        }
    }

    const [showModal, setShowModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [editData, setEditData] = useState(null)
    const [deleteData, setDeleteData] = useState(null)

    const openModal = (item) => {
        setEditData(item)
        setShowModal(true)
    }

    const openDeleteModal = (_id) => {
            setDeleteData(_id)
            setShowDeleteModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const closeDeleteModal = () => {
        setShowDeleteModal(false)
    }

    return (
        <div className="container ps-5 pt-4">
            <div className="App">
                <Modal
                    show={showModal}
                    onClose={closeModal}
                    getData={getData}
                    editData={editData}
                >
                    <div className="container">
                        <h2>Modal Title</h2>
                        <p>This is the modal content.</p>
                    </div>
                </Modal>
                <DeleteModal
                    show={showDeleteModal}
                    onClose={closeDeleteModal}
                    getData={getData}
                    deleteData={deleteData}
                >
                    <div className="container">
                        <h2>Modal Title</h2>
                        <p>This is the modal content.</p>
                    </div>
                </DeleteModal>
            </div>
            <div className="employee_nav d-flex justify-content-between align-items-center py-3">
                <h4>Employees List</h4>
                <div className="nav_end">
                    <button
                        onClick={openModal}
                        className="p-2 employee_btn border rounded-3 text-white"
                    >
                        Add Employee
                    </button>
                </div>
            </div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="p-3">Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Phone</th>
                        <th className="p-3">Department</th>
                        <th className="p-3">Designation</th>
                        <th className="p-3">Salary</th>
                        <th className="p-3">Date of Joining</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.length !== 0
                        ? employees?.map((item) => {
                              return (
                                  <tr key={item._id}>
                                      <td>{item.name}</td>
                                      <td>{item.email}</td>
                                      <td>{item.phone}</td>
                                      <td>{item.department}</td>
                                      <td>{item.designation}</td>
                                      <td>{item.salary}</td>
                                      <td>{item.date_of_joining}</td>
                                      <td>
                                          <img
                                              src={edit}
                                              alt=""
                                              className="p-2"
                                              onClick={() => {
                                                  openModal(item)
                                              }}
                                          />
                                          &nbsp;
                                          <img
                                              src={del}
                                              alt=""
                                              className="p-2"
                                              onClick={() => {
                                                  openDeleteModal(item._id)
                                              }}
                                          />
                                      </td>
                                  </tr>
                              )
                          })
                        : 'No record found'}
                </tbody>
            </table>
            {employees.length !== 0 && (
                <PaginationComponent
                    totalPages={pagination.totalPages}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            )}
        </div>
    )
}

export default Employees
