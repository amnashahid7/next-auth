// /services/authService.js

const BASE_URL = "https://63c06528-8755-4cdc-8b45-c6d6414ae598.mock.pstmn.io";

export const loginUser = async (email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: "Network error" };
  }
};

export const registerUser = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: "Network error" };
  }
};

export const forgotPassword = async (email) => {
  try {
    const res = await fetch(`${BASE_URL}/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: "Network error" };
  }
};
