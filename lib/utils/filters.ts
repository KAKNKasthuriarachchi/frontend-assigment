import { User } from '@/types/user';

export function filterUsers(
  users: User[],
  searchTerm: string,
  cityFilter: string
): User[] {
  return users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = !cityFilter || user.address.city === cityFilter;
    
    return matchesSearch && matchesCity;
  });
}

export function sortUsers(users: User[], sortBy: 'name' | 'email'): User[] {
  return [...users].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return a.email.localeCompare(b.email);
  });
}

export function getUniqueCities(users: User[]): string[] {
  const cities = users.map(user => user.address.city);
  return Array.from(new Set(cities)).sort();
}
