import React from 'react';
import '../scss/main.scss';

class CardComponent extends React.Component {
    render() {
        let data = this.props.data;

        return (
            <div className='card'>
                <div className='card-profile-image'>
                    <img src={data.user.profile_image_url} alt={data.user.name} className='circle responsive-img' />
                </div> 

                <div className='card-content'>
                    <div className='tweet-header'> 
                        <div className='tweet-author'>
                            <a href={`https://twitter.com/${data.user.screen_name}`} target='_blank'>{`@${data.user.screen_name}`}</a>
                        </div>

                        <div className='tweet-timestamp'>
                            {new Date(data.created_at).toLocaleTimeString()}
                        </div>
                    </div>

                    
                    <div className='tweet-text'>
                        <span className='black-text'>{data.text}</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default CardComponent;
