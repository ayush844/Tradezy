import React, { useContext, useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import MyContext from '../../Context/data/MyContext';

const AdminCustomerTable = () => {
  const context = useContext(MyContext);
  const { user } = context;

  // Check if the user exists and map it into the required format for the table
  const data = useMemo(() => {
    if (!user || user.length === 0) {
      return [];
    }

    // Mapping user data into a format for the table
    return user.map(u => ({
      id: u.uid,
      username: u.username,
      email: u.email,
    }));
  }, [user]);

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Username',
        accessor: 'username',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
  } = useTable({ columns, data }, useSortBy, usePagination);

  return (
    <div className='w-full mt-10 mb-16 overflow-x-auto'>
      <table {...getTableProps()} className='w-full shadow-md rounded-lg m-auto border-2 border-red-600'>
        <thead>
          {headerGroups.map(hg => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className='p-6 bg-red-600 text-white border border-white'>
                  {column.render('Header')}
                  {column.isSorted && <span>{column.isSortedDesc ? '📉' : '📈'}</span>}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className='text-start'>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className='hover:bg-slate-200'>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className='p-4 border border-black'>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='w-full my-8 flex items-center justify-center gap-6'>
        <button
          disabled={!canPreviousPage}
          onClick={previousPage}
          className='w-fit px-4 py-2 border-2 border-red-500 bg-white text-red-600 disabled:border disabled:border-slate-200 flex items-center justify-center disabled:bg-slate-300 disabled:text-slate-500 font-bold rounded-md hover:bg-red-600 hover:text-white transition-all'
        >
          prev
        </button>

        <span className='text-lg font-bold text-black'>
          {pageIndex + 1} of {pageCount}
        </span>

        <button
          disabled={!canNextPage}
          onClick={nextPage}
          className='w-fit px-4 py-2 border-2 border-red-500 bg-white text-red-600 disabled:border disabled:border-slate-200 flex items-center justify-center disabled:bg-slate-300 disabled:text-slate-500 font-bold rounded-md hover:bg-red-600 hover:text-white transition-all'
        >
          next
        </button>
      </div>
    </div>
  );
};

export default AdminCustomerTable;
