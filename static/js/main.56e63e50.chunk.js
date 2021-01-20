(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},2:function(e){e.exports=JSON.parse('{"backgroundType":"gradient","plainBackgroundMode":"daylight","devIntro":"Muhammad Khizar Hayyat","devDesc":"Computer Engineer | Programmer | Web Developer ","gradientColors":"#EE7752, #E73C7E, #23A6D5, #23D5AB","icons":[{"id":0,"image":"fa-github","url":"https://github.com/khizarkhizar/","style":"socialicons"},{"id":1,"image":"fa-facebook","url":"https://www.facebook.com/rana.khizar.3766","style":"socialicons"},{"id":2,"image":"fa-instagram","url":"https://www.instagram.com/ranakhizar786/","style":"socialicons"},{"id":3,"image":"fa-linkedin","url":"https://www.linkedin.com/in/muhammad-khizar-477310150/","style":"socialicons"}],"instaLink":"https://www.instagram.com/","instaUsername":"ranakhizar786","instaQuerry":"/?__a=1","aboutDev":"A passionate Engineer who is looking for decent development React related job in a decent company. I have the skills in web-delelopment, and currently working on React. I have also experience in BackEnd. ","gitHubLink":"https://api.github.com/users/","gitHubUsername":"khizarkhizar","gitHubQuerry":"/repos?sort=updated&direction=desc"}')},24:function(e,t,a){},25:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),i=(a(24),a(18)),s=a(3),l=a(4),u=a(6),d=a(5),m=a(17),h=a.n(m),b=(a(25),a(2)),f=(a(26),a(7)),p=a.n(f),v=(a(45),a(15),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){window.addEventListener("scroll",n.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",n.handleScroll)},n.handleScroll=function(e){},n.toggleHover=function(e){var t=Object(i.a)(n.state.hoverstatus);"enter"===e.event?(t[e.icon.id]="socialiconshover",n.setState({hoverstatus:t}),e.icon.id):(t[e.icon.id]="socialicons",n.setState({hoverstatus:t}),e.icon.id)},n.state={backgroundType:b.backgroundType,devInfo:b.devIntro,devDesc:b.devDesc,hoverstatus:["socialicons","socialicons","socialicons","socialicons"]},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=b.icons;return r.a.createElement("div",null,r.a.createElement("div",{id:"divmainbody",className:"jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{className:" container container-fluid text-center "},r.a.createElement("h1",{className:"display-1",onScroll:this.handleScroll},this.state.devInfo),r.a.createElement(h.a,{className:"lead"}," ",this.state.devDesc),r.a.createElement("div",{className:" p-5"},t.map((function(t){return r.a.createElement("a",{key:t.id,target:"_blank",rel:"noopener noreferrer",href:"".concat(t.url)},r.a.createElement("i",{className:"fab ".concat(t.image,"  fa-3x ").concat(e.state.hoverstatus[t.id]),onMouseEnter:function(){return e.toggleHover({icon:t,event:"enter"})},onMouseLeave:function(){return e.toggleHover({icon:t,event:"leave"})}}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#divaboutme",role:"button"},"More about me"))))}}]),a}(n.Component)),g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.handleRequest()},n.handleRequest=function(e){p.a.get(b.instaLink+b.instaUsername+b.instaQuerry).then((function(e){n.setState({instaProfilePic:e.data.graphql.user.profile_pic_url_hd})})).catch((function(e){console.log(e)})).finally((function(){}))},n.state={heading:"About me",aboutDev:b.aboutDev,instaProfilePic:"bad request"},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"divaboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:" container container-fluid p-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:" col-5 d-none d-lg-block align-self-center"},r.a.createElement("img",{className:" border border-secondary rounded-circle",src:this.state.instaProfilePic})),r.a.createElement("div",{className:" col-lg-7"},r.a.createElement("h1",{className:"display-4 mb-5 text-center"},this.state.heading),r.a.createElement("p",{className:" lead text-center"},this.state.aboutDev)))))}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.handleRequest()},n.handleRequest=function(e){p.a.get(b.gitHubLink+b.gitHubUsername+b.gitHubQuerry).then((function(e){n.setState({projectsArray:e.data.slice(0,4)})})).catch((function(e){console.log(e)})).finally((function(){}))},n.state={heading:"Recent Projects",projectsArray:[]},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"divproject",className:"jumbotron jumbotron-fluid bg-transparent m-0"},r.a.createElement("div",{className:" container container-fluid p-5"},r.a.createElement("h1",{className:"display-4 pb-5"},this.state.heading),r.a.createElement("div",{className:" row"},this.state.projectsArray.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,value:e})})))))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.handleUpdatetime()},n.handleUpdatetime=function(){var e=new Date(n.state.value.pushed_at),t=(new Date).getTime()-e.getTime(),a=Math.trunc(t/1e3/60/60);if(a<24)n.setState({updated_at:a.toString()+" hours ago"});else{var r=e.getDate(),c=e.getMonth(),o=e.getFullYear();n.setState({updated_at:"on "+r+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][c]+" "+o})}},n.state={value:n.props.value,updated_at:"0 mints",stargazers_count:n.props.value.stargazers_count,download_url:n.props.value.svn_url+"/archive/master.zip",repo_url:n.props.value.svn_url},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.state.value.name," "),r.a.createElement("p",{className:"card-text"},this.state.value.description," "),r.a.createElement("a",{href:this.state.download_url,className:" btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:this.state.repo_url,target:" _blank",className:" btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"),r.a.createElement("hr",null),r.a.createElement(k,{value:this.state.value.languages_url}),r.a.createElement("p",{className:"card-text"},r.a.createElement("a",{href:"",className:" text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},this.state.stargazers_count)),r.a.createElement("small",{className:"text-muted"},"Updated ",this.state.updated_at)))))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e.componentDidMount=function(){e.handleRequest()},e.handleRequest=function(){p.a.get(e.props.value).then((function(t){e.setState({data:t.data})})).catch((function(e){console.log(e)})).finally((function(){}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=[],a=0;for(var n in this.state.data)t.push(n),a+=this.state.data[n];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",t.map((function(t){return r.a.createElement("a",{key:t,className:"badge badge-light card-link"},t,":"," ",Math.trunc(e.state.data[t]/a*1e3)/10," ","%")})))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={bgStyle:{backgroundColor:"#f5f5f5"}},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{style:this.state.bgStyle,className:" mt-auto py-3 text-center"},r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:" badge badge-dark",target:"_blank",href:"https://github.com/khizarkhizar"},"Muhammad Khizar Hayyat")," ")}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(g,null),r.a.createElement(E,null),r.a.createElement(j,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.56e63e50.chunk.js.map