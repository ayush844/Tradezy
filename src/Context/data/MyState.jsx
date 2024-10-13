import React, { useEffect, useState } from 'react'

import MyContext from './MyContext'
import { Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

import { fireDB } from '../../firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';

const MyState = (props) => {




  // Local state to track loading status
  const [loading, setLoading] = useState(false);

  // Local state to store the details of a product
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
        month: "short", // Display month in short form (e.g., Jan)
        day: "2-digit", // Display day as 2-digit number
        year: "numeric" // Display year in numeric form (e.g., 2024)
      }
    )
  })


// Function to add a new product to the Firestore database
  const addProduct = async ()=>{

    // check if any required field is missing 
    if(product.title === null || product.title.trim === "" ||  product.price === null || product.price == 0 || product.images.length == 0 || product.category === null || product.description === null || product.description.trim === "" || product.qty === null || product.qty == 0){
      console.log(product)
      return toast.error("all fields are required");
    }

    setLoading(true);

    try {
      
      const productRef = collection(fireDB, 'products');  // Create a reference to the 'products' collection in Firestore

      await addDoc(productRef, product);  // Add the product to Firestore

      toast.success("added product successfully");

      // Reset the product state after successful addition
      setProduct({
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
            month: "short", // Display month in short form (e.g., Jan)
            day: "2-digit", // Display day as 2-digit number
            year: "numeric" // Display year in numeric form (e.g., 2024)
          }
        )
      });

      getProductData(); // Call getProductData function to refresh the product list

      setLoading(false);



    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("some error occurred");
    }

  }

  const [ourProduct, setOurProduct] = useState([]); // State to hold the list of products fetched from Firestore


  // Function to fetch product data from Firestore in real-time
  const getProductData = async ()=>{

    setLoading(true);
    try {

      // query for the 'products' collection, ordered by 'time'
      const q = query(
        collection(fireDB, 'products'),
        orderBy('time')
      )

      // Use onSnapshot to listen for real-time updates
      const data = onSnapshot(q, (querySnapshot)=>{
        // array to hold fetched product
        let productArray = [];

        // Loop through each document in the query snapshot and add the document data along with its ID to the array
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
    getProductData(); // Call getProductData to fetch products when the component is first rendered
  }, [])



// update product function

  const editHandle = (item) => {
    const productData = { ...item.original, id: item.original.id };
    console.log(productData);
    setProduct(productData);
  }

  const updateProduct = async (e) => {
    e.preventDefault();
    if (!product.id) {
      toast.error("Product ID is missing");
      return;
    }
    console.log(product.id)
    setLoading(true);
    try {
      console.log("hello 1")
      await setDoc(doc(fireDB, "products", product.id), product);
      console.log("hello 2")
      toast.success("Product updated successfully");
      setTimeout(() => {
        window.location.href = '/admin/dashboard'
        
      }, 1000)

      getProductData();
      
      setLoading(false);

      
    } catch (error) {
      console.log("hello")
      console.log(error)
      setLoading(false);
    }
  }


    // delete product

  const deleteProduct = async (item) => {
      setLoading(true)
      try {
        await deleteDoc(doc(fireDB, 'products', item.original.id))
        toast.success('Product Deleted successfully')
        getProductData();
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
     }
  }



  return (
    <MyContext.Provider value={{loading, setLoading, product, setProduct, addProduct, ourProduct, editHandle, updateProduct, deleteProduct}}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState