(this.webpackJsonpnewstar=this.webpackJsonpnewstar||[]).push([[0],{183:function(e,t,a){e.exports=a(310)},309:function(e,t,a){},310:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(39),s=a.n(l),i=a(153),c=a(74),o=a(75),u=a(83),m=a(76),h=a(84),p=a(320),d=a(322),f=a(321),g=a(311),E=a(33),S=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),fetch("https://swapi.co/api/people/?format=json&search=".concat(e.state.username)).then((function(e){return e.json()})).then((function(t){1===t.count&&e.state.password===t.results[0].birth_year?(localStorage.clear(),localStorage.setItem("username",t.results[0].name),e.setState({loginState:!0})):alert("Invalid Credentials, Please check the details again")}))},e.state={username:"",password:"",loginState:!1},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return!0===this.state.loginState?r.a.createElement(E.a,{to:"/Search"}):r.a.createElement("div",{className:"bg height1001"},r.a.createElement(p.a,{className:"height100 logincontainer"},r.a.createElement("img",{height:"380px",width:"380px",alt:"superhero",src:"https://media.comicbook.com/2019/10/star-wars-the-legends-of-skywalker-manga-viz-media-1190443-1280x0.jpeg"}),r.a.createElement(d.a,{onSubmit:this.onSubmit},r.a.createElement(d.a.Field,{control:f.a,type:"text",placeholder:"Username",value:this.state.username,name:"username",onChange:this.onChange,required:!0}),r.a.createElement(d.a.Field,{control:f.a,type:"password",placeholder:"Password",value:this.state.password,name:"password",onChange:this.onChange,required:!0}),r.a.createElement("br",null),r.a.createElement(g.a,{fluid:!0,floated:"center",color:"red",type:"submit"},"Submit"))))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).searchChange=function(t){"Luke Skywalker"!==e.state.username?e.state.searchAttempts<=15?e.setState({searchAttempts:e.state.searchAttempts+1,itemDetails:e.state.dataDetails.filter((function(e){return e.name.toLowerCase().includes(t.target.value.toLowerCase())}))}):alert(e.state.error):e.setState({itemDetails:e.state.dataDetails.filter((function(e){return e.name.toLowerCase().includes(t.target.value.toLowerCase())}))})},e.state={loginState:!0,itemDetails:[],searchAttempts:0,error:"Maximum Search Attempts Reached. Try After 1 Minute",username:localStorage.getItem("username")},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;null==this.state.username&&this.setState({loginState:!1}),setInterval((function(){e.setState({searchAttempts:0})}),6e4),fetch("https://swapi.co/api/planets/").then((function(e){return e.json()})).then((function(t){return e.setState({itemDetails:t.results,dataDetails:t.results})}))}},{key:"logout",value:function(){localStorage.clear(),this.setState({loginState:!1}),this.render()}},{key:"render",value:function(){var e=this;if(!1===this.state.loginState)return r.a.createElement(E.a,{to:"/"});return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"searchBar"},r.a.createElement(f.a,{fluid:!0,icon:"search",size:"big",placeholder:"Search...",onChange:this.searchChange})),r.a.createElement("div",{className:"logout"},r.a.createElement("h3",null,"Hi ",this.state.username," "),r.a.createElement("br",null),r.a.createElement(g.a,{color:"red",onClick:function(){return e.logout()}},"Logout"))),r.a.createElement("div",{className:"resultdiv"},r.a.createElement((function(){return e.state.itemDetails.map((function(t){return r.a.createElement("div",{onClick:function(){return e.newClick(t.name)}},r.a.createElement("li",{className:"results__items"},r.a.createElement("h3",{className:"results__title"},t.name),r.a.createElement("ul",{className:"results__info",style:{fontSize:2*t.population.length}},r.a.createElement("li",null,"Terrain :  ",r.a.createElement("span",null,t.terrain)," "),r.a.createElement("li",null,"Gravity :  ",r.a.createElement("span",null,t.gravity)," "),r.a.createElement("li",null,"Rotation Period :  ",r.a.createElement("span",null,t.rotation_period)," "),r.a.createElement("li",null,"Surface Water :  ",r.a.createElement("span",null,t.surface_water)," "),r.a.createElement("li",null,"Orbital Period :  ",r.a.createElement("span",null,t.orbital_period)," "),r.a.createElement("li",null,"Population :  ",r.a.createElement("span",null,t.population)," "))))}))}),null)))}}]),t}(r.a.Component),b=a(73);var w=function(){return r.a.createElement(b.a,null,r.a.createElement(E.b,{exact:!0,path:"/",component:S}),r.a.createElement(E.b,{exact:!0,path:"/Search",component:v}))};a(309);s.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[183,1,2]]]);
//# sourceMappingURL=main.fd0aeea6.chunk.js.map