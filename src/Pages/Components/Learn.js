import React from 'react';
import moment from 'moment';
import '../style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Row,
    Col,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';
import { 
    FavoriteTwoTone,
    VisibilityTwoTone,
    QuestionAnswerTwoTone,
    AccessTimeTwoTone,
    CreateTwoTone
} from '@material-ui/icons';
import LearnPosts from '../Data/Learn Posts.json';
const Learn = ()=>{
    const [highlight,setHighlight] = React.useState();
    return(
            <div className="learn-body">
            <p>
                LEARN BLOG
            </p>
            <Row className="justify-content-center">
            {   LearnPosts.map((post,index)=>{
                return(
                    <Col xs={12} sm={6} lg={3}  key={post._id}>
                        <div className="learn-card" 
                        onMouseEnter={()=>setHighlight(index)}
                        onTouchStart={()=>setHighlight(index)} >
                            <span className="product-img-span">
                                <img src={post.picture} alt={post.title}/>
                                <div id={highlight===index?"show-options":"hide-options"}>
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
                                    <Tooltip id='tooltip-top'>
                                        Comments
                                    </Tooltip>
                                    }
                                >
                                    <p>
                                        <QuestionAnswerTwoTone/> <span className="comment-badge">0</span>
                                    </p>
                                </OverlayTrigger>
                                </div>
                            </span>
                            <p className="learn-card-title">
                                {post.title.length>30?(post.title.substr(1,30)+"..."):(post.title)}
                            </p>
                            <p>
                                <CreateTwoTone fontSize="small"/> {post.author}
                            </p>
                            <p>
                                <AccessTimeTwoTone fontSize="small"/> {moment(new Date(post.publish_date)).format("YYYY-MM-DD")}
                            </p>
                        </div>
                    </Col>);
                }
            )}
            </Row>
        </div>
    )
};

export default Learn;