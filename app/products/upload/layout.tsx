// layout.tsx - Stays as Server Component

import { getCanonicalUrl } from '@/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quick Cart - Upload',
  description: 'Upload your files easily using Quick Cart ',
  alternates: {
    canonical: `${getCanonicalUrl()}/products/upload`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // Do what you need to do
    <>{children}</>
  );
}