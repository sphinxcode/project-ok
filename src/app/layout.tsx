import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ui/ThemeToggle';

export const metadata: Metadata = {
  title: 'Orientation Keys | Discover Your Natural Work Orientation',
  description: 'A 50-question cognitive assessment that reveals your sustainable work patterns—so you can build a business aligned with how you actually think.',
  openGraph: {
    title: 'Orientation Keys | Discover Your Natural Work Orientation',
    description: 'A 50-question cognitive assessment that reveals your sustainable work patterns.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
