import React from 'react'
import Navigation from '../features/Header/Navigation'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className=' bg-[rgb(247,247,247)] h-screen'>
            <Navigation/>
            <div className=' flex flex-col items-center justify-center mt-16'>
                <div>
                    <img src="/images/404.png" alt="" />
                </div>
                <p className=' text-4xl my-4 text-gray-500'>صفحه مورد نظر یافت نشد !</p>
                <div>
                    <Link to="/">
                    <button className=' py-2 px-5 rounded-lg text-blue-600 border border-blue-600 mt-4'>رفتن به صفحه اصلی</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
