import React, { useState, useEffect } from "react";
import "./ImageSlide.css";

function ImageSlide() {
	const [currImage, setCurrImage] = useState(-1);
	const imgArray = [
		"https://1.bp.blogspot.com/-sLBCvrhgTtQ/XbmKzH3nAZI/AAAAAAAABYI/QAOfbJ4ZyzU4vGxBZp6UQt2oYg5nDZF6gCLcBGAsYHQ/s1600/fanster%2B11.jpeg",
		"https://1.bp.blogspot.com/-Pl4ROUqHonE/XbmLgQAYkBI/AAAAAAAABYg/mtaGhOV1p8g9dblQA1RX1FLIllO9p-KzQCLcBGAsYHQ/s1600/fanster%2B15.jpeg"
	];

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (currImage === imgArray.length - 1) {
				setCurrImage(0);
			} else {
				setCurrImage(currImage + 1);
			}

			console.log(currImage);
		}, 3000);

		return () => {
			clearInterval(timeout);
		};
	}, [currImage]);
	return (
		<div className="imageSlideContainer">
			<img src={imgArray[currImage]} />
			<div className="imageInfo">
				<span>Beauty</span>
				<h1>Beautiful Vintage Aircraft</h1>
				<small>March 18, 2016</small>
			</div>
		</div>
	);
}

export default ImageSlide;
