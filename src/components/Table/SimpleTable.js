import React from "react";
import { useTable, useSortBy } from "react-table";
import { FilterArrow } from '../SvgIcons/SvgIcon'


/**
 *
 * @param {{data:object,columns:object}} props
 */


const SimpleTable = ({columns,data}) => {
  const props = useTable(
    {
      columns,
      data:data,
    },
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    props;
  return (
    <>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <span className="filter-arrow-down ml-2">
                          {<FilterArrow columns={columns} data={data} />}
                        </span>
                      ) : (
                        <span className="filter-arrow-up ml-2">
                          {<FilterArrow />}
                        </span>
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SimpleTable;
