(this["webpackJsonpimmersive-project"]=this["webpackJsonpimmersive-project"]||[]).push([[0],{34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},45:function(e,t){e.exports.config={bar:[{primary:!0,type:"ordinal",position:"left"},{position:"bottom",type:"linear",stacked:!0}],area:[{primary:!0,position:"bottom",type:"time"},{position:"left",type:"linear",stacked:!0}]}},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),i=a(8),r=a.n(i),l=(a(34),a(4)),o=a.n(l),d=a(7),u=a(3),j=(a.p,a(36),a(37),a(6)),b=a.n(j);a(14);var h=function(e){var t=e.roles,a=s.a.useState(!1),c=Object(u.a)(a,2),i=c[0],r=c[1],l=s.a.useState(t[0]),o=Object(u.a)(l,2),d=o[0],j=o[1];return Object(n.jsxs)("div",{id:"header",children:[Object(n.jsx)("div",{children:"immersed Dashboard"}),Object(n.jsxs)("div",{className:"settings-dropdown",children:[Object(n.jsx)("img",{src:"/immersed-project./icons/settings.png",id:"img",alt:"",onClick:function(){return r(!i)}}),Object(n.jsx)("div",{className:i?"show-dropdown":"hidden",children:Object(n.jsx)(b.a,{options:t,value:d,onChange:function(t){j(t),e.onClickCallBack({val:t})},className:"filters-class"})})]})]})};a(39);var p=function(){return Object(n.jsx)("div",{id:"footer",children:Object(n.jsx)("button",{onClick:function(){return console.log("Clicked contact")},className:"primary",children:"Contact us"})})};a(40);var m=function(){return Object(n.jsxs)("div",{className:"currentInformation",children:[Object(n.jsxs)("div",{children:["Current team online: ",Object(n.jsx)("span",{className:"blink",children:"Team spiral "})]}),Object(n.jsx)("button",{className:"primary",children:"Join"})]})},f=a(9),O=a(10),x=a(5),v=a(13),g=a(12),k=(a(41),a(27)),C=a(45);var y=function(e){var t=s.a.useMemo((function(){return e.data}),[e.data]),a=s.a.useMemo((function(){return{type:e.type}}),[e.type]),c=s.a.useMemo((function(){return C.config[e.type]}),[e.type]);return Object(n.jsx)("div",{style:{height:"250px"},children:Object(n.jsx)(k.Chart,{data:t,series:a,axes:c,tooltip:!0})})},N=a(11),S=a.n(N);a(63);var w=function(e){var t=s.a.useState(e.options[0]),a=Object(u.a)(t,2),c=a[0],i=a[1];return Object(n.jsx)(b.a,{options:e.options,onChange:function(t){i(t),e.onClickCallBack(t)},value:c,style:{borderRadius:"1px solid black",padding:"5px",background:"red",color:"white"},className:"filters-class",placeholder:"Select a date range"})},F=a(15),B=(a(26),a(28)),T=(a(64),function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).handleClick=function(e){var t=e.target.name,a=e.target.value;""===a?n.setState({checkFlag:!0}):n.setState(Object(B.a)({},t,a))},n.handleSubmit=function(){Object.keys(n.state).map((function(e){""==n.state[e]&&n.setState({checkFlag:!0})})),n.state.checkFlag||console.log("Submitted"),n.props.onClickCallBack(n.state)},n.state={checkFlag:!1,businessName:"",businessSite:"",email:"",psw:"",options:[{value:"admin",label:"Admin"},{value:"team1",label:"Team 1"},{value:"team2",label:"Team 2"},{value:"team3",label:"Team 3"}]},n.handleClick=n.handleClick.bind(Object(x.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n}return Object(O.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)(F.a,{trigger:Object(n.jsx)("button",{className:"primary",id:"createRoles",children:"Create roles "}),modal:!0,nested:!0,children:function(t){return Object(n.jsxs)("div",{className:"create-roles",children:[Object(n.jsx)("div",{id:"text",children:"Tell us about yourself"}),Object(n.jsx)("form",{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"text",placeholder:"What is the name of your business?",required:!0,name:"businessName",onChange:e.handleClick,onFocus:e.handleClick}),Object(n.jsx)("label",{className:""===e.state.businessName&&e.state.checkFlag?"":"hidden",children:" Business name is required"}),Object(n.jsx)("input",{type:"text",placeholder:"Business website",required:!0,onChange:e.handleClick,name:"businessSite",onFocus:e.handleClick}),Object(n.jsx)("label",{className:""===e.state.businessSite&&e.state.checkFlag?"":"hidden",children:" Business website is required"}),Object(n.jsx)(b.a,{options:e.state.options,onChange:function(t){e.setState({ticketing:t.value})},value:e.state.ticketing,placeholder:"Select team",name:"options",className:"datalist"}),Object(n.jsx)("label",{className:""===e.state.ticketing&&e.state.checkFlag?"":"hidden",children:" Team name is required"}),Object(n.jsx)("input",{type:"text",placeholder:"Your email",name:"email",required:!0,onChange:e.handleClick,onFocus:e.handleClick}),Object(n.jsx)("label",{className:""===e.state.email&&e.state.checkFlag?"":"hidden",children:" Email is required"}),Object(n.jsx)("input",{type:"password",placeholder:"Password",name:"psw",required:!0,onChange:e.handleClick,onFocus:e.handleClick}),Object(n.jsx)("label",{className:""===e.state.psw&&e.state.checkFlag?"":"hidden",children:" Password is required"}),Object(n.jsxs)("span",{id:"terms",children:[Object(n.jsx)("input",{type:"checkbox",name:"terms"}),"I accept to the ",Object(n.jsx)("a",{href:"#",children:"Terms of Service "})]})]})}),Object(n.jsx)("button",{className:"primary",onClick:function(a){e.handleSubmit(a),t()},children:"Sign up"})]})}})}}]),a}(c.Component)),q=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={data:{},options:[{value:"nov2020",label:"11/2020 - 12/2020"},{value:"dec2020",label:"12/2020 - 01/2021"},{value:"jan2021",label:"01/2021-01/2021"}],ind:"nov2020",createRolesToggle:!1},n.getData=n.getData.bind(Object(x.a)(n)),n}return Object(O.a)(a,[{key:"getData",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("./data/data.json").then((function(e){t.setState({data:e.data.chartData[t.state.ind]})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"setRole",value:function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("successfully added role:",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{id:"container",children:[Object(n.jsxs)("div",{style:{padding:"10px",height:"50px"},children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:"primary",children:"Teams"}),Object(n.jsx)("button",{className:"secondary",children:"Self"})]}),Object(n.jsx)("div",{style:{float:"right"},children:Object(n.jsx)(T,{onClickCallBack:function(t){return e.setRole(t)}})})]}),Object(n.jsx)(w,{options:this.state.options,onClickCallBack:function(t){return e.setState({ind:t.value},(function(){return e.getData()}))}}),Object(n.jsxs)("div",{className:"chart-areas",children:[Object(n.jsx)("div",{className:"article",children:this.state.data.length>0&&Object(n.jsx)(y,{data:this.state.data,type:"area"})}),Object(n.jsx)("div",{className:"article",children:this.state.data.length>0&&Object(n.jsx)(y,{data:this.state.data,type:"bar"})})]})]})}}]),a}(c.Component);var D=function(){var e=Object(c.useState)("admin"),t=Object(u.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)({}),r=Object(u.a)(i,2),l=r[0],j=r[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("./data/data.json").then((function(e){j(e.data.roles)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.length>0?Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h,{onClickCallBack:function(e){return s(e.value)},roles:l}),Object(n.jsxs)("div",{className:"admin"===a?"":"hidden",children:[Object(n.jsx)(m,{})," "]}),Object(n.jsx)(q,{}),Object(n.jsx)(p,{})]}):Object(n.jsx)("div",{})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),M()}},[[65,1,2]]]);
//# sourceMappingURL=main.b4b6d79a.chunk.js.map