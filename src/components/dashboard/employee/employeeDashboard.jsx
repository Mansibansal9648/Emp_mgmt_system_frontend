function EmployeeDashboard(){
    return(
        <div className="container mt-4">
        <div className="row">
          {/* Upcoming Holidays Card */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Upcoming Holidays</h5>
              </div>
            </div>
          </div>

          {/* Payslip Card */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Payslip</h5>

                <p className="text-muted mb-1">Jul 2024</p>
                <p className="text-muted mb-3">31 Paid Days</p>
                <div className="text-left">
                  <p className="d-flex justify-content-between">
                    <span>Gross Pay:</span> <span>₹****</span>
                  </p>
                  <p className="d-flex justify-content-between">
                    <span>Deduction:</span> <span>₹****</span>
                  </p>
                  <p className="d-flex justify-content-between">
                    <span>Net Pay:</span> <span>₹****</span>
                  </p>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <a href="#download" className="btn btn-link p-0">
                  Download
                </a>
                <a href="#show-salary" className="btn btn-link p-0">
                  Show Salary
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    }
    
    export default EmployeeDashboard;