import React from 'react';
import '../style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Row,
    Col,
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
import disableScroll from 'disable-scroll';
import FeaturedProds from '../Data/Feautured Prods.json';
import JustAdded from './Just Added';
const Featured = ()=>{
    const [highlight,setHighlight] = React.useState();
    const [addProductState, setAddProductState] = React.useState({
        isAdded: false,
        product: null
    });
    React.useEffect(() => {
        if(addProductState.isAdded){
            disableScroll.on();
        } 
        return () => {
            disableScroll.off();
        }
    }, [addProductState.isAdded]);
    return(
            <Row className="justify-content-center">
            { addProductState.isAdded &&
                <JustAdded 
                onClose={()=>setAddProductState({...addProductState,isAdded:false})}
                product={addProductState.product}
                />
            }
            {   FeaturedProds.map((product,index)=>{
                return(
                    <Col xs={12} sm={6} lg={3}  key={product._id}>
                        <div className="item-box" 
                        onMouseEnter={()=>setHighlight(index)}
                        onTouchStart={()=>setHighlight(index)} >
                            <span className="product-img-span">
                                <img src={product.picture} alt={product.name}/>
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
                                        <p className={product.inCart?"carted-p":""} 
                                        onClick={()=>setAddProductState({...addProductState,isAdded:true,product:product})}>
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
                                {product.name}
                            </p>
                            <p>
                                {product.description}
                            </p>
                            <p>
                                <Star fontSize="small"/> {product.rating}
                            </p>
                            <p>
                                {product.cost}
                            </p>
                        </div>
                    </Col>);
                }
            )}
            </Row>
    )
};

export default Featured;