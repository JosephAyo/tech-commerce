import React from 'react';
import '../../Pages/style/App.scss';
import OutsideCloser from './OutsideCloser';
import PropTypes from "prop-types";
import {
    AddShoppingCartTwoTone,
    DoneAllTwoTone,
    ShoppingCartTwoTone
} from '@material-ui/icons'
const Added = ({onClose,product}) => {
    return (
        <OutsideCloser isCalled={true}>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p onClick={()=>onClose()} id="close-add-card">
                                    X
                                </p>
                            </th>
                            <th>
                                <p id="add-card-status">
                                    PRODUCT ADDED <AddShoppingCartTwoTone/>
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>
                                <img src={product.picture} alt="product" id="add-card-img"/>
                            </td>
                            <td rowSpan={3} id="add-card-details">
                                <p>
                                    {product.name}
                                </p>
                                <p>
                                    {product.cost}
                                </p>
                                <p>
                                    {product.description}
                                </p>
                                <span id="add-card-options">
                                    <div>
                                        <p>
                                            View Cart <ShoppingCartTwoTone/>
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            Checkout <DoneAllTwoTone/>
                                        </p>
                                    </div>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>            
            </div>
        </OutsideCloser>
    )
}

Added.propTypes = {
    onClose: PropTypes.func.isRequired,
    product:  PropTypes.object.isRequired
};

export default Added;