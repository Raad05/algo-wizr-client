import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { createUser, googleLogin, githubLogin } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
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
        <div className='signup-form'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-center">Sign Up Now!</h1>
                        <p className="py-6">Sign up for free and get started with your programming journey.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">
                        <form onSubmit={handleSignUp}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Full name" className="input input-bordered" required />
                                </div>
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
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                    <label className="label">
                                        <Link to='/login'><button className="label-text-alt link link-hover">Already have an account?</button></Link>
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

export default SignUp;