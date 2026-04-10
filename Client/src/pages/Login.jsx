import React from 'react'

function Login() {
  return (
    <div>
      
      <div className="container mt-5">
        <p className="h2 text-center">User Login</p>
        <div className="row justify-content-center">
          
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <form id="registrationForm" action="">
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

export default Login
