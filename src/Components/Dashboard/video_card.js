import React from 'react';
import { Card, CardBody, CardTitle} from 'reactstrap';
import './dashboard.css';

function Video_Card({img,title,channel_name,channel_img, channel_link, video_link, views, uploaded, duration}) {
    return (
        <div className="home">
            <div className='container'>
                
                    
                    {/* <CardImg src='https://picsum.photos/200' alt='yt_video' id='dash_image' />
                    <CardImgOverlay >
                        <p className='dash_duration'>
                            Duration
                        </p>
                    </CardImgOverlay> */}
                    <div width='50vw' height = '25vw'>
                        <img src={img} alt="Remy Sharp"  id='dash_image' />
                        <div className="dash_duration">{duration}</div>                       
                    </div>
                    <Card id='dash_card'>
                    <CardBody>
                        <div className='row'>
                            <div className=''>
                                <img src={channel_img} alt="Remy Sharp" className='dash_avatar' width='73%'/>
                            </div>
                            <div className=' dash_body '>
                                <div className='dash_title mb-1'>{title}</div>
                                <div className='dash_chan'>
                                    <a href={channel_link} target = 'blank' id='dash_chan_link'>

                                    {channel_name}
                                    </a>
                                </div>
                                <div className='dash_views'>
                                    {views} Views • {uploaded}
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Video_Card;