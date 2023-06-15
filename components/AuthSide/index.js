import React from 'react'
import { auth_banner, logo } from '../../helpers/images';
import ImageComponent from '../../components/image';

const style = {
    backgroundImage: `url(${auth_banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    display: 'flex',
};

function AuthSide() {

    return (
        <div style={style}>
            <div className='authInnerCtr'>
                <div>
                    <ImageComponent src={logo} alt="logo" width="100" />
                </div>
                <div>
                    <h2>Welcome to Metronic!</h2>
                    <p>The ultimate Bootstrap & React 16 admin theme framework for next generation web apps.</p>
                </div>
                <div className='text-right'>
                    © 2023 Metronic
                </div>
            </div>
        </div>
    )
}

export default AuthSide