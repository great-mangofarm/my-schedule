import { Button } from '@/components/core/button';
import { Badge } from '@/components/core/badge';
import { Input } from '@/components/core/input';
import {
  TableRoot,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/core/table';
import { Search1 } from '@tailgrids/icons';

interface Order {
  id: string;
  name: string;
  variants: string;
  date: string;
  price: string;
  category: string;
  status: 'Delivered' | 'Cancelled' | 'Pending';
  brandImg: string;
}

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'Delivered':
      return 'success' as const;
    case 'Cancelled':
      return 'error' as const;
    case 'Pending':
      return 'warning' as const;
    default:
      return 'gray' as const;
  }
};

export default function Tables5() {
  const orders: Order[] = [
    {
      id: '1',
      name: 'Macbook Pro 13”',
      variants: '2 Variants',
      date: 'Nov 23, 01:00 PM',
      price: '$2399.00',
      category: 'Laptop',
      status: 'Delivered',
      brandImg:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-5/image-1.jpg',
    },
    {
      id: '2',
      name: 'Apple Watch Ultra',
      variants: '1 Variants',
      date: 'Nov 22, 09:00 PM',
      price: '$879.00',
      category: 'Watch',
      status: 'Pending',
      brandImg:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-5/image-2.jpg',
    },
    {
      id: '3',
      name: 'iPhone 15 Pro Max',
      variants: '2 Variants',
      date: 'Oct 12, 03:54 PM',
      price: '$1869.00',
      category: 'Smart Phone',
      status: 'Cancelled',
      brandImg:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-5/image-3.jpg',
    },
    {
      id: '4',
      name: 'iPad Pro 3rd Gen',
      variants: '2 Variants',
      date: 'Sep 09, 02:00 AM',
      price: '$1699.00',
      category: 'Electronics',
      status: 'Cancelled',
      brandImg:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-5/image-4.jpg',
    },
    {
      id: '5',
      name: 'Airpods Pro 2nd Gen',
      variants: '1 Variants',
      date: 'Feb 35, 08:00 PM',
      price: '$240.00',
      category: 'Accessories',
      status: 'Delivered',
      brandImg:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-5/image-5.jpg',
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 xl:px-0">
      <div className="bg-background-50 rounded-xl p-5">
        <div className="flex flex-col justify-between gap-5 pb-5 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-text-50 text-lg font-semibold">
              Recent Orders
            </h3>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
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
              See All
            </Button>
          </div>
        </div>
        <TableRoot>
          <TableHeader className="bg-background-soft-50">
            <TableRow>
              <TableHead className="text-text-100 whitespace-nowrap">
                Products
              </TableHead>
              <TableHead className="text-text-100 whitespace-nowrap">
                Category
              </TableHead>
              <TableHead className="text-text-100 whitespace-nowrap">
                Date
              </TableHead>
              <TableHead className="text-text-100 whitespace-nowrap">
                Price
              </TableHead>
              <TableHead className="text-text-100 whitespace-nowrap">
                <p>Status</p>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="hover:bg-background-soft-50">
                <TableCell className="whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="border-base-100 size-12 rounded-md border">
                      <img
                        src={order.brandImg}
                        className="rounded-md"
                        alt={order.name}
                      />
                    </div>
                    <div>
                      <h3 className="text-title-50 text-sm font-medium">
                        {order.name}
                      </h3>
                      <span className="text-text-100 text-xs">
                        {order.variants}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <p className="text-text-100 text-sm font-normal">
                    {order.category}
                  </p>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <p className="text-text-100 text-sm font-normal">
                    {order.date}
                  </p>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <p className="text-text-100 text-sm font-normal">
                    {order.price}
                  </p>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <Badge color={getStatusBadgeColor(order.status)} size="sm">
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableRoot>
      </div>
    </section>
  );
}
