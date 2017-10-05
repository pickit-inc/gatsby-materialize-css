import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "../css/typography.css";

import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

export default class Template extends React.Component {
	static propTypes = {
		children: PropTypes.func,
	};

	render() {
		const { location } = this.props;

		const isRoot = location.pathname === "/";

		return (
			<app-container>
				<Helmet
					title="Gatsby Default (Blog) Starter"
					meta={[
						{ name: "description", content: "Sample" },
						{ name: "keywords", content: "sample, something" },
					]}
				/>
				<Header/>
				<main style={{
						margin: `0 auto`,
						maxWidth: 960,
						padding: `0px 1.0875rem 1.45rem`,
						paddingTop: 0,
					}}>
					{this.props.children()}
				</main>
				<Footer/>
			</app-container>
		);
	}
}
