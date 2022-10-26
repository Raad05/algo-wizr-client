import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer/Footer';
import Header from '../../Components/Shared/Header/Header'
import RightSide from '../../Components/Shared/RightSide/RightSide';

const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <div className='grid grid-cols-12'>
                <div className="col-span-9"><Outlet></Outlet></div>
                <div className="col-span-3"><RightSide></RightSide></div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;