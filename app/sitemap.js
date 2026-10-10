export default function sitemap() {
  const baseUrl = "https://eetechnologies.lk";
  const routes = ["", "/about", "/services", "/pricing", "/agreement", "/contact", "/booking"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
