(this.webpackJsonpcity_bikes_layout=this.webpackJsonpcity_bikes_layout||[]).push([[0],{13:function(t,e,n){t.exports={stationsBox:"Stations_stationsBox__3WKSc",stationsBox__info:"Stations_stationsBox__info__113Lv",stationsBox__list:"Stations_stationsBox__list__1b_e1",stationsBox__listItem:"Stations_stationsBox__listItem__1njcw",stationsBox__emptyList:"Stations_stationsBox__emptyList__ZFHae",bold:"Stations_bold__23_Me",heart:"Stations_heart__1t1Zn",heart_active:"Stations_heart_active__1oCe1"}},22:function(t,e,n){t.exports={myList:"Companies_myList__1feai",myList__list:"Companies_myList__list__1nfvc",myList__item:"Companies_myList__item__2MKRi",myList__active:"Companies_myList__active__3nfdB"}},40:function(t,e,n){t.exports={position:"MySpinner_position__2JLZS"}},45:function(t,e,n){t.exports={mainPage:"MainPage_mainPage__3AdWn"}},54:function(t,e,n){t.exports=n(71)},59:function(t,e,n){},60:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var a,r=n(0),o=n.n(r),c=n(19),i=n.n(c),s=(n(59),n(60),n(25)),u=n(28),l=n(73),m=n(74),d=n(75),p=n(14);!function(t){t.FETCH_REQUEST="@@companies/FETCH_REQUEST",t.FETCH_SUCCESS="@@companies/FETCH_SUCCESS",t.FETCH_ERROR="@@companies/FETCH_ERROR"}(a||(a={}));var _,E=function(t){return Object(p.action)(a.FETCH_ERROR,t)},f=n(22),v=n.n(f),b=n(76),y=n(77),O=n(79),x=function(t){var e=t.companies,n=t.fetchStations,a=t.setCurrentNetwork,c=Object(r.useState)({companyIndex:0,cityIndex:0}),i=Object(u.a)(c,2),s=i[0],l=i[1];Object(r.useEffect)((function(){e[0]&&a(e[0].name)}),[]);var m=function(t,e,r,o){n(r),function(t,e){l({companyIndex:t,cityIndex:e})}(t,e),a(o)};return o.a.createElement("div",null,o.a.createElement(b.a,{defaultActiveKey:"0"},e.map((function(t,e){return o.a.createElement(y.a,{key:"company_"+e},o.a.createElement(y.a.Header,null,o.a.createElement(b.a.Toggle,{as:O.a,variant:"link",eventKey:e.toString()},t.name)),o.a.createElement(b.a.Collapse,{eventKey:e.toString()},o.a.createElement(y.a.Body,{className:v.a.myList},o.a.createElement("ul",{className:v.a.myList__list},t.cities.map((function(n,a){return o.a.createElement("li",{key:n.cityId+a,className:"".concat(v.a.myList__item," ").concat((r={companyIndex:e,cityIndex:a},c=s,r.companyIndex===c.companyIndex&&r.cityIndex===c.cityIndex?v.a.myList__active:"")),onClick:function(){return m(e,a,n.cityId,t.name)}},n.city,", ",n.country);var r,c}))))))}))))},S=n(13),j=n.n(S),h=n(78),C=n(40),k=n.n(C),g=n(41),w=function(){return o.a.createElement(g.a,{className:k.a.position,animation:"border"})},T=n(51),R=n(18),F=function(t,e){return!!t.find((function(t){return t.name===e.name&&t.stationId===e.stationId}))},I=function(t,e){return F(t,e)?Object(R.a)(t.filter((function(t){return t.name!==e.name&&t.stationId!==e.stationId}))):[].concat(Object(R.a)(t),[e])},H=function(t){var e=t.stationsLoading,n=t.stations,a=t.stationsError,r=t.currentNetwork,c=t.stationsFavorite,i=t.changeFavorite;return o.a.createElement("div",{className:"".concat(j.a.stationsBox)},e?o.a.createElement(w,null):a?o.a.createElement("div",null,a):o.a.createElement("div",null,o.a.createElement("div",{className:j.a.stationsBox__info},o.a.createElement("div",null,o.a.createElement("span",{className:j.a.bold},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0435\u0442\u0438:")," ",r),o.a.createElement("div",null,o.a.createElement("span",{className:j.a.bold},"\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0430\u043d\u0446\u0438\u0438 \u0432 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0435\u0442\u0438:")," ",n.length)),n.length>0?o.a.createElement("div",{className:j.a.stationsBox__list},o.a.createElement(h.a,null,n.map((function(t,e){return o.a.createElement(h.a.Item,{key:e.toString()+t.id},o.a.createElement("div",{className:j.a.stationsBox__listItem},t.name,o.a.createElement("span",{className:"".concat(j.a.heart," ").concat((n=t.name,a=t.stationId,F(c,{name:n,stationId:a})?j.a.heart_active:""))},o.a.createElement(T.a,{size:"1.3em",onClick:function(){return i({name:t.name,stationId:t.stationId})}}))));var n,a})))):o.a.createElement("div",{className:j.a.stationsBox__emptyList},o.a.createElement("h2",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u0430\u043d\u0446\u0438\u0439 \u043f\u0443\u0441\u0442"))))};!function(t){t.FETCH_REQUEST="@@stations/FETCH_REQUEST",t.FETCH_SUCCESS="@@stations/FETCH_SUCCESS",t.FETCH_ERROR="@@stations/FETCH_ERROR",t.CHANGE_FAVORITES="@@stations/CHANGE_FAVORITES"}(_||(_={}));var L=function(t){return Object(p.action)(_.FETCH_ERROR,t)},N=n(45),B=n.n(N),U={fetchCompanies:function(){return Object(p.action)(a.FETCH_REQUEST)},fetchStations:function(t){return Object(p.action)(_.FETCH_REQUEST,{companyId:t})},changeFavorite:function(t){return Object(p.action)(_.CHANGE_FAVORITES,t)}},A=Object(s.b)((function(t){var e=t.companies,n=t.stationsPersist;return{companiesLoading:e.loading,companiesData:e.data,companiesError:e.errors,stationsLoading:n.loading,stationsData:n.data,stationsFavorite:n.favorites,stationsError:n.errors}}),U)((function(t){var e=t.companiesLoading,n=t.companiesData,a=t.companiesError,c=t.stationsLoading,i=t.stationsData,s=t.stationsFavorite,p=t.stationsError,_=t.fetchCompanies,E=t.fetchStations,f=t.changeFavorite,v=Object(r.useState)(""),b=Object(u.a)(v,2),y=b[0],O=b[1];return Object(r.useEffect)((function(){_()}),[]),Object(r.useEffect)((function(){n[0]&&E(n[0].cities[0].cityId)}),[]),o.a.createElement("div",{className:B.a.mainPage},e?o.a.createElement(w,null):a||o.a.createElement(l.a,null,o.a.createElement(m.a,null,o.a.createElement(d.a,{sm:12,md:6,lg:6},o.a.createElement(x,{fetchStations:E,companies:n,setCurrentNetwork:O})),o.a.createElement(d.a,{sm:12,md:6,lg:6},o.a.createElement(H,{stationsLoading:c,stations:i,stationsError:p,currentNetwork:y,stationsFavorite:s,changeFavorite:f})))))})),Q=n(46),P=function(t){var e=t.store,n=t.persistor;return o.a.createElement(s.a,{store:e},o.a.createElement(Q.a,{loading:o.a.createElement(w,null),persistor:n},o.a.createElement("div",{className:"App"},o.a.createElement(A,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=n(10),K=n(52),M=n(9),W=n.n(M),G=n(15),V={data:[],loading:!1,errors:void 0},J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.FETCH_REQUEST:return Object(G.a)({},t,{loading:!0});case a.FETCH_SUCCESS:return Object(G.a)({},t,{loading:!1,data:Object(R.a)(e.payload)});case a.FETCH_ERROR:return Object(G.a)({},t,{loading:!1,errors:e.payload});default:return t}},Z=n(7),q=n(32);function z(){return $.apply(this,arguments)}function $(){return($=Object(q.a)(W.a.mark((function t(){var e;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.citybik.es/v2/networks",{method:"get",headers:{Accept:"application/json"}});case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function X(t){return Y.apply(this,arguments)}function Y(){return(Y=Object(q.a)(W.a.mark((function t(e){var n;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.citybik.es/v2/networks/".concat(e),{method:"get",headers:{Accept:"application/json"}});case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var tt=n(47),et=n(48),nt=function(t){return tt.uniq(t.networks.map((function(t){var e;return null===(e=t.company)||void 0===e?void 0:e.toString()}))).map((function(e){return t.networks.filter((function(t){var n;return e===(null===(n=t.company)||void 0===n?void 0:n.toString())}))})).map((function(t,e){var n,a=null===(n=t[0].company)||void 0===n?void 0:n.toString(),r=t.map((function(t){return{city:t.location.city,cityId:t.id,country:Object(et.getName)(t.location.country)||t.location.country}}));return{id:e,name:(null===a||void 0===a?void 0:a.length)>0?a:"Anonymous network",cities:r}}))},at=W.a.mark(ct),rt=W.a.mark(it),ot=W.a.mark(st);function ct(){var t,e;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Z.b)(z);case 3:if(!(t=n.sent).error){n.next=9;break}return n.next=7,Object(Z.d)(E(t.error));case 7:n.next=14;break;case 9:return n.next=11,Object(Z.b)(nt,t);case 11:return e=n.sent,n.next=14,Object(Z.d)((r=e,Object(p.action)(a.FETCH_SUCCESS,r)));case 14:n.next=25;break;case 16:if(n.prev=16,n.t0=n.catch(0),!(n.t0 instanceof Error&&n.t0.stack)){n.next=23;break}return n.next=21,Object(Z.d)(E(n.t0.stack));case 21:n.next=25;break;case 23:return n.next=25,Object(Z.d)(E("An unknown error occurred."));case 25:case"end":return n.stop()}var r}),at,null,[[0,16]])}function it(){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Z.e)(a.FETCH_REQUEST,ct);case 2:case"end":return t.stop()}}),rt)}function st(){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Z.a)([Object(Z.c)(it)]);case 2:case"end":return t.stop()}}),ot)}var ut=st,lt=function(t){return t.network.stations?t.network.stations.map((function(t,e){return{id:e,name:t.name,stationId:t.id,emptySlots:t.empty_slots,freeBikes:t.free_bikes}})):[]},mt=W.a.mark(_t),dt=W.a.mark(Et),pt=W.a.mark(ft);function _t(t){var e,n,a;return W.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.payload.companyId,r.prev=1,r.next=4,Object(Z.b)(X,e);case 4:if(!(n=r.sent).error){r.next=10;break}return r.next=8,Object(Z.d)(L(n.error));case 8:r.next=15;break;case 10:return r.next=12,Object(Z.b)(lt,n);case 12:return a=r.sent,r.next=15,Object(Z.d)((o=a,Object(p.action)(_.FETCH_SUCCESS,o)));case 15:r.next=26;break;case 17:if(r.prev=17,r.t0=r.catch(1),!(r.t0 instanceof Error&&r.t0.stack)){r.next=24;break}return r.next=22,Object(Z.d)(L(r.t0.stack));case 22:r.next=26;break;case 24:return r.next=26,Object(Z.d)(L("An unknown error occured."));case 26:case"end":return r.stop()}var o}),mt,null,[[1,17]])}function Et(){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Z.e)(_.FETCH_REQUEST,_t);case 2:case"end":return t.stop()}}),dt)}function ft(){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Z.a)([Object(Z.c)(Et)]);case 2:case"end":return t.stop()}}),pt)}var vt=ft,bt={loading:!1,data:[],favorites:[],errors:void 0},yt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _.FETCH_REQUEST:return Object(G.a)({},t,{loading:!0});case _.FETCH_SUCCESS:return Object(G.a)({},t,{loading:!1,data:Object(R.a)(e.payload)});case _.FETCH_ERROR:return Object(G.a)({},t,{loading:!1,errors:e.payload});case _.CHANGE_FAVORITES:return Object(G.a)({},t,{favorites:I(t.favorites,e.payload)});default:return t}},Ot=n(26),xt=n(49),St=n.n(xt),jt=W.a.mark(kt),ht={key:"stationsStore",storage:St.a,whitelist:["favorites"]},Ct=Object(D.combineReducers)({companies:J,stationsPersist:Object(Ot.a)(ht,yt)});function kt(){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Z.a)([Object(Z.c)(ut),Object(Z.c)(vt)]);case 2:case"end":return t.stop()}}),jt)}var gt=n(50);var wt=function(){var t=Object(gt.composeWithDevTools)({}),e=Object(K.a)(),n=Object(D.createStore)(Ct,t(Object(D.applyMiddleware)(e)));return e.run(kt),{store:n,persistor:Object(Ot.b)(n)}}(),Tt=wt.store,Rt=wt.persistor;i.a.render(o.a.createElement(P,{store:Tt,persistor:Rt}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.acc86aeb.chunk.js.map