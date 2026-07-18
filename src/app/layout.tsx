import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elite FC | The Pinnacle of Football',
  description: 'Welcome to Elite FC. Experience the passion, the glory, and the legacy of the greatest football club in the world.',
  icons: {
    icon: '/elite-fc-logo.webp',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
