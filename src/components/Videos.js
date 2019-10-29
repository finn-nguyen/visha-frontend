import React, { useState, useEffect } from "react";
import StyledVideoList from "../styles/StyledVideoList";
import Video from "../components/Video";
import { fetchVideos } from "../requests";

const Videos = () => {
  const [pagination, setPagination] = useState({ page: 1 });
  const [shouldLoadVideo, setShouldLoadVideo] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideosData() {
      setShouldLoadVideo(false);
      try {
        const { records, pagination: videoPagination } = await fetchVideos(
          pagination.page
        );
        if (records.length && videoPagination) {
          setVideos(records);
          setPagination({ ...videoPagination });
        }
      } catch (error) {
        console.log({ error });
      }
    }
    shouldLoadVideo && fetchVideosData();
  });

  return (
    <StyledVideoList>
      {videos.map(video => (
        <Video key={video.id} {...video} />
      ))}
    </StyledVideoList>
  );
};

export default Videos;
