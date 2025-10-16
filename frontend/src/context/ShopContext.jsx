// import { createContext, useEffect, useState } from "react";
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// export const ShopContext=createContext();

// const ShopContextProvider=({children})=>{

//   const currency='$';
//   const delivery_fee=10;
//   const backendUrl=import.meta.env.VITE_BACKEND_URL
//   const [search,setSearch]=useState('');
//   const [showSearch,setShowSearch]=useState(false)
//   const [cartItems,setCartItems]=useState({});
//   const[products,setProducts]=useState([]);
//   const[token,setToken]=useState('')
//   const navigate=useNavigate();
// const addToCart= async(itemsId,size)=>{
//   if(!size){
//     toast.error('Select  Product Size');
//     return;
//   }
//   let cartData=structuredClone(cartItems);
//   if(cartData[itemsId]){
//     if(cartData[itemsId][size]){
//       cartData[itemsId][size]+=1;
//     }else{
//       cartData[itemsId][size]=1;
//     }
//   }
//   else{
//     cartData[itemsId]={};
//     cartData[itemsId][size]=1;
//   }
//   setCartItems(cartData);
//   if(token){
//     try {
//       await axios.post(backendUrl+'/api/cart/add',{itemsId,size},{headers:{token}})
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message)
      
//     }
//   }
// }
// // useEffect(()=>{
// //   console.log(cartItems);

// // },[cartItems])
// const getCartCount = () => {
//   let totalCount = 0;
//   for (const category in cartItems) {
//     for (const product in cartItems[category]) {
//       try {
//         if (cartItems[category][product] > 0) {
//           totalCount += cartItems[category][product];
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }
//   return totalCount;
// };

// const updateQuantity=async(itemsId,size,quantity)=>{
//   let cartData=structuredClone(cartItems);
//   cartData[itemsId][size]=quantity;
//   setCartItems(cartData);
//   if(token){
//     try {
//       await axios.post(backendUrl+'/api/cart/update',{itemsId,size,quantity},{headers:{token}})
//     } catch (error) {
//        console.log(error);
//       toast.error(error.message)
//     }
//   }

// }
// const getCartAmount = () => {
//   let totalAmount = 0;

//   for (const itemId in cartItems) {
//     let itemInfo = products.find(product => product._id === itemId);

//     if (!itemInfo) continue; // skip if product not found

//     const itemData = cartItems[itemId]; // e.g. { quantity: 2 } or maybe just a number

//     // If cartItems[itemId] is just a number (quantity):
//     if (typeof itemData === "number") {
//       totalAmount += itemInfo.price * itemData;
//     } 
//     // If it's an object with sizes/variants:
//     else if (typeof itemData === "object") {
//       for (const variant in itemData) {
//         const quantity = itemData[variant];
//         if (quantity > 0) {
//           totalAmount += itemInfo.price * quantity;
//         }
//       }
//     }
//   }

//   return totalAmount;
// };
// const getProductsData=async()=>{
//   try {
//     const response=await axios.get(backendUrl+'/api/product/list')
//     if(response.data.success){
//       setProducts(response.data.products)
//     }else{
//       toast.error(response.data.message)
//     }
//   } catch (error) {
//     console.log(error)
//     toast.error(error.message)
//   }
// }
// const getUserCart = async (token) => {
//   try {
//     const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
    
//     const response = await axios.post(
//       `${backendUrl}/api/cart/get`,
//       {}, // body
//       {
//         headers: {
//           Authorization: `Bearer ${token}` // use Bearer scheme
//         }
//       }
//     );

//     if (response.data.success) {
//       setCartItems(response.data.cartData);
//     }
//   } catch (error) {
//     console.log(error);
//     toast.error(error.message);
//   }
// }

// // const getUserCart=async(token)=>{
// //   try {
// //       const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
// //     const response=await axios.post(`${backendUrl}/api/cart/get`,{},{headers:{token}})
// //     if(response.data.success){
// //       setCartItems(response.data.cartData)
// //     }
// //   } catch (error) {
// //      console.log(error)
// //     toast.error(error.message)
// //   }
  
// // }
// // const getUserCart = async (token) => {
// //   // ✅ Make sure backend URL points to the correct port (4000)
// //   const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

// //   if (!token) {
// //     toast.error("User not authenticated");
// //     return;
// //   }

// //   try {
// //     console.log("📦 Fetching user cart from:", `${backendUrl}/api/cart/get`);

// //     const response = await axios.post(
// //       `${backendUrl}/api/cart/get`,
// //       {},
// //       { headers: { token } }
// //     );

// //     if (response.data.success) {
// //       setCartItems(response.data.cartData);
// //     } else {
// //       toast.error(response.data.message || "Failed to fetch cart");
// //     }
// //   } catch (error) {
// //     console.error("❌ Axios error:", error);
// //     toast.error(error.response?.data?.message || error.message);
// //   }
// // };

// useEffect(()=>{
//   getProductsData()
// },[])
// useEffect(()=>{
//   if(!token&&localStorage.getItem('token')){
//     setToken(localStorage.getItem('token'))
//     getUserCart(localStorage.getItem('token'))
//   }

// },[])

// // const getCartAmount=()=>{
// //   let totalAmount=0;
// //   for(const items in cartItems){
// //     let itemInfo=products.find((products)=>products._id===items);
// //     for(const items in cartItems[items]){
// //       try {
// //         if(cartItems[items][items]>0){
// //           totalAmount+=itemInfo.price*cartItems[items][items]
// //         }
// //       } catch (error) {
        
// //       }
// //     }
// //   }
// //   return totalAmount;
// // }

// // const getCartCount=()=>{
// //   let totalCount=0;
// //   for(const items in cartItems){
// //     for(const items in cartItems[items]){
// //       try {
// //         if(cartItems[items][items]>0){
// //           totalCount+=cartItems[items][items];
// //         }
// //       } catch (error) {
        
// //       }
// //     }
// //   }
// //   return totalCount;
// // }
//   const value ={
//     products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch,cartItems,setCartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate,backendUrl,setToken,token
//   }
//   return(
//     <ShopContext.Provider value={value}>
//       {children}

//     </ShopContext.Provider>
//   )
// }
// export default ShopContextProvider;
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = '$';
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const navigate = useNavigate();

  // Helper to get headers with token
  const getAuthHeaders = () => {
    if (!token) return {};
    return { Authorization: `Bearer ${token}` };
  };

  // Fetch products
  const getProductsData = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/product/list`);
      if (res.data.success) setProducts(res.data.products);
      else toast.error(res.data.message);
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  // Get user cart
  const getUserCart = async () => {
    if (!token) return; // user not logged in
    try {
      const res = await axios.post(`${backendUrl}/api/cart/get`, {}, { headers: getAuthHeaders() });
      if (res.data.success) setCartItems(res.data.cartData);
    } catch (err) {
      console.error("Axios error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || err.message);
      if (err.response?.status === 401 || err.response?.status === 403) {
        // Token invalid or expired
        localStorage.removeItem("token");
        setToken('');
        navigate("/login");
      }
    }
  };

  // Add to cart
  const addToCart = async (itemsId, size) => {
    if (!size) return toast.error('Select Product Size');

    const cartData = structuredClone(cartItems);
    if (!cartData[itemsId]) cartData[itemsId] = {};
    cartData[itemsId][size] = (cartData[itemsId][size] || 0) + 1;

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(`${backendUrl}/api/cart/add`, { itemsId, size }, { headers: getAuthHeaders() });
      } catch (err) {
        console.error(err);
        toast.error(err.response?.data?.message || err.message);
      }
    }
  };

  // Update quantity
  const updateQuantity = async (itemsId, size, quantity) => {
    const cartData = structuredClone(cartItems);
    if (!cartData[itemsId]) cartData[itemsId] = {};
    cartData[itemsId][size] = quantity;
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(`${backendUrl}/api/cart/update`, { itemsId, size, quantity }, { headers: getAuthHeaders() });
      } catch (err) {
        console.error(err);
        toast.error(err.response?.data?.message || err.message);
      }
    }
  };

  // Get cart count
  const getCartCount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        total += cartItems[itemId][size];
      }
    }
    return total;
  };

  // Get cart total amount
  const getCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const product = products.find(p => p._id === itemId);
      if (!product) continue;
      for (const size in cartItems[itemId]) {
        total += cartItems[itemId][size] * product.price;
      }
    }
    return total;
  };

  // Initial load
  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    if (token) getUserCart();
  }, [token]);

  const value = {
    products, currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch,
    cartItems, setCartItems, addToCart, getCartCount, updateQuantity, getCartAmount,
    navigate, backendUrl, token, setToken
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
