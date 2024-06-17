import { clsx } from "clsx";
import React, { FC } from "react";

interface PaginationItemProps {
  children: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
}

const PaginationItem: FC<PaginationItemProps> = ({
  children,
  active,
  disabled,
}) => {
  return (
    <li className={clsx("page-item", { active, disabled })}>
      <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">
        {children}
      </a>
    </li>
  );
};

export default PaginationItem;
