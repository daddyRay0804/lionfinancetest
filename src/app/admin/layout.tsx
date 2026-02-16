import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin - Lion Finance CMS',
  description: 'Content Management System for Lion Finance',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}