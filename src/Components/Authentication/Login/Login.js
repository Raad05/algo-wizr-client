import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import Header from '../../Shared/Header/Header';
import { useState } from 'react';

const auth = getAuth(app);

const Login = () => {
    const { login, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLogin = (event) => {
        setError('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError('Email or password does not match!')
                console.error(error);
            })
    }

    const googleLogin = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }

    const githubLogin = () => {
        setLoading(true);
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='login-form'>
            <Header></Header>
            <div className="hero mt-10 bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <p className="py-6">Login for free and get started with your programming journey.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="methods mt-10">
                            <div className='text-center'>
                                <button onClick={googleLogin} className="btn btn-outline btn-accent mb-3 btn-wide"><FaGoogle className='mr-2'></FaGoogle>Continue with Google</button>
                                <button onClick={githubLogin} className="btn btn-outline btn-accent mb-3 btn-wide"><FaGithub className='mr-2'></FaGithub>Continue with github</button>
                            </div>
                            <div className='flex justify-evenly'>
                                <hr className='w-32 mt-3' />
                                <p className='text-center'>or</p>
                                <hr className='w-32 mt-3' />
                            </div>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="mx-10 mb-10">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email Address" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                    <label className="label">
                                        <Link to='/signup'><button className="label-text-alt link link-hover">Don't have an account?</button></Link>
                                    </label>
                                </div>
                                {
                                    <p className='text-red-400 text-center'>{error}</p>
                                }
                                <div className="form-control mt-6">
                                    <button className="btn btn-accent text-white font-bold">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;