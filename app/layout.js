import './globals.css';

export const metadata = {
  title: 'Digital Media - Creative Agency',
  description: 'Transform your brand with cutting-edge digital solutions. We create stunning websites, engaging content, and powerful marketing strategies.',
  keywords: 'digital agency, web design, marketing, branding, creative services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}