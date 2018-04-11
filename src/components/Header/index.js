import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FlatButton, AppBar, Drawer, RaisedButton } from "material-ui";
import DashIcon from "material-ui/svg-icons/action/dashboard";

import styles from "./styles.scss"
import NavItems from "./NavItems";

// usually all redux state would be handled within a container, but since
// the header component has no container this will be an exception
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navItems: ["home", "about"]
		};
	}

	handleToggle = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		let { navItems, open } = this.state;

		return (
			<nav className="navbar navbar-light">
				<AppBar
					className="appbar"
					title={
						<Link to="/" className="navbar-title">
							<h1>InfinityIndex</h1>
						</Link>
					}
					onLeftIconButtonClick={this.handleToggle}
				/>
				<Drawer
					open={open}
					docked={false}
					onRequestChange={open => this.setState({ open })}
					className="drawer"
				>
					<div className="navbar-top">
						<DashIcon />
					</div>
					{NavItems(navItems)}
				</Drawer>
			</nav>
		);
	}
}

export default connect(null)(Header);
