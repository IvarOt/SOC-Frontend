import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCreateAccount } from '../hooks/PlayerHooks';
import { useState } from 'react';
import { RegisterPlayerRequest } from '../models/PlayerModel';
import { useNavigate } from 'react-router-dom';
import { blurredBackground } from '../BackgroundStyling';

export default function SignUp() {
    const { createAccount, isLoading, errorMessage } = useCreateAccount();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const player = new RegisterPlayerRequest(username, email, password, confirmPassword);
        await createAccount(player);
        console.log(errorMessage);
        if (errorMessage === null && !isLoading) {
            navigate("/login");
        }
    }

    return (
        <>
            <div style={blurredBackground("https://i.pinimg.com/originals/af/b6/3f/afb63f2a1cd543fecfa36996f10c3bf0.jpg")}></div>
            <div className='d-flex align-items-center justify-content-center' style={{ position: 'relative', zIndex: 2 }}>
                <Form className='card mt-5 w-50 shadow-lg bg-dark bg-gradient d-flex align-items-center border-secondary' onSubmit={handleSubmit}>
                    <div className='card-header border-secondary w-100 d-flex justify-content-center'>
                        <h1 className='text-white text-'>Sign Up</h1>
                    </div>
                    <Form.Group className="my-3 w-75">
                        <Form.Label className='text-white'>Username</Form.Label>
                        <Form.Control data-test="username" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
                        <Form.Label className='text-white'>Email address</Form.Label>
                        <Form.Control data-test="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-75" controlId="formBasicPassword">
                        <Form.Label className='text-white'>Password</Form.Label>
                        <Form.Control data-test="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-75" controlId="formConfirmPassword">
                        <Form.Label className='text-white'>Confirm Password</Form.Label>
                        <Form.Control data-test="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm password" />
                        {errorMessage && <div data-test="exceptionMessage" className="text-danger">{errorMessage}</div>}
                    </Form.Group>
                    <Button data-test="signup-btn" variant="primary" type="submit" className='mb-5 w-75'>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
}
