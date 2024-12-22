import React from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
    return(
        <div style={{width:'100%'}}>
            <div className="row align-items-center justify-content-center" style={{width:"100%",height:"100vh", margin:'0'}}>
                <div className="col-md-5 text-center" >
                    <img src="/loginPage/image.png" alt="Description" className="img-fluid" />
                </div>
                <div className="col-md-6 text-center">
                    <LoginForm />
                </div>
            </div>
        </div>

    );
}

export default LoginPage;