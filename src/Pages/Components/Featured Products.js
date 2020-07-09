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
import FeaturedProds from '../Data/Feautured Prods.json';
const Featured = ()=>{
    const [highlight,setHighlight] = React.useState();
    return(
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
                                    <Tooltip 
                                    id='tooltip-top tooltip-custom'>
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
    )
};

export default Featured;