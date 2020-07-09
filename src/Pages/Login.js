import React from 'react';
import './style/Home.css';
import './style/Account.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Form,
    Row,
    Col,
    Button,
    Container,
} from 'react-bootstrap';
import NavUp from './Components/NavUp';
import AuthForms from './Components/Auth Forms';
const Login = ({location})=>{
    React.useEffect(()=>{
        if(location.pathname==="/account"){
            window.scrollTo({top:500,left :0,behavior:'smooth'})
        }
    },[location.pathname])
    return(
        <Container className="home-body"> 
            <Row className="justify-content-center" id="large-home-banner">
                <Col sm={6}>
                    <Form>
                        <Form.Group id="search-a">
                        <select name="categories" id="search-categories">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes sadasdkad adjkas</option>
                        <option value="audi">Audi</option>
                        </select>
                        <input type="text" placeholder="search item..." id="search-input-a"/>
                        <span id="search-btn-a">
                            <Button>
                                SEARCH
                            </Button>
                        </span> 
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <div className="account-body">
                <AuthForms/>
            </div>
            <NavUp/>
        </Container>
    )
};

export default Login;