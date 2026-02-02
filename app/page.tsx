import { Suspense } from 'react';
import { fetchUsers } from '@/lib/api/users';
import { UsersList } from '@/components/features/UsersList';
import { UserCardSkeleton } from '@/components/ui/Skeleton';
import { ErrorMessage } from '@/components/ui/ErrorMessage';

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <UserCardSkeleton key={i} />
      ))}
    </div>
  );
}

async function UsersContent() {
  try {
    const users = await fetchUsers();
    return <UsersList users={users} />;
  } catch (error) {
    return <ErrorMessage message="Failed to load users. Please try again later." />;
  }
}

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Users Dashboard</h1>
        <Suspense fallback={<LoadingSkeleton />}>
          <UsersContent />
        </Suspense>
      </div>
    </main>
  );
}
