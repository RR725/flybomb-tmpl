webpackJsonp([22],{1379:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d=a(600),n=l(d),i=a(783),u=a(776),c=l(u),r=a(777),m=l(r),h=a(785),p=l(h),o=i.DatePicker.RangePicker,f=i.Radio.Group,I=i.Select.Option,g=n.default.createClass({displayName:"ConfigDebug",getInitialState:function(){return{chosedType:1,chosedDropMenu:1}},getAppInfo:function(){var e=this,t=m.default.queryString("appId",window.location.href);this.setState({appId:t}),p.default.get(c.default.getAppInfo+"?appId="+t,function(t){e.setState({dwAuth:t.value.dwAuth})})},componentWillReceiveProps:function(){var e=m.default.queryString("appId",window.location.href);this.state.appId&&e!==this.state.appId&&this.getAppInfo()},componentDidMount:function(){this.getAppInfo()},handleMenuClick:function(e){var t=void 0;switch(e){case"1":t="deviceId2PushId";break;case"2":t="alias2PushId";break;case"3":t="pushId2Alias";break;case"4":t="pushId2Tags"}this.setState(s({chosedDropMenu:e},t+"Display",!1)),this.refs.sinput.refs.input.value=""},onChangeDate:function(e,t){this.refs.rp.setAttribute("data-date",t.join(","))},onChangeType:function(e){this.setState({chosedType:e.target.value,getDetailByMsgIdDisplay:!1,getDetailByPushIdDisplay:!1})},handleSubmit:function(e){var t=this,a=this,l=m.default.queryString("appId",window.location.href),d=document.querySelector("#"+e).value;d=d.trim();var i=c.default[e],u={appId:l};if("deviceId2PushId"===e)u.deviceId=d;else if("alias2PushId"===e)u.alias=d;else if("getDetailByMsgId"===e){var r=document.querySelector("#getDetailByMsgId_pushId").value;r=r.trim(),u.pushId=r,u.msgId=d}else if("getDetailByPushId"===e){u.pushId=d;var h=this.refs.rp.getAttribute("data-date");if(!h){var o=m.default.dateFormat("yyyy-MM-dd",new Date);h=o+","+o}h=h.split(","),u.startTime=h[0],u.endTime=h[1]}else u.pushId=d;var f=!1;if("getDetailByMsgId"===e){var I=u.pushId;""===I&&(f=!0)}if(""===d||f){var g;return void this.setState((g={},s(g,e+"Text","输入框不能为空"),s(g,e+"Display",!0),g))}i=m.default.makeUrl(i,u),this.setState(s({},e+"Display",!1)),p.default.get(i,function(l){var d,i=l.value;if("deviceOnlineStatus"===e&&(i=i?"在线":"离线"),"deviceSubStatus"===e&&(i=n.default.createElement("span",null,i?n.default.createElement("p",null,"AppId: ",i.pushAppId):null,i?n.default.createElement("p",null,"包名: ",i.packageName):null,n.default.createElement("p",null,"是否订阅: ",i?"已订阅":"未订阅"),i?n.default.createElement("p",null,"通知栏开关: ",i.barSwitch?"开":"关"):null,i?n.default.createElement("p",null,"透传开关: ",i.directSwitch?"开":"关"):null)),"systemPushReview"===e&&(i=i?n.default.createElement("span",null,"已推送",n.default.createElement("p",null,"msgId：",i)," "):"推送失败"),"pushId2Tags"===e){for(var u=[],c=0;c<i.tags.length;c++)u.push(n.default.createElement("p",{key:i.tags[c].tagId},i.tags[c].tagName));i.tags.length||(u="无对应的标签"),i=n.default.createElement("div",null,u)}else if("pushId2Alias"===e)i=i?"别名："+(i.alias?i.alias:"无对应的别名"):"";else if("alias2PushId"===e){for(var r=[],m=0;m<i.length;m++)r.push(n.default.createElement("p",{key:m},i[m]));i.length||(r="该别名无对应的PushId"),i=n.default.createElement("div",null,r)}else if("getDetailByMsgId"===e){for(var h=[],p=0;p<i.details.length;p++){var o=i.details[p];h.push(n.default.createElement("p",null,o.time,"  ",o.common))}i=n.default.createElement("div",null,n.default.createElement("div",{className:"title"},"MsgId ：",i.msgId?i.msgId+(i.pushType?"（"+i.pushType+"）":""):"无数据"),n.default.createElement("div",null,h))}else"getDetailByPushId"===e&&(i=i.length>0?i.map(function(e,t){for(var l=e,s=[],d="info"+t+" hide",i=0;i<l.details.length;i++){var u=l.details[i];s.push(n.default.createElement("p",{key:t+""+i},u.time,"  ",u.common))}return n.default.createElement("div",{key:t},n.default.createElement("a",{className:"title",href:"javascript:void(0);",onClick:a.MsgIdcontrol.bind(a,t)},"MsgId ：",l.msgId," ",l.pushType?"（"+l.pushType+"）":""),n.default.createElement("div",{className:d},s))}):"无数据",i=n.default.createElement("div",null,i));t.setState((d={},s(d,e+"Text",i),s(d,e+"Display",!0),d))})},disabledDate:function(e){return e.time>(new Date).getTime()},MsgIdcontrol:function(e){var t=document.querySelectorAll(".info"+e)[0];t.classList.toggle("hide")},render:function(){var e=void 0,t=void 0,a=void 0,l=document.getElementById("userAuth")&&document.getElementById("userAuth").innerHTML;switch(this.state.chosedDropMenu+""){case"1":e=n.default.createElement(i.Input,{ref:"sinput",id:"deviceId2PushId",placeholder:"请输入IMEI"}),t=n.default.createElement("p",{style:{display:this.state.deviceId2PushIdDisplay?"":"none"}},this.state.deviceId2PushIdText),a="deviceId2PushId";break;case"2":e=n.default.createElement(i.Input,{ref:"sinput",id:"alias2PushId",placeholder:"请输入别名"}),t=n.default.createElement("div",{style:{display:this.state.alias2PushIdDisplay?"":"none"}},this.state.alias2PushIdText),a="alias2PushId";break;case"3":e=n.default.createElement(i.Input,{ref:"sinput",id:"pushId2Alias",placeholder:"请输入PushId"}),t=n.default.createElement("div",{className:"break_word",style:{display:this.state.pushId2AliasDisplay?"":"none"}},this.state.pushId2AliasText),a="pushId2Alias";break;case"4":e=n.default.createElement(i.Input,{ref:"sinput",id:"pushId2Tags",placeholder:"请输入PushId"}),t=n.default.createElement("div",{style:{display:this.state.pushId2TagsDisplay?"":"none"}},this.state.pushId2TagsText),a="pushId2Tags"}var s=n.default.createElement(i.Row,{className:"list list_drop"},n.default.createElement(i.Col,{span:"10"},n.default.createElement(i.Col,{span:"12"},n.default.createElement(i.Select,{defaultValue:"IMEI查询PushId",size:"large",onChange:this.handleMenuClick},n.default.createElement(I,{value:"1"},"IMEI查询PushId"),n.default.createElement(I,{value:"2"},"别名查询PushId"),n.default.createElement(I,{value:"3"},"PushId/IMEI 查询别名"),n.default.createElement(I,{value:"4"},"PushId/IMEI 查询标签"))),n.default.createElement(i.Col,{span:"12"},e),n.default.createElement(i.Col,{span:"24",className:"mt5"},t)),n.default.createElement(i.Col,{span:"3"},n.default.createElement(i.Button,{onClick:this.handleSubmit.bind(this,a),size:"large",className:"btn_normal_show ml10 w_80 "},"查询")));return n.default.createElement(i.Row,{className:"config_debug"},n.default.createElement(i.Col,{className:"debug_sidebar",span:"4"},n.default.createElement("ul",null,n.default.createElement("li",{className:"list"},"设备对应关系查询"),n.default.createElement("li",{className:"list"},"设备是否在线查询"),n.default.createElement("li",{className:"list list_sub"},"设备是否订阅查询"),n.default.createElement("li",{className:"list"},"推送测试"),this.state.dwAuth||l>1?n.default.createElement("li",{className:"list"},"获取msgId明细记录"):null)),n.default.createElement(i.Col,{className:"debug_content",span:"20"},s,n.default.createElement(i.Row,{className:"list"},n.default.createElement(i.Col,{span:"10"},n.default.createElement(i.Input,{id:"deviceOnlineStatus",placeholder:"请输入PushId"}),n.default.createElement("p",{className:"mt5",style:{display:this.state.deviceOnlineStatusDisplay?"":"none"}},"在线状态: ",this.state.deviceOnlineStatusText)),n.default.createElement(i.Col,{span:"3"},n.default.createElement(i.Button,{onClick:this.handleSubmit.bind(this,"deviceOnlineStatus"),size:"large",className:"btn_normal_show ml10 w_80 "},"查询"))),n.default.createElement(i.Row,{className:"list list_sub"},n.default.createElement(i.Col,{span:"10"},n.default.createElement(i.Input,{id:"deviceSubStatus",placeholder:"请输入PushId"}),n.default.createElement("div",{className:"mt5",style:{display:this.state.deviceSubStatusDisplay?"":"none"}},this.state.deviceSubStatusText)),n.default.createElement(i.Col,{span:"3"},n.default.createElement(i.Button,{onClick:this.handleSubmit.bind(this,"deviceSubStatus"),size:"large",className:"btn_normal_show ml10 w_80 "},"查询"))),n.default.createElement(i.Row,{className:"list"},n.default.createElement(i.Col,{span:"10"},n.default.createElement(i.Input,{id:"systemPushReview",placeholder:"请输入PushId"}),n.default.createElement("p",{className:"mt5",style:{display:this.state.systemPushReviewDisplay?"":"none"}},this.state.systemPushReviewText)),n.default.createElement(i.Col,{span:"3"},n.default.createElement(i.Button,{onClick:this.handleSubmit.bind(this,"systemPushReview"),size:"large",className:"btn_normal_show ml10 w_80 "},"推送"))),this.state.dwAuth||l>1?n.default.createElement(i.Row,{className:"list"},n.default.createElement(i.Row,{className:"mb10"},n.default.createElement(f,{onChange:this.onChangeType,value:this.state.chosedType},n.default.createElement(i.Radio,{value:1},"按任务查询"),l>1?n.default.createElement(i.Radio,{value:2},"按日期查询"):null)),n.default.createElement(i.Row,null,n.default.createElement("div",{className:"msgid",style:1==this.state.chosedType?{display:"block"}:{display:"none"}},n.default.createElement(i.Col,{span:"13"},n.default.createElement(i.Input,{id:"getDetailByMsgId_pushId",className:"mb10",placeholder:"请输入PushId"}),n.default.createElement(i.Input,{id:"getDetailByMsgId",placeholder:"请输入MsgId/TaskId"}),n.default.createElement("div",{className:"pushbox mt5",style:{display:this.state.getDetailByMsgIdDisplay?"":"none"}},this.state.getDetailByMsgIdText)),n.default.createElement(i.Col,{span:"3"},n.default.createElement(i.Button,{onClick:this.handleSubmit.bind(this,"getDetailByMsgId"),size:"large",className:"btn_normal_show ml10 w_80 "},"查询"))),n.default.createElement("div",{className:"pushid",ref:"rp",style:2==this.state.chosedType?{display:"block"}:{display:"none"}},n.default.createElement(i.Col,{span:"13"},n.default.createElement(o,{defaultValue:[new Date,new Date],style:{width:"100%"},onChange:this.onChangeDate,disabledDate:this.disabledDate}),n.default.createElement(i.Input,{id:"getDetailByPushId",className:"mt10",placeholder:"请输入PushId"}),n.default.createElement("div",{className:"pushbox mt5",style:{display:this.state.getDetailByPushIdDisplay?"":"none"}},this.state.getDetailByPushIdText)),n.default.createElement(i.Col,{span:"3"},n.default.createElement(i.Button,{onClick:this.handleSubmit.bind(this,"getDetailByPushId"),size:"large",className:"btn_normal_show ml10 w_80 "},"查询"))))):null))}});e.exports=g}});