import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item tl fl ">
			<div className="video-item media">
				<div className="media-left shadow-3">
					<img className="media-object" src={imageUrl} alt="img" />
				</div>
				<div className="media-body">
					<div className="media-heading pl-3 f4">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;