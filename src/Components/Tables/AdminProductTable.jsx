import React, { useContext, useMemo } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import MyContext from '../../Context/data/MyContext';

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';


const AdminProductTable = () => {

  const context = useContext(MyContext);
  const {ourProduct, editHandle, deleteProduct} = context;

  console.log(ourProduct);


  const data = useMemo(() => ourProduct || [], [ourProduct]);


  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id"
      }, 
      {
        Header: "PRODUCT",
        accessor: "title"
      }, 
      {
        Header: "PRICE(₹)",
        accessor: "price"
      }, 
      {
        Header: "QUANTITY",
        accessor: "qty"
      },
      {
        Header: "CATEGORY",
        accessor: "category"
      },
      {
        Header: "ACTIONS",
        Cell: ({ row }) => (
          
          <div className="flex gap-4 items-center justify-center">
            <Link to="/admin/updateProduct">
              <button onClick={() => editHandle(row)} className="text-blue-600 hover:text-blue-800">
                <MdEdit size={20} />
              </button>
            </Link>

            <button onClick={() => deleteProduct(row)} className="text-red-600 hover:text-red-800">
              <MdDelete size={20} />
            </button>
          </div>
        )
      }
    ],
    []
  )

  const {getTableProps, getTableBodyProps, headerGroups, page, prepareRow, nextPage, previousPage, canPreviousPage, canNextPage, state:{pageIndex}, pageCount} = useTable({columns, data}, useSortBy, usePagination);

  return (
    <div className='w-full mt-10 mb-16 overflow-x-auto'>
      <table {...getTableProps()} className=' w-full shadow-md rounded-lg m-auto border-2 border-red-600'>
        <thead>
          {headerGroups.map(hg => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className=' p-6 bg-red-600 text-white border border-white'>
                  {column.render("Header")}
                  {
                    column.isSorted && <span>{column.isSortedDesc ? "📉" : "📈"}</span>
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className=' text-start'>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className=' hover:bg-slate-200'>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className='p-4 border border-black'>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className=" w-full my-8 flex items-center justify-center gap-6">
        <button disabled={!canPreviousPage} onClick={previousPage} className=' w-fit px-4 py-2 border-2 border-red-500 bg-white text-red-600 disabled:border disabled:border-slate-200 flex items-center justify-center disabled:bg-slate-300 disabled:text-slate-500 font-bold rounded-md hover:bg-red-600 hover:text-white transition-all'>prev</button>

        <span className=' text-lg font-bold text-black'>{pageIndex + 1} of {pageCount}</span>

        <button disabled={!canNextPage} onClick={nextPage} className=' w-fit px-4 py-2 border-2 border-red-500 bg-white text-red-600 disabled:border disabled:border-slate-200 flex items-center justify-center disabled:bg-slate-300 disabled:text-slate-500 font-bold rounded-md hover:bg-red-600 hover:text-white transition-all'>next</button>
      </div>
    </div>
  )
}

export default AdminProductTable
