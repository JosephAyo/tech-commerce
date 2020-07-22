import React from 'react';
import './style/Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Row,
    OverlayTrigger,
    Tooltip,
    Table,
    Form,
    Col,
    Button,
    Container,
} from 'react-bootstrap';
import {
    ShoppingCartTwoTone,
    VisibilityTwoTone,
    RemoveCircleTwoTone
} from '@material-ui/icons';
import NavUp from './Components/NavUp';
import FavProds from './Data/Fav Prods.json';
const Cart = ({location})=>{
    React.useEffect(()=>{
        if(location.pathname==="/cart"){
            window.scrollTo({top:500,left :0,behavior:'smooth'})
        }
    },[location.pathname]);
    const [cartState,setCartState] = React.useState({
        products: null,
        recentlyRemoved:null
    });
    const [highlight,setHighlight] = React.useState();
    React.useEffect(()=>{
        setCartState(cartState=>({...cartState, products:FavProds}));
    },[]);
    // const removeHandler=(action,index)=>{
    //     let currentRemoved = null; 
    //     let currentCart = cartState.splice();
    //     switch (action) {
    //         case 0:
    //             currentRemoved = cartState[index];
    //             currentCart = currentCart.filter(el=>el !== cartState[index]);
    //             break;
    //         case 1: 
    //             currentCart.shift(cartState.recentlyRemoved)
    //         default:
    //             break;
    //     }
    //     setCartState({...cartState,products:currentCart,recentlyRemoved:currentRemoved})
    // }
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
                <div className="cart-body">
                <p>
                    CART
                </p>
                <Row className="justify-content-center">
                <Table responsive id="cart-table">
                    <thead id="cart-thead">
                        <tr id="cart-head-tr">
                            <th className="cart-th" id="product-th">
                                <p>
                                    Product
                                </p>
                            </th>
                            <th className="cart-th">
                                <p>
                                    Unit Price
                                </p>
                            </th>
                            <th className="cart-th">
                                <p>
                                    Stock Availability
                                </p>
                            </th>
                            <th className="cart-th">
                                <p>
                                    Quantity
                                </p>
                            </th>
                            <th className="cart-th">
                                <p>
                                    Total 
                                </p>
                            </th>
                            <th className="cart-th">
                                <p>
                                    Remove
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>{
                        cartState.products == null?
                        <tr>
                            <td colSpan={5}>
                                <p id="no-cart-prod">
                                    No products to show.
                                </p>
                            </td>
                        </tr>:
                        cartState.products.map((product,index)=>{
                        return( 
                            <tr key={product._id}>
                                <td>
                                    <div className="item-box-cart" 
                                        onMouseEnter={()=>setHighlight(index)}
                                        onTouchStart={()=>setHighlight(index)} >
                                            <span className="product-img-span-cart">
                                                <img src={product.picture} alt={product.name} width="100"/>
                                                <div id={highlight===index?"show-options-cart":"hide-options-cart"}>
                                                <OverlayTrigger
                                                    placement='top'
                                                    overlay={
                                                    <Tooltip 
                                                    id='tooltip-top tooltip-custom'>
                                                        {product.inCart?"Already in cart, remove?":"Add to cart"}
                                                    </Tooltip>
                                                    }
                                                >
                                                    <p className={product.inCart?"carted-p":""}>
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
                                                </div>
                                            </span>
                                            <p>
                                                {product.name}
                                            </p>
                                        </div>
                                </td>
                                <td>
                                    <p className="prod-p">
                                        {product.cost}
                                    </p>
                                </td>
                                <td>
                                    <p className={product.availability?"avail-p":"un-avail-p"}>
                                        {product.availability?"In stock":"Out of stock"}
                                    </p>
                                </td>
                                <td>
                                    <p className={product.inCart?"carted-p":"not-carted-p"}>
                                        <input type="number" value={1}/>
                                    </p>
                                </td>
                                <td>
                                    <p className="prod-p">
                                        {product.cost}
                                    </p>
                                </td>
                                <td>
                                    <p className="prod-p remove-p">
                                        <RemoveCircleTwoTone fontSize="inherit"/>
                                    </p>
                                </td>
                            </tr>)
                            })
                        }
                    </tbody>
                </Table>
                </Row>
            </div>
            <NavUp/>
        </Container>
    )
};

export default Cart;