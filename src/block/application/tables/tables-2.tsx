import { Button } from '@/components/core/button';
import { Badge } from '@/components/core/badge';
import {
  TableRoot,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/core/table';
import {
  MenuKebab1,
  ChevronLeft,
  ChevronRight,
  ChevronBothDirection,
} from '@tailgrids/icons';

interface User {
  id: string;
  name: string;
  product: string;
  amount: string;
  status: 'Shipped' | 'Cancelled' | 'Pending';
  orderDate: string;
}

const users: User[] = [
  {
    id: '#ORD-10245',
    name: 'Rina Patel',
    product: 'Noise Buds Pro',
    status: 'Shipped',
    orderDate: '2024-11-23',
    amount: '$79.99',
  },
  {
    id: '#ORD-10246',
    name: 'Jack Stevens',
    product: 'MacBook Air M2',
    status: 'Pending',
    orderDate: '2024-11-23',
    amount: '$1,199',
  },
  {
    id: '#ORD-10247',
    name: 'Ahmed Faisal',
    product: 'Dell XPS 13',
    status: 'Cancelled',
    orderDate: '2025-02-27',
    amount: '$999',
  },
  {
    id: '#ORD-10248',
    name: 'Ahmed Faisal',
    product: 'Dell XPS 13',
    status: 'Shipped',
    orderDate: '2025-02-27',
    amount: '$999',
  },
  {
    id: '#ORD-10249',
    name: 'Ahmed Faisal',
    product: 'Dell XPS 13',
    status: 'Shipped',
    orderDate: '2025-02-27',
    amount: '$999',
  },
  {
    id: '#ORD-10250',
    name: 'Ahmed Faisal',
    product: 'Dell XPS 13',
    status: 'Pending',
    orderDate: '2025-02-27',
    amount: '$999',
  },
];

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'Shipped':
      return 'success' as const;
    case 'Cancelled':
      return 'error' as const;
    case 'Pending':
      return 'warning' as const;
    default:
      return 'gray' as const;
  }
};

const getStatusDotColor = (status: string) => {
  switch (status) {
    case 'Shipped':
      return 'bg-badge-success-background';
    case 'Cancelled':
      return 'bg-badge-error-background';
    case 'Pending':
      return 'bg-badge-warning-background';
    default:
      return 'bg-badge-neutral-background';
  }
};

export default function Tables2() {
  return (
    <section className="mx-auto max-w-7xl px-4 xl:px-0">
      <div className="bg-background-50 rounded-xl">
        <div className="flex items-center justify-between p-5">
          <div>
            <h3 className="text-text-50 text-lg font-semibold">
              Order History Table
            </h3>
            <p className="text-text-100 text-sm">
              Review all your past purchases in one convenient place.
            </p>
          </div>
          <div>
            <Button variant="ghost" iconOnly size="xs">
              <MenuKebab1 className="size-5" />
            </Button>
          </div>
        </div>
        <div className="p-5 pt-0">
          <TableRoot>
            <TableHeader className="bg-background-soft-50">
              <TableRow>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Order ID
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Customer Name
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Product
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Amount
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <p>Status</p>
                    <button className="text-text-50">
                      <ChevronBothDirection className="size-3" />
                    </button>
                  </div>
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <p>Order Date</p>
                    <button className="text-text-50">
                      <ChevronBothDirection className="size-3" />
                    </button>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => {
                return (
                  <TableRow key={user.id}>
                    <TableCell className="whitespace-nowrap">
                      <p className="text-title-50 text-sm font-medium">
                        {user.id}
                      </p>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <p className="text-text-100 text-sm font-medium">
                        {user.name}
                      </p>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <p className="text-text-50 text-sm">{user.product}</p>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <p className="text-text-100 text-sm font-bold">
                        {user.amount}
                      </p>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <Badge color={getStatusBadgeColor(user.status)} size="sm">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${getStatusDotColor(user.status)}`}
                        ></span>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <p className="text-text-100 text-xs">{user.orderDate}</p>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </TableRoot>

          {/* <!-- Pagination --> */}
          <div className="flex items-center justify-between gap-9 pt-5">
            <Button variant="primary" appearance="outline" size="sm">
              <ChevronLeft className="size-5" />
              Previous
            </Button>

            <div className="mx-2 hidden md:flex">
              <a
                href="javascript:void(0)"
                className="bg-background-soft-100 text-text-50 mx-1 flex size-9 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium"
              >
                1
              </a>
              <a
                href="javascript:void(0)"
                className="bg-background-50 hover:bg-background-soft-100 text-text-50 mx-1 flex size-9 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium"
              >
                2
              </a>
              <a
                href="javascript:void(0)"
                className="bg-background-50 hover:bg-background-soft-100 text-text-50 mx-1 flex size-9 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium"
              >
                3
              </a>
              <span className="hover:bg-background-soft-100 text-text-50 mx-1 flex size-9 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium">
                ...
              </span>
              <a
                href="javascript:void(0)"
                className="bg-background-50 hover:bg-background-soft-100 text-text-50 mx-1 flex size-9 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium"
              >
                8
              </a>
              <a
                href="javascript:void(0)"
                className="bg-background-50 hover:bg-background-soft-100 text-text-50 mx-1 flex size-9 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium"
              >
                9
              </a>
              <a
                href="javascript:void(0)"
                className="bg-background-50 hover:bg-background-soft-100 text-text-50 mx-1 flex size-9 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium"
              >
                10
              </a>
            </div>

            <Button variant="primary" appearance="outline" size="sm">
              Next
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
