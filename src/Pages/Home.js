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
    Tabs,
    Tab
} from 'react-bootstrap';
import NavUp from './Components/NavUp';
import FeaturedProducts from './Components/Featured Products';
import Learn from './Components/Learn';
import Wishlist from './Components/Wishlist';
import AuthForms from './Components/Auth Forms';
const Home = ({location})=>{
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
            <div  className="home-tabs">
                <Tabs defaultActiveKey="3"
                    variant="pills"
                    transition={false}
                    // activeKey={location.pathname==="/account"?"account":null}
                    >
                    <Tab eventKey="0" title="FEATURED">
                        <div>
                        <select name="categories" id="filter-categories">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes sadasdkad adjkas</option>
                        <option value="audi">Audi</option>
                        </select>
                        <FeaturedProducts/>
                        </div>
                    </Tab>
                    <Tab eventKey="1" title="ACCOUNT">
                        <div className="account-body">
                            <AuthForms/>
                        </div>
                    </Tab>
                    <Tab eventKey="2" title="LEARN">
                        <Learn/>
                    </Tab>
                    <Tab eventKey="3" title="WISHLIST">
                        <Wishlist/>
                    </Tab>
                    <Tab eventKey="4" title="SHOP">
                        <div>
                            shop
                        </div>
                    </Tab>
                </Tabs>
            </div>
            <NavUp/>
        </Container>
    )
};

export default Home;