const BASE_API = process.env.REACT_APP_BASE_API || "http://localhost:5000";

export const fetchVideos = async page => {
  const response = await fetch(`${BASE_API}/videos?page=${page}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
  const jsonData = await response.json();
  return jsonData;
};

export const login = async (username, password) => {
  const response = await fetch(`${BASE_API}/login`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      user: { username, password }
    })
  });
  if (response.status === 201) {
    const jsonData = await response.json();
    return jsonData;
  }
  return null;
};

export const logout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("username");
};

export const shareVideo = async link => {
  const response = await fetch(`${BASE_API}/videos`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }),
    body: JSON.stringify({
      video: { link, user_id: localStorage.getItem("user_id") }
    })
  });
  const jsonData = await response.json();
  return jsonData;
};
