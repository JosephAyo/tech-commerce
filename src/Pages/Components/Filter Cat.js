import React from 'react';
import '../style/Home.css';
import { Menu } from '@material-ui/icons';
const Home = ({location})=>{
    return(
        <div id="filter-div">
            <div>
                <Menu/>
                <select name="categories" id="filter-categories">
                <option value="All categories">All categories</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes sadasdkad adjkas</option>
                <option value="audi">Audi</option>
                </select>
            </div>
        </div>
    )
};

export default Home;