import { PaginationType } from "@/types/product";
import { FC } from "react";
import PaginationItem from "./components/PaginationItem";
import { createArrayRange } from "@/tools";

interface PaginationProps {
  pagination: PaginationType;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: FC<PaginationProps> = (props) => {
  const {
    pagination: { last, next, first, pages, prev, items },
    currentPage,
    setCurrentPage,
  } = props;

  return (
    <nav aria-label="Пример навигации по страницам">
      <ul className="pagination justify-content-center">
        {createArrayRange(pages).map((page) => (
          <PaginationItem active={page === currentPage}>{page}</PaginationItem>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
