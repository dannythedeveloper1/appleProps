import React from "react";
import apple_logo from "../images/icons/logo-sm.png";
import cart_icon from "../images/icons/cart-sm.png";
import search_icon from "../images/icons/search-icon-sm.png";
import $ from "jquery";

function Header() {
	// Search bar
	$(".search-link").click(function (event) {
		event.preventDefault();
		$(".navbar-collapse.collapse").removeclassName("show");
		$(".searchbox").slideToggle();
	});
	return (
		<div className="nav-wrapper fixed-top">
			<div className="container">
				<nav className="navbar navbar-toggleable-sm navbar-expand-md">
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target=".navbar-collapse">
						☰
					</button>
					<a className="navbar-brand mx-auto" href="#">
						<img src={apple_logo} alt="apple" />
					</a>

					<div className="navbar-collapse collapse">
						<ul className="navbar-nav nav-justified w-100 nav-fill">
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="/mac/">
									Mac
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#">
									iphone
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#">
									ipad
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#">
									watch
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#">
									tv
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#">
									Music
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#">
									Support
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="/search/">
									<img src={search_icon} alt="search" />
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="/cart/">
									<img src={cart_icon} alt="cart" />
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Header;
