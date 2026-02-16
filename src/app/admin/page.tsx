import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import AdminDashboard from '@/components/admin/AdminDashboard';

export default function AdminPage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get('admin-auth');
  
  // If not logged in, redirect to login
  if (authToken?.value !== 'authenticated') {
    redirect('/login');
  }

  return <AdminDashboard />;
}