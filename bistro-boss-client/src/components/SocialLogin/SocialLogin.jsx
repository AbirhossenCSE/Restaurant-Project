import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);

            })
    }
    return (
        <div className='p-2'>
            <div className='divider'></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle></FaGoogle>
                    Button
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;