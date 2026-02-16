import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import LoginForm from '@/components/admin/LoginForm';

export default function LoginPage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get('admin-auth');
  
  // If already logged in, redirect to admin
  if (authToken?.value === 'authenticated') {
    redirect('/admin');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Lion Finance Admin
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Content Management System
          </p>
        </div>
        <LoginForm />
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Default credentials: admin / admin2025</p>
          <p className="mt-1 text-xs">This route is excluded from search engines (noindex, nofollow)</p>
        </div>
      </div>
    </div>
  );
}