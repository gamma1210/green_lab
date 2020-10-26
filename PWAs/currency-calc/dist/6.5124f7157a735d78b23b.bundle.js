(window.webpackJsonpEntryPoint=window.webpackJsonpEntryPoint||[]).push([[6],{82:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=l(a(0)),s=a(1),i=l(a(2));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={currencyFrom:e.currencyFrom,currencyTo:e.currencyTo,email:"",suscribeDaily:!1,suscribeWeekly:!1,suscribeTrigger:!1,suscribeTriggerPercent:1,sending:!1,timezoneOffset:(new Date).getTimezoneOffset(),siteId:a.site.id},n.handleEmailChange=n.handleEmailChange.bind(n),n.handleOptionChange=n.handleOptionChange.bind(n),n.handleTriggerPercentChange=n.handleTriggerPercentChange.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n.validationErrors=n.validationErrors.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),n(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({currencyFrom:e.currencyFrom,currencyTo:e.currencyTo})}},{key:"validationErrors",value:function(){var e=[];return(0,s.validateEmail)(this.state.email)||e.push("email"),this.state.suscribeDaily||this.state.suscribeWeekly||this.state.suscribeTrigger||e.push("select"),e}},{key:"handleChangeAny",value:function(e){this.resetMessage()}},{key:"handleEmailChange",value:function(e){this.handleChangeAny(e),this.setState({email:e.target.value})}},{key:"handleTriggerPercentChange",value:function(e){this.handleChangeAny(e),this.setState({suscribeTriggerPercent:e.target.value})}},{key:"handleOptionChange",value:function(e){var t,a,n;this.handleChangeAny(e),this.setState((t={},a=e.target.name,n=e.target.checked,a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t))}},{key:"resetMessage",value:function(){this.setState({messageType:null})}},{key:"handleSubmit",value:function(){if(this.resetMessage(),0==this.validationErrors().length){this.setState({sending:!0});var e=new XMLHttpRequest;e.open("POST","/subscriptions/insert",!0),e.setRequestHeader("Content-Type","application/json"),e.send(JSON.stringify(this.state)),e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){var t=JSON.parse(e.responseText);setTimeout(function(){this.setState({result:t.result,sending:!1,messageType:t.result,messageBody:r.default.createElement("span",null,r.default.createElement("img",{src:"/img/checkmark.svg",style:{width:"15px"}})," We've sent you a confirmation link. Please check your e-mail. ")})}.bind(this),1e3)}}.bind(this)}else this.setState({messageType:"error",messageBody:"Check your email and set a alert option"})}},{key:"render",value:function(){var e="alerts-button",t="Set rate alert";this.state.sending?(e="alerts-button alerts-button-sending",t=r.default.createElement("img",{src:"/img/reload.svg"})):0==this.validationErrors().length&&(e="alerts-button alerts-button-active");var a=this.state.currencyFrom.rate/this.state.currencyTo.rate,n=null;if("string"==typeof this.state.messageType&&this.state.messageType.length>0){var i="alerts-message alerts-message-"+this.state.messageType;n=r.default.createElement("div",{className:i},this.state.messageBody)}var l=null;return"success"!=this.state.result&&(l=r.default.createElement("div",null,r.default.createElement("div",{className:"sub-container-header sub-container-padding"},"Get rate alerts ",r.default.createElement("span",{className:"alerts-title-featured"},"(",this.state.currencyFrom.name," → ",this.state.currencyTo.name," exchange rate)")),r.default.createElement("div",{className:"sub-container-body sub-container-padding"},r.default.createElement("div",{className:"alerts-option-container-margin"},r.default.createElement("input",{className:"alerts-input-email",type:"text",value:this.state.email,onChange:this.handleEmailChange,name:"email",placeholder:"Your e-mail address"})),r.default.createElement("div",{className:"alerts-option-container"},r.default.createElement("div",null,r.default.createElement("input",{className:"alerts-option-checkbox",type:"checkbox",onChange:this.handleOptionChange,name:"suscribeTrigger",checked:this.state.suscribeTrigger})," "),r.default.createElement("div",null,r.default.createElement("div",{className:"alerts-option-title"},"Alert me if there's an important variation."),r.default.createElement("div",{className:"alerts-option-description"},"More than ",r.default.createElement("input",{className:"alerts-input-variation",value:this.state.suscribeTriggerPercent,onChange:this.handleTriggerPercentChange,size:"3"}),"% percent. (Example: ",this.state.currencyTo.code," = ",(0,s.number_format_calculator_currency)(this.state.currencyFrom,a)," ",this.state.currencyFrom.code," → ",r.default.createElement("span",{style:{color:"green"}},(0,s.number_format_calculator_currency)(this.state.currencyTo,a*(this.state.suscribeTriggerPercent/100+1))," ",this.state.currencyFrom.code),")"))),r.default.createElement("div",{className:"alerts-option-container"},r.default.createElement("div",null,r.default.createElement("input",{className:"alerts-option-checkbox",type:"checkbox",onChange:this.handleOptionChange,name:"suscribeWeekly",checked:this.state.suscribeWeekly})),r.default.createElement("div",null,r.default.createElement("div",{className:"alerts-option-title"},"Weekly"))),r.default.createElement("div",{className:"alerts-option-container"},r.default.createElement("div",null,r.default.createElement("input",{className:"alerts-option-checkbox",type:"checkbox",onChange:this.handleOptionChange,name:"suscribeDaily",checked:this.state.suscribeDaily})," "),r.default.createElement("div",null,r.default.createElement("div",{className:"alerts-option-title"},"Daily"))),r.default.createElement("button",{onClick:this.handleSubmit,className:e},t)))),r.default.createElement("div",{className:"sub-container sub-container-border no-print"},n,l)}}]),t}();c.contextType=i.default,t.default=c}}]);