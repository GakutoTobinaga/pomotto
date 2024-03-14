//'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Card,
} from '@tremor/react';

const data = [
  {
    username: 'TheCreativeOne',
    name: 'Alex Doe',
    status: 'Active',
    region: 'North America',
    streak: '5',
    pomodoroHours: '200',
    lastPomodoro: '2023-03-01',
  },
  {
    username: 'InnovatorSam',
    name: 'Samantha Smith',
    status: 'Inactive',
    region: 'Europe',
    streak: '10',
    pomodoroHours: '500',
    lastPomodoro: '2023-02-24',
  },
  {
    username: 'TechPioneer',
    name: 'Michael Brown',
    status: 'Active',
    region: 'Asia',
    streak: '8',
    pomodoroHours: '350',
    lastPomodoro: '2023-03-05',
  },
  {
    username: 'DesignerJess',
    name: 'Jessica Jones',
    status: 'Active',
    region: 'South America',
    streak: '7',
    pomodoroHours: '300',
    lastPomodoro: '2023-02-28',
  },
  {
    username: 'EntrepreneurDave',
    name: 'David Wilson',
    status: 'Inactive',
    region: 'Australia',
    streak: '12',
    pomodoroHours: '600',
    lastPomodoro: '2023-03-02',
  },
  {
    username: 'Gakutodesu',
    name: 'Gakuto Tobinaga',
    status: 'Inactive',
    region: 'Japan',
    streak: '23',
    pomodoroHours: '1200',
    lastPomodoro: '2023-03-03',
  },
];

export default function Example() {
  return (
    <>
      <div className="flex w-screen items-center justify-center">
        <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-red-100 shadow-xl">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-red-50">
            <div className="flex justify-center text-2xl"></div>
            <Table className="mt-8">
              <TableHead>
                <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
                  <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    ユーザネーム
                  </TableHeaderCell>
                  <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    状態
                  </TableHeaderCell>
                  <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    地域
                  </TableHeaderCell>
                  <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    最大ストリーク
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    総時間
                  </TableHeaderCell>
                  <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    最終ポモドーロ
                  </TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow
                    key={item.username}
                    className="even:bg-tremor-background-muted even:dark:bg-dark-tremor-background-muted"
                  >
                    <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                      {item.username}
                    </TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.region}</TableCell>
                    <TableCell>{item.streak}</TableCell>
                    <TableCell className="text-right">
                      {item.pomodoroHours}
                    </TableCell>
                    <TableCell className="text-right">
                      {item.lastPomodoro}
                    </TableCell>
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
