'use client';

import { useState, useMemo } from 'react';
import { User } from '@/types/user';
import { UserCard } from './UserCard';
import { SearchBar } from './SearchBar';
import { FilterSelect } from './FilterSelect';
import { SortSelect } from './SortSelect';
import { EmptyState } from '../ui/EmptyState';
import { filterUsers, sortUsers, getUniqueCities } from '@/lib/utils/filters';

interface UsersListProps {
  users: User[];
}

export function UsersList({ users }: UsersListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'email'>('name');

  const cities = useMemo(() => getUniqueCities(users), [users]);

  const filteredAndSortedUsers = useMemo(() => {
    const filtered = filterUsers(users, searchTerm, cityFilter);
    return sortUsers(filtered, sortBy);
  }, [users, searchTerm, cityFilter, sortBy]);

  return (
    <div>
      <div className="mb-6 space-y-4">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search by name or email..."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FilterSelect
            value={cityFilter}
            onChange={setCityFilter}
            options={cities}
            label="Filter by City"
          />
          <SortSelect value={sortBy} onChange={setSortBy} />
        </div>
      </div>

      {filteredAndSortedUsers.length === 0 ? (
        <EmptyState message="No users found matching your criteria" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
