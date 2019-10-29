export const fetchVideos = async page => {
  const response = await fetch(`http://localhost:5000/videos?page=${page}`, {
    method: "GET",
    headers: new Headers({
      Accept: "application/json"
    })
  });
  const jsonData = await response.json();
  return jsonData;
};
