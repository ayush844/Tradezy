import React, { useEffect, useState } from 'react'

import MyContext from './MyContext'
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { toast } from 'react-toastify';

import { fireDB } from '../../firebase/FirebaseConfig';

const MyState = (props) => {


  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState({
    title: null,
    price: null,
    images: [],
    category: null,
    description: null,
    qty: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric"
      }
    )
  })


  const addProduct = async ()=>{

    if(product.title === null || product.title.trim === "" || product.price === null || product.price == 0 || product.images.length == 0 || product.category === null || product.description === null || product.description.trim === "" || product.qty === null || product.qty == 0){
      return toast.error("all fields are required");
    }

    setLoading(true);

    try {
      
      const productRef = collection(fireDB, 'products');

      await addDoc(productRef, product);

      toast.success("added product successfully");

      getProductData();

      setLoading(false);



    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("some error occurred");
    }

  }

  const [ourProduct, setOurProduct] = useState([]);

  const getProductData = async ()=>{

    setLoading(true);
    try {
      const q = query(
        collection(fireDB, 'products'),
        orderBy('time')
      )

      const data = onSnapshot(q, (querySnapshot)=>{
        let productArray = [];
        querySnapshot.forEach((doc)=>{
          productArray.push({...doc.data(), id: doc.id})
        });
        setOurProduct(productArray)
        setLoading(false);
      })

      return ()=>data;


    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }


  useEffect(()=>{
    getProductData();
  }, [])

  return (
    <MyContext.Provider value={{loading, setLoading, product, setProduct, addProduct, ourProduct}}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState