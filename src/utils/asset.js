export function asset(path) {
  const base = import.meta.env.BASE_URL; // e.g. '/' or '/armenian_School/'
  return base.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}