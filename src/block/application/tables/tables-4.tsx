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
import { Search1, Calendar, MenuMeatballs1 } from '@tailgrids/icons';

interface Transaction {
  id: string;
  name: string;
  date: string;
  price: string;
  category: string;
  status: 'Success' | 'Failed' | 'Pending';
  brandImg: string;
}

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'Success':
      return 'success' as const;
    case 'Failed':
      return 'error' as const;
    case 'Pending':
      return 'warning' as const;
    default:
      return 'gray' as const;
  }
};

export default function Tables4() {
  const transactions: Transaction[] = [
    {
      id: '1',
      name: 'Bought PYPL',
      date: 'Nov 23, 01:00 PM',
      price: '$2,567.88',
      category: 'Finance',
      status: 'Success',
      brandImg:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-4/paypal.png',
    },
    {
      id: '1',
      name: 'Bought AAPL',
      date: 'Nov 22, 09:00 PM',
      price: '$3,987.45',
      category: 'Technology',
      status: 'Failed',
      brandImg:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-4/apple.png',
    },
    {
      id: '1',
      name: 'Bought PYPL',
      date: 'Nov 23, 01:00 PM',
      price: '$2,567.88',
      category: 'Finance',
      status: 'Success',
      brandImg:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-4/paypal.png',
    },
    {
      id: '3',
      name: 'Sell KKST',
      date: 'Oct 12, 03:54 PM',
      price: '$6,754.99',
      category: 'Finance',
      status: 'Success',
      brandImg:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-4/kickstarter.png',
    },
    {
      id: '4',
      name: 'Bought FB',
      date: 'Sep 09, 02:00 AM',
      price: '$1,445.41',
      category: 'Social mendia',
      status: 'Pending',
      brandImg:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-4/facebook.png',
    },
    {
      id: '5',
      name: 'Sell AMZN',
      date: 'Sep 09, 02:00 AM',
      price: '$1,445.41',
      category: 'Social mendia',
      status: 'Pending',
      brandImg:
        'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-4/amazon.png',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 xl:px-0">
      <div className="bg-background-50 rounded-xl p-5">
        <div className="flex flex-col justify-between gap-5 pb-5 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-text-50 text-lg font-semibold">
              Latest Transactions
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
              <Calendar className="size-5" />
              05 Feb - 06 March
            </Button>
          </div>
        </div>
        <TableRoot>
          <TableHeader className="bg-background-soft-50">
            <TableRow>
              <TableHead className="text-text-100 whitespace-nowrap">
                Name
              </TableHead>
              <TableHead className="text-text-100 whitespace-nowrap">
                Date
              </TableHead>
              <TableHead className="text-text-100 whitespace-nowrap">
                Price
              </TableHead>
              <TableHead className="text-text-100 whitespace-nowrap">
                Category
              </TableHead>
              <TableHead className="text-text-100 whitespace-nowrap">
                <p>Status</p>
              </TableHead>
              <TableHead className="text-text-100 relative whitespace-nowrap">
                <p className="sr-only">Action</p>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx, idx) => (
              <TableRow key={idx}>
                <TableCell className="whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full">
                      <img
                        src={tx.brandImg}
                        alt={tx.name}
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="text-title-50 text-sm font-medium">
                      {tx.name}
                    </h3>
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <p className="text-text-100 text-sm font-normal">{tx.date}</p>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <p className="text-text-100 text-sm font-normal">
                    {tx.price}
                  </p>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <p className="text-text-100 text-sm font-normal">
                    {tx.category}
                  </p>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <Badge color={getStatusBadgeColor(tx.status)} size="sm">
                    {tx.status}
                  </Badge>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <Button variant="ghost" iconOnly size="xs">
                    <MenuMeatballs1 className="size-5" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableRoot>
      </div>
    </section>
  );
}
