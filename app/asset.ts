// Plain <img>/<a>/<video> URLs are not rewritten by Next's basePath, so prefix them here.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}
