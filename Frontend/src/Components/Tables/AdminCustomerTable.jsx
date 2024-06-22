import React, { useMemo } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'

const AdminCustomerTable = () => {
  const data = useMemo(
    () => [
        {
          id: 548736,
          name: 'John Doe',
          email: 'john.doe@example.com',
          address: '742 Evergreen Terrace, Springfield, IL 62704, USA'
        },
        {
          id: 682914,
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          address: '123 Maple Street, Anytown, CA 90210, USA'
        },
        {
          id: 748392,
          name: 'Michael Brown',
          email: 'michael.brown@example.com',
          address: '456 Oak Avenue, Metropolis, NY 10001, USA'
        },
        {
          id: 839271,
          name: 'Emily Davis',
          email: 'emily.davis@example.com',
          address: '789 Pine Lane, Smallville, KS 66002, USA'
        },
        {
          id: 927463,
          name: 'Chris Johnson',
          email: 'chris.johnson@example.com',
          address: '321 Birch Road, Gotham, NJ 07030, USA'
        },
        {
          id: 135792,
          name: 'Jessica Wilson',
          email: 'jessica.wilson@example.com',
          address: '654 Cedar Drive, Star City, OR 97301, USA'
        },
        {
          id: 246813,
          name: 'David Martinez',
          email: 'david.martinez@example.com',
          address: '987 Spruce Court, Central City, CO 80427, USA'
        },
        {
          id: 357924,
          name: 'Sarah Lee',
          email: 'sarah.lee@example.com',
          address: '159 Elmwood Place, Coast City, CA 95054, USA'
        },
        {
          id: 468135,
          name: 'James Brown',
          email: 'james.brown@example.com',
          address: '753 Redwood Street, Blüdhaven, DE 19720, USA'
        },
        {
          id: 579246,
          name: 'Megan Taylor',
          email: 'megan.taylor@example.com',
          address: '951 Sycamore Boulevard, Keystone City, NE 68901, USA'
        },
        {
          id: 680357,
          name: 'Robert Harris',
          email: 'robert.harris@example.com',
          address: '753 Redwood Street, Blüdhaven, DE 19720, USA'
        },
        {
          id: 791468,
          name: 'Linda White',
          email: 'linda.white@example.com',
          address: '951 Sycamore Boulevard, Keystone City, NE 68901, USA'
        },
        {
          id: 802579,
          name: 'William Clark',
          email: 'william.clark@example.com',
          address: '123 Maple Street, Anytown, CA 90210, USA'
        },
        {
          id: 913680,
          name: 'Amanda Lewis',
          email: 'amanda.lewis@example.com',
          address: '456 Oak Avenue, Metropolis, NY 10001, USA'
        },
        {
          id: 124791,
          name: 'Daniel Hall',
          email: 'daniel.hall@example.com',
          address: '789 Pine Lane, Smallville, KS 66002, USA'
        },
        {
          id: 235802,
          name: 'Michelle Adams',
          email: 'michelle.adams@example.com',
          address: '321 Birch Road, Gotham, NJ 07030, USA'
        },
        {
          id: 346913,
          name: 'Steven Baker',
          email: 'steven.baker@example.com',
          address: '654 Cedar Drive, Star City, OR 97301, USA'
        },
        {
          id: 457024,
          name: 'Angela Scott',
          email: 'angela.scott@example.com',
          address: '987 Spruce Court, Central City, CO 80427, USA'
        },
        {
          id: 568135,
          name: 'Mark Robinson',
          email: 'mark.robinson@example.com',
          address: '159 Elmwood Place, Coast City, CA 95054, USA'
        },
        {
          id: 679246,
          name: 'Patricia Green',
          email: 'patricia.green@example.com',
          address: '753 Redwood Street, Blüdhaven, DE 19720, USA'
        },
        {
          id: 790357,
          name: 'Joshua Edwards',
          email: 'joshua.edwards@example.com',
          address: '951 Sycamore Boulevard, Keystone City, NE 68901, USA'
        },
        {
          id: 801468,
          name: 'Lisa Turner',
          email: 'lisa.turner@example.com',
          address: '123 Maple Street, Anytown, CA 90210, USA'
        },
        {
          id: 912579,
          name: 'Matthew Collins',
          email: 'matthew.collins@example.com',
          address: '456 Oak Avenue, Metropolis, NY 10001, USA'
        },
        {
          id: 123680,
          name: 'Ashley Perez',
          email: 'ashley.perez@example.com',
          address: '789 Pine Lane, Smallville, KS 66002, USA'
        },
        {
          id: 234791,
          name: 'Brian Campbell',
          email: 'brian.campbell@example.com',
          address: '321 Birch Road, Gotham, NJ 07030, USA'
        },
        {
          id: 345802,
          name: 'Sandra Martinez',
          email: 'sandra.martinez@example.com',
          address: '654 Cedar Drive, Star City, OR 97301, USA'
        },
        {
          id: 456913,
          name: 'Jason Anderson',
          email: 'jason.anderson@example.com',
          address: '987 Spruce Court, Central City, CO 80427, USA'
        },
        {
          id: 567024,
          name: 'Karen Hernandez',
          email: 'karen.hernandez@example.com',
          address: '159 Elmwood Place, Coast City, CA 95054, USA'
        },
        {
          id: 678135,
          name: 'Kevin Lee',
          email: 'kevin.lee@example.com',
          address: '753 Redwood Street, Blüdhaven, DE 19720, USA'
        },
        {
          id: 789246,
          name: 'Cynthia Allen',
          email: 'cynthia.allen@example.com',
          address: '951 Sycamore Boulevard, Keystone City, NE 68901, USA'
        },
        {
          id: 890357,
          name: 'Ryan Young',
          email: 'ryan.young@example.com',
          address: '123 Maple Street, Anytown, CA 90210, USA'
        },
        {
          id: 901468,
          name: 'Laura King',
          email: 'laura.king@example.com',
          address: '456 Oak Avenue, Metropolis, NY 10001, USA'
        },
        {
          id: 112579,
          name: 'Jeffrey Wright',
          email: 'jeffrey.wright@example.com',
          address: '789 Pine Lane, Smallville, KS 66002, USA'
        },
        {
          id: 223680,
          name: 'Rebecca Scott',
          email: 'rebecca.scott@example.com',
          address: '321 Birch Road, Gotham, NJ 07030, USA'
        },
        {
          id: 334791,
          name: 'Gary Phillips',
          email: 'gary.phillips@example.com',
          address: '654 Cedar Drive, Star City, OR 97301, USA'
        },
        {
          id: 445802,
          name: 'Kimberly Evans',
          email: 'kimberly.evans@example.com',
          address: '987 Spruce Court, Central City, CO 80427, USA'
        },
        {
          id: 556913,
          name: 'Gregory Adams',
          email: 'gregory.adams@example.com',
          address: '159 Elmwood Place, Coast City, CA 95054, USA'
        },
        {
          id: 667024,
          name: 'Stephanie Parker',
          email: 'stephanie.parker@example.com',
          address: '753 Redwood Street, Blüdhaven, DE 19720, USA'
        },
        {
          id: 778135,
          name: 'Justin Rivera',
          email: 'justin.rivera@example.com',
          address: '951 Sycamore Boulevard, Keystone City, NE 68901, USA'
        },
        {
          id: 889246,
          name: 'Crystal Foster',
          email: 'crystal.foster@example.com',
          address: '123 Maple Street, Anytown, CA 90210, USA'
        },
        {
          id: 990357,
          name: 'Edward Simmons',
          email: 'edward.simmons@example.com',
          address: '456 Oak Avenue, Metropolis, NY 10001, USA'
        },
        {
          id: 101468,
          name: 'Kelly Ross',
          email: 'kelly.ross@example.com',
          address: '789 Pine Lane, Smallville, KS 66002, USA'
        },
        {
          id: 212579,
          name: 'Adam Stewart',
          email: 'adam.stewart@example.com',
          address: '321 Birch Road, Gotham, NJ 07030, USA'
        },
        {
          id: 323680,
          name: 'Katherine Price',
          email: 'katherine.price@example.com',
          address: '654 Cedar Drive, Star City, OR 97301, USA'
        },
        {
          id: 434791,
          name: 'Aaron Diaz',
          email: 'aaron.diaz@example.com',
          address: '987 Spruce Court, Central City, CO 80427, USA'
        },
        {
          id: 545802,
          name: 'Deborah Cooper',
          email: 'deborah.cooper@example.com',
          address: '159 Elmwood Place, Coast City, CA 95054, USA'
        },
        {
          id: 656913,
          name: 'Tina Flores',
          email: 'tina.flores@example.com',
          address: '753 Redwood Street, Blüdhaven, DE 19720, USA'
        },
        {
          id: 767024,
          name: 'Victor Torres',
          email: 'victor.torres@example.com',
          address: '951 Sycamore Boulevard, Keystone City, NE 68901, USA'
        },
        {
          id: 878135,
          name: 'Melanie Sanders',
          email: 'melanie.sanders@example.com',
          address: '123 Maple Street, Anytown, CA 90210, USA'
        },
        {
          id: 989246,
          name: 'Shawn Wood',
          email: 'shawn.wood@example.com',
          address: '456 Oak Avenue, Metropolis, NY 10001, USA'
        },
        {
          id: 190357,
          name: 'Monica Peterson',
          email: 'monica.peterson@example.com',
          address: '789 Pine Lane, Smallville, KS 66002, USA'
        },
        {
          id: 201468,
          name: 'Derek Mitchell',
          email: 'derek.mitchell@example.com',
          address: '321 Birch Road, Gotham, NJ 07030, USA'
        },
        {
          id: 312579,
          name: 'Theresa Carter',
          email: 'theresa.carter@example.com',
          address: '654 Cedar Drive, Star City, OR 97301, USA'
        },
        {
          id: 423680,
          name: 'Patrick Perry',
          email: 'patrick.perry@example.com',
          address: '987 Spruce Court, Central City, CO 80427, USA'
        },
        {
          id: 534791,
          name: 'Diana Foster',
          email: 'diana.foster@example.com',
          address: '159 Elmwood Place, Coast City, CA 95054, USA'
        },
        {
          id: 645802,
          name: 'Larry Gonzales',
          email: 'larry.gonzales@example.com',
          address: '753 Redwood Street, Blüdhaven, DE 19720, USA'
        },
        {
          id: 756913,
          name: 'Wendy Bryant',
          email: 'wendy.bryant@example.com',
          address: '951 Sycamore Boulevard, Keystone City, NE 68901, USA'
        },
        {
          id: 867024,
          name: 'Keith Alexander',
          email: 'keith.alexander@example.com',
          address: '123 Maple Street, Anytown, CA 90210, USA'
        },
        {
          id: 978135,
          name: 'Rachel Ford',
          email: 'rachel.ford@example.com',
          address: '456 Oak Avenue, Metropolis, NY 10001, USA'
        },
        {
          id: 189246,
          name: 'Samuel Wells',
          email: 'samuel.wells@example.com',
          address: '789 Pine Lane, Smallville, KS 66002, USA'
        },
        {
          id: 290357,
          name: 'Andrea Bell',
          email: 'andrea.bell@example.com',
          address: '321 Birch Road, Gotham, NJ 07030, USA'
        },
        {
          id: 301468,
          name: 'Jerry Brooks',
          email: 'jerry.brooks@example.com',
          address: '654 Cedar Drive, Star City, OR 97301, USA'
        },
        {
          id: 412579,
          name: 'Denise Howard',
          email: 'denise.howard@example.com',
          address: '987 Spruce Court, Central City, CO 80427, USA'
        },
        {
          id: 523680,
          name: 'Arthur Ward',
          email: 'arthur.ward@example.com',
          address: '159 Elmwood Place, Coast City, CA 95054, USA'
        },
        {
          id: 634791,
          name: 'Christina James',
          email: 'christina.james@example.com',
          address: '753 Redwood Street, Blüdhaven, DE 19720, USA'
        },
        {
          id: 745802,
          name: 'Eugene Martinez',
          email: 'eugene.martinez@example.com',
          address: '951 Sycamore Boulevard, Keystone City, NE 68901, USA'
        },
        {
          id: 856913,
          name: 'Martha Hughes',
          email: 'martha.hughes@example.com',
          address: '123 Maple Street, Anytown, CA 90210, USA'
        },
        {
          id: 967024,
          name: 'Henry Diaz',
          email: 'henry.diaz@example.com',
          address: '456 Oak Avenue, Metropolis, NY 10001, USA'
        },
        {
          id: 178135,
          name: 'Alice Gibson',
          email: 'alice.gibson@example.com',
          address: '789 Pine Lane, Smallville, KS 66002, USA'
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
        Header: "NAME",
        accessor: "name"
      }, 
      {
        Header: "EMAIL",
        accessor: "email"
      }, 
      {
        Header: "ADDRESS",
        accessor: "address"
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

export default AdminCustomerTable;
