import React from 'react'

function Register() {
  return (
    <div>
      <p>This is Register page</p>
      <div className="container mt-5">
        <p className="h2 text-center">User Registration</p>
        <div className="row justify-content-center">
          
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <form id="registrationForm" action="">
                            <div className="form-group m-2">
                                <label htmlFor="user_id">
                                    User Id
                                </label>
                                <input type="text" 
                                       className="form-control " 
                                       id="user_id" 
                                       placeholder="Enter User Id" required />
                            </div>
                            <div className="form-group m-2 f">
                                <label htmlFor="amount">
                                    Amount
                                </label>
                                <input type="decimal" 
                                       className="form-control" 
                                       id="amount" 
                                       placeholder="Password"
                                    required />
                            </div>
                            <div className="form-group m-2">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input type="email" 
                                       className="form-control " 
                                       id="email" 
                                       placeholder="Email" required />
                            </div>
                            <div className="form-group m-2">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input type="password" 
                                       className="form-control" 
                                       id="password" 
                                       placeholder="Password"
                                    required />
                            </div>
                            <button className="btn btn-danger m-2">
                                Login
                            </button>
                        </form>
                        <p className="mt-3">
                            Not registered?
                            <a href="#">Create an
                                account</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register
