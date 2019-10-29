import { useState, useEffect } from "react";
import { fetchVideos } from "../requests";

const useVideosApis = () => {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { records, pagination } = await fetchVideos(page);
        setVideos(prevState => [...prevState, ...records]);
        setPage(page);
        setTotal(pagination.page_count);
      } catch (error) {
        console.log({ error });
      }
      setIsLoading(false);
    };
    fetchData();
  }, [page]);
  return { page, setPage, total, videos, isLoading };
};

export default useVideosApis;
