import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default function Header() {
  const [pageState, setPageState] = useState("Connexion");

  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Connexion");
      }
    });
  }, [auth]);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  const [open, setOpen] = useState(false)
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <header className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div>
          <span className="font-bold text-2xl cursor-pointer font-[Poppins] text-gray-800 " onClick={() => navigate("/")}> RealEstatePlayers
          </span>

        </div>
        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden" >
          <ion-icon name={open ? 'close' : 'menu-outline'}></ion-icon>

        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
          <li
            className={`md:ml-8  cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
            onClick={() => navigate("/")}
          >
            Acceuil
          </li>
          <li
            className={`cursor-pointer md:ml-8  py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-up") && "text-black border-b-red-500"
              }`}
            onClick={() => navigate("/sign-up")}
          >
            Deposez un bien
          </li>

          <li
            className={` md:ml-8  cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
            onClick={() => navigate("/offers")}
          >
            Services
          </li>
          <li
            className={`md:ml-8  cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
              "text-black border-b-red-500"
              }`}
            onClick={() => navigate("/profile")}
          >
            {pageState}
          </li>
        </ul>
      </header>
    </div>
  );
}








