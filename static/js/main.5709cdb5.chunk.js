(this.webpackJsonptictacttoe=this.webpackJsonptictacttoe||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),s=n.n(r),i=n(8),c=n.n(i),d=n(21),u=n.n(d),o=n(22),l=n(23),h=n(15),b=n(16),j=n(19),v=n(18);var f=function(e){return e.value?Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"square",children:e.value})}):Object(a.jsx)("div",{className:"game-board-style",children:Object(a.jsx)("button",{className:"square",onClick:function(){return e.handleUpdate(e.index,"X")},children:e.value})})},O=n(55),m=n(56),x=function(e){Object(j.a)(n,e);var t=Object(v.a)(n);function n(){return Object(h.a)(this,n),t.call(this)}return Object(b.a)(n,[{key:"renderSquare",value:function(e){return Object(a.jsx)(f,{value:this.props.gameState[e],index:e,handleUpdate:this.props.handleStateUpdate})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"status",children:["NEW PLAYER:X",Object(a.jsx)(O.a,{item:!0,xs:3,children:Object(a.jsx)(m.a,{variant:"contained",onClick:this.props.handleReset,children:"Reset"})})]}),Object(a.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(a.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(a.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),n}(r.Component);n(37);var S=function(e){var t=e.handleWinner;return t?Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:[" ","X"===t?"You are the winner":"You failed"," "]}),";"]}):null},p=function(e){Object(j.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).asyncSetState=function(e){return new Promise((function(t,n){return a.setState(e,t)}))},a.handleStateUpdate=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.state.isGameEnd){e.next=2;break}return e.abrupt("return");case 2:return(r=Object(o.a)(a.state.board))[t]=n,e.next=6,a.asyncSetState({board:r});case 6:return e.next=8,a.setWinner();case 8:a.handleSystemMove();case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a.handleReset=function(){a.setState({board:[],winner:"",isGameEnd:!1})},a.handleSystemMove=function(){if(!a.state.isGameEnd){for(var e=Object(o.a)(a.state.board),t=Math.floor(Math.random()*e.length),n=t;n<e.length+t;n++){var r=n%e.length;if("X"!==e[r]&&"O"!==e[r]){e[r]="O";break}}a.setState({board:e},a.setWinner)}},a.setWinner=function(){var e=a.calculateWinner();return a.asyncSetState({winner:e,isGameEnd:!!e})},a.calculateWinner=function(){for(var e=a.state.board,t=0,n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];t<n.length;t++){var r=n[t];if(e[r[0]]===e[r[1]]&&e[r[1]]===e[r[2]])return e[r[0]]}},a.state={board:Array(9).fill(null),winner:"",isGameEnd:!1},a}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"game",style:{width:"100%"},children:Object(a.jsxs)("div",{className:"game-board",style:{marginLeft:"auto",marginRight:"auto"},children:[Object(a.jsx)(x,{gameState:this.state.board,handleStateUpdate:this.handleStateUpdate,handleReset:this.handleReset}),Object(a.jsx)(S,{handleWinner:this.state.winner})]})})}}]),n}(s.a.Component);var g=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(p,{})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};c.a.render(Object(a.jsx)(g,{}),document.getElementById("root")),w()}},[[38,1,2]]]);
//# sourceMappingURL=main.5709cdb5.chunk.js.map