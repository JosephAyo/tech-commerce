import React from 'react';
import '../style/Account.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Form,
    Row,
    Col,
    Button,
} from 'react-bootstrap';
import Media from 'react-media';
const AuthForms = ()=>{
    const [authForm,setAuthForm] = React.useState(0)
    return(
            <Row className="justify-content-center auth-form">
            {
                authForm===0?
                <>
                    <Col sm={8}>
                        <div  className="focus-auth-form">
                            <Form className="login-form">
                                <Form.Group>
                                    <input
                                        type="email"
                                        placeholder="Username or email"
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <span id="other-auth-options">
                                    <Form.Check
                                        type="checkbox"
                                        label="Remember me."
                                        />
                                    <p>
                                        Forgot password?
                                    </p>
                                    </span>
                                    <span className="auth-btn">
                                        <Button>
                                            Log In
                                        </Button>
                                    </span>
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                    <Media queries={{
                        small: "(max-width: 599px)",
                        medium: "(min-width: 600px) and (max-width: 1199px)",
                        large: "(min-width: 1200px)"
                        }}>
                        {matches => (
                            <>
                            {(matches.medium ||matches.large)  &&   
                                <Col sm={4} className="large-form-name">
                                    <div className="focus-auth-form">
                                    <p>
                                        LOGIN
                                    </p>
                                    <p id="small-welcome">
                                        Welcome Back.
                                    </p>
                                    </div>
                                </Col>}
                            </>
                        )}
                    </Media>
                    <div className="switch-auth">
                        <p onClick={()=>setAuthForm(1)}>
                            Create Account.
                        </p>
                    </div>
                </>:
                <>
                    <Col sm={8} className="focus-auth-form">
                        <div>
                            <Form className="login-form">
                                <Form.Group>
                                    <input
                                        type="email"
                                        placeholder="Username or email"
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <span className="auth-btn">
                                        <Button>
                                            Sign Up
                                        </Button>
                                    </span>
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                    <Media queries={{
                        small: "(max-width: 599px)",
                        medium: "(min-width: 600px) and (max-width: 1199px)",
                        large: "(min-width: 1200px)"
                        }}>
                        {matches => (
                            <>
                            {(matches.medium ||matches.large)  &&   
                                <Col sm={4} className="large-form-name focus-auth-form">
                                    <div>
                                    <p>
                                        SIGN UP
                                    </p>
                                    <p id="small-welcome">
                                        Welcome Aboard.
                                    </p>
                                    </div>
                                </Col>}
                            </>
                        )}
                    </Media>
                    <div className="switch-auth">
                    <p onClick={()=>setAuthForm(0)}>
                            Log In.
                        </p>
                    </div>
                </>
            }
        </Row>
    )
};

export default AuthForms;