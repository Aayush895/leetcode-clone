import { useState } from 'react'
import { Link } from 'react-router'
import { useLoginUser } from '../../Hooks/mutations/useLoginUser'

function Login() {
  const mutationFunctionObj = useLoginUser()
  const { mutate } = mutationFunctionObj
  const [userLoginDetails, setuserLoginDetails] = useState({
    username: '',
    email: '',
    password: '',
  })

  function handleUserLoginDetails(e) {
    if (e.target.name == 'username') {
      setuserLoginDetails({
        ...userLoginDetails,
        username: e.target.value,
      })
    } else if (e.target.name == 'email') {
      setuserLoginDetails({
        ...userLoginDetails,
        email: e.target.value,
      })
    } else if (e.target.name == 'password') {
      setuserLoginDetails({
        ...userLoginDetails,
        password: e.target.value,
      })
    }
  }

  function handleLogin(e) {
    e.preventDefault()
    mutate(userLoginDetails)
    setuserLoginDetails({
      username: '',
      email: '',
      password: '',
    })
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[radial-gradient(closest-side_at_50%_135%,#ffffff_50%,#eceff1_100%)]">
      <form
        action=""
        className="w-[25%] h-160 flex flex-col justify-center items-center bg-white"
      >
        <img
          src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg"
          className="mb-10"
        />

        <div className="border border-gray-300 w-[85%] p-2 mb-9 text-gray-600">
          <input
            type="text"
            placeholder="Username"
            className="w-full"
            name="username"
            value={userLoginDetails?.username}
            onChange={handleUserLoginDetails}
          />
        </div>
        <div className="border border-gray-300 w-[85%] p-2 mb-9 text-gray-600">
          <input
            type="email"
            placeholder="E-mail address"
            className="w-full"
            name="email"
            value={userLoginDetails?.email}
            onChange={handleUserLoginDetails}
          />
        </div>
        <div className="border border-gray-300 w-[85%] p-2 mb-9 text-gray-600">
          <input
            type="password"
            placeholder="Password"
            className="w-full"
            name="password"
            value={userLoginDetails?.password}
            onChange={handleUserLoginDetails}
          />
        </div>

        <button
          className="w-[85%] p-2 mb-9 bg-gray-800 text-white rounded-sm"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-gray-300">
          Dont' have an account?{' '}
          <span className="text-gray-700 cursor-pointer">
            <Link to="/">Register Here</Link>
          </span>
        </p>
      </form>
    </div>
  )
}
export default Login
