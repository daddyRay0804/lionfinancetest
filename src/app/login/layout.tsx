import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Lion Finance Admin',
  description: 'Admin login for Lion Finance content management',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}