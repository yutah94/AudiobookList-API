(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(e,t){e.exports.uriBase="https://audiobook-list.herokuapp.com/",e.exports.api="/api/v1"},34:function(e,t,a){e.exports=a.p+"static/media/jazz.a8ba4328.png"},35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(31),c=a.n(l),i=(a(40),a(7)),r=a(8),s=a(10),u=a(9),m=a(11),h=a(15),d=a(14),b=(a(41),a(2)),p=a(12),k=a.n(p),g=a(13),f=function(e){return n.a.createElement("tr",null,n.a.createElement("td",{className:e.audiobooks.completed?"completed":""},e.audiobooks.book_title),n.a.createElement("td",{className:e.audiobooks.completed?"completed":""},e.audiobooks.author),n.a.createElement("td",{className:e.audiobooks.completed?"completed":""},e.audiobooks.genre),n.a.createElement("td",null,n.a.createElement(h.b,{to:"/edit/"+e.audiobooks._id},"Edit")),n.a.createElement("td",null,n.a.createElement("button",{className:"remove-btn",variant:"danger",size:"sm",onClick:function(t){return e.deleteAudiobook(e.audiobooks._id)}},"\xd7")))},v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={audiobooks:[]},a.audiobookList=a.audiobookList.bind(Object(b.a)(a)),a.deleteAudiobook=a.deleteAudiobook.bind(Object(b.a)(a)),a.retrieveBooklist=a.retrieveBooklist.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"retrieveBooklist",value:function(){var e=this;k.a.get("".concat(g.uriBase,"/audiobooks/")).then((function(t){e.setState({audiobooks:t.data})})).catch((function(e){console.log(e)}))}},{key:"audiobookList",value:function(){var e=this;return this.state.audiobooks.map((function(t,a){return n.a.createElement(f,{audiobooks:t,key:a,deleteAudiobook:e.deleteAudiobook})}))}},{key:"deleteAudiobook",value:function(e){var t=this;k.a.delete("".concat(g.uriBase,"/audiobooks/").concat(e)).then((function(a){console.log("delete: ",a.data.deletedCount),t.setState((function(a){return{audiobooks:t.state.audiobooks.filter((function(t){return t._id!==e}))}}))})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.retrieveBooklist()}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h3",null,"Audiobook List"),n.a.createElement("table",{className:"table table-striped",style:{marginTop:20}},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Book Title"),n.a.createElement("th",null,"Author"),n.a.createElement("th",null,"Genre"),n.a.createElement("th",null,"Actions"),n.a.createElement("th",null,"Delete"))),n.a.createElement("tbody",null,this.audiobookList())))}}]),t}(o.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onChangeBookTitle=a.onChangeBookTitle.bind(Object(b.a)(a)),a.onChangeAuthor=a.onChangeAuthor.bind(Object(b.a)(a)),a.onChangeGenre=a.onChangeGenre.bind(Object(b.a)(a)),a.onChangeCompleted=a.onChangeCompleted.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.state={book_title:"",author:"",genre:"",completed:!1},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("".concat(g.uriBase,"/audiobooks/")+this.props.match.params.id).then((function(t){e.setState({book_title:t.data.book_title,author:t.data.author,genre:t.data.genre,completed:t.data.completed})})).catch((function(e){console.log(e)}))}},{key:"onChangeBookTitle",value:function(e){this.setState({book_title:e.target.value})}},{key:"onChangeAuthor",value:function(e){this.setState({author:e.target.value})}},{key:"onChangeGenre",value:function(e){this.setState({genre:e.target.value})}},{key:"onChangeCompleted",value:function(e){this.setState({completed:!this.state.completed})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={book_title:this.state.book_title,author:this.state.author,genre:this.state.genre,completed:this.state.completed};console.log(a),k.a.put("".concat(g.uriBase,"/audiobooks/").concat(this.props.match.params.id),a).then((function(e){console.log(e.data),t.props.history.push("/")})).catch((function(e){console.log(e.res)}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h3",null,"Edit Audiobook"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Book Title: "),n.a.createElement("input",{type:"text",className:"form-control",value:this.state.book_title,onChange:this.onChangeBookTitle})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Author: "),n.a.createElement("input",{type:"text",className:"form-control",value:this.state.author,onChange:this.onChangeAuthor})),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"genreOptions",id:"genreSelf-Help",value:"Self-Help",checked:"Self-Help"===this.state.genre,onChange:this.onChangeGenre}),n.a.createElement("label",{className:"form-check-label"},"Self-Help")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"genreOptions",id:"genreBiography",value:"Biography",checked:"Biography"===this.state.genre,onChange:this.onChangeGenre}),n.a.createElement("label",{className:"form-check-label"},"Biography")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"GenreOptions",id:"GenreReligious",value:"Religious",checked:"Religious"===this.state.genre,onChange:this.onChangeGenre}),n.a.createElement("label",{className:"form-check-label"},"Religious"))),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-input",id:"completedCheckbox",type:"checkbox",name:"completedCheckbox",onChange:this.onChangeCompleted,checked:this.state.completed,value:this.state.completed}),n.a.createElement("label",{className:"form-check-label",htmlFor:"completedCheckbox"},"Completed")),n.a.createElement("br",null),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"submit",value:"Update AudiobookList",className:"btn btn-primary"}))))}}]),t}(o.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onChangeBookTitle=a.onChangeBookTitle.bind(Object(b.a)(a)),a.onChangeAuthor=a.onChangeAuthor.bind(Object(b.a)(a)),a.onChangeGenre=a.onChangeGenre.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.state={book_title:"",author:"",genre:"",completed:!1},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"onChangeBookTitle",value:function(e){this.setState({book_title:e.target.value})}},{key:"onChangeAuthor",value:function(e){this.setState({author:e.target.value})}},{key:"onChangeGenre",value:function(e){this.setState({genre:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("Form submitted: "),console.log("Book Title: ".concat(this.state.book_title)),console.log("Author: ".concat(this.state.author)),console.log("Genre: ".concat(this.state.genre)),console.log("Completed: ".concat(this.state.completed));var t={book_title:this.state.book_title,author:this.state.author,genre:this.state.genre,completed:this.state.completed};k.a.post("".concat(g.uriBase,"/audiobooks/add"),t).then((function(e){return console.log(e.data)})),this.setState({book_title:"",author:"",genre:"",completed:!1})}},{key:"render",value:function(){return n.a.createElement("div",{style:{marginTop:20},className:"container"},n.a.createElement("h3",null,"Add New Audiobook"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Book Title: "),n.a.createElement("input",{type:"text",className:"form-control",value:this.state.book_title,onChange:this.onChangeBookTitle})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Author: "),n.a.createElement("input",{type:"text",className:"form-control",value:this.state.author,onChange:this.onChangeAuthor})),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"genreOptions",id:"genreSelf-Help",value:"Self-Help",checked:"Self-Help"===this.state.genre,onChange:this.onChangeGenre}),n.a.createElement("label",{className:"form-check-label"},"Self-Help")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"genreOptions",id:"genreBiography",value:"Biography",checked:"Biography"===this.state.genre,onChange:this.onChangeGenre}),n.a.createElement("label",{className:"form-check-label"},"Biography")),n.a.createElement("div",{className:"form-check form-check-inline"},n.a.createElement("input",{className:"form-check-input",type:"radio",name:"genreOptions",id:"genreReligious",value:"Religious",checked:"Religious"===this.state.genre,onChange:this.onChangeGenre}),n.a.createElement("label",{className:"form-check-label"},"Religious"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"submit",value:"Add Audiobook",className:"btn btn-primary"}))))}}]),t}(o.Component),N=a(34),y=a.n(N),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement(h.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary container"},n.a.createElement("a",{className:"navbar-brand",href:"https://github.com/yutah94"},n.a.createElement("img",{src:y.a,width:"30",height:"30",alt:"Yuta's Github"})),n.a.createElement(h.b,{to:"/",className:"navbar-brand"},n.a.createElement("h1",null,"Yuta's Audiobook List App")),n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"navbar-item"},n.a.createElement(h.b,{to:"/",className:"nav-link"},"Audiobook List")),n.a.createElement("li",{className:"navbar-item"},n.a.createElement(h.b,{to:"/create",className:"nav-link"},"Add Audiobook")))),n.a.createElement(d.a,{path:"/",exact:!0,component:v}),n.a.createElement(d.a,{path:"/edit/:id",component:E}),n.a.createElement(d.a,{path:"/create",component:C})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.4e35576b.chunk.js.map