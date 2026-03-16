const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function apiFetch(path: string, options?: RequestInit) {
  const response = await fetch(`${VITE_API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  return response.json();
}
