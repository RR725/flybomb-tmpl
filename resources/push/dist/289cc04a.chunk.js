webpackJsonp([28],{1412:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var r=a(600),n=l(r),i=a(1413),o=l(i),s=a(776),u=l(s),c=a(777),d=l(c),p=a(785),h=l(p),f=n.default.createClass({displayName:"App",getInitialState:function(){return{current:1,tableData:{loading:!0,data:[],pagination:null}}},tableData:function(e){e||(e={});var t=this;this.setState({tableData:{loading:!0}});var a=u.default.listModuleTree;a=d.default.makeUrl(a,e),h.default.get(a,function(e){var a=e.value;a.map(function(e,t){a[t].key="data"+e.id;var l=e.childModuleList;if(l){var r=l.length;if(r>0){a[t].children=l;for(var n=0;n<r;n++)a[t].children[n].key=a[t].childModuleList[n].id,a[t].children[n].topModuleId=a[t].id}}}),t.setState({tableData:{data:a,loading:!1}})})},componentDidMount:function(){var e={index:1};this.tableData(e)},filterTable:function(e){this.setState({tableData:{filterData:e.filterData,data:e.data}})},render:function(){return n.default.createElement("div",null,n.default.createElement(o.default,{filterTable:this.filterTable,homeCurrent:this.state.current,current:this.state.current,refresh:this.state.refresh,tableDataList:this.state.tableData,onSearch:this.tableData}))}});e.exports=f},1413:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},n=a(600),i=l(n),o=a(783),s=a(777),u=l(s),c=a(1414),d=l(c),p=a(1415),h=l(p),f=o.Form.Item,m=i.default.createClass({displayName:"AddAppTask",getInitialState:function(){return{searchType:"first",keys:[],initData:{},current:1,searchCurrent:1,values:[],subAccountTitle:"全部子账号",authData:{appList:[]},tableData:{loading:!0,data:[],pagination:null},data:null,noticeBarType:"0",noticeExpandType:"0",pushTimeType:"0",appName:"全部应用",appId:0,errors:{},defaultAppid:"应用",randomUser:1}},componentWillMount:function(){var e=this,t=u.default.queryString("id",window.location.href);t&&e.props.form.setFieldsValue({appId:t})},changeRadio:function(e){var t={};t[e.target.name]=e.target.value,this.setState(t)},textInput:function(){},setKeys:function(e){this.setState({keys:e})},matchText:function(e,t,a){var l=a.reg,r=a.item,n=this.state.searchType,i=[];if(e.map(function(e){var t=e.urlList;t=t.join(",");var a="url"===n?t:e.name;"pageUrl"===n&&(a=e.pageUrl);var r=a&&a.match(l);r&&i.push(e)}),i.length){var o={};for(var s in r)o[s]=r[s],o.childModuleList=i,o.children=i;t.push(o)}return t},onSearch:function(){var e=this,t=this.props.tableDataList.data,a=this.state.searchType,l=this.props.form.getFieldValue("searchText")||"";l=l.trim();var r=[];"first"===a&&t.map(function(e){var t=new RegExp(l,"gi"),a=e.name,n=a.match(t);n&&r.push(e)}),"second"!==a&&"url"!==a&&"pageUrl"!==a||t.map(function(t){var n=new RegExp(l,"gi"),i=t.childModuleList,o={item:t,reg:n},s=t.urlList;s=s.join(",");var u="url"===a?s:t.name;"pageUrl"===a&&(u=t.pageUrl);var c=u.match(n);return c?void r.push(t):void(i&&i.length&&(r=e.matchText(i,r,o)))}),this.props.filterTable({data:t,filterData:r});var n={showAllUrl:!0};this.setState(n);var i=[];r.map(function(e){i.push("data"+e.id)}),this.setState({keys:i})},selectType:function(e,t){this.props.form.setFieldsValue({appId:e}),this.setState({appId:e,appName:t});var a={index:1};e&&(a.appId=e),this.props.onSearch(a)},toggleModal:function(e,t){var a={};a[e]=!this.state[e],a.editData=t,this.setState(a)},changeType:function(e){this.setState({searchType:e})},render:function(){var e=this,t=this.props.form.getFieldProps;return i.default.createElement("div",null,i.default.createElement(o.Form,{horizontal:!0},i.default.createElement(o.Row,{className:"mt10"},i.default.createElement(o.Col,{span:"8"},i.default.createElement(f,{className:"display_ib va_m mr10"},i.default.createElement(o.Select,{onChange:this.changeType,defaultValue:"first",style:{width:125}},i.default.createElement(o.Select.Option,{value:"first"},"按一级模块搜"),i.default.createElement(o.Select.Option,{value:"second"},"按二级模块搜"),i.default.createElement(o.Select.Option,{value:"url"},"按API地址搜"),i.default.createElement(o.Select.Option,{value:"pageUrl"},"按访问地址搜"))),i.default.createElement(f,{className:"display_ib va_m",style:{width:264},label:""},i.default.createElement(o.Input,r({placeholder:"请输入关键字搜索"},t("searchText"))))),i.default.createElement(o.Col,{span:"6"},i.default.createElement(o.Button,{className:"ml10",type:"primary",onClick:this.onSearch,size:"large"},"查询"),i.default.createElement(o.Button,{className:"ml10",type:"primary",onClick:function(){return e.toggleModal("showMainAccountModal")},size:"large"},"添加模块")))),this.state.showMainAccountModal&&i.default.createElement(h.default,{mainAccountId:this.state.mainAccountId,appId:this.state.appId,editData:this.state.editData,homeCurrent:this.props.homeCurrent,onSearch:this.props.onSearch,toggleModal:this.toggleModal,mainAccount:this.state.mainAccount}),i.default.createElement(d.default,{homeCurrent:this.props.homeCurrent,toggleModal:this.toggleModal,showAllUrl:this.state.showAllUrl,refresh:this.props.refresh,searchType:this.state.searchType,setKeys:this.setKeys,searchText:this.props.form.getFieldValue("searchText")||"",keys:this.state.keys,filterTable:this.props.filterTable,onSearch:this.props.onSearch,tableData:this.props.tableDataList}))}});m=o.Form.create()(m),e.exports=m},1414:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var n=a(600),i=l(n),o=a(783),s=a(776),u=l(s),c=a(777),d=l(c),p=a(785),h=l(p),f=i.default.createClass({displayName:"ManageTabel",getInitialState:function(){return{showMainAccountModal:!1,searchText:"",keys:[],refresh:!1}},toggleUrlList:function(e){this.setState(r({},"showAllUrl"+e.id,!this.state["showAllUrl"+e.id]))},togglePopover:function(e){this.setState(r({},"visible"+e,!this.state["visible"+e]))},delAccount:function(e){var t=this,a=u.default.delModule;a=d.default.makeUrl(a,{moduleId:e}),h.default.get(a,function(){o.message.success("删除成功"),t.props.onSearch(),t.togglePopover(e)})},getContent:function(e,t){var a=this;return i.default.createElement("div",null,i.default.createElement(o.Button,{type:"primary",className:"color_bg mr10",onClick:function(){return a.togglePopover(e)}},"取消"),i.default.createElement(o.Button,{onClick:function(){return a.delAccount(e,t)}},"确定"))},toggleModal:function(e,t){var a={showMainAccountModal:!this.state.showMainAccountModal};t&&(a.mainAccount=t.name,a.appId=t.appId,a.mainAccountId=t.mainAccountId),this.setState(a)},showSubAccount:function(e,t){var a={appId:t};this.props.toggleModal("allSubAccount",a)},onExpand:function(e,t){var a=this.props.keys;e?a.push("data"+t.id):a.map(function(e,l){var r=e.split("data")[1];parseInt(r)===t.id&&a.splice(l,1)}),this.props.setKeys(a)},componentDidMount:function(){},render:function(){var e=this,t=[{title:"模块",key:"col0",dataIndex:"name",render:function(t){var a=e.props.searchType,l=e.props.searchText;l=l.trim(),l=new RegExp(l,"gi");var r=t.match(l);return"first"!==a&&"second"!==a||(t=t.split(l).map(function(e,t){return t>0?[i.default.createElement("span",{className:"color_error"},r[0]),e]:e})),t}},{title:"模块API地址",key:"col1",dataIndex:"urlList",className:"url_list",render:function(t,a){var l=a.urlList,r=e.props.showAllUrl||e.state["showAllUrl"+a.id],n=r?"auto":22,s=r?"expanded":"collapsed",u=l.map(function(t,a){var r=l.length>1&&0===a?i.default.createElement("span",{className:"ant-table-row-expand-icon ant-table-row-"+s}):null,n=e.props.searchType,u=e.props.searchText;u=u.trim(),u=new RegExp(u,"gi");var c=t.match(u);return"url"===n&&(t=t.split(u).map(function(e,t){return t>0?[i.default.createElement("span",{className:"color_error"},c[0]),e]:e})),i.default.createElement(o.Row,{key:"key"+a},i.default.createElement(o.Col,{span:"2"},r),i.default.createElement(o.Col,{span:"22"},i.default.createElement("p",null,t)))});return i.default.createElement("div",{className:"moduleName"+a.parentId,style:{overflow:"hidden",cursor:"pointer",height:n},onClick:function(){return e.toggleUrlList(a)}},u)}},{title:"模块访问地址",key:"col2",className:"ta_l",dataIndex:"pageUrl",render:function(t){var a=e.props.searchType,l=e.props.searchText;l=l.trim(),l=new RegExp(l,"gi");var r=t.match(l);return"pageUrl"===a&&(t=t.split(l).map(function(e,t){return t>0?[i.default.createElement("span",{className:"color_error"},r[0]),e]:e})),t}},{title:"排序",key:"col3",className:"ta_c",dataIndex:"sort",render:function(e,t){var a=0!==t.parentId?40:0;return i.default.createElement("div",{style:{paddingLeft:a}},e)}},{title:"操作",key:"col4",className:"ta_c",dataIndex:"subAccountNum",render:function(t,a,l){return i.default.createElement("div",null,i.default.createElement(o.Tooltip,{title:"编辑"},i.default.createElement("i",{onClick:function(){return e.props.toggleModal("showMainAccountModal",a)},className:"i_edit"})),i.default.createElement(o.Tooltip,{title:"删除"},i.default.createElement(o.Popover,{placement:"bottom",visible:e.state["visible"+a.id],content:e.getContent(a.id,l),title:"确定删除该模块?",onVisibleChange:function(){return e.togglePopover(a.id)},trigger:"click"},i.default.createElement("i",{onClick:function(){return e.togglePopover(a.id)},className:"i_del"}))))}}],a=this.props.keys;return i.default.createElement("div",null,i.default.createElement(o.Table,{expandedRowKeys:a,onExpand:this.onExpand,columns:t,loading:this.props.tableData.loading,dataSource:this.props.tableData.filterData||this.props.tableData.data,pagination:!1}))}});e.exports=f},1415:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},n=a(600),i=l(n),o=a(783),s=a(776),u=l(s),c=a(785),d=l(c),p=o.Radio.Group,h=o.Form.Item,f={labelCol:{span:4},wrapperCol:{span:20}},m=i.default.createClass({displayName:"App",getInitialState:function(){return{listTopModule:[],liClass:"",loading:!1,currentData:[],jsonData:[],authData:[],authChecked:[],createSubAccount:this.props.createSubAccount}},getTopModule:function(){var e=this;d.default.get(u.default.listTopModule,function(t){e.setState({listTopModule:t.value})})},handleSubmit:function(e){var t=this;e.preventDefault();var a=this.props.editData,l=a?u.default.editModule:u.default.createModule;this.props.form.validateFields(function(e,r){if(e)return void console.log("Errors in form!!!");var n=t.props.form.getFieldValue("preModuleId"),i=r.urls;i=i.replace(/\n/g,",");var s=i.split(",");s.map(function(e,t){s[t]=e.trim()}),i=s.join(","),r.urls=i,r.preModuleId=n||0;var u="模块添加成功";a&&(r.moduleId=a.id,u="模块修改成功"),d.default.post(l,r,function(){o.message.success(u),t.props.toggleModal("showMainAccountModal"),t.props.onSearch()})})},changeRadio:function(e){var t=e.target.value,a="2"===t;a&&this.getTopModule(),this.setState({showTopLevel:!!a})},componentDidMount:function(){var e=this.props.editData;e&&2===e.grade&&(this.setState({showTopLevel:!0}),this.getTopModule())},render:function(){var e=this,t=this.props.form.getFieldProps,a=this.state.listTopModule,l=a.map(function(e,t){return i.default.createElement(o.Select.Option,{key:t,value:String(e.id)},e.name)}),n=this.props.editData,s=n?"编辑模块":"添加模块",u=this.props.editData&&this.props.editData.urlList;u&&(u=u.join("\n"));var c=this.props.editData&&this.props.editData.pageUrl;return i.default.createElement(o.Modal,{width:"1000",footer:null,title:s,visible:!0,onCancel:function(){return e.props.toggleModal("showMainAccountModal")}},i.default.createElement(o.Form,{horizontal:!0},i.default.createElement(h,r({},f,{label:"模块名称    "}),i.default.createElement(o.Input,r({style:{width:190},placeholder:"模块名称"},t("moduleName",{validate:[{rules:[{required:!0,message:"请输入模块名称"}],trigger:["onBlur","onChange"]}],initialValue:this.props.editData&&this.props.editData.name})))),i.default.createElement(h,r({},f,{label:"模块级别    "}),i.default.createElement(p,t("grade",{validate:[{rules:[{required:!0,message:"请选择模块级别"}],trigger:["onBlur","onChange"]}],initialValue:this.props.editData&&String(this.props.editData.grade)||"1",onChange:function(t){e.changeRadio(t)}}),i.default.createElement(o.Radio,{value:"1"},"一级标签"),i.default.createElement(o.Radio,{value:"2"},"二级标签"))),this.state.showTopLevel&&i.default.createElement(h,r({style:{marginLeft:85}},f,{label:"上级标签"}),i.default.createElement(o.Select,r({},t("preModuleId",{validate:[{rules:[{required:!0,message:"请选择上级标签"}],trigger:["onBlur","onChange"]}],initialValue:this.props.editData&&this.props.editData.topModuleId&&String(this.props.editData.topModuleId)}),{style:{width:123}}),l)),i.default.createElement(h,r({},f,{label:"模块排序    "}),i.default.createElement(o.Input,r({style:{width:190},placeholder:"模块排序"},t("sort",{validate:[{rules:[{required:!0,message:"请输入模块排序"}],trigger:["onBlur","onChange"]}],initialValue:String(this.props.editData&&this.props.editData.sort||"")})))),i.default.createElement(h,r({},f,{label:"模块API地址    "}),i.default.createElement(o.Input,r({rows:"8",type:"textarea",style:{width:650},placeholder:"模块API地址"},t("urls",{initialValue:u||""})))),i.default.createElement(h,r({},f,{label:"模块访问地址    "}),i.default.createElement(o.Input,r({style:{width:650},placeholder:"模块访问地址"},t("pageUrl",{initialValue:c||""})))),i.default.createElement(h,r({},f,{label:" "}),i.default.createElement(o.Button,{className:"ml10 mt20",type:"primary",onClick:this.handleSubmit,size:"large"},"保存"))))}});m=o.Form.create()(m),e.exports=m}});