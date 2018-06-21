"use strict";
import React from "react";
import Toolbar from "./toolbar";

import restapi from "../../lib/url-model";
import utils from "../../lib/utils";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

class HomeIndex extends React.Component {
	constructor(props) {
		console.log(props)
		super(props);
	}

	componentWillUnmount() {
		document.querySelector("#home").className = "";
	}
	componentDidMount() {
		document.querySelector("#home").className = "active";
	}
	render() {
		return (
			<div>
				<Toolbar
					{...this.props}
					current={this.props.current}
					tableData={this.props.tableData}
					getTableData={this.tableData}
				/>
			</div>
		);
	}
}

function loading(data) {
	return {
		type: "loading",
		data: data
	};
}
function loaded(data) {
	return {
		type: "loaded",
		data: data
	};
}

function pagination(current) {
	return {
		type: "pagination",
		data: current
	};
}
export default withRouter(connect(state => state.home, {
	loading,
	loaded,
	pagination
})(HomeIndex));
// module.exports = App;
