webpackJsonp([1],{1504:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var r=a(4),n=l(r),o=a(79),s=l(o),i=a(1),u=l(i),d=a(9),c=l(d),m=a(2),p=l(m),f=a(3),g=l(f),h=a(0),E=l(h),v=a(127),y=a(151),N=a(108),_=l(N),w=a(152),b=l(w),C=v.Select.Option,I=v.Form.Item,k={labelCol:{span:5},wrapperCol:{span:19}},F=function(e){function t(e){(0,u.default)(this,t);var a=(0,p.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.state={loading:!1,appCategory:[]},a}return(0,g.default)(t,e),(0,c.default)(t,[{key:"componentWillUnmount",value:function(){document.querySelector("#home").className=""}},{key:"componentDidMount",value:function(){var e=this;document.querySelector("#home").className="active",b.default.get(_.default.getAppCategory,function(t){e.setState({appCategory:t.value})})}},{key:"cantNull",value:function(e){return(0,this.props.form.getFieldProps)(e,{validate:[{rules:[{required:!0,message:"请填写应用名称"},{min:2,message:"应用名称不能少于2个字"},{max:10,message:"应用名称不能超过10个字"},{validator:function(e,t,a){t&&t.length>=2&&t.length<=10&&t.match(/^\s/)&&a(new Error("行首不能输入空格")),a()}}],trigger:["onBlur","onChange"]}]})}},{key:"handleSubmit",value:function(){this.props.form.validateFields(function(e,t){if(e)return void console.log("Errors in form!!!");var a={appName:t.appName.trim(),packageName:t.packageName.trim(),appIconUrl:t.appIconUrl,appCategoryId:t.appCategoryId};b.default.post(_.default.addApp,a,function(){v.message.success("新建成功"),window.location.hash="/home?refresh=true"})})}},{key:"validatePackageName",value:function(e){return(0,this.props.form.getFieldProps)(e,{validate:[{rules:[{required:!0,message:"请填写包名"},{max:50,message:"包名不能超过50个字"},{validator:function(e,t,a){console.log(t),t=t&&t.trim(),t&&""===t||t&&!t.match(/^[a-zA-Z][\w_]*(\.[a-zA-Z][\w_]*)+$/)?a(new Error("请输入包名的正确格式，比如：com.flyme.sms")):a()}}],trigger:["onBlur","onChange"]}]})}},{key:"render",value:function(){var e=this.props.form.getFieldProps,t=this,a={name:"iconFile",accept:".jpg,.jpeg,.png,.bmp",action:_.default.uploadIcon,headers:{authorization:"authorization-text"},showUploadList:!1,beforeUpload:function(e){t.setState({loading:!0});var a=e.type,l=a.indexOf("image")>=0;return l||(v.message.error("请上传图片格式的文件"),t.setState({loading:!1})),l},onChange:function(e){"uploading"!==e.file.status&&console.log(e.file,e.fileList),e.file.response&&("200"===e.file.response.code?(v.message.success(e.file.name+" 上传成功。"),t.props.form.setFieldsValue({appIconUrl:e.file.response.value})):v.message.error(e.file.response.message),t.setState({loading:!1}))}},l=E.default.createElement("span",null,E.default.createElement(v.Tooltip,{title:"可以包含大写字母(A到Z)、小写字母(a到z)、数字和下划线，可以用点(英文句号)分隔，隔开的每一段都必须以字母开头。"},E.default.createElement("i",{className:"fs14 color999 fw_n cursor_p anticon anticon-info-circle-o"})),"应用包名"),r=this.state.appCategory.map(function(e,t){return E.default.createElement(C,{key:t,value:String(e.id)},e.categoryName)});return E.default.createElement("div",null,E.default.createElement("div",{className:"home_toolbar"},E.default.createElement(v.Row,null,E.default.createElement(v.Col,{span:"4"},E.default.createElement("div",{className:"title"},E.default.createElement("span",{className:"border"}),"新建应用")))),E.default.createElement(v.Form,{style:{paddingTop:20},horizontal:"true"},E.default.createElement(v.Row,{className:"add_app"},E.default.createElement(v.Col,{span:"18"},E.default.createElement(I,(0,n.default)({},k,{label:"应用名称"}),E.default.createElement(v.Input,(0,n.default)({style:{width:300},placeholder:"2-10个字符"},this.cantNull("appName")))),E.default.createElement(I,(0,n.default)({},k,{label:l}),E.default.createElement(v.Input,(0,n.default)({style:{width:300},disabled:this.state.disabled},this.validatePackageName("packageName")))),E.default.createElement(I,(0,n.default)({},k,{label:"应用类型"}),E.default.createElement(v.Select,(0,n.default)({style:{width:300}},e("appCategoryId",{validate:[{rules:[{required:!0,message:"请选择应用类型"}],trigger:["onBlur","onChange"]}]}),{size:"large"}),r)),E.default.createElement(I,(0,n.default)({},k,{label:"应用图标"}),E.default.createElement(I,{className:"add_app_icon"},E.default.createElement(v.Upload,(0,n.default)({},e("appIconUrl",{validate:[{rules:[{required:!0,message:"请上传应用图标"}]}]}),{style:{width:200}},a),this.props.form.getFieldValue("appIconUrl")?E.default.createElement(v.Button,{type:"ghost",className:"btn_normal_show ",size:"large"},"更换图片",this.state.loading?E.default.createElement(v.Icon,{type:"loading"}):E.default.createElement("span",null)):E.default.createElement(v.Button,{type:"primary",className:"btn_normal_show color_bg",size:"large"},"选择图片",this.state.loading?E.default.createElement(v.Icon,{type:"loading"}):E.default.createElement("span",null)))),E.default.createElement("span",{className:"upload_tips"},"尺寸为480*480，500KB以内"),this.props.form.getFieldValue("appIconUrl")?E.default.createElement("div",{className:"img_review"},E.default.createElement("img",{width:"160",height:"160",src:this.props.form.getFieldValue("appIconUrl")})):E.default.createElement("div",{className:"img_review"},E.default.createElement("div",null,"图片预览"))),E.default.createElement(I,(0,n.default)({className:"create_app"},k,{label:" "}),E.default.createElement(v.Button,{disabled:this.state.hidden,type:"primary",className:"btn_normal_show color_bg",onClick:this.handleSubmit,size:"large"},"创建"))))))}}]),t}(E.default.Component);F=v.Form.create()(F),e.exports=(0,y.withRouter)(F)}});