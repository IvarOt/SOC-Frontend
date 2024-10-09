import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
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

    return (
        <div style={backgroundStyle}>
            <div style={blurredBackground}></div>
            <div className='d-flex align-items-center justify-content-center' style={{ position: 'relative', zIndex: 2 }}>
                <Form className='card mt-5 w-50 shadow-lg bg-dark bg-gradient d-flex align-items-center border-secondary'>
                    <div className='card-header border-secondary w-100 d-flex justify-content-center'>
                        <h1 className='text-white text-'>Login</h1>
                    </div>
                    <Form.Group className="my-3 w-75">
                        <Form.Label className='text-white'>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group className="mb-4 w-75" controlId="formBasicPassword">
                        <Form.Label className='text-white'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mb-5 w-75'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}
