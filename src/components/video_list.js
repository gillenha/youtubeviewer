import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect} 
				key={video.etag} 
				video={video}/>
		);
	});

	return (
			<ul className="f1 ml5 tc">
				{videoItems}
			</ul>
	);
};

export default VideoList;