import { useState } from 'react';
import { Button } from '@/components/core/button';
import { Badge } from '@/components/core/badge';
import { Checkbox } from '@/components/core/checkbox';
import { Input } from '@/components/core/input';
import {
  TableRoot,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/core/table';
import { Search1, Filter, Trash1 } from '@tailgrids/icons';

const orders = [
  {
    id: 'DE124321',
    name: 'John Doe',
    email: 'johndeo@gmail.com',
    initialsColor: 'bg-primary-100 text-primary-500',
    product: 'Software License',
    value: '$18,50.34',
    closeDate: '2024-06-15',
    status: 'Complete',
  },
  {
    id: 'DE124322',
    name: 'Kierra Franci',
    email: 'kierra@gmail.com',
    initialsColor: 'bg-pink-50 text-pink-600',
    product: 'Software License',
    value: '$18,50.34',
    closeDate: '2024-06-15',
    status: 'Complete',
  },
  {
    id: 'DE124323',
    name: 'Emerson Workman',
    email: 'emerson@gmail.com',
    initialsColor: 'bg-sky-50 text-sky-600',
    product: 'Software License',
    value: '$18,50.34',
    closeDate: '2024-06-15',
    status: 'Complete',
  },
  {
    id: 'DE124324',
    name: 'Chance Philips',
    email: 'chance@gmail.com',
    initialsColor: 'bg-orange-50 text-orange-600',
    product: 'Software License',
    value: '$18,50.34',
    closeDate: '2024-06-15',
    status: 'Pending',
  },
  {
    id: 'DE124325',
    name: 'Terry Geidt',
    email: 'terry@gmail.com',
    initialsColor: 'bg-green-50 text-green-600',
    product: 'Software License',
    value: '$18,50.34',
    closeDate: '2024-06-15',
    status: 'Complete',
  },
];

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'Complete':
      return 'success' as const;
    case 'Pending':
      return 'warning' as const;
    default:
      return 'gray' as const;
  }
};

const getInitials = (name: string) => {
  const parts = name.trim().split(' ');
  return parts
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');
};

export default function Tables6() {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedOrders(orders.map((user) => user.id));
    } else {
      setSelectedOrders([]);
    }
  };

  const handleSelectedOrder = (orderId: string, checked: boolean) => {
    if (checked) {
      setSelectedOrders((prev) => [...prev, orderId]);
    } else {
      setSelectedOrders((prev) => prev.filter((id) => id !== orderId));
      setSelectAll(false);
    }
  };
  return (
    <section className="mx-auto max-w-7xl px-4 xl:px-0">
      <div className="bg-background-50 rounded-xl">
        <div className="flex flex-col justify-between gap-5 px-6 py-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-text-50 text-lg font-semibold">
              Recent Orders
            </h3>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search..."
                className="h-10 w-full pl-10"
              />
              <span className="text-text-100 pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
                <Search1 className="size-5" />
              </span>
            </div>
            <Button variant="primary" appearance="outline" size="sm">
              <span className="hidden sm:block">Filter</span>
              <Filter className="size-5" />
            </Button>
          </div>
        </div>
        <div className="p-5 pt-0">
          <TableRoot>
            <TableHeader className="bg-background-soft-50">
              <TableRow>
                <TableHead className="text-text-100 w-14 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={selectAll}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                    <label>Deal ID</label>
                  </div>
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Customer
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Product/Service
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Deal Value
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Close Date
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Status
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => {
                const isSelected = selectedOrders.includes(order.id);

                return (
                  <TableRow
                    key={order.id}
                    className="hover:bg-background-soft-50"
                  >
                    <TableCell className="whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={isSelected}
                          onChange={(e) =>
                            handleSelectedOrder(order.id, e.target.checked)
                          }
                        />
                        <label className="text-text-50 text-sm font-medium">
                          {order.id}
                        </label>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <div className="flex gap-3">
                        <div
                          className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold uppercase ${order.initialsColor}`}
                        >
                          {getInitials(order.name)}
                        </div>
                        <div>
                          <h3 className="text-title-50 text-sm font-medium">
                            {order.name}
                          </h3>
                          <p className="text-text-100 text-sm">{order.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <p className="text-text-50 text-sm">{order.product}</p>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <p className="text-text-50 text-sm">{order.value}</p>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <p className="text-text-50 text-sm">{order.closeDate}</p>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <Badge
                        color={getStatusBadgeColor(order.status)}
                        size="sm"
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <button className="text-text-100 cursor-pointer rounded-lg bg-transparent p-1.5 hover:bg-red-50 hover:text-red-500">
                        <Trash1 className="size-5" />
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </TableRoot>
        </div>
      </div>
    </section>
  );
}
