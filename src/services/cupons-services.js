import apiFetch from "./api-fetch";

export async function indexCuponUser() {
  return await apiFetch(`cupon_users`);
}

export async function showCuponUser(CuponUserID) {
  return await apiFetch(`cupon_users/${CuponUserID}`);
}

export async function createCuponUser(newCuponUser) {
  return await apiFetch('cupon_users/', { body: newCuponUser });
   
}