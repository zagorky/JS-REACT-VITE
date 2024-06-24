import { RouteVar } from "@/router/constants";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        <NavItem to={RouteVar.home}>Главная</NavItem>
        <NavItem end to={RouteVar.catalog}>
          Каталог товаров
        </NavItem>
        <NavItem to={RouteVar.addItem}> Добавить товар</NavItem>
      </nav>
    </div>
  );
};

export default Nav;
