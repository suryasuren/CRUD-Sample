(this["webpackJsonpcrud-app"]=this["webpackJsonpcrud-app"]||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(9),c=s.n(i),r=(s(24),s(25),s(16)),d=s(17),l=s(19),o=s(18),j=(s(26),s(40)),h=s(41),u=s(42),b=s(49),x=s(43),O=s(44),g=s(45),m=s(46),f=s(47),y=s(48),v=s(3),p=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(r.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={users:[],id:0,index:0,name:"",designation:"",salary:"",newModal:!1,editModal:!1},e.addUsers=function(){var t=e.state,s=t.name,a=t.designation,n=t.salary;e.setState({users:e.state.users.concat({id:e.state.users.length+1,name:s,designation:a,salary:n})},(function(){e.setState({newModal:!1,name:"",designation:"",salary:""})}))},e.updateUsers=function(){var t=e.state,s=t.name,a=t.designation,n=t.salary,i=(t.id,t.index),c=e.state.users;c[i].name=s,c[i].designation=a,c[i].salary=n,e.setState({users:c,newModal:!1,name:"",designation:"",salary:""})},e}return Object(d.a)(s,[{key:"toggleNewModal",value:function(){this.setState({newModal:!this.state.newModal})}},{key:"toggleEditModal",value:function(){this.setState({editModal:!this.state.editModal})}},{key:"editBook",value:function(e,t,s,a,n){this.setState({id:e,name:t,designation:s,salary:a,index:n,newModal:!this.state.newModal})}},{key:"deleteBook",value:function(e){this.setState({users:this.state.users.filter((function(t,s){return s!==e}))})}},{key:"render",value:function(){var e=this;return console.log(this.state.users),Object(v.jsxs)("div",{class:"container-fluid",children:[Object(v.jsxs)("h5",{className:"my-3",children:[Object(v.jsx)("b",{children:"EMPLOYEE DETAILS"})," ",Object(v.jsx)("br",{})," ",Object(v.jsx)(j.a,{color:"primary",className:"mx-4 mt-4",onClick:this.toggleNewModal.bind(this),children:"Add User"})]}),Object(v.jsx)("div",{class:"row",children:Object(v.jsx)("div",{class:"col",children:Object(v.jsx)("ul",{children:Object(v.jsx)(h.a,{children:Object(v.jsx)(u.a,{xs:"1",sm:"2",md:"3",children:this.state.users.map((function(t,s){return Object(v.jsx)("li",{children:Object(v.jsx)("div",{class:"card",children:Object(v.jsxs)("div",{class:"card-body",children:[Object(v.jsxs)("h6",{class:"card-title",children:["Name : ",t.name," "]}),Object(v.jsxs)("h6",{class:"card-text",children:["UserName : ",t.designation," "]}),Object(v.jsxs)("h6",{class:"card-text",children:[" Salary : ",t.salary]}),Object(v.jsx)(j.a,{color:"success",size:"sm",className:"btnaling",onClick:e.editBook.bind(e,t.id,t.name,t.designation,t.salary,s),children:"Edit"}),Object(v.jsx)(j.a,{color:"danger",size:"sm",className:"btnaling",onClick:e.deleteBook.bind(e,s),children:"Delete"})]})})},s)}))})})})})}),Object(v.jsxs)(b.a,{isOpen:this.state.newModal,children:[Object(v.jsx)(x.a,{children:" Add a new User"}),Object(v.jsxs)(O.a,{children:[Object(v.jsxs)(g.a,{children:[Object(v.jsx)(m.a,{for:"name",children:"Name"}),Object(v.jsx)(f.a,{id:"name",value:this.state.name,onChange:function(t){e.setState({name:t.target.value})}})]}),Object(v.jsxs)(g.a,{children:[Object(v.jsx)(m.a,{for:"desingnation",children:"Desingnation"}),Object(v.jsx)(f.a,{id:"desingnation",value:this.state.designation,onChange:function(t){e.setState({designation:t.target.value})}})]}),Object(v.jsxs)(g.a,{children:[Object(v.jsx)(m.a,{for:"salary",children:"Salary"}),Object(v.jsx)(f.a,{id:"salary",value:this.state.salary,onChange:function(t){e.setState({salary:t.target.value})}})]})]}),Object(v.jsxs)(y.a,{children:[Object(v.jsx)(j.a,{color:"primary",onClick:0==this.state.id?this.addUsers:this.updateUsers,children:0==this.state.id?"Add User":"Update User"})," ",Object(v.jsx)(j.a,{color:"secondary",onClick:this.toggleNewModal.bind(this),children:"Cancel"})]})]})]})}}]),s}(a.Component);var M=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)("div",{class:"container-fluid",children:Object(v.jsx)(p,{})})})},k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,50)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};s(37);c.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root")),k()}},[[38,1,2]]]);
//# sourceMappingURL=main.1ef7cb75.chunk.js.map