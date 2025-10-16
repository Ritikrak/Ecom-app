import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {BrowserRouter,Routes, Route,Navigate} from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
  import { ToastContainer, toast } from 'react-toastify';

export const backendUrl="https://ecom-app-1-8y8w.onrender.com"
export const currency='$'

const App = () => {
  const [token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(()=>{
    localStorage.setItem('token',token)

  },[token])

  return (
    // <div className='bg-gray-50 min-h-screen'>
    //   <ToastContainer/>
    //         <Routes>
    //     {/* Login route */}
    //     <Route
    //       path="/"
    //       element={

    //   token===""
    //   ?<Login setToken={setToken}/>
    // : <>
    //   <Navbar setToken={setToken}/>
    //   <hr />
    //   <div className='flex w-full'>
    //     <Sidebar/>
    //     <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
    //       <Routes>
    //         <Route path='/add' element={<Add token={token}/>}/>
    //         <Route path='/list' element={<List token={token}/>}/>
    //         <Route path='/orders' element={<Orders token={token}/>}/>
    //       </Routes>
    //     </div>

    //   </div>

    //   </>}
     
      

    // </div>
  //     <BrowserRouter>
  //   <div className="bg-gray-50 min-h-screen">
  //     <ToastContainer />
  //     <Routes>
  //       {/* Login route */}
  //       <Route
  //         path="/"
  //         element={
  //           token === "" ? (
  //             <Login setToken={setToken} />
  //           ) : (
  //             <Navigate to="/add" replace />
  //           )
  //         }
  //       />

  //       {/* Protected routes */}
  //       <Route
  //         path="/add"
  //         element={
  //           token === "" ? (
  //             <Navigate to="/" replace />
  //           ) : (
  //             <>
  //               <Navbar setToken={setToken} />
  //               <hr />
  //               <div className="flex w-full">
  //                 <Sidebar />
  //                 <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
  //                   <Add token={token} />
  //                 </div>
  //               </div>
  //             </>
  //           )
  //         }
  //       />

  //       <Route
  //         path="/list"
  //         element={
  //           token === "" ? (
  //             <Navigate to="/" replace />
  //           ) : (
  //             <>
  //               <Navbar setToken={setToken} />
  //               <hr />
  //               <div className="flex w-full">
  //                 <Sidebar />
  //                 <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
  //                   <List token={token} />
  //                 </div>
  //               </div>
  //             </>
  //           )
  //         }
  //       />

  //       <Route
  //         path="/orders"
  //         element={
  //           token === "" ? (
  //             <Navigate to="/" replace />
  //           ) : (
  //             <>
  //               <Navbar setToken={setToken} />
  //               <hr />
  //               <div className="flex w-full">
  //                 <Sidebar />
  //                 <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
  //                   <Orders token={token} />
  //                 </div>
  //               </div>
  //             </>
  //           )
  //         }
  //       />
  //     </Routes>
  //   </div>
  // </BrowserRouter>
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      <Routes>
        {/* ✅ Login route */}
        <Route
          path="/"
          element={
            token === "" ? (
              <Login setToken={setToken} />
            ) : (
              <Navigate to="/add" replace />
            )
          }
        />

        {/* ✅ Protected routes */}
        <Route
          path="/add"
          element={
            token === "" ? (
              <Navigate to="/" replace />
            ) : (
              <>
                <Navbar setToken={setToken} />
                <hr />
                <div className="flex w-full">
                  <Sidebar />
                  <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
                    <Add token={token} />
                  </div>
                </div>
              </>
            )
          }
        />

        <Route
          path="/list"
          element={
            token === "" ? (
              <Navigate to="/" replace />
            ) : (
              <>
                <Navbar setToken={setToken} />
                <hr />
                <div className="flex w-full">
                  <Sidebar />
                  <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
                    <List token={token} />
                  </div>
                </div>
              </>
            )
          }
        />

        <Route
          path="/orders"
          element={
            token === "" ? (
              <Navigate to="/" replace />
            ) : (
              <>
                <Navbar setToken={setToken} />
                <hr />
                <div className="flex w-full">
                  <Sidebar />
                  <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
                    <Orders token={token} />
                  </div>
                </div>
              </>
            )
          }
        />
      </Routes>
    </div>

  )
}

export default App

