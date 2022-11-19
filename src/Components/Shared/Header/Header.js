import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/logo.png';
import { AuthContext } from '../../../contexts/UserContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='header px-40 py-5 relative'>
            <button onClick={() => setToggle(!toggle)} className='absolute right-5 top-5 md:hidden'>
                {
                    toggle ?
                        <GrClose size={30}></GrClose>
                        :
                        <GiHamburgerMenu size={30}></GiHamburgerMenu>
                }
            </button>
            <div className={`md:flex md:justify-between absolute z-10 rounded bg-gray-100 md:static duration-200 ease-in-out ${toggle ? 'top-0' : 'top-[-200px]'}`}>
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
                        <div className='nav-link'>
                            <Link to='/blogs'><button className="btn btn-outline btn-sm mx-2  btn-accent">BLOGS</button></Link>
                        </div>
                    </div>
                    <div className="flex-none ml-5">
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
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text px-3">Dark Mode</span>
                                        <input data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" type="checkbox" className="toggle toggle-accent" />
                                    </label>
                                </div>
                                {
                                    user?.uid ?
                                        <li><button onClick={logOut}>Logout</button></li>
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