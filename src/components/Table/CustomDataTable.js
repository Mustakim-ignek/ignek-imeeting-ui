// src/components/filter.table.js
import React, { useState } from "react";

import {
  useTable,
  useGlobalFilter,
  usePagination,
  useSortBy,
} from "react-table";
import { ClayPaginationWithBasicItems } from "@clayui/pagination";
import { FilterArrow, SearchIcon, spritemap } from "../SvgIcons/SvgIcon";
import './TableStyle.css'
// import "@clayui/css/lib/css/atlas.css";
/**
 *
 * @param {{data:object,columns:object,children:element}} props
 */


function CustomDataTable({ columns, data, children }) {
  const props = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter, // useGlobalFilter!
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    page,
    state,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = props;

  //   const pageLengthData = page.length
  // const firstPageRows = rows.slice(0, 5);
  const [active, setActive] = useState(1);

  React.useEffect(() => {
    gotoPage(active - 1);
  }, [globalFilter, page, active]);

  return (
    <>
      <div className="row m-0 w-100">
        <div className=" col-12 mt-4 mb-3 text-enter ">
          <div className="row mb-3">
            <div className="col-sm-5 ">
              <div className="search_filter">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={globalFilter || ""}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                />
                <span>
                  <SearchIcon />
                </span>
              </div>
            </div>
            <div className="col-sm-7  mt-4 mt-sm-0 d-flex justify-content-end">
              {children}
            </div>
          </div>
          <div className="col-12 table-container table-responsive">
            <table {...getTableProps()} className="table">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        <span>
                          {column.canSort ? (
                            column.isSortedDesc ? (
                              <span className="filter-arrow-up ml-2">
                                {<FilterArrow />}
                              </span>
                            ) : (
                              <span className="filter-arrow-down ml-2">
                                {<FilterArrow />}
                              </span>
                            )
                          ) : (
                            ''
                          )}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="row mb-3">
            <div className="col-sm-6 ">
              <div className="item_per_page">
                <span className="item_per_page_title">ITEMS PER PAGE</span>
                <div className="item_num">
                  {[10, 20, 30, 40, 50].map((UpageSize) => (
                    <span
                      key={UpageSize}
                      value={UpageSize}
                      className={`${pageSize === UpageSize ? "active" : ""} `}
                      onClick={() => {
                        setPageSize(Number(UpageSize));
                      }}
                    >
                      {UpageSize}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-sm-6 pagination_wrap">
              <ClayPaginationWithBasicItems
                key={pageIndex}
                active={pageIndex + 1}
                ellipsisBuffer={2}
                onActiveChange={setActive}
                spritemap={spritemap}
                totalPages={pageOptions.length}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomDataTable;
