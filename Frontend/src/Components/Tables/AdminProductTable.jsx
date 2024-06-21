import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'

const AdminProductTable = () => {
  const data = useMemo(
    () => [
      {
        id: 1, 
        product: ' iPhone 13 Pro Max (Graphite, 256GB Storage) | A15 Bionic Chip | 6.7-inch Super Retina XDR Display | Triple 12MP Camera System',
        price: 50000,
        quantity: 20,
        category: "Electronics"
      },
      {
        id: 2, 
        product: 'Air Max 270 React (Black/White, Size 10) | Lightweight Cushioning | Breathable Mesh Upper | Durable Rubber Outsole',
        price: 1000,
        quantity: 50,
        category: "Fashion"
      },
      {
        id: 3, 
        product: 'Galaxy S21 Ultra (Phantom Black, 12GB RAM, 256GB Storage) | Exynos 2100 Processor | 6.8-inch Dynamic AMOLED 2X | 108MP Quad Camera',
        price: 90000,
        quantity: 7,
        category: "Electronics"
      },
      {
        id: 4, 
        product: 'Classic Clog (Bright Yellow, Size 8) | Lightweight and Comfortable | Ventilation Ports | Pivoting Heel Straps',
        price: 800,
        quantity: 60,
        category: "Fashion"
      },
    ],
    []
  )

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id"
      }, 
      {
        Header: "PRODUCT",
        accessor: "product"
      }, 
      {
        Header: "PRICE($)",
        accessor: "price"
      }, 
      {
        Header: "QUANTITY",
        accessor: "quantity"
      },
      {
        Header: "CATEGORY",
        accessor: "category"
      },
    ],
    []
  )

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data}, useSortBy);

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
          {rows.map(row => {
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
    </div>
  )
}

export default AdminProductTable
