function Video({ videoRes }) {
  return (
    <div className="videos">
      {videoRes.items.map((item) => {
        const title = item.snippet.title;
        const thumbnail = item.snippet.thumbnails.default.url;
        const videoID = item.id.videoId;

        return (
          <a key={videoID} href={`https://www.youtube.com/watch?v=${videoID}`}>
            <div id="ytCard">
              <h2>{title}</h2>
              <img src={thumbnail} alt="This is a youtube video" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Video;
