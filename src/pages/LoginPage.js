import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../services/userService';

export default function LoginPage(props) {
    const [ formState, setFormState ] = useState({
        email: "",
        password: ""
    });
    
    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if(!formValid()) return;
        try {
            await login(formState)
            props.handleSignupOrLogin();
        } catch (error) {
            alert(error.message);
        }
    }

    function formValid() {
        return !!(formState.email && formState.password);
    }

    return (
        <main className="Page">
            <h1>LoginPage</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-12">
                       <input onChange={handleChange} value={formState.email}name="email" placeholder="Email" className="form-control" type="email" /> 
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                       <input onChange={handleChange} value={formState.password}name="password" placeholder="Password" className="form-control" type="password" /> 
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                       <input disabled={!formValid()} value="Login" className="form-control" type="submit" /> 
                       &nbsp;&nbsp;
                       <Link to="/">Cancel</Link>
                    </div>
                </div>
            </form>
        </main>
    );
};