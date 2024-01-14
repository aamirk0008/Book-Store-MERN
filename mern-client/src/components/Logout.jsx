import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'

const Logout = () => {
    const {logOut} = useContext(AuthContext)
    const location = useLocation()
	const navigate = useNavigate()

	const from = location.state?.from?.pathname || "/"

    const handleLogout = () => {
        logOut().then(() => {
            alert("Logout Successfull...!!!!")
            navigate(from, {replace: true})
            //signout successfull
        }).catch((error) => {
            //error occured
        })
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button onClick={handleLogout} className='bg-red-600 rounded py-3 px-10 text-white hover:bg-red-800'>Logout</button>
    </div>
  )
}

export default Logout