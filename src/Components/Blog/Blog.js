import React from 'react';
import Header from '../Shared/Header/Header';

const Blog = () => {
    return (
        <div className='blog'>
            <Header></Header>
            <div className='blogs-collapse px-40 mt-20'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is cors?
                    </div>
                    <div className="collapse-content">
                        <p><span className='font-bold'>Ans: </span>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Why should we use firebase? What other options do we have to implement authentication?
                    </div>
                    <div className="collapse-content">
                        <p><span className='font-bold'>Ans: </span>Firebase allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don't have to send requests to get new data, you only need to subscribe once.</p><br />
                        <p>Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does the private router work?
                    </div>
                    <div className="collapse-content">
                        <p><span className='font-bold'>Ans: </span>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is Node? How does Node.JS work?
                    </div>
                    <div className="collapse-content">
                        <p><span className='font-bold'>Ans: </span>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;