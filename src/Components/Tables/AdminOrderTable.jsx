import React, { useMemo } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'

const AdminOrderTable = () => {
  const data = useMemo(
    () => [
        {
          id: 1234,
          product: 'iPhone 13 Pro Max (Graphite, 256GB Storage) | A15 Bionic Chip | 6.7-inch Super Retina XDR Display | Triple 12MP Camera System',
          price: 85000,
          quantity: 3,
          customer: "ayush@gmail.com"
        },
        {
          id: 2345,
          product: 'Samsung Galaxy S21 Ultra (Phantom Black, 256GB Storage) | Exynos 2100 Processor | 6.8-inch Dynamic AMOLED 2X | 108MP Quad Camera',
          price: 75000,
          quantity: 1,
          customer: "john.doe@example.com"
        },
        {
          id: 3456,
          product: 'Nike Air Max 270 React (Black/White, Size 10) | Lightweight Cushioning | Breathable Mesh Upper | Durable Rubber Outsole',
          price: 15000,
          quantity: 2,
          customer: "jane.smith@example.com"
        },
        {
          id: 4567,
          product: 'MacBook Pro (16-inch, M1 Pro, 512GB SSD) | Apple M1 Pro Chip | 16GB RAM | Space Gray',
          price: 90000,
          quantity: 1,
          customer: "michael.brown@example.com"
        },
        {
          id: 5678,
          product: 'Sony WH-1000XM4 (Black) | Noise Cancelling Wireless Headphones | 30 Hours Battery Life | Touch Sensor Controls',
          price: 25000,
          quantity: 4,
          customer: "lisa.white@example.com"
        },
        {
          id: 6789,
          product: 'Apple Watch Series 7 (45mm, GPS + Cellular) | Midnight Aluminum Case | Midnight Sport Band',
          price: 45000,
          quantity: 2,
          customer: "kevin.jones@example.com"
        },
        {
          id: 7890,
          product: 'Dell XPS 13 (13.4-inch, 4K UHD, Intel Core i7, 16GB RAM, 512GB SSD) | Silver',
          price: 88000,
          quantity: 1,
          customer: "emily.clark@example.com"
        },
        {
          id: 8901,
          product: 'Bose QuietComfort 35 II (Silver) | Wireless Bluetooth Headphones | Noise Cancelling',
          price: 30000,
          quantity: 3,
          customer: "chris.walker@example.com"
        },
        {
          id: 9012,
          product: 'Samsung Galaxy Watch 4 (44mm, Bluetooth) | Black',
          price: 20000,
          quantity: 2,
          customer: "anna.martin@example.com"
        },
        {
          id: 1023,
          product: 'Google Pixel 6 Pro (Cloudy White, 128GB Storage) | Google Tensor Chip | 6.7-inch QHD+ Display',
          price: 70000,
          quantity: 1,
          customer: "david.moore@example.com"
        },
        {
          id: 2134,
          product: 'HP Spectre x360 (14-inch, Intel Core i7, 16GB RAM, 512GB SSD) | Nightfall Black',
          price: 85000,
          quantity: 2,
          customer: "sarah.taylor@example.com"
        },
        {
          id: 3245,
          product: 'Microsoft Surface Pro 8 (13-inch, Intel Core i5, 8GB RAM, 256GB SSD) | Platinum',
          price: 60000,
          quantity: 1,
          customer: "james.anderson@example.com"
        },
        {
          id: 4356,
          product: 'Sony PlayStation 5 (825GB Storage) | DualSense Wireless Controller',
          price: 50000,
          quantity: 4,
          customer: "patricia.thomas@example.com"
        },
        {
          id: 5467,
          product: 'Apple AirPods Pro | Active Noise Cancellation | Transparency Mode | Wireless Charging Case',
          price: 25000,
          quantity: 3,
          customer: "robert.jackson@example.com"
        },
        {
          id: 6578,
          product: 'LG OLED55CXPUA Alexa Built-In CX 55" 4K Smart OLED TV (2020) | Black',
          price: 70000,
          quantity: 1,
          customer: "linda.lewis@example.com"
        },
        {
          id: 7689,
          product: 'Nikon Z6 II FX-Format Mirrorless Camera Body | 24.5MP | 4K UHD Video | Black',
          price: 90000,
          quantity: 2,
          customer: "mark.harris@example.com"
        },
        {
          id: 8790,
          product: 'Canon EOS R5 Full-Frame Mirrorless Camera | 45MP | 8K Video Recording | Black',
          price: 85000,
          quantity: 1,
          customer: "barbara.young@example.com"
        },
        {
          id: 9801,
          product: 'Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) | Silver (4th Generation)',
          price: 80000,
          quantity: 2,
          customer: "charles.king@example.com"
        },
        {
          id: 1092,
          product: 'DJI Mavic Air 2 Fly More Combo - Drone Quadcopter UAV with 48MP Camera | 4K Video | 8K Hyperlapse',
          price: 75000,
          quantity: 1,
          customer: "jennifer.scott@example.com"
        },
        {
          id: 2103,
          product: 'GoPro HERO9 Black | Waterproof Action Camera | 5K Video & 20MP Photos',
          price: 50000,
          quantity: 3,
          customer: "matthew.wilson@example.com"
        },
        {
          id: 3214,
          product: 'Asus ROG Strix Scar 15 (15.6" 300Hz FHD, Intel Core i9, 32GB RAM, 1TB SSD) | NVIDIA GeForce RTX 3080',
          price: 90000,
          quantity: 1,
          customer: "susan.adams@example.com"
        },
        {
          id: 4325,
          product: 'Lenovo Legion 5 (15.6" FHD, AMD Ryzen 7, 16GB RAM, 512GB SSD) | NVIDIA GeForce GTX 1660 Ti',
          price: 80000,
          quantity: 2,
          customer: "paul.mitchell@example.com"
        },
        {
          id: 5436,
          product: 'JBL Charge 4 | Waterproof Portable Bluetooth Speaker | Black',
          price: 15000,
          quantity: 4,
          customer: "nancy.carter@example.com"
        },
        {
          id: 6547,
          product: 'Fitbit Charge 5 | Advanced Fitness & Health Tracker | Built-In GPS | Black/Graphite',
          price: 20000,
          quantity: 3,
          customer: "richard.roberts@example.com"
        },
        {
          id: 7658,
          product: 'Garmin Forerunner 945 | Premium GPS Running/Triathlon Smartwatch | Black',
          price: 50000,
          quantity: 2,
          customer: "karen.evans@example.com"
        },
        {
          id: 8769,
          product: 'Anker PowerCore 10000 | Portable Charger | Ultra-Compact Battery Pack | Black',
          price: 5000,
          quantity: 5,
          customer: "jason.turner@example.com"
        },
        {
          id: 9870,
          product: 'Amazon Kindle Paperwhite (8 GB) | Now with a Built-in Front Light | Black',
          price: 15000,
          quantity: 3,
          customer: "brian.phillips@example.com"
        },
        {
          id: 1091,
          product: 'Razer Blade 15 (15.6" FHD 144Hz, Intel Core i7, 16GB RAM, 512GB SSD) | NVIDIA GeForce RTX 2070',
          price: 85000,
          quantity: 1,
          customer: "kimberly.campbell@example.com"
        },
        {
          id: 1202,
          product: 'Oculus Quest 2 | Advanced All-In-One Virtual Reality Headset | 128GB',
          price: 30000,
          quantity: 2,
          customer: "steven.parker@example.com"
        },
        {
          id: 2313,
          product: 'Samsung T7 Touch Portable SSD (1TB) | USB 3.2 | Black',
          price: 70000,
          quantity: 4,
          customer: "deborah.collins@example.com"
        }
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
        Header: "PRICE(₹)",
        accessor: "price"
      }, 
      {
        Header: "QUANTITY",
        accessor: "quantity"
      },
      {
        Header: "CUSTOMER",
        accessor: "customer"
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

export default AdminOrderTable;
