import Icon from "../atoms/Icon";

function Header() {
  return (
    <header className="bg-header py-4 mb-8">
      <div className="flex gap-8 mx-5 md:mx-10 lg:mx-34">
        <Icon name="Logo" className="h-full" />
        <nav>
          <ul className="flex gap-2">
            <li>
              <a
                href="/facilities"
                className="py-1.5 px-3 hover:underline text-active-nav"
              >
                Facilities
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-1.5 px-3 hover:cursor-not-allowed text-tertiary"
              >
                Locations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-1.5 px-3 hover:cursor-not-allowed text-tertiary"
              >
                Players
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-1.5 px-3 hover:cursor-not-allowed text-tertiary"
              >
                Access Management
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
