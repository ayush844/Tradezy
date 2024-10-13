import React, { useEffect, useState } from 'react'

import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import UpdateProfile from '../Components/Modals/UpdateProfile';
import PrevOrder from '../Components/Cards/PrevOrder';
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { fireDB } from '../firebase/FirebaseConfig';
import defaultPic from "../assets/defaultProfile.png"

const Me = () => {

  const [showModal, setShowModal] = useState(false);

  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.clear('user');
    navigate("/login")
  }

  // const user = JSON.parse(localStorage.getItem('user'));

  // let uid = user.user.uid;

  // if (user && user.user && user.user.uid) {
  //   const userEmail = user.user.email;

  //   const fetchUsername = async (uid) => {
  //       try {
  //           // Reference to the user document in Firestore
  //           const userDocRef = doc(fireDB, "users", uid); // Assuming your collection name is "users"
            
  //           // Fetch the document
  //           const userDocSnap = await getDoc(userDocRef);

  //           console.log(userDocSnap)
            
  //           if (userDocSnap.exists()) {
  //               const userData = userDocSnap.data();
  //               console.log("Username:", userData.username);
  //               return userData.username;
  //           } else {
  //               console.log("No user document found with UID:", uid);
  //               return null;
  //           }
  //       } catch (error) {
  //           console.error("Error fetching user document:", error);
  //       }
  //     };

  //     fetchUsername(uid);
  // } else {
  //     console.log("No user found in local storage.");
  // }


  // let username;

      // Fetch user data from Firestore based on email
      useEffect(() => {
        const fetchUserData = async () => {
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.user && storedUser.user.email) {
                const userEmail = storedUser.user.email;

                try {
                    // Query Firestore to get user document with the matching email
                    const usersRef = collection(fireDB, "users");
                    const q = query(usersRef, where("email", "==", userEmail));
                    const querySnapshot = await getDocs(q);

                    if (!querySnapshot.empty) {
                        querySnapshot.forEach((doc) => {
                            setUserData(doc.data());  // Set user data
                        });
                    } else {
                        console.log("No user found with the given email.");
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            } else {
                console.log("No user found in local storage.");
            }
        };

        fetchUserData();
    }, []);  // Runs once on component mount


    console.log(userData)



  return (
    <main  className='min-h-screen overflow-x-hidden mb-6'>
    <div id="profile" className=' w-screen min-h-[100vh] lg:mt-12 lg:px-12 flex relative justify-center'>
      <div id="cartProducts" className={`lg:flex flex-col p-0 w-[100vw] lg:w-[80vw] min-h-[60vh] m-0 lg:mt-0 bg-slate-100 mx-0 lg:mx-2 lg:rounded-lg lg:p-6 items-center overflow-x-hidden`}>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 lg:gap-8 mt-8">

        <div className=' flex-[0.4] flex items-center justify-center'>
          <div className=" w-40 h-40 md:w-56 md:h-56 lg:w-80 lg:h-80">
            <img src={defaultPic}  className="rounded-full w-full h-full object-cover"  alt="" />
          </div>
        </div>


        <div id="customerInfo" className=' flex-[0.6] flex flex-col gap-5'>
          <div className=" flex justify-start gap-1 w-full items-center">
              <FaUserAlt className=' text-red-600 text-xl lg:text-3xl flex-[0.1]'/>
              <span className=' line-clamp-1 flex-[0.9] text-2xl lg:text-3xl '>{userData?.username}</span>
          </div>
          <div className=" flex justify-start gap-1 w-full items-center">
              <MdEmail className=' text-red-600 text-xl lg:text-3xl flex-[0.1]'/>
              <span className=' line-clamp-1 flex-[0.9] text-2xl lg:text-3xl '>{userData?.email}</span>
          </div>
          {/* <div className=" flex justify-start gap-1 w-full items-center">
              <IoCall className=' text-red-600 text-xl lg:text-3xl flex-[0.1]'/>
              <span className=' line-clamp-1 flex-[0.9] text-xl lg:text-3xl'>(555) 867-5309</span>
          </div>
          <div className=" flex justify-start gap-1 w-full items-center">
              <FaLocationDot className=' text-red-600 text-xl lg:text-3xl flex-[0.1]'/>
              <span className=' line-clamp-2 flex-[0.9] text-md lg:text-3xl '>123 Maplewood Drive, Apt 4B, Hawthorne, NY 10532, United States</span>
          </div> */}
        </div>

      </div>

      <div className="w-full flex items-center mt-6 md:mt-10 justify-center">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800  text-red-600 group" onClick={()=> setShowModal((prev) => !prev)}>
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  text-red-600 group-hover:text-white rounded-md group-hover:bg-opacity-0 text-base md:text-lg lg:text-2xl font-bold">
          Update Profile
          </span>
        </button>
        {showModal && <UpdateProfile setShowModal={setShowModal} />}
      </div>

      <div className=' w-full gap-4 md:gap-8 mt-10 md:mt-16 lg:mt-24 flex flex-col items-center '>
        <h2 className=' text-3xl md:text-4xl lg:text-5xl text-red-500 underline'>🛍️Previous Orders</h2>
        <div className=" w-full m-3 p-4 flex flex-wrap justify-center">

          <PrevOrder />
          <PrevOrder />
          <PrevOrder />
          <PrevOrder />
          <PrevOrder />
          <PrevOrder />

        </div>
      </div>

      <div className=" mt-10 md:mt-20 w-full items-center justify-center flex ">
        <button onClick={logout} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 flex items-center justify-center gap-3">
          <CiLogout  className=' text-2xl md:text-4xl font-bold'/>
          <span className=' text-lg md:text-2xl font-bold'>Log Out</span>
        </button>

      </div>

      </div>
    </div>
    </main>  
  )
}

export default Me