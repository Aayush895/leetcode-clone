function Login() {
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
          <input type="email" placeholder="E-mail address" className="w-full" />
        </div>
        <div className="border border-gray-300 w-[85%] p-2 mb-9 text-gray-600">
          <input type="password" placeholder="Password" className="w-full" />
        </div>

        <button className="w-[85%] p-2 mb-9 bg-gray-800 text-white rounded-sm">
          Login
        </button>
      </form>
    </div>
  )
}
export default Login
