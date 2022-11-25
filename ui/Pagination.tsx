import { AnyMxRecord } from "dns";
import React from "react";

export const Pagination = ({
  currentPage = [],
  handlerPrev,
  handlerNext,
  totalPages,
}: any) => {
  let id = 0;

  return (
    <div className="btn-group">
      <button className="btn" onClick={handlerPrev}>
        «
      </button>
      {currentPage?.map((page: AnyMxRecord) => (
        <button key={id++} className="btn">
          {page as any}
        </button>
      ))}
      <button className="btn" onClick={handlerNext}>
        »
      </button>
    </div>
  );
};
