const BASE_URL = "https://reqres.in/api";

export const registerUser = async (username, email, password) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Register Failed");
  return data;
};
