// Murals
const URL = import.meta.env.VITE_BASE_API_URL;

// Index/Get all
export function getAllMurals() {
    return fetch(`${URL}/murals`).then((response) => response.json());
  }

// Create
// export function createMural(mural) {
//   const options = {
//     method: "POST",
//     body: JSON.stringify(mural),
//     headers: { "Content-Type": "application/json" },
//   };
//   return fetch(`${URL}/murals/`, options).then((response) => {
//     return response.json();
//   });
// }

// Update
// export function updateMural(id, mural) {
//   const options = {
//     method: "PUT",
//     body: JSON.stringify(mural),
//     headers: { "Content-Type": "application/json" },
//   };
//   return fetch(`${URL}/mural/${id}`, options).then((response) => {
//     return response.json();
//   });

// Delete
// export function destroyMural(id) {
//   const options = { method: "DELETE" };
//   return fetch(`${URL}/murals/${id}`, options);
// }

// Show/Get one
// export function getOne(id) {
//   return fetch(`${URL}/shows/${id}`).then((response) => response.json());
// }