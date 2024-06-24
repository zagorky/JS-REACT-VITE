import clsx from "clsx";
import { FC, ReactNode } from "react";
import { NavLink, To } from "react-router-dom";

interface NavItemProps {
  to: To;
  children: ReactNode;
  end?: boolean;
}

const NavItem: FC<NavItemProps> = ({ end, children, to }) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => {
        return clsx("p-2 link-secondary", { active: isActive });
      }}
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
