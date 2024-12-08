import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from "../contexts/AuthContext";
import { LoginPlayerRequest } from '../models/PlayerModel';
import { blurredBackground } from '../BackgroundStyling';

export default function Login() {
    const auth = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username !== "" && [password !== ""]) {
            const user = new LoginPlayerRequest(username, password);
            auth.login(user);
            return;
        }
    }
    return (
        <>
            <div style={blurredBackground("https://i.pinimg.com/originals/af/b6/3f/afb63f2a1cd543fecfa36996f10c3bf0.jpg")} />
            <div className='d-flex align-items-center justify-content-center' style={{ position: 'relative', zIndex: 2 }}>
                <Form className='card mt-5 w-50 shadow-lg bg-dark bg-gradient d-flex align-items-center border-secondary' onSubmit={handleSubmit}>
                    <div className='card-header border-secondary w-100 d-flex justify-content-center'>
                        <h1 className='text-white text-'>Login</h1>
                    </div>
                    <Form.Group className="my-3 w-75">
                        <Form.Label className='text-white'>Username</Form.Label>
                        <Form.Control data-test="username" type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-4 w-75" controlId="formBasicPassword">
                        <Form.Label className='text-white'>Password</Form.Label>
                        <Form.Control data-test="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    {auth.errorMessage && <div data-test="exceptionMessage" className="text-danger">{auth.errorMessage}</div>}
                    </Form.Group>
                    <Button data-test="login-btn" variant="primary" type="submit" className='mb-5 w-75'>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
}

