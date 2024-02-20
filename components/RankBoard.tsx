//'use client';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Card
  } from '@tremor/react';
  
  const data = [
    {
      workspace: 'johndoe22',
      owner: 'John Doe',
      status: 'Live',
      costs: '$3,509.00',
      region: 'US-West 1',
      capacity: '99%',
      lastEdited: '23/09/2023 13:00',
    },
    {
      workspace: 'illmissmycat',
      owner: 'Jane Smith',
      status: 'Live',
      costs: '$5,720.00',
      region: 'US-East 2',
      capacity: '80%',
      lastEdited: '22/09/2023 10:45',
    },
    {
      workspace: 'Dr. Clark',
      owner: 'David Clark',
      status: 'Inactive',
      costs: '$800.00',
      region: 'EU-Central 1',
      capacity: '40%',
      lastEdited: '25/09/2023 16:20',
    },
    {
      workspace: 'AgainSmith',
      owner: 'Jake Smithfield',
      status: 'Live',
      costs: '$5,720.00',
      region: 'US-East 2',
      capacity: '80%',
      lastEdited: '22/09/2023 10:45',
    },
    {
      workspace: 'Pr. Johnson',
      owner: 'Mike Johnson',
      status: 'Inactive',
      costs: '$4,200.00',
      region: 'EU-West 1',
      capacity: '60%',
      lastEdited: '21/09/2023 14:30',
    },
    {
      workspace: 'ALICE0321',
      owner: 'Alice Brown',
      status: 'Inactive',
      costs: '$2,100.00',
      region: 'US-West 2',
      capacity: '75%',
      lastEdited: '24/09/2023 09:15',
    },
  ];
  
  export default function Example() {
    return (
      <>
        <div className="flex h-screen w-screen items-center justify-center">
        <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-red-100 shadow-xl">
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-red-50">
      <div className='flex justify-center text-2xl'>Rank Board *Example*</div>
        <Table className="mt-8">
          <TableHead>
            <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Username
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                RealName
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Status
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Region
              </TableHeaderCell>
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Streak
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Hours
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Last Pomodoro
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.workspace}
                className="even:bg-tremor-background-muted even:dark:bg-dark-tremor-background-muted"
              >
                <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {item.workspace}
                </TableCell>
                <TableCell>{item.owner}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.capacity}</TableCell>
                <TableCell className="text-right">{item.costs}</TableCell>
                <TableCell className="text-right">{item.lastEdited}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
        </div>
        </div>
      </>
    );
  }