import React from 'react';
import '../style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Row,
    OverlayTrigger,
    Tooltip,
    Table
} from 'react-bootstrap';
import {
    ShoppingCartTwoTone,
    VisibilityTwoTone,
    RemoveCircleTwoTone
} from '@material-ui/icons';
import FavProds from '../Data/Fav Prods.json';
const Wishlist = ()=>{
    const [wishlistState,setWishlistState] = React.useState({
        products: null,
        recentlyRemoved:null
    });
    const [highlight,setHighlight] = React.useState();
    React.useEffect(()=>{
        setWishlistState(wishlistState=>({...wishlistState, products:FavProds}));
    },[]);
    // const removeHandler=(action,index)=>{
    //     let currentRemoved = null; 
    //     let currentWishlist = wishlistState.splice();
    //     switch (action) {
    //         case 0:
    //             currentRemoved = wishlistState[index];
    //             currentWishlist = currentWishlist.filter(el=>el !== wishlistState[index]);
    //             break;
    //         case 1: 
    //             currentWishlist.shift(wishlistState.recentlyRemoved)
    //         default:
    //             break;
    //     }
    //     setWishlistState({...wishlistState,products:currentWishlist,recentlyRemoved:currentRemoved})
    // }
    return(
            <div className="wishlist-body">
            <p>
                WISHLIST
            </p>
            <Row className="justify-content-center">
            <Table responsive id="wishlist-table">
                <thead id="wishlist-thead">
                    <tr id="wishlist-head-tr">
                        <th className="wishlist-th" id="product-th">
                            <p>
                                Product
                            </p>
                        </th>
                        <th className="wishlist-th">
                            <p>
                                Unit Price
                            </p>
                        </th>
                        <th className="wishlist-th">
                            <p>
                                Stock Availability
                            </p>
                        </th>
                        <th className="wishlist-th">
                            <p>
                                Add To Cart
                            </p>
                        </th>
                        <th className="wishlist-th">
                            <p>
                                Remove
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>{
                    wishlistState.products == null?
                    <tr>
                        <td colSpan={5}>
                            <p id="no-wishlist-prod">
                                No products to show.
                            </p>
                        </td>
                    </tr>:
                    wishlistState.products.map((product,index)=>{
                    return( 
                        <tr key={product._id}>
                            <td>
                                {/* <p className="prod-p">
                                    {product.name}
                                </p> */}
                                <div className="item-box" 
                                    onMouseEnter={()=>setHighlight(index)}
                                    onTouchStart={()=>setHighlight(index)} >
                                        <span className="product-img-span">
                                            <img src={product.picture} alt={product.name} width="200"/>
                                            <div id={highlight===index?"show-options":"hide-options"}>
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
                                    {product.inCart?"Added":"Not in cart"}
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
    )
};

export default Wishlist;