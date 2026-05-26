import { useState } from 'react';
import { Button } from '@/components/core/button';
import { Checkbox } from '@/components/core/checkbox';
import { Avatar } from '@/components/core/avatar';
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
import {
  Search1,
  Filter,
  Trash1,
  Pencil1,
  ChevronLeft,
  ChevronRight,
} from '@tailgrids/icons';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer' | 'Contributor';
  status: 'Active' | 'Suspended' | 'Inactive' | 'Pending';
  joinDate: string;
  avatar: string;
}

const users: User[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@email.com',
    role: 'Admin',
    status: 'Active',
    joinDate: '2024-11-23',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-1/Avatar.png',
  },
  {
    id: '2',
    name: 'Tom Robertson',
    email: 'tom.rob@email.com',
    role: 'Editor',
    status: 'Suspended',
    joinDate: '2023-08-15',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-1/Avatar-1.png',
  },
  {
    id: '3',
    name: 'Ayesha Khan',
    email: 'ayesha.khan@email.com',
    role: 'Viewer',
    status: 'Active',
    joinDate: '2024-01-09',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-1/Avatar-2.png',
  },
  {
    id: '4',
    name: 'Leo Martins',
    email: 'leo.martins@email.com',
    role: 'Admin',
    status: 'Inactive',
    joinDate: '2024-11-23',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-1/Avatar-3.png',
  },
  {
    id: '5',
    name: 'Naomi Parker',
    email: 'naomi.p@email.com',
    role: 'Contributor',
    status: 'Active',
    joinDate: '2024-11-23',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-1/Avatar-4.png',
  },
  {
    id: '6',
    name: 'William Scott',
    email: 'will.scott@email.com',
    role: 'Editor',
    status: 'Pending',
    joinDate: '2024-11-23',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-1/Avatar-5.png',
  },
  {
    id: '7',
    name: 'Emily Foster',
    email: 'emily.f@email.com',
    role: 'Admin',
    status: 'Active',
    joinDate: '2023-10-28',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-1/Avatar-6.png',
  },
  {
    id: '8',
    name: 'Hasan Chowdhury',
    email: 'hasan.c@email.com',
    role: 'Contributor',
    status: 'Active',
    joinDate: '2023-10-28',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-1/Avatar-7.png',
  },
  {
    id: '9',
    name: 'Zoe McDonald',
    email: 'zoe.mac@email.com',
    role: 'Viewer',
    status: 'Suspended',
    joinDate: '2022-09-19',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-1/Avatar-8.png',
  },
  {
    id: '10',
    name: 'Marcus Tan',
    email: 'marcus.t@email.com',
    role: 'Editor',
    status: 'Active',
    joinDate: '2024-05-06',
    avatar:
      'https://cdn-tailgrids.b-cdn.net/3.0/application/tables/table-1/Avatar-9.png',
  },
];

const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case 'Admin':
      return 'purple' as const;
    case 'Editor':
      return 'blue' as const;
    case 'Viewer':
      return 'orange' as const;
    case 'Contributor':
      return 'cyan' as const;
    default:
      return 'gray' as const;
  }
};

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'success' as const;
    case 'Suspended':
      return 'error' as const;
    case 'Inactive':
      return 'gray' as const;
    case 'Pending':
      return 'warning' as const;
    default:
      return 'gray' as const;
  }
};


export default function Tables1() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedUsers(users.map((user) => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId: string, checked: boolean) => {
    if (checked) {
      setSelectedUsers((prev) => [...prev, userId]);
    } else {
      setSelectedUsers((prev) => prev.filter((id) => id !== userId));
      setSelectAll(false);
    }
  };
  return (
    <section className="bg-background-50 mx-auto max-w-7xl px-4 xl:px-0">
      <div className="bg-background-50 rounded-xl">
        <div className="flex flex-col justify-between gap-5 px-6 pt-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-text-50 text-lg font-semibold">
              User Management Table
            </h3>
            <p className="text-text-100 text-sm">
              Centralized Overview of All Registered Users
            </p>
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
        <div className="p-5">
          <TableRoot>
            <TableHeader className="bg-background-soft-50">
              <TableRow>
                <TableHead className="text-text-100 w-14 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={selectAll}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                  </div>
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Name
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Email
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  <div className="flex items-center justify-between gap-1">
                    <p>Role</p>
                    <button className="text-text-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                      >
                        <path
                          d="M6.66669 11.25L3.54169 8.125H9.79169L6.66669 11.25Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.66669 2L9.79169 5.125L3.54169 5.125L6.66669 2Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  <div className="flex items-center justify-between gap-1">
                    <p>Status</p>
                    <button className="text-text-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                      >
                        <path
                          d="M6.66669 11.25L3.54169 8.125H9.79169L6.66669 11.25Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.66669 2L9.79169 5.125L3.54169 5.125L6.66669 2Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Join Date
                </TableHead>
                <TableHead className="text-text-100 whitespace-nowrap">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => {
                const isSelected = selectedUsers.includes(user.id);

                return (
                  <TableRow key={user.id}>
                    <TableCell className="w-14 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={isSelected}
                          onChange={(e) =>
                            handleSelectUser(user.id, e.target.checked)
                          }
                        />
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={user.avatar}
                          alt={`${user.name} avatar`}
                          fallback={user.name.charAt(0)}
                          size="sm"
                        />
                        <div>
                          <h3 className="text-text-50 text-sm font-medium">
                            {user.name}
                          </h3>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <p className="text-text-100 text-sm">{user.email}</p>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <Badge color={getRoleBadgeColor(user.role)} size="sm">
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <Badge
                        prefixIcon={
                          <svg
                            className="size-1.5!"
                            viewBox="0 0 6 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="3" cy="3" r="3" fill="currentColor" />
                          </svg>
                        }
                        color={getStatusBadgeColor(user.status)}
                        size="sm"
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <p className="text-text-50 text-sm">{user.joinDate}</p>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <div className="flex gap-2">
                        <Button variant="ghost" iconOnly size="xs">
                          <Pencil1 className="size-5" />
                        </Button>
                        <button className="text-text-100 cursor-pointer rounded-lg bg-transparent p-1.5 hover:bg-red-50 hover:text-red-500">
                          <Trash1 className="size-5" />
                        </button>
                      </div>
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
