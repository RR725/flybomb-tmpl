"use strict";
import React from "react";

import { Table } from "antd";
import restapi from "../../lib/url-model";
import utils from "../../lib/utils";
import ajax from "../../components/ajax";
// import defaultPermission from "../default-permission";
class HomeTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{
					title: "应用名称",
					key: "0",
					dataIndex: "appName",
					className: "td_appname ",
					render(text, record) {
						return (
							<div>
								<img
									src={
										record.appIconUrl ||
										utils.cdn +
											"/resources/push/images/default_icon.png"
									}
									width="24"
									height="24"
								/>
								{text}
							</div>
						);
					}
				},
				{
					title: "应用包名",
					className: "td_appname",
					key: "1",
					dataIndex: "packageName"
				},
				{
					title: "AppID",
					className: "ta_c",
					key: "2",
					dataIndex: "pushAppId"
				},
				{
					title: "在线用户数",
					className: "ta_c",
					key: "3",
					dataIndex: "onlineNum"
				},
				{
					title: "累计用户数",
					className: "ta_c",
					key: "4",
					dataIndex: "allNum"
				},
				{
					title: "操作",
					className: "ta_c",
					key: "5",
					render(text, record) {
						return (
							<div className="btn_wrap">
								<a
									title="打开应用"
									onClick={()=>self.openApp(record)}
									to="javascript:;"
								>
									打开应用
								</a>
							</div>
						);
					},
					dataIndex: ""
				}
			],
			refresh: false
		};
	}

	openApp(record) {
		const self = this;
		const appId = record.appId;
		ajax.get(restapi.getPermission + "?appId=" + appId, function(result) {
			const permission = result.value.permission;
			self.setState({
				data: result,
				appId: appId
			});

			// const json = defaultPermission.data(appId);

			let url = "";
			for (let i = 0; i < permission.length; i++) {
				let childModuleList = permission[i].childModuleList;
				if (childModuleList) {
					url = childModuleList[0].pageUrl;
					url = utils.makeUrl(url, {
						appId: appId
					});
				}
				if (url !== "") break;
			}
			exports.permission = result;
			window.location.href = window.location.pathname + "#" + url;
		});
	}
	render() {
		return (
			<Table
				className="home_table"
				columns={this.state.columns}
				loading={this.props.tableData.loading}
				dataSource={this.props.tableData.data}
				pagination={this.props.tableData.pagination}
			/>
		);
	}
}
exports.render = HomeTable;