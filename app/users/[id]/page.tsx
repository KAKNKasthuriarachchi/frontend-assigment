import { Suspense } from 'react';
import Link from 'next/link';
import { fetchUserById } from '@/lib/api/users';
import { Skeleton } from '@/components/ui/Skeleton';
import { ErrorMessage } from '@/components/ui/ErrorMessage';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

function LoadingSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <Skeleton />
      <div className="mt-4"><Skeleton /></div>
      <div className="mt-4"><Skeleton /></div>
      <div className="mt-4"><Skeleton /></div>
    </div>
  );
}

async function UserDetails({ id }: { id: string }) {
  try {
    const user = await fetchUserById(id);

    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{user.name}</h1>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Contact Information</h2>
            <p className="text-gray-600">Username: @{user.username}</p>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">Phone: {user.phone}</p>
            <p className="text-gray-600">Website: {user.website}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">Address</h2>
            <p className="text-gray-600">{user.address.street}, {user.address.suite}</p>
            <p className="text-gray-600">{user.address.city}, {user.address.zipcode}</p>
            <p className="text-gray-600 text-sm">Coordinates: {user.address.geo.lat}, {user.address.geo.lng}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">Company</h2>
            <p className="text-gray-600 font-medium">{user.company.name}</p>
            <p className="text-gray-600 italic">{user.company.catchPhrase}</p>
            <p className="text-gray-600 text-sm">{user.company.bs}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <ErrorMessage message="Failed to load user details. Please try again later." />;
  }
}

export default async function UserDetailsPage({ params }: PageProps) {
  const { id } = await params;
  
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Users
        </Link>
        <Suspense fallback={<LoadingSkeleton />}>
          <UserDetails id={id} />
        </Suspense>
      </div>
    </main>
  );
}
