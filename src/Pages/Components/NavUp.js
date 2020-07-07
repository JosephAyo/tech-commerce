import React from 'react';
import { 
    NavigationTwoTone,
    ShoppingCartTwoTone,
    FavoriteTwoTone 
} from '@material-ui/icons';

const NavUp = (props) =>{
    const [scrollPosition, setSrollPosition] = React.useState(0);
    
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    return(
        <>
        {
            (scrollPosition > (props.position?props.position:250))&&
            <div id="nav-up" >
                <p className="up-ic" onClick={()=>window.scrollTo({top:0,left :0,behavior:'smooth'})}><NavigationTwoTone fontSize="inherit"/></p>
                <p className="with-icon"><FavoriteTwoTone/> <span className="badge-nav-up">0</span></p>
                <p className="with-icon"><ShoppingCartTwoTone/>
                <span className="badge-nav-up">{
                    scrollPosition}
                    </span>
                    </p>
            </div>
        }
        </>
    )
};

export default NavUp;