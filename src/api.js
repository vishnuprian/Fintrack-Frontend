import axios from "axios";

const API_BASE = "http://127.0.0.1:8000"; // change to your backend domain when deployed

export async function fetchAnalytics(user_id, month) {
  const res = await axios.get(`${API_BASE}/analytics`, {
    params: { user_id, month }
  });
  return res.data;
}

export async function postExpense(payload) {
  // payload: { user_id, amount, merchantCategory, transaction_date, description, payment_method }
  const res = await axios.post(`${API_BASE}/expenses`, payload);
  return res.data;
}