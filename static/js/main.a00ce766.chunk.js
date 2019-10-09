(window.webpackJsonpdnd=window.webpackJsonpdnd||[]).push([[0],{104:function(t,n,e){},105:function(t,n,e){"use strict";e.r(n);var a,r=e(0),o=e.n(r),i=e(24),c=e.n(i),l=e(14),s=e(6),u=e(47),d=e(48),p=e(5);!function(t){t.setScrumData="ScrumDataAction/setScrumData",t.setScrumDataStatus="ScrumDataAction/setScrumDataStatus"}(a||(a={}));var b="initial",f="success",m="error",g="fetching",h="updating";function k(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function v(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?k(e,!0).forEach((function(n){Object(p.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):k(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var O={dataStatus:b,data:{tasks:{},columns:{},columnOrder:[]}},y=Object(s.combineReducers)({scrumDataReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.setScrumData:var e=n.payload;return v({},t,{data:e});case a.setScrumDataStatus:var r=n.payload;return v({},t,{dataStatus:r});default:return t}}}),j=Object(s.createStore)(y,Object(u.composeWithDevTools)(Object(s.applyMiddleware)(d.a))),D=(e(67),e(27)),C=e(9),x=e(10),w=e(12),T=e(11),E=e(2),S=e(13),P=e(3),I=e(4),A=e(15);function B(){var t=Object(P.a)(["\n    width: 70%;\n    text-align: left;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n"]);return B=function(){return t},t}function U(){var t=Object(P.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    border: 1px solid lightgray;\n    padding: 8px;\n    margin-bottom: 8px;\n    border-radius: 4px;\n    background-color: ",";\n\n    :last-child {\n        margin-bottom: 0;\n    }\n"]);return U=function(){return t},t}var R=I.b.div(U(),(function(t){return t.isDragging?"lightgreen":"white"})),Y=I.b.span(B()),X=function(t){function n(t){var e;return Object(C.a)(this,n),(e=Object(w.a)(this,Object(T.a)(n).call(this,t))).onDeleteTaskClick=e.onDeleteTaskClick.bind(Object(E.a)(e)),e}return Object(S.a)(n,t),Object(x.a)(n,[{key:"onDeleteTaskClick",value:function(){this.props.onDeleteTaskClick(this.props.task.id)}},{key:"render",value:function(){var t=this,n=this.props,e=n.task,a=n.index;return o.a.createElement(A.b,{draggableId:e.id,index:a},(function(n,a){return o.a.createElement(R,Object.assign({},n.draggableProps,n.dragHandleProps,{ref:n.innerRef,isDragging:a.isDragging}),o.a.createElement(Y,null,e.content),o.a.createElement(at,{type:"button",onClick:t.onDeleteTaskClick}))}))}}]),n}(o.a.PureComponent);function M(){var t=Object(P.a)(["\n    padding: 5px;\n    border: 1px solid lightgray;\n    border-radius: 4px;\n\n    :disabled {\n        opacity: 0.7;\n    }\n"]);return M=function(){return t},t}function W(){var t=Object(P.a)(["\n    width: 70%;\n    padding: 5px;\n    border: 1px solid lightgray;\n    border-radius: 4px;\n"]);return W=function(){return t},t}function q(){var t=Object(P.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    padding: 8px;\n"]);return q=function(){return t},t}var z=I.b.div(q()),H=I.b.input(W()),J=I.b.button(M()),N=function(t){function n(t){var e;return Object(C.a)(this,n),(e=Object(w.a)(this,Object(T.a)(n).call(this,t))).state={taskContent:""},e.onTaskChange=e.onTaskChange.bind(Object(E.a)(e)),e.onButtonClick=e.onButtonClick.bind(Object(E.a)(e)),e}return Object(S.a)(n,t),Object(x.a)(n,[{key:"onTaskChange",value:function(t){var n=t.target.value;this.setState({taskContent:n})}},{key:"onButtonClick",value:function(){var t=this.state.taskContent;if(t){var n=this.props,e=n.columnId;(0,n.onAddTaskClick)(e,t),this.setState({taskContent:""})}}},{key:"render",value:function(){var t=this.state.taskContent;return o.a.createElement(z,null,o.a.createElement(H,{value:t,onChange:this.onTaskChange}),o.a.createElement(J,{onClick:this.onButtonClick,disabled:!Boolean(t)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),n}(o.a.PureComponent);function $(){var t=Object(P.a)(["\n    position: relative;\n    width: 22px;\n    height: 22px;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    background-color: transparent;\n\n    ::before {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%) rotate(45deg);\n        width: 3px;\n        height: 15px;\n        background-color: lightgray;\n        transition: 0.3s;\n    }\n\n    ::after {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%) rotate(-45deg);\n        width: 3px;\n        height: 15px;\n        background-color: lightgray;\n        transition: 0.3s;\n    }\n\n    :hover::after {\n        background-color: lightcoral\n    };\n\n    :hover::before {\n        background-color: lightcoral;\n    }\n\n    :disabled::after {\n        opacity: 0.5;\n    }\n\n    :disabled::before {\n        opacity: 0.5;\n    }\n\n    :disabled:hover::after {\n        opacity: 0.5;\n        background-color: lightgray;\n    }\n\n    :disabled:hover::before{\n        opacity: 0.5;\n        background-color: lightgray;\n    }\n"]);return $=function(){return t},t}function F(){var t=Object(P.a)(["\n    flex-shrink: 0;\n    max-width: 75%;\n    width: 75%;\n    height: 22px;\n    margin: 0 auto 0 0;\n    border: 0;\n    padding: 0;\n    font-size: 16px;\n    line-height: 20px;\n    text-align: left;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n\n    :focused {\n        text-overflow: clip;\n        overflow: visible;\n    }\n"]);return F=function(){return t},t}function G(){var t=Object(P.a)(["\n    display: flex;\n    flex-direction: row;\n    padding: 16px 8px 8px;\n    margin-bottom: 10px;\n"]);return G=function(){return t},t}function K(){var t=Object(P.a)(["\n    max-height: calc(100% - 22px - 10px);\n    flex: 1 1 100%;\n    padding: 8px;\n    transition: background-color 0.3s ease;\n    background-color: ",";\n    overflow-y: auto;\n"]);return K=function(){return t},t}function L(){var t=Object(P.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 250px;\n    max-height: 100%;\n    margin: 8px;\n    border: 1px solid lightgray;\n    border-radius: 4px;\n    background-color: white;\n    // opacity: 0;\n    // animation: ",";\n"]);return L=function(){return t},t}function Q(){var t=Object(P.a)(["\n        "," 0.2s linear ","s\n    "]);return Q=function(){return t},t}function V(){var t=Object(P.a)(["\n    0% {\n        opacity: 0;\n        transform: translateY(-50px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0px);\n    }\n"]);return V=function(){return t},t}var Z=Object(I.c)(V()),_=I.b.div(L(),(function(t){return Object(I.a)(Q(),Z,.1*t.index)})),tt=I.b.div(K(),(function(t){return t.isDraggingOver?"skyblue":"inherit"})),nt=I.b.div(G()),et=I.b.input(F()),at=I.b.button($()),rt=function(t){function n(t){var e;return Object(C.a)(this,n),(e=Object(w.a)(this,Object(T.a)(n).call(this,t))).state={columnTitle:""},e.onDeleteColumnClick=e.onDeleteColumnClick.bind(Object(E.a)(e)),e.onDeleteTaskClick=e.onDeleteTaskClick.bind(Object(E.a)(e)),e.onTitleChange=e.onTitleChange.bind(Object(E.a)(e)),e.onTitleBlur=e.onTitleBlur.bind(Object(E.a)(e)),e}return Object(S.a)(n,t),Object(x.a)(n,[{key:"componentDidMount",value:function(){this.setState({columnTitle:this.props.column.title})}},{key:"onDeleteColumnClick",value:function(){this.props.onDeleteColumnClick(this.props.column.id)}},{key:"onDeleteTaskClick",value:function(t){var n=this.props.column.id;this.props.onDeleteTaskClick(t,n)}},{key:"onTitleChange",value:function(t){var n=t.target.value;this.setState({columnTitle:n})}},{key:"onTitleBlur",value:function(){var t=this.props,n=t.column,e=t.onTitleUpdate,a=this.state.columnTitle;a!==n.title&&(a?e(n.id,a):this.setState({columnTitle:n.title}))}},{key:"render",value:function(){var t=this,n=this.props,e=n.column,a=n.tasks,r=n.index,i=n.onAddTaskClick,c=Boolean(a.length),l=this.state.columnTitle;return o.a.createElement(A.b,{draggableId:e.id,index:r},(function(n){return o.a.createElement(_,Object.assign({},n.draggableProps,{ref:n.innerRef}),o.a.createElement(nt,n.dragHandleProps,o.a.createElement(et,{contentEditable:!0,onBlur:t.onTitleBlur,onChange:t.onTitleChange,value:l}),o.a.createElement(at,{disabled:c,onClick:t.onDeleteColumnClick})),o.a.createElement(N,{onAddTaskClick:i,columnId:e.id}),o.a.createElement(A.c,{droppableId:e.id,type:"tasks"},(function(n,e){return o.a.createElement(tt,Object.assign({ref:n.innerRef},n.droppableProps,{isDraggingOver:e.isDraggingOver}),a.map((function(n,e){return o.a.createElement(X,{key:n.id,task:n,index:e,onDeleteTaskClick:t.onDeleteTaskClick})})),n.placeholder)})))}))}}]),n}(o.a.PureComponent),ot=e(34),it=e.n(ot),ct=e(54);function lt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function st(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?lt(e,!0).forEach((function(n){Object(p.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):lt(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var ut=function(t,n){var e=new Array(t).fill(4).reduce((function(t,n,e){var a="Task-".concat(e),r={id:a,content:"Some task ".concat(e)};return st({},t,Object(p.a)({},a,r))}),{}),a=Object.keys(e),r=new Array(n).fill(4).reduce((function(t,n,e){var r="column-".concat(e),o="column ".concat(e," title");if(0===e){var i={id:r,title:o,tasksIds:a};return st({},t,Object(p.a)({},r,i))}var c={id:r,title:o,tasksIds:[]};return st({},t,Object(p.a)({},r,c))}),{});return{tasks:e,columns:r,columnOrder:Object.keys(r)}},dt=function(t){return{type:a.setScrumData,payload:t}},pt=function(t){return{type:a.setScrumDataStatus,payload:t}},bt=function(t){return function(){var n=Object(ct.a)(it.a.mark((function n(e){var a;return it.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(pt(t===b?g:h)),n.prev=1,n.next=4,new Promise((function(t){t(ut(21,3))}));case 4:a=n.sent,e(dt(a)),setTimeout((function(){return e(pt(f))}),500),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),e(pt(m)),console.error(n.t0);case 13:return n.abrupt("return",123);case 14:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(t){return n.apply(this,arguments)}}()};function ft(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function mt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?ft(e,!0).forEach((function(n){Object(p.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ft(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function gt(){var t=Object(P.a)(["\n    position: relative;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    border: 0;\n    border-radius: 4px;\n    background-color: lightgray;\n    opacity: 0.2;\n    transition: opacity 0.3s;\n\n    ::after {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        width: 6px;\n        height: 80px;\n        background-color: gray;\n        border-radius: 3px;\n    }\n\n    ::before {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%) rotate(90deg);\n        width: 6px;\n        height: 80px;\n        background-color: gray;\n        border-radius: 3px;\n    }\n\n    :hover {\n        opacity: 0.5;\n    }\n"]);return gt=function(){return t},t}function ht(){var t=Object(P.a)(["\n    width: 250px;\n    padding: 8px;\n"]);return ht=function(){return t},t}function kt(){var t=Object(P.a)(["\n    width: auto;\n    height: auto;\n    padding: 0;\n"]);return kt=function(){return t},t}function vt(){var t=Object(P.a)(["\n    display: flex;\n    width: 100vw;\n    max-width: 100vw;\n    height: 100vh;\n    padding: 25px 40px;\n    overflow-x: auto;\n"]);return vt=function(){return t},t}var Ot=I.b.div(vt()),yt=Object(I.b)(Ot)(kt()),jt=I.b.div(ht()),Dt=I.b.button(gt()),Ct=Object(l.b)((function(t){return{initialData:t.scrumDataReducer}}),(function(t){return Object(s.bindActionCreators)({getScrumData:bt,setScrumData:dt},t)}))(function(t){function n(t){var e;return Object(C.a)(this,n),(e=Object(w.a)(this,Object(T.a)(n).call(this,t))).state={tasks:{},columns:{},columnOrder:[]},e.onDragEnd=e.onDragEnd.bind(Object(E.a)(e)),e.onDragStart=e.onDragStart.bind(Object(E.a)(e)),e.onDragUpdate=e.onDragUpdate.bind(Object(E.a)(e)),e.onAddColumnClick=e.onAddColumnClick.bind(Object(E.a)(e)),e.onDeleteColumnClick=e.onDeleteColumnClick.bind(Object(E.a)(e)),e.onDeleteTaskClick=e.onDeleteTaskClick.bind(Object(E.a)(e)),e.onAddTaskClick=e.onAddTaskClick.bind(Object(E.a)(e)),e.onTitleUpdate=e.onTitleUpdate.bind(Object(E.a)(e)),e}return Object(S.a)(n,t),Object(x.a)(n,[{key:"componentDidMount",value:function(){this.props.getScrumData(this.props.initialData.dataStatus)}},{key:"onAddColumnClick",value:function(){var t=this.props.initialData.data,n=t.columnOrder,e=t.columns,a="column-".concat(n.length),r="column ".concat(n.length," title"),o=[].concat(Object(D.a)(n),[a]),i=mt({},e,Object(p.a)({},a,{id:a,title:r,tasksIds:[]})),c={tasks:this.props.initialData.data.tasks,columns:i,columnOrder:o};this.props.setScrumData(c)}},{key:"onDeleteColumnClick",value:function(t){var n=this.props.initialData.data,e=n.columns,a=n.columnOrder;delete e[t];var r=mt({},n,{columns:e,columnOrder:a.filter((function(n){return t!==n}))});this.props.setScrumData(r)}},{key:"onDeleteTaskClick",value:function(t,n){var e=this.props.initialData.data,a=e.tasks,r=e.columns,o=e.columnOrder;delete a[t];var i=r[n].tasksIds.filter((function(n){return t!==n})),c={tasks:a,columns:mt({},r,Object(p.a)({},n,mt({},r[n],{tasksIds:i}))),columnOrder:o};this.props.setScrumData(c)}},{key:"onAddTaskClick",value:function(t,n){var e=this.props.initialData.data,a=e.tasks,r=Object.keys(a).length,o={id:"Task-".concat(r),content:n},i=mt({},e.columns[t],{tasksIds:["Task-".concat(r)].concat(Object(D.a)(e.columns[t].tasksIds))}),c=mt({},e,{tasks:mt({},e.tasks,Object(p.a)({},"Task-".concat(r),o)),columns:mt({},e.columns,Object(p.a)({},t,i))});this.props.setScrumData(c)}},{key:"onTitleUpdate",value:function(t,n){var e=this.props.initialData.data,a=mt({},e,{columns:mt({},e.columns,Object(p.a)({},t,mt({},e.columns[t],{title:n})))});this.props.setScrumData(a)}},{key:"onDragStart",value:function(){document.body.style.color="red",document.body.style.transition="background-color 0.3s ease"}},{key:"onDragUpdate",value:function(t){var n=t.destination,e=n?n.index/Object.keys(this.state.tasks).length:0;document.body.style.backgroundColor="rgba(153, 141, 217, ".concat(e,")")}},{key:"onDragEnd",value:function(t){document.body.style.color="inherit",document.body.style.backgroundColor="inherit";var n=t.source,e=t.draggableId,a=t.type;if(t.destination&&!this.isDragPositionEqual(t.destination,n)){if("column"!==a){var r=this.props.initialData.data;return r.columns[n.droppableId]===r.columns[t.destination.droppableId]?this.dragInsideColumn(t):this.dragOutsideColumn(t)}var o=Array.from(this.props.initialData.data.columnOrder);o.splice(n.index,1),o.splice(t.destination.index,0,e);var i=mt({},this.props.initialData.data,{columnOrder:o});this.props.setScrumData(i)}}},{key:"isDragPositionEqual",value:function(t,n){return t.droppableId===n.droppableId&&t.index===n.index}},{key:"dragInsideColumn",value:function(t){var n=t.destination,e=t.source,a=t.draggableId;if(n){var r=this.props.initialData.data,o=r.columns[n.droppableId],i=Object(D.a)(o.tasksIds);i.splice(e.index,1),i.splice(n.index,0,a);var c=mt({},o,{tasksIds:i}),l=mt({},r,{columns:mt({},r.columns,Object(p.a)({},c.id,c))});this.props.setScrumData(l)}}},{key:"dragOutsideColumn",value:function(t){var n,e=t.destination,a=t.source,r=t.draggableId;if(e){var o=this.props.initialData.data,i=o.columns[a.droppableId],c=o.columns[e.droppableId],l=Array.from(i.tasksIds);l.splice(a.index,1);var s=mt({},i,{tasksIds:l}),u=Array.from(c.tasksIds);u.splice(e.index,0,r);var d=mt({},c,{tasksIds:u}),b=mt({},o,{columns:mt({},o.columns,(n={},Object(p.a)(n,s.id,s),Object(p.a)(n,d.id,d),n))});this.props.setScrumData(b)}}},{key:"render",value:function(){var t=this,n=this.props.initialData.dataStatus,e=this.props.initialData.data,a=e.tasks,r=e.columns,i=e.columnOrder,c=i.length<6;return n===g||n===b?o.a.createElement(Ot,null,o.a.createElement("span",null,"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c\u0441\u044f")):n===m?o.a.createElement(Ot,null,o.a.createElement("span",null,"\u041e\u0448\u0438\u0431\u043a\u0430 =(")):o.a.createElement(Ot,null,o.a.createElement(A.a,{onDragStart:this.onDragStart,onDragUpdate:this.onDragUpdate,onDragEnd:this.onDragEnd},o.a.createElement(A.c,{droppableId:"all-columns",direction:"horizontal",type:"column"},(function(n){return o.a.createElement(yt,Object.assign({},n.droppableProps,{ref:n.innerRef}),i.map((function(n,e){var i=r[n],c=i.tasksIds.map((function(t){return a[t]}));return o.a.createElement(rt,{key:i.id,index:e,column:i,tasks:c,onDeleteColumnClick:t.onDeleteColumnClick,onDeleteTaskClick:t.onDeleteTaskClick,onTitleUpdate:t.onTitleUpdate,onAddTaskClick:t.onAddTaskClick})})),n.placeholder)}))),c&&o.a.createElement(jt,null,o.a.createElement(Dt,{onClick:this.onAddColumnClick})))}}]),n}(o.a.PureComponent));e(104);var xt=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("main",null,o.a.createElement(Ct,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(l.a,{store:j},o.a.createElement(xt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},57:function(t,n,e){t.exports=e(105)},67:function(t,n,e){}},[[57,1,2]]]);
//# sourceMappingURL=main.a00ce766.chunk.js.map