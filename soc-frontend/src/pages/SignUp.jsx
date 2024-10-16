import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCreateAccount } from '../hooks/PlayerHooks'; 
import { useState } from 'react';
import { RegisterPlayerRequest } from '../models/PlayerModel';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const { createAccount, isLoading } = useCreateAccount();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const backgroundStyle = {
        backgroundImage: `url('https://i.pinimg.com/originals/af/b6/3f/afb63f2a1cd543fecfa36996f10c3bf0.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        position: 'relative', // Allows absolute positioning for the blurred background
        overflow: "hidden",
    };
    const blurredBackground = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "url('https://i.pinimg.com/originals/af/b6/3f/afb63f2a1cd543fecfa36996f10c3bf0.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(5px)", /* Adjust blur intensity */
        zIndex: 1, /* Ensure it's below the form */
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const player = new RegisterPlayerRequest(username, email, password, confirmPassword);
        await createAccount(player);
        navigate("/login");
    }

    return (
        <div style={backgroundStyle}>
            <div style={blurredBackground}></div>
            <div className='d-flex align-items-center justify-content-center' style={{ position: 'relative', zIndex: 2 }}>
                <Form className='card mt-5 w-50 shadow-lg bg-dark bg-gradient d-flex align-items-center border-secondary' onSubmit={handleSubmit}>
                    <div className='card-header border-secondary w-100 d-flex justify-content-center'>
                        <h1 className='text-white text-'>Sign Up</h1>
                    </div>
                    <Form.Group className="my-3 w-75">
                        <Form.Label className='text-white'>Username</Form.Label>
                        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
                        <Form.Label className='text-white'>Email address</Form.Label>
                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-4 w-75" controlId="formBasicPassword">
                        <Form.Label className='text-white'>Password</Form.Label>
                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-4 w-75" controlId="formConfirmPassword">
                        <Form.Label className='text-white'>Confirm Password</Form.Label>
                        <Form.Control value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mb-5 w-75'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}
