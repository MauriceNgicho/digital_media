import './globals.css';

export const metadata = {
  title: 'Sawava - Creative Agency',
  description: 'Transform your brand with cutting-edge digital solutions. We create stunning websites, engaging content, and powerful marketing strategies.',
  keywords: 'digital agency, web design, marketing, branding, creative services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-brand-dark text-white">{children}</body>
    </html>
  );
}