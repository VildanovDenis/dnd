(window.webpackJsonpdnd=window.webpackJsonpdnd||[]).push([[0],{117:function(t,n,e){},118:function(t,n,e){"use strict";e.r(n);var a,r=e(0),o=e.n(r),i=e(27),c=e.n(i),l=e(15),s=e(19),u=e(8),d=e(58),p=e(59),b=e(7);!function(t){t.setScrumData="ScrumDataAction/setScrumData",t.setScrumDataStatus="ScrumDataAction/setScrumDataStatus"}(a||(a={}));var m="initial",h="success",f="error",g="fetching",k="updating";function v(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function O(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?v(e,!0).forEach((function(n){Object(b.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var j,y={dataStatus:m,data:{tasks:{},columns:{},columnOrder:[]}};function D(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function x(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?D(e,!0).forEach((function(n){Object(b.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):D(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}!function(t){t.setRouterData="RouterDataAction/setRouterData"}(j||(j={}));var C={isModalShow:!1,route:"",backRoute:"",background:null},w=Object(u.combineReducers)({routerDataReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case j.setRouterData:return x({},t,{},n.payload);default:return t}},scrumDataReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.setScrumData:var e=n.payload;return O({},t,{data:e});case a.setScrumDataStatus:var r=n.payload;return O({},t,{dataStatus:r});default:return t}}}),E=Object(u.createStore)(w,Object(d.composeWithDevTools)(Object(u.applyMiddleware)(p.a))),S=(e(79),e(9)),T=e(35),P=e(10),I=e(11),A=e(13),B=e(12),R=e(5),U=e(14),M=e(2),X=e(3),Y=e(23);function z(){var t=Object(M.a)(["\n    position: relative;\n    width: 22px;\n    height: 22px;\n    padding: 0;\n    margin: 0;\n    margin-left: auto;\n    border: 0;\n    background-color: transparent;\n    transform: rotate(45deg);\n    cursor: default;\n\n    &::after {\n        content: '';\n        position: absolute;\n        left: 50%;\n        top: 5px;\n        transform: translateX(-50%);\n        width: 0;\n        height: 0;\n        border-left: 4px solid transparent;\n        border-right: 4px solid transparent;\n        border-bottom: 4px solid lightgray;\n        border-top: 0;\n        transition: 0.3s;\n    }\n\n    &::before {\n        content: '';\n        position: absolute;\n        right: 50%;\n        bottom: 5px;\n        transform: translateX(50%);\n        width: 0;\n        height: 0;\n        border-left: 4px solid transparent;\n        border-right: 4px solid transparent;\n        border-top: 4px solid lightgray;\n        border-bottom: 0;\n        transition: 0.3s;\n    }\n\n    &:hover::after {\n        border-bottom: 4px solid green;\n    }\n\n    &:hover::before {\n        border-top: 4px solid green;\n    }\n"]);return z=function(){return t},t}function W(){var t=Object(M.a)(["\n    width: 70%;\n    text-align: left;\n    line-height: 22px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n"]);return W=function(){return t},t}function L(){var t=Object(M.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    border: 1px solid lightgray;\n    padding: 8px;\n    margin-bottom: 8px;\n    border-radius: 4px;\n    background-color: ",";\n\n    :last-child {\n        margin-bottom: 0;\n    }\n"]);return L=function(){return t},t}var q=X.b.div(L(),(function(t){return t.isDragging?"lightgreen":"white"})),H=X.b.span(W()),J=Object(X.b)(s.b)(z()),N=Object(S.g)(function(t){function n(t){var e;return Object(P.a)(this,n),(e=Object(A.a)(this,Object(B.a)(n).call(this,t))).onDeleteTaskClick=e.onDeleteTaskClick.bind(Object(R.a)(e)),e}return Object(U.a)(n,t),Object(I.a)(n,[{key:"onDeleteTaskClick",value:function(){this.props.onDeleteTaskClick(this.props.task.id)}},{key:"render",value:function(){var t=this,n=this.props,e=n.task,a=n.index,r="/task/".concat(e.id),i={background:this.props.location};return o.a.createElement(Y.b,{draggableId:e.id,index:a},(function(n,a){return o.a.createElement(q,Object.assign({},n.draggableProps,n.dragHandleProps,{ref:n.innerRef,isDragging:a.isDragging}),o.a.createElement(H,null,e.content),o.a.createElement(J,{to:{pathname:r,state:i}}),o.a.createElement(dt,{type:"button",onClick:t.onDeleteTaskClick}))}))}}]),n}(o.a.PureComponent));function G(){var t=Object(M.a)(["\n    padding: 5px;\n    border: 1px solid lightgray;\n    border-radius: 4px;\n    will-change: border-color;\n    transition: 0.3s;\n\n    :hover {\n        border-color: gray;\n    }\n\n    :active {\n        border-color: black;\n    }\n\n    :disabled {\n        opacity: 0.7;\n\n        :hover {\n            border-color: lightgray;\n        }\n    }\n"]);return G=function(){return t},t}function $(){var t=Object(M.a)(["\n    width: 70%;\n    padding: 5px;\n    border: 1px solid lightgray;\n    border-radius: 4px;\n    will-change: border-color;\n    transition: 0.3s;\n\n    :hover {\n        border-color: gray;\n    }\n"]);return $=function(){return t},t}function F(){var t=Object(M.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    padding: 8px;\n"]);return F=function(){return t},t}var K=X.b.div(F()),Q=X.b.input($()),V=X.b.button(G()),Z=function(t){function n(t){var e;return Object(P.a)(this,n),(e=Object(A.a)(this,Object(B.a)(n).call(this,t))).state={taskContent:""},e.onTaskChange=e.onTaskChange.bind(Object(R.a)(e)),e.onButtonClick=e.onButtonClick.bind(Object(R.a)(e)),e}return Object(U.a)(n,t),Object(I.a)(n,[{key:"onTaskChange",value:function(t){var n=t.target.value;this.setState({taskContent:n})}},{key:"onButtonClick",value:function(){var t=this.state.taskContent;if(t){var n=this.props,e=n.columnId;(0,n.onAddTaskClick)(e,t),this.setState({taskContent:""})}}},{key:"render",value:function(){var t=this.state.taskContent;return o.a.createElement(K,null,o.a.createElement(Q,{value:t,onChange:this.onTaskChange}),o.a.createElement(V,{onClick:this.onButtonClick,disabled:!Boolean(t)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),n}(o.a.PureComponent);function _(){var t=Object(M.a)(["\n    position: relative;\n    width: 22px;\n    height: 22px;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    background-color: transparent;\n    cursor: pointer;\n\n    ::before {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%) rotate(45deg);\n        width: 3px;\n        height: 15px;\n        background-color: lightgray;\n        transition: 0.3s;\n    }\n\n    ::after {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%) rotate(-45deg);\n        width: 3px;\n        height: 15px;\n        background-color: lightgray;\n        transition: 0.3s;\n    }\n\n    :hover::after {\n        background-color: lightcoral\n    };\n\n    :hover::before {\n        background-color: lightcoral;\n    }\n\n    :disabled {\n        cursor: not-allowed;\n    }\n\n    :disabled::after {\n        background-color: #e6e6e6;\n    }\n\n    :disabled::before {\n        background-color: #e6e6e6;\n    }\n\n    :disabled:hover::after {\n        background-color: #e6e6e6;\n    }\n\n    :disabled:hover::before{\n        background-color: #e6e6e6;\n    }\n"]);return _=function(){return t},t}function tt(){var t=Object(M.a)(["\n    flex-shrink: 0;\n    max-width: 75%;\n    width: 75%;\n    height: 22px;\n    margin: 0 auto 0 0;\n    border: 0;\n    padding: 0;\n    font-size: 16px;\n    line-height: 20px;\n    text-align: left;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    will-change: color;\n    transition: color 0.3s;\n    \n    :hover {\n        color: rgba(0, 0, 0, 0.6);\n    }\n\n    :focused {\n        text-overflow: clip;\n        overflow: visible;\n        color: rgba(0, 0, 0, 1);\n    }\n"]);return tt=function(){return t},t}function nt(){var t=Object(M.a)(["\n    display: flex;\n    flex-direction: row;\n    padding: 16px 8px 8px;\n    margin-bottom: 10px;\n"]);return nt=function(){return t},t}function et(){var t=Object(M.a)(["\n    max-height: calc(100% - 22px - 10px);\n    flex: 1 1 100%;\n    margin: 0 0 11px;\n    padding: 8px 11px 0;\n    transition: background-color 0.3s ease;\n    background-color: ",";\n    overflow-y: auto;\n"]);return et=function(){return t},t}function at(){var t=Object(M.a)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    min-width: 200px;\n    width: 250px;\n    max-height: 100%;\n    margin: 8px;\n    border: 1px solid lightgray;\n    border-radius: 4px;\n    background-color: white;\n    // opacity: 0;\n    // animation: ",";\n"]);return at=function(){return t},t}function rt(){var t=Object(M.a)(["\n        "," 0.2s linear ","s\n    "]);return rt=function(){return t},t}function ot(){var t=Object(M.a)(["\n    0% {\n        opacity: 0;\n        transform: translateY(-50px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0px);\n    }\n"]);return ot=function(){return t},t}var it=Object(X.c)(ot()),ct=X.b.div(at(),(function(t){return Object(X.a)(rt(),it,.1*t.index)})),lt=X.b.div(et(),(function(t){return t.isDraggingOver?"skyblue":"inherit"})),st=X.b.div(nt()),ut=X.b.input(tt()),dt=X.b.button(_()),pt=function(t){function n(t){var e;return Object(P.a)(this,n),(e=Object(A.a)(this,Object(B.a)(n).call(this,t))).state={columnTitle:""},e.onDeleteColumnClick=e.onDeleteColumnClick.bind(Object(R.a)(e)),e.onDeleteTaskClick=e.onDeleteTaskClick.bind(Object(R.a)(e)),e.onTitleChange=e.onTitleChange.bind(Object(R.a)(e)),e.onTitleBlur=e.onTitleBlur.bind(Object(R.a)(e)),e}return Object(U.a)(n,t),Object(I.a)(n,[{key:"componentDidMount",value:function(){this.setState({columnTitle:this.props.column.title})}},{key:"onDeleteColumnClick",value:function(){this.props.onDeleteColumnClick(this.props.column.id)}},{key:"onDeleteTaskClick",value:function(t){var n=this.props.column.id;this.props.onDeleteTaskClick(t,n)}},{key:"onTitleChange",value:function(t){var n=t.target.value;this.setState({columnTitle:n})}},{key:"onTitleBlur",value:function(){var t=this.props,n=t.column,e=t.onTitleUpdate,a=this.state.columnTitle;a!==n.title&&(a?e(n.id,a):this.setState({columnTitle:n.title}))}},{key:"render",value:function(){var t=this,n=this.props,e=n.column,a=n.tasks,r=n.index,i=n.onAddTaskClick,c=Boolean(a.length),l=this.state.columnTitle;return o.a.createElement(Y.b,{draggableId:e.id,index:r},(function(n){return o.a.createElement(ct,Object.assign({},n.draggableProps,{ref:n.innerRef}),o.a.createElement(st,n.dragHandleProps,o.a.createElement(ut,{contentEditable:!0,onBlur:t.onTitleBlur,onChange:t.onTitleChange,value:l}),o.a.createElement(dt,{disabled:c,onClick:t.onDeleteColumnClick})),o.a.createElement(Z,{onAddTaskClick:i,columnId:e.id}),o.a.createElement(Y.c,{droppableId:e.id,type:"tasks"},(function(n,e){return o.a.createElement(lt,Object.assign({ref:n.innerRef},n.droppableProps,{isDraggingOver:e.isDraggingOver}),a.map((function(n,e){return o.a.createElement(N,{key:n.id,task:n,index:e,onDeleteTaskClick:t.onDeleteTaskClick})})),n.placeholder)})))}))}}]),n}(o.a.PureComponent),bt=e(44),mt=e.n(bt),ht=e(66);function ft(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function gt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?ft(e,!0).forEach((function(n){Object(b.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ft(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var kt=function(t,n){var e=new Array(t).fill(4).reduce((function(t,n,e){var a="Task-".concat(e),r={id:a,content:"Some task ".concat(e)};return gt({},t,Object(b.a)({},a,r))}),{}),a=Object.keys(e),r=new Array(n).fill(4).reduce((function(t,n,e){var r="column-".concat(e),o="column ".concat(e," title");if(0===e){var i={id:r,title:o,tasksIds:a};return gt({},t,Object(b.a)({},r,i))}var c={id:r,title:o,tasksIds:[]};return gt({},t,Object(b.a)({},r,c))}),{});return{tasks:e,columns:r,columnOrder:Object.keys(r)}},vt=function(t){return{type:a.setScrumData,payload:t}},Ot=function(t){return{type:a.setScrumDataStatus,payload:t}},jt=function(t){return function(){var n=Object(ht.a)(mt.a.mark((function n(e){var a;return mt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(Ot(t===m?g:k)),n.prev=1,n.next=4,new Promise((function(t){t(kt(21,3))}));case 4:a=n.sent,e(vt(a)),setTimeout((function(){return e(Ot(h))}),500),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),e(Ot(f)),console.error(n.t0);case 13:return n.abrupt("return",123);case 14:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(t){return n.apply(this,arguments)}}()};function yt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function Dt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?yt(e,!0).forEach((function(n){Object(b.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):yt(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function xt(){var t=Object(M.a)(["\n    position: relative;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    border: 0;\n    border-radius: 4px;\n    background-color: lightgray;\n    opacity: 0.2;\n    transition: opacity 0.3s;\n\n    ::after {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        width: 6px;\n        height: 80px;\n        background-color: gray;\n        border-radius: 3px;\n    }\n\n    ::before {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%) rotate(90deg);\n        width: 6px;\n        height: 80px;\n        background-color: gray;\n        border-radius: 3px;\n    }\n\n    :hover {\n        opacity: 0.5;\n    }\n"]);return xt=function(){return t},t}function Ct(){var t=Object(M.a)(["\n    width: 250px;\n    padding: 8px;\n"]);return Ct=function(){return t},t}function wt(){var t=Object(M.a)(["\n    width: auto;\n    height: auto;\n    padding: 0;\n"]);return wt=function(){return t},t}function Et(){var t=Object(M.a)(["\n    display: flex;\n    width: 100vw;\n    max-width: 100vw;\n    height: 100vh;\n    padding: 25px 40px;\n    overflow-x: auto;\n"]);return Et=function(){return t},t}var St=X.b.div(Et()),Tt=Object(X.b)(St)(wt()),Pt=X.b.div(Ct()),It=X.b.button(xt()),At=Object(l.b)((function(t){return{initialData:t.scrumDataReducer}}),(function(t){return Object(u.bindActionCreators)({getScrumData:jt,setScrumData:vt},t)}))(function(t){function n(t){var e;return Object(P.a)(this,n),(e=Object(A.a)(this,Object(B.a)(n).call(this,t))).state={tasks:{},columns:{},columnOrder:[]},e.onDragEnd=e.onDragEnd.bind(Object(R.a)(e)),e.onDragStart=e.onDragStart.bind(Object(R.a)(e)),e.onDragUpdate=e.onDragUpdate.bind(Object(R.a)(e)),e.onAddColumnClick=e.onAddColumnClick.bind(Object(R.a)(e)),e.onDeleteColumnClick=e.onDeleteColumnClick.bind(Object(R.a)(e)),e.onDeleteTaskClick=e.onDeleteTaskClick.bind(Object(R.a)(e)),e.onAddTaskClick=e.onAddTaskClick.bind(Object(R.a)(e)),e.onTitleUpdate=e.onTitleUpdate.bind(Object(R.a)(e)),e}return Object(U.a)(n,t),Object(I.a)(n,[{key:"componentDidMount",value:function(){this.props.initialData.dataStatus!==h&&this.props.getScrumData(this.props.initialData.dataStatus)}},{key:"onAddColumnClick",value:function(){var t=this.props.initialData.data,n=t.columnOrder,e=t.columns,a="column-".concat(n.length),r="column ".concat(n.length," title"),o=[].concat(Object(T.a)(n),[a]),i=Dt({},e,Object(b.a)({},a,{id:a,title:r,tasksIds:[]})),c={tasks:this.props.initialData.data.tasks,columns:i,columnOrder:o};this.props.setScrumData(c)}},{key:"onDeleteColumnClick",value:function(t){var n=this.props.initialData.data,e=n.columns,a=n.columnOrder;delete e[t];var r=Dt({},n,{columns:e,columnOrder:a.filter((function(n){return t!==n}))});this.props.setScrumData(r)}},{key:"onDeleteTaskClick",value:function(t,n){var e=this.props.initialData.data,a=e.tasks,r=e.columns,o=e.columnOrder;delete a[t];var i=r[n].tasksIds.filter((function(n){return t!==n})),c={tasks:a,columns:Dt({},r,Object(b.a)({},n,Dt({},r[n],{tasksIds:i}))),columnOrder:o};this.props.setScrumData(c)}},{key:"onAddTaskClick",value:function(t,n){var e=this.props.initialData.data,a=e.tasks,r=Object.keys(a)[Object.keys(a).length-1],o=Number(a[r].id.split("-")[1]),i={id:"Task-".concat(o+1),content:n},c=Dt({},e.columns[t],{tasksIds:["Task-".concat(o+1)].concat(Object(T.a)(e.columns[t].tasksIds))}),l=Dt({},e,{tasks:Dt({},e.tasks,Object(b.a)({},"Task-".concat(o+1),i)),columns:Dt({},e.columns,Object(b.a)({},t,c))});this.props.setScrumData(l)}},{key:"onTitleUpdate",value:function(t,n){var e=this.props.initialData.data,a=Dt({},e,{columns:Dt({},e.columns,Object(b.a)({},t,Dt({},e.columns[t],{title:n})))});this.props.setScrumData(a)}},{key:"onDragStart",value:function(){document.body.style.color="red",document.body.style.transition="background-color 0.3s ease"}},{key:"onDragUpdate",value:function(t){var n=t.destination,e=n?n.index/Object.keys(this.state.tasks).length:0;document.body.style.backgroundColor="rgba(153, 141, 217, ".concat(e,")")}},{key:"onDragEnd",value:function(t){document.body.style.color="inherit",document.body.style.backgroundColor="inherit";var n=t.source,e=t.draggableId,a=t.type;if(t.destination&&!this.isDragPositionEqual(t.destination,n)){if("column"!==a){var r=this.props.initialData.data;return r.columns[n.droppableId]===r.columns[t.destination.droppableId]?this.dragInsideColumn(t):this.dragOutsideColumn(t)}var o=Array.from(this.props.initialData.data.columnOrder);o.splice(n.index,1),o.splice(t.destination.index,0,e);var i=Dt({},this.props.initialData.data,{columnOrder:o});this.props.setScrumData(i)}}},{key:"isDragPositionEqual",value:function(t,n){return t.droppableId===n.droppableId&&t.index===n.index}},{key:"dragInsideColumn",value:function(t){var n=t.destination,e=t.source,a=t.draggableId;if(n){var r=this.props.initialData.data,o=r.columns[n.droppableId],i=Object(T.a)(o.tasksIds);i.splice(e.index,1),i.splice(n.index,0,a);var c=Dt({},o,{tasksIds:i}),l=Dt({},r,{columns:Dt({},r.columns,Object(b.a)({},c.id,c))});this.props.setScrumData(l)}}},{key:"dragOutsideColumn",value:function(t){var n,e=t.destination,a=t.source,r=t.draggableId;if(e){var o=this.props.initialData.data,i=o.columns[a.droppableId],c=o.columns[e.droppableId],l=Array.from(i.tasksIds);l.splice(a.index,1);var s=Dt({},i,{tasksIds:l}),u=Array.from(c.tasksIds);u.splice(e.index,0,r);var d=Dt({},c,{tasksIds:u}),p=Dt({},o,{columns:Dt({},o.columns,(n={},Object(b.a)(n,s.id,s),Object(b.a)(n,d.id,d),n))});this.props.setScrumData(p)}}},{key:"render",value:function(){var t=this,n=this.props.initialData.dataStatus,e=this.props.initialData.data,a=e.tasks,r=e.columns,i=e.columnOrder,c=i.length<6;return n===g||n===m?o.a.createElement(St,null,o.a.createElement("span",null,"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c\u0441\u044f")):n===f?o.a.createElement(St,null,o.a.createElement("span",null,"\u041e\u0448\u0438\u0431\u043a\u0430 =(")):o.a.createElement(St,null,o.a.createElement(Y.a,{onDragStart:this.onDragStart,onDragUpdate:this.onDragUpdate,onDragEnd:this.onDragEnd},o.a.createElement(Y.c,{droppableId:"all-columns",direction:"horizontal",type:"column"},(function(n){return o.a.createElement(Tt,Object.assign({},n.droppableProps,{ref:n.innerRef}),i.map((function(n,e){var i=r[n],c=i.tasksIds.map((function(t){return a[t]}));return o.a.createElement(pt,{key:i.id,index:e,column:i,tasks:c,onDeleteColumnClick:t.onDeleteColumnClick,onDeleteTaskClick:t.onDeleteTaskClick,onTitleUpdate:t.onTitleUpdate,onAddTaskClick:t.onAddTaskClick})})),n.placeholder)}))),c&&o.a.createElement(Pt,null,o.a.createElement(It,{onClick:this.onAddColumnClick})))}}]),n}(o.a.PureComponent)),Bt=function(t){function n(){var t,e;Object(P.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=Object(A.a)(this,(t=Object(B.a)(n)).call.apply(t,[this].concat(r)))).el=document.createElement("div"),e}return Object(U.a)(n,t),Object(I.a)(n,[{key:"componentDidMount",value:function(){document.body.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.el)}},{key:"render",value:function(){var t=this.props.children;return c.a.createPortal(t,this.el)}}]),n}(o.a.PureComponent);function Rt(){var t=Object(M.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    width: 400px;\n    height: 250px;\n    padding: 15px;\n    border-radius: 10px;\n    background-color: white;\n    z-index: 11;\n"]);return Rt=function(){return t},t}function Ut(){var t=Object(M.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: white;\n    opacity: 0.5;\n    z-index: 10;\n    cursor: initial;\n"]);return Ut=function(){return t},t}function Mt(){var t=Object(M.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n"]);return Mt=function(){return t},t}var Xt=X.b.div(Mt()),Yt=Object(X.b)(s.b)(Ut()),zt=X.b.div(Rt()),Wt=Object(l.b)((function(t){return{scrumData:t.scrumDataReducer}}),null)(function(t){function n(t){var e;return Object(P.a)(this,n),(e=Object(A.a)(this,Object(B.a)(n).call(this,t))).state={taskId:""},e.onBackClick=e.onBackClick.bind(Object(R.a)(e)),e}return Object(U.a)(n,t),Object(I.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params;t.id&&this.setState({taskId:t.id})}},{key:"onBackClick",value:function(t){t.preventDefault(),t.stopPropagation(),this.props.history.goBack()}},{key:"render",value:function(){var t=this.props.scrumData,n=t.data,e=t.dataStatus,a=n.tasks[this.state.taskId];return void 0===a||e===g?o.a.createElement(Bt,null,o.a.createElement(Xt,null,o.a.createElement(zt,null,o.a.createElement("span",null,"Loading...")),o.a.createElement(Yt,{to:"/",onClick:this.onBackClick}))):void 0===a||e===g?o.a.createElement(Bt,null,o.a.createElement(Xt,null,o.a.createElement(zt,null,o.a.createElement("p",null,"This task is not available.")),o.a.createElement(Yt,{to:"/",onClick:this.onBackClick}))):o.a.createElement(Bt,null,o.a.createElement(Xt,null,o.a.createElement(zt,null,o.a.createElement("h3",null,a.content),o.a.createElement(s.b,{to:"/",onClick:this.onBackClick},"Go back")),o.a.createElement(Yt,{to:"/",onClick:this.onBackClick})))}}]),n}(o.a.PureComponent));function Lt(){var t=Object(M.a)(["\n    width: 400px;\n    padding: 8px;\n"]);return Lt=function(){return t},t}function qt(){var t=Object(M.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh;\n"]);return qt=function(){return t},t}var Ht=X.b.div(qt()),Jt=X.b.div(Lt()),Nt=Object(l.b)((function(t){return{scrumData:t.scrumDataReducer}}),(function(t){return Object(u.bindActionCreators)({getScrumData:jt},t)}))(function(t){function n(t){var e;return Object(P.a)(this,n),(e=Object(A.a)(this,Object(B.a)(n).call(this,t))).state={taskId:""},e}return Object(U.a)(n,t),Object(I.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params;t.id&&this.setState({taskId:t.id}),this.props.scrumData.dataStatus!==h&&this.props.getScrumData(this.props.scrumData.dataStatus)}},{key:"render",value:function(){var t=this.props.scrumData,n=t.data,e=t.dataStatus,a=n.tasks[this.state.taskId];return e===g?o.a.createElement(Ht,null,o.a.createElement(Jt,null,o.a.createElement("p",null,"Loading..."),o.a.createElement(s.b,{to:"/"},"go to main"))):void 0===a?o.a.createElement(Ht,null,o.a.createElement(Jt,null,o.a.createElement("p",null,"This task is not available."),o.a.createElement(s.b,{to:"/"},"go to main"))):o.a.createElement(Ht,null,o.a.createElement(Jt,null,o.a.createElement("p",null,a.content),o.a.createElement(s.b,{to:"/"},"go to main")))}}]),n}(o.a.PureComponent)),Gt=e(67);function $t(){var t=Object(M.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n    padding: 10px;\n"]);return $t=function(){return t},t}var Ft=X.b.section($t()),Kt=function(){var t=Object(r.useState)(0),n=Object(Gt.a)(t,2),e=n[0],a=n[1];return o.a.createElement(Ft,null,o.a.createElement("h1",null,"\u0412\u044b \u043f\u043e\u0441\u0442\u0443\u0447\u0430\u043b\u0438\u0441\u044c \u043d\u0435 \u043f\u043e \u0442\u043e\u043c\u0443 URL'\u0443."),o.a.createElement("div",null,o.a.createElement("button",{type:"button",onClick:function(){return a(e-1)}},"-"),o.a.createElement("span",null,"\u0421\u0447\u0435\u0442\u0447\u0438\u043a: ",e),o.a.createElement("button",{type:"button",onClick:function(){return a(e+1)}},"+")))},Qt=(e(117),Object(l.b)(null,null)((function(){var t=Object(S.f)(),n=t.state&&t.state.background;return o.a.createElement("div",{className:"App"},o.a.createElement("main",null,o.a.createElement(S.c,{location:n||t},o.a.createElement(S.a,{exact:!0,path:"/",component:At}),o.a.createElement(S.a,{exact:!0,path:"/",component:At}),o.a.createElement(S.a,{path:"/task/:id",component:Nt}),o.a.createElement(S.a,{component:Kt})),n&&o.a.createElement(S.a,{path:"/task/:id",component:Wt})))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(l.a,{store:E},o.a.createElement(s.a,{basename:"/dnd"},o.a.createElement(Qt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},70:function(t,n,e){t.exports=e(118)},79:function(t,n,e){}},[[70,1,2]]]);
//# sourceMappingURL=main.7b29b372.chunk.js.map