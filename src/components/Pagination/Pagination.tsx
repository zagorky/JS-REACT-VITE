import { PaginationType } from "@/types/product";
import { FC } from "react";
import PaginationItem from "./components/PaginationItem";

interface PaginationProps {
  pagination: PaginationType;
}

const Pagination: FC<PaginationProps> = (props) => {
  const {
    pagination: { last, next, first, pages, prev, items },
  } = props;

  return (
    <nav aria-label="Пример навигации по страницам">
      <ul className="pagination justify-content-center">
        <PaginationItem>Предыдущая</PaginationItem>
        <PaginationItem>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>Следующая</PaginationItem>
      </ul>
    </nav>
  );
};

export default Pagination;
