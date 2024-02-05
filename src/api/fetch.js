// Murals
const URL = import.meta.env.VITE_BASE_API_URL;

// Index/Get all
export function getAllMurals() {
  return fetch(`${URL}/murals`).then((response) => response.json());
}
export function getAllComments() {
  return fetch(`${URL}/comments`).then((response) => response.json());
}

export function createMural(newMural) {
  const options = {
    method: "POST",
    body: JSON.stringify(newMural),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/murals`, options).then((response) => {
    return response.json();
  });
}

// Create

export function createComments(comment) {
  const options = {
    method: "POST",
    body: JSON.stringify(comment),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/comments/`, options).then((response) => {
    return response.json();
  });
}

// Update
export function editMural(id, updateMural) {
  const options = {
    method: "PUT",
    body: JSON.stringify(updateMural),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/murals/${id}`, options).then((response) => {
    return response.json();
  });
}

// Show / Get one mural
export function getOneMural(id) {
  return fetch(`${URL}/murals/${id}`).then((response) => response.json());
}

// Delete
export function destroyMural(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/murals/${id}`, options);
}

// Delete
export function destroyComment(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/comments/${id}`, options);
}


