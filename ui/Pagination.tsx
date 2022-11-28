import { AnyMxRecord } from "dns";
import React from "react";

export const Pagination = ({
  currentPage = [],
  handler,
  handlerPrev,
  handlerNext,
  totalPages,
  active,
  activePage,
}: any) => {
  let id = 0;

  return (
    <div className="btn-group">
      <button className="btn" onClick={handlerPrev}>
        «
      </button>
      {currentPage?.map((page: AnyMxRecord) => (
        <button
          key={id++}
          className={`btn ${activePage === page && "btn-active"}`}
          onClick={() => {
            handler(page);
            window.scrollTo(0, 0);
          }}
        >
          {page as any}
        </button>
      ))}
      <button className="btn" onClick={handlerNext}>
        »
      </button>
    </div>
  );
};
