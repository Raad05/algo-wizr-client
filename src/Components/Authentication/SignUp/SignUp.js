import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import Header from '../../Shared/Header/Header';
import { useState } from 'react';

const auth = getAuth(app);

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (event) => {
        setError('');
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassowrd = form.confirm.value;

        if (confirmPassowrd !== password) {
            setError('Password does not match!');
            return;
        }
        if (password.length < 6) {
            setError('Password should be at least 6 characters!');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                updateUserName();
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })

        const updateUserName = () => {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {
                    console.log('Username updated');
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }

    return (
        <div className='signup-form'>
            <Header></Header>
            <div className="hero bg-base-200">
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
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
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
                                    <input type="password" name='confirm' placeholder="Confirm Password" className="input input-bordered" required />
                                    <label className="label">
                                        <Link to='/login'><button className="label-text-alt link link-hover">Already have an account?</button></Link>
                                    </label>
                                </div>
                                {
                                    <p className='text-red-400 text-center'>{error}</p>
                                }
                                <div className="form-control mt-6">
                                    <button className="btn btn-accent text-white font-bold">SIGN UP</button>
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