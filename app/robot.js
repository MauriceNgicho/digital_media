export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://sawava.ke';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}