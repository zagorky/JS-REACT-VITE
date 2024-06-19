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
    pagination: { next, pages, prev },
    currentPage,
    setCurrentPage,
  } = props;

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <nav aria-label="Пример навигации по страницам">
      <ul className="pagination justify-content-center">
        <PaginationItem onClick={handleClick} numberPage={prev}>
          Назад
        </PaginationItem>

        {createArrayRange(pages).map((page) => (
          <PaginationItem
            numberPage={page}
            onClick={handleClick}
            active={page === currentPage}
          >
            {page}
          </PaginationItem>
        ))}
        <PaginationItem onClick={handleClick} numberPage={next}>
          Вперед
        </PaginationItem>
      </ul>
    </nav>
  );
};

export default Pagination;
