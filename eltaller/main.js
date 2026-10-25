var c=function(e,t,r,o){var a=arguments.length,i=a<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)if(s=e[n])i=(a<3?s(i):a>3?s(t,r,i):s(t,r))||i;return a>3&&i&&Object.defineProperty(t,r,i),i};var xe=globalThis,Oe=xe.ShadowRoot&&(xe.ShadyCSS===void 0||xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Be=Symbol(),Ct=new WeakMap;class Ve{constructor(e,t,r){if(this._$cssResult$=!0,r!==Be)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=t}get styleSheet(){let e=this._styleSheet,t=this._strings;if(Oe&&e===void 0){let r=t!==void 0&&t.length===1;if(r)e=Ct.get(t);if(e===void 0){if((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),r)Ct.set(t,e)}}return e}toString(){return this.cssText}}var wr=(e)=>{if(e._$cssResult$===!0)return e.cssText;else if(typeof e==="number")return e;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},_r=(e)=>new Ve(typeof e==="string"?e:String(e),void 0,Be),w=(e,...t)=>{let r=e.length===1?e[0]:t.reduce((o,a,i)=>o+wr(a)+e[i+1],e[0]);return new Ve(r,e,Be)},At=(e,t)=>{if(Oe)e.adoptedStyleSheets=t.map((r)=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of t){let o=document.createElement("style"),a=xe.litNonce;if(a!==void 0)o.setAttribute("nonce",a);o.textContent=r.cssText,e.appendChild(o)}},kr=(e)=>{let t="";for(let r of e.cssRules)t+=r.cssText;return _r(t)},De=Oe?(e)=>e:(e)=>e instanceof CSSStyleSheet?kr(e):e;var{is:Er,defineProperty:Sr,getOwnPropertyDescriptor:$t,getOwnPropertyNames:Cr,getOwnPropertySymbols:Ar,getPrototypeOf:zt}=Object,$r=!1,P=globalThis;if($r)P.customElements??=customElements;var R=!0,D,Tt=P.trustedTypes,zr=Tt?Tt.emptyScript:"",Rt=R?P.reactiveElementPolyfillSupportDevMode:P.reactiveElementPolyfillSupport;if(R)P.litIssuedWarnings??=new Set,D=(e,t)=>{if(t+=` See https://lit.dev/msg/${e} for more information.`,!P.litIssuedWarnings.has(t)&&!P.litIssuedWarnings.has(e))console.warn(t),P.litIssuedWarnings.add(t)},queueMicrotask(()=>{if(D("dev-mode","Lit is in dev mode. Not recommended for production!"),P.ShadyDOM?.inUse&&Rt===void 0)D("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var Tr=R?(e)=>{if(!P.emitLitDebugLogEvents)return;P.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))}:void 0,te=(e,t)=>e,ie={toAttribute(e,t){switch(t){case Boolean:e=e?zr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e);break}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(o){r=null}break}return r}},we=(e,t)=>!Er(e,t),Pt={attribute:!0,type:String,converter:ie,reflect:!1,useDefault:!1,hasChanged:we};Symbol.metadata??=Symbol("metadata");P.litPropertyMetadata??=new WeakMap;class M extends HTMLElement{static addInitializer(e){this.__prepare(),(this._initializers??=[]).push(e)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(e,t=Pt){if(t.state)t.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(e))t=Object.create(t),t.wrapped=!0;if(this.elementProperties.set(e,t),!t.noAccessor){let r=R?Symbol.for(`${String(e)} (@property() cache)`):Symbol(),o=this.getPropertyDescriptor(e,r,t);if(o!==void 0)Sr(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){let{get:o,set:a}=$t(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};if(R&&o==null){if("value"in($t(this.prototype,e)??{}))throw Error(`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);D("reactive-property-without-getter",`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:o,set(i){let s=o?.call(this);a?.call(this,i),this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Pt}static __prepare(){if(this.hasOwnProperty(te("elementProperties",this)))return;let e=zt(this);if(e.finalize(),e._initializers!==void 0)this._initializers=[...e._initializers];this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(te("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(te("properties",this))){let t=this.properties,r=[...Cr(t),...Ar(t)];for(let o of r)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,o]of t)this.elementProperties.set(r,o)}this.__attributeToPropertyMap=new Map;for(let[t,r]of this.elementProperties){let o=this.__attributeNameForProperty(t,r);if(o!==void 0)this.__attributeToPropertyMap.set(o,t)}if(this.elementStyles=this.finalizeStyles(this.styles),R){if(this.hasOwnProperty("createProperty"))D("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))D("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let o of r)t.unshift(De(o))}else if(e!==void 0)t.push(De(e));return t}static __attributeNameForProperty(e,t){let r=t.attribute;return r===!1?void 0:typeof r==="string"?r:typeof e==="string"?e.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((e)=>this.enableUpdating=e),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((e)=>e(this))}addController(e){if((this.__controllers??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected)e.hostConnected?.()}removeController(e){this.__controllers?.delete(e)}__saveInstanceProperties(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())if(this.hasOwnProperty(r))e.set(r,this[r]),delete this[r];if(e.size>0)this.__instanceProperties=e}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return At(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((e)=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this.__controllers?.forEach((e)=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$attributeToProperty(e,r)}__propertyToAttribute(e,t){let o=this.constructor.elementProperties.get(e),a=this.constructor.__attributeNameForProperty(e,o);if(a!==void 0&&o.reflect===!0){let s=(o.converter?.toAttribute!==void 0?o.converter:ie).toAttribute(t,o.type);if(R&&this.constructor.enabledWarnings.includes("migration")&&s===void 0)D("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=e,s==null)this.removeAttribute(a);else this.setAttribute(a,s);this.__reflectingProperty=null}}_$attributeToProperty(e,t){let r=this.constructor,o=r.__attributeToPropertyMap.get(e);if(o!==void 0&&this.__reflectingProperty!==o){let a=r.getPropertyOptions(o),i=typeof a.converter==="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:ie;this.__reflectingProperty=o;let s=i.fromAttribute(t,a.type);this[o]=s??this.__defaultValues?.get(o)??s,this.__reflectingProperty=null}}requestUpdate(e,t,r,o=!1,a){if(e!==void 0){if(R&&e instanceof Event)D("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let i=this.constructor;if(o===!1)a=this[e];if(r??=i.getPropertyOptions(e),(r.hasChanged??we)(a,t)||r.useDefault&&r.reflect&&a===this.__defaultValues?.get(e)&&!this.hasAttribute(i.__attributeNameForProperty(e,r)))this._$changeProperty(e,t,r);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(e,t,{useDefault:r,reflect:o,wrapped:a},i){if(r&&!(this.__defaultValues??=new Map).has(e)){if(this.__defaultValues.set(e,i??t??this[e]),a!==!0||i!==void 0)return}if(!this._$changedProperties.has(e)){if(!this.hasUpdated&&!r)t=void 0;this._$changedProperties.set(e,t)}if(o===!0&&this.__reflectingProperty!==e)(this.__reflectingProperties??=new Set).add(e)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();if(e!=null)await e;return!this.isUpdatePending}scheduleUpdate(){let e=this.performUpdate();if(R&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof e?.then==="function")D("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return e}performUpdate(){if(!this.isUpdatePending)return;if(Tr?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),R){let a=[...this.constructor.elementProperties.keys()].filter((i)=>this.hasOwnProperty(i)&&(i in zt(this)));if(a.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${a.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[o,a]of this.__instanceProperties)this[o]=a;this.__instanceProperties=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,a]of r){let{wrapped:i}=a,s=this[o];if(i===!0&&!this._$changedProperties.has(o)&&s!==void 0)this._$changeProperty(o,void 0,a,s)}}let e=!1,t=this._$changedProperties;try{if(e=this.shouldUpdate(t),e)this.willUpdate(t),this.__controllers?.forEach((r)=>r.hostUpdate?.()),this.update(t);else this.__markUpdated()}catch(r){throw e=!1,this.__markUpdated(),r}if(e)this._$didUpdate(t)}willUpdate(e){}_$didUpdate(e){if(this.__controllers?.forEach((t)=>t.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(e);if(this.updated(e),R&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))D("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties&&=this.__reflectingProperties.forEach((t)=>this.__propertyToAttribute(t,this[t])),this.__markUpdated()}updated(e){}firstUpdated(e){}}M.elementStyles=[];M.shadowRootOptions={mode:"open"};M[te("elementProperties",M)]=new Map;M[te("finalized",M)]=new Map;Rt?.({ReactiveElement:M});if(R){M.enabledWarnings=["change-in-update","async-perform-update"];let e=function(t){if(!t.hasOwnProperty(te("enabledWarnings",t)))t.enabledWarnings=t.enabledWarnings.slice()};M.enableWarning=function(t){if(e(this),!this.enabledWarnings.includes(t))this.enabledWarnings.push(t)},M.disableWarning=function(t){e(this);let r=this.enabledWarnings.indexOf(t);if(r>=0)this.enabledWarnings.splice(r,1)}}(P.reactiveElementVersions??=[]).push("2.1.2");if(R&&P.reactiveElementVersions.length>1)queueMicrotask(()=>{D("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var O=globalThis,v=(e)=>{if(!O.emitLitDebugLogEvents)return;O.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))},Pr=0,le;O.litIssuedWarnings??=new Set,le=(e,t)=>{if(t+=e?` See https://lit.dev/msg/${e} for more information.`:"",!O.litIssuedWarnings.has(t)&&!O.litIssuedWarnings.has(e))console.warn(t),O.litIssuedWarnings.add(t)},queueMicrotask(()=>{le("dev-mode","Lit is in dev mode. Not recommended for production!")});var N=O.ShadyDOM?.inUse&&O.ShadyDOM?.noPatch===!0?O.ShadyDOM.wrap:(e)=>e,_e=O.trustedTypes,Mt=_e?_e.createPolicy("lit-html",{createHTML:(e)=>e}):void 0,Rr=(e)=>e,Ce=(e,t,r)=>Rr,Mr=(e)=>{if(G!==Ce)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");G=e},Or=()=>{G=Ce},Le=(e,t,r)=>G(e,t,r),jt="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,It="?"+I,Br=`<${It}>`,Y=document,ce=()=>Y.createComment(""),de=(e)=>e===null||typeof e!="object"&&typeof e!="function",qe=Array.isArray,Vr=(e)=>qe(e)||typeof e?.[Symbol.iterator]==="function",Ne=`[ 	
\f\r]`,Dr=`[^ 	
\f\r"'\`<>=]`,Nr=`[^\\s"'>=/]`,se=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ot=1,Fe=2,Fr=3,Bt=/-->/g,Vt=/>/g,q=new RegExp(`>|${Ne}(?:(${Nr}+)(${Ne}*=${Ne}*(?:${Dr}|("|')|))|$)`,"g"),jr=0,Dt=1,Ir=2,Nt=3,je=/'/g,Ie=/"/g,Lt=/^(?:script|style|textarea|title)$/i,Lr=1,ke=2,Ee=3,Ue=1,Se=2,qr=3,Ur=4,Hr=5,He=6,Wr=7,We=(e)=>(t,...r)=>{if(t.some((o)=>o===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(r.some((o)=>o?._$litStatic$))le("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:e,strings:t,values:r}},p=We(Lr),fo=We(ke),vo=We(Ee),K=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),Ft=new WeakMap,W=Y.createTreeWalker(Y,129),G=Ce;function qt(e,t){if(!qe(e)||!e.hasOwnProperty("raw")){let r="invalid template strings array";throw r=`
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g,`
`),Error(r)}return Mt!==void 0?Mt.createHTML(t):t}var Yr=(e,t)=>{let r=e.length-1,o=[],a=t===ke?"<svg>":t===Ee?"<math>":"",i,s=se;for(let l=0;l<r;l++){let d=e[l],m=-1,h,y=0,g;while(y<d.length){if(s.lastIndex=y,g=s.exec(d),g===null)break;if(y=s.lastIndex,s===se){if(g[Ot]==="!--")s=Bt;else if(g[Ot]!==void 0)s=Vt;else if(g[Fe]!==void 0){if(Lt.test(g[Fe]))i=new RegExp(`</${g[Fe]}`,"g");s=q}else if(g[Fr]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(s===q)if(g[jr]===">")s=i??se,m=-1;else if(g[Dt]===void 0)m=-2;else m=s.lastIndex-g[Ir].length,h=g[Dt],s=g[Nt]===void 0?q:g[Nt]==='"'?Ie:je;else if(s===Ie||s===je)s=q;else if(s===Bt||s===Vt)s=se;else s=q,i=void 0}console.assert(m===-1||s===q||s===je||s===Ie,"unexpected parse state B");let T=s===q&&e[l+1].startsWith("/>")?" ":"";a+=s===se?d+Br:m>=0?(o.push(h),d.slice(0,m)+jt+d.slice(m))+I+T:d+I+(m===-2?l:T)}let n=a+(e[r]||"<?>")+(t===ke?"</svg>":t===Ee?"</math>":"");return[qt(e,n),o]};class pe{constructor({strings:e,["_$litType$"]:t},r){this.parts=[];let o,a=0,i=0,s=e.length-1,n=this.parts,[l,d]=Yr(e,t);if(this.el=pe.createElement(l,r),W.currentNode=this.el.content,t===ke||t===Ee){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}while((o=W.nextNode())!==null&&n.length<s){if(o.nodeType===1){{let m=o.localName;if(/^(?:textarea|template)$/i.test(m)&&o.innerHTML.includes(I)){let h=`Expressions are not supported inside \`${m}\` elements. See https://lit.dev/msg/expression-in-${m} for more information.`;if(m==="template")throw Error(h);else le("",h)}}if(o.hasAttributes()){for(let m of o.getAttributeNames())if(m.endsWith(jt)){let h=d[i++],g=o.getAttribute(m).split(I),T=/([.?@])?(.*)/.exec(h);n.push({type:Ue,index:a,name:T[2],strings:g,ctor:T[1]==="."?Ht:T[1]==="?"?Wt:T[1]==="@"?Yt:ue}),o.removeAttribute(m)}else if(m.startsWith(I))n.push({type:He,index:a}),o.removeAttribute(m)}if(Lt.test(o.tagName)){let m=o.textContent.split(I),h=m.length-1;if(h>0){o.textContent=_e?_e.emptyScript:"";for(let y=0;y<h;y++)o.append(m[y],ce()),W.nextNode(),n.push({type:Se,index:++a});o.append(m[h],ce())}}}else if(o.nodeType===8)if(o.data===It)n.push({type:Se,index:a});else{let h=-1;while((h=o.data.indexOf(I,h+1))!==-1)n.push({type:Wr,index:a}),h+=I.length-1}a++}if(d.length!==i)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+e.join("${...}")+"`");v&&v({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,t){let r=Y.createElement("template");return r.innerHTML=e,r}}function re(e,t,r=e,o){if(t===K)return t;let a=o!==void 0?r.__directives?.[o]:r.__directive,i=de(t)?void 0:t._$litDirective$;if(a?.constructor!==i){if(a?._$notifyDirectiveConnectionChanged?.(!1),i===void 0)a=void 0;else a=new i(e),a._$initialize(e,r,o);if(o!==void 0)(r.__directives??=[])[o]=a;else r.__directive=a}if(a!==void 0)t=re(e,a._$resolve(e,t.values),a,o);return t}class Ut{constructor(e,t){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=t}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){let{el:{content:t},parts:r}=this._$template,o=(e?.creationScope??Y).importNode(t,!0);W.currentNode=o;let a=W.nextNode(),i=0,s=0,n=r[0];while(n!==void 0){if(i===n.index){let l;if(n.type===Se)l=new me(a,a.nextSibling,this,e);else if(n.type===Ue)l=new n.ctor(a,n.name,n.strings,this,e);else if(n.type===He)l=new Kt(a,this,e);this._$parts.push(l),n=r[++s]}if(i!==n?.index)a=W.nextNode(),i++}return W.currentNode=Y,o}_update(e){let t=0;for(let r of this._$parts){if(r!==void 0)if(v&&v({kind:"set part",part:r,value:e[t],valueIndex:t,values:e,templateInstance:this}),r.strings!==void 0)r._$setValue(e,r,t),t+=r.strings.length-2;else r._$setValue(e[t]);t++}}}class me{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(e,t,r,o){this.type=Se,this._$committedValue=C,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=t,this._$parent=r,this.options=o,this.__isConnected=o?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let e=N(this._$startNode).parentNode,t=this._$parent;if(t!==void 0&&e?.nodeType===11)e=t.parentNode;return e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,t=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(e=re(this,e,t),de(e)){if(e===C||e==null||e===""){if(this._$committedValue!==C)v&&v({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=C}else if(e!==this._$committedValue&&e!==K)this._commitText(e)}else if(e._$litType$!==void 0)this._commitTemplateResult(e);else if(e.nodeType!==void 0){if(this.options?.host===e){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",e,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(e)}else if(Vr(e))this._commitIterable(e);else this._commitText(e)}_insert(e){return N(N(this._$startNode).parentNode).insertBefore(e,this._$endNode)}_commitNode(e){if(this._$committedValue!==e){if(this._$clear(),G!==Ce){let t=this._$startNode.parentNode?.nodeName;if(t==="STYLE"||t==="SCRIPT"){let r="Forbidden";if(t==="STYLE")r="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else r="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(r)}}v&&v({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==C&&de(this._$committedValue)){let t=N(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=Le(t,"data","property");e=this._textSanitizer(e),v&&v({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}else{let t=Y.createTextNode("");if(this._commitNode(t),this._textSanitizer===void 0)this._textSanitizer=Le(t,"data","property");e=this._textSanitizer(e),v&&v({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}this._$committedValue=e}_commitTemplateResult(e){let{values:t,["_$litType$"]:r}=e,o=typeof r==="number"?this._$getTemplate(e):(r.el===void 0&&(r.el=pe.createElement(qt(r.h,r.h[0]),this.options)),r);if(this._$committedValue?._$template===o)v&&v({kind:"template updating",template:o,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:t}),this._$committedValue._update(t);else{let a=new Ut(o,this),i=a._clone(this.options);v&&v({kind:"template instantiated",template:o,instance:a,parts:a._$parts,options:this.options,fragment:i,values:t}),a._update(t),v&&v({kind:"template instantiated and updated",template:o,instance:a,parts:a._$parts,options:this.options,fragment:i,values:t}),this._commitNode(i),this._$committedValue=a}}_$getTemplate(e){let t=Ft.get(e.strings);if(t===void 0)Ft.set(e.strings,t=new pe(e));return t}_commitIterable(e){if(!qe(this._$committedValue))this._$committedValue=[],this._$clear();let t=this._$committedValue,r=0,o;for(let a of e){if(r===t.length)t.push(o=new me(this._insert(ce()),this._insert(ce()),this,this.options));else o=t[r];o._$setValue(a),r++}if(r<t.length)this._$clear(o&&N(o._$endNode).nextSibling,r),t.length=r}_$clear(e=N(this._$startNode).nextSibling,t){this._$notifyConnectionChanged?.(!1,!0,t);while(e!==this._$endNode){let r=N(e).nextSibling;N(e).remove(),e=r}}setConnected(e){if(this._$parent===void 0)this.__isConnected=e,this._$notifyConnectionChanged?.(e);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class ue{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(e,t,r,o,a){if(this.type=Ue,this._$committedValue=C,this._$disconnectableChildren=void 0,this.element=e,this.name=t,this._$parent=o,this.options=a,r.length>2||r[0]!==""||r[1]!=="")this._$committedValue=Array(r.length-1).fill(new String),this.strings=r;else this._$committedValue=C;this._sanitizer=void 0}_$setValue(e,t=this,r,o){let a=this.strings,i=!1;if(a===void 0){if(e=re(this,e,t,0),i=!de(e)||e!==this._$committedValue&&e!==K,i)this._$committedValue=e}else{let s=e;e=a[0];let n,l;for(n=0;n<a.length-1;n++){if(l=re(this,s[r+n],t,n),l===K)l=this._$committedValue[n];if(i||=!de(l)||l!==this._$committedValue[n],l===C)e=C;else if(e!==C)e+=(l??"")+a[n+1];this._$committedValue[n]=l}}if(i&&!o)this._commitValue(e)}_commitValue(e){if(e===C)N(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=G(this.element,this.name,"attribute");e=this._sanitizer(e??""),v&&v({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),N(this.element).setAttribute(this.name,e??"")}}}class Ht extends ue{constructor(){super(...arguments);this.type=qr}_commitValue(e){if(this._sanitizer===void 0)this._sanitizer=G(this.element,this.name,"property");e=this._sanitizer(e),v&&v({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===C?void 0:e}}class Wt extends ue{constructor(){super(...arguments);this.type=Ur}_commitValue(e){v&&v({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(e&&e!==C),options:this.options}),N(this.element).toggleAttribute(this.name,!!e&&e!==C)}}class Yt extends ue{constructor(e,t,r,o,a){super(e,t,r,o,a);if(this.type=Hr,this.strings!==void 0)throw Error(`A \`<${e.localName}>\` has a \`@${t}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,t=this){if(e=re(this,e,t,0)??C,e===K)return;let r=this._$committedValue,o=e===C&&r!==C||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==C&&(r===C||o);if(v&&v({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:o,addListener:a,oldListener:r}),o)this.element.removeEventListener(this.name,this,r);if(a)this.element.addEventListener(this.name,this,e);this._$committedValue=e}handleEvent(e){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,e);else this._$committedValue.handleEvent(e)}}class Kt{constructor(e,t,r){this.element=e,this.type=He,this._$disconnectableChildren=void 0,this._$parent=t,this.options=r}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){v&&v({kind:"commit to element binding",element:this.element,value:e,options:this.options}),re(this,e)}}var Kr=O.litHtmlPolyfillSupportDevMode;Kr?.(pe,me);(O.litHtmlVersions??=[]).push("3.3.3");if(O.litHtmlVersions.length>1)queueMicrotask(()=>{le("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var ne=(e,t,r)=>{if(t==null)throw TypeError(`The container to render into may not be ${t}`);let o=Pr++,a=r?.renderBefore??t,i=a._$litPart$;if(v&&v({kind:"begin render",id:o,value:e,container:t,options:r,part:i}),i===void 0){let s=r?.renderBefore??null;a._$litPart$=i=new me(t.insertBefore(ce(),s),s,void 0,r??{})}return i._$setValue(e),v&&v({kind:"end render",id:o,value:e,container:t,options:r,part:i}),i};ne.setSanitizer=Mr,ne.createSanitizer=Le,ne._testOnlyClearSanitizerFactoryDoNotCallOrElse=Or;var Gr=(e,t)=>e,Ye=!0,L=globalThis,Gt;if(Ye)L.litIssuedWarnings??=new Set,Gt=(e,t)=>{if(t+=` See https://lit.dev/msg/${e} for more information.`,!L.litIssuedWarnings.has(t)&&!L.litIssuedWarnings.has(e))console.warn(t),L.litIssuedWarnings.add(t)};class f extends M{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(e),this.__childPart=ne(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return K}}f._$litElement$=!0;f[Gr("finalized",f)]=!0;L.litElementHydrateSupport?.({LitElement:f});var Xr=Ye?L.litElementPolyfillSupportDevMode:L.litElementPolyfillSupport;Xr?.({LitElement:f});(L.litElementVersions??=[]).push("4.2.2");if(Ye&&L.litElementVersions.length>1)queueMicrotask(()=>{Gt("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var _=(e)=>(t,r)=>{if(r!==void 0)r.addInitializer(()=>{customElements.define(e,t)});else customElements.define(e,t)};var Xt=!0,Jt;if(Xt)globalThis.litIssuedWarnings??=new Set,Jt=(e,t)=>{if(t+=` See https://lit.dev/msg/${e} for more information.`,!globalThis.litIssuedWarnings.has(t)&&!globalThis.litIssuedWarnings.has(e))console.warn(t),globalThis.litIssuedWarnings.add(t)};var Jr=(e,t,r)=>{let o=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),o?Object.getOwnPropertyDescriptor(t,r):void 0},Qr={attribute:!0,type:String,converter:ie,reflect:!1,hasChanged:we},Zr=(e=Qr,t,r)=>{let{kind:o,metadata:a}=r;if(Xt&&a==null)Jt("missing-class-metadata",`The class ${t} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let i=globalThis.litPropertyMetadata.get(a);if(i===void 0)globalThis.litPropertyMetadata.set(a,i=new Map);if(o==="setter")e=Object.create(e),e.wrapped=!0;if(i.set(r.name,e),o==="accessor"){let{name:s}=r;return{set(n){let l=t.get.call(this);t.set.call(this,n),this.requestUpdate(s,l,e,!0,n)},init(n){if(n!==void 0)this._$changeProperty(s,void 0,e,n);return n}}}else if(o==="setter"){let{name:s}=r;return function(n){let l=this[s];t.call(this,n),this.requestUpdate(s,l,e,!0,n)}}throw Error(`Unsupported decorator location: ${o}`)};function u(e){return(t,r)=>typeof r==="object"?Zr(e,t,r):Jr(e,t,r)}function S(e){return u({...e,state:!0,attribute:!1})}var U=(e,t,r)=>{if(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!=="object")Object.defineProperty(e,t,r);return r};var Ke=!0,Qt;if(Ke)globalThis.litIssuedWarnings??=new Set,Qt=(e,t)=>{if(t+=e?` See https://lit.dev/msg/${e} for more information.`:"",!globalThis.litIssuedWarnings.has(t)&&!globalThis.litIssuedWarnings.has(e))console.warn(t),globalThis.litIssuedWarnings.add(t)};function Zt(e,t){return(r,o,a)=>{let i=(s)=>{let n=s.renderRoot?.querySelector(e)??null;if(Ke&&n===null&&t&&!s.hasUpdated){let l=typeof o==="object"?o.name:o;Qt("",`@query'd field ${JSON.stringify(String(l))} with the 'cache' flag set for selector '${e}' has been accessed before the first update and returned null. This is expected if the renderRoot tree has not been provided beforehand (e.g. via Declarative Shadow DOM). Therefore the value hasn't been cached.`)}return n};if(t){let{get:s,set:n}=typeof o==="object"?r:a??(()=>{let l=Ke?Symbol(`${String(o)} (@query() cache)`):Symbol();return{get(){return this[l]},set(d){this[l]=d}}})();return U(r,o,{get(){let l=s.call(this);if(l===void 0){if(l=i(this),l!==null||this.hasUpdated)n.call(this,l)}return l}})}else return U(r,o,{get(){return i(this)}})}}var eo;function er(e){return(t,r)=>U(t,r,{get(){return(this.renderRoot??(eo??=document.createDocumentFragment())).querySelectorAll(e)}})}function Ae(e,t,r){let o=[];for(let a=e;a<=Math.min(t,r);a++)o.push(a);return o}var he=[{id:"soneto",nombre:"Soneto",descripcion:"Dos cuartetos y dos tercetos. Endecasílabos (11) con rima consonante y, por lo general, acento en la 10ª sílaba.",ejemplo:"Un soneto me manda hacer Violante…",modo:"fija",medidaPorVerso:11,silabasObjetivo:11,acentosObligatorios:[10],acentoSugerido:[6],tipoRima:"consonante",esquemaReferencia:"ABBA ABBA CDC DCD",estrofas:[{id:"cuarteto1",nombre:"Primer cuarteto",nVersos:4,tipo:"normal"},{id:"cuarteto2",nombre:"Segundo cuarteto",nVersos:4,tipo:"normal"},{id:"terceto1",nombre:"Primer terceto",nVersos:3,tipo:"normal"},{id:"terceto2",nombre:"Segundo terceto",nVersos:3,tipo:"normal"}],versosIniciales:14,versosMin:14,versosMax:14,medidaDescripcion:"Endecasílabos · 11 sílabas métricas"},{id:"romance",nombre:"Romance",descripcion:"Tirada de octosílabos (8) con rima asonante en los versos pares; los impares quedan libres. Sin estrofas: serie continua.",ejemplo:"—Conde Olinos, Conde Olinos…",modo:"serie",medidaPorVerso:8,silabasObjetivo:8,acentosObligatorios:[7],tipoRima:"asonante",esquemaReferencia:"-a-a (pares asonantes)",estrofas:[{id:"tirada",nombre:"Tirada",nVersos:0,tipo:"normal"}],versosIniciales:8,versosMin:4,versosMax:400,medidaDescripcion:"Octosílabos · 8 sílabas métricas"},{id:"letrilla",nombre:"Letrilla",descripcion:"Estribillo de dos versos que se repite tras cada copla; cada copla tiene 6 versos (mudanza de 4 y vuelta de 2 que enlaza con el estribillo). Octosílabos, con estribillo frecuentemente hexasílabo.",ejemplo:"A mis soledades voy, / de mis soledades vengo…",modo:"estrofa",medidaPorVerso:8,silabasObjetivo:8,acentosObligatorios:[7],tipoRima:"asonante",esquemaReferencia:"AB cddcab",estrofas:[{id:"estribillo",nombre:"Estribillo",nVersos:2,tipo:"estribillo",medidaObjetivo:6,acentos:[5]},{id:"copla",nombre:"Copla",nVersos:6,tipo:"normal"}],estrofaRepetible:!0,versosIniciales:8,versosMin:8,versosMax:50,medidaDescripcion:"Octosílabos · 8 (estribillo 8/6)"},{id:"decima",nombre:"Décima (Espinela)",descripcion:"Décima espinela: diez octosílabos (8) con rima consonante abbaaccddc. Pausa estructural tras el 4º verso (el 5º inicia sentido nuevo).",ejemplo:"Yo, pues mirad si me aflijo…",modo:"fija",medidaPorVerso:8,silabasObjetivo:8,acentosObligatorios:[7],tipoRima:"consonante",esquemaReferencia:"abbaaccddc",estrofas:[{id:"espinela",nombre:"Décima",nVersos:10,tipo:"normal"}],versosIniciales:10,versosMin:10,versosMax:10,medidaDescripcion:"Octosílabos · 8 sílabas métricas"},{id:"octava",nombre:"Octava real",descripcion:"Ocho endecasílabos (11) por estancia con rima consonante ABABABCC: seis versos de rima alterna y un pareado final que cierra cada octava.",ejemplo:"Aquella voluntad honesta y pura, / ilustre y hermosísima María…",modo:"estrofa",medidaPorVerso:11,silabasObjetivo:11,acentosObligatorios:[10],acentoSugerido:[6],tipoRima:"consonante",esquemaReferencia:"ABABABCC",estrofas:[{id:"octava",nombre:"Octava",nVersos:8,tipo:"normal"}],estrofaRepetible:!0,versosIniciales:8,versosMin:8,versosMax:Number.MAX_SAFE_INTEGER,medidaDescripcion:"Endecasílabos · 11 sílabas métricas"},{id:"redondilla",nombre:"Redondilla",descripcion:"Cuatro octosílabos (8) con rima consonante abba.",ejemplo:"Quien bien ama tarde olvida…",modo:"fija",medidaPorVerso:8,silabasObjetivo:8,acentosObligatorios:[7],tipoRima:"consonante",esquemaReferencia:"abba",estrofas:[{id:"redondilla",nombre:"Redondilla",nVersos:4,tipo:"normal"}],versosIniciales:4,versosMin:4,versosMax:4,medidaDescripcion:"Octosílabos · 8 sílabas métricas"},{id:"cuarteta",nombre:"Cuarteta",descripcion:"Cuatro octosílabos (8) con rima consonante abab.",ejemplo:"No me mueve, mi Dios, para quererte…",modo:"fija",medidaPorVerso:8,silabasObjetivo:8,acentosObligatorios:[7],tipoRima:"consonante",esquemaReferencia:"abab",estrofas:[{id:"cuarteta",nombre:"Cuarteta",nVersos:4,tipo:"normal"}],versosIniciales:4,versosMin:4,versosMax:4,medidaDescripcion:"Octosílabos · 8 sílabas métricas"}];function F(e){return he.find((t)=>t.id===e)||he[0]}function tr(e,t,r){let o=r??e.versosIniciales;return Array.from({length:o},(a,i)=>({id:`${t}-v${i+1}`,numero:i+1,texto:""}))}function oe(e,t){let r=[...t].sort((i,s)=>i.numero-s.numero);if(e.modo==="serie"){let i=e.estrofas[0];return[{id:i?.id||"tirada",nombre:i?.nombre||"Tirada",tipo:i?.tipo||"normal",versos:r}]}if(e.modo==="estrofa"){let i=e.estrofas.slice(0,-1),s=e.estrofas[e.estrofas.length-1],n=[],l=0;for(let m of i){let h=Math.min(m.nVersos,r.length-l);if(h<=0)break;n.push({id:m.id,nombre:m.nombre,tipo:m.tipo,versos:r.slice(l,l+h)}),l+=h}let d=1;while(l<r.length&&s){let m=Math.min(s.nVersos,r.length-l);n.push({id:`${s.id}-${d}`,nombre:`${s.nombre} ${d}`,tipo:s.tipo,versos:r.slice(l,l+m)}),l+=m,d++}return n}let o=[],a=0;for(let i of e.estrofas){let s=Math.min(i.nVersos,r.length-a);if(s<=0)break;o.push({id:i.id,nombre:i.nombre,tipo:i.tipo,versos:r.slice(a,a+s)}),a+=s}return o}function $e(e,t){let r=Math.max(0,t);if(e.modo==="serie"){let i=[];for(let s=1;s<=r;s+=4)i.push(Ae(s,s+3,r));return i.filter((s)=>s.length>0)}if(e.modo==="estrofa"){let i=[],s=e.estrofas.slice(0,-1),n=e.estrofas[e.estrofas.length-1],l=1;for(let d of s)i.push(Ae(l,l+d.nVersos-1,r)),l+=d.nVersos;while(l<=r&&n)i.push(Ae(l,l+n.nVersos-1,r)),l+=n.nVersos;return i.filter((d)=>d.length>0)}let o=[],a=1;for(let i of e.estrofas)o.push(Ae(a,a+i.nVersos-1,r)),a+=i.nVersos;return o.filter((i)=>i.length>0)}function Ge(e){return{min:e.versosMin,max:e.versosMax}}function rr(e,t,r){let{silabasObjetivo:o,acentosObligatorios:a}=e;if(e.modo==="estrofa"){let i=e.estrofas.slice(0,-1),s=0;for(let n of i){if(t>s&&t<=s+n.nVersos){if(n.medidaObjetivo)o=n.medidaObjetivo,a=n.acentos??[o-1];break}s+=n.nVersos}}return{silabasObjetivo:o,acentosObligatorios:a,acentosSugeridos:e.acentoSugerido}}class Xe{constructor(){this.listeners=new Map}on(e,t){if(!this.listeners.has(e))this.listeners.set(e,new Set);this.listeners.get(e).add(t)}off(e,t){let r=this.listeners.get(e);if(r){if(r.delete(t),r.size===0)this.listeners.delete(e)}}emit(e,t){let r=this.listeners.get(e);if(r)for(let o of r)try{o(t)}catch(a){console.error(`[EventBus] Error in handler for '${String(e)}':`,a)}}clear(){this.listeners.clear()}}var X={CURRENT_SONETO:"el-taller:soneto-actual",HISTORY:"el-taller:historial",PREFERENCES:"el-taller:preferencias"};class Je{autoSave(e){try{let t=JSON.stringify({soneto:e,savedAt:Date.now()});localStorage.setItem(X.CURRENT_SONETO,t)}catch(t){console.warn("[Storage] Error al auto-guardar:",t)}}loadLastSoneto(){try{let e=localStorage.getItem(X.CURRENT_SONETO);if(!e)return null;let{soneto:t}=JSON.parse(e);return t}catch{return null}}saveToHistory(e){try{let t=this.loadHistory();if(t.unshift(e),t.length>20)t.pop();localStorage.setItem(X.HISTORY,JSON.stringify(t))}catch(t){console.warn("[Storage] Error al guardar historial:",t)}}loadHistory(){try{let e=localStorage.getItem(X.HISTORY);return e?JSON.parse(e):[]}catch{return[]}}savePreferences(e){try{localStorage.setItem(X.PREFERENCES,JSON.stringify(e))}catch{}}loadPreferences(){try{let e=localStorage.getItem(X.PREFERENCES);return e?JSON.parse(e):{}}catch{return{}}}getKeys(){return{...X}}}function or(e,t,r=!1){let o=null,a=!1;return(...i)=>{if(r&&!a)e(...i),a=!0;if(o!==null)clearTimeout(o);o=setTimeout(()=>{if(!r||a)e(...i);a=!1,o=null},t)}}var ge=new Set(["a","e","o","á","é","ó"]),Qe=new Set(["i","u","í","ú"]),J=new Set([...ge,...Qe]),ar=new Set(["ia","ie","io","ua","ue","uo","ai","ei","oi","au","eu","ou","iu","ui"]),ir=new Set(["iai","iei","uai","uei","iau","ueu"]),sr=new Set(["pr","pl","br","bl","fr","fl","gr","gl","kr","kl","cr","cl","dr","tr","tl","ch","ll","rr"]);var ro=[{tipo:"heroico",acentos:[6,10],descripcion:"Acento en 6ª y 10ª sílabas"},{tipo:"enfatico",acentos:[1,6,10],descripcion:"Acento en 1ª, 6ª y 10ª sílabas"},{tipo:"melodico",acentos:[3,6,10],descripcion:"Acento en 3ª, 6ª y 10ª sílabas"},{tipo:"safico",acentos:[4,8,10],descripcion:"Acento en 4ª, 8ª y 10ª sílabas"},{tipo:"dactilico",acentos:[4,7,10],descripcion:"Acento en 4ª, 7ª y 10ª sílabas"},{tipo:"anfibraquico",acentos:[2,5,8,10],descripcion:"Acento en 2ª, 5ª, 8ª y 10ª sílabas"}];function nr(e){if(!e.has(10))return;let t=[...ro].sort((r,o)=>o.acentos.length-r.acentos.length);for(let r of t){let o=new Set(r.acentos),a=!0;for(let i of o)if(!e.has(i)){a=!1;break}if(a)return r}return{tipo:"otro",acentos:[...e].sort(),descripcion:"Otra variante"}}class ve{silabearPalabra(e){if(!e)return[];let t=e.toLowerCase();if(t.length<=1)return[t];let r=[],o=0,a="";while(o<t.length){let i=t[o];if(fe(i)){let s=this.leerGrupoVocalico(t,o);if(a.length>0){if(a.length===1)r.push(a+s);else if(a.length===2)if(lr(a))r.push(a+s);else{if(r.length>0)r[r.length-1]+=a[0];else r.push(a[0]);r.push(a[1]+s)}else{let n=a.length>=2&&lr(a.slice(-2))?a.slice(-2):a.slice(-1),l=a.slice(0,a.length-n.length);if(r.length>0)r[r.length-1]+=l;else if(l.length>0)r.push(l);r.push(n+s)}a=""}else if(r.length===0)r.push(s);else r.push(s);o+=s.length}else if(/[bcdfghjklmnñpqrstvwxyzü]/i.test(i))a+=i,o++;else o++}if(a.length>0)if(r.length>0)r[r.length-1]+=a;else r.push(a);return r.filter((i)=>i.length>0)}normalizarVocal(e){return{"á":"a","é":"e","í":"i","ó":"o","ú":"u","ü":"u"}[e]||e}leerGrupoVocalico(e,t){if(t>=e.length)return"";let r=t+2<e.length?e.slice(t,t+3):"",o=t+1<e.length?e.slice(t,t+2):"",a=[...r].map((s)=>this.normalizarVocal(s)).join(""),i=[...o].map((s)=>this.normalizarVocal(s)).join("");if(a.length===3&&io(a))return r;if(i.length===2&&ao(i)){if(t>0){let s=e[t-1];if(Ze(s)&&(e[t]==="í"||e[t]==="ú"))return e[t]}if(e[t]==="í"||e[t]==="ú"){if(t+2<e.length){if(Ze(e[t+1])&&!fe(e[t+2]))return e[t]}if(t+1<e.length&&Ze(e[t+1])&&t+2>=e.length)return e[t]}return o}if(t>0){let s=e[t-1],n=e[t];if((n==="á"||n==="é"||n==="ó")&&oo(s))return n}return e[t]}leerGrupoConsonantico(e,t){let r="";while(t<e.length&&!fe(e[t]))r+=e[t],t++;return r}detectarSinalefas(e,t=[]){let r=[],o=[],a=0;for(let s=0;s<e.length;s++){let n=e[s];for(let l=0;l<n.length;l++)r.push(n[l]),a++}let i=0;for(let s=0;s<e.length-1;s++){let n=e[s],l=e[s+1],d=n[n.length-1],m=l[0],h=d.charAt(d.length-1),y=m.charAt(0),g=h==="y",T=y==="y"&&t[s+1]==="y";if((fe(h)||g)&&(fe(y)||y==="h"||T)){let A=i+n.length-1;o.push({silabaAnterior:A,silabaSiguiente:A+1,descartada:!1})}i+=n.length}return{silabas:r,sinalefas:o}}aplicarAcentoFinal(e,t){let r=this.determinarAcentoPalabra(t),o=e.length;switch(r){case"aguda":return o+1;case"esdrujula":return o-1;case"llana":default:return o}}determinarAcentoPalabra(e){let t=e.toLowerCase();if(/[áéíóú]/.test(t)){let o=this.silabearPalabra(t);if(o.length===0)return"llana";for(let a=0;a<o.length;a++)if(/[áéíóú]/.test(o[a])){if(a===o.length-1)return"aguda";if(a===o.length-2)return"llana";return"esdrujula"}}let r=t.charAt(t.length-1);if(r==="n"||r==="s"||/[aeiou]/.test(r))return"llana";return"aguda"}identificarTipoVerso(e,t){if(t!==11)return"no_endecasilabo";let r=new Set(e.map((a)=>a+1));return nr(r)?.tipo}encontrarSilabasTonicas(e){let t=[];for(let r of e)if(r.esAcentoEstrófico)t.push(r.index);return t}toggleSinalefa(e,t){let r=[...e.hiatoForzado];if(r.includes(t)){let o=r.indexOf(t);r.splice(o,1)}else r.push(t);return this.analizarVerso(e.texto,r)}analizarVerso(e,t=[],r){let o=r?.silabasObjetivo??11,a=r?.acentosObligatorios??[10],i=r?.acentosSugeridos??(o===11?[6]:[]),s=[],n=[],l=e.toLowerCase().trim();if(!l)return{texto:e,silabas:[],sinalefas:[],numSilabasMetricas:0,numSilabasFonologicas:0,acentoFinal:"llana",silabasTonicas:[],tipoVerso:void 0,errores:[{tipo:"num_silabas",mensaje:"Verso vacío"}],advertencias:[],hiatoForzado:[]};let d=l.replace(/[¿?!¡;:.,()\-"'«»]/g,"").trim(),m=d.split(/\s+/).filter((b)=>b.length>0);if(m.length===0)return{texto:e,silabas:[],sinalefas:[],numSilabasMetricas:0,numSilabasFonologicas:0,acentoFinal:"llana",silabasTonicas:[],tipoVerso:void 0,errores:[{tipo:"num_silabas",mensaje:"Verso vacío"}],advertencias:[],hiatoForzado:[]};let h=m.map((b)=>this.silabearPalabra(b)),{silabas:y,sinalefas:g}=this.detectarSinalefas(h,m),T=0,A=[],xt=d.replace(/h/g,""),Pe=0;for(let b of m)for(let V of b)Pe++;let x=e.toLowerCase(),E=0;for(let b=0;b<m.length;b++){let V=m[b],k=h[b],ye=x.indexOf(V,E);if(ye!==-1)E=ye;let kt=0,br=k.some((z)=>/[áéíóú]/.test(z)),ae=-1;if(br){for(let z=0;z<k.length;z++)if(/[áéíóú]/.test(k[z])){ae=z;break}}else if(k.length>=2){let z=V.charAt(V.length-1);if(z==="n"||z==="s"||/[aeiou]/.test(z))ae=k.length-2;else ae=k.length-1}else ae=0;for(let z=0;z<k.length;z++){let Et=k[z],Me=Et.toLowerCase(),St=E+kt,yr=St+Me.length;kt+=Me.length;let xr=/[áéíóú]/.test(Me)||z===ae;A.push({texto:Et,index:A.length,esAcentoEstrófico:xr,esSinalefa:!1,hiatoForzado:!1,charStart:St,charEnd:yr})}if(ye!==-1)E=ye+V.length;else E+=V.length}let j=[],ee=[];for(let b of g){let V=t.includes(b.silabaAnterior),k=t.includes(b.silabaSiguiente);if(V||k){if(A[b.silabaAnterior])A[b.silabaAnterior].hiatoForzado=!0;j.push({...b,descartada:!0})}else{if(ee.push({...b,descartada:!1}),j.push({...b,descartada:!1}),A[b.silabaAnterior])A[b.silabaAnterior].esSinalefa=!0;if(A[b.silabaSiguiente])A[b.silabaSiguiente].esSinalefa=!0}}let H=A.length,be=ee.length,B=H-be,fr=m[m.length-1],Re=this.determinarAcentoPalabra(fr);if(Re==="aguda")B+=1;else if(Re==="esdrujula")B-=1;let wt=this.encontrarSilabasTonicas(A),_t=wt.map((b)=>{let V=ee.filter((k)=>k.silabaSiguiente<=b).length;return b-V}),vr=this.identificarTipoVerso(_t,B);if(B!==o)s.push({tipo:"num_silabas",mensaje:`El verso tiene ${B} sílabas métricas (debería tener ${o})`});else{let b=new Set(_t.map((k)=>k+1));if(o===11&&a.length===1&&a[0]===10&&i.length===1&&i[0]===6){if(!b.has(10))s.push({tipo:"sin_acento_10a",mensaje:"Falta acento en la 10ª sílaba (obligatorio)"});if(!b.has(6))n.push({tipo:"sin_acento_6a",mensaje:"Falta acento en la 6ª sílaba (recomendado)"})}else{for(let k of a)if(!b.has(k))s.push({tipo:"sin_acento_obligatorio",posicion:k,mensaje:`Falta acento en la ${k}ª sílaba (obligatorio)`});for(let k of i){if(a.includes(k))continue;if(b.has(k))continue;n.push({tipo:"sin_acento_sugerido",posicion:k,mensaje:`Falta acento en la ${k}ª sílaba (recomendado)`})}}}return{texto:e,silabas:A,sinalefas:j,numSilabasMetricas:Math.max(0,B),numSilabasFonologicas:H,acentoFinal:Re,silabasTonicas:wt,tipoVerso:vr,errores:s,advertencias:n,hiatoForzado:t}}}function fe(e){return J.has(e.toLowerCase())}function Ze(e){return ge.has(e.toLowerCase())}function oo(e){return Qe.has(e.toLowerCase())}function ao(e){return ar.has(e.toLowerCase())}function io(e){return ir.has(e.toLowerCase())}function lr(e){return sr.has(e.toLowerCase())}class cr{constructor(){this.engine=new ve}analyze(e){let t=new Map;for(let r of e.payload.versos){let o=this.engine.analizarVerso(r.texto,r.hiatoForzado,r.opts);t.set(r.numero,o)}return Promise.resolve({type:"ANALYZE_RESULT",payload:t})}terminate(){}}function dr(){return new cr}var pr={"á":"a","é":"e","í":"i","ó":"o","ú":"u"};class Q{constructor(){this.metric=new ve}detectarRima(e){if(!e||!e.silabas||e.silabas.length===0)return;let t=e.silabas.filter((i)=>i.esAcentoEstrófico),r;if(t.length>0)r=t[t.length-1];else{let i=e.silabas.filter((s)=>!s.esSinalefa);r=i.length>=2?i[i.length-2]:i[i.length-1]}if(!r)return;let o=this.extraerTerminacion(e.texto,r),a=e.texto.trim().split(/\s+/).pop()||"";return{terminacionFonetica:o,claveCompleta:o,claveVocales:this.extraerClaveAsonante(a),letra:"",esConsonante:!0,versosRelacionados:[]}}obtenerClaves(e){return{completa:this.extraerTerminacionPalabra(e),vocales:this.extraerClaveAsonante(e)}}extraerTerminacion(e,t){let r=e.toLowerCase().replace(/[¿?!¡;:.,()\-"'«»]/g,"").trim(),o=r.split(/\s+/),a=o[o.length-1]||"";if(!a)return r;return this.extraerTerminacionPalabra(a)}extraerTerminacionPalabra(e){let t=e.toLowerCase(),r=t.match(/[áéíóú]/);if(r){let d=t.lastIndexOf(r[0]);return t.slice(d)}let o=[...t].filter((d)=>J.has(d));if(o.length===0)return t;let a=o[o.length-1],i=t.lastIndexOf(a),s=t.charAt(t.length-1);if(s!=="n"&&s!=="s"&&!J.has(s))return t.slice(i);let n=o.length>=2?o[o.length-2]:a,l=t.lastIndexOf(n);if(o.length>=2){let m=t.substring(0,t.lastIndexOf(a)).lastIndexOf(n);if(m>=0)return t.slice(m)}return t.slice(i)}extraerClaveAsonante(e){if(!e)return"";let t=e.toLowerCase().replace(/[¿?!¡;:.,()\-"'«»]/g,"").trim();if(!t)return"";let r=this.metric.silabearPalabra(t);if(r.length===0)return"";let o=this.indiceSilabaTonica(t,r);if(o<0)return"";let a=[];for(let i=o;i<r.length;i++){let s=[...r[i]].filter((l)=>J.has(l)).join(""),n=this.procesarGrupoVocalico(s);for(let l of n)a.push(pr[l]||l)}return a.join("")}esRimaConsonante(e,t){return e.toLowerCase()===t.toLowerCase()}esRimaAsonante(e,t){let r=this.extraerClaveAsonante(e),o=this.extraerClaveAsonante(t);return r!==""&&r===o}esRima(e,t,r){return r?this.esRimaConsonante(e,t):this.esRimaAsonante(e,t)}indiceSilabaTonica(e,t){for(let o=0;o<t.length;o++)if(/[áéíóú]/.test(t[o]))return o;if(t.length===1)return 0;let r=e.charAt(e.length-1);if(r==="n"||r==="s"||J.has(r))return t.length-2;return t.length-1}procesarGrupoVocalico(e){if(!e)return[];if(e.length===1)return[e];if([...e].filter((r)=>ge.has(r)).length>=2)return[...e];if(/[íú]/.test(e))return[...e];return[this.vocalMasAbierta(e)]}vocalMasAbierta(e){let t="",r=-1;for(let o of e){let a=pr[o]||o,i=a==="a"?3:a==="e"||a==="o"?2:1;if(i>r)r=i,t=o}return t}}class et{constructor(){this.rhymeEngine=new Q}detectarEsquema(e,t={}){let r=t.tipoRima??"consonante",a=t.forma==="romance",i=new Map;for(let x of e){let E=x.texto.trim();if(!E)continue;let j=E.split(/\s+/).pop()||"";if(!j)continue;i.set(x.numero,this.rhymeEngine.obtenerClaves(j))}let s=e.map((x)=>x.numero).sort((x,E)=>x-E),n=new Map,l=[],d=new Map,m=["A","B","C","D","E","F","G","H","I","J","K","L","M","N"],h=0;for(let x of s){let E=i.get(x);if(a){if(!E||x%2!==0||!E.vocales){if(n.set(x,"·"),!l.includes(x))l.push(x);continue}let be=`v:${E.vocales}`,B=d.get(be);if(!B)B=m[h++%m.length],d.set(be,B);n.set(x,B);continue}if(!E){if(n.set(x,"·"),!l.includes(x))l.push(x);continue}let j=r==="asonante"?E.vocales:E.completa,ee=r==="asonante"?`v:${j}`:`c:${j}`,H=d.get(ee);if(!H)H=m[h++%m.length],d.set(ee,H);n.set(x,H)}let y=new Map;for(let x of n.values())if(x!=="·")y.set(x,(y.get(x)||0)+1);for(let x of s){let E=n.get(x);if(E&&E!=="·"&&(y.get(E)||0)<2){if(n.set(x,"·"),!l.includes(x))l.push(x)}}let g=this.formatEsquema(n,t.grupos),{forma:T,nombre:A,esClasica:xt,aviso:Pe}=this.identificarForma(g,t.grupos,r);return{asignacion:n,patron:g,versosSueltos:l,esClasico:xt,nombreClasico:A,forma:T,aviso:Pe}}formatEsquema(e,t){return(t??[[1,2,3,4],[5,6,7,8],[9,10,11],[12,13,14]]).map((a)=>a.map((i)=>e.get(i)||"·").join("")).join(" ")}identificarForma(e,t,r="consonante"){let o=e.replace(/\s+/g," ").trim(),a=o.split(" ").join(""),i=(s,n,l,d)=>({forma:n,nombre:l,esClasica:s,esClasico:s,aviso:d});if(r!=="asonante"){let s=[{patron:"ABBA ABBA CDC DCD",nombre:"Soneto (Petrarquista)"},{patron:"ABBA ABBA CDE CDE",nombre:"Soneto"},{patron:"ABBA ABBA CDE DCE",nombre:"Soneto (variante)"},{patron:"ABBA ABBA CDE EDC",nombre:"Soneto (variante)"},{patron:"ABBA ABBA CDE DEC",nombre:"Soneto (variante)"},{patron:"ABBA ABBA CDE CED",nombre:"Soneto (variante)"},{patron:"ABBA ABBA CCD EED",nombre:"Soneto (variante)"},{patron:"ABAB ABAB CDC DCD",nombre:"Soneto isabelino (Shakespeare)"},{patron:"ABAB ABAB CDE CDE",nombre:"Soneto isabelino (variante)"}];for(let l of s)if(o===l.patron)return i(!0,"soneto",l.nombre);let n=o.split(" ");if(n.length===4){let[l,d,m,h]=n,y=(g)=>g.length===4&&g[0]===g[3]&&g[1]===g[2]&&g[0]!==g[1];if(y(l)&&y(d)&&l===d&&m.length===3&&h.length===3)return i(!0,"soneto","Soneto (variante libre)")}}if(a==="ABBA")return i(!0,"redondilla","Redondilla");if(a==="ABAB")return i(!0,"cuarteta","Cuarteta");if(a==="ABBAACCDDC")return i(!0,"decima","Décima (Espinela)");if(this.pareceOctava(o))return i(!0,"octava","Octava real");if(this.pareceOctavaImperfecta(o))return i(!1,"octava","Octava real (pareado reutilizado)","El pareado final debe usar una rima nueva (C ≠ A, B)");if(this.pareceRomance(a))return i(!0,"romance","Romance");if(this.pareceLetrilla(o))return i(!0,"letrilla","Letrilla");return i(!1)}pareceRomance(e){let t=e.split("");if(t.length<4)return!1;let r="",o=!1;for(let a=0;a<t.length;a++){let i=t[a];if((a+1)%2===0){if(i==="·")return!1;if(o=!0,!r)r=i;else if(i!==r)return!1}else if(i!=="·"&&i!=="-")return!1}return o&&r!==""}clasificarOctava(e){if(e.length!==8)return"no";let t=e[0],r=e[1],o=e[6];if(e[2]!==t||e[4]!==t)return"no";if(e[3]!==r||e[5]!==r)return"no";if(e[7]!==o)return"no";if(t===r)return"no";if(o===t||o===r)return"imperfecta";return"perfecta"}pareceOctava(e){let t=e.split(" ").filter(Boolean),r=e.split(" ").join("");if(t.length>=1&&t.every((o)=>this.clasificarOctava(o)==="perfecta"))return!0;if(r.length>=1&&this.clasificarOctava(r)==="perfecta")return!0;return!1}pareceOctavaImperfecta(e){let t=e.split(" ").filter(Boolean),r=e.split(" ").join("");if(t.length>=1&&t.every((o)=>this.clasificarOctava(o)==="imperfecta"))return!0;if(r.length>=1&&this.clasificarOctava(r)==="imperfecta")return!0;return!1}pareceLetrilla(e){let t=e.split(" ").filter(Boolean);if(t.length<3)return!1;let r=t[0];if(!r||r.includes("·")&&r.length<=1)return!1;if(r.includes("·"))return!1;if(r.length<2||r.length>4)return!1;let o=t[1].length;if(o!==6)return!1;for(let a of t.slice(2))if(a.length!==o)return!1;return!0}}class tt{constructor(e){this.pendingAnalysis=!1;this.forma={id:"soneto"};this.lastAnalysis=new Map;this.dirtyVersos=new Set;this.textosVersos=new Map;this.hiatosForzados=new Map;this.scheduleAnalysis=or(()=>{this.runAnalysis()},300);this.analyzer=dr(),this.rhymeEngine=new Q,this.schemeEngine=new et,this.eventBus=e,this.eventBus.on("verso:input",({numero:t,texto:r})=>{this.textosVersos.set(t,r),this.dirtyVersos.add(t),this.scheduleAnalysis()}),this.eventBus.on("hiato:toggle",({numero:t,silabaIndex:r})=>{let o=this.hiatosForzados.get(t)||[],a=o.indexOf(r);if(a>=0)o.splice(a,1);else o.push(r);this.hiatosForzados.set(t,o),this.dirtyVersos.add(t),this.scheduleAnalysis()})}setForma(e){this.forma=e,this.forceReanalyze()}async runAnalysis(){if(this.pendingAnalysis||this.dirtyVersos.size===0)return;this.pendingAnalysis=!0;let e=[...this.dirtyVersos];this.eventBus.emit("analysis:start",{versos:e});try{let t=Math.max(...this.textosVersos.keys(),0),r=$e(this.forma,t),o=e.map((n)=>{let l=rr(this.forma,n,t);return{numero:n,texto:this.textosVersos.get(n)||"",hiatoForzado:this.hiatosForzados.get(n)||[],opts:l}}),a=await this.analyzer.analyze({type:"ANALYZE",payload:{versos:o}});for(let[n,l]of a.payload)this.lastAnalysis.set(n,l);let s=[...this.textosVersos.keys()].sort((n,l)=>n-l).map((n)=>({id:String(n),numero:n,texto:this.textosVersos.get(n)||"",analysis:this.lastAnalysis.get(n)}));this.lastEsquema=this.schemeEngine.detectarEsquema(s,{tipoRima:this.forma.tipoRima,forma:this.forma.id,grupos:r}),this.eventBus.emit("analysis:complete",{analysis:this.lastAnalysis,esquema:this.lastEsquema}),this.dirtyVersos.clear()}catch(t){console.error("[AnalysisService] Error en análisis:",t),this.eventBus.emit("ui:toast",{message:"Error al analizar el verso",level:"error"})}finally{this.pendingAnalysis=!1}}loadVersos(e){for(let t of e)this.textosVersos.set(t.numero,t.texto),this.dirtyVersos.add(t.numero);this.scheduleAnalysis()}reset(){this.lastAnalysis.clear(),this.textosVersos.clear(),this.hiatosForzados.clear(),this.dirtyVersos.clear(),this.lastEsquema=void 0}getAnalysis(e){return this.lastAnalysis.get(e)}getEsquema(){return this.lastEsquema}forceReanalyze(){for(let e of this.textosVersos.keys())this.dirtyVersos.add(e);this.scheduleAnalysis()}destroy(){this.analyzer.terminate()}}class rt{constructor(e,t,r){this.dirtyVersos=new Set;this.lastSoneto=null;this.eventBus=e,this.storage=t,this.getCurrentSoneto=r,this.eventBus.on("verso:input",({numero:o})=>{this.dirtyVersos.add(o)}),this.eventBus.on("verso:blur",()=>{this.flush()}),window.addEventListener("beforeunload",()=>{this.flush(!0)}),setInterval(()=>{if(this.dirtyVersos.size>0)this.flush()},30000)}flush(e=!1){if(this.dirtyVersos.size===0)return;let t=this.getCurrentSoneto();if(t){if(e)try{let r=JSON.stringify({soneto:t,savedAt:Date.now()});localStorage.setItem("el-taller:soneto-actual",r)}catch{}else this.storage.autoSave(t);this.lastSoneto=t}this.dirtyVersos.clear()}saveNow(){this.flush()}destroy(){this.flush()}}function ur(e){let t="";for(let r of e){let o=r.charCodeAt(0);if(o===40||o===41||o===92)t+="\\"+r;else if(o>=32&&o<=126)t+=r;else if(o>=161&&o<=255)t+="\\"+o.toString(8);else t+="?"}return t}var Te=595.28,hr=841.89,ze=72,ot=Te/2;function mr(e,t,r){let o=e.length*r*0.55,a=ot-o/2;return`1 0 0 1 ${Math.max(ze,Math.min(a,Te-ze-o)).toFixed(2)} ${t.toFixed(2)} Tm
(${ur(e)}) Tj`}function so(e){let t=F(e.forma??"soneto"),r=e.versos.map((a,i)=>({id:String(i+1),numero:i+1,texto:a.texto})),o=oe(t,r);if(t.modo==="serie"){let a=o.flatMap((s)=>s.versos.map((n)=>n.texto)).filter((s)=>s.trim()),i=[];for(let s=0;s<a.length;s+=4)i.push(a.slice(s,s+4));return i.filter((s)=>s.length>0)}if(t.modo==="estrofa"){if(t.estrofas.length<=1)return o.map((l)=>l.versos.map((d)=>d.texto).filter((d)=>d.trim())).filter((l)=>l.length>0);let a=o[0],i=o.slice(1),s=a?.versos.map((l)=>l.texto).filter((l)=>l.trim())??[],n=[];if(s.length>0)n.push(s);for(let l of i){let d=l.versos.map((m)=>m.texto).filter((m)=>m.trim());if(d.length>0)n.push(d);if(s.length>0)n.push(s)}return n}return o.map((a)=>a.versos.map((i)=>i.texto).filter((i)=>i.trim())).filter((a)=>a.length>0)}function no(e){let t=[],r=(d)=>t.push(d),o=hr-85;if(e.titulo)r("BT"),r("/F1 18 Tf"),r(mr(e.titulo,o,18)),r("ET"),o-=30,r("q"),r("0.5 w"),r(`${ze} ${o} m`),r(`${Te-ze} ${o} l`),r("S"),r("Q"),o-=16;let a=so(e);for(let d=0;d<a.length;d++){let m=a[d];if(d>0){o-=10,r("BT"),r("/F1 9 Tf");let h=ot-18;r(`1 0 0 1 ${h.toFixed(2)} ${o.toFixed(2)} Tm`),r("(*   *   *) Tj"),r("ET"),o-=18}r("BT"),r("/F1 12 Tf");for(let h of m){let y=h.trim()||"·";r(mr(y,o,12)),o-=18}r("ET")}r("BT"),r("/F1 9 Tf");let i=60,s="-- El Taller",n=s.length*9*0.55,l=ot-n/2;return r(`1 0 0 1 ${l.toFixed(2)} ${i.toFixed(2)} Tm`),r(`(${ur(s)}) Tj`),r("ET"),t.join(`
`)}function gr(e){let t=no(e),r=t.length,o={};o[1]="<< /Type /Catalog /Pages 2 0 R >>",o[2]="<< /Type /Pages /Kids [3 0 R] /Count 1 >>",o[3]=`<< /Type /Page /Parent 2 0 R
   /MediaBox [0 0 ${Te} ${hr}]
   /Contents 4 0 R
   /Resources << /Font << /F1 5 0 R >> >> >>`,o[4]=`<< /Length ${r} >>
stream
${t}
endstream`,o[5]="<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman /Encoding /WinAnsiEncoding >>";let a=Object.keys(o).map(Number).sort((d,m)=>d-m),i=`%PDF-1.4
`,s={};for(let d of a)s[d]=i.length,i+=`${d} 0 obj
${o[d]}
endobj
`;let n=i.length,l=a.length+1;i+=`xref
`,i+=`0 ${l}
`,i+=`0000000000 65535 f 
`;for(let d of a)i+=`${String(s[d]).padStart(10,"0")} 00000 n 
`;return i+=`trailer
`,i+=`<< /Size ${l} /Root 1 0 R >>
`,i+=`startxref
`,i+=`${n}
`,i+="%%EOF",new TextEncoder().encode(i)}class at{formatAsText(e){let t=F(e.forma),r=[];if(e.titulo)r.push(`${e.titulo}
${"═".repeat(e.titulo.length)}`);let o=oe(t,e.versos);if(t.modo==="serie"){let a=o.map((i)=>i.versos.map((s)=>s.texto).join(`
`)).join(`
`);if(a)r.push(a);return r.join(`

`)}if(t.modo==="estrofa"){if(t.estrofas.length<=1){for(let n of o){let l=n.versos.map((d)=>d.texto).join(`
`);if(l)r.push(l)}return r.join(`

`)}let a=o[0],i=o.slice(1),s=a?.versos.map((n)=>n.texto).join(`
`)||"";if(s)r.push(s);for(let n of i){let l=n.versos.map((d)=>d.texto).join(`
`);if(l)r.push(l);if(s)r.push(s)}return r.join(`

`)}for(let a of o){let i=a.versos.map((s)=>s.texto).join(`
`);if(i)r.push(i)}return r.join(`

`)}exportToTxt(e){let t=this.formatAsText(e),r=new Blob([t],{type:"text/plain;charset=utf-8"}),o=URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.download=this.getFileName(e),a.click(),URL.revokeObjectURL(o)}exportToPdf(e){let t=gr(e),r=new Blob([t.buffer],{type:"application/pdf"}),o=URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.download=this.getFileName(e).replace(/\.txt$/,".pdf"),a.click(),URL.revokeObjectURL(o)}async copyToClipboard(e){try{let t=this.formatAsText(e);return await navigator.clipboard.writeText(t),!0}catch{try{let t=document.createElement("textarea");return t.value=this.formatAsText(e),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),!0}catch{return!1}}}getFileName(e){if(e.titulo)return`${e.titulo.toLowerCase().replace(/[^a-záéíóúüñ\s]/g,"").trim().replace(/\s+/g,"-").slice(0,50)||"poema"}.txt`;return`poema-${new Date(e.createdAt).toISOString().slice(0,10)}.txt`}}class it extends f{constructor(){super(...arguments);this.numero=1;this.texto="";this.isActive=!1}static styles=w`
    :host {
      display: block;
      width: 100%;
    }

    .verso-container {
      display: flex;
      align-items: flex-start;
      gap: var(--spacing-sm);
      padding: var(--spacing-xs) var(--spacing-sm);
      border-radius: var(--radius-sm);
      transition: background-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);
      position: relative;
    }

    .verso-container:hover {
      background: linear-gradient(90deg, rgba(139, 69, 19, 0.04), rgba(139, 69, 19, 0.06), rgba(139, 69, 19, 0.04));
    }

    .verso-container--active {
      background: linear-gradient(90deg, rgba(139, 69, 19, 0.06), rgba(139, 69, 19, 0.09), rgba(139, 69, 19, 0.06));
      box-shadow: inset 0 0 0 1px rgba(139, 69, 19, 0.08);
    }

    .verso-numero {
      font-size: var(--font-size-metrica);
      color: var(--color-ink-muted);
      width: 1.5rem;
      text-align: right;
      flex-shrink: 0;
      padding-top: 0.35em;
      user-select: none;
      font-family: var(--font-mono);
      font-variant-numeric: tabular-nums;
      font-weight: 500;
      letter-spacing: -0.02em;
    }

    .verso-line-wrapper {
      flex: 1;
      position: relative;
    }

    .verso-editor {
      font-size: var(--font-size-verso);
      line-height: var(--line-height-verso);
      font-family: var(--font-serif);
      color: var(--color-ink);
      background: transparent;
      border-bottom: 1px solid transparent;
      min-height: 1.6em;
      padding: 0.1em 0;
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      cursor: text;
      transition: border-color var(--duration-fast) var(--ease-out);
      text-shadow: 0.3px 0 0 rgba(44, 24, 16, 0.04);
      position: relative;
    }

    .verso-editor:focus {
      border-bottom-color: var(--color-accent-light);
      outline: none;
    }

    .verso-editor:focus::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      height: 1.5px;
      background: linear-gradient(90deg, var(--color-accent-light), var(--color-accent), var(--color-accent-light));
      background-size: 200% 100%;
      animation: underline-shimmer 1.2s var(--ease-in-out);
    }

    @keyframes underline-shimmer {
      from { background-position: 100% 0; }
      to { background-position: -100% 0; }
    }

    .verso-editor:empty::before {
      content: 'escribe el verso…';
      color: var(--color-ink-faint);
      font-style: italic;
      opacity: 0.5;
      pointer-events: none;
    }

    .verso-metrica {
      font-size: var(--font-size-metrica);
      color: var(--color-ink-muted);
      margin-top: 0.15em;
      padding-left: var(--spacing-sm);
      min-height: 1.2em;
      font-family: var(--font-mono);
      font-variant-numeric: tabular-nums;
      letter-spacing: -0.01em;
    }

    .verso-metrica--ok {
      color: var(--color-success);
    }

    .verso-metrica--error {
      color: var(--color-error);
    }

    .verso-metrica--warning {
      color: var(--color-warning);
    }

    .verso-estado {
      font-size: var(--font-size-micro);
      width: 1.2rem;
      text-align: center;
      flex-shrink: 0;
      padding-top: 0.5em;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }

    .verso-estado--ok {
      color: var(--color-success);
      animation: pop-success var(--duration-slow) var(--ease-spring);
    }

    .verso-estado--error {
      color: var(--color-error);
      animation: pop-error var(--duration-normal) var(--ease-out);
    }

    @keyframes pop-success {
      0% { transform: scale(0.6); opacity: 0; }
      60% { transform: scale(1.15); }
      100% { transform: scale(1); opacity: 1; }
    }

    @keyframes pop-error {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-2px); }
      75% { transform: translateX(2px); }
    }

    @media (max-width: 767px) {
      .verso-editor {
        white-space: normal;
        overflow-wrap: break-word;
        word-break: break-word;
        overflow-x: visible;
        font-size: 1.0625rem;
        line-height: 1.5;
      }

      .verso-editor:focus::after {
        display: none;
      }

      .verso-container {
        gap: 0.4rem;
        padding: 0.3rem 0.4rem;
      }

      .verso-numero {
        width: 1.3rem;
        font-size: 0.7rem;
      }

      .verso-metrica {
        font-size: 0.7rem;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .verso-editor:focus::after {
        animation: none;
      }
      .verso-estado--ok, .verso-estado--error {
        animation: none;
      }
    }
  `;firstUpdated(){this.actualizarTextoEnDOM()}updated(e){if(e.has("texto")&&this.editorRef)this.actualizarTextoEnDOM()}actualizarTextoEnDOM(){if(!this.editorRef)return;let e=this.texto||"";if(this.editorRef.textContent!==e)this.editorRef.textContent=e}render(){let e=this.getEstadoClass(),t=this.analysis&&this.texto.trim(),r=t&&this.analysis.errores.length>0;return p`
      <div class="verso-container ${this.isActive?"verso-container--active":""}">
        <span class="verso-numero">${this.numero}</span>
        <div class="verso-line-wrapper">
          <div class="verso-editor"
               contenteditable="true"
               @input=${this.onInput}
               @blur=${this.onBlur}
               @focus=${this.onFocus}
               @keydown=${this.onKeyDown}
               role="textbox"
               aria-label="Verso ${this.numero}">
          </div>
          <div class="verso-metrica ${e}">
            ${this.renderMetrica()}
          </div>
        </div>
        <div class="verso-estado ${e}">
          ${t?r?p`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`:p`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`:""}
        </div>
      </div>
    `}getEstadoClass(){if(!this.analysis||!this.texto.trim())return"";if(this.analysis.errores.length>0)return"verso-metrica--error";if(this.analysis.advertencias&&this.analysis.advertencias.length>0)return"verso-metrica--warning";return"verso-metrica--ok"}renderMetrica(){if(!this.analysis||!this.texto.trim())return"";let e=[];if(e.push(`${this.analysis.numSilabasMetricas} síl.`),this.analysis.tipoVerso&&this.analysis.tipoVerso!=="no_endecasilabo")e.push(`· ${this.analysis.tipoVerso}`);if(this.analysis.errores.length>0)e.push(`· ${this.analysis.errores[0].mensaje}`);else if(this.analysis.advertencias&&this.analysis.advertencias.length>0)e.push(`· ${this.analysis.advertencias[0].mensaje}`);return e.join(" ")}renderEstado(){if(!this.analysis||!this.texto.trim())return"";if(this.analysis.errores.length>0)return"✗";return"✓"}onInput(){let e=this.editorRef.textContent||"";this.dispatchEvent(new CustomEvent("verso-input",{detail:{numero:this.numero,texto:e},bubbles:!0,composed:!0}))}onBlur(){this.dispatchEvent(new CustomEvent("verso-blur",{detail:{numero:this.numero},bubbles:!0,composed:!0}))}onFocus(){this.dispatchEvent(new CustomEvent("verso-focus",{detail:{numero:this.numero},bubbles:!0,composed:!0}))}onKeyDown(e){if(e.key==="Enter")e.preventDefault()}}c([u({type:Number})],it.prototype,"numero",void 0),c([u({type:String})],it.prototype,"texto",void 0),c([u({type:Object})],it.prototype,"analysis",void 0),c([u({type:Boolean})],it.prototype,"isActive",void 0),c([Zt(".verso-editor")],it.prototype,"editorRef",void 0),it=c([_("verso-line")],it);class st extends f{constructor(){super(...arguments);this.estrategia="";this.open=!1}static styles=w`
    :host {
      display: block;
      width: 100%;
    }

    .estrategia-container {
      position: relative;
      margin-bottom: 1.75rem;
    }

    .estrategia-toggle {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: var(--font-size-metrica);
      font-family: var(--font-display);
      font-weight: 500;
      color: var(--color-accent-light);
      cursor: pointer;
      user-select: none;
      padding: 0.2rem 0.5rem;
      border-radius: var(--radius-sm);
      transition: background-color var(--duration-fast) var(--ease-out);
      border: none;
      background: transparent;
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide);
    }

    .estrategia-toggle:hover {
      background: linear-gradient(180deg, rgba(139, 69, 19, 0.06), rgba(139, 69, 19, 0.1));
      color: var(--color-accent);
    }

    .estrategia-toggle svg {
      transition: transform var(--duration-normal) var(--ease-out);
      display: inline-block;
      flex-shrink: 0;
    }

    .estrategia-toggle .arrow--open {
      transform: rotate(90deg);
    }

    .estrategia-body {
      overflow: hidden;
      transition: max-height var(--duration-slow) var(--ease-out), opacity var(--duration-normal) var(--ease-out), margin-top var(--duration-normal) var(--ease-out);
      max-height: 0;
      opacity: 0;
      margin-top: 0;
    }

    .estrategia-body--open {
      max-height: 300px;
      opacity: 1;
      margin-top: 0.4rem;
    }

    .estrategia-textarea {
      width: 100%;
      min-height: 72px;
      padding: 0.6rem 0.75rem;
      font-family: var(--font-serif);
      font-size: var(--font-size-small);
      line-height: var(--line-height-snug);
      color: var(--color-ink-soft);
      background: linear-gradient(180deg, rgba(232, 213, 176, 0.3), rgba(232, 213, 176, 0.42));
      background-image: var(--texture-paper), linear-gradient(180deg, rgba(232, 213, 176, 0.3), rgba(232, 213, 176, 0.42));
      background-size: 200px 200px, 100% 100%;
      background-blend-mode: soft-light, normal;
      border: 1px dashed rgba(139, 69, 19, 0.25);
      border-radius: var(--radius-md);
      resize: vertical;
      outline: none;
      box-sizing: border-box;
      font-style: italic;
      transition: border-color var(--duration-normal) var(--ease-out), background-color var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out);
      box-shadow: var(--shadow-inset);
    }

    .estrategia-textarea:focus {
      border-color: rgba(160, 82, 45, 0.5);
      background: linear-gradient(180deg, rgba(232, 213, 176, 0.45), rgba(232, 213, 176, 0.55));
      background-image: var(--texture-paper), linear-gradient(180deg, rgba(232, 213, 176, 0.45), rgba(232, 213, 176, 0.55));
      background-blend-mode: soft-light, normal;
      border-style: solid;
      box-shadow: var(--shadow-inset), 0 0 0 2px rgba(139, 69, 19, 0.08);
    }

    .estrategia-textarea::placeholder {
      color: var(--color-ink-faint);
      font-style: italic;
    }
  `;render(){return p`
      <div class="estrategia-container">
        <button class="estrategia-toggle" @click=${this.toggle} aria-label="Mostrar/ocultar estrategia del poema">
          <svg class="arrow ${this.open?"arrow--open":""}" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          Estrategia del poema
          ${!this.open&&this.estrategia.trim()?p`<span style="color:var(--color-ink-muted); font-weight: 400; text-transform: none; letter-spacing: normal; font-family: var(--font-serif); font-style: italic; font-size: var(--font-size-caption);">— ${this.truncate(this.estrategia)}</span>`:""}
        </button>

        <div class="estrategia-body ${this.open?"estrategia-body--open":""}">
          <textarea
            class="estrategia-textarea"
            .value=${this.estrategia}
            @input=${this.onInput}
            placeholder="Apuntes: línea narrativa, tema de cada estrofa, palabras clave, esquema de rimas planeado…"
            aria-label="Estrategia del poema"
          ></textarea>
        </div>
      </div>
    `}toggle(){this.open=!this.open}truncate(e){return e.length>55?e.slice(0,55)+"…":e}onInput(e){let t=e.target;this.dispatchEvent(new CustomEvent("estrategia-change",{detail:{estrategia:t.value},bubbles:!0,composed:!0}))}}c([u({type:String})],st.prototype,"estrategia",void 0),c([u({type:Boolean})],st.prototype,"open",void 0),st=c([_("estrategia-line")],st);class nt extends f{constructor(){super(...arguments);this.forma={id:"soneto"};this.versos=[];this.titulo="";this.estrategia="";this.activeVerso=null}static styles=w`
    :host {
      display: block;
      width: 100%;
    }

    .editor-section {
      width: 100%;
    }

    .parte-container {
      margin-bottom: var(--spacing-lg);
    }

    .parte-label {
      font-size: var(--font-size-caption);
      color: var(--color-ink-muted);
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-caps);
      margin-bottom: var(--spacing-sm);
      padding-left: var(--spacing-sm);
      font-family: var(--font-display);
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      flex-wrap: wrap;
      position: relative;
    }

    .parte-label::before {
      content: '';
      display: inline-block;
      width: 2px;
      height: 0.85em;
      background: linear-gradient(180deg, var(--color-accent), var(--color-accent-light));
      border-radius: 2px;
      margin-right: var(--spacing-xs);
    }

    .parte-label__tag {
      text-transform: none;
      letter-spacing: var(--letter-spacing-display);
      font-style: italic;
      color: var(--color-accent-light);
      font-weight: 400;
      font-size: var(--font-size-micro);
    }

    .parte-separator {
      height: 24px;
      background:
        radial-gradient(circle, var(--color-ink-muted) 1px, transparent 1.5px) center / 5px 5px no-repeat,
        linear-gradient(to right, transparent, rgba(139, 69, 19, 0.18) 25%, rgba(139, 69, 19, 0.22) 50%, rgba(139, 69, 19, 0.18) 75%, transparent);
      margin: var(--spacing-lg) 0;
      opacity: 0.6;
      position: relative;
    }

    .parte-separator::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 24px;
      background:
        radial-gradient(circle at 35% 50%, var(--color-ink-muted) 0.7px, transparent 1.2px),
        radial-gradient(circle at 65% 50%, var(--color-ink-muted) 0.7px, transparent 1.2px),
        radial-gradient(circle at 50% 35%, var(--color-accent) 1px, transparent 1.6px),
        radial-gradient(circle at 50% 65%, var(--color-accent) 1px, transparent 1.6px);
      background-repeat: no-repeat;
    }

    .editor-header {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      margin-bottom: var(--spacing-md);
      flex-wrap: wrap;
      justify-content: center;
    }

    .editor-title {
      font-size: var(--font-size-h2);
      font-weight: 600;
      color: var(--color-ink);
      font-family: var(--font-display);
    }

    .titulo-input {
      font-family: var(--font-display);
      font-size: var(--font-size-h1);
      font-weight: 600;
      color: var(--color-ink);
      background: transparent;
      border: none;
      border-bottom: 1px solid rgba(44, 24, 16, 0.2);
      padding: 0.25rem 0.5rem;
      flex: 1;
      min-width: 200px;
      text-align: center;
      outline: none;
      transition: border-color var(--duration-normal) var(--ease-out);
      letter-spacing: var(--letter-spacing-display);
    }

    .titulo-input:focus {
      border-bottom-color: var(--color-accent);
      border-bottom-width: 2px;
      margin-bottom: -1px;
    }

    .titulo-input::placeholder {
      color: var(--color-ink-faint);
      font-style: italic;
      font-weight: 400;
    }

    .editor-meta {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      flex-wrap: wrap;
      margin-bottom: var(--spacing-lg);
      justify-content: center;
    }

    .forma-badge {
      font-size: var(--font-size-caption);
      font-family: var(--font-display);
      font-weight: 600;
      color: var(--color-parchment-light);
      background: linear-gradient(180deg, var(--color-accent-light), var(--color-accent));
      padding: 0.2rem 0.7rem;
      border-radius: var(--radius-pill);
      letter-spacing: var(--letter-spacing-caps);
      text-transform: uppercase;
      box-shadow: var(--elevation-1);
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-2xs);
    }

    .forma-badge::before {
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: rgba(255, 248, 236, 0.7);
      flex-shrink: 0;
    }

    .esquema-badge {
      font-size: var(--font-size-caption);
      font-family: var(--font-mono);
      color: var(--color-accent-light);
      background: linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(139, 69, 19, 0.05));
      padding: 0.2rem 0.6rem;
      border-radius: var(--radius-pill);
      border: 1px solid rgba(139, 69, 19, 0.15);
      letter-spacing: var(--letter-spacing-wide);
    }

    .editor-controls {
      display: flex;
      gap: var(--spacing-sm);
      margin-top: var(--spacing-md);
      margin-bottom: var(--spacing-md);
      flex-wrap: wrap;
      justify-content: center;
    }

    .control-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.4rem 0.85rem;
      border-radius: var(--radius-md);
      font-family: var(--font-serif);
      font-size: var(--font-size-small);
      color: var(--color-ink-soft);
      background: linear-gradient(180deg, rgba(139, 69, 19, 0.08), rgba(139, 69, 19, 0.04));
      border: 1px solid rgba(44, 24, 16, 0.15);
      cursor: pointer;
      transition: background-color var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);
      box-shadow: var(--elevation-1);
    }

    .control-btn:hover:not(:disabled) {
      background: linear-gradient(180deg, rgba(139, 69, 19, 0.14), rgba(139, 69, 19, 0.08));
      color: var(--color-accent);
      border-color: rgba(139, 69, 19, 0.35);
      transform: translateY(-1px);
      box-shadow: var(--elevation-2);
    }

    .control-btn:active:not(:disabled) {
      transform: translateY(-1px) scale(0.96);
    }

    .control-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .control-btn svg {
      flex-shrink: 0;
    }

    @media (max-width: 767px) {
      .editor-header {
        flex-direction: column;
        align-items: stretch;
        gap: 0.5rem;
      }

      .titulo-input {
        font-size: 1.1rem;
        min-width: 0;
      }

      .editor-meta {
        gap: 0.35rem;
        margin-bottom: 1rem;
      }

      .control-btn {
        min-height: 42px;
        flex: 1;
        justify-content: center;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .control-btn:hover:not(:disabled) {
        transform: none;
      }
    }
  `;render(){let e=oe(this.forma,this.versos);return p`
      <div class="editor-section">
        <div class="editor-header">
          <input
            class="titulo-input"
            type="text"
            placeholder="Título del poema (opcional)"
            .value=${this.titulo}
            @input=${this.onTituloInput}
            aria-label="Título del poema"
          />
        </div>

        <div class="editor-meta">
          <span class="forma-badge">${this.forma.nombre}</span>
          ${this.forma.esquemaReferencia?p`<span class="esquema-badge">${this.forma.esquemaReferencia}</span>`:""}
          <span class="esquema-badge">${this.forma.medidaDescripcion}</span>
        </div>

        <estrategia-line
          .estrategia=${this.estrategia}
          @estrategia-change=${this.onEstrategiaChange}
        ></estrategia-line>

        ${e.map((t,r)=>p`
          <div class="parte-container">
            <div class="parte-label">
              ${t.nombre}
              ${t.tipo==="estribillo"?p`<span class="parte-label__tag">(se repite tras cada copla)</span>`:""}
            </div>
            ${t.versos.map((o)=>p`
              <verso-line
                .numero=${o.numero}
                .texto=${o.texto||""}
                .analysis=${o.analysis}
                .isActive=${this.activeVerso===o.numero}
                @verso-input=${this.onVersoInput}
                @verso-blur=${this.onVersoBlur}
                @verso-focus=${this.onVersoFocus}
                @hiato-toggle=${this.onHiatoToggle}
              ></verso-line>
            `)}
          </div>
          ${r<e.length-1?p`<div class="parte-separator"></div>`:""}
        `)}

        ${this.renderControls()}
      </div>
    `}renderControls(){if(this.forma.modo==="serie"){let{min:e,max:t}=Ge(this.forma),r=this.versos.length;return p`
        <div class="editor-controls">
          <button class="control-btn" ?disabled=${r>=t} @click=${this.onVersoAdd} title="Añadir un verso">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            verso
          </button>
          <button class="control-btn" ?disabled=${r<=e} @click=${this.onVersoRemove} title="Quitar el último verso">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
            verso
          </button>
        </div>
      `}if(this.forma.modo==="estrofa"){let{max:e}=Ge(this.forma),t=this.versos.length,r=this.forma.versosIniciales,a=(this.forma.estrofas[this.forma.estrofas.length-1]?.nombre??"estrofa").toLowerCase();return p`
        <div class="editor-controls">
          <button class="control-btn" ?disabled=${t>=e} @click=${this.onEstrofaAdd} title="Añadir ${a}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            estrofa
          </button>
          <button class="control-btn" ?disabled=${t<=r} @click=${this.onEstrofaRemove} title="Quitar la última ${a}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
            estrofa
          </button>
        </div>
      `}return p``}getVerso(e){return this.versos.find((t)=>t.numero===e)}onTituloInput(e){let t=e.target;this.dispatchEvent(new CustomEvent("titulo-change",{detail:{titulo:t.value},bubbles:!0,composed:!0}))}onEstrategiaChange(e){e.stopPropagation();let{estrategia:t}=e.detail;this.dispatchEvent(new CustomEvent("estrategia-change",{detail:{estrategia:t},bubbles:!0,composed:!0}))}onVersoInput(e){e.stopPropagation();let{numero:t,texto:r}=e.detail;this.dispatchEvent(new CustomEvent("verso-input",{detail:{numero:t,texto:r},bubbles:!0,composed:!0}))}onVersoBlur(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("verso-blur",{detail:e.detail,bubbles:!0,composed:!0}))}onVersoFocus(e){e.stopPropagation();let{numero:t}=e.detail;this.activeVerso=t,this.dispatchEvent(new CustomEvent("verso-focus",{detail:{numero:t},bubbles:!0,composed:!0}))}onHiatoToggle(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("hiato-toggle",{detail:e.detail,bubbles:!0,composed:!0}))}onVersoAdd(){this.dispatchEvent(new CustomEvent("verso-add",{bubbles:!0,composed:!0}))}onVersoRemove(){this.dispatchEvent(new CustomEvent("verso-remove",{bubbles:!0,composed:!0}))}onEstrofaAdd(){this.dispatchEvent(new CustomEvent("estrofa-add",{bubbles:!0,composed:!0}))}onEstrofaRemove(){this.dispatchEvent(new CustomEvent("estrofa-remove",{bubbles:!0,composed:!0}))}focusVerso(e){this.activeVerso=e,this.shadowRoot?.querySelector(`verso-line[numero="${e}"]`)?.querySelector("[contenteditable]")?.focus()}}c([u({type:Object})],nt.prototype,"forma",void 0),c([u({type:Array})],nt.prototype,"versos",void 0),c([u({type:String})],nt.prototype,"titulo",void 0),c([u({type:String})],nt.prototype,"estrategia",void 0),c([u({type:Number})],nt.prototype,"activeVerso",void 0),c([er("verso-line")],nt.prototype,"versoLines",void 0),nt=c([_("soneto-editor")],nt);class lt extends f{constructor(){super(...arguments);this.showErrors=!0;this.silabasObjetivo=11}static styles=w`
    :host {
      display: block;
      font-size: var(--font-size-metrica);
      font-family: var(--font-mono);
      font-variant-numeric: tabular-nums;
      margin-top: 0.15em;
      padding-left: var(--spacing-sm);
      min-height: 1.2em;
      letter-spacing: -0.01em;
    }

    .metric--ok {
      color: var(--color-success);
    }

    .metric--error {
      color: var(--color-error);
    }

    .metric--warning {
      color: var(--color-warning);
    }

    .metric--muted {
      color: var(--color-ink-muted);
    }

    .error-list {
      display: flex;
      flex-direction: column;
      gap: 0.1em;
    }
  `;render(){if(!this.analysis)return p`<span class="metric--muted">· · ·</span>`;let e=[];if(e.push({text:`${this.analysis.numSilabasMetricas} síl.`,class:this.analysis.numSilabasMetricas===this.silabasObjetivo?"metric--ok":"metric--error"}),this.silabasObjetivo===11&&this.analysis.tipoVerso&&this.analysis.tipoVerso!=="no_endecasilabo")e.push({text:this.analysis.tipoVerso,class:"metric--muted"});if(this.analysis.acentoFinal)e.push({text:this.analysis.acentoFinal,class:"metric--muted"});return p`
      <div>
        <span class="${e[0]?.class||"metric--muted"}">
          ${e.map((t)=>t.text).join(" · ")}
        </span>
        ${this.showErrors&&this.analysis.errores.length>0?p`
          <div class="error-list">
            ${this.analysis.errores.map((t)=>p`
              <span class="metric--error">${t.mensaje}</span>
            `)}
          </div>
        `:""}
        ${this.showErrors&&this.analysis.advertencias&&this.analysis.advertencias.length>0?p`
          <div class="error-list">
            ${this.analysis.advertencias.map((t)=>p`
              <span class="metric--warning">${t.mensaje}</span>
            `)}
          </div>
        `:""}
      </div>
    `}}c([u({type:Object})],lt.prototype,"analysis",void 0),c([u({type:Boolean})],lt.prototype,"showErrors",void 0),c([u({type:Number})],lt.prototype,"silabasObjetivo",void 0),lt=c([_("verse-metrics")],lt);class ct extends f{constructor(){super(...arguments);this.sinalefas=[]}static styles=w`
    :host {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }

    svg {
      width: 100%;
      height: 100%;
      overflow: visible;
    }

    path {
      pointer-events: stroke;
      cursor: pointer;
      filter: drop-shadow(0 1px 1px rgba(44, 24, 16, 0.15));
      transition: stroke var(--duration-fast) var(--ease-out), stroke-width var(--duration-fast) var(--ease-out);
    }

    path:hover {
      stroke: var(--color-sinalefa-hover);
      stroke-width: 2.5;
      filter: drop-shadow(0 1px 2px rgba(44, 24, 16, 0.25));
    }
  `;render(){return p`
      <svg>
        ${this.renderArcs()}
      </svg>
    `}renderArcs(){if(!this.editorElement||!this.sinalefas.length)return"";let e=this.editorElement.getBoundingClientRect();return this.sinalefas.filter((r)=>!r.descartada).map((r)=>{let o=this.editorElement.querySelectorAll("[data-silaba]"),a=o[r.silabaAnterior],i=o[r.silabaSiguiente];if(!a||!i)return"";let s=a.getBoundingClientRect(),n=i.getBoundingClientRect(),l=s.right-e.left,d=n.left-e.left,m=s.bottom-e.top+2;return p`
        <path
          d="M ${l} ${m} Q ${(l+d)/2} ${m+10}, ${d} ${m}"
          fill="none"
          stroke="#8B7355"
          stroke-width="1.5"
          data-silaba="${r.silabaAnterior}"
          @click=${()=>this.onArcClick(r.silabaAnterior)}
        />
      `})}onArcClick(e){this.dispatchEvent(new CustomEvent("sinalefa-click",{detail:{silabaIndex:e},bubbles:!0,composed:!0}))}updated(e){if(e.has("sinalefas")||e.has("editorElement"))this.requestUpdate()}}c([u({type:Array})],ct.prototype,"sinalefas",void 0),c([u({type:Object})],ct.prototype,"editorElement",void 0),ct=c([_("sinalefa-overlay")],ct);class dt extends f{constructor(){super(...arguments);this.versos=[];this.silabasObjetivo=11}static styles=w`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm);
    }

    .panel-title {
      font-size: var(--font-size-metrica);
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-caps);
      color: var(--color-ink-muted);
      font-family: var(--font-display);
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      position: relative;
      padding-bottom: var(--spacing-xs);
    }

    .panel-title::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, rgba(139, 69, 19, 0.2), transparent);
      margin-left: var(--spacing-xs);
    }

    .panel-title svg {
      color: var(--color-accent);
      flex-shrink: 0;
    }

    .panel-title__count {
      font-family: var(--font-mono);
      font-size: var(--font-size-caption);
      color: var(--color-accent);
      font-weight: 600;
      padding: 0 4px;
      background: rgba(139, 69, 19, 0.08);
      border-radius: var(--radius-xs);
      font-variant-numeric: tabular-nums;
    }

    .metrics-list {
      display: flex;
      flex-direction: column;
      gap: 1px;
    }

    .metrics-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px var(--spacing-sm);
      border-radius: var(--radius-xs);
      font-size: var(--font-size-metrica);
      cursor: default;
      transition: background-color var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out);
      font-family: var(--font-mono);
      font-variant-numeric: tabular-nums;
      position: relative;
    }

    .metrics-item:hover {
      background: linear-gradient(90deg, rgba(139, 69, 19, 0.05), rgba(139, 69, 19, 0.08), rgba(139, 69, 19, 0.05));
      transform: translateX(1px);
    }

    .metrics-item__numero {
      font-variant-numeric: tabular-nums;
      color: var(--color-ink-muted);
      width: 1.2rem;
      flex-shrink: 0;
      font-weight: 500;
    }

    .metrics-item__silabas {
      font-variant-numeric: tabular-nums;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
    }

    .metrics-item__silabas--ok {
      color: var(--color-success);
    }

    .metrics-item__silabas--ok::before {
      content: '';
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: var(--color-success);
      box-shadow: 0 0 4px rgba(107, 142, 35, 0.5);
      margin-right: 4px;
    }

    .metrics-item__silabas--error {
      color: var(--color-error);
    }

    .metrics-item__silabas--error::before {
      content: '';
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: var(--color-error);
      margin-right: 4px;
    }

    .metrics-item__tipo {
      color: var(--color-ink-soft);
      font-size: var(--font-size-micro);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 7rem;
      display: inline-flex;
      align-items: center;
      gap: 2px;
    }

    .metrics-item__tipo svg {
      flex-shrink: 0;
    }

    .metrics-item__error {
      color: var(--color-error);
      font-size: var(--font-size-micro);
      font-family: var(--font-mono);
    }

    .no-data {
      color: var(--color-ink-muted);
      font-size: var(--font-size-metrica);
      font-style: italic;
      text-align: center;
      padding: 1rem 0;
      font-family: var(--font-serif);
    }
  `;render(){let e=this.getPosiciones(),t=this.analysisMap&&this.analysisMap.size>0;return p`
      <div class="panel-title">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
        Métrica
        <span class="panel-title__count">${this.silabasObjetivo}</span>
      </div>
      ${!t||e.length===0?p`<div class="no-data">Escribe para ver análisis</div>`:p`<div class="metrics-list">${this.renderItems(e)}</div>`}
    `}getPosiciones(){if(this.versos.length>0)return this.versos.map((e)=>e.numero).sort((e,t)=>e-t);return Array.from({length:14},(e,t)=>t+1)}renderItems(e){let t=[];for(let r of e){let o=this.analysisMap?.get(r);if(!o)t.push(p`
          <div class="metrics-item">
            <span class="metrics-item__numero">${r}</span>
            <span class="metrics-item__tipo">—</span>
          </div>
        `);else{let a=o.numSilabasMetricas===this.silabasObjetivo?"metrics-item__silabas--ok":"metrics-item__silabas--error",i=this.silabasObjetivo===11&&o.tipoVerso&&o.tipoVerso!=="no_endecasilabo",s=[...o.errores.map((n)=>n.mensaje),...(o.advertencias??[]).map((n)=>n.mensaje)];t.push(p`
          <div class="metrics-item" title="${s.join(" · ")}">
            <span class="metrics-item__numero">${r}</span>
            <span class="metrics-item__silabas ${a}">
              ${o.numSilabasMetricas}
            </span>
            <span class="metrics-item__tipo">
              ${i?o.tipoVerso:o.errores.length>0?p`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`:""}
            </span>
          </div>
        `)}}return t}}c([u({type:Object})],dt.prototype,"analysisMap",void 0),c([u({type:Array})],dt.prototype,"versos",void 0),c([u({type:Number})],dt.prototype,"silabasObjetivo",void 0),dt=c([_("metrics-panel")],dt);class pt extends f{constructor(){super(...arguments);this.versos=[];this.grupos=[]}static styles=w`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm);
    }

    .panel-title {
      font-size: var(--font-size-metrica);
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-caps);
      color: var(--color-ink-muted);
      font-family: var(--font-display);
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      padding-bottom: var(--spacing-xs);
    }

    .panel-title svg {
      color: var(--color-accent);
      flex-shrink: 0;
    }

    .panel-title::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, rgba(139, 69, 19, 0.2), transparent);
      margin-left: var(--spacing-xs);
    }

    .patron-display {
      font-family: var(--font-mono);
      font-size: var(--font-size-small);
      color: var(--color-accent);
      line-height: var(--line-height-snug);
      letter-spacing: var(--letter-spacing-caps);
      padding: var(--spacing-sm);
      background: linear-gradient(135deg, rgba(255, 248, 236, 0.6), rgba(245, 230, 200, 0.4));
      border: var(--border-light);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-inset);
      white-space: pre-wrap;
      text-align: center;
      font-weight: 600;
    }

    /* Color-coding de rimas en el patrón */
    .patron-display .rhyme-a { color: var(--color-rhyme-a); }
    .patron-display .rhyme-b { color: var(--color-rhyme-b); }
    .patron-display .rhyme-c { color: var(--color-rhyme-c); }
    .patron-display .rhyme-d { color: var(--color-rhyme-d); }
    .patron-display .rhyme-e { color: var(--color-rhyme-e); }
    .patron-display .rhyme-f { color: var(--color-rhyme-f); }
    .patron-display .rhyme-g { color: var(--color-rhyme-g); }
    .patron-display .rhyme-h { color: var(--color-rhyme-h); }

    .clasico-badge {
      font-size: var(--font-size-metrica);
      color: var(--color-success);
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-2xs);
      text-align: center;
      padding: var(--spacing-xs) var(--spacing-sm);
      background: linear-gradient(135deg, rgba(107, 142, 35, 0.12), rgba(107, 142, 35, 0.06));
      border: 1px solid rgba(107, 142, 35, 0.25);
      border-radius: var(--radius-pill);
      align-self: center;
      font-family: var(--font-display);
    }

    .libre-badge {
      font-size: var(--font-size-metrica);
      color: var(--color-ink-muted);
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-2xs);
      text-align: center;
      font-style: italic;
      padding: var(--spacing-xs) var(--spacing-sm);
      background: rgba(139, 69, 19, 0.05);
      border: 1px solid rgba(44, 24, 16, 0.1);
      border-radius: var(--radius-pill);
      align-self: center;
      font-family: var(--font-serif);
    }

    .aviso-badge {
      font-size: var(--font-size-metrica);
      color: var(--color-warning);
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-2xs);
      text-align: center;
      padding: var(--spacing-xs) var(--spacing-sm);
      background: linear-gradient(135deg, rgba(210, 105, 30, 0.12), rgba(210, 105, 30, 0.05));
      border: 1px solid rgba(210, 105, 30, 0.28);
      border-radius: var(--radius-pill);
      align-self: center;
      font-family: var(--font-serif);
    }

    .scheme-part {
      margin-bottom: var(--spacing-xs);
    }

    .scheme-line {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      padding: 1px 0;
      font-size: var(--font-size-metrica);
      font-family: var(--font-mono);
      font-variant-numeric: tabular-nums;
    }

    .scheme-line__letra {
      font-weight: 700;
      width: 1.2rem;
      text-align: center;
      transition: color var(--duration-slow) var(--ease-out), transform var(--duration-fast) var(--ease-out);
      font-size: var(--font-size-caption);
      border-radius: var(--radius-xs);
      padding: 0 1px;
    }

    /* Color-coding por letra de rima */
    .scheme-line__letra--rhyme-a { color: var(--color-rhyme-a); }
    .scheme-line__letra--rhyme-b { color: var(--color-rhyme-b); }
    .scheme-line__letra--rhyme-c { color: var(--color-rhyme-c); }
    .scheme-line__letra--rhyme-d { color: var(--color-rhyme-d); }
    .scheme-line__letra--rhyme-e { color: var(--color-rhyme-e); }
    .scheme-line__letra--rhyme-f { color: var(--color-rhyme-f); }
    .scheme-line__letra--rhyme-g { color: var(--color-rhyme-g); }
    .scheme-line__letra--rhyme-h { color: var(--color-rhyme-h); }

    .scheme-line__letra--pending {
      color: var(--color-ink-faint);
    }

    .scheme-line__texto {
      color: var(--color-ink-soft);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: var(--font-size-micro);
      font-family: var(--font-serif);
    }

    .scheme-line__numero {
      color: var(--color-ink-muted);
      width: 1rem;
      flex-shrink: 0;
      font-size: var(--font-size-micro);
      font-weight: 500;
    }

    .no-data {
      color: var(--color-ink-muted);
      font-size: var(--font-size-metrica);
      font-style: italic;
      text-align: center;
      padding: 1rem 0;
      font-family: var(--font-serif);
    }
  `;render(){if(!this.esquema)return p`
        <div class="panel-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
          Rimas
        </div>
        <div class="no-data">Completa versos para ver el esquema</div>
      `;let e=this.getPartes();return p`
      <div class="panel-title">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        Rimas
      </div>

      <div class="patron-display">${this.renderPatronColoreado(this.esquema.patron)}</div>

      ${this.esquema.esClasico?p`<div class="clasico-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            ${this.esquema.nombreClasico||"Forma clásica"}
          </div>`:this.esquema.aviso?p`<div class="aviso-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              ${this.esquema.nombreClasico||"Casi una forma clásica"}
              <span title="${this.esquema.aviso}">· ${this.esquema.aviso}</span>
            </div>`:p`<div class="libre-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              Esquema libre
            </div>`}

      ${e.map((t)=>p`
        <div class="scheme-part">
          ${t.map((r)=>{let o=this.esquema?.asignacion.get(r)||"·",a=o.toLowerCase(),i=o!=="·"&&/^[a-h]$/.test(a)?`scheme-line__letra--rhyme-${a}`:"scheme-line__letra--pending",s=this.versos.find((l)=>l.numero===r),n=s?.texto?s.texto.slice(0,20)+(s.texto.length>20?"…":""):"";return p`
              <div class="scheme-line">
                <span class="scheme-line__numero">${r}</span>
                <span class="scheme-line__letra ${i}">
                  ${o}
                </span>
                <span class="scheme-line__texto">${n||"—"}</span>
              </div>
            `})}
        </div>
      `)}
    `}renderPatronColoreado(e){return e.split("").map((t)=>{let r=t.toLowerCase();if(/^[a-h]$/.test(r))return p`<span class="rhyme-${r}">${t}</span>`;return t})}getPartes(){if(this.grupos&&this.grupos.length>0)return this.grupos;return[[1,2,3,4],[5,6,7,8],[9,10,11],[12,13,14]]}}c([u({type:Object})],pt.prototype,"esquema",void 0),c([u({type:Array})],pt.prototype,"versos",void 0),c([u({type:Array})],pt.prototype,"grupos",void 0),pt=c([_("rhyme-scheme-panel")],pt);class mt extends f{constructor(){super(...arguments);this.total=14;this.completados=0;this.conErrores=0}static styles=w`
    :host {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      width: 100%;
      padding: var(--spacing-sm) 0;
    }

    .progress-bar__track {
      flex: 1;
      display: flex;
      gap: 3px;
      height: 6px;
      align-items: center;
    }

    .segment {
      flex: 1;
      height: 100%;
      min-width: 2px;
      border-radius: var(--radius-xs);
      background: rgba(44, 24, 16, 0.12);
      transition: background var(--duration-slow) var(--ease-out), transform var(--duration-slow) var(--ease-spring), box-shadow var(--duration-slow) var(--ease-out);
    }

    .segment--complete {
      background: linear-gradient(180deg, var(--color-success-soft), var(--color-success));
      box-shadow: 0 0 4px rgba(107, 142, 35, 0.4);
    }

    .segment--error {
      background: linear-gradient(180deg, var(--color-error-soft), var(--color-error));
      box-shadow: 0 0 4px rgba(205, 92, 92, 0.4);
    }

    .progress-bar--all-complete .segment--complete:last-child {
      transform: scaleY(1.6);
    }

    .progress-bar__text {
      font-size: var(--font-size-metrica);
      color: var(--color-ink-muted);
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
      font-family: var(--font-mono);
      letter-spacing: -0.01em;
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-xs);
    }

    .progress-bar__count {
      color: var(--color-ink-soft);
      font-weight: 600;
    }

    .progress-bar__total {
      color: var(--color-ink-muted);
    }

    .progress-bar__label {
      color: var(--color-ink-muted);
    }

    .progress-bar__warnings {
      display: inline-flex;
      align-items: center;
      gap: 2px;
      color: var(--color-warning);
      font-weight: 600;
    }

    .progress-bar__warnings svg {
      filter: drop-shadow(0 0 3px rgba(210, 105, 30, 0.4));
    }
  `;render(){let e=Math.max(0,this.completados-this.conErrores),t=this.completados===this.total&&this.conErrores===0,r=[];for(let o=0;o<this.total;o++){let a="segment";if(o<e)a+=" segment--complete";else if(o<e+this.conErrores)a+=" segment--error";r.push(p`<div class="${a}"></div>`)}return p`
      <div class="progress-bar__track ${t?"progress-bar--all-complete":""}">
        ${r}
      </div>
      <div class="progress-bar__text">
        <span class="progress-bar__count">${this.completados}</span>
        <span class="progress-bar__total">/ ${this.total}</span>
        <span class="progress-bar__label">versos</span>
        ${this.conErrores>0?p`<span class="progress-bar__warnings">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              ${this.conErrores}
            </span>`:""}
      </div>
    `}}c([u({type:Number})],mt.prototype,"total",void 0),c([u({type:Number})],mt.prototype,"completados",void 0),c([u({type:Number})],mt.prototype,"conErrores",void 0),mt=c([_("progress-bar")],mt);class ut extends f{constructor(){super(...arguments);this.messages=[];this.nextId=0}static styles=w`
    :host {
      position: fixed;
      bottom: var(--spacing-lg);
      right: var(--spacing-lg);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm);
      pointer-events: none;
    }

    .toast {
      padding: var(--spacing-sm) var(--spacing-md);
      border-radius: var(--radius-md);
      font-size: var(--font-size-small);
      font-family: var(--font-serif);
      box-shadow: var(--elevation-5);
      animation: toast-in var(--duration-slow) var(--ease-spring), toast-out var(--duration-normal) var(--ease-in-out) 2.7s forwards;
      max-width: 300px;
      pointer-events: auto;
      border: 1px solid rgba(255, 248, 236, 0.1);
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      cursor: pointer;
    }

    .toast--info {
      background: linear-gradient(135deg, #3B2418, #2C1810);
      color: var(--color-parchment-light);
    }

    .toast--warn {
      background: linear-gradient(135deg, #E6862B, var(--color-warning));
      color: var(--color-ink);
    }

    .toast--error {
      background: linear-gradient(135deg, #E07070, var(--color-error));
      color: white;
    }

    .toast--closing {
      animation: toast-out var(--duration-normal) var(--ease-in-out) forwards;
    }

    @keyframes toast-in {
      from {
        opacity: 0;
        transform: translateY(16px) scale(0.92);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes toast-out {
      from {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      to {
        opacity: 0;
        transform: translateY(8px) scale(0.96);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .toast {
        animation: none;
      }
    }
  `;show(e,t="info"){let r=++this.nextId;this.messages=[...this.messages,{id:r,message:e,level:t}],setTimeout(()=>{this.dismissToast(r)},3000)}dismissToast(e){this.messages=this.messages.filter((t)=>t.id!==e)}render(){return p`
      ${this.messages.map((e)=>p`
        <div class="toast toast--${e.level}" @click=${()=>this.dismissToast(e.id)}>
          ${e.message}
        </div>
      `)}
    `}}c([S()],ut.prototype,"messages",void 0),ut=c([_("app-toast")],ut);class ht extends f{constructor(){super(...arguments);this.title="";this.open=!1}static styles=w`
    :host {
      position: fixed;
      inset: 0;
      background: radial-gradient(ellipse at center, rgba(44, 24, 16, 0.4), rgba(44, 24, 16, 0.55));
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 900;
      animation: fade-in var(--duration-normal) var(--ease-out);
    }

    .modal {
      background: linear-gradient(180deg, var(--color-parchment-light) 0%, #FBF3E4 100%);
      background-image: var(--texture-paper), linear-gradient(180deg, var(--color-parchment-light) 0%, #FBF3E4 100%);
      background-size: 200px 200px, 100% 100%;
      background-blend-mode: soft-light, normal;
      border-radius: var(--radius-lg);
      padding: var(--spacing-lg);
      min-width: 320px;
      max-width: 480px;
      box-shadow: var(--elevation-4);
      border: 1px solid rgba(44, 24, 16, 0.12);
      font-family: var(--font-serif);
      animation: modal-in var(--duration-slow) var(--ease-spring);
      position: relative;
    }

    .modal::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--radius-lg);
      pointer-events: none;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.15);
    }

    @keyframes modal-in {
      from {
        opacity: 0;
        transform: scale(0.92) translateY(8px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    .modal__title {
      font-size: var(--font-size-h2);
      font-weight: 600;
      margin-bottom: var(--spacing-md);
      color: var(--color-ink);
      font-family: var(--font-display);
    }

    .modal__content {
      color: var(--color-ink-soft);
      line-height: var(--line-height-verso);
    }

    .modal__actions {
      display: flex;
      justify-content: flex-end;
      gap: var(--spacing-sm);
      margin-top: var(--spacing-lg);
    }

    @media (max-width: 767px) {
      .modal {
        width: 100%;
        max-width: 100%;
        min-width: 0;
        margin: 0 1rem;
        max-height: 84vh;
        overflow-y: auto;
        padding: var(--spacing-md);
      }

      .btn {
        min-height: 42px;
        flex: 1;
        justify-content: center;
        text-align: center;
      }
    }

    .btn {
      padding: var(--spacing-sm) var(--spacing-md);
      border-radius: var(--radius-sm);
      font-family: var(--font-serif);
      font-size: var(--font-size-small);
      cursor: pointer;
      transition: background-color var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out);
    }

    .btn--primary {
      background: linear-gradient(180deg, var(--color-accent-light), var(--color-accent));
      color: white;
      border: none;
      box-shadow: var(--elevation-1);
    }

    .btn--primary:hover {
      background: linear-gradient(180deg, #B3623A, var(--color-accent-light));
      box-shadow: var(--elevation-2);
    }

    .btn--primary:active {
      transform: scale(0.96);
    }

    .btn--secondary {
      background: transparent;
      color: var(--color-ink-soft);
      border: 1px solid rgba(44, 24, 16, 0.2);
    }

    .btn--secondary:hover {
      background: rgba(139, 69, 19, 0.08);
      box-shadow: var(--elevation-1);
    }

    .btn--secondary:active {
      transform: scale(0.96);
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @media (prefers-reduced-motion: reduce) {
      .modal {
        animation: none;
      }
    }
  `;render(){if(!this.open)return p``;return p`
      <div class="modal" @click=${(e)=>e.stopPropagation()}>
        ${this.title?p`<div class="modal__title">${this.title}</div>`:""}
        <div class="modal__content">
          <slot></slot>
        </div>
        <div class="modal__actions">
          <button class="btn btn--primary" @click=${this.onConfirm}>
            <slot name="confirm-text">Aceptar</slot>
          </button>
          <button class="btn btn--secondary" @click=${this.onCancel}>
            <slot name="cancel-text">Cancelar</slot>
          </button>
        </div>
      </div>
    `}onConfirm(){this.dispatchEvent(new CustomEvent("confirm",{bubbles:!0,composed:!0}))}onCancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}onBackdropClick(){this.onCancel()}}c([u({type:String})],ht.prototype,"title",void 0),c([u({type:Boolean})],ht.prototype,"open",void 0),ht=c([_("app-modal")],ht);class gt extends f{constructor(){super(...arguments);this.query="";this.tipoRima="consonante";this.categoria="";this.numSilabas=0;this.debounceTimer=null}static styles=w`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm);
      padding: 0.75rem;
      font-family: var(--font-serif);
    }

    .search-container {
      position: relative;
    }

    .search-icon {
      position: absolute;
      left: 0.6rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--color-ink-muted);
      pointer-events: none;
      display: flex;
      align-items: center;
      transition: color var(--duration-fast) var(--ease-out);
    }

    .search-input:focus ~ .search-icon {
      color: var(--color-accent);
    }

    .search-input {
      width: 100%;
      padding: 0.45rem 0.5rem 0.45rem 1.9rem;
      border: 1px solid rgba(44, 24, 16, 0.2);
      border-radius: var(--radius-sm);
      background: linear-gradient(180deg, #FFFDF8, #FFF8EC);
      font-family: var(--font-serif);
      font-size: var(--font-size-small);
      color: var(--color-ink);
      outline: none;
      transition: border-color var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out);
      box-sizing: border-box;
      box-shadow: var(--shadow-inset);
    }

    .search-input:focus {
      border-color: var(--color-accent);
      box-shadow: var(--shadow-focus-strong), var(--shadow-inset);
    }

    .search-input::placeholder {
      color: var(--color-ink-muted);
      font-style: italic;
    }

    .search-clear {
      position: absolute;
      right: 0.4rem;
      top: 50%;
      transform: translateY(-50%);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--color-ink-muted);
      padding: 0.25rem;
      border-radius: 50%;
      background: transparent;
      border: none;
      transition: background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out);
      opacity: 0;
      pointer-events: none;
    }

    .search-clear--visible {
      opacity: 1;
      pointer-events: auto;
    }

    .search-clear:hover {
      background: rgba(139, 69, 19, 0.12);
      color: var(--color-accent);
    }

    .rhyme-type-toggle {
      display: flex;
      gap: 0.25rem;
      background: rgba(44, 24, 16, 0.08);
      border-radius: var(--radius-sm);
      padding: 3px;
      box-shadow: var(--shadow-inset);
    }

    .rhyme-type-btn {
      flex: 1;
      padding: 0.3rem 0.5rem;
      border: none;
      border-radius: var(--radius-xs);
      font-family: var(--font-serif);
      font-size: var(--font-size-metrica);
      cursor: pointer;
      background: transparent;
      color: var(--color-ink-soft);
      transition: background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);
    }

    .rhyme-type-btn--active {
      background: linear-gradient(180deg, var(--color-accent-light), var(--color-accent));
      color: var(--color-parchment-light);
      box-shadow: var(--elevation-2);
    }

    .rhyme-type-btn:hover:not(.rhyme-type-btn--active) {
      background: rgba(139, 69, 19, 0.08);
    }

    .filtros-section {
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    }

    .filtros-label {
      font-size: var(--font-size-caption);
      color: var(--color-ink-muted);
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide);
      font-family: var(--font-display);
      font-weight: 500;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
    }

    .chip {
      padding: 0.15rem 0.5rem;
      border: 1px solid rgba(44, 24, 16, 0.15);
      border-radius: var(--radius-pill);
      font-size: var(--font-size-caption);
      font-family: var(--font-serif);
      cursor: pointer;
      background: transparent;
      color: var(--color-ink-soft);
      transition: all var(--duration-fast) var(--ease-out);
    }

    .chip--active {
      background: linear-gradient(180deg, var(--color-accent-light), var(--color-accent));
      color: var(--color-parchment-light);
      border-color: var(--color-accent);
      box-shadow: var(--elevation-1);
      transform: scale(1.04);
    }

    .chip:hover:not(.chip--active) {
      background: rgba(139, 69, 19, 0.08);
      border-color: rgba(139, 69, 19, 0.3);
    }

    .silabas-filtro {
      display: flex;
      gap: 0.25rem;
      flex-wrap: wrap;
    }

    .silaba-chip {
      min-width: 1.5rem;
      text-align: center;
    }

    @media (max-width: 767px) {
      .search-input {
        min-height: 42px;
        font-size: 0.9375rem;
      }

      .rhyme-type-btn {
        min-height: 40px;
      }

      .chip {
        min-height: 34px;
      }
    }
  `;onInput(e){let t=e.target.value;if(this.query=t,this.debounceTimer)clearTimeout(this.debounceTimer);this.debounceTimer=setTimeout(()=>{this.emitSearch()},200)}clearSearch(){this.query="",this.emitSearch()}setTipoRima(e){this.tipoRima=e,this.emitSearch()}setCategoria(e){this.categoria=this.categoria===e?"":e,this.emitSearch()}setNumSilabas(e){this.numSilabas=this.numSilabas===e?0:e,this.emitSearch()}emitSearch(){let e={tipoRima:this.tipoRima};if(this.categoria)e.categoria=this.categoria;if(this.numSilabas>0)e.numSilabas=this.numSilabas;this.dispatchEvent(new CustomEvent("search-change",{detail:{query:this.query,filtros:e},bubbles:!0,composed:!0}))}render(){let e=[{key:"",label:"Todas"},{key:"sustantivo",label:"Sustantivo"},{key:"verbo",label:"Verbo"},{key:"adjetivo",label:"Adjetivo"},{key:"adverbio",label:"Adverbio"}],t=[1,2,3,4,5];return p`
      <div class="search-container">
        <input
          class="search-input"
          type="text"
          placeholder="Buscar rima…"
          .value=${this.query}
          @input=${this.onInput}
          aria-label="Buscar rima"
        />
        <span class="search-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </span>
        ${this.query?p`
          <button class="search-clear search-clear--visible" @click=${this.clearSearch} aria-label="Limpiar búsqueda">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        `:""}
      </div>

      <div class="rhyme-type-toggle">
        <button
          class="rhyme-type-btn ${this.tipoRima==="consonante"?"rhyme-type-btn--active":""}"
          @click=${()=>this.setTipoRima("consonante")}
        >
          Consonante
        </button>
        <button
          class="rhyme-type-btn ${this.tipoRima==="asonante"?"rhyme-type-btn--active":""}"
          @click=${()=>this.setTipoRima("asonante")}
        >
          Asonante
        </button>
      </div>

      <div class="filtros-section">
        <span class="filtros-label">Categoría</span>
        <div class="chips">
          ${e.map((r)=>p`
            <button
              class="chip ${this.categoria===r.key?"chip--active":""}"
              @click=${()=>this.setCategoria(r.key)}
            >
              ${r.label}
            </button>
          `)}
        </div>
      </div>

      <div class="filtros-section">
        <span class="filtros-label">Sílabas</span>
        <div class="silabas-filtro">
          ${t.map((r)=>p`
            <button
              class="chip silaba-chip ${this.numSilabas===r?"chip--active":""}"
              @click=${()=>this.setNumSilabas(r)}
            >
              ${r}
            </button>
          `)}
          <button
            class="chip ${this.numSilabas===0?"chip--active":""}"
            @click=${()=>this.setNumSilabas(0)}
          >
            Todas
          </button>
        </div>
      </div>
    `}}c([u({type:String})],gt.prototype,"query",void 0),c([u({type:String})],gt.prototype,"tipoRima",void 0),c([u({type:String})],gt.prototype,"categoria",void 0),c([u({type:Number})],gt.prototype,"numSilabas",void 0),gt=c([_("rhyme-search-input")],gt);class ft extends f{constructor(){super(...arguments);this.results=[];this.loading=!1;this.page=0;this.totalPages=0;this.totalResults=0}static styles=w`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      font-family: var(--font-serif);
    }

    .results-container {
      flex: 1;
      overflow-y: auto;
      padding: 0.5rem 0.75rem;
    }

    .loading {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0.5rem 0.75rem;
      flex-direction: column;
      gap: 0.6rem;
    }

    .skeleton-row {
      height: 14px;
      border-radius: var(--radius-xs);
      background: linear-gradient(90deg, rgba(139, 69, 19, 0.08), rgba(139, 69, 19, 0.18), rgba(139, 69, 19, 0.08));
      background-size: 200% 100%;
      animation: skeleton-shimmer 1.4s var(--ease-in-out) infinite;
    }
    .skeleton-row--short { width: 40%; }
    .skeleton-row--medium { width: 65%; }
    .skeleton-row--long { width: 85%; }

    @keyframes skeleton-shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    .loading-spinner-wrapper {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-sm);
      color: var(--color-ink-muted);
      font-style: italic;
      font-size: var(--font-size-small);
      padding: 1rem 0.75rem;
    }

    .loading-spinner {
      width: 16px;
      height: 16px;
      border: 2px solid rgba(139, 69, 19, 0.15);
      border-top-color: var(--color-accent);
      border-right-color: var(--color-accent-light);
      border-radius: 50%;
      animation: spin var(--duration-slow) linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      color: var(--color-ink-muted);
      font-style: italic;
      font-family: var(--font-serif);
      gap: var(--spacing-sm);
      text-align: center;
    }

    .empty-state svg {
      color: var(--color-ink-faint);
    }

    .empty-state-text {
      font-size: var(--font-size-small);
    }

    .categoria-group {
      margin-bottom: 0.75rem;
      animation: fadeInUp var(--duration-slow) var(--ease-out) both;
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .categoria-header {
      font-size: var(--font-size-caption);
      text-transform: uppercase;
      letter-spacing: var(--letter-spacing-wide);
      color: var(--color-ink-muted);
      margin-bottom: 0.25rem;
      padding: 0.2rem 0.5rem;
      background: linear-gradient(135deg, rgba(139, 69, 19, 0.09), rgba(139, 69, 19, 0.05));
      border-radius: var(--radius-xs);
      font-weight: 600;
      font-family: var(--font-display);
      position: relative;
      padding-left: 0.55rem;
    }

    .categoria-header::after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      height: 60%;
      background: linear-gradient(180deg, var(--color-accent), var(--color-accent-light));
      border-radius: 2px;
    }

    .campo-group {
      margin-bottom: 0.25rem;
      padding-left: 0.5rem;
      border-left: 2px solid rgba(139, 69, 19, 0.12);
    }

    .campo-header {
      font-size: var(--font-size-micro);
      color: var(--color-accent-light);
      padding: 0.1rem 0.5rem;
      font-style: italic;
      font-family: var(--font-serif);
    }

    .result-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.2rem 0.5rem;
      border-radius: var(--radius-xs);
      cursor: pointer;
      transition: background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out);
      position: relative;
    }

    .result-item:hover {
      background: linear-gradient(90deg, rgba(139, 69, 19, 0.08), rgba(139, 69, 19, 0.12), rgba(139, 69, 19, 0.08));
      transform: translateX(3px);
    }

    .result-item:active {
      background: rgba(139, 69, 19, 0.15);
      transform: translateX(3px) scale(0.99);
    }

    .insert-arrow {
      margin-left: auto;
      opacity: 0;
      transform: translateX(-4px);
      transition: opacity var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out);
      color: var(--color-accent);
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
    }

    .result-item:hover .insert-arrow {
      opacity: 1;
      transform: translateX(0);
    }

    .result-palabra {
      font-size: 0.9375rem;
      font-weight: 600;
      color: var(--color-ink);
      font-family: var(--font-serif);
    }

    .result-meta {
      font-size: var(--font-size-caption);
      color: var(--color-ink-muted);
      font-family: var(--font-mono);
      font-variant-numeric: tabular-nums;
    }

    .result-meta--categoria {
      color: var(--color-accent-light);
      font-family: var(--font-serif);
      font-style: italic;
    }

    .result-count {
      font-size: var(--font-size-micro);
      color: var(--color-ink-muted);
      font-family: var(--font-mono);
      font-variant-numeric: tabular-nums;
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.25rem;
      padding: 0.5rem 0.75rem;
      border-top: 1px solid rgba(44, 24, 16, 0.1);
      flex-shrink: 0;
    }

    .pagination-btn {
      background: rgba(139, 69, 19, 0.06);
      border: 1px solid rgba(139, 69, 19, 0.15);
      color: var(--color-ink-soft);
      padding: 0.25rem 0.55rem;
      border-radius: var(--radius-xs);
      cursor: pointer;
      font-family: var(--font-mono);
      font-size: var(--font-size-caption);
      font-variant-numeric: tabular-nums;
      transition: background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out);
      min-width: 28px;
      text-align: center;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .pagination-btn:hover:not(:disabled) {
      background: rgba(139, 69, 19, 0.15);
      box-shadow: var(--elevation-1);
    }

    .pagination-btn:active:not(:disabled) {
      transform: scale(0.94);
    }

    .pagination-btn:disabled {
      opacity: 0.35;
      cursor: default;
    }

    .pagination-btn--active {
      background: linear-gradient(180deg, var(--color-accent-light), var(--color-accent));
      color: var(--color-parchment-light);
      border-color: var(--color-accent);
      box-shadow: var(--elevation-1);
    }

    .pagination-info {
      font-size: var(--font-size-micro);
      color: var(--color-ink-muted);
      font-family: var(--font-mono);
      font-variant-numeric: tabular-nums;
      margin: 0 0.5rem;
      white-space: nowrap;
    }
  `;onSelect(e){this.dispatchEvent(new CustomEvent("rhyme-select",{detail:{palabra:e},bubbles:!0,composed:!0}))}gotoPage(e){if(e<0||e>=this.totalPages)return;this.dispatchEvent(new CustomEvent("page-change",{detail:{page:e},bubbles:!0,composed:!0}))}render(){if(this.loading)return p`
        <div class="results-container">
          <div class="loading">
            ${[1,2,3,4,5,6,7,8].map((t)=>p`
              <div class="skeleton-row skeleton-row--${t%3===0?"short":t%2===0?"long":"medium"}"></div>
            `)}
          </div>
        </div>
      `;if(this.results.length===0)return p`
        <div class="results-container">
          <div class="empty-state">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span class="empty-state-text">No se encontraron rimas</span>
          </div>
        </div>
      `;let e=this.agruparPorCategoria(this.results);return p`
      <div class="results-container">
        ${Array.from(e.entries()).map(([t,r])=>{let o=this.agruparPorCampo(r),a=o.size>1;return p`
            <div class="categoria-group">
              <div class="categoria-header">${t}</div>
              ${a?Array.from(o.entries()).map(([i,s])=>p`
                    <div class="campo-group">
                      <div class="campo-header">${i==="sin_campo"?"":i} (${s.length})</div>
                      ${s.map((n)=>this.renderItem(n))}
                    </div>
                  `):r.map((i)=>this.renderItem(i))}
            </div>
          `})}
        <div class="result-count">${this.totalResults} resultados</div>
      </div>
      ${this.totalPages>1?this.renderPagination():""}
    `}renderItem(e){return p`
      <div class="result-item" @click=${()=>this.onSelect(e.palabra)}>
        <span class="result-palabra">${e.palabra}</span>
        <span class="result-meta result-meta--categoria">(${e.categoria})</span>
        <span class="result-meta">${e.numSilabas} síl.</span>
        <span class="insert-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </span>
      </div>
    `}renderPagination(){let t=Math.floor(2.5),r=Math.max(0,this.page-t),o=Math.min(this.totalPages,r+5);if(o-r<5)r=Math.max(0,o-5);let a=[];for(let i=r;i<o;i++)a.push(i);return p`
      <div class="pagination">
        <button
          class="pagination-btn"
          ?disabled=${this.page<=0}
          @click=${()=>this.gotoPage(0)}
          title="Primera página"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>
        </button>
        <button
          class="pagination-btn"
          ?disabled=${this.page<=0}
          @click=${()=>this.gotoPage(this.page-1)}
          title="Anterior"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        ${a.map((i)=>p`
          <button
            class="pagination-btn ${i===this.page?"pagination-btn--active":""}"
            @click=${()=>this.gotoPage(i)}
          >${i+1}</button>
        `)}

        <button
          class="pagination-btn"
          ?disabled=${this.page>=this.totalPages-1}
          @click=${()=>this.gotoPage(this.page+1)}
          title="Siguiente"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <button
          class="pagination-btn"
          ?disabled=${this.page>=this.totalPages-1}
          @click=${()=>this.gotoPage(this.totalPages-1)}
          title="Última página"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
        </button>

        <span class="pagination-info">${this.page+1} / ${this.totalPages}</span>
      </div>
    `}agruparPorCategoria(e){let t=new Map;for(let r of e){let o=r.categoria||"otro";if(!t.has(o))t.set(o,[]);t.get(o).push(r)}return t}agruparPorCampo(e){let t=new Map;for(let r of e){let o=r.campoSemantico||"sin_campo";if(!t.has(o))t.set(o,[]);t.get(o).push(r)}return t}}c([u({type:Array})],ft.prototype,"results",void 0),c([u({type:Boolean})],ft.prototype,"loading",void 0),c([u({type:Number})],ft.prototype,"page",void 0),c([u({type:Number})],ft.prototype,"totalPages",void 0),c([u({type:Number})],ft.prototype,"totalResults",void 0),ft=c([_("rhyme-result-list")],ft);class vt{constructor(){this.db=null}async initialize(){if(this.db)return;return new Promise((e,t)=>{let r=indexedDB.open("ElTallerCorpus",1);r.onupgradeneeded=(o)=>{let a=o.target.result;if(!a.objectStoreNames.contains("palabras")){let i=a.createObjectStore("palabras",{keyPath:"palabra"});i.createIndex("terminacion","terminacion",{unique:!1}),i.createIndex("categoria","categoria",{unique:!1}),i.createIndex("campoSemantico","campoSemantico",{unique:!1})}},r.onsuccess=()=>{this.db=r.result,e()},r.onerror=()=>{t(r.error||Error("Error al abrir IndexedDB"))}})}async isPopulated(){if(!this.db)return!1;return new Promise((e)=>{try{let o=this.db.transaction("palabras","readonly").objectStore("palabras").count();o.onsuccess=()=>e(o.result>0),o.onerror=()=>e(!1)}catch{e(!1)}})}async importWords(e){if(!this.db)throw Error("CorpusDB no inicializada");let t=await this.getExistingKeys();for(let r=0;r<e.length;r+=500){let o=e.slice(r,r+500);await this.importBatch(o,t)}}async getExistingKeys(){return new Promise((e)=>{let o=this.db.transaction("palabras","readonly").objectStore("palabras").getAllKeys();o.onsuccess=()=>e(new Set(o.result.map((a)=>String(a)))),o.onerror=()=>e(new Set)})}async importBatch(e,t){return new Promise((r,o)=>{let a=this.db.transaction("palabras","readwrite"),i=a.objectStore("palabras");for(let s of e)if(!t.has(s.palabra))i.put(s),t.add(s.palabra);a.oncomplete=()=>r(),a.onerror=()=>o(a.error)})}async buscarPorTerminacion(e,t,r=0){if(!this.db)throw Error("CorpusDB no inicializada");let o=await this.getAllByIndex("terminacion",e,r);return this.aplicarFiltros(o,t)}async buscarPorTexto(e,t=200){if(!this.db)throw Error("CorpusDB no inicializada");if(!e||e.length<1)return[];let r=e.toLowerCase().trim(),o=[];return new Promise((a,i)=>{let s=this.db.transaction("palabras","readonly"),n=s.objectStore("palabras"),l=IDBKeyRange.bound(r,r+"￿"),d=n.openCursor(l);d.onsuccess=(m)=>{let h=m.target.result;if(h){if(o.push(h.value),t===0||o.length<t)h.continue()}},s.oncomplete=()=>a(o),s.onerror=()=>i(s.error)})}async buscarRimas(e,t="consonante",r){if(t==="consonante")return this.buscarPorTerminacion(e,r);let o=[...e.toLowerCase()].filter((s)=>"aeiouáéíóú".includes(s)).join("");if(!o)return[];let i=(await this.getAllByIndex("terminacion",e[0])).filter((s)=>[...s.terminacion.toLowerCase()].filter((l)=>"aeiouáéíóú".includes(l)).join("")===o);return this.aplicarFiltros(i,r)}async count(){if(!this.db)return 0;return new Promise((e)=>{let o=this.db.transaction("palabras","readonly").objectStore("palabras").count();o.onsuccess=()=>e(o.result),o.onerror=()=>e(0)})}close(){if(this.db)this.db.close(),this.db=null}getAllByIndex(e,t,r=500){return new Promise((o,a)=>{let i=this.db.transaction("palabras","readonly"),n=i.objectStore("palabras").index(e),l=IDBKeyRange.only(t),d=[],m=n.openCursor(l);m.onsuccess=(h)=>{let y=h.target.result;if(y){if(d.push(y.value),r===0||d.length<r)y.continue()}},i.oncomplete=()=>o(d),i.onerror=()=>a(i.error)})}aplicarFiltros(e,t){if(!t)return e;let r=e;if(t?.categoria)r=r.filter((o)=>o.categoria===t.categoria);if(t?.campoSemantico)r=r.filter((o)=>o.campoSemantico===t.campoSemantico);if(t?.numSilabas!==void 0&&t.numSilabas>0)r=r.filter((o)=>o.numSilabas===t.numSilabas);return r}}var lo=500,co="/data/corpus/palabras.json";class Z{static async ensureLoaded(e){if(await e.isPopulated())return;document.dispatchEvent(new CustomEvent("corpus:loading-start",{detail:{message:"Cargando diccionario de rimas..."}}));try{let r=await fetch(co);if(!r.ok)throw Error(`Error al cargar corpus: ${r.status} ${r.statusText}`);await Z.streamImport(e,r),document.dispatchEvent(new CustomEvent("corpus:ready"))}catch(r){console.error("[CorpusLoader] Error al cargar corpus:",r),document.dispatchEvent(new CustomEvent("corpus:error",{detail:{message:"Error al cargar el diccionario de rimas"}}))}}static async streamImport(e,t){let r=t.body;if(!r)throw Error("Response body is null");let o=0,a=[],i=new Set,l=r.pipeThrough(new DecompressionStream("gzip")).pipeThrough(new TextDecoderStream).getReader(),d="";try{while(!0){let{done:m,value:h}=await l.read();if(m)break;d+=h;let y=d.split(`
`);d=y.pop()||"";for(let g of y){if(!g.trim())continue;try{let T=JSON.parse(g);if(a.push(T),a.length>=lo)await e.importBatch(a,i),o+=a.length,Z.reportProgress(o),a=[],await Z.yieldToEventLoop()}catch{}}}if(d.trim())try{let m=JSON.parse(d);a.push(m)}catch{}if(a.length>0)await e.importBatch(a,i),o+=a.length,Z.reportProgress(o)}finally{l.releaseLock()}}static reportProgress(e){document.dispatchEvent(new CustomEvent("corpus:progress",{detail:{progress:-1,loaded:e,total:0}}))}static async yieldToEventLoop(){if(typeof requestIdleCallback<"u")await new Promise((e)=>{requestIdleCallback(()=>e(),{timeout:500})});else await new Promise((e)=>setTimeout(e,0))}}class bt extends f{constructor(){super(...arguments);this.open=!1;this.versoActivo=null;this.palabraActual="";this.corpusReady=!1;this.loading=!1;this.corpusWordsLoaded=0;this.results=[];this.searchQuery="";this.searchFiltros={};this.allResults=[];this.page=0;this.pageSize=50;this.db=null;this.rhymeEngine=new Q;this.onKeyDown=(e)=>{if(e.key==="Escape"&&this.open)this.close()};this.onCorpusProgress=(e)=>{let{loaded:t}=e.detail;if(typeof t==="number")this.corpusWordsLoaded=t}}static styles=w`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      font-family: var(--font-serif);
      background: linear-gradient(180deg, #E8D5B0 0%, #E2CFAB 100%);
      background-image: var(--texture-paper), linear-gradient(180deg, #E8D5B0 0%, #E2CFAB 100%);
      background-size: 200px 200px, 100% 100%;
      background-blend-mode: soft-light, normal;
      overflow: hidden;
      transition: opacity var(--duration-slow) var(--ease-out), transform var(--duration-slow) var(--ease-out);
    }

    :host([closed]) {
      display: none;
    }

    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 0.75rem;
      border-bottom: 1px solid rgba(44, 24, 16, 0.1);
      flex-shrink: 0;
    }

    .panel-title {
      font-size: var(--font-size-small);
      font-weight: 600;
      color: var(--color-accent);
      letter-spacing: var(--letter-spacing-wide);
      font-family: var(--font-display);
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-xs);
    }

    .panel-title svg {
      flex-shrink: 0;
    }

    .panel-subtitle {
      font-size: var(--font-size-micro);
      color: var(--color-ink-muted);
      font-style: italic;
      font-family: var(--font-mono);
    }

    .close-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--color-ink-muted);
      padding: 0.3rem;
      border-radius: var(--radius-sm);
      transition: background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .close-btn:hover {
      background: rgba(139, 69, 19, 0.1);
      color: var(--color-ink-soft);
    }

    .close-btn:active {
      transform: scale(0.92);
    }

    .active-verso {
      font-size: var(--font-size-caption);
      color: var(--color-accent-light);
      padding: 0.3rem 0.75rem;
      border-bottom: 1px solid rgba(44, 24, 16, 0.06);
      flex-shrink: 0;
      font-style: italic;
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-xs);
    }

    .active-verso::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-accent-light), var(--color-accent));
      box-shadow: 0 0 4px rgba(139, 69, 19, 0.4);
      flex-shrink: 0;
    }

    .loading-corpus {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      gap: var(--spacing-md);
      flex: 1;
    }

    .corpus-spinner {
      width: 32px;
      height: 32px;
      border: 3px solid rgba(139, 69, 19, 0.15);
      border-top-color: var(--color-accent);
      border-right-color: var(--color-accent-light);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      filter: drop-shadow(0 2px 4px rgba(44, 24, 16, 0.12));
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .corpus-loading-text {
      font-size: var(--font-size-small);
      color: var(--color-ink-muted);
      font-style: italic;
      font-family: var(--font-serif);
      text-align: center;
    }

    .corpus-loading-sub {
      font-size: var(--font-size-caption);
      color: var(--color-ink-faint);
      font-family: var(--font-mono);
      text-align: center;
      margin-top: -0.5rem;
    }

    .corpus-loading-progress {
      font-size: var(--font-size-metrica);
      color: var(--color-accent);
      font-weight: 600;
      font-family: var(--font-mono);
      font-variant-numeric: tabular-nums;
      text-align: center;
      background: linear-gradient(135deg, rgba(139, 69, 19, 0.08), rgba(139, 69, 19, 0.04));
      padding: 0.3rem 0.85rem;
      border-radius: var(--radius-pill);
      border: 1px solid rgba(139, 69, 19, 0.12);
      margin-top: 0.25rem;
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-2xs);
    }

    .corpus-loading-note {
      font-size: var(--font-size-micro);
      color: var(--color-ink-faint);
      text-align: center;
      margin-top: var(--spacing-sm);
      font-style: italic;
      font-family: var(--font-serif);
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
      overflow: hidden;
      animation: fadeIn var(--duration-slow) var(--ease-out);
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @media (max-width: 767px) {
      .close-btn {
        min-height: 40px;
        min-width: 40px;
      }
    }
  `;connectedCallback(){super.connectedCallback(),this.initCorpus(),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("corpus:progress",this.onCorpusProgress)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("corpus:progress",this.onCorpusProgress)}async initCorpus(){try{if(this.db=new vt,await this.db.initialize(),await Z.ensureLoaded(this.db),this.corpusReady=!0,this.palabraActual)this.doSearch(this.palabraActual,this.searchFiltros)}catch(e){console.error("[RhymeBrowser] Error al inicializar corpus:",e)}}close(){this.dispatchEvent(new CustomEvent("panel-close",{bubbles:!0,composed:!0}))}onSearchChange(e){let{query:t,filtros:r}=e.detail;if(this.searchQuery=t,this.searchFiltros=r,!t||t.length<1){this.results=[],this.allResults=[];return}this.page=0,this.doSearch(t,r)}get totalPages(){return Math.ceil(this.allResults.length/this.pageSize)}onPageChange(e){this.page=e.detail.page,this.updateResults()}updateResults(){let e=this.page*this.pageSize;this.results=this.allResults.slice(e,e+this.pageSize)}async doSearch(e,t){if(!this.db||!this.corpusReady)return;this.loading=!0;try{let r=this.rhymeEngine.extraerTerminacionPalabra(e);if(!r){this.results=[];return}let o=await this.db.buscarRimas(r,t.tipoRima||"consonante",t);this.allResults=o.map((a)=>({palabra:a.palabra,terminacion:a.terminacion,categoria:a.categoria,campoSemantico:a.campoSemantico,numSilabas:a.numSilabas,acento:a.acento})),this.updateResults()}catch(r){console.error("[RhymeBrowser] Error en búsqueda:",r),this.results=[]}finally{this.loading=!1}}onRhymeSelect(e){let{palabra:t}=e.detail;this.dispatchEvent(new CustomEvent("rhyme-insert",{detail:{palabra:t,verso:this.versoActivo},bubbles:!0,composed:!0}))}render(){if(!this.open)return p``;return p`
      <div class="panel-header">
        <div>
          <div class="panel-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            Buscador de rimas
          </div>
          <div class="panel-subtitle">⌘R para cerrar</div>
        </div>
        <button class="close-btn" @click=${this.close} aria-label="Cerrar panel de rimas">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      ${this.versoActivo?p`
        <div class="active-verso">
          Verso ${this.versoActivo}${this.palabraActual?`: «${this.palabraActual}»`:""}
        </div>
      `:""}

      ${!this.corpusReady?p`
        <div class="loading-corpus">
          <div class="corpus-spinner"></div>
          <div class="corpus-loading-text">Preparando el diccionario de rimas…</div>
          <div class="corpus-loading-sub">642 mil palabras con todas sus conjugaciones</div>
          ${this.corpusWordsLoaded>0?p`
            <div class="corpus-loading-progress">
              ${this.corpusWordsLoaded.toLocaleString()} palabras indexadas
            </div>
          `:""}
          <div class="corpus-loading-note">
            Solo la primera vez — después será instantáneo
          </div>
        </div>
      `:p`
        <div class="content">
          <rhyme-search-input
            @search-change=${this.onSearchChange}
          ></rhyme-search-input>

          <rhyme-result-list
            .results=${this.results}
            .loading=${this.loading}
            .page=${this.page}
            .totalPages=${this.totalPages}
            .totalResults=${this.allResults.length}
            @rhyme-select=${this.onRhymeSelect}
            @page-change=${this.onPageChange}
          ></rhyme-result-list>
        </div>
      `}
    `}}c([u({type:Boolean,reflect:!0})],bt.prototype,"open",void 0),c([u({type:Object})],bt.prototype,"versoActivo",void 0),c([u({type:String})],bt.prototype,"palabraActual",void 0),c([S()],bt.prototype,"corpusReady",void 0),c([S()],bt.prototype,"loading",void 0),c([S()],bt.prototype,"corpusWordsLoaded",void 0),c([S()],bt.prototype,"results",void 0),c([S()],bt.prototype,"searchQuery",void 0),c([S()],bt.prototype,"searchFiltros",void 0),c([S()],bt.prototype,"allResults",void 0),c([S()],bt.prototype,"page",void 0),bt=c([_("rhyme-browser-panel")],bt);class yt extends f{static styles=w`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: var(--color-parchment);
      font-family: var(--font-serif);
    }

    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: var(--toolbar-height);
      padding: 0 var(--spacing-lg);
      background: linear-gradient(180deg, #E8D5B0 0%, #DECBA0 100%);
      background-image: var(--texture-paper), linear-gradient(180deg, #E8D5B0 0%, #DECBA0 100%);
      background-size: 200px 200px, 100% 100%;
      background-blend-mode: soft-light, normal;
      border-bottom: 1px solid rgba(44, 24, 16, 0.14);
      flex-shrink: 0;
      gap: var(--spacing-sm);
      box-shadow: var(--elevation-2);
      position: relative;
      z-index: 100;
    }

    .toolbar::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(139, 69, 19, 0.3) 20%, rgba(139, 69, 19, 0.3) 80%, transparent);
    }

    .toolbar__title {
      font-family: var(--font-display);
      font-size: var(--font-size-h2);
      font-weight: 600;
      color: var(--color-accent);
      letter-spacing: var(--letter-spacing-display);
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
    }

    .toolbar__title svg {
      flex-shrink: 0;
      filter: drop-shadow(0 1px 1px rgba(44, 24, 16, 0.1));
    }

    .toolbar__title-text {
      background: linear-gradient(135deg, var(--color-accent-light), var(--color-accent), var(--color-accent-dark));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: var(--color-accent);
    }

    .toolbar__title-divider {
      width: 1px;
      height: 18px;
      background: linear-gradient(180deg, transparent, rgba(139, 69, 19, 0.3), transparent);
      margin: 0 var(--spacing-2xs);
    }

    .toolbar__forms {
      display: flex;
      align-items: center;
      min-width: 0;
    }

    .toolbar__actions {
      display: flex;
      gap: 0.25rem;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
    }

    .toolbar-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.35rem 0.75rem;
      border-radius: var(--radius-sm);
      font-family: var(--font-serif);
      font-size: var(--font-size-small);
      color: var(--color-ink-soft);
      transition: background-color var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);
      background: transparent;
      border: 1px solid transparent;
      position: relative;
    }

    .toolbar-btn svg {
      flex-shrink: 0;
      transition: transform var(--duration-fast) var(--ease-out);
    }

    .toolbar-btn:hover {
      background: linear-gradient(180deg, rgba(139, 69, 19, 0.08), rgba(139, 69, 19, 0.12));
      color: var(--color-accent);
      box-shadow: var(--elevation-1);
    }

    .toolbar-btn:hover svg {
      transform: scale(1.08);
    }

    .toolbar-btn:active {
      background: rgba(139, 69, 19, 0.15);
      transform: scale(0.96);
    }

    .toolbar-btn__label {
      line-height: 1;
    }

    .toolbar-btn__kbd {
      font-family: var(--font-mono);
      font-size: var(--font-size-micro);
      color: var(--color-ink-faint);
      margin-left: var(--spacing-xs);
      padding: 1px 4px;
      border-radius: var(--radius-xs);
      background: rgba(44, 24, 16, 0.06);
      border: 1px solid rgba(44, 24, 16, 0.1);
      box-shadow: 0 1px 0 rgba(44, 24, 16, 0.08);
      line-height: 1.3;
    }

    .toolbar-forma {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: var(--font-size-metrica);
      color: var(--color-accent-light);
      padding: 0.2rem 0.6rem;
      border-radius: var(--radius-pill);
      background: linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(139, 69, 19, 0.06));
      border: 1px solid rgba(139, 69, 19, 0.15);
      font-family: var(--font-display);
      font-weight: 500;
      white-space: nowrap;
      letter-spacing: var(--letter-spacing-display);
    }

    .toolbar-forma::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-accent-light), var(--color-accent));
      box-shadow: 0 0 4px rgba(139, 69, 19, 0.4);
      flex-shrink: 0;
    }

    .layout-grid {
      display: grid;
      grid-template-columns: var(--panel-left-width) 1fr var(--panel-right-width);
      flex: 1;
      overflow: hidden;
      height: calc(100vh - var(--toolbar-height) - var(--footer-height));
    }

    .layout-grid--rhyme-hidden {
      grid-template-columns: 0 1fr var(--panel-right-width);
    }

    .panel-left {
      background: linear-gradient(180deg, #E8D5B0 0%, #E2CFAB 100%);
      background-image: var(--texture-paper), linear-gradient(180deg, #E8D5B0 0%, #E2CFAB 100%);
      background-size: 200px 200px, 100% 100%;
      background-blend-mode: soft-light, normal;
      border-right: 1px solid rgba(44, 24, 16, 0.12);
      box-shadow: inset -8px 0 12px -8px rgba(44, 24, 16, 0.1);
      overflow-y: auto;
      overflow-x: hidden;
      transition: width var(--duration-slow) var(--ease-out);
    }

    .layout-grid--rhyme-hidden .panel-left {
      width: 0;
      overflow: hidden;
    }

    .editor-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: var(--spacing-xl) var(--spacing-lg);
      overflow-y: auto;
      max-width: var(--editor-max-width);
      justify-self: center;
      width: 100%;
    }

    .panel-right {
      background: linear-gradient(180deg, #E8D5B0 0%, #E2CFAB 100%);
      background-image: var(--texture-paper), linear-gradient(180deg, #E8D5B0 0%, #E2CFAB 100%);
      background-size: 200px 200px, 100% 100%;
      background-blend-mode: soft-light, normal;
      border-left: 1px solid rgba(44, 24, 16, 0.12);
      box-shadow: inset 8px 0 12px -8px rgba(44, 24, 16, 0.1);
      overflow-y: auto;
      padding: var(--spacing-md);
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
    }

    .app-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: var(--footer-height);
      padding: 0 var(--spacing-lg);
      background: linear-gradient(180deg, #E2CFAB 0%, #D8C49E 100%);
      border-top: 1px solid rgba(44, 24, 16, 0.14);
      flex-shrink: 0;
      font-size: var(--font-size-caption);
      color: var(--color-ink-muted);
      font-family: var(--font-mono);
      letter-spacing: var(--letter-spacing-wide);
      box-shadow: inset 0 2px 4px rgba(44, 24, 16, 0.06);
    }

    .app-footer span {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-xs);
    }

    .shortcut-hint {
      color: var(--color-ink-muted);
      font-size: var(--font-size-micro);
      font-family: var(--font-mono);
    }

    .rhyme-panel-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--color-ink-muted);
      font-style: italic;
      font-size: var(--font-size-small);
      padding: var(--spacing-md);
      text-align: center;
    }

    /* Selector de forma */
    .form-selector-backdrop {
      position: fixed;
      inset: 0;
      background: radial-gradient(ellipse at center, rgba(44, 24, 16, 0.42), rgba(44, 24, 16, 0.58));
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 950;
      padding: var(--spacing-md);
      animation: fade-in var(--duration-normal) var(--ease-out);
    }

    .form-selector {
      background: linear-gradient(180deg, var(--color-parchment-light) 0%, #FBF3E4 100%);
      background-image: var(--texture-paper), linear-gradient(180deg, var(--color-parchment-light) 0%, #FBF3E4 100%);
      background-size: 200px 200px, 100% 100%;
      background-blend-mode: soft-light, normal;
      border-radius: var(--radius-lg);
      padding: var(--spacing-lg);
      max-width: 560px;
      width: 100%;
      max-height: 86vh;
      overflow-y: auto;
      box-shadow: var(--elevation-4);
      border: 1px solid rgba(44, 24, 16, 0.12);
      font-family: var(--font-serif);
      animation: modal-in var(--duration-slow) var(--ease-spring);
      position: relative;
    }

    .form-selector::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--radius-lg);
      pointer-events: none;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.15);
    }

    @keyframes modal-in {
      from {
        opacity: 0;
        transform: scale(0.92) translateY(8px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .form-selector__ornament {
      text-align: center;
      margin-bottom: var(--spacing-sm);
      opacity: 0.4;
      color: var(--color-accent);
      font-size: var(--font-size-metrica);
      letter-spacing: 0.3em;
      font-family: var(--font-display);
    }

    .form-selector__title {
      font-size: 1.35rem;
      font-weight: 600;
      color: var(--color-ink);
      margin-bottom: 0.25rem;
      font-family: var(--font-display);
      text-align: center;
      letter-spacing: var(--letter-spacing-display);
    }

    .form-selector__sub {
      font-size: var(--font-size-small);
      color: var(--color-ink-muted);
      font-style: italic;
      margin-bottom: var(--spacing-lg);
      text-align: center;
      font-family: var(--font-serif);
    }

    .form-selector__list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .form-option {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.2rem;
      text-align: left;
      width: 100%;
      padding: 0.85rem 1rem;
      border-radius: var(--radius-md);
      border: 1px solid rgba(44, 24, 16, 0.12);
      background: linear-gradient(180deg, rgba(245, 230, 200, 0.5), rgba(245, 230, 200, 0.3));
      cursor: pointer;
      font-family: var(--font-serif);
      transition: background-color var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);
      position: relative;
    }

    .form-option:hover {
      background: linear-gradient(180deg, rgba(139, 69, 19, 0.08), rgba(139, 69, 19, 0.04));
      border-color: rgba(139, 69, 19, 0.35);
      transform: translateX(2px);
      box-shadow: var(--elevation-2);
    }

    .form-option:active {
      transform: translateX(2px) scale(0.99);
    }

    .form-option__name {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--color-accent);
      font-family: var(--font-display);
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
    }

    .form-option__name::before {
      content: '';
      width: 3px;
      height: 1em;
      border-radius: 2px;
      background: linear-gradient(180deg, var(--color-accent-light), var(--color-accent));
      flex-shrink: 0;
    }

    .form-option__desc {
      font-size: var(--font-size-small);
      color: var(--color-ink-soft);
      line-height: var(--line-height-snug);
      padding-left: var(--spacing-sm);
    }

    .form-option__esquema {
      font-size: var(--font-size-metrica);
      color: var(--color-accent-light);
      font-style: italic;
      background: linear-gradient(135deg, rgba(139, 69, 19, 0.08), rgba(139, 69, 19, 0.04));
      padding: 0.1rem 0.45rem;
      border-radius: var(--radius-sm);
      font-family: var(--font-mono);
      letter-spacing: var(--letter-spacing-wide);
      margin-left: var(--spacing-sm);
      border: 1px solid rgba(139, 69, 19, 0.1);
    }

    .form-selector__actions {
      display: flex;
      justify-content: flex-end;
      margin-top: var(--spacing-lg);
    }

    .form-selector__cancel {
      padding: 0.5rem 1rem;
      border-radius: var(--radius-sm);
      font-family: var(--font-serif);
      font-size: var(--font-size-small);
      cursor: pointer;
      background: transparent;
      color: var(--color-ink-soft);
      border: 1px solid rgba(44, 24, 16, 0.2);
      transition: background-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);
    }

    .form-selector__cancel:hover {
      background: rgba(139, 69, 19, 0.08);
      box-shadow: var(--elevation-1);
    }

    .form-selector__cancel:active {
      transform: scale(0.96);
    }

    /* ── RESPONSIVE ───────────────────────────────────────────
       Desktop (>1100px): 3 columnas fijas (sin cambios).
       Tablet (<=1100px): editor en columna única; buscador de rimas
         como drawer lateral; plano derecho apilado debajo del editor.
       Móvil (<768px): toolbar compacto/envoltorio, drawer a pantalla
         completa, versos que envuelven, modal a ancho completo. */

    @media (max-width: 1100px) {
      .layout-grid {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        height: auto;
        min-height: 0;
        overflow: visible;
      }

      .layout-grid--rhyme-hidden {
        grid-template-columns: 1fr;
      }

      .editor-center {
        max-width: 780px;
        justify-self: center;
        overflow: visible;
        padding: var(--spacing-lg) var(--spacing-md);
      }

      .editor-center::before {
        display: none;
      }

      .panel-left {
        position: fixed;
        top: var(--toolbar-height);
        bottom: var(--footer-height);
        left: 0;
        width: min(360px, 88vw);
        height: auto;
        z-index: 800;
        box-shadow: var(--elevation-4), 6px 0 24px rgba(44, 24, 16, 0.2);
        border-right: 1px solid rgba(44, 24, 16, 0.15);
        border-radius: 0 var(--radius-md) var(--radius-md) 0;
        transition: transform var(--duration-slow) var(--ease-out), width var(--duration-slow) var(--ease-out);
        transform: translateX(0);
      }

      .layout-grid--rhyme-hidden .panel-left {
        width: min(360px, 88vw);
        transform: translateX(-110%);
        border-right: none;
      }

      .panel-right {
        border-left: none;
        border-top: 1px solid rgba(44, 24, 16, 0.1);
        overflow: visible;
        padding: var(--spacing-lg);
        max-width: 780px;
        justify-self: center;
        width: 100%;
        box-shadow: none;
      }
    }

    @media (max-width: 767px) {
      .toolbar {
        height: auto;
        min-height: var(--toolbar-height);
        flex-wrap: wrap;
        padding: 0.5rem 0.75rem;
        gap: 0.35rem;
      }

      .toolbar__title {
        font-size: 1.05rem;
      }

      .toolbar__forms {
        order: 3;
        width: 100%;
        justify-content: center;
      }

      .toolbar__actions {
        flex: 1;
        justify-content: flex-end;
      }

      .toolbar-btn {
        min-height: 40px;
        min-width: 40px;
        padding: 0.4rem 0.55rem;
        font-size: var(--font-size-small);
      }

      .toolbar-btn__kbd {
        display: none;
      }

      .editor-center {
        padding: 0.75rem 0.5rem;
      }

      .panel-right {
        padding: 0.875rem;
      }

      .panel-left {
        top: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        border-radius: 0;
      }

      .layout-grid--rhyme-hidden .panel-left {
        width: 100vw;
        transform: translateX(-110%);
      }

      .app-footer {
        height: auto;
        flex-wrap: wrap;
        gap: 0.25rem;
        padding: 0.4rem 0.75rem;
        font-size: var(--font-size-micro);
      }

      .form-selector-backdrop {
        padding: 0.5rem;
      }

      .form-selector {
        padding: var(--spacing-md);
        max-height: 86vh;
      }

      .form-selector__sub {
        font-size: var(--font-size-small);
      }

      .form-option {
        padding: 0.7rem 0.85rem;
      }

      .form-option__desc {
        font-size: var(--font-size-metrica);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;constructor(){super();this.soneto=this.createEmptySoneto("soneto");this.forma=F("soneto");this.analysisMap=new Map;this.rhymePanelOpen=!1;this.selectedVerso=null;this.completados=0;this.conErrores=0;this.formSelectorOpen=!1;this.eventBus=new Xe;this.storage=new Je;this.exportService=new at;this.analysisService=new tt(this.eventBus),this.autoSaveService=new rt(this.eventBus,this.storage,()=>this.soneto)}connectedCallback(){super.connectedCallback();let e=this.storage.loadLastSoneto();if(e)this.soneto=this.migrarSonetoGuardado(e);if(this.aplicarForma(),this.soneto.versos.some((t)=>t.texto.trim()))this.analysisService.loadVersos(this.soneto.versos);this.eventBus.on("analysis:complete",({analysis:t,esquema:r})=>{this.analysisMap=t,this.esquema=r;let o=this.soneto.versos.map((a)=>({...a,analysis:t.get(a.numero)||a.analysis}));this.soneto={...this.soneto,versos:o},this.updateProgress()}),this.eventBus.on("ui:toast",({message:t,level:r})=>{this.showToast(t,r)}),this.eventBus.on("soneto:new",()=>{}),this.eventBus.on("export:txt",()=>{this.exportarTxt()}),this.eventBus.on("export:clipboard",()=>{this.copiarPortapapeles()}),document.addEventListener("keydown",this.onKeyDown.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.autoSaveService.destroy(),this.analysisService.destroy(),document.removeEventListener("keydown",this.onKeyDown.bind(this))}render(){let e=this.soneto.versos.length,t=$e(this.forma,e);return p`
      <div class="toolbar">
        <div class="toolbar__title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l3-3"/><path d="M5.5 18.5l9-9a2.83 2.83 0 0 1 4 4l-9 9"/><path d="M14.5 13.5l4-4"/><path d="M19 4a3 3 0 0 1 3 3"/></svg>
          <span class="toolbar__title-text">El Taller</span>
          <span class="toolbar__title-divider"></span>
          <span style="font-size: var(--font-size-metrica); font-weight: 400; color: var(--color-ink-muted); font-family: var(--font-serif); font-style: italic;">Sonetos</span>
        </div>
        <div class="toolbar__forms">
          <span class="toolbar-forma" title="${this.forma.descripcion}">${this.forma.nombre}</span>
        </div>
        <div class="toolbar__actions">
          <button class="toolbar-btn" @click=${this.abrirSelector} title="Nuevo poema (Cmd+N)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            <span class="toolbar-btn__label">Nuevo</span>
          </button>
          <button class="toolbar-btn" @click=${this.toggleRhymePanel} title="Buscar rimas (Cmd+R)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="13" y2="11"/></svg>
            <span class="toolbar-btn__label">Rimas</span>
          </button>
          <button class="toolbar-btn" @click=${this.exportarTxt} title="Exportar a .txt">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span class="toolbar-btn__label">Exportar</span>
          </button>
          <button class="toolbar-btn" @click=${this.exportarPdf} title="Exportar a PDF">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13h6"/><path d="M9 17h6"/><path d="M9 9h2"/></svg>
            <span class="toolbar-btn__label">PDF</span>
          </button>
          <button class="toolbar-btn" @click=${this.copiarPortapapeles} title="Copiar al portapapeles">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
            <span class="toolbar-btn__label">Copiar</span>
          </button>
        </div>
      </div>

      <div class="layout-grid ${this.rhymePanelOpen?"":"layout-grid--rhyme-hidden"}">
        <aside class="panel-left">
          <rhyme-browser-panel
            .open=${this.rhymePanelOpen}
            .versoActivo=${this.selectedVerso}
            .palabraActual=${this.getPalabraActual()}
            @rhyme-insert=${this.onRhymeInsert}
            @panel-close=${this.onRhymePanelClose}
          ></rhyme-browser-panel>
        </aside>

        <main class="editor-center">
          <soneto-editor
            .forma=${this.forma}
            .versos=${this.soneto.versos}
            .titulo=${this.soneto.titulo||""}
            .estrategia=${this.soneto.estrategia||""}
            .activeVerso=${this.selectedVerso}
            @verso-input=${this.onVersoInput}
            @verso-blur=${this.onVersoBlur}
            @verso-focus=${this.onVersoFocus}
            @titulo-change=${this.onTituloChange}
            @estrategia-change=${this.onEstrategiaChange}
            @hiato-toggle=${this.onHiatoToggle}
            @verso-add=${this.onVersoAdd}
            @verso-remove=${this.onVersoRemove}
            @estrofa-add=${this.onEstrofaAdd}
            @estrofa-remove=${this.onEstrofaRemove}
          ></soneto-editor>

          <progress-bar
            .total=${e}
            .completados=${this.completados}
            .conErrores=${this.conErrores}
          ></progress-bar>
        </main>

        <aside class="panel-right">
          <metrics-panel
            .analysisMap=${this.analysisMap}
            .versos=${this.soneto.versos}
            .silabasObjetivo=${this.forma.silabasObjetivo}
          ></metrics-panel>
          <rhyme-scheme-panel
            .esquema=${this.esquema}
            .versos=${this.soneto.versos}
            .grupos=${t}
          ></rhyme-scheme-panel>
        </aside>
      </div>

      <div class="app-footer">
        <span>${this.forma.medidaDescripcion}</span>
        <span>${this.soneto.versos.filter((r)=>r.texto.trim()).length} / ${e} versos escritos</span>
      </div>

      ${this.formSelectorOpen?this.renderFormSelector():""}

      <app-toast></app-toast>
    `}renderFormSelector(){return p`
      <div class="form-selector-backdrop" @click=${this.cerrarSelector}>
        <div class="form-selector" @click=${(e)=>e.stopPropagation()} role="dialog" aria-label="Elegir forma poética">
          <div class="form-selector__ornament">❦</div>
          <div class="form-selector__title">Nueva composición</div>
          <div class="form-selector__sub">Elige una forma del Siglo de Oro español</div>
          <div class="form-selector__list">
            ${he.map((e)=>p`
              <button class="form-option" @click=${()=>this.nuevoPoemaDeForma(e.id)}>
                <span class="form-option__name">${e.nombre}</span>
                <span class="form-option__desc">${e.descripcion}</span>
                ${e.esquemaReferencia?p`<span class="form-option__esquema">${e.esquemaReferencia}</span>`:""}
              </button>
            `)}
          </div>
          <div class="form-selector__actions">
            <button class="form-selector__cancel" @click=${this.cerrarSelector}>Cancelar</button>
          </div>
        </div>
      </div>
    `}createEmptySoneto(e){let t=F(e),r=crypto.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`,o=tr(t,r);return{id:r,forma:e,versos:o,createdAt:Date.now(),updatedAt:Date.now()}}migrarSonetoGuardado(e){let t=e.forma&&he.some((a)=>a.id===e.forma)?e.forma:"soneto",r=F(t),o=Array.isArray(e.versos)?e.versos.map((a)=>({...a})):[];if(t==="soneto"&&o.length!==14)o=Array.from({length:14},(a,i)=>o[i]??{id:`${e.id}-v${i+1}`,numero:i+1,texto:""});return o=o.map((a,i)=>({...a,numero:i+1})),{...e,forma:t,versos:o,updatedAt:Date.now()}}aplicarForma(){this.forma=F(this.soneto.forma),this.analysisService.setForma(this.forma)}updateProgress(){let e=0,t=0;for(let r of this.soneto.versos)if(r.texto.trim()){e++;let o=this.analysisMap.get(r.numero);if(o&&o.errores.length>0)t++}this.completados=e,this.conErrores=t}renumberVersos(e){return e.map((t,r)=>({...t,numero:r+1}))}nuevoPoemaDeForma(e){if(this.completados>0)this.storage.saveToHistory(this.soneto);let t=this.createEmptySoneto(e);this.soneto=t,this.forma=F(e),this.analysisMap=new Map,this.esquema=void 0,this.completados=0,this.conErrores=0,this.selectedVerso=null,this.formSelectorOpen=!1,this.eventBus.emit("soneto:new",{}),this.analysisService.reset(),this.analysisService.setForma(this.forma),this.showToast(`Nuevo ${this.forma.nombre} creado`,"info")}abrirSelector(){this.formSelectorOpen=!0}cerrarSelector(){this.formSelectorOpen=!1}onVersoInput(e){let{numero:t,texto:r}=e.detail,o=this.soneto.versos.find((a)=>a.numero===t);if(o)o.texto=r,this.soneto.updatedAt=Date.now(),this.eventBus.emit("verso:input",{numero:t,texto:r})}onVersoBlur(e){let{numero:t}=e.detail;this.eventBus.emit("verso:blur",{numero:t})}onVersoFocus(e){let{numero:t}=e.detail;this.selectedVerso=t,this.eventBus.emit("verso:focus",{numero:t})}onTituloChange(e){this.soneto.titulo=e.detail.titulo}onEstrategiaChange(e){this.soneto.estrategia=e.detail.estrategia}onHiatoToggle(e){let{numero:t,silabaIndex:r}=e.detail;this.eventBus.emit("hiato:toggle",{numero:t,silabaIndex:r})}onVersoAdd(){let e=this.soneto.versos;if(e.length>=this.forma.versosMax)return;let t=e[e.length-1],r={id:`${this.soneto.id}-v${e.length+1}`,numero:e.length+1,texto:""};this.setVersos([...e,r]),this.showToast(`Verso ${r.numero} añadido`,"info")}onVersoRemove(){if(this.soneto.versos.length<=this.forma.versosMin)return;let e=this.soneto.versos.slice(0,-1);this.setVersos(e),this.showToast("Último verso eliminado","info")}onEstrofaAdd(){let e=this.forma;if(e.modo!=="estrofa")return;let t=e.estrofas[e.estrofas.length-1],r=t?.nVersos||8;if(this.soneto.versos.length+r>e.versosMax)return;let o=this.soneto.versos.length,a=[...this.soneto.versos];for(let i=0;i<r;i++)a.push({id:`${this.soneto.id}-v${o+i+1}`,numero:o+i+1,texto:""});this.setVersos(a),this.showToast(`Estrofa añadida (${t?.nombre??"estrofa"})`,"info")}onEstrofaRemove(){let e=this.forma;if(e.modo!=="estrofa")return;let t=e.versosIniciales;if(this.soneto.versos.length<=t)return;let r=e.estrofas[e.estrofas.length-1],o=r?.nVersos||8,a=this.soneto.versos.slice(0,Math.max(t,this.soneto.versos.length-o));this.setVersos(a),this.showToast(`Estrofa eliminada (${r?.nombre??"estrofa"})`,"info")}setVersos(e){let t=this.renumberVersos(e);this.soneto={...this.soneto,versos:t,updatedAt:Date.now()},this.analysisService.reset(),this.analysisService.loadVersos(t),this.updateProgress()}toggleRhymePanel(){this.rhymePanelOpen=!this.rhymePanelOpen,this.eventBus.emit("ui:panel-toggle",{panel:"rhyme-browser",open:this.rhymePanelOpen})}exportarTxt(){this.exportService.exportToTxt(this.soneto),this.showToast("Poema exportado como .txt","info")}exportarPdf(){this.exportService.exportToPdf(this.soneto),this.showToast("Poema exportado como PDF","info")}async copiarPortapapeles(){let e=await this.exportService.copyToClipboard(this.soneto);this.showToast(e?"Poema copiado al portapapeles":"Error al copiar al portapapeles",e?"info":"error")}getPalabraActual(){if(!this.selectedVerso)return"";let e=this.soneto.versos.find((r)=>r.numero===this.selectedVerso);if(!e||!e.texto.trim())return"";let t=e.texto.trim().split(/\s+/);return t[t.length-1].replace(/[¿?!¡;:.,()\-"'«»]/g,"")}onRhymeInsert(e){let{palabra:t,verso:r}=e.detail;if(!r)return;let o=this.soneto.versos.find((i)=>i.numero===r);if(!o)return;let a=o.texto.trim().split(/\s+/);if(a.length>0&&o.texto.trim().length>0)a[a.length-1]=t,o.texto=a.join(" ")+" ";else o.texto=t+" ";this.soneto.updatedAt=Date.now(),this.requestUpdate(),this.eventBus.emit("verso:input",{numero:r,texto:o.texto}),this.showToast(`"${t}" insertada en verso ${r}`,"info")}onRhymePanelClose(){this.rhymePanelOpen=!1,this.eventBus.emit("ui:panel-toggle",{panel:"rhyme-browser",open:!1})}showToast(e,t="info"){let r=this.shadowRoot?.querySelector("app-toast");if(r?.show)r.show(e,t)}onKeyDown(e){if((e.metaKey||e.ctrlKey)&&e.key==="r")e.preventDefault(),this.toggleRhymePanel();if((e.metaKey||e.ctrlKey)&&e.key==="s")e.preventDefault(),this.autoSaveService.saveNow(),this.showToast("Poema guardado","info");if((e.metaKey||e.ctrlKey)&&e.key==="n")e.preventDefault(),this.abrirSelector();if(e.key==="Escape"&&this.formSelectorOpen)this.cerrarSelector()}}c([S()],yt.prototype,"soneto",void 0),c([S()],yt.prototype,"forma",void 0),c([S()],yt.prototype,"analysisMap",void 0),c([S()],yt.prototype,"esquema",void 0),c([S()],yt.prototype,"rhymePanelOpen",void 0),c([S()],yt.prototype,"selectedVerso",void 0),c([S()],yt.prototype,"completados",void 0),c([S()],yt.prototype,"conErrores",void 0),c([S()],yt.prototype,"formSelectorOpen",void 0),yt=c([_("el-taller-app")],yt);if("serviceWorker"in navigator)window.addEventListener("load",()=>{});console.log(`
  ╔══════════════════════════════╗
  ║    ✎ El Taller v0.1.0       ║
  ║  Asistente de sonetos        ║
  ║  Buscador de rimas activo    ║
  ╚══════════════════════════════╝
  Stack: Bun + TypeScript + Lit
`);
