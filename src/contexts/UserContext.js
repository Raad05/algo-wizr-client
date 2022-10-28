import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = { createUser, login };

    return (
        <div className='user-context'>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;