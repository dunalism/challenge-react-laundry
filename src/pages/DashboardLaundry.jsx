import { useDispatch, useSelector } from "react-redux";
import DarkMode from "../component/DarkTheme";
import TableProduct from "../component/TableProduct";
import { useEffect } from "react";
import useCheckToken from "../lib/useCheckToken";
import { logout, setGlobalData } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function DashboardLaundry() {
  // eslint-disable-next-line no-unused-vars
  let { user, token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logOut = () => {
    const confirmLogout = confirm("yakin ingin logout?");
    if (confirmLogout) {
      dispatch(logout());
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
    }
  };

  //validasi saat navigasi ke halaman dashboard
  useCheckToken();

  //menyimpan data response API ke global state
  useEffect(() => {
    dispatch(setGlobalData());
  }, []);

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col h-screen bg-base-100">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Enigma Laundry</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a>Pelanggan 1</a>
              </li>
              <li>
                <a>Transaksi 1</a>
              </li>
            </ul>
          </div>
          <div onClick={() => logOut()} className="btn">
            Log out
          </div>
          <DarkMode className={""} />
        </div>
        {/* Page content here */}

        <TableProduct />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Pelanggan</a>
          </li>
          <li>
            <a>Transaksi</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
