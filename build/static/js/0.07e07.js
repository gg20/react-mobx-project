webpackJsonp([0],{"./app/router/user/css.css":function(e,n){},"./app/router/user/index.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s,a,o=t("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),r=t.n(o),c=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),l=t.n(c),u=t("./node_modules/babel-runtime/helpers/createClass.js"),i=t.n(u),d=t("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=t.n(d),m=t("./node_modules/babel-runtime/helpers/inherits.js"),h=t.n(m),_=t("./node_modules/react/react.js"),b=t.n(_),f=t("./app/common/css/css.css"),j=t.n(f),v=t("./app/router/user/css.css"),k=(t.n(v),t("./app/common/component/nav/index.js")),y=t("./node_modules/mobx-react/index.js"),C=(t.n(y),(s=t.i(y.inject)("fetchData"))(a=t.i(y.observer)(a=function(e){function n(e){return l()(this,n),p()(this,(n.__proto__||r()(n)).call(this,e))}return h()(n,e),i()(n,[{key:"componentWillMount",value:function(){}},{key:"_addHandle",value:function(){(0,this.props.fetchData.fetchOperate)()}},{key:"_renderData",value:function(){var e=this.props.fetchData,n=e.data,t=e.state;return 0==t?"点击发送请求":1==t?"正在请求":2==t&&null!=n?n:-1==t?"请求出错":void 0}},{key:"render",value:function(){var e=this;return b.a.createElement("div",{className:j.a.container},b.a.createElement("div",{className:j.a.content,onClick:function(){e._addHandle()}},this._renderData()),b.a.createElement(k.a,null))}}]),n}(b.a.Component))||a)||a);n.default=C}});