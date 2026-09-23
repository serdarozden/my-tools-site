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

  // 2. Dinamik Makale Sayfaları (Doğrudan kök dizin linkleri)
  const articleRoutes = articles.map((article) => {
    // path başında '/' kontrolü
    const formattedPath = article.path.startsWith('/') 
      ? article.path 
      : `/${article.path}`;

    return {
      url: `${baseUrl}${formattedPath}`, // /blog takısı kaldırıldı, doğrudan domain.com/makale-slug şeklinde
      lastModified: article.updatedAt ? new Date(article.updatedAt) : currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    };
  });

  return [...staticRoutes, ...articleRoutes];
}