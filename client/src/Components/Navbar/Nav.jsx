import useAuthStore from '../../Store/useAuthStore'

function Nav() {
  const { userInfo } = useAuthStore()
  return (
    <div className="flex items-center justify-between px-7 py-5 shadow-sm">
      <div className="flex items-center justify-between w-[27.5%]">
        <img
          src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg"
          alt="leetcode-logo"
        />

        <ul className="list-none flex justify-evenly w-100 text-xl font-medium">
          <li>Dashboard</li>
          <li>Problems</li>
          <li>Users</li>
        </ul>
      </div>
      <div className="capitalize text-2xl p-5.5 font-bold italic">
        <p>Admin - {userInfo?.fullname}</p>
      </div>
    </div>
  )
}
export default Nav
