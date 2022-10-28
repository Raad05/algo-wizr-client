import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const { login, googleLogin, githubLogin } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })

        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })

        githubLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='login-form'>
            <div className="hero min-h-screen bg-base-200">
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
                                <div className="form-control mt-6">
                                    <button className="btn btn-accent">Login</button>
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