(this["webpackJsonpemployee-dir"]=this["webpackJsonpemployee-dir"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),s=(a(22),a(12)),o=a(13),u=a(16),m=a(15);a(23);var i=function(e){return l.a.createElement("div",{className:"search"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"employee-search"},"Employee Search"),l.a.createElement("input",{value:e.search,onChange:e.handleInputChange,className:"form-control",placeholder:"Search by Age",id:"employee-search"}),l.a.createElement("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-success"},"Search")))};var h=function(e){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Picture"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Cell"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Age"))),l.a.createElement("tbody",null,e.results.map((function(e){return l.a.createElement("tr",{key:e.id.value},l.a.createElement("td",null,l.a.createElement("img",{src:e.picture.thumbnail,alt:e.name.first})),l.a.createElement("td",null,e.name.first," ",e.name.last),l.a.createElement("td",null,e.cell),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.dob.age))}))))},p=a(14),d=a.n(p),f=function(){return d.a.get("https://randomuser.me/api/?results=100&nat=us")},E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={search:"",employeeData:[],employeeResults:[]},e.handleFormSubmit=function(t){t.preventDefault();var a=null;e.state.search?(a=Number.isInteger(parseInt(e.state.search))?e.state.employeeData.filter((function(t){return t.dob.age===parseInt(e.state.search)})):e.state.employeeData.filter((function(t){return t.name.first.includes(e.state.search)||t.name.last.includes(e.state.search)})),e.setState({employeeData:a})):e.setState({employeeData:e.state.employeeResults})},e.handleInputChange=function(t){t.preventDefault(),e.setState({search:t.target.value})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){var a=t.data.results.sort((function(e,t){return e.name.last>t.name.last?1:e.name.last<t.name.last?-1:0}));e.setState({employeeResults:a}),e.setState({employeeData:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(i,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),l.a.createElement(h,{results:this.state.employeeData}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.f25469ec.chunk.js.map