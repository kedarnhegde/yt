import React from 'react';
import './dashboard.css';
import Video_Card from './video_card';

function Dashboard() {

    const data = [
        {
            "img": "https://picsum.photos/200/300",
            "title": "This is a title",
            "channel_img": "https://picsum.photos/200/300",
            "channel_name": "Kedar Hegde",
            "channel_link": 'https://www.facebook.com',
            'video_link': 'www.youtube.com',
            "views": "69",
            "uploaded" : "1 Year Ago",
           "duration" : "10:25"
        }
    ]

    const videos = data.map((val) => {
        return (
            
            <div className = 'col-12 col-md-6 col-lg-3 mb-2 mt-2' >
               < Video_Card img={val.img} title={val.title} channel_name={val.channel_name} channel_img={val.channel_img} channel_link={val.channel_link} video_link={val.video_link}
                            views={val.views} uploaded = {val.uploaded} duration = {val.duration}/>
            </div>
            
        );
    })



    return (
        <div className=''>
            <div className='row'>

            {videos}
            </div>
        </div>
    );
}
export default Dashboard;