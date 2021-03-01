import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardImgOverlay} from 'reactstrap';
import './dashboard.css';

function Dashboard() {
    return (
        <div className="home">
            <div className='container'>
                <Card id='dash_card'>
                    <CardImg src='https://picsum.photos/200' alt='yt_video' />
                    <CardImgOverlay >
                        <p className='dash_duration'>
                            Duration
                        </p>
                    </CardImgOverlay>
                    <CardBody>
                        <div className='row'>
                            <div className='col-2 col-md-1'>
                                <img src="https://picsum.photos/50" alt="Remy Sharp" className='dash_avatar'/>
                            </div>
                            <div className='offset-1 offset-md-0 col-9 col-md-11 dash_body '>
                                <CardTitle className='dash_title'>This is the title, it will usually be very big</CardTitle>
                                <p className='dash_chan'>
                                    Channel name
                                </p>
                                <p className='dash_views'>
                                    69 Views • 1 year ago
                                </p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Dashboard;