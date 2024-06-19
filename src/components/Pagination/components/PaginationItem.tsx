import { clsx } from "clsx";
import React, { FC } from "react";

interface PaginationItemProps {
  children: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  onClick: (number: number) => void;
  numberPage: number | null;
}

const PaginationItem: FC<PaginationItemProps> = ({
  children,
  active,
  disabled,
  onClick,
  numberPage,
}) => {
  return (
    <li
      className={clsx("page-item", {
        active,
        disabled: disabled || numberPage === null,
      })}
    >
      <a
        onClick={(event) => {
          event.preventDefault();
          numberPage && onClick(numberPage);
        }}
        className="page-link"
        href="#"
        tabIndex={-1}
        aria-disabled="true"
      >
        {children}
      </a>
    </li>
  );
};

export default PaginationItem;
