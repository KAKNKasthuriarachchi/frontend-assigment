import Link from 'next/link';
import { User } from '@/types/user';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Link href={`/users/${user.id}`}>
      <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{user.name}</h3>
        <p className="text-gray-600 mb-1">{user.email}</p>
        <p className="text-gray-600 mb-1">{user.phone}</p>
        <p className="text-gray-500 text-sm font-medium">{user.company.name}</p>
      </div>
    </Link>
  );
}
