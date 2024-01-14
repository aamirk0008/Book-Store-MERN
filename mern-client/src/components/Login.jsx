import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider'
import { FaGoogle } from 'react-icons/fa6'

const Login = () => {
    const {login, loginwithGoogle} = useContext(AuthContext)
	const [error, serError] = useState("")

	const location = useLocation()
	const navigate = useNavigate()

	const from = location.state?.from?.pathname || "/"

	const handleLogin = (event) => {
		event.preventDefault()
		const form = event.target
		const email = form.email.value
		const password = form.password.value
        login(email, password).then((userCredential) => {
            //signIn
            const user = userCredential.user
            alert("Login Successfull!!!")
            navigate(from, {replace: true})
        }).catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            serError(errorMessage)
        })
		// console.log(email, password);
		
	}

	// signup using google account
	const handleRegister = () => {
		loginwithGoogle().then((result) => {
			const user = result.user
			alert("Sign up Successfully!!!!")
			navigate(from, {replace: true})
		}).catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
			serError(errorMessage)
		})
	}
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-red-300 to-red-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Sign In here</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
						</div>
						<div className="relative">
							<input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
						</div>
                        {error ? <p className='text-red-500 text-base'>Email and Password is not correct </p> : ""}
            <p className='font-5'>New to Bochord. <Link className='text-blue-500 underline' to="/sign-up">Sign Up</Link> </p>
						<div className="relative">
							<button className="bg-red-500 text-white rounded-md px-2 py-1 hover:bg-red-800">Sign In</button>
						</div>
					</form>
				</div>

				<hr />
				<div className='flex w-full items-center flex-col mt-5 gap-2'>
					<button onClick={handleRegister} className='block'><FaGoogle className='w-10 h-10 my-5 mx-2 inline-block'/>Login with Google</button>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Login