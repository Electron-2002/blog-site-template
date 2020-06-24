import React from "react";
import "./Header.css";

function Header() {
	return (
		<React.Fragment>
			<div className="socialMediaContainer">
				<ul>
					<li>
						<img
							alt="instagram"
							src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/25_social-16.png"
						/>
					</li>
					<li>
						<img
							alt="pinterest"
							src="https://cdn1.iconfinder.com/data/icons/logotypes/32/pinterest-16.png"
						/>
					</li>
					<li>
						<img
							alt="facebook"
							src="https://cdn1.iconfinder.com/data/icons/logotypes/32/facebook-16.png"
						/>
					</li>
					<li>
						<img
							alt="twitter"
							src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/26_social-16.png"
						/>
					</li>
					<li>
						<img
							alt="search"
							src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/search-20.png"
						/>
					</li>
				</ul>
			</div>

			<div className="logoContainer">
				<img
					alt="fanster logo"
					src="https://3.bp.blogspot.com/-OxFUoThfcWk/XbPGrwiSV3I/AAAAAAAABW8/I0uYUidSLVARD1aX0u7PEpxaaydN1aMLQCK4BGAYYCw/s1600/bk.png"
				/>
			</div>

			<hr />

			<nav className="navContainer">
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">Features</a>
					</li>
					<li>
						<a href="/">Learn Blogging</a>
					</li>
					<li>
						<a href="/">Documentation</a>
					</li>
					<li>
						<a href="/">Video Documentation</a>
					</li>
					<li>
						<a href="/">Download This Template</a>
					</li>
				</ul>
			</nav>

			<hr />
		</React.Fragment>
	);
}

export default Header;
