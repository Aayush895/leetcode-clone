import { useState } from 'react'
import { Link } from 'react-router'
import { useRegisterUser } from '../../Hooks/mutations/useRegisterUser'
import useAuthStore from '../../Store/useAuthStore'

function Register() {
  const mutationFunction = useRegisterUser()
  const { userInfo, isUserRegistered } = useAuthStore()
  const { mutate } = mutationFunction
  const [userRegisterationDetails, setuserRegisterationDetails] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
    role: '',
  })
  console.log(userInfo, isUserRegistered)
  function handleRegisterationDetails(e) {
    if (e.target.name == 'username') {
      setuserRegisterationDetails({
        ...userRegisterationDetails,
        username: e.target.value,
      })
    } else if (e.target.name == 'fullname') {
      setuserRegisterationDetails({
        ...userRegisterationDetails,
        fullname: e.target.value,
      })
    } else if (e.target.name == 'email') {
      setuserRegisterationDetails({
        ...userRegisterationDetails,
        email: e.target.value,
      })
    } else if (e.target.name == 'password') {
      setuserRegisterationDetails({
        ...userRegisterationDetails,
        password: e.target.value,
      })
    } else {
      setuserRegisterationDetails({
        ...userRegisterationDetails,
        role: e.target.value,
      })
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    mutate(userRegisterationDetails)
    setuserRegisterationDetails({
      username: '',
      fullname: '',
      email: '',
      password: '',
      role: '',
    })
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[radial-gradient(closest-side_at_50%_135%,#ffffff_50%,#eceff1_100%)]">
      <form
        action={'/post'}
        className="w-[25%] h-160 flex flex-col justify-center items-center bg-white"
        onSubmit={handleSubmit}
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
            value={userRegisterationDetails?.username}
            onChange={handleRegisterationDetails}
          />
        </div>
        <div className="border border-gray-300 w-[85%] p-2 mb-9 text-gray-600">
          <input
            type="text"
            placeholder="Fullname"
            className="w-full"
            name="fullname"
            value={userRegisterationDetails?.fullname}
            onChange={handleRegisterationDetails}
          />
        </div>
        <div className="border border-gray-300 w-[85%] p-2 mb-9 text-gray-600">
          <input
            type="email"
            placeholder="E-mail address"
            className="w-full"
            name="email"
            value={userRegisterationDetails?.email}
            onChange={handleRegisterationDetails}
          />
        </div>
        <div className="border border-gray-300 w-[85%] p-2 mb-9 text-gray-600">
          <input
            type="password"
            placeholder="Password"
            className="w-full"
            name="password"
            value={userRegisterationDetails?.password}
            onChange={handleRegisterationDetails}
          />
        </div>

        <div className="border border-gray-300 w-[85%] p-2 mb-9 text-gray-600">
          <input
            type="text"
            placeholder="Role"
            className="w-full"
            name="role"
            value={userRegisterationDetails?.role}
            onChange={handleRegisterationDetails}
          />
        </div>

        <button className="w-[85%] p-2 mb-9 bg-gray-800 text-white rounded-sm">
          Sign Up
        </button>

        <p className="text-gray-300">
          Have an account?{' '}
          <span className="text-gray-700 cursor-pointer">
            <Link to="/login">Log In</Link>
          </span>
        </p>
      </form>
    </div>
  )
}
export default Register

// createdAt: '2025-12-26T17:59:30.353Z'
// email: 'aayush_test@test.com'
// fullname: 'aayush jha'
// password: '$2b$10$YWFZsWXJYFA8XMpmoEsVL.N1r81QsjKHCRnIP26v/8vMez5Mdv9oK'
// role: 'Admin'
// updatedAt: '2025-12-26T17:59:30.353Z'
// username: 'aayush_jha01'
