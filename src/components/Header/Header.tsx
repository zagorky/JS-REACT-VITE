import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1"></div>
          <div className="col-4 text-center">
            <Link className="blog-header-logo text-dark" to="/">
              Пары по REACT
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="link-secondary" href="#" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mx-3"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Поиск</title>
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <path d="M21 21l-5.2-5.2"></path>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <Link className="p-2 link-secondary" to="/">
            Главная{" "}
          </Link>
          <Link className="p-2 link-secondary" to="/products">
            Каталог товаров{" "}
          </Link>
          <Link className="p-2 link-secondary" to="/add-item">
            Добавить товар{" "}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
