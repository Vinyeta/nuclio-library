import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

export const Avatar = ({ user }) => {
    return (
        <>
            { user &&
                <>
                    { user.avatar ?
                        <img src={user.avatar} className='avatar_image_container' />
                        :
                        <div className="avatar_text__container">{user.name.slice(0, 1)}</div>
                    }
                </>
            }
        </>
    )
}

Avatar.PropTypes = {
    /**
     * object user
     */
    user: PropTypes.shape({
        name: PropTypes.string,
        surname: PropTypes.string,
        email: PropTypes.email,
        password: PropTypes.string,
        avatar: PropTypes.string
    })
}

