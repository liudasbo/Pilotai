export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: "https://pilotaiprogram.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://pilotaiprogram.com/aircraft",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
