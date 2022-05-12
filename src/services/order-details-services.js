import apiFetch from "./api-fetch";

export async function indexOrderDetails() {
  return await apiFetch(`order_details`);
}

export async function showOrderDetail(OrderDetailID) {
  return await apiFetch(`order_details/${OrderDetailID}`);
}