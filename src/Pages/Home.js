import React from 'react';
import './style/Home.css';
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

const Home = ()=>{
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
                <Tabs defaultActiveKey="featured" 
                    variant="pills"
                    transition={false}>
                    <Tab eventKey="featured" title="FEATURED">
                        <div>
                        <select name="categories" id="filter-categories">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes sadasdkad adjkas</option>
                        <option value="audi">Audi</option>
                        </select>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                            <p>
                            featured
                            </p>
                        </div>
                    </Tab>
                    <Tab eventKey="account" title="ACCOUNT">
                        <div>
                            account
                        </div>
                    </Tab>
                    <Tab eventKey="learn" title="LEARN">
                        <div>
                            learn
                        </div>
                    </Tab>
                    <Tab eventKey="wishlist" title="WISHLIST">
                        <div>
                            wishlist
                        </div>
                    </Tab>
                    <Tab eventKey="shop" title="SHOP">
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