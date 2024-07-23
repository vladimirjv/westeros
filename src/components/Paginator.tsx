"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginatorProps = {
  page?: number;
  totalPages?: number;
};
export function Paginator({ totalPages = 10, page = 1 }: PaginatorProps) {

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  const firstPageNumber = isLastPage ? page - 2 : isFirstPage ? 1 : page - 1;
  const middlePageNumber = isLastPage ? page - 1 : isFirstPage ? 2 : page;
  const lastPageNumber = isLastPage ? page : isFirstPage ? 3 : page + 1;

  return (
    <Pagination>
      <PaginationContent>
        {!isFirstPage && (
          <PaginationItem>
            <PaginationPrevious href={`?page=${page - 1}`} />
          </PaginationItem>
        )}
        {!isFirstPage && page >= 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink
            isActive={isFirstPage}
            className="aria-current:text-foreground"
            href={`?page=${firstPageNumber}`}
          >
            {firstPageNumber}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`?page=${middlePageNumber}`}
            isActive={!isFirstPage && !isLastPage}
            className="aria-current:text-foreground"
          >
            {middlePageNumber}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`?page=${lastPageNumber}`}
            isActive={isLastPage}
            className="aria-current:text-foreground"
          >
            {lastPageNumber}
          </PaginationLink>
        </PaginationItem>
        {!isLastPage && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {!isLastPage && (
          <PaginationItem>
            <PaginationNext href={`?page=${page + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
