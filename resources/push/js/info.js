"use strict";
import React from "react";

import { Tooltip } from "antd";
class Info extends React.Component {
	constructor(props) {
		super(props);
	}
	getContainer() {
		return document.getElementById("detailTable");
	}
	render() {
		const data = [
			{
				text: "短信内容",
				title: "单条短信长度为70字，超过70字后，按67字/条分隔成多条计费"
			},
			{
				text: "短信推送手机号白名单",
				title: "开启白名单后，短信推送的手机号推送功能目标用户将不过滤应用订阅关系"
			},
			{
				text: "目标数",
				title: "计划推送的目标数"
			},
			{
				text: "sms有效数",//短信的有效数
				title: "从目标数中筛选订阅状态等其他信息后剩下的有效目标数"
			},
			{
				text: "发送数",
				title: "发送的短信量"
			},
			{
				text: "成功数",
				title: "运营商回馈成功发送完成的数量"
			},
			{
				text: "计费条数",
				title: "按短信字数，统计全部短信的具体计费条数"
			},
			{
				text: "日增用户数",
				title: "当天首次订阅应用的设备数"
			},
			{
				text: "在线峰值用户数",
				title: "订阅该应用的设备中，当天同时在线的数量峰值"
			},
			{
				text: "日联网用户数",
				title: "订阅该应用的设备中，当天有联网行为的设备数总和"
			},
			{
				text: "累计注册用户数",
				title: "历史累积订阅该应用的设备数，已卸载应用不计入累计用户数中"
			},
			{
				text: "联网数",
				title: "联网并且与通道形成长链接的设备数"
			},
			{
				text: "到达应用数",
				title: "PushSDK将消息发送给应用的数量（Flyme6中，通知栏消息由pushSDK弹出，此埋点仍保留有上报数据）"
			},
			{
				text: "划掉数",
				title: "在通知栏中划掉消息的数量。透传消息不统计该项"
			},
			{
				text: "已卸载数",
				title:
					"本次推送任务中应用已被卸载的数量，数据上将出现接收数大于展示数。（Flyme6固件此应用会被反订阅，在重新订阅前下次推送任务将不朝它推送；Flyme6以下固件应用没有被反订阅）"
			},
			{
				text: "有效数",
				title:
					"从目标数中去除错误或无效的ID，实际有效的ID数量。筛选包括开关状态，订阅状态，pushId有效性以及其他可以推送状态"
			},
			{
				text: "推送数",
				title: "Push平台实际下发推送的数量"
			},
			{
				text: "接收数",
				title: "Push服务接收数，任务有效期内，联网并正常接收到推送消息的数量"
			},
			{
				text: "展示数",
				title:
					"客户端从Push服务收到消息，并在通知栏中展示的数量（3.0以下版本SDK，数据统计T+1，3.0以上实时统计。透传消息没有展示数统计）"
			},
			{
				text: "点击数",
				title: "用户点击消息的数量（3.0以下版本SDK，数据统计T+1，3.0以上实时统计。透传消息没有点击数统计）"
			},
			{
				text: "收纳数",
				title: "通知栏消息被收进收纳盒的数量。（覆盖2017年5月份后发布的Flyme6固件用户）"
			},
			{
				text: "不展示数",
				title: "用户设置“不允许通知”的数量，消息不会展示在通知栏上。（覆盖2017年5月份后发布的Flyme6固件用户）"
			},
			{
				text: "App ID",
				title: "应用的唯一标识，客户端订阅推送时使用"
			},
			{
				text: "App Key",
				title: "客户端身份标识，客户端订阅推送时使用"
			},
			{
				text: "App Secret",
				title: "服务端身份标识，服务端 SDK 初始化使用"
			},
			{
				text: "点击动作",
				title: "调起包名不是必填项，如不填，则参数传给本应用"
			},
			{
				text: "推送黑名单",
				title: "选择黑名单后，本次推送将不会朝这批用户推送"
			},
			{
				text: "通知聚合",
				title:
					"通知分类用来控制多条通知在通知栏内的替换关系。同类通知之间新的替换旧的，不同类通知之间并存而不替换。最多可以有10000类通知并存。默认不填则多条通知可以并存。（此功能需要pushSDK版本更新至V3.5.0以上）"
			},
			{
				text: "定速推送",
				title: "开启定速推送后，此任务的推送速率将按设置的速率推送。速率不会超过应用最大推送速率"
			},
			{
				text: "定时展示",
				title: "开启定时展示后，目标用户的展示量将平摊到时间段内"
			},
			{
				text: "任务定制",
				title: "设置好循环推送的周期后，会在规定的时间点进行推送"
			},
			{
				text: "回执地址",
				title:
					"回执地址设置第三方接收消息回执的Http接口, 最大长度128字节，用于获取推送明细，Token用于回执接口鉴权"
			},
			{
				text: "标题",
				title: "标题的内容会展示在应用图标下方，具体展示效果请预推测试"
			},
			{
				text: "小图标",
				title: "小图标会出现在标题前面，占用部分的展示面积。可选择默认的图标类型，也可自定义上传，自定义图标的大小为24*24"
			},
			{
				text: "推送量",
				title: "周期内的推送总量，包括通知栏推送与透传推送"
			},
			{
				text: "消息收纳率",
				title: "计算公式：收纳数/（展示数-不展示数）"
			},
			{
				text: "消息划掉率",
				title: "计算公式：划掉数/（展示数-不展示数）"
			},
			{
				text: "推送有效率",
				title: "计算公式：有效数/目标数"
			},
			{
				text: "消息接收率",
				title: "计算公式：接收数/推送数"
			},
			{
				text: "功能转化率",
				title: "统计个性化推送、图片推送的转化率。衡量高级推送功能与普通常规推送的对比。计算公式：点击数/（展示数-不展示数）"
			},
			{
				text: "点击转化率",
				title:
					"周期内的点击率，仅统计通知栏推送方式的点击数据，计算公式：点击数/（展示数-不展示数），仅统计推送数大于1万的数据"
			},
			{
				text: "消息去重",
				title: "分组推送内的消息去重可能会出现子任务的推送用户量少于目标用户量的情况"
			},
			{
				text: "每天推送限制",
				title: "本应用一天可创建的taskId总量，仅包含平台创建，不包含API"
			},
			{
				text: "透传总量限制",
				title: "本应用一天可推送的透传消息总量，包含平台与API"
			},
			{
				text: "允许推送其他包名",
				title: "开启后，允许本应用带上第三方应用包名，点击通知栏后调起第三方应用"
			},
			{
				text: "总Task创建数量限制（次/天）",
				title: "本应用API可以创建的非调度taskId总量"
			},
			{
				text: "应用推送消息总量（条/天）",
				title: "本应用可推送的消息总量，包含通知栏、透传、平台任务，API接口调用等所有方式"
			},
			{
				text: "绿色通道",
				title: "开启绿色通道后，本应用的推送将不会被收进收纳盒内"
			},
			{
				text: "任务备注",
				title: "任务备注用于标记推送任务的业务类型与备注信息，方便后续推送数据的整理归类"
			}
		];
		const title = data.map(source => {
			let type=this.props.type;
			let text=this.props.text;
			text =type? type+text:text;
			
			if (text.indexOf(source.text) === 0) {
				return source.title;
			}
			return "";
		});
		return (
			<span className="info_wrap">
				<Tooltip getTooltipContainer={this.getContainer} title={title}>
					<i className="fs14 color999 fw_n cursor_p anticon anticon-info-circle-o" />
				</Tooltip>
				{this.props.text}
			</span>
		);
	}
};

module.exports = Info;
