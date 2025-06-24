import { useNavigate } from "react-router";
import Icon from "../atoms/Icon";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-header py-4 mb-8">
      <div className="flex gap-8 mx-5 md:mx-10 lg:mx-34">
        <div onClick={() => navigate("/facilities")} className="cursor-pointer">
          <Icon name="Logo" className="h-full" wrapperClass="h-full" />
        </div>
        <nav className="hidden sm:block">
          <ul className="flex gap-2">
            <li>
              <div
                onClick={() => navigate("/facilities")}
                className="py-1.5 px-3 hover:underline text-active-nav"
              >
                Facilities
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
