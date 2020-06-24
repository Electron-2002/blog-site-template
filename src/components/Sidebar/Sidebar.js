import React from "react";
import "./Sidebar.css";

function Sidebar() {
	return (
		<div className="sidebarContainer">
			<div className="sidebarItem">
				<div className="sideItemHeading">
					<span>About Me</span>
				</div>
				<div className="aboutMeImage">
					<img
						alt="about me"
						src="https://lh6.googleusercontent.com/proxy/BNTP6Key0o9otwwNgdiSiSrliCarykDas5G-X4V735fetEw2aYj_xSTrK42_139di3icKwIzvZVXxURH9ulRTJBdtBW6-4nvSmzdNcv4jtVwNI3Lj3C_BnKhvcPZEGI-iZt_Z3ZnXh0JcH_DhrfgOzSFzQ=s0-d"
					/>
				</div>
				<h1 id="welcome">Welcome to my Blog</h1>
				<hr className="welcomeTextDeco" />
				<p>
					Hi there, my name is Jane. I make lovely things in order to
					fill my little house in my spare time.
				</p>
			</div>

			<div className="sidebarItem">
				<div className="sideItemHeading">
					<span>Keep in Touch</span>
				</div>
				<div className="linksContainer">
					<ul>
						<li>
							<img
								alt="instagram"
								src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/25_social-32.png"
							/>
						</li>
						<li>
							<img
								alt="pinterest"
								src="https://cdn1.iconfinder.com/data/icons/logotypes/32/pinterest-32.png"
							/>
						</li>
						<li>
							<img
								alt="facebook"
								src="https://cdn1.iconfinder.com/data/icons/logotypes/32/facebook-32.png"
							/>
						</li>
						<li>
							<img
								alt="twitter"
								src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/26_social-32.png"
							/>
						</li>
					</ul>
				</div>
			</div>

			<div className="sidebarItem">
				<div className="sideItemHeading">
					<span>Diy Tips &amp; Tricks</span>
				</div>
				<p>
					Get All The Latest Updates Delivered Straight Into Your
					Inbox For Free!
				</p>
				<input
					type="email"
					placeholder="Enter your E-mail Address"
					className="emailInput"
				/>
				<button className="subscribeButton">Subscribe</button>
			</div>

			<div className="sidebarItem">
				<div className="sideItemHeading">
					<span>Labels</span>
				</div>
				<ul className="labelMenu">
					<li>
						<div>
							{">"} Beauty <span>(1)</span>
						</div>
						<hr />
					</li>

					<li>
						<div>
							{">"} Business<span>(5)</span>
						</div>
						<hr />
					</li>

					<li>
						<div>
							{">"} Fashion<span>(6)</span>
						</div>
						<hr />
					</li>

					<li>
						<div>
							{">"} People<span>(5)</span>
						</div>
						<hr />
					</li>

					<li>
						<div>
							{">"} Sports<span>(4)</span>
						</div>
						<hr />
					</li>

					<li>
						<div>
							{">"} Technology<span>(4)</span>
						</div>
						<hr />
					</li>
				</ul>
			</div>

			<div className="sidebarItem">
				<div className="sideItemHeading">
					<span>Recent Posts</span>
				</div>

				<div className="postCardContainer">
					<img src="https://1.bp.blogspot.com/-sLBCvrhgTtQ/XbmKzH3nAZI/AAAAAAAABYI/QAOfbJ4ZyzU4vGxBZp6UQt2oYg5nDZF6gCLcBGAsYHQ/w680/fanster%2B11.jpeg" />
					<div className="postInfo">
						<span>Beautiful vintage aircraft</span>
						<div>
							<img src="https://cdn1.iconfinder.com/data/icons/material-device/20/access-time-16.png" />
							<small>MARCH 18, 2016</small>
						</div>
					</div>
				</div>
				<hr className="postDivider" />

				<div className="postCardContainer">
					<img src="https://1.bp.blogspot.com/-sLBCvrhgTtQ/XbmKzH3nAZI/AAAAAAAABYI/QAOfbJ4ZyzU4vGxBZp6UQt2oYg5nDZF6gCLcBGAsYHQ/w680/fanster%2B11.jpeg" />
					<div className="postInfo">
						<span>Beautiful vintage aircraft</span>
						<div>
							<img src="https://cdn1.iconfinder.com/data/icons/material-device/20/access-time-16.png" />
							<small>MARCH 18, 2016</small>
						</div>
					</div>
				</div>
				<hr className="postDivider" />

				<div className="postCardContainer">
					<img src="https://1.bp.blogspot.com/-sLBCvrhgTtQ/XbmKzH3nAZI/AAAAAAAABYI/QAOfbJ4ZyzU4vGxBZp6UQt2oYg5nDZF6gCLcBGAsYHQ/w680/fanster%2B11.jpeg" />
					<div className="postInfo">
						<span>Beautiful vintage aircraft</span>
						<div>
							<img src="https://cdn1.iconfinder.com/data/icons/material-device/20/access-time-16.png" />
							<small>MARCH 18, 2016</small>
						</div>
					</div>
				</div>
				<hr className="postDivider" />

				<div className="postCardContainer">
					<img src="https://1.bp.blogspot.com/-sLBCvrhgTtQ/XbmKzH3nAZI/AAAAAAAABYI/QAOfbJ4ZyzU4vGxBZp6UQt2oYg5nDZF6gCLcBGAsYHQ/w680/fanster%2B11.jpeg" />
					<div className="postInfo">
						<span>Beautiful vintage aircraft</span>
						<div>
							<img src="https://cdn1.iconfinder.com/data/icons/material-device/20/access-time-16.png" />
							<small>MARCH 18, 2016</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
