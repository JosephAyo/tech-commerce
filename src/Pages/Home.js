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
    Tab,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';
import { 
    Star,
    ShoppingCartTwoTone,
    FavoriteTwoTone,
    VisibilityTwoTone,
    CompareArrows
} from '@material-ui/icons';
import NavUp from './Components/NavUp';
import FeaturedProds from './Data/Feautured Prods.json';
const Home = ()=>{
    const [highlight,setHighlight] = React.useState();
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
                            <Row className="justify-content-center">
                            {   FeaturedProds.map((prod,index)=>{
                                return(
                                    <Col xs={12} sm={6} lg={3}  key={prod._id}>
                                        <div className="item-box" 
                                        onMouseEnter={()=>setHighlight(index)}
                                        onTouchStart={()=>setHighlight(index)} >
                                            <span className="product-img-span">
                                                <img src={prod.picture} alt={prod.name}/>
                                                <div id={highlight===index?"show-options":"hide-options"}>
                                                <OverlayTrigger
                                                    placement='top'
                                                    overlay={
                                                    <Tooltip id='tooltip-top tooltip-custom'>
                                                        Add to cart
                                                    </Tooltip>
                                                    }
                                                >
                                                    <p>
                                                        <ShoppingCartTwoTone/>
                                                    </p>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement='top'
                                                    overlay={
                                                    <Tooltip id='tooltip-top tooltip-custom'>
                                                        Quick view
                                                    </Tooltip>
                                                    }
                                                >
                                                    <p>
                                                        <VisibilityTwoTone/>
                                                    </p>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement='top'
                                                    overlay={
                                                    <Tooltip id='tooltip-top'>
                                                        Add to favorites
                                                    </Tooltip>
                                                    }
                                                >
                                                    <p>
                                                        <FavoriteTwoTone/>
                                                    </p>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement='top'
                                                    overlay={
                                                    <Tooltip id='tooltip-top tooltip-custom'>
                                                        Compare
                                                    </Tooltip>
                                                    }
                                                >
                                                    <p>
                                                        <CompareArrows/>
                                                    </p>
                                                </OverlayTrigger>
                                                </div>
                                            </span>
                                            <p>
                                                {prod.name}
                                            </p>
                                            <p>
                                                {prod.description}
                                            </p>
                                            <p>
                                                <Star fontSize="small"/> {prod.rating}
                                            </p>
                                            <p>
                                                {prod.cost}
                                            </p>
                                        </div>
                                    </Col>);
                                }
                            )}
                            </Row>
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