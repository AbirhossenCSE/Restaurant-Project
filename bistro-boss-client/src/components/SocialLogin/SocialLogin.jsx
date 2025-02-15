import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })

            })
    }
    return (
        <div className='w-10/12 mx-auto'>
            <div className='divider'>OR</div>
            <div className='w-3/4 my-4 mx-auto'>
                <button onClick={handleGoogleSignIn} className="btn btn-neutral">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;


