import { Link } from 'react-router'

function Register() {
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
          <input type="text" placeholder="Username" className="w-full" />
        </div>
        <div className="border border-gray-300 w-[85%] p-2 mb-9 text-gray-600">
          <input type="text" placeholder="Fullname" className="w-full" />
        </div>
        <div className="border border-gray-300 w-[85%] p-2 mb-9 text-gray-600">
          <input type="email" placeholder="E-mail address" className="w-full" />
        </div>
        <div className="border border-gray-300 w-[85%] p-2 mb-9 text-gray-600">
          <input type="password" placeholder="Password" className="w-full" />
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
