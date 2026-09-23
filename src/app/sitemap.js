import { articles } from '@/data/articles';

export default async function sitemap() {
  const baseUrl = 'https://www.serdarozden.com';
  const currentDate = new Date();

  // 1. Statik Sayfalar
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // 2. Dinamik Makale Sayfaları
  const articleRoutes = articles.map((article) => {
    // path başında '/' kontrolü
    const formattedPath = article.path.startsWith('/') 
      ? article.path 
      : `/${article.path}`;

    // Eğer article.path zaten '/blog/...' içeriyorsa doğrudan ekler,
    // içermiyorsa '/blog' takısını otomatik ekler:
    const fullPath = formattedPath.startsWith('/blog') 
      ? formattedPath 
      : `/blog${formattedPath}`;

    return {
      url: `${baseUrl}${fullPath}`,
      lastModified: article.updatedAt ? new Date(article.updatedAt) : currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    };
  });

  return [...staticRoutes, ...articleRoutes];
}