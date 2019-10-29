
export const fetchVideos = async page => {
  const response = await fetch(`http://localhost:5000/videos?page=${page}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
  const jsonData = await response.json();
  return jsonData;
};

export const login = async (username, password) => {
  const response = await fetch(`http://localhost:5000/login`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      user: { username, password}
    })
  })
  if(response.status === 201) {
    const jsonData = await response.json();
    return jsonData
  }
  return null
}


export const logout = () => {
  sessionStorage.removeItem("token")
  sessionStorage.removeItem("username")
}