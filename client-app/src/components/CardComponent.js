import React from 'react';
import '../scss/main.scss';
import moment from "moment";

class CardComponent extends React.Component {
    
    timeElapsed = (created_at) =>  {
        console.log('timeElapsed Called');
        const tweetTime = new Date(created_at).toLocaleTimeString('en-US');
        const currentDate = new Date;
        const currentTime = currentDate.toLocaleTimeString('en-US');
        return tweetTime - currentTime;
    }

    render() {
        const data = this.props.data;
        // const postTimeMoment = moment(data.timestamp_ms);
        // const currentDate = new Date();
        // const currentTime = currentDate.getTime();
        // const currentTimeMoment = moment(currentTime);
        // const diff = currentTimeMoment.diff(postTimeMoment);
        // const diffDuration = moment.duration(diff);
        // console.log('diffDuration:', diffDuration);
        return (
            <div className='card grey-border'>
                <div className='card-profile-image'>
                    <img src={data.user.profile_image_url} alt={data.user.name} className='circle responsive-img' />
                </div> 

                <div className='card-content'>
                    <div className='tweet-header'> 
                        <div className='tweet-author'>
                            <div className='white-text bold'>{data.user.name}</div>
                            <a className='grey-text' href={`https://twitter.com/${data.user.screen_name}`} target='_blank'>{`@${data.user.screen_name}`}</a>
                        </div>

                        <div className='tweet-timestamp grey-text'>
                            {/* {data.timestamp_ms} */}
                            {new Date(data.created_at).toLocaleTimeString()}
                        </div>
                    </div>

                    
                    <div className='tweet-text white-text'>
                        <span className='black-text'>{data.text}</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default CardComponent;
