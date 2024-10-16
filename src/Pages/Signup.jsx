import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png';
import MyContext from '../Context/data/MyContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import {auth, fireDB} from '../firebase/FirebaseConfig.jsx'
import { toast } from 'react-toastify';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../Components/Loader/Loader.jsx';


const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const context = useContext(MyContext);

    const {loading, setLoading} = context;


    const signup = async (e)=>{
        e.preventDefault();

        setLoading(true);

        // console.log(username, email, password);

        if(username.trim()==="" || email.trim()==="" || password.trim()==="" || confirmPassword.trim()===""){
            return toast.error("all fields are required")
        }

        if(password !== confirmPassword){
            return toast.error("password and confirmPassword are not same");
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);

            console.log(users);

            var user = {
                username: username,
                email: email,
                uid: users.user.uid,
                time: Timestamp.now()
            }

            // creating a collection:

            const userRef = collection(fireDB, "users");

            // adding data to the collection
            await addDoc(userRef, user);



            toast.success("Sign up successfull");

            setUsername("")
            setEmail("");
            setPassword("");
            setConfirmPassword("");

            navigate('/login');
            

            setLoading(false);


        } catch (error) {
            toast.error("some error occured");
            console.log(error);
            setLoading(false);
        }

    }



  return (
    <div className=' h-[100vh] w-[100vw] flex items-center justify-center p-4'>
    {
    loading ? <Loader /> : 
        <div className=" flex flex-col gap-8 bg-white border-2 md:rounded-lg border-gray-300 h-full w-full lg:h-fit lg:w-[30rem] items-center justify-center p-8">
            <Link to="/" id='brand' className='flex gap-2 items-center justify-center'>
                <img className='object-cover max-w-12 max-h-12 md:max-h-14 md:max-w-14' src={logo} alt="logo" />
                <span className='text-3xl font-medium font-display md:text-4xl'>Tradezy</span>
            </Link>

            <h2 className=' font-light text-3xl'>SIGN UP</h2>

            <form className=' flex flex-col gap-6 items-center justify-center' onSubmit={signup}>
                <div className=" flex flex-col">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder='enter your username' className=' bottom-3 border-black bg-gray-200 outline-none rounded-md px-3 py-2' value={username} onChange={(e)=>(setUsername(e.target.value))}/>
                </div>

                <div className=" flex flex-col">
                    <label for="email">Email address:</label>
                    <input type="email" id="email" name="email" placeholder='enter your email address' className=' bottom-3 border-black bg-gray-200 outline-none rounded-md px-3 py-2' value={email}  onChange={(e)=>(setEmail(e.target.value))}/>
                </div>

                <div className=" flex flex-col">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder='enter your password' className=' bottom-3 border-black bg-gray-200 outline-none rounded-md px-4 py-3' value={password}  onChange={(e)=>(setPassword(e.target.value))}/>
                </div>

                <div className=" flex flex-col">
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder='confirm your password' className=' bottom-3 border-black bg-gray-200 outline-none rounded-md px-4 py-3' value={confirmPassword}  onChange={(e)=>(setConfirmPassword(e.target.value))}/>
                </div>

                <button type="submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-xl mt-6">SUBMIT</button>

                <p>already registered? <Link to='/login' className=' text-blue-500 hover:underline'>LOG IN</Link></p>
            </form>
        </div>
    }
    </div>
  )
}

export default Signup