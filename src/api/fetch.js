// Murals
const URL = import.meta.env.VITE_BASE_API_URL;

// Index/Get all
export function getAllMurals() {
    return fetch(`${URL}/murals`).then((response) => response.json());
  }