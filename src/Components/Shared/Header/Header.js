import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/logo.png';
import { AuthContext } from '../../../contexts/UserContext';

const Header = () => {
    const { user, logOut, orders } = useContext(AuthContext);

    return (
        <nav className='header px-40 py-5 relative'>

            <div className='flex justify-between '>
                <div className="logo">
                    <Link to='/home'><button className="btn btn-ghost normal-case text-4xl">
                        <img className='w-10 rounded' src={logo} alt="Logo" />AlgoWizR
                    </button></Link>
                </div>
                <div className='md:flex items-center'>
                    <div className='btn-navigation md:flex'>
                        <div className='nav-link'>
                            <Link to='/courses'><button className="btn btn-outline btn-sm mx-2 btn-accent">COURSES</button></Link>
                        </div>
                        <div className='nav-link'>
                            <button className="btn btn-outline btn-sm mx-2 btn-accent">FAQ</button>
                        </div>
                    </div>
                    <div className="flex-none ml-5">
                        <Link to='/orders' className="btn btn-ghost btn-circle mx-5">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{orders.length}</span>
                            </div>
                        </Link>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user?.photoURL ?
                                            <img src={user.photoURL} alt="User" />
                                            :
                                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="User" />

                                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    user?.uid &&
                                    <li className='font-bold'><button>{user.displayName}</button></li>
                                }
                                {
                                    user?.uid ?
                                        <li><Link to='/home'><button onClick={logOut}>Logout</button></Link></li>
                                        :
                                        <li><Link to='/login'><button>Login</button></Link></li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;