"use strict";
import React from "react";
import {
	Button,
	Row,
	Col,
	message,
	Select,
	Upload,
	Tooltip,
	Icon,
	Form,
	Input
} from "antd";
import { withRouter } from "react-router-dom";

const Option = Select.Option;
const FormItem = Form.Item;
import restapi from "../../lib/url-model";
import ajax from "../../components/ajax";
const formItemLayout = {
	labelCol: {
		span: 5
	},
	wrapperCol: {
		span: 19
	}
};

class AddApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			appCategory: []
		};
	}

	componentWillUnmount() {
		document.querySelector("#home").className = "";
	}
	componentDidMount() {
		document.querySelector("#home").className = "active";
		ajax.get(restapi.getAppCategory, result => {
			this.setState({
				appCategory: result.value
			});
		});
	}
	cantNull(type) {
		const { getFieldProps } = this.props.form;
		return getFieldProps(type, {
			validate: [
				{
					rules: [
						{
							required: true,
							message: "请填写应用名称"
						},
						{
							min: 2,
							message: "应用名称不能少于2个字"
						},
						{
							max: 10,
							message: "应用名称不能超过10个字"
						},
						{
							validator: function(rule, value, callback) {
								if (
									value &&
									value.length >= 2 &&
									value.length <= 10 &&
									value.match(/^\s/)
								) {
									callback(new Error("行首不能输入空格"));
								}
								callback();
							}
						}
					],
					trigger: ["onBlur", "onChange"]
				}
			]
		});
	}
	handleSubmit() {
		this.props.form.validateFields((errors, values) => {
			if (errors) {
				console.log("Errors in form!!!");
				return;
			}
			const data = {
				appName: values.appName.trim(),
				packageName: values.packageName.trim(),
				appIconUrl: values.appIconUrl,
				appCategoryId: values.appCategoryId
			};

			ajax.post(restapi.addApp, data, function() {
				message.success("新建成功");
				window.location.hash = "/home?refresh=true";
			});
		});
	}
	validatePackageName(type) {
		const { getFieldProps } = this.props.form;
		return getFieldProps(type, {
			validate: [
				{
					rules: [
						{
							required: true,
							message: "请填写包名"
						},
						{
							max: 50,
							message: "包名不能超过50个字"
						},
						{
							validator: function(rule, value, callback) {
								console.log(value);
								value = value && value.trim();
								if (
									(value && value === "") ||
									(value &&
										!value.match(
											/^[a-zA-Z][\w_]*(\.[a-zA-Z][\w_]*)+$/
										))
								) {
									callback(
										new Error(
											"请输入包名的正确格式，比如：com.flyme.sms"
										)
									);
								} else {
									callback();
								}
							}
						}
					],
					trigger: ["onBlur", "onChange"]
				}
			]
		});
	}
	render() {
		const { getFieldProps } = this.props.form;
		var self = this;

		const props = {
			name: "iconFile",

			accept: ".jpg,.jpeg,.png,.bmp",
			action: restapi.uploadIcon,
			headers: {
				authorization: "authorization-text"
			},
			showUploadList: false,
			beforeUpload(file) {
				self.setState({
					loading: true
				});
				const fileType = file.type;
				const isImg = fileType.indexOf("image") >= 0;
				if (!isImg) {
					message.error("请上传图片格式的文件");
					self.setState({
						loading: false
					});
				}
				return isImg;
			},
			onChange(info) {
				if (info.file.status !== "uploading") {
					console.log(info.file, info.fileList);
				}
				if (info.file.response) {
					if (info.file.response.code === "200") {
						message.success(`${info.file.name} 上传成功。`);
						self.props.form.setFieldsValue({
							appIconUrl: info.file.response.value
						});
					} else {
						message.error(info.file.response.message);
					}
					self.setState({
						loading: false
					});
				}
			}
		};
		const title =
			"可以包含大写字母(A到Z)、小写字母(a到z)、数字和下划线，可以用点(英文句号)分隔，隔开的每一段都必须以字母开头。";
		const label = (
			<span>
				<Tooltip title={title}>
					<i className="fs14 color999 fw_n cursor_p anticon anticon-info-circle-o" />
				</Tooltip>
				应用包名
			</span>
		);
		const options = this.state.appCategory.map(function(data, key) {
			return (
				<Option key={key} value={String(data.id)}>
					{data.categoryName}
				</Option>
			);
		});
		return (
			<div>
				<div className="home_toolbar">
					<Row>
						<Col span="4">
							<div className="title">
								<span className="border" />新建应用
							</div>
						</Col>
					</Row>
				</div>
				<Form style={{ paddingTop: 20 }} horizontal="true">
					<Row className="add_app">
						<Col span="18">
							<FormItem {...formItemLayout} label="应用名称">
								<Input
									style={{ width: 300 }}
									placeholder="2-10个字符"
									{...this.cantNull("appName")}
								/>
							</FormItem>

							<FormItem {...formItemLayout} label={label}>
								<Input
									style={{ width: 300 }}
									disabled={this.state.disabled}
									{...this.validatePackageName("packageName")}
								/>
							</FormItem>
							<FormItem {...formItemLayout} label="应用类型">
								<Select
									style={{ width: 300 }}
									{...getFieldProps("appCategoryId", {
										validate: [
											{
												rules: [
													{
														required: true,
														message:
															"请选择应用类型"
													}
												],
												trigger: ["onBlur", "onChange"]
											}
										]
									})}
									size="large"
								>
									{options}
								</Select>
							</FormItem>
							<FormItem {...formItemLayout} label="应用图标">
								<FormItem className="add_app_icon">
									<Upload
										{...getFieldProps("appIconUrl", {
											validate: [
												{
													rules: [
														{
															required: true,
															message:
																"请上传应用图标"
														}
													]
												}
											]
										})}
										style={{ width: 200 }}
										{...props}
									>
										{this.props.form.getFieldValue(
											"appIconUrl"
										) ? (
											<Button
												type="ghost"
												className="btn_normal_show "
												size="large"
											>
												更换图片{this.state.loading ? (
													<Icon type="loading" />
												) : (
													<span />
												)}
											</Button>
										) : (
											<Button
												type="primary"
												className="btn_normal_show color_bg"
												size="large"
											>
												选择图片{this.state.loading ? (
													<Icon type="loading" />
												) : (
													<span />
												)}
											</Button>
										)}
									</Upload>
								</FormItem>
								<span className="upload_tips">
									尺寸为480*480，500KB以内
								</span>
								{this.props.form.getFieldValue("appIconUrl") ? (
									<div className="img_review">
										<img
											width="160"
											height="160"
											src={this.props.form.getFieldValue(
												"appIconUrl"
											)}
										/>
									</div>
								) : (
									<div className="img_review">
										<div>图片预览</div>
									</div>
								)}
							</FormItem>

							<FormItem
								className="create_app"
								{...formItemLayout}
								label="&nbsp;"
							>
								<Button
									disabled={this.state.hidden}
									type="primary"
									className="btn_normal_show color_bg"
									onClick={this.handleSubmit}
									size="large"
								>
									创建
								</Button>
							</FormItem>
						</Col>
					</Row>
				</Form>
			</div>
		);
	}
}
AddApp = Form.create()(AddApp);

module.exports = withRouter(AddApp);
