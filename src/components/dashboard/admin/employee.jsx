import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getEmployeeData } from "../../api/authUser";
import "./employee.css";
import del from "./images/delete.png";
import edit from "./images/edit.png";
import Modal from "./Modal";
import PaginationComponent from "./pagination";

function Employees() {
  const paginationState={
    page: "",
    totalPages: "",
    totalItems:"",
  }
  const [employees, setEmployees] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage,setItemsPerPage] = useState(5); // Adjust as needed
  const [pagination, setPagination] = useState(paginationState)

   // Get current items

  //  const indexOfLastItem = currentPage * itemsPerPage;
  //  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //  const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);
 
   // Change page
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getData();
  }, [currentPage]);

  const getData = async () => {
    const res = await getEmployeeData(currentPage,itemsPerPage);
    if (res && res.data.responseCode === 200) {
      setEmployees(res.data.data);
      setPagination({
        page: res.data.pagination.page,
        totalPages: res.data.pagination.totalPages,
        totalItems:res.data.pagination.totalItems,
      })

    } else if (res && res.data.responseCode === 400) {
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = (id) => {
    // Implement delete functionality here
    toast.success(`Employee with id ${id} deleted successfully.`);
  };

  const handleEdit = (id) => {
    // Implement edit functionality here
    toast.info(`Editing employee with id ${id}`);
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container ps-5 pt-4">
      <div className="App">
        <Modal show={showModal} onClose={closeModal} getData={getData}>
          <div className="container">
            <h2>Modal Title</h2>
            <p>This is the modal content.</p>
          </div>
        </Modal>
      </div>
      <div className="employee_nav d-flex justify-content-between align-items-center py-3">
        <h4>Employees List</h4>
        <div className="nav_end">
          {/* <Link
            to="/employees/createemployee"
            className="p-2 nav-link employee_btn border rounded-3 text-white"
          >
            Add Employee
          </Link> */}
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
        {employees.length != 0
         ?employees.map((item) => {
            return (
              <tr key={item.id}>
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
                      handleEdit(item);
                    }}
                  />
                  &nbsp;
                  <img
                    src={del}
                    alt=""
                    className="p-2"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                   
                  />
                </td>
            
              </tr>
              
            );
          })
          : `No record found`}
              {employees.length !== 0
         ?<PaginationComponent
            // itemsPerPage={itemsPerPage}
            // totalItems={pagination.totalItems}
            totalPages={pagination.totalPages}
            paginate={paginate}
            currentPage={pagination.page}
          /> : ""}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
