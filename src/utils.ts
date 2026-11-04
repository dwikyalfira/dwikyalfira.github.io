/** Prefix a path with the configured base (needed for GitHub Pages project repos). */
export function u(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
