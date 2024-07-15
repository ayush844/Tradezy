import React, { useMemo } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'

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
      {
        id: 5, 
        product: ' iPhone 13 Pro Max (Graphite, 256GB Storage) | A15 Bionic Chip | 6.7-inch Super Retina XDR Display | Triple 12MP Camera System',
        price: 50000,
        quantity: 20,
        category: "Electronics"
      },
      {
        id: 6, 
        product: 'Air Max 270 React (Black/White, Size 10) | Lightweight Cushioning | Breathable Mesh Upper | Durable Rubber Outsole',
        price: 1000,
        quantity: 50,
        category: "Fashion"
      },
      {
        id: 7, 
        product: 'Galaxy S21 Ultra (Phantom Black, 12GB RAM, 256GB Storage) | Exynos 2100 Processor | 6.8-inch Dynamic AMOLED 2X | 108MP Quad Camera',
        price: 90000,
        quantity: 7,
        category: "Electronics"
      },
      {
        id: 8, 
        product: 'Classic Clog (Bright Yellow, Size 8) | Lightweight and Comfortable | Ventilation Ports | Pivoting Heel Straps',
        price: 800,
        quantity: 60,
        category: "Fashion"
      },
      {
        id: 9, 
        product: ' iPhone 13 Pro Max (Graphite, 256GB Storage) | A15 Bionic Chip | 6.7-inch Super Retina XDR Display | Triple 12MP Camera System',
        price: 50000,
        quantity: 20,
        category: "Electronics"
      },
      {
        id: 10, 
        product: 'Air Max 270 React (Black/White, Size 10) | Lightweight Cushioning | Breathable Mesh Upper | Durable Rubber Outsole',
        price: 1000,
        quantity: 50,
        category: "Fashion"
      },
      {
        id: 11, 
        product: 'Galaxy S21 Ultra (Phantom Black, 12GB RAM, 256GB Storage) | Exynos 2100 Processor | 6.8-inch Dynamic AMOLED 2X | 108MP Quad Camera',
        price: 90000,
        quantity: 7,
        category: "Electronics"
      },
      {
        id: 12, 
        product: 'Classic Clog (Bright Yellow, Size 8) | Lightweight and Comfortable | Ventilation Ports | Pivoting Heel Straps',
        price: 800,
        quantity: 60,
        category: "Fashion"
      },
      {
        id: 13, 
        product: ' iPhone 13 Pro Max (Graphite, 256GB Storage) | A15 Bionic Chip | 6.7-inch Super Retina XDR Display | Triple 12MP Camera System',
        price: 50000,
        quantity: 20,
        category: "Electronics"
      },
      {
        id: 14, 
        product: 'Air Max 270 React (Black/White, Size 10) | Lightweight Cushioning | Breathable Mesh Upper | Durable Rubber Outsole',
        price: 1000,
        quantity: 50,
        category: "Fashion"
      },
      {
        id: 15, 
        product: 'Galaxy S21 Ultra (Phantom Black, 12GB RAM, 256GB Storage) | Exynos 2100 Processor | 6.8-inch Dynamic AMOLED 2X | 108MP Quad Camera',
        price: 90000,
        quantity: 7,
        category: "Electronics"
      },
      {
        id: 16, 
        product: 'Classic Clog (Bright Yellow, Size 8) | Lightweight and Comfortable | Ventilation Ports | Pivoting Heel Straps',
        price: 800,
        quantity: 60,
        category: "Fashion"
      },
      {
        id: 17, 
        product: ' iPhone 13 Pro Max (Graphite, 256GB Storage) | A15 Bionic Chip | 6.7-inch Super Retina XDR Display | Triple 12MP Camera System',
        price: 50000,
        quantity: 20,
        category: "Electronics"
      },
      {
        id: 18, 
        product: 'Air Max 270 React (Black/White, Size 10) | Lightweight Cushioning | Breathable Mesh Upper | Durable Rubber Outsole',
        price: 1000,
        quantity: 50,
        category: "Fashion"
      },
      {
        id: 19, 
        product: 'Galaxy S21 Ultra (Phantom Black, 12GB RAM, 256GB Storage) | Exynos 2100 Processor | 6.8-inch Dynamic AMOLED 2X | 108MP Quad Camera',
        price: 90000,
        quantity: 7,
        category: "Electronics"
      },
      {
        id: 20, 
        product: 'Classic Clog (Bright Yellow, Size 8) | Lightweight and Comfortable | Ventilation Ports | Pivoting Heel Straps',
        price: 800,
        quantity: 60,
        category: "Fashion"
      },
      {
        id: 21, 
        product: ' iPhone 13 Pro Max (Graphite, 256GB Storage) | A15 Bionic Chip | 6.7-inch Super Retina XDR Display | Triple 12MP Camera System',
        price: 50000,
        quantity: 20,
        category: "Electronics"
      },
      {
        id: 22, 
        product: 'Air Max 270 React (Black/White, Size 10) | Lightweight Cushioning | Breathable Mesh Upper | Durable Rubber Outsole',
        price: 1000,
        quantity: 50,
        category: "Fashion"
      },
      {
        id: 23, 
        product: 'Galaxy S21 Ultra (Phantom Black, 12GB RAM, 256GB Storage) | Exynos 2100 Processor | 6.8-inch Dynamic AMOLED 2X | 108MP Quad Camera',
        price: 90000,
        quantity: 7,
        category: "Electronics"
      },
      {
        id: 24, 
        product: 'Classic Clog (Bright Yellow, Size 8) | Lightweight and Comfortable | Ventilation Ports | Pivoting Heel Straps',
        price: 800,
        quantity: 60,
        category: "Fashion"
      },
      {
        id: 25, 
        product: ' iPhone 13 Pro Max (Graphite, 256GB Storage) | A15 Bionic Chip | 6.7-inch Super Retina XDR Display | Triple 12MP Camera System',
        price: 50000,
        quantity: 20,
        category: "Electronics"
      },
      {
        id: 26, 
        product: 'Air Max 270 React (Black/White, Size 10) | Lightweight Cushioning | Breathable Mesh Upper | Durable Rubber Outsole',
        price: 1000,
        quantity: 50,
        category: "Fashion"
      },
      {
        id: 27, 
        product: 'Galaxy S21 Ultra (Phantom Black, 12GB RAM, 256GB Storage) | Exynos 2100 Processor | 6.8-inch Dynamic AMOLED 2X | 108MP Quad Camera',
        price: 90000,
        quantity: 7,
        category: "Electronics"
      },
      {
        id: 28, 
        product: 'Classic Clog (Bright Yellow, Size 8) | Lightweight and Comfortable | Ventilation Ports | Pivoting Heel Straps',
        price: 800,
        quantity: 60,
        category: "Fashion"
      },
      {
        id: 29, 
        product: ' iPhone 13 Pro Max (Graphite, 256GB Storage) | A15 Bionic Chip | 6.7-inch Super Retina XDR Display | Triple 12MP Camera System',
        price: 50000,
        quantity: 20,
        category: "Electronics"
      },
      {
        id: 30, 
        product: 'Air Max 270 React (Black/White, Size 10) | Lightweight Cushioning | Breathable Mesh Upper | Durable Rubber Outsole',
        price: 1000,
        quantity: 50,
        category: "Fashion"
      },
      {
        id: 31, 
        product: 'Galaxy S21 Ultra (Phantom Black, 12GB RAM, 256GB Storage) | Exynos 2100 Processor | 6.8-inch Dynamic AMOLED 2X | 108MP Quad Camera',
        price: 90000,
        quantity: 7,
        category: "Electronics"
      },
      {
        id: 32, 
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
