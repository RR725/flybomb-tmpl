'use strict';
import React from 'react';
import ReactDOM from 'react-dom';



class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	render() {
		const year=new Date().getFullYear();
	
		return (
			<div className="footer">
				©{year} Meizu Telecom Equipment Co., Ltd. All rights reserved. 经营许可证编号：粤B2-20130198
	      </div>
		);
	}
};

module.exports = Footer;