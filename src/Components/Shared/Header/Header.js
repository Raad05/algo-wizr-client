import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/logo.png';
import { AuthContext } from '../../../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className='header px-40 py-5'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/home'><button className="btn btn-ghost normal-case text-4xl">
                        <img className='w-10 rounded mr-3' src={logo} alt="Logo" />AlgoWizR
                    </button></Link>
                </div>
                <div className='btn-navigation'>
                    <Link to='/home'><button className="btn btn-outline btn-sm mx-2 btn-accent">COURSES</button></Link>
                    <button className="btn btn-outline btn-sm mx-2 btn-accent">FAQ</button>
                    <button className="btn btn-outline btn-sm mx-2  btn-accent">BLOGS</button>
                </div>
                <div className="flex-none ml-5">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt="User" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><button>Profile</button></li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Dark Mode</span>
                                    <input type="checkbox" className="toggle toggle-accent" defaultChecked />
                                </label>
                            </div>
                            {
                                user?.uid &&
                                <>
                                    <li><button onClick={logOut}>Logout</button></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;