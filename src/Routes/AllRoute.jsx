import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostData from '../component/PostData'
import RetrieveData from '../component/RetrieveData'
import InvalidPage from '../component/InvalidPage'
import Navbar from '../component/Navbar'


export default function AllRoutes() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <PostData/>} ></Route>
                <Route path="/retrieve" element={<RetrieveData/>} ></Route>
                <Route path='*' element={<InvalidPage/>} ></Route>
            </Routes>
        </div>
    )
}