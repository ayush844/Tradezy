import React, { useContext, useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import logo from '../assets/logo.png';
import MyContext from '../Context/data/MyContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/FirebaseConfig';
import { toast } from 'react-toastify';
import Loader from '../Components/Loader/Loader';

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const context = useContext(MyContext);

    const {loading, setLoading} = context;

    const login = async (e)=>{
        e.preventDefault();


        console.log(email, password);

        if(email.trim()==="" || password.trim===""){
            return toast.error("all fields are required")
        }

        setLoading(true);


        try {
            const result = await signInWithEmailAndPassword(auth, email, password);

            console.log(result);

            localStorage.setItem("user", JSON.stringify(result));

            toast.success("log in successfull");

            navigate('/')

            setLoading(false);


        } catch (error) {
            toast.error("no such user found");
            setLoading(false);
        }

    }

  return (
    <div className=' h-[100vh] w-[100vw] flex items-center justify-center'>
    {
        loading ? <Loader /> : 

        <div className=" flex flex-col gap-8 bg-white border-2 md:rounded-lg border-gray-300 h-full w-full lg:h-fit lg:w-[30rem] items-center justify-center p-8">
            <Link to="/" id='brand' className='flex gap-2 items-center justify-center'>
                <img className='object-cover max-w-12 max-h-12 md:max-h-14 md:max-w-14' src={logo} alt="logo" />
                <span className='text-3xl font-medium font-display md:text-4xl'>Tradezy</span>
            </Link>

            <h2 className=' font-light text-3xl'>LOG IN</h2>

            <form className=' flex flex-col gap-6 items-center justify-center' onSubmit={login}>
                <div className=" flex flex-col">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder='enter your email' className=' bottom-3 border-black bg-gray-200 outline-none rounded-md px-3 py-2'  value={email}  onChange={(e)=>(setEmail(e.target.value))}/>
                </div>

                <div className=" flex flex-col">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder='enter your password' className=' bottom-3 border-black bg-gray-200 outline-none rounded-md px-4 py-3' value={password}  onChange={(e)=>(setPassword(e.target.value))}/>
                </div>

                <button type="submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-xl mt-6">SUBMIT</button>

                <p>not registered yet? <Link to='/signup' className=' text-blue-500 hover:underline'>SIGN UP</Link></p>
            </form>
        
        </div>
    
    }    

    </div>
  )
}

export default LogIn