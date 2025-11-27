// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://sawava.com';
  const currentDate = new Date();
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}