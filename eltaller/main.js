var X=function(h,f,k,d){var z=arguments.length,$=z<3?f:d===null?d=Object.getOwnPropertyDescriptor(f,k):d,B;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")$=Reflect.decorate(h,f,k,d);else for(var g=h.length-1;g>=0;g--)if(B=h[g])$=(z<3?B($):z>3?B(f,k,$):B(f,k))||$;return z>3&&$&&Object.defineProperty(f,k,$),$};var _0=globalThis,V0=_0.ShadowRoot&&(_0.ShadyCSS===void 0||_0.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,O0=Symbol(),j1=new WeakMap;class R0{constructor(h,f,k){if(this._$cssResult$=!0,k!==O0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=h,this._strings=f}get styleSheet(){let h=this._styleSheet,f=this._strings;if(V0&&h===void 0){let k=f!==void 0&&f.length===1;if(k)h=j1.get(f);if(h===void 0){if((this._styleSheet=h=new CSSStyleSheet).replaceSync(this.cssText),k)j1.set(f,h)}}return h}toString(){return this.cssText}}var _h=(h)=>{if(h._$cssResult$===!0)return h.cssText;else if(typeof h==="number")return h;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${h}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},xh=(h)=>new R0(typeof h==="string"?h:String(h),void 0,O0),W=(h,...f)=>{let k=h.length===1?h[0]:f.reduce((d,z,$)=>d+_h(z)+h[$+1],h[0]);return new R0(k,h,O0)},q1=(h,f)=>{if(V0)h.adoptedStyleSheets=f.map((k)=>k instanceof CSSStyleSheet?k:k.styleSheet);else for(let k of f){let d=document.createElement("style"),z=_0.litNonce;if(z!==void 0)d.setAttribute("nonce",z);d.textContent=k.cssText,h.appendChild(d)}},Wh=(h)=>{let f="";for(let k of h.cssRules)f+=k.cssText;return xh(f)},L0=V0?(h)=>h:(h)=>h instanceof CSSStyleSheet?Wh(h):h;var{is:yh,defineProperty:Uh,getOwnPropertyDescriptor:N1,getOwnPropertyNames:jh,getOwnPropertySymbols:qh,getPrototypeOf:D1}=Object,Nh=!1,C=globalThis;if(Nh)C.customElements??=customElements;var I=!0,R,M1=C.trustedTypes,Dh=M1?M1.emptyScript:"",I1=I?C.reactiveElementPolyfillSupportDevMode:C.reactiveElementPolyfillSupport;if(I)C.litIssuedWarnings??=new Set,R=(h,f)=>{if(f+=` See https://lit.dev/msg/${h} for more information.`,!C.litIssuedWarnings.has(f)&&!C.litIssuedWarnings.has(h))console.warn(f),C.litIssuedWarnings.add(f)},queueMicrotask(()=>{if(R("dev-mode","Lit is in dev mode. Not recommended for production!"),C.ShadyDOM?.inUse&&I1===void 0)R("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var Mh=I?(h)=>{if(!C.emitLitDebugLogEvents)return;C.dispatchEvent(new CustomEvent("lit-debug",{detail:h}))}:void 0,e=(h,f)=>h,z0={toAttribute(h,f){switch(f){case Boolean:h=h?Dh:null;break;case Object:case Array:h=h==null?h:JSON.stringify(h);break}return h},fromAttribute(h,f){let k=h;switch(f){case Boolean:k=h!==null;break;case Number:k=h===null?null:Number(h);break;case Object:case Array:try{k=JSON.parse(h)}catch(d){k=null}break}return k}},x0=(h,f)=>!yh(h,f),C1={attribute:!0,type:String,converter:z0,reflect:!1,useDefault:!1,hasChanged:x0};Symbol.metadata??=Symbol("metadata");C.litPropertyMetadata??=new WeakMap;class T extends HTMLElement{static addInitializer(h){this.__prepare(),(this._initializers??=[]).push(h)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(h,f=C1){if(f.state)f.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(h))f=Object.create(f),f.wrapped=!0;if(this.elementProperties.set(h,f),!f.noAccessor){let k=I?Symbol.for(`${String(h)} (@property() cache)`):Symbol(),d=this.getPropertyDescriptor(h,k,f);if(d!==void 0)Uh(this.prototype,h,d)}}static getPropertyDescriptor(h,f,k){let{get:d,set:z}=N1(this.prototype,h)??{get(){return this[f]},set($){this[f]=$}};if(I&&d==null){if("value"in(N1(this.prototype,h)??{}))throw Error(`Field ${JSON.stringify(String(h))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);R("reactive-property-without-getter",`Field ${JSON.stringify(String(h))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:d,set($){let B=d?.call(this);z?.call(this,$),this.requestUpdate(h,B,k)},configurable:!0,enumerable:!0}}static getPropertyOptions(h){return this.elementProperties.get(h)??C1}static __prepare(){if(this.hasOwnProperty(e("elementProperties",this)))return;let h=D1(this);if(h.finalize(),h._initializers!==void 0)this._initializers=[...h._initializers];this.elementProperties=new Map(h.elementProperties)}static finalize(){if(this.hasOwnProperty(e("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(e("properties",this))){let f=this.properties,k=[...jh(f),...qh(f)];for(let d of k)this.createProperty(d,f[d])}let h=this[Symbol.metadata];if(h!==null){let f=litPropertyMetadata.get(h);if(f!==void 0)for(let[k,d]of f)this.elementProperties.set(k,d)}this.__attributeToPropertyMap=new Map;for(let[f,k]of this.elementProperties){let d=this.__attributeNameForProperty(f,k);if(d!==void 0)this.__attributeToPropertyMap.set(d,f)}if(this.elementStyles=this.finalizeStyles(this.styles),I){if(this.hasOwnProperty("createProperty"))R("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))R("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(h){let f=[];if(Array.isArray(h)){let k=new Set(h.flat(1/0).reverse());for(let d of k)f.unshift(L0(d))}else if(h!==void 0)f.push(L0(h));return f}static __attributeNameForProperty(h,f){let k=f.attribute;return k===!1?void 0:typeof k==="string"?k:typeof h==="string"?h.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((h)=>this.enableUpdating=h),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((h)=>h(this))}addController(h){if((this.__controllers??=new Set).add(h),this.renderRoot!==void 0&&this.isConnected)h.hostConnected?.()}removeController(h){this.__controllers?.delete(h)}__saveInstanceProperties(){let h=new Map,f=this.constructor.elementProperties;for(let k of f.keys())if(this.hasOwnProperty(k))h.set(k,this[k]),delete this[k];if(h.size>0)this.__instanceProperties=h}createRenderRoot(){let h=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return q1(h,this.constructor.elementStyles),h}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((h)=>h.hostConnected?.())}enableUpdating(h){}disconnectedCallback(){this.__controllers?.forEach((h)=>h.hostDisconnected?.())}attributeChangedCallback(h,f,k){this._$attributeToProperty(h,k)}__propertyToAttribute(h,f){let d=this.constructor.elementProperties.get(h),z=this.constructor.__attributeNameForProperty(h,d);if(z!==void 0&&d.reflect===!0){let B=(d.converter?.toAttribute!==void 0?d.converter:z0).toAttribute(f,d.type);if(I&&this.constructor.enabledWarnings.includes("migration")&&B===void 0)R("undefined-attribute-value",`The attribute value for the ${h} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=h,B==null)this.removeAttribute(z);else this.setAttribute(z,B);this.__reflectingProperty=null}}_$attributeToProperty(h,f){let k=this.constructor,d=k.__attributeToPropertyMap.get(h);if(d!==void 0&&this.__reflectingProperty!==d){let z=k.getPropertyOptions(d),$=typeof z.converter==="function"?{fromAttribute:z.converter}:z.converter?.fromAttribute!==void 0?z.converter:z0;this.__reflectingProperty=d;let B=$.fromAttribute(f,z.type);this[d]=B??this.__defaultValues?.get(d)??B,this.__reflectingProperty=null}}requestUpdate(h,f,k,d=!1,z){if(h!==void 0){if(I&&h instanceof Event)R("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let $=this.constructor;if(d===!1)z=this[h];if(k??=$.getPropertyOptions(h),(k.hasChanged??x0)(z,f)||k.useDefault&&k.reflect&&z===this.__defaultValues?.get(h)&&!this.hasAttribute($.__attributeNameForProperty(h,k)))this._$changeProperty(h,f,k);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(h,f,{useDefault:k,reflect:d,wrapped:z},$){if(k&&!(this.__defaultValues??=new Map).has(h)){if(this.__defaultValues.set(h,$??f??this[h]),z!==!0||$!==void 0)return}if(!this._$changedProperties.has(h)){if(!this.hasUpdated&&!k)f=void 0;this._$changedProperties.set(h,f)}if(d===!0&&this.__reflectingProperty!==h)(this.__reflectingProperties??=new Set).add(h)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(f){Promise.reject(f)}let h=this.scheduleUpdate();if(h!=null)await h;return!this.isUpdatePending}scheduleUpdate(){let h=this.performUpdate();if(I&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof h?.then==="function")R("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return h}performUpdate(){if(!this.isUpdatePending)return;if(Mh?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),I){let z=[...this.constructor.elementProperties.keys()].filter(($)=>this.hasOwnProperty($)&&($ in D1(this)));if(z.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${z.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[d,z]of this.__instanceProperties)this[d]=z;this.__instanceProperties=void 0}let k=this.constructor.elementProperties;if(k.size>0)for(let[d,z]of k){let{wrapped:$}=z,B=this[d];if($===!0&&!this._$changedProperties.has(d)&&B!==void 0)this._$changeProperty(d,void 0,z,B)}}let h=!1,f=this._$changedProperties;try{if(h=this.shouldUpdate(f),h)this.willUpdate(f),this.__controllers?.forEach((k)=>k.hostUpdate?.()),this.update(f);else this.__markUpdated()}catch(k){throw h=!1,this.__markUpdated(),k}if(h)this._$didUpdate(f)}willUpdate(h){}_$didUpdate(h){if(this.__controllers?.forEach((f)=>f.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(h);if(this.updated(h),I&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))R("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(h){return!0}update(h){this.__reflectingProperties&&=this.__reflectingProperties.forEach((f)=>this.__propertyToAttribute(f,this[f])),this.__markUpdated()}updated(h){}firstUpdated(h){}}T.elementStyles=[];T.shadowRootOptions={mode:"open"};T[e("elementProperties",T)]=new Map;T[e("finalized",T)]=new Map;I1?.({ReactiveElement:T});if(I){T.enabledWarnings=["change-in-update","async-perform-update"];let h=function(f){if(!f.hasOwnProperty(e("enabledWarnings",f)))f.enabledWarnings=f.enabledWarnings.slice()};T.enableWarning=function(f){if(h(this),!this.enabledWarnings.includes(f))this.enabledWarnings.push(f)},T.disableWarning=function(f){h(this);let k=this.enabledWarnings.indexOf(f);if(k>=0)this.enabledWarnings.splice(k,1)}}(C.reactiveElementVersions??=[]).push("2.1.2");if(I&&C.reactiveElementVersions.length>1)queueMicrotask(()=>{R("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var A=globalThis,G=(h)=>{if(!A.emitLitDebugLogEvents)return;A.dispatchEvent(new CustomEvent("lit-debug",{detail:h}))},Ch=0,g0;A.litIssuedWarnings??=new Set,g0=(h,f)=>{if(f+=h?` See https://lit.dev/msg/${h} for more information.`:"",!A.litIssuedWarnings.has(f)&&!A.litIssuedWarnings.has(h))console.warn(f),A.litIssuedWarnings.add(f)},queueMicrotask(()=>{g0("dev-mode","Lit is in dev mode. Not recommended for production!")});var L=A.ShadyDOM?.inUse&&A.ShadyDOM?.noPatch===!0?A.ShadyDOM.wrap:(h)=>h,W0=A.trustedTypes,T1=W0?W0.createPolicy("lit-html",{createHTML:(h)=>h}):void 0,Ih=(h)=>h,q0=(h,f,k)=>Ih,Th=(h)=>{if(o!==q0)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");o=h},Ah=()=>{o=q0},E0=(h,f,k)=>{return o(h,f,k)},P1="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,m1="?"+m,Vh=`<${m1}>`,p=document,Z0=()=>p.createComment(""),X0=(h)=>h===null||typeof h!="object"&&typeof h!="function",v0=Array.isArray,Oh=(h)=>v0(h)||typeof h?.[Symbol.iterator]==="function",b0=`[ 	
\f\r]`,Rh=`[^ 	
\f\r"'\`<>=]`,Lh=`[^\\s"'>=/]`,$0=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A1=1,P0=2,bh=3,V1=/-->/g,O1=/>/g,E=new RegExp(`>|${b0}(?:(${Lh}+)(${b0}*=${b0}*(?:${Rh}|("|')|))|$)`,"g"),Ph=0,R1=1,mh=2,L1=3,m0=/'/g,S0=/"/g,S1=/^(?:script|style|textarea|title)$/i,Sh=1,y0=2,U0=3,i0=1,j0=2,Eh=3,vh=4,ih=5,r0=6,rh=7,p0=(h)=>(f,...k)=>{if(f.some((d)=>d===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(k.some((d)=>d?._$litStatic$))g0("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:h,strings:f,values:k}},c=p0(Sh),J5=p0(y0),K5=p0(U0),u=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),b1=new WeakMap,r=p.createTreeWalker(p,129),o=q0;function E1(h,f){if(!v0(h)||!h.hasOwnProperty("raw")){let k="invalid template strings array";throw k=`
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
`),Error(k)}return T1!==void 0?T1.createHTML(f):f}var ph=(h,f)=>{let k=h.length-1,d=[],z=f===y0?"<svg>":f===U0?"<math>":"",$,B=$0;for(let Z=0;Z<k;Z++){let Y=h[Z],Q=-1,K,F=0,w;while(F<Y.length){if(B.lastIndex=F,w=B.exec(Y),w===null)break;if(F=B.lastIndex,B===$0){if(w[A1]==="!--")B=V1;else if(w[A1]!==void 0)B=O1;else if(w[P0]!==void 0){if(S1.test(w[P0]))$=new RegExp(`</${w[P0]}`,"g");B=E}else if(w[bh]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(B===E)if(w[Ph]===">")B=$??$0,Q=-1;else if(w[R1]===void 0)Q=-2;else Q=B.lastIndex-w[mh].length,K=w[R1],B=w[L1]===void 0?E:w[L1]==='"'?S0:m0;else if(B===S0||B===m0)B=E;else if(B===V1||B===O1)B=$0;else B=E,$=void 0}console.assert(Q===-1||B===E||B===m0||B===S0,"unexpected parse state B");let U=B===E&&h[Z+1].startsWith("/>")?" ":"";z+=B===$0?Y+Vh:Q>=0?(d.push(K),Y.slice(0,Q)+P1+Y.slice(Q))+m+U:Y+m+(Q===-2?Z:U)}let g=z+(h[k]||"<?>")+(f===y0?"</svg>":f===U0?"</math>":"");return[E1(h,g),d]};class Y0{constructor({strings:h,["_$litType$"]:f},k){this.parts=[];let d,z=0,$=0,B=h.length-1,g=this.parts,[Z,Y]=ph(h,f);if(this.el=Y0.createElement(Z,k),r.currentNode=this.el.content,f===y0||f===U0){let Q=this.el.content.firstChild;Q.replaceWith(...Q.childNodes)}while((d=r.nextNode())!==null&&g.length<B){if(d.nodeType===1){{let Q=d.localName;if(/^(?:textarea|template)$/i.test(Q)&&d.innerHTML.includes(m)){let K=`Expressions are not supported inside \`${Q}\` elements. See https://lit.dev/msg/expression-in-${Q} for more information.`;if(Q==="template")throw Error(K);else g0("",K)}}if(d.hasAttributes()){for(let Q of d.getAttributeNames())if(Q.endsWith(P1)){let K=Y[$++],w=d.getAttribute(Q).split(m),U=/([.?@])?(.*)/.exec(K);g.push({type:i0,index:z,name:U[2],strings:w,ctor:U[1]==="."?i1:U[1]==="?"?r1:U[1]==="@"?p1:Q0}),d.removeAttribute(Q)}else if(Q.startsWith(m))g.push({type:r0,index:z}),d.removeAttribute(Q)}if(S1.test(d.tagName)){let Q=d.textContent.split(m),K=Q.length-1;if(K>0){d.textContent=W0?W0.emptyScript:"";for(let F=0;F<K;F++)d.append(Q[F],Z0()),r.nextNode(),g.push({type:j0,index:++z});d.append(Q[K],Z0())}}}else if(d.nodeType===8)if(d.data===m1)g.push({type:j0,index:z});else{let K=-1;while((K=d.data.indexOf(m,K+1))!==-1)g.push({type:rh,index:z}),K+=m.length-1}z++}if(Y.length!==$)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+h.join("${...}")+"`");G&&G({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:h})}static createElement(h,f){let k=p.createElement("template");return k.innerHTML=h,k}}function h0(h,f,k=h,d){if(f===u)return f;let z=d!==void 0?k.__directives?.[d]:k.__directive,$=X0(f)?void 0:f._$litDirective$;if(z?.constructor!==$){if(z?._$notifyDirectiveConnectionChanged?.(!1),$===void 0)z=void 0;else z=new $(h),z._$initialize(h,k,d);if(d!==void 0)(k.__directives??=[])[d]=z;else k.__directive=z}if(z!==void 0)f=h0(h,z._$resolve(h,f.values),z,d);return f}class v1{constructor(h,f){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=h,this._$parent=f}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(h){let{el:{content:f},parts:k}=this._$template,d=(h?.creationScope??p).importNode(f,!0);r.currentNode=d;let z=r.nextNode(),$=0,B=0,g=k[0];while(g!==void 0){if($===g.index){let Z;if(g.type===j0)Z=new c0(z,z.nextSibling,this,h);else if(g.type===i0)Z=new g.ctor(z,g.name,g.strings,this,h);else if(g.type===r0)Z=new u1(z,this,h);this._$parts.push(Z),g=k[++B]}if($!==g?.index)z=r.nextNode(),$++}return r.currentNode=p,d}_update(h){let f=0;for(let k of this._$parts){if(k!==void 0)if(G&&G({kind:"set part",part:k,value:h[f],valueIndex:f,values:h,templateInstance:this}),k.strings!==void 0)k._$setValue(h,k,f),f+=k.strings.length-2;else k._$setValue(h[f]);f++}}}class c0{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(h,f,k,d){this.type=j0,this._$committedValue=D,this._$disconnectableChildren=void 0,this._$startNode=h,this._$endNode=f,this._$parent=k,this.options=d,this.__isConnected=d?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let h=L(this._$startNode).parentNode,f=this._$parent;if(f!==void 0&&h?.nodeType===11)h=f.parentNode;return h}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(h,f=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(h=h0(this,h,f),X0(h)){if(h===D||h==null||h===""){if(this._$committedValue!==D)G&&G({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=D}else if(h!==this._$committedValue&&h!==u)this._commitText(h)}else if(h._$litType$!==void 0)this._commitTemplateResult(h);else if(h.nodeType!==void 0){if(this.options?.host===h){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",h,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(h)}else if(Oh(h))this._commitIterable(h);else this._commitText(h)}_insert(h){return L(L(this._$startNode).parentNode).insertBefore(h,this._$endNode)}_commitNode(h){if(this._$committedValue!==h){if(this._$clear(),o!==q0){let f=this._$startNode.parentNode?.nodeName;if(f==="STYLE"||f==="SCRIPT"){let k="Forbidden";if(f==="STYLE")k="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else k="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(k)}}G&&G({kind:"commit node",start:this._$startNode,parent:this._$parent,value:h,options:this.options}),this._$committedValue=this._insert(h)}}_commitText(h){if(this._$committedValue!==D&&X0(this._$committedValue)){let f=L(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=E0(f,"data","property");h=this._textSanitizer(h),G&&G({kind:"commit text",node:f,value:h,options:this.options}),f.data=h}else{let f=p.createTextNode("");if(this._commitNode(f),this._textSanitizer===void 0)this._textSanitizer=E0(f,"data","property");h=this._textSanitizer(h),G&&G({kind:"commit text",node:f,value:h,options:this.options}),f.data=h}this._$committedValue=h}_commitTemplateResult(h){let{values:f,["_$litType$"]:k}=h,d=typeof k==="number"?this._$getTemplate(h):(k.el===void 0&&(k.el=Y0.createElement(E1(k.h,k.h[0]),this.options)),k);if(this._$committedValue?._$template===d)G&&G({kind:"template updating",template:d,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:f}),this._$committedValue._update(f);else{let z=new v1(d,this),$=z._clone(this.options);G&&G({kind:"template instantiated",template:d,instance:z,parts:z._$parts,options:this.options,fragment:$,values:f}),z._update(f),G&&G({kind:"template instantiated and updated",template:d,instance:z,parts:z._$parts,options:this.options,fragment:$,values:f}),this._commitNode($),this._$committedValue=z}}_$getTemplate(h){let f=b1.get(h.strings);if(f===void 0)b1.set(h.strings,f=new Y0(h));return f}_commitIterable(h){if(!v0(this._$committedValue))this._$committedValue=[],this._$clear();let f=this._$committedValue,k=0,d;for(let z of h){if(k===f.length)f.push(d=new c0(this._insert(Z0()),this._insert(Z0()),this,this.options));else d=f[k];d._$setValue(z),k++}if(k<f.length)this._$clear(d&&L(d._$endNode).nextSibling,k),f.length=k}_$clear(h=L(this._$startNode).nextSibling,f){this._$notifyConnectionChanged?.(!1,!0,f);while(h!==this._$endNode){let k=L(h).nextSibling;L(h).remove(),h=k}}setConnected(h){if(this._$parent===void 0)this.__isConnected=h,this._$notifyConnectionChanged?.(h);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class Q0{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(h,f,k,d,z){if(this.type=i0,this._$committedValue=D,this._$disconnectableChildren=void 0,this.element=h,this.name=f,this._$parent=d,this.options=z,k.length>2||k[0]!==""||k[1]!=="")this._$committedValue=Array(k.length-1).fill(new String),this.strings=k;else this._$committedValue=D;this._sanitizer=void 0}_$setValue(h,f=this,k,d){let z=this.strings,$=!1;if(z===void 0){if(h=h0(this,h,f,0),$=!X0(h)||h!==this._$committedValue&&h!==u,$)this._$committedValue=h}else{let B=h;h=z[0];let g,Z;for(g=0;g<z.length-1;g++){if(Z=h0(this,B[k+g],f,g),Z===u)Z=this._$committedValue[g];if($||=!X0(Z)||Z!==this._$committedValue[g],Z===D)h=D;else if(h!==D)h+=(Z??"")+z[g+1];this._$committedValue[g]=Z}}if($&&!d)this._commitValue(h)}_commitValue(h){if(h===D)L(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=o(this.element,this.name,"attribute");h=this._sanitizer(h??""),G&&G({kind:"commit attribute",element:this.element,name:this.name,value:h,options:this.options}),L(this.element).setAttribute(this.name,h??"")}}}class i1 extends Q0{constructor(){super(...arguments);this.type=Eh}_commitValue(h){if(this._sanitizer===void 0)this._sanitizer=o(this.element,this.name,"property");h=this._sanitizer(h),G&&G({kind:"commit property",element:this.element,name:this.name,value:h,options:this.options}),this.element[this.name]=h===D?void 0:h}}class r1 extends Q0{constructor(){super(...arguments);this.type=vh}_commitValue(h){G&&G({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(h&&h!==D),options:this.options}),L(this.element).toggleAttribute(this.name,!!h&&h!==D)}}class p1 extends Q0{constructor(h,f,k,d,z){super(h,f,k,d,z);if(this.type=ih,this.strings!==void 0)throw Error(`A \`<${h.localName}>\` has a \`@${f}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(h,f=this){if(h=h0(this,h,f,0)??D,h===u)return;let k=this._$committedValue,d=h===D&&k!==D||h.capture!==k.capture||h.once!==k.once||h.passive!==k.passive,z=h!==D&&(k===D||d);if(G&&G({kind:"commit event listener",element:this.element,name:this.name,value:h,options:this.options,removeListener:d,addListener:z,oldListener:k}),d)this.element.removeEventListener(this.name,this,k);if(z)this.element.addEventListener(this.name,this,h);this._$committedValue=h}handleEvent(h){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,h);else this._$committedValue.handleEvent(h)}}class u1{constructor(h,f,k){this.element=h,this.type=r0,this._$disconnectableChildren=void 0,this._$parent=f,this.options=k}get _$isConnected(){return this._$parent._$isConnected}_$setValue(h){G&&G({kind:"commit to element binding",element:this.element,value:h,options:this.options}),h0(this,h)}}var uh=A.litHtmlPolyfillSupportDevMode;uh?.(Y0,c0);(A.litHtmlVersions??=[]).push("3.3.3");if(A.litHtmlVersions.length>1)queueMicrotask(()=>{g0("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var B0=(h,f,k)=>{if(f==null)throw TypeError(`The container to render into may not be ${f}`);let d=Ch++,z=k?.renderBefore??f,$=z._$litPart$;if(G&&G({kind:"begin render",id:d,value:h,container:f,options:k,part:$}),$===void 0){let B=k?.renderBefore??null;z._$litPart$=$=new c0(f.insertBefore(Z0(),B),B,void 0,k??{})}return $._$setValue(h),G&&G({kind:"end render",id:d,value:h,container:f,options:k,part:$}),$};B0.setSanitizer=Th,B0.createSanitizer=E0,B0._testOnlyClearSanitizerFactoryDoNotCallOrElse=Ah;var oh=(h,f)=>h,u0=!0,S=globalThis,o1;if(u0)S.litIssuedWarnings??=new Set,o1=(h,f)=>{if(f+=` See https://lit.dev/msg/${h} for more information.`,!S.litIssuedWarnings.has(f)&&!S.litIssuedWarnings.has(h))console.warn(f),S.litIssuedWarnings.add(f)};class H extends T{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let h=super.createRenderRoot();return this.renderOptions.renderBefore??=h.firstChild,h}update(h){let f=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(h),this.__childPart=B0(f,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return u}}H._$litElement$=!0;H[oh("finalized",H)]=!0;S.litElementHydrateSupport?.({LitElement:H});var nh=u0?S.litElementPolyfillSupportDevMode:S.litElementPolyfillSupport;nh?.({LitElement:H});(S.litElementVersions??=[]).push("4.2.2");if(u0&&S.litElementVersions.length>1)queueMicrotask(()=>{o1("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var y=(h)=>(f,k)=>{if(k!==void 0)k.addInitializer(()=>{customElements.define(h,f)});else customElements.define(h,f)};var n1=!0,l1;if(n1)globalThis.litIssuedWarnings??=new Set,l1=(h,f)=>{if(f+=` See https://lit.dev/msg/${h} for more information.`,!globalThis.litIssuedWarnings.has(f)&&!globalThis.litIssuedWarnings.has(h))console.warn(f),globalThis.litIssuedWarnings.add(f)};var lh=(h,f,k)=>{let d=f.hasOwnProperty(k);return f.constructor.createProperty(k,h),d?Object.getOwnPropertyDescriptor(f,k):void 0},th={attribute:!0,type:String,converter:z0,reflect:!1,hasChanged:x0},sh=(h=th,f,k)=>{let{kind:d,metadata:z}=k;if(n1&&z==null)l1("missing-class-metadata",`The class ${f} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let $=globalThis.litPropertyMetadata.get(z);if($===void 0)globalThis.litPropertyMetadata.set(z,$=new Map);if(d==="setter")h=Object.create(h),h.wrapped=!0;if($.set(k.name,h),d==="accessor"){let{name:B}=k;return{set(g){let Z=f.get.call(this);f.set.call(this,g),this.requestUpdate(B,Z,h,!0,g)},init(g){if(g!==void 0)this._$changeProperty(B,void 0,h,g);return g}}}else if(d==="setter"){let{name:B}=k;return function(g){let Z=this[B];f.call(this,g),this.requestUpdate(B,Z,h,!0,g)}}throw Error(`Unsupported decorator location: ${d}`)};function J(h){return(f,k)=>{return typeof k==="object"?sh(h,f,k):lh(h,f,k)}}function N(h){return J({...h,state:!0,attribute:!1})}var v=(h,f,k)=>{if(k.configurable=!0,k.enumerable=!0,Reflect.decorate&&typeof f!=="object")Object.defineProperty(h,f,k);return k};var o0=!0,t1;if(o0)globalThis.litIssuedWarnings??=new Set,t1=(h,f)=>{if(f+=h?` See https://lit.dev/msg/${h} for more information.`:"",!globalThis.litIssuedWarnings.has(f)&&!globalThis.litIssuedWarnings.has(h))console.warn(f),globalThis.litIssuedWarnings.add(f)};function s1(h,f){return(k,d,z)=>{let $=(B)=>{let g=B.renderRoot?.querySelector(h)??null;if(o0&&g===null&&f&&!B.hasUpdated){let Z=typeof d==="object"?d.name:d;t1("",`@query'd field ${JSON.stringify(String(Z))} with the 'cache' flag set for selector '${h}' has been accessed before the first update and returned null. This is expected if the renderRoot tree has not been provided beforehand (e.g. via Declarative Shadow DOM). Therefore the value hasn't been cached.`)}return g};if(f){let{get:B,set:g}=typeof d==="object"?k:z??(()=>{let Z=o0?Symbol(`${String(d)} (@query() cache)`):Symbol();return{get(){return this[Z]},set(Y){this[Z]=Y}}})();return v(k,d,{get(){let Z=B.call(this);if(Z===void 0){if(Z=$(this),Z!==null||this.hasUpdated)g.call(this,Z)}return Z}})}else return v(k,d,{get(){return $(this)}})}}var ah;function a1(h){return(f,k)=>{return v(f,k,{get(){return(this.renderRoot??(ah??=document.createDocumentFragment())).querySelectorAll(h)}})}}function N0(h,f,k){let d=[];for(let z=h;z<=Math.min(f,k);z++)d.push(z);return d}var J0=[{id:"soneto",nombre:"Soneto",descripcion:"Dos cuartetos y dos tercetos. Endecasílabos (11) con rima consonante y, por lo general, acento en la 10ª sílaba.",ejemplo:"Un soneto me manda hacer Violante…",modo:"fija",medidaPorVerso:11,silabasObjetivo:11,acentosObligatorios:[10],acentoSugerido:[6],tipoRima:"consonante",esquemaReferencia:"ABBA ABBA CDC DCD",estrofas:[{id:"cuarteto1",nombre:"Primer cuarteto",nVersos:4,tipo:"normal"},{id:"cuarteto2",nombre:"Segundo cuarteto",nVersos:4,tipo:"normal"},{id:"terceto1",nombre:"Primer terceto",nVersos:3,tipo:"normal"},{id:"terceto2",nombre:"Segundo terceto",nVersos:3,tipo:"normal"}],versosIniciales:14,versosMin:14,versosMax:14,medidaDescripcion:"Endecasílabos · 11 sílabas métricas"},{id:"romance",nombre:"Romance",descripcion:"Tirada de octosílabos (8) con rima asonante en los versos pares; los impares quedan libres. Sin estrofas: serie continua.",ejemplo:"—Conde Olinos, Conde Olinos…",modo:"serie",medidaPorVerso:8,silabasObjetivo:8,acentosObligatorios:[7],tipoRima:"asonante",esquemaReferencia:"-a-a (pares asonantes)",estrofas:[{id:"tirada",nombre:"Tirada",nVersos:0,tipo:"normal"}],versosIniciales:8,versosMin:4,versosMax:400,medidaDescripcion:"Octosílabos · 8 sílabas métricas"},{id:"letrilla",nombre:"Letrilla",descripcion:"Estribillo de dos versos que se repite tras cada copla. Cada copla combina mudanza (3-4 versos) y vuelta (1-2) que enlaza con el estribillo. Medida de 8; el estribillo admite 6.",ejemplo:"A mis soledades voy, / de mis soledades vengo…",modo:"estrofa",medidaPorVerso:8,silabasObjetivo:8,acentosObligatorios:[7],tipoRima:"asonante",esquemaReferencia:"AB aba AB",estrofas:[{id:"estribillo",nombre:"Estribillo",nVersos:2,tipo:"estribillo",medidaObjetivo:6,acentos:[5]},{id:"copla",nombre:"Copla",nVersos:4,tipo:"normal"}],estrofaRepetible:!0,versosIniciales:6,versosMin:6,versosMax:34,medidaDescripcion:"Octosílabos · 8 (estribillo 8/6)"},{id:"decima",nombre:"Décima (Espinela)",descripcion:"Décima espinela: diez octosílabos (8) con rima consonante abbaaccddc. Pausa sugerida tras el verso 4 y el 8.",ejemplo:"Yo, pues mirad si me aflijo…",modo:"fija",medidaPorVerso:8,silabasObjetivo:8,acentosObligatorios:[7],tipoRima:"consonante",esquemaReferencia:"abbaaccddc",estrofas:[{id:"espinela",nombre:"Décima",nVersos:10,tipo:"normal"}],versosIniciales:10,versosMin:10,versosMax:10,medidaDescripcion:"Octosílabos · 8 sílabas métricas"},{id:"redondilla",nombre:"Redondilla",descripcion:"Cuatro octosílabos (8) con rima consonante abba.",ejemplo:"Quien bien ama tarde olvida…",modo:"fija",medidaPorVerso:8,silabasObjetivo:8,acentosObligatorios:[7],tipoRima:"consonante",esquemaReferencia:"abba",estrofas:[{id:"redondilla",nombre:"Redondilla",nVersos:4,tipo:"normal"}],versosIniciales:4,versosMin:4,versosMax:4,medidaDescripcion:"Octosílabos · 8 sílabas métricas"},{id:"cuarteta",nombre:"Cuarteta",descripcion:"Cuatro octosílabos (8) con rima consonante abab.",ejemplo:"No me mueve, mi Dios, para quererte…",modo:"fija",medidaPorVerso:8,silabasObjetivo:8,acentosObligatorios:[7],tipoRima:"consonante",esquemaReferencia:"abab",estrofas:[{id:"cuarteta",nombre:"Cuarteta",nVersos:4,tipo:"normal"}],versosIniciales:4,versosMin:4,versosMax:4,medidaDescripcion:"Octosílabos · 8 sílabas métricas"}];function b(h){return J0.find((f)=>f.id===h)||J0[0]}function e1(h,f,k){let d=k??h.versosIniciales;return Array.from({length:d},(z,$)=>({id:`${f}-v${$+1}`,numero:$+1,texto:""}))}function f0(h,f){let k=[...f].sort(($,B)=>$.numero-B.numero);if(h.modo==="serie"){let $=h.estrofas[0];return[{id:$?.id||"tirada",nombre:$?.nombre||"Tirada",tipo:$?.tipo||"normal",versos:k}]}if(h.modo==="estrofa"){let $=h.estrofas[0],B=h.estrofas[1],g=[],Z=0;if($){let Q=Math.min($.nVersos,k.length);g.push({id:$.id,nombre:$.nombre,tipo:$.tipo,versos:k.slice(0,Q)}),Z=Q}let Y=1;while(Z<k.length&&B){let Q=Math.min(B.nVersos,k.length-Z);g.push({id:`${B.id}-${Y}`,nombre:`${B.nombre} ${Y}`,tipo:B.tipo,versos:k.slice(Z,Z+Q)}),Z+=Q,Y++}return g}let d=[],z=0;for(let $ of h.estrofas){let B=Math.min($.nVersos,k.length-z);if(B<=0)break;d.push({id:$.id,nombre:$.nombre,tipo:$.tipo,versos:k.slice(z,z+B)}),z+=B}return d}function D0(h,f){let k=Math.max(0,f);if(h.modo==="serie"){let $=[];for(let B=1;B<=k;B+=4)$.push(N0(B,B+3,k));return $.filter((B)=>B.length>0)}if(h.modo==="estrofa"){let $=[],B=h.estrofas[0],g=h.estrofas[1],Z=1;if(B)$.push(N0(Z,Z+B.nVersos-1,k)),Z+=B.nVersos;while(Z<=k&&g)$.push(N0(Z,Z+g.nVersos-1,k)),Z+=g.nVersos;return $.filter((Y)=>Y.length>0)}let d=[],z=1;for(let $ of h.estrofas)d.push(N0(z,z+$.nVersos-1,k)),z+=$.nVersos;return d.filter(($)=>$.length>0)}function n0(h){return{min:h.versosMin,max:h.versosMax}}function hh(h,f,k){let{silabasObjetivo:d,acentosObligatorios:z}=h;if(h.modo==="estrofa"){let $=h.estrofas[0];if($?.medidaObjetivo&&f<=$.nVersos)d=$.medidaObjetivo,z=$.acentos??[d-1]}return{silabasObjetivo:d,acentosObligatorios:z,acentosSugeridos:h.acentoSugerido}}class l0{listeners=new Map;on(h,f){if(!this.listeners.has(h))this.listeners.set(h,new Set);this.listeners.get(h).add(f)}off(h,f){let k=this.listeners.get(h);if(k){if(k.delete(f),k.size===0)this.listeners.delete(h)}}emit(h,f){let k=this.listeners.get(h);if(k)for(let d of k)try{d(f)}catch(z){console.error(`[EventBus] Error in handler for '${String(h)}':`,z)}}clear(){this.listeners.clear()}}var n={CURRENT_SONETO:"el-taller:soneto-actual",HISTORY:"el-taller:historial",PREFERENCES:"el-taller:preferencias"};class t0{autoSave(h){try{let f=JSON.stringify({soneto:h,savedAt:Date.now()});localStorage.setItem(n.CURRENT_SONETO,f)}catch(f){console.warn("[Storage] Error al auto-guardar:",f)}}loadLastSoneto(){try{let h=localStorage.getItem(n.CURRENT_SONETO);if(!h)return null;let{soneto:f}=JSON.parse(h);return f}catch{return null}}saveToHistory(h){try{let f=this.loadHistory();if(f.unshift(h),f.length>20)f.pop();localStorage.setItem(n.HISTORY,JSON.stringify(f))}catch(f){console.warn("[Storage] Error al guardar historial:",f)}}loadHistory(){try{let h=localStorage.getItem(n.HISTORY);return h?JSON.parse(h):[]}catch{return[]}}savePreferences(h){try{localStorage.setItem(n.PREFERENCES,JSON.stringify(h))}catch{}}loadPreferences(){try{let h=localStorage.getItem(n.PREFERENCES);return h?JSON.parse(h):{}}catch{return{}}}getKeys(){return{...n}}}function fh(h,f,k=!1){let d=null,z=!1;return(...$)=>{if(k&&!z)h(...$),z=!0;if(d!==null)clearTimeout(d);d=setTimeout(()=>{if(!k||z)h(...$);z=!1,d=null},f)}}var K0=new Set(["a","e","o","á","é","ó"]),s0=new Set(["i","u","í","ú"]),l=new Set([...K0,...s0]),kh=new Set(["ia","ie","io","ua","ue","uo","ai","ei","oi","au","eu","ou","iu","ui"]),dh=new Set(["iai","iei","uai","uei","iau","ueu"]),zh=new Set(["pr","pl","br","bl","fr","fl","gr","gl","kr","kl","cr","cl","dr","tr","tl","ch","ll","rr"]);var h5=[{tipo:"heroico",acentos:[6,10],descripcion:"Acento en 6ª y 10ª sílabas"},{tipo:"enfatico",acentos:[1,6,10],descripcion:"Acento en 1ª, 6ª y 10ª sílabas"},{tipo:"melodico",acentos:[3,6,10],descripcion:"Acento en 3ª, 6ª y 10ª sílabas"},{tipo:"safico",acentos:[4,8,10],descripcion:"Acento en 4ª, 8ª y 10ª sílabas"},{tipo:"dactilico",acentos:[4,7,10],descripcion:"Acento en 4ª, 7ª y 10ª sílabas"},{tipo:"anfibraquico",acentos:[2,5,8,10],descripcion:"Acento en 2ª, 5ª, 8ª y 10ª sílabas"}];function $h(h){if(!h.has(10))return;let f=[...h5].sort((k,d)=>d.acentos.length-k.acentos.length);for(let k of f){let d=new Set(k.acentos),z=!0;for(let $ of d)if(!h.has($)){z=!1;break}if(z)return k}return{tipo:"otro",acentos:[...h].sort(),descripcion:"Otra variante"}}class w0{silabearPalabra(h){if(!h)return[];let f=h.toLowerCase();if(f.length<=1)return[f];let k=[],d=0,z="";while(d<f.length){let $=f[d];if(H0($)){let B=this.leerGrupoVocalico(f,d);if(z.length>0){if(z.length===1)k.push(z+B);else if(z.length===2)if(Bh(z))k.push(z+B);else{if(k.length>0)k[k.length-1]+=z[0];else k.push(z[0]);k.push(z[1]+B)}else{let g=z.length>=2&&Bh(z.slice(-2))?z.slice(-2):z.slice(-1),Z=z.slice(0,z.length-g.length);if(k.length>0)k[k.length-1]+=Z;else if(Z.length>0)k.push(Z);k.push(g+B)}z=""}else if(k.length===0)k.push(B);else k.push(B);d+=B.length}else if(/[bcdfghjklmnñpqrstvwxyzü]/i.test($))z+=$,d++;else d++}if(z.length>0)if(k.length>0)k[k.length-1]+=z;else k.push(z);return k.filter(($)=>$.length>0)}normalizarVocal(h){return{"á":"a","é":"e","í":"i","ó":"o","ú":"u","ü":"u"}[h]||h}leerGrupoVocalico(h,f){if(f>=h.length)return"";let k=f+2<h.length?h.slice(f,f+3):"",d=f+1<h.length?h.slice(f,f+2):"",z=[...k].map((B)=>this.normalizarVocal(B)).join(""),$=[...d].map((B)=>this.normalizarVocal(B)).join("");if(z.length===3&&d5(z))return k;if($.length===2&&k5($)){if(f>0){let B=h[f-1];if(a0(B)&&(h[f]==="í"||h[f]==="ú"))return h[f]}if(h[f]==="í"||h[f]==="ú"){if(f+2<h.length){if(a0(h[f+1])&&!H0(h[f+2]))return h[f]}if(f+1<h.length&&a0(h[f+1])&&f+2>=h.length)return h[f]}return d}if(f>0){let B=h[f-1],g=h[f];if((g==="á"||g==="é"||g==="ó")&&f5(B))return g}return h[f]}leerGrupoConsonantico(h,f){let k="";while(f<h.length&&!H0(h[f]))k+=h[f],f++;return k}detectarSinalefas(h,f=[]){let k=[],d=[],z=0;for(let B=0;B<h.length;B++){let g=h[B];for(let Z=0;Z<g.length;Z++)k.push(g[Z]),z++}let $=0;for(let B=0;B<h.length-1;B++){let g=h[B],Z=h[B+1],Y=g[g.length-1],Q=Z[0],K=Y.charAt(Y.length-1),F=Q.charAt(0),w=K==="y",U=F==="y"&&f[B+1]==="y";if((H0(K)||w)&&(H0(F)||F==="h"||U)){let k0=$+g.length-1;d.push({silabaAnterior:k0,silabaSiguiente:k0+1,descartada:!1})}$+=g.length}return{silabas:k,sinalefas:d}}aplicarAcentoFinal(h,f){let k=this.determinarAcentoPalabra(f),d=h.length;switch(k){case"aguda":return d+1;case"esdrujula":return d-1;case"llana":default:return d}}determinarAcentoPalabra(h){let f=h.toLowerCase();if(/[áéíóú]/.test(f)){let d=this.silabearPalabra(f);if(d.length===0)return"llana";for(let z=0;z<d.length;z++)if(/[áéíóú]/.test(d[z])){if(z===d.length-1)return"aguda";if(z===d.length-2)return"llana";return"esdrujula"}}let k=f.charAt(f.length-1);if(k==="n"||k==="s"||/[aeiou]/.test(k))return"llana";return"aguda"}identificarTipoVerso(h,f){if(f!==11)return"no_endecasilabo";let k=new Set(h.map((z)=>z+1));return $h(k)?.tipo}encontrarSilabasTonicas(h){let f=[];for(let k of h)if(k.esAcentoEstrófico)f.push(k.index);return f}toggleSinalefa(h,f){let k=[...h.hiatoForzado];if(k.includes(f)){let d=k.indexOf(f);k.splice(d,1)}else k.push(f);return this.analizarVerso(h.texto,k)}analizarVerso(h,f=[],k){let d=k?.silabasObjetivo??11,z=k?.acentosObligatorios??[10],$=k?.acentosSugeridos??(d===11?[6]:[]),B=[],g=h.toLowerCase().trim();if(!g)return{texto:h,silabas:[],sinalefas:[],numSilabasMetricas:0,numSilabasFonologicas:0,acentoFinal:"llana",silabasTonicas:[],tipoVerso:void 0,errores:[{tipo:"num_silabas",mensaje:"Verso vacío"}],hiatoForzado:[]};let Z=g.replace(/[¿?!¡;:.,()\-"'«»]/g,"").trim(),Y=Z.split(/\s+/).filter((_)=>_.length>0);if(Y.length===0)return{texto:h,silabas:[],sinalefas:[],numSilabasMetricas:0,numSilabasFonologicas:0,acentoFinal:"llana",silabasTonicas:[],tipoVerso:void 0,errores:[{tipo:"num_silabas",mensaje:"Verso vacío"}],hiatoForzado:[]};let Q=Y.map((_)=>this.silabearPalabra(_)),{silabas:K,sinalefas:F}=this.detectarSinalefas(Q,Y),w=0,U=[],k0=Z.replace(/h/g,""),I0=0;for(let _ of Y)for(let O of _)I0++;let x=h.toLowerCase(),q=0;for(let _=0;_<Y.length;_++){let O=Y[_],j=Q[_],F0=x.indexOf(O,q);if(F0!==-1)q=F0;let W1=0,wh=j.some((M)=>/[áéíóú]/.test(M)),d0=-1;if(wh){for(let M=0;M<j.length;M++)if(/[áéíóú]/.test(j[M])){d0=M;break}}else if(j.length>=2){let M=O.charAt(O.length-1);if(M==="n"||M==="s"||/[aeiou]/.test(M))d0=j.length-2;else d0=j.length-1}else d0=0;for(let M=0;M<j.length;M++){let y1=j[M],A0=y1.toLowerCase(),U1=q+W1,Gh=U1+A0.length;W1+=A0.length;let Fh=/[áéíóú]/.test(A0)||M===d0;U.push({texto:y1,index:U.length,esAcentoEstrófico:Fh,esSinalefa:!1,hiatoForzado:!1,charStart:U1,charEnd:Gh})}if(F0!==-1)q=F0+O.length;else q+=O.length}let P=[],a=[];for(let _ of F){let O=f.includes(_.silabaAnterior),j=f.includes(_.silabaSiguiente);if(O||j){if(U[_.silabaAnterior])U[_.silabaAnterior].hiatoForzado=!0;P.push({..._,descartada:!0})}else{if(a.push({..._,descartada:!1}),P.push({..._,descartada:!1}),U[_.silabaAnterior])U[_.silabaAnterior].esSinalefa=!0;if(U[_.silabaSiguiente])U[_.silabaSiguiente].esSinalefa=!0}}let i=U.length,G0=a.length,V=i-G0,Kh=Y[Y.length-1],T0=this.determinarAcentoPalabra(Kh);if(T0==="aguda")V+=1;else if(T0==="esdrujula")V-=1;let _1=this.encontrarSilabasTonicas(U),x1=_1.map((_)=>{let O=a.filter((j)=>j.silabaSiguiente<=_).length;return _-O}),Hh=this.identificarTipoVerso(x1,V);if(V!==d)B.push({tipo:"num_silabas",mensaje:`El verso tiene ${V} sílabas métricas (debería tener ${d})`});else{let _=new Set(x1.map((j)=>j+1));if(d===11&&z.length===1&&z[0]===10&&$.length===1&&$[0]===6){if(!_.has(10))B.push({tipo:"sin_acento_10a",mensaje:"Falta acento en la 10ª sílaba (obligatorio)"});if(!_.has(6))B.push({tipo:"sin_acento_6a",mensaje:"Falta acento en la 6ª sílaba (recomendado)"})}else{for(let j of z)if(!_.has(j))B.push({tipo:"sin_acento_obligatorio",posicion:j,mensaje:`Falta acento en la ${j}ª sílaba (obligatorio)`});for(let j of $){if(z.includes(j))continue;if(_.has(j))continue;B.push({tipo:"sin_acento_sugerido",posicion:j,mensaje:`Falta acento en la ${j}ª sílaba (recomendado)`})}}}return{texto:h,silabas:U,sinalefas:P,numSilabasMetricas:Math.max(0,V),numSilabasFonologicas:i,acentoFinal:T0,silabasTonicas:_1,tipoVerso:Hh,errores:B,hiatoForzado:f}}}function H0(h){return l.has(h.toLowerCase())}function a0(h){return K0.has(h.toLowerCase())}function f5(h){return s0.has(h.toLowerCase())}function k5(h){return kh.has(h.toLowerCase())}function d5(h){return dh.has(h.toLowerCase())}function Bh(h){return zh.has(h.toLowerCase())}class gh{engine=new w0;analyze(h){let f=new Map;for(let k of h.payload.versos){let d=this.engine.analizarVerso(k.texto,k.hiatoForzado,k.opts);f.set(k.numero,d)}return Promise.resolve({type:"ANALYZE_RESULT",payload:f})}terminate(){}}function Zh(){return new gh}var Xh={"á":"a","é":"e","í":"i","ó":"o","ú":"u"};class t{metric=new w0;detectarRima(h){if(!h||!h.silabas||h.silabas.length===0)return;let f=h.silabas.filter(($)=>$.esAcentoEstrófico),k;if(f.length>0)k=f[f.length-1];else{let $=h.silabas.filter((B)=>!B.esSinalefa);k=$.length>=2?$[$.length-2]:$[$.length-1]}if(!k)return;let d=this.extraerTerminacion(h.texto,k),z=h.texto.trim().split(/\s+/).pop()||"";return{terminacionFonetica:d,claveCompleta:d,claveVocales:this.extraerClaveAsonante(z),letra:"",esConsonante:!0,versosRelacionados:[]}}obtenerClaves(h){return{completa:this.extraerTerminacionPalabra(h),vocales:this.extraerClaveAsonante(h)}}extraerTerminacion(h,f){let k=h.toLowerCase().replace(/[¿?!¡;:.,()\-"'«»]/g,"").trim(),d=k.split(/\s+/),z=d[d.length-1]||"";if(!z)return k;return this.extraerTerminacionPalabra(z)}extraerTerminacionPalabra(h){let f=h.toLowerCase(),k=f.match(/[áéíóú]/);if(k){let Y=f.lastIndexOf(k[0]);return f.slice(Y)}let d=[...f].filter((Y)=>l.has(Y));if(d.length===0)return f;let z=d[d.length-1],$=f.lastIndexOf(z),B=f.charAt(f.length-1);if(B!=="n"&&B!=="s"&&!l.has(B))return f.slice($);let g=d.length>=2?d[d.length-2]:z,Z=f.lastIndexOf(g);if(d.length>=2){let Q=f.substring(0,f.lastIndexOf(z)).lastIndexOf(g);if(Q>=0)return f.slice(Q)}return f.slice($)}extraerClaveAsonante(h){if(!h)return"";let f=h.toLowerCase().replace(/[¿?!¡;:.,()\-"'«»]/g,"").trim();if(!f)return"";let k=this.metric.silabearPalabra(f);if(k.length===0)return"";let d=this.indiceSilabaTonica(f,k);if(d<0)return"";let z=[];for(let $=d;$<k.length;$++){let B=[...k[$]].filter((Z)=>l.has(Z)).join(""),g=this.procesarGrupoVocalico(B);for(let Z of g)z.push(Xh[Z]||Z)}return z.join("")}esRimaConsonante(h,f){return h.toLowerCase()===f.toLowerCase()}esRimaAsonante(h,f){let k=this.extraerClaveAsonante(h),d=this.extraerClaveAsonante(f);return k!==""&&k===d}esRima(h,f,k){return k?this.esRimaConsonante(h,f):this.esRimaAsonante(h,f)}indiceSilabaTonica(h,f){for(let d=0;d<f.length;d++)if(/[áéíóú]/.test(f[d]))return d;if(f.length===1)return 0;let k=h.charAt(h.length-1);if(k==="n"||k==="s"||l.has(k))return f.length-2;return f.length-1}procesarGrupoVocalico(h){if(!h)return[];if(h.length===1)return[h];if([...h].filter((k)=>K0.has(k)).length>=2)return[...h];if(/[íú]/.test(h))return[...h];return[this.vocalMasAbierta(h)]}vocalMasAbierta(h){let f="",k=-1;for(let d of h){let z=Xh[d]||d,$=z==="a"?3:z==="e"||z==="o"?2:1;if($>k)k=$,f=d}return f}}class e0{rhymeEngine;constructor(){this.rhymeEngine=new t}detectarEsquema(h,f={}){let k=f.tipoRima??"consonante",z=f.forma==="romance",$=new Map;for(let x of h){let q=x.texto.trim();if(!q)continue;let P=q.split(/\s+/).pop()||"";if(!P)continue;$.set(x.numero,this.rhymeEngine.obtenerClaves(P))}let B=h.map((x)=>x.numero).sort((x,q)=>x-q),g=new Map,Z=[],Y=new Map,Q=["A","B","C","D","E","F","G","H","I","J","K","L","M","N"],K=0;for(let x of B){let q=$.get(x);if(z){if(!q||x%2!==0||!q.vocales){if(g.set(x,"·"),!Z.includes(x))Z.push(x);continue}let G0=`v:${q.vocales}`,V=Y.get(G0);if(!V)V=Q[K++%Q.length],Y.set(G0,V);g.set(x,V);continue}if(!q){if(g.set(x,"·"),!Z.includes(x))Z.push(x);continue}let P=k==="asonante"?q.vocales:q.completa,a=k==="asonante"?`v:${P}`:`c:${P}`,i=Y.get(a);if(!i)i=Q[K++%Q.length],Y.set(a,i);g.set(x,i)}let F=new Map;for(let x of g.values())if(x!=="·")F.set(x,(F.get(x)||0)+1);for(let x of B){let q=g.get(x);if(q&&q!=="·"&&(F.get(q)||0)<2){if(g.set(x,"·"),!Z.includes(x))Z.push(x)}}let w=this.formatEsquema(g,f.grupos),{forma:U,nombre:k0,esClasica:I0}=this.identificarForma(w,f.grupos,k);return{asignacion:g,patron:w,versosSueltos:Z,esClasico:I0,nombreClasico:k0,forma:U}}formatEsquema(h,f){return(f??[[1,2,3,4],[5,6,7,8],[9,10,11],[12,13,14]]).map((z)=>{return z.map(($)=>h.get($)||"·").join("")}).join(" ")}identificarForma(h,f,k="consonante"){let d=h.replace(/\s+/g," ").trim(),z=d.split(" ").join(""),$=(B,g,Z)=>({forma:g,nombre:Z,esClasica:B,esClasico:B});if(k!=="asonante"){let B=[{patron:"ABBA ABBA CDC DCD",nombre:"Soneto (Petrarquista)"},{patron:"ABBA ABBA CDE CDE",nombre:"Soneto"},{patron:"ABBA ABBA CDE DCE",nombre:"Soneto (variante)"},{patron:"ABBA ABBA CCD EED",nombre:"Soneto (variante)"},{patron:"ABAB ABAB CDC DCD",nombre:"Soneto isabelino (Shakespeare)"}];for(let Z of B)if(d===Z.patron)return $(!0,"soneto",Z.nombre);let g=d.split(" ");if(g.length===4){let[Z,Y,Q,K]=g,F=(w)=>w.length===4&&w[0]===w[3]&&w[1]===w[2]&&w[0]!==w[1];if(F(Z)&&F(Y)&&Z===Y&&Q.length===3&&K.length===3)return $(!0,"soneto","Soneto (variante libre)")}}if(z==="ABBA")return $(!0,"redondilla","Redondilla");if(z==="ABAB")return $(!0,"cuarteta","Cuarteta");if(z==="ABBAACCDDC")return $(!0,"decima","Décima (Espinela)");if(this.pareceRomance(z))return $(!0,"romance","Romance");if(this.pareceLetrilla(d))return $(!0,"letrilla","Letrilla");return $(!1)}pareceRomance(h){let f=h.split("");if(f.length<4)return!1;let k="",d=!1;for(let z=0;z<f.length;z++){let $=f[z];if((z+1)%2===0){if($==="·")return!1;if(d=!0,!k)k=$;else if($!==k)return!1}else if($!=="·"&&$!=="-")return!1}return d&&k!==""}pareceLetrilla(h){let f=h.split(" ").filter(Boolean);if(f.length<3)return!1;let k=f[0];if(!k||k.includes("·")&&k.length<=1)return!1;if(k.includes("·"))return!1;if(k.length<2||k.length>4)return!1;let d=f[1].length;if(d!==4)return!1;for(let z of f.slice(2))if(z.length!==d)return!1;return!0}}class h1{analyzer;rhymeEngine;schemeEngine;eventBus;pendingAnalysis=!1;forma={id:"soneto"};lastAnalysis=new Map;lastEsquema;dirtyVersos=new Set;textosVersos=new Map;hiatosForzados=new Map;constructor(h){this.analyzer=Zh(),this.rhymeEngine=new t,this.schemeEngine=new e0,this.eventBus=h,this.eventBus.on("verso:input",({numero:f,texto:k})=>{this.textosVersos.set(f,k),this.dirtyVersos.add(f),this.scheduleAnalysis()}),this.eventBus.on("hiato:toggle",({numero:f,silabaIndex:k})=>{let d=this.hiatosForzados.get(f)||[],z=d.indexOf(k);if(z>=0)d.splice(z,1);else d.push(k);this.hiatosForzados.set(f,d),this.dirtyVersos.add(f),this.scheduleAnalysis()})}setForma(h){this.forma=h,this.forceReanalyze()}scheduleAnalysis=fh(()=>{this.runAnalysis()},300);async runAnalysis(){if(this.pendingAnalysis||this.dirtyVersos.size===0)return;this.pendingAnalysis=!0;let h=[...this.dirtyVersos];this.eventBus.emit("analysis:start",{versos:h});try{let f=Math.max(...this.textosVersos.keys(),0),k=D0(this.forma,f),d=h.map((g)=>{let Z=hh(this.forma,g,f);return{numero:g,texto:this.textosVersos.get(g)||"",hiatoForzado:this.hiatosForzados.get(g)||[],opts:Z}}),z=await this.analyzer.analyze({type:"ANALYZE",payload:{versos:d}});for(let[g,Z]of z.payload)this.lastAnalysis.set(g,Z);let B=[...this.textosVersos.keys()].sort((g,Z)=>g-Z).map((g)=>({id:String(g),numero:g,texto:this.textosVersos.get(g)||"",analysis:this.lastAnalysis.get(g)}));this.lastEsquema=this.schemeEngine.detectarEsquema(B,{tipoRima:this.forma.tipoRima,forma:this.forma.id,grupos:k}),this.eventBus.emit("analysis:complete",{analysis:this.lastAnalysis,esquema:this.lastEsquema}),this.dirtyVersos.clear()}catch(f){console.error("[AnalysisService] Error en análisis:",f),this.eventBus.emit("ui:toast",{message:"Error al analizar el verso",level:"error"})}finally{this.pendingAnalysis=!1}}loadVersos(h){for(let f of h)this.textosVersos.set(f.numero,f.texto),this.dirtyVersos.add(f.numero);this.scheduleAnalysis()}reset(){this.lastAnalysis.clear(),this.textosVersos.clear(),this.hiatosForzados.clear(),this.dirtyVersos.clear(),this.lastEsquema=void 0}getAnalysis(h){return this.lastAnalysis.get(h)}getEsquema(){return this.lastEsquema}forceReanalyze(){for(let h of this.textosVersos.keys())this.dirtyVersos.add(h);this.scheduleAnalysis()}destroy(){this.analyzer.terminate()}}class f1{storage;eventBus;dirtyVersos=new Set;lastSoneto=null;getCurrentSoneto;constructor(h,f,k){this.eventBus=h,this.storage=f,this.getCurrentSoneto=k,this.eventBus.on("verso:input",({numero:d})=>{this.dirtyVersos.add(d)}),this.eventBus.on("verso:blur",()=>{this.flush()}),window.addEventListener("beforeunload",()=>{this.flush(!0)}),setInterval(()=>{if(this.dirtyVersos.size>0)this.flush()},30000)}flush(h=!1){if(this.dirtyVersos.size===0)return;let f=this.getCurrentSoneto();if(f){if(h)try{let k=JSON.stringify({soneto:f,savedAt:Date.now()});localStorage.setItem("el-taller:soneto-actual",k)}catch{}else this.storage.autoSave(f);this.lastSoneto=f}this.dirtyVersos.clear()}saveNow(){this.flush()}destroy(){this.flush()}}function ch(h){let f="";for(let k of h){let d=k.charCodeAt(0);if(d===40||d===41||d===92)f+="\\"+k;else if(d>=32&&d<=126)f+=k;else if(d>=161&&d<=255)f+="\\"+d.toString(8);else f+="?"}return f}var C0=595.28,Qh=841.89,M0=72,k1=C0/2;function Yh(h,f,k){let d=h.length*k*0.55,z=k1-d/2;return`1 0 0 1 ${Math.max(M0,Math.min(z,C0-M0-d)).toFixed(2)} ${f.toFixed(2)} Tm
(${ch(h)}) Tj`}function z5(h){let f=b(h.forma??"soneto"),k=h.versos.map((z,$)=>({id:String($+1),numero:$+1,texto:z.texto})),d=f0(f,k);if(f.modo==="serie"){let z=d.flatMap((B)=>B.versos.map((g)=>g.texto)).filter((B)=>B.trim()),$=[];for(let B=0;B<z.length;B+=4)$.push(z.slice(B,B+4));return $.filter((B)=>B.length>0)}if(f.modo==="estrofa"){let z=d[0],$=d.slice(1),B=z?.versos.map((Z)=>Z.texto).filter((Z)=>Z.trim())??[],g=[];if(B.length>0)g.push(B);for(let Z of $){let Y=Z.versos.map((Q)=>Q.texto).filter((Q)=>Q.trim());if(Y.length>0)g.push(Y);if(B.length>0)g.push(B)}return g}return d.map((z)=>z.versos.map(($)=>$.texto).filter(($)=>$.trim())).filter((z)=>z.length>0)}function $5(h){let f=[],k=(Y)=>f.push(Y),d=Qh-85;if(h.titulo)k("BT"),k("/F1 18 Tf"),k(Yh(h.titulo,d,18)),k("ET"),d-=30,k("q"),k("0.5 w"),k(`${M0} ${d} m`),k(`${C0-M0} ${d} l`),k("S"),k("Q"),d-=16;let z=z5(h);for(let Y=0;Y<z.length;Y++){let Q=z[Y];if(Y>0){d-=10,k("BT"),k("/F1 9 Tf");let K=k1-18;k(`1 0 0 1 ${K.toFixed(2)} ${d.toFixed(2)} Tm`),k("(*   *   *) Tj"),k("ET"),d-=18}k("BT"),k("/F1 12 Tf");for(let K of Q){let F=K.trim()||"·";k(Yh(F,d,12)),d-=18}k("ET")}k("BT"),k("/F1 9 Tf");let $=60,B="-- El Taller",g=B.length*9*0.55,Z=k1-g/2;return k(`1 0 0 1 ${Z.toFixed(2)} ${$.toFixed(2)} Tm`),k(`(${ch(B)}) Tj`),k("ET"),f.join(`
`)}function Jh(h){let f=$5(h),k=f.length,d={};d[1]="<< /Type /Catalog /Pages 2 0 R >>",d[2]="<< /Type /Pages /Kids [3 0 R] /Count 1 >>",d[3]=`<< /Type /Page /Parent 2 0 R
   /MediaBox [0 0 ${C0} ${Qh}]
   /Contents 4 0 R
   /Resources << /Font << /F1 5 0 R >> >> >>`,d[4]=`<< /Length ${k} >>
stream
${f}
endstream`,d[5]="<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman /Encoding /WinAnsiEncoding >>";let z=Object.keys(d).map(Number).sort((Y,Q)=>Y-Q),$=`%PDF-1.4
`,B={};for(let Y of z)B[Y]=$.length,$+=`${Y} 0 obj
${d[Y]}
endobj
`;let g=$.length,Z=z.length+1;$+=`xref
`,$+=`0 ${Z}
`,$+=`0000000000 65535 f 
`;for(let Y of z)$+=`${String(B[Y]).padStart(10,"0")} 00000 n 
`;return $+=`trailer
`,$+=`<< /Size ${Z} /Root 1 0 R >>
`,$+=`startxref
`,$+=`${g}
`,$+="%%EOF",new TextEncoder().encode($)}class d1{formatAsText(h){let f=b(h.forma),k=[];if(h.titulo)k.push(`${h.titulo}
${"═".repeat(h.titulo.length)}`);let d=f0(f,h.versos);if(f.modo==="serie"){let z=d.map(($)=>$.versos.map((B)=>B.texto).join(`
`)).join(`
`);if(z)k.push(z);return k.join(`

`)}if(f.modo==="estrofa"){let z=d[0],$=d.slice(1),B=z?.versos.map((g)=>g.texto).join(`
`)||"";if(B)k.push(B);for(let g of $){let Z=g.versos.map((Y)=>Y.texto).join(`
`);if(Z)k.push(Z);if(B)k.push(B)}return k.join(`

`)}for(let z of d){let $=z.versos.map((B)=>B.texto).join(`
`);if($)k.push($)}return k.join(`

`)}exportToTxt(h){let f=this.formatAsText(h),k=new Blob([f],{type:"text/plain;charset=utf-8"}),d=URL.createObjectURL(k),z=document.createElement("a");z.href=d,z.download=this.getFileName(h),z.click(),URL.revokeObjectURL(d)}exportToPdf(h){let f=Jh(h),k=new Blob([f.buffer],{type:"application/pdf"}),d=URL.createObjectURL(k),z=document.createElement("a");z.href=d,z.download=this.getFileName(h).replace(/\.txt$/,".pdf"),z.click(),URL.revokeObjectURL(d)}async copyToClipboard(h){try{let f=this.formatAsText(h);return await navigator.clipboard.writeText(f),!0}catch{try{let f=document.createElement("textarea");return f.value=this.formatAsText(h),f.style.position="fixed",f.style.opacity="0",document.body.appendChild(f),f.select(),document.execCommand("copy"),document.body.removeChild(f),!0}catch{return!1}}}getFileName(h){if(h.titulo)return`${h.titulo.toLowerCase().replace(/[^a-záéíóúüñ\s]/g,"").trim().replace(/\s+/g,"-").slice(0,50)||"poema"}.txt`;return`poema-${new Date(h.createdAt).toISOString().slice(0,10)}.txt`}}class z1 extends H{constructor(){super(...arguments);this.numero=1;this.texto="";this.isActive=!1}static styles=W`
    :host {
      display: block;
      width: 100%;
    }

    .verso-container {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      transition: background-color 0.15s ease;
    }

    .verso-container:hover {
      background: rgba(139, 69, 19, 0.04);
    }

    .verso-container--active {
      background: rgba(139, 69, 19, 0.06);
    }

    .verso-numero {
      font-size: 0.75rem;
      color: #8B7D6B;
      width: 1.5rem;
      text-align: right;
      flex-shrink: 0;
      padding-top: 0.35em;
      user-select: none;
      font-family: 'Crimson Text', Georgia, serif;
    }

    .verso-line-wrapper {
      flex: 1;
      position: relative;
    }

    .verso-editor {
      font-size: 1.125rem;
      line-height: 1.6;
      font-family: 'Crimson Text', Georgia, serif;
      color: #2C1810;
      background: transparent;
      border-bottom: 1px solid transparent;
      min-height: 1.6em;
      padding: 0.1em 0;
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      cursor: text;
      transition: border-color 0.15s ease;
    }

    .verso-editor:focus {
      border-bottom-color: #A0522D;
    }

    .verso-metrica {
      font-size: 0.75rem;
      color: #8B7D6B;
      margin-top: 0.15em;
      padding-left: 0.5rem;
      min-height: 1.2em;
      font-family: 'Crimson Text', Georgia, serif;
    }

    .verso-metrica--ok {
      color: #6B8E23;
    }

    .verso-metrica--error {
      color: #CD5C5C;
    }

    .verso-estado {
      font-size: 0.625rem;
      width: 1rem;
      text-align: center;
      flex-shrink: 0;
      padding-top: 0.5em;
    }

    @media (max-width: 767px) {
      /* En móvil los versos deben poder envolver en lugar de scroll infinito */
      .verso-editor {
        white-space: normal;
        overflow-wrap: break-word;
        word-break: break-word;
        overflow-x: visible;
        font-size: 1.0625rem;
        line-height: 1.5;
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
  `;firstUpdated(){this.actualizarTextoEnDOM()}updated(h){if(h.has("texto")&&this.editorRef)this.actualizarTextoEnDOM()}actualizarTextoEnDOM(){if(!this.editorRef)return;let h=this.texto||"";if(this.editorRef.textContent!==h)this.editorRef.textContent=h}render(){let h=this.getEstadoClass();return c`
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
          <div class="verso-metrica ${h}">
            ${this.renderMetrica()}
          </div>
        </div>
        <div class="verso-estado ${h}">
          ${this.renderEstado()}
        </div>
      </div>
    `}getEstadoClass(){if(!this.analysis||!this.texto.trim())return"";if(this.analysis.errores.length>0)return"verso-metrica--error";return"verso-metrica--ok"}renderMetrica(){if(!this.analysis||!this.texto.trim())return"";let h=[];if(h.push(`${this.analysis.numSilabasMetricas} síl.`),this.analysis.tipoVerso&&this.analysis.tipoVerso!=="no_endecasilabo")h.push(`· ${this.analysis.tipoVerso}`);if(this.analysis.errores.length>0)h.push(`· ${this.analysis.errores[0].mensaje}`);return h.join(" ")}renderEstado(){if(!this.analysis||!this.texto.trim())return"";if(this.analysis.errores.length>0)return"✗";return"✓"}onInput(){let h=this.editorRef.textContent||"";this.dispatchEvent(new CustomEvent("verso-input",{detail:{numero:this.numero,texto:h},bubbles:!0,composed:!0}))}onBlur(){this.dispatchEvent(new CustomEvent("verso-blur",{detail:{numero:this.numero},bubbles:!0,composed:!0}))}onFocus(){this.dispatchEvent(new CustomEvent("verso-focus",{detail:{numero:this.numero},bubbles:!0,composed:!0}))}onKeyDown(h){if(h.key==="Enter")h.preventDefault()}}X([J({type:Number})],z1.prototype,"numero",void 0),X([J({type:String})],z1.prototype,"texto",void 0),X([J({type:Object})],z1.prototype,"analysis",void 0),X([J({type:Boolean})],z1.prototype,"isActive",void 0),X([s1(".verso-editor")],z1.prototype,"editorRef",void 0),z1=X([y("verso-line")],z1);class $1 extends H{constructor(){super(...arguments);this.estrategia="";this.open=!1}static styles=W`
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
      font-size: 0.7rem;
      font-family: 'Crimson Text', Georgia, serif;
      color: #A0522D;
      cursor: pointer;
      user-select: none;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      transition: background-color 0.15s ease;
      border: none;
      background: transparent;
    }

    .estrategia-toggle:hover {
      background: rgba(139, 69, 19, 0.08);
    }

    .estrategia-toggle .arrow {
      font-size: 0.6rem;
      transition: transform 0.2s ease;
      display: inline-block;
    }

    .estrategia-toggle .arrow--open {
      transform: rotate(90deg);
    }

    .estrategia-body {
      overflow: hidden;
      transition: max-height 0.3s ease, opacity 0.25s ease, margin-top 0.25s ease;
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
      font-family: 'Crimson Text', Georgia, serif;
      font-size: 0.875rem;
      line-height: 1.55;
      color: #5C4033;
      background: rgba(232, 213, 176, 0.35);
      border: 1px dashed rgba(139, 69, 19, 0.2);
      border-radius: 6px;
      resize: vertical;
      outline: none;
      box-sizing: border-box;
      font-style: italic;
      transition: border-color 0.15s ease, background-color 0.15s ease;
    }

    .estrategia-textarea:focus {
      border-color: rgba(160, 82, 45, 0.45);
      background: rgba(232, 213, 176, 0.55);
      border-style: solid;
    }

    .estrategia-textarea::placeholder {
      color: #B8A88A;
      font-style: italic;
    }
  `;render(){return c`
      <div class="estrategia-container">
        <button class="estrategia-toggle" @click=${this.toggle} aria-label="Mostrar/ocultar estrategia del poema">
          <span class="arrow ${this.open?"arrow--open":""}">▸</span>
          Estrategia del poema
          ${!this.open&&this.estrategia.trim()?c`<span style="color:#8B7D6B">— ${this.truncate(this.estrategia)}</span>`:""}
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
    `}toggle(){this.open=!this.open}truncate(h){return h.length>55?h.slice(0,55)+"…":h}onInput(h){let f=h.target;this.dispatchEvent(new CustomEvent("estrategia-change",{detail:{estrategia:f.value},bubbles:!0,composed:!0}))}}X([J({type:String})],$1.prototype,"estrategia",void 0),X([J({type:Boolean})],$1.prototype,"open",void 0),$1=X([y("estrategia-line")],$1);class B1 extends H{constructor(){super(...arguments);this.forma={id:"soneto"};this.versos=[];this.titulo="";this.estrategia="";this.activeVerso=null}static styles=W`
    :host {
      display: block;
      width: 100%;
    }

    .editor-section {
      width: 100%;
    }

    .parte-container {
      margin-bottom: 1.5rem;
    }

    .parte-label {
      font-size: 0.6875rem;
      color: #8B7D6B;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 0.5rem;
      padding-left: 0.5rem;
      font-family: 'Crimson Text', Georgia, serif;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .parte-label__tag {
      text-transform: none;
      letter-spacing: 0.02em;
      font-style: italic;
      color: #A0522D;
    }

    .parte-separator {
      height: 1px;
      background: linear-gradient(
        to right,
        transparent,
        #8B7D6B 20%,
        #8B7D6B 80%,
        transparent
      );
      margin: 1.5rem 0;
      opacity: 0.3;
    }

    .editor-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
      flex-wrap: wrap;
    }

    .editor-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #2C1810;
      font-family: 'Crimson Text', Georgia, serif;
    }

    .titulo-input {
      font-family: 'Crimson Text', Georgia, serif;
      font-size: 1.25rem;
      color: #2C1810;
      background: transparent;
      border: none;
      border-bottom: 1px solid rgba(44, 24, 16, 0.2);
      padding: 0.25rem 0.5rem;
      flex: 1;
      min-width: 200px;
      outline: none;
      transition: border-color 0.15s ease;
    }

    .titulo-input:focus {
      border-bottom-color: #A0522D;
    }

    .titulo-input::placeholder {
      color: #8B7D6B;
      font-style: italic;
    }

    .editor-meta {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: 1.25rem;
    }

    .forma-badge {
      font-size: 0.6875rem;
      font-family: 'Crimson Text', Georgia, serif;
      font-weight: 600;
      color: #FFF8EC;
      background: #8B4513;
      padding: 0.2rem 0.6rem;
      border-radius: 10px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .esquema-badge {
      font-size: 0.6875rem;
      font-family: 'Crimson Text', Georgia, serif;
      color: #A0522D;
      background: rgba(139, 69, 19, 0.08);
      padding: 0.2rem 0.6rem;
      border-radius: 10px;
    }

    .editor-controls {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }

    .control-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.4rem 0.85rem;
      border-radius: 6px;
      font-family: 'Crimson Text', Georgia, serif;
      font-size: 0.8125rem;
      color: #5C4033;
      background: rgba(139, 69, 19, 0.06);
      border: 1px solid rgba(44, 24, 16, 0.15);
      cursor: pointer;
      transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
    }

    .control-btn:hover:not(:disabled) {
      background: rgba(139, 69, 19, 0.12);
      color: #8B4513;
      border-color: rgba(139, 69, 19, 0.35);
    }

    .control-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
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
  `;render(){let h=f0(this.forma,this.versos);return c`
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
          ${this.forma.esquemaReferencia?c`<span class="esquema-badge">${this.forma.esquemaReferencia}</span>`:""}
          <span class="esquema-badge">${this.forma.medidaDescripcion}</span>
        </div>

        <estrategia-line
          .estrategia=${this.estrategia}
          @estrategia-change=${this.onEstrategiaChange}
        ></estrategia-line>

        ${h.map((f,k)=>c`
          <div class="parte-container">
            <div class="parte-label">
              ${f.nombre}
              ${f.tipo==="estribillo"?c`<span class="parte-label__tag">(se repite tras cada copla)</span>`:""}
            </div>
            ${f.versos.map((d)=>c`
              <verso-line
                .numero=${d.numero}
                .texto=${d.texto||""}
                .analysis=${d.analysis}
                .isActive=${this.activeVerso===d.numero}
                @verso-input=${this.onVersoInput}
                @verso-blur=${this.onVersoBlur}
                @verso-focus=${this.onVersoFocus}
                @hiato-toggle=${this.onHiatoToggle}
              ></verso-line>
            `)}
          </div>
          ${k<h.length-1?c`<div class="parte-separator"></div>`:""}
        `)}

        ${this.renderControls()}
      </div>
    `}renderControls(){if(this.forma.modo==="serie"){let{min:h,max:f}=n0(this.forma),k=this.versos.length;return c`
        <div class="editor-controls">
          <button class="control-btn" ?disabled=${k>=f} @click=${this.onVersoAdd} title="Añadir un verso">
            ＋ verso
          </button>
          <button class="control-btn" ?disabled=${k<=h} @click=${this.onVersoRemove} title="Quitar el último verso">
            − verso
          </button>
        </div>
      `}if(this.forma.modo==="estrofa"){let{max:h}=n0(this.forma),f=this.versos.length,k=this.forma.versosIniciales;return c`
        <div class="editor-controls">
          <button class="control-btn" ?disabled=${f>=h} @click=${this.onEstrofaAdd} title="Añadir una copla (mudanza + vuelta)">
            ＋ estrofa
          </button>
          <button class="control-btn" ?disabled=${f<=k} @click=${this.onEstrofaRemove} title="Quitar la última copla">
            − estrofa
          </button>
        </div>
      `}return c``}getVerso(h){return this.versos.find((f)=>f.numero===h)}onTituloInput(h){let f=h.target;this.dispatchEvent(new CustomEvent("titulo-change",{detail:{titulo:f.value},bubbles:!0,composed:!0}))}onEstrategiaChange(h){h.stopPropagation();let{estrategia:f}=h.detail;this.dispatchEvent(new CustomEvent("estrategia-change",{detail:{estrategia:f},bubbles:!0,composed:!0}))}onVersoInput(h){h.stopPropagation();let{numero:f,texto:k}=h.detail;this.dispatchEvent(new CustomEvent("verso-input",{detail:{numero:f,texto:k},bubbles:!0,composed:!0}))}onVersoBlur(h){h.stopPropagation(),this.dispatchEvent(new CustomEvent("verso-blur",{detail:h.detail,bubbles:!0,composed:!0}))}onVersoFocus(h){h.stopPropagation();let{numero:f}=h.detail;this.activeVerso=f,this.dispatchEvent(new CustomEvent("verso-focus",{detail:{numero:f},bubbles:!0,composed:!0}))}onHiatoToggle(h){h.stopPropagation(),this.dispatchEvent(new CustomEvent("hiato-toggle",{detail:h.detail,bubbles:!0,composed:!0}))}onVersoAdd(){this.dispatchEvent(new CustomEvent("verso-add",{bubbles:!0,composed:!0}))}onVersoRemove(){this.dispatchEvent(new CustomEvent("verso-remove",{bubbles:!0,composed:!0}))}onEstrofaAdd(){this.dispatchEvent(new CustomEvent("estrofa-add",{bubbles:!0,composed:!0}))}onEstrofaRemove(){this.dispatchEvent(new CustomEvent("estrofa-remove",{bubbles:!0,composed:!0}))}focusVerso(h){this.activeVerso=h,this.shadowRoot?.querySelector(`verso-line[numero="${h}"]`)?.querySelector("[contenteditable]")?.focus()}}X([J({type:Object})],B1.prototype,"forma",void 0),X([J({type:Array})],B1.prototype,"versos",void 0),X([J({type:String})],B1.prototype,"titulo",void 0),X([J({type:String})],B1.prototype,"estrategia",void 0),X([J({type:Number})],B1.prototype,"activeVerso",void 0),X([a1("verso-line")],B1.prototype,"versoLines",void 0),B1=X([y("soneto-editor")],B1);class g1 extends H{constructor(){super(...arguments);this.showErrors=!0;this.silabasObjetivo=11}static styles=W`
    :host {
      display: block;
      font-size: 0.75rem;
      font-family: 'Crimson Text', Georgia, serif;
      margin-top: 0.15em;
      padding-left: 0.5rem;
      min-height: 1.2em;
    }

    .metric--ok {
      color: #6B8E23;
    }

    .metric--error {
      color: #CD5C5C;
    }

    .metric--warning {
      color: #D2691E;
    }

    .metric--muted {
      color: #8B7D6B;
    }

    .error-list {
      display: flex;
      flex-direction: column;
      gap: 0.1em;
    }
  `;render(){if(!this.analysis)return c`<span class="metric--muted">· · ·</span>`;let h=[];if(h.push({text:`${this.analysis.numSilabasMetricas} síl.`,class:this.analysis.numSilabasMetricas===this.silabasObjetivo?"metric--ok":"metric--error"}),this.silabasObjetivo===11&&this.analysis.tipoVerso&&this.analysis.tipoVerso!=="no_endecasilabo")h.push({text:this.analysis.tipoVerso,class:"metric--muted"});if(this.analysis.acentoFinal)h.push({text:this.analysis.acentoFinal,class:"metric--muted"});return c`
      <div>
        <span class="${h[0]?.class||"metric--muted"}">
          ${h.map((f)=>f.text).join(" · ")}
        </span>
        ${this.showErrors&&this.analysis.errores.length>0?c`
          <div class="error-list">
            ${this.analysis.errores.map((f)=>c`
              <span class="metric--error">${f.mensaje}</span>
            `)}
          </div>
        `:""}
      </div>
    `}}X([J({type:Object})],g1.prototype,"analysis",void 0),X([J({type:Boolean})],g1.prototype,"showErrors",void 0),X([J({type:Number})],g1.prototype,"silabasObjetivo",void 0),g1=X([y("verse-metrics")],g1);class Z1 extends H{constructor(){super(...arguments);this.sinalefas=[]}static styles=W`
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
    }

    path {
      pointer-events: stroke;
      cursor: pointer;
      transition: stroke 0.15s ease, stroke-width 0.15s ease;
    }

    path:hover {
      stroke: #6B5335;
      stroke-width: 2.5;
    }
  `;render(){return c`
      <svg>
        ${this.renderArcs()}
      </svg>
    `}renderArcs(){if(!this.editorElement||!this.sinalefas.length)return"";let h=this.editorElement.getBoundingClientRect();return this.sinalefas.filter((k)=>!k.descartada).map((k)=>{let d=this.editorElement.querySelectorAll("[data-silaba]"),z=d[k.silabaAnterior],$=d[k.silabaSiguiente];if(!z||!$)return"";let B=z.getBoundingClientRect(),g=$.getBoundingClientRect(),Z=B.right-h.left,Y=g.left-h.left,Q=B.bottom-h.top+2;return c`
        <path
          d="M ${Z} ${Q} Q ${(Z+Y)/2} ${Q+10}, ${Y} ${Q}"
          fill="none"
          stroke="#8B7355"
          stroke-width="1.5"
          data-silaba="${k.silabaAnterior}"
          @click=${()=>this.onArcClick(k.silabaAnterior)}
        />
      `})}onArcClick(h){this.dispatchEvent(new CustomEvent("sinalefa-click",{detail:{silabaIndex:h},bubbles:!0,composed:!0}))}updated(h){if(h.has("sinalefas")||h.has("editorElement"))this.requestUpdate()}}X([J({type:Array})],Z1.prototype,"sinalefas",void 0),X([J({type:Object})],Z1.prototype,"editorElement",void 0),Z1=X([y("sinalefa-overlay")],Z1);class X1 extends H{constructor(){super(...arguments);this.versos=[];this.silabasObjetivo=11}static styles=W`
    :host {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .panel-title {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #8B7D6B;
      font-family: 'Crimson Text', Georgia, serif;
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
      padding: 2px 0.5rem;
      border-radius: 2px;
      font-size: 0.75rem;
      cursor: default;
      transition: background-color 0.15s ease;
      font-family: 'Crimson Text', Georgia, serif;
    }

    .metrics-item:hover {
      background: rgba(139, 69, 19, 0.06);
    }

    .metrics-item__numero {
      font-variant-numeric: tabular-nums;
      color: #8B7D6B;
      width: 1.2rem;
      flex-shrink: 0;
    }

    .metrics-item__silabas {
      font-variant-numeric: tabular-nums;
      font-weight: 500;
    }

    .metrics-item__silabas--ok {
      color: #6B8E23;
    }

    .metrics-item__silabas--error {
      color: #CD5C5C;
    }

    .metrics-item__tipo {
      color: #5C4033;
      font-size: 0.65rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 7rem;
    }

    .metrics-item__error {
      color: #CD5C5C;
      font-size: 0.65rem;
    }

    .no-data {
      color: #8B7D6B;
      font-size: 0.75rem;
      font-style: italic;
      text-align: center;
      padding: 1rem 0;
      font-family: 'Crimson Text', Georgia, serif;
    }

    .panel-subtitle {
      font-size: 0.65rem;
      color: #A0522D;
      font-style: italic;
      padding-left: 0.5rem;
    }
  `;render(){let h=this.getPosiciones(),f=this.analysisMap&&this.analysisMap.size>0;return c`
      <div class="panel-title">📊 Métrica · ${this.silabasObjetivo}</div>
      ${!f||h.length===0?c`<div class="no-data">Escribe para ver análisis</div>`:c`<div class="metrics-list">${this.renderItems(h)}</div>`}
    `}getPosiciones(){if(this.versos.length>0)return this.versos.map((h)=>h.numero).sort((h,f)=>h-f);return Array.from({length:14},(h,f)=>f+1)}renderItems(h){let f=[];for(let k of h){let d=this.analysisMap?.get(k);if(!d)f.push(c`
          <div class="metrics-item">
            <span class="metrics-item__numero">${k}</span>
            <span class="metrics-item__tipo">—</span>
          </div>
        `);else{let z=d.numSilabasMetricas===this.silabasObjetivo?"metrics-item__silabas--ok":"metrics-item__silabas--error",$=this.silabasObjetivo===11&&d.tipoVerso&&d.tipoVerso!=="no_endecasilabo";f.push(c`
          <div class="metrics-item" title="${d.errores.map((B)=>B.mensaje).join(" · ")}">
            <span class="metrics-item__numero">${k}</span>
            <span class="metrics-item__silabas ${z}">
              ${d.numSilabasMetricas}
            </span>
            <span class="metrics-item__tipo">
              ${$?d.tipoVerso:d.errores.length>0?"⚠":""}
            </span>
          </div>
        `)}}return f}}X([J({type:Object})],X1.prototype,"analysisMap",void 0),X([J({type:Array})],X1.prototype,"versos",void 0),X([J({type:Number})],X1.prototype,"silabasObjetivo",void 0),X1=X([y("metrics-panel")],X1);class Y1 extends H{constructor(){super(...arguments);this.versos=[];this.grupos=[]}static styles=W`
    :host {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .panel-title {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #8B7D6B;
      font-family: 'Crimson Text', Georgia, serif;
    }

    .patron-display {
      font-family: 'Crimson Text', Georgia, serif;
      font-size: 0.875rem;
      color: #8B4513;
      line-height: 1.6;
      padding: 0.5rem;
      background: rgba(139, 69, 19, 0.05);
      border-radius: 4px;
      white-space: pre-wrap;
      text-align: center;
    }

    .clasico-badge {
      font-size: 0.75rem;
      color: #6B8E23;
      font-weight: 600;
      text-align: center;
      padding: 0.25rem;
      background: rgba(107, 142, 35, 0.08);
      border-radius: 4px;
    }

    .libre-badge {
      font-size: 0.75rem;
      color: #8B7D6B;
      text-align: center;
      font-style: italic;
    }

    .scheme-part {
      margin-bottom: 0.25rem;
    }

    .scheme-line {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 1px 0;
      font-size: 0.75rem;
      font-family: 'Crimson Text', Georgia, serif;
    }

    .scheme-line__letra {
      font-weight: 700;
      width: 1rem;
      text-align: center;
      transition: color 0.3s ease;
    }

    .scheme-line__letra--active {
      color: #6B8E23;
    }

    .scheme-line__letra--pending {
      color: #8B7D6B;
    }

    .scheme-line__texto {
      color: #5C4033;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.7rem;
    }

    .scheme-line__numero {
      color: #8B7D6B;
      width: 1rem;
      flex-shrink: 0;
      font-size: 0.65rem;
    }

    .no-data {
      color: #8B7D6B;
      font-size: 0.75rem;
      font-style: italic;
      text-align: center;
      padding: 1rem 0;
      font-family: 'Crimson Text', Georgia, serif;
    }
  `;render(){if(!this.esquema)return c`
        <div class="panel-title">🎯 Rimas</div>
        <div class="no-data">Completa versos para ver el esquema</div>
      `;let h=this.getPartes();return c`
      <div class="panel-title">🎯 Rimas</div>

      <div class="patron-display">${this.esquema.patron}</div>

      ${this.esquema.esClasico?c`<div class="clasico-badge">✓ ${this.esquema.nombreClasico||"Forma clásica"}</div>`:c`<div class="libre-badge">✗ Esquema libre</div>`}

      ${h.map((f)=>c`
        <div class="scheme-part">
          ${f.map((k)=>{let d=this.esquema?.asignacion.get(k)||"·",z=this.versos.find((B)=>B.numero===k),$=z?.texto?z.texto.slice(0,20)+(z.texto.length>20?"…":""):"";return c`
              <div class="scheme-line">
                <span class="scheme-line__numero">${k}</span>
                <span class="scheme-line__letra ${d!=="·"?"scheme-line__letra--active":"scheme-line__letra--pending"}">
                  ${d}
                </span>
                <span class="scheme-line__texto">${$||"—"}</span>
              </div>
            `})}
        </div>
      `)}
    `}getPartes(){if(this.grupos&&this.grupos.length>0)return this.grupos;return[[1,2,3,4],[5,6,7,8],[9,10,11],[12,13,14]]}}X([J({type:Object})],Y1.prototype,"esquema",void 0),X([J({type:Array})],Y1.prototype,"versos",void 0),X([J({type:Array})],Y1.prototype,"grupos",void 0),Y1=X([y("rhyme-scheme-panel")],Y1);class c1 extends H{constructor(){super(...arguments);this.total=14;this.completados=0;this.conErrores=0}static styles=W`
    :host {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
      padding: 0.5rem 0;
    }

    .track {
      flex: 1;
      height: 4px;
      background: #E8D5B0;
      border-radius: 2px;
      overflow: hidden;
    }

    .fill {
      height: 100%;
      background: #8B4513;
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    .text {
      font-size: 0.75rem;
      color: #8B7D6B;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
      font-family: 'Crimson Text', Georgia, serif;
    }

    .ok-icon {
      color: #6B8E23;
      font-size: 0.75rem;
    }
  `;render(){let h=this.total>0?this.completados/this.total*100:0;return c`
      <div class="track">
        <div class="fill" style="width: ${h}%"></div>
      </div>
      <div class="text">
        ${this.completados} / ${this.total} versos
        ${this.conErrores>0?c`· ⚠ ${this.conErrores}`:""}
      </div>
    `}}X([J({type:Number})],c1.prototype,"total",void 0),X([J({type:Number})],c1.prototype,"completados",void 0),X([J({type:Number})],c1.prototype,"conErrores",void 0),c1=X([y("progress-bar")],c1);class Q1 extends H{constructor(){super(...arguments);this.messages=[]}static styles=W`
    :host {
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      pointer-events: none;
    }

    .toast {
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 0.875rem;
      font-family: 'Crimson Text', Georgia, serif;
      box-shadow: 0 8px 30px rgba(44, 24, 16, 0.12);
      animation: toast-in 0.3s ease;
      max-width: 300px;
      pointer-events: auto;
    }

    .toast--info {
      background: #2C1810;
      color: #FFF8EC;
    }

    .toast--warn {
      background: #D2691E;
      color: #2C1810;
    }

    .toast--error {
      background: #CD5C5C;
      color: white;
    }

    .toast--closing {
      animation: toast-out 0.3s ease forwards;
    }

    @keyframes toast-in {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes toast-out {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(10px);
      }
    }
  `;nextId=0;show(h,f="info"){let k=++this.nextId;this.messages=[...this.messages,{id:k,message:h,level:f}],setTimeout(()=>{this.dismissToast(k)},3000)}dismissToast(h){this.messages=this.messages.filter((f)=>f.id!==h)}render(){return c`
      ${this.messages.map((h)=>c`
        <div class="toast toast--${h.level}" @click=${()=>this.dismissToast(h.id)}>
          ${h.message}
        </div>
      `)}
    `}}X([N()],Q1.prototype,"messages",void 0),Q1=X([y("app-toast")],Q1);class J1 extends H{constructor(){super(...arguments);this.title="";this.open=!1}static styles=W`
    :host {
      position: fixed;
      inset: 0;
      background: rgba(44, 24, 16, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 900;
      animation: fade-in 0.2s ease;
    }

    .modal {
      background: #FFF8EC;
      border-radius: 12px;
      padding: 1.5rem;
      min-width: 320px;
      max-width: 480px;
      box-shadow: 0 8px 30px rgba(44, 24, 16, 0.12);
      border: 1px solid rgba(44, 24, 16, 0.1);
      font-family: 'Crimson Text', Georgia, serif;
    }

    .modal__title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #2C1810;
    }

    .modal__content {
      color: #5C4033;
      line-height: 1.6;
    }

    .modal__actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
      margin-top: 1.5rem;
    }

    @media (max-width: 767px) {
      .modal {
        width: 100%;
        max-width: 100%;
        min-width: 0;
        margin: 0 1rem;
        max-height: 84vh;
        overflow-y: auto;
        padding: 1.25rem 1rem;
      }

      .btn {
        min-height: 42px;
        flex: 1;
        justify-content: center;
        text-align: center;
      }
    }

    .btn {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      font-family: 'Crimson Text', Georgia, serif;
      font-size: 0.875rem;
      cursor: pointer;
      transition: background-color 0.15s ease, color 0.15s ease;
    }

    .btn--primary {
      background: #8B4513;
      color: white;
      border: none;
    }

    .btn--primary:hover {
      background: #A0522D;
    }

    .btn--secondary {
      background: transparent;
      color: #5C4033;
      border: 1px solid rgba(44, 24, 16, 0.2);
    }

    .btn--secondary:hover {
      background: rgba(139, 69, 19, 0.08);
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;render(){if(!this.open)return c``;return c`
      <div class="modal" @click=${(h)=>h.stopPropagation()}>
        ${this.title?c`<div class="modal__title">${this.title}</div>`:""}
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
    `}onConfirm(){this.dispatchEvent(new CustomEvent("confirm",{bubbles:!0,composed:!0}))}onCancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}onBackdropClick(){this.onCancel()}}X([J({type:String})],J1.prototype,"title",void 0),X([J({type:Boolean})],J1.prototype,"open",void 0),J1=X([y("app-modal")],J1);class K1 extends H{constructor(){super(...arguments);this.query="";this.tipoRima="consonante";this.categoria="";this.numSilabas=0}static styles=W`
    :host {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0.75rem;
      font-family: 'Crimson Text', Georgia, serif;
    }

    .search-container {
      position: relative;
    }

    .search-icon {
      position: absolute;
      left: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      color: #8B7D6B;
      font-size: 0.8125rem;
      pointer-events: none;
    }

    .search-input {
      width: 100%;
      padding: 0.4rem 0.5rem 0.4rem 1.75rem;
      border: 1px solid rgba(44, 24, 16, 0.2);
      border-radius: 4px;
      background: #FFF8EC;
      font-family: 'Crimson Text', Georgia, serif;
      font-size: 0.875rem;
      color: #2C1810;
      outline: none;
      transition: border-color 0.15s ease, box-shadow 0.15s ease;
      box-sizing: border-box;
    }

    .search-input:focus {
      border-color: #8B4513;
      box-shadow: 0 0 0 2px rgba(139, 69, 19, 0.1);
    }

    .search-input::placeholder {
      color: #8B7D6B;
      font-style: italic;
    }

    .rhyme-type-toggle {
      display: flex;
      gap: 0.25rem;
      background: #F5E6C8;
      border-radius: 4px;
      padding: 2px;
    }

    .rhyme-type-btn {
      flex: 1;
      padding: 0.25rem 0.5rem;
      border: none;
      border-radius: 3px;
      font-family: 'Crimson Text', Georgia, serif;
      font-size: 0.75rem;
      cursor: pointer;
      background: transparent;
      color: #5C4033;
      transition: background 0.15s ease, color 0.15s ease;
    }

    .rhyme-type-btn--active {
      background: #8B4513;
      color: #FFF8EC;
    }

    .rhyme-type-btn:hover:not(.rhyme-type-btn--active) {
      background: rgba(139, 69, 19, 0.1);
    }

    .filtros-section {
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    }

    .filtros-label {
      font-size: 0.6875rem;
      color: #8B7D6B;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
    }

    .chip {
      padding: 0.15rem 0.5rem;
      border: 1px solid rgba(44, 24, 16, 0.15);
      border-radius: 12px;
      font-size: 0.6875rem;
      font-family: 'Crimson Text', Georgia, serif;
      cursor: pointer;
      background: transparent;
      color: #5C4033;
      transition: all 0.15s ease;
    }

    .chip--active {
      background: #8B4513;
      color: #FFF8EC;
      border-color: #8B4513;
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
  `;debounceTimer=null;onInput(h){let f=h.target.value;if(this.query=f,this.debounceTimer)clearTimeout(this.debounceTimer);this.debounceTimer=setTimeout(()=>{this.emitSearch()},200)}setTipoRima(h){this.tipoRima=h,this.emitSearch()}setCategoria(h){this.categoria=this.categoria===h?"":h,this.emitSearch()}setNumSilabas(h){this.numSilabas=this.numSilabas===h?0:h,this.emitSearch()}emitSearch(){let h={tipoRima:this.tipoRima};if(this.categoria)h.categoria=this.categoria;if(this.numSilabas>0)h.numSilabas=this.numSilabas;this.dispatchEvent(new CustomEvent("search-change",{detail:{query:this.query,filtros:h},bubbles:!0,composed:!0}))}render(){let h=[{key:"",label:"Todas"},{key:"sustantivo",label:"Sustantivo"},{key:"verbo",label:"Verbo"},{key:"adjetivo",label:"Adjetivo"},{key:"adverbio",label:"Adverbio"}],f=[1,2,3,4,5];return c`
      <div class="search-container">
        <span class="search-icon">🔍</span>
        <input
          class="search-input"
          type="text"
          placeholder="Buscar rima..."
          .value=${this.query}
          @input=${this.onInput}
          aria-label="Buscar rima"
        />
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
          ${h.map((k)=>c`
            <button
              class="chip ${this.categoria===k.key?"chip--active":""}"
              @click=${()=>this.setCategoria(k.key)}
            >
              ${k.label}
            </button>
          `)}
        </div>
      </div>

      <div class="filtros-section">
        <span class="filtros-label">Sílabas</span>
        <div class="silabas-filtro">
          ${f.map((k)=>c`
            <button
              class="chip silaba-chip ${this.numSilabas===k?"chip--active":""}"
              @click=${()=>this.setNumSilabas(k)}
            >
              ${k}
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
    `}}X([J({type:String})],K1.prototype,"query",void 0),X([J({type:String})],K1.prototype,"tipoRima",void 0),X([J({type:String})],K1.prototype,"categoria",void 0),X([J({type:Number})],K1.prototype,"numSilabas",void 0),K1=X([y("rhyme-search-input")],K1);class H1 extends H{constructor(){super(...arguments);this.results=[];this.loading=!1;this.page=0;this.totalPages=0;this.totalResults=0}static styles=W`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      font-family: 'Crimson Text', Georgia, serif;
    }

    .results-container {
      flex: 1;
      overflow-y: auto;
      padding: 0.5rem 0.75rem;
    }

    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      color: #8B7D6B;
      font-style: italic;
      font-size: 0.875rem;
    }

    .loading-spinner {
      width: 16px;
      height: 16px;
      border: 2px solid rgba(139, 69, 19, 0.15);
      border-top-color: #8B4513;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
      margin-right: 0.5rem;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .empty-state {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      color: #8B7D6B;
      font-style: italic;
      font-size: 0.875rem;
      text-align: center;
    }

    .categoria-group {
      margin-bottom: 0.75rem;
    }

    .categoria-header {
      font-size: 0.6875rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #8B7D6B;
      margin-bottom: 0.25rem;
      padding: 0.15rem 0.5rem;
      background: rgba(139, 69, 19, 0.06);
      border-radius: 3px;
      font-weight: 600;
    }

    .campo-group {
      margin-bottom: 0.25rem;
    }

    .campo-header {
      font-size: 0.65rem;
      color: #A0522D;
      padding: 0.1rem 0.5rem;
      font-style: italic;
    }

    .result-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.2rem 0.5rem;
      border-radius: 3px;
      cursor: pointer;
      transition: background 0.1s ease;
    }

    .result-item:hover {
      background: rgba(139, 69, 19, 0.08);
    }

    .result-item:active {
      background: rgba(139, 69, 19, 0.12);
    }

    .result-palabra {
      font-size: 0.9375rem;
      font-weight: 600;
      color: #2C1810;
      font-family: 'Crimson Text', Georgia, 'Times New Roman', serif;
    }

    .result-meta {
      font-size: 0.6875rem;
      color: #8B7D6B;
    }

    .result-meta--categoria {
      color: #A0522D;
    }

    .result-count {
      font-size: 0.65rem;
      color: #8B7D6B;
      padding: 0.1rem 0.5rem;
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      padding: 0.5rem 0.75rem;
      border-top: 1px solid rgba(44, 24, 16, 0.1);
      flex-shrink: 0;
    }

    .pagination-btn {
      background: rgba(139, 69, 19, 0.08);
      border: 1px solid rgba(139, 69, 19, 0.15);
      color: #5C4033;
      padding: 0.2rem 0.6rem;
      border-radius: 3px;
      cursor: pointer;
      font-family: 'Crimson Text', Georgia, serif;
      font-size: 0.75rem;
      transition: background 0.15s ease;
      min-width: 28px;
      text-align: center;
    }

    .pagination-btn:hover:not(:disabled) {
      background: rgba(139, 69, 19, 0.15);
    }

    .pagination-btn:disabled {
      opacity: 0.35;
      cursor: default;
    }

    .pagination-btn--active {
      background: #8B4513;
      color: #F5E6C8;
      border-color: #8B4513;
    }

    .pagination-info {
      font-size: 0.65rem;
      color: #8B7D6B;
      margin: 0 0.5rem;
      white-space: nowrap;
    }
  `;onSelect(h){this.dispatchEvent(new CustomEvent("rhyme-select",{detail:{palabra:h},bubbles:!0,composed:!0}))}gotoPage(h){if(h<0||h>=this.totalPages)return;this.dispatchEvent(new CustomEvent("page-change",{detail:{page:h},bubbles:!0,composed:!0}))}render(){if(this.loading)return c`
        <div class="results-container">
          <div class="loading">
            <div class="loading-spinner"></div>
            Buscando...
          </div>
        </div>
      `;if(this.results.length===0)return c`
        <div class="results-container">
          <div class="empty-state">
            No se encontraron rimas
          </div>
        </div>
      `;let h=this.agruparPorCategoria(this.results);return c`
      <div class="results-container">
        ${Array.from(h.entries()).map(([f,k])=>{let d=this.agruparPorCampo(k),z=d.size>1;return c`
            <div class="categoria-group">
              <div class="categoria-header">${f}</div>
              ${z?Array.from(d.entries()).map(([$,B])=>c`
                    <div class="campo-group">
                      <div class="campo-header">${$==="sin_campo"?"":$} (${B.length})</div>
                      ${B.map((g)=>this.renderItem(g))}
                    </div>
                  `):k.map(($)=>this.renderItem($))}
            </div>
          `})}
        <div class="result-count">${this.totalResults} resultados</div>
      </div>
      ${this.totalPages>1?this.renderPagination():""}
    `}renderItem(h){return c`
      <div class="result-item" @click=${()=>this.onSelect(h.palabra)}>
        <span class="result-palabra">${h.palabra}</span>
        <span class="result-meta result-meta--categoria">(${h.categoria})</span>
        <span class="result-meta">${h.numSilabas} síl.</span>
      </div>
    `}renderPagination(){let f=Math.floor(2.5),k=Math.max(0,this.page-f),d=Math.min(this.totalPages,k+5);if(d-k<5)k=Math.max(0,d-5);let z=[];for(let $=k;$<d;$++)z.push($);return c`
      <div class="pagination">
        <button
          class="pagination-btn"
          ?disabled=${this.page<=0}
          @click=${()=>this.gotoPage(0)}
          title="Primera página"
        >⟪</button>
        <button
          class="pagination-btn"
          ?disabled=${this.page<=0}
          @click=${()=>this.gotoPage(this.page-1)}
          title="Anterior"
        >⟨</button>

        ${z.map(($)=>c`
          <button
            class="pagination-btn ${$===this.page?"pagination-btn--active":""}"
            @click=${()=>this.gotoPage($)}
          >${$+1}</button>
        `)}

        <button
          class="pagination-btn"
          ?disabled=${this.page>=this.totalPages-1}
          @click=${()=>this.gotoPage(this.page+1)}
          title="Siguiente"
        >⟩</button>
        <button
          class="pagination-btn"
          ?disabled=${this.page>=this.totalPages-1}
          @click=${()=>this.gotoPage(this.totalPages-1)}
          title="Última página"
        >⟫</button>

        <span class="pagination-info">${this.page+1} / ${this.totalPages}</span>
      </div>
    `}agruparPorCategoria(h){let f=new Map;for(let k of h){let d=k.categoria||"otro";if(!f.has(d))f.set(d,[]);f.get(d).push(k)}return f}agruparPorCampo(h){let f=new Map;for(let k of h){let d=k.campoSemantico||"sin_campo";if(!f.has(d))f.set(d,[]);f.get(d).push(k)}return f}}X([J({type:Array})],H1.prototype,"results",void 0),X([J({type:Boolean})],H1.prototype,"loading",void 0),X([J({type:Number})],H1.prototype,"page",void 0),X([J({type:Number})],H1.prototype,"totalPages",void 0),X([J({type:Number})],H1.prototype,"totalResults",void 0),H1=X([y("rhyme-result-list")],H1);class w1{db=null;async initialize(){if(this.db)return;return new Promise((h,f)=>{let k=indexedDB.open("ElTallerCorpus",1);k.onupgradeneeded=(d)=>{let z=d.target.result;if(!z.objectStoreNames.contains("palabras")){let $=z.createObjectStore("palabras",{keyPath:"palabra"});$.createIndex("terminacion","terminacion",{unique:!1}),$.createIndex("categoria","categoria",{unique:!1}),$.createIndex("campoSemantico","campoSemantico",{unique:!1})}},k.onsuccess=()=>{this.db=k.result,h()},k.onerror=()=>{f(k.error||Error("Error al abrir IndexedDB"))}})}async isPopulated(){if(!this.db)return!1;return new Promise((h)=>{try{let d=this.db.transaction("palabras","readonly").objectStore("palabras").count();d.onsuccess=()=>h(d.result>0),d.onerror=()=>h(!1)}catch{h(!1)}})}async importWords(h){if(!this.db)throw Error("CorpusDB no inicializada");let f=await this.getExistingKeys();for(let k=0;k<h.length;k+=500){let d=h.slice(k,k+500);await this.importBatch(d,f)}}async getExistingKeys(){return new Promise((h)=>{let d=this.db.transaction("palabras","readonly").objectStore("palabras").getAllKeys();d.onsuccess=()=>h(new Set(d.result.map((z)=>String(z)))),d.onerror=()=>h(new Set)})}async importBatch(h,f){return new Promise((k,d)=>{let z=this.db.transaction("palabras","readwrite"),$=z.objectStore("palabras");for(let B of h)if(!f.has(B.palabra))$.put(B),f.add(B.palabra);z.oncomplete=()=>k(),z.onerror=()=>d(z.error)})}async buscarPorTerminacion(h,f,k=0){if(!this.db)throw Error("CorpusDB no inicializada");let d=await this.getAllByIndex("terminacion",h,k);return this.aplicarFiltros(d,f)}async buscarPorTexto(h,f=200){if(!this.db)throw Error("CorpusDB no inicializada");if(!h||h.length<1)return[];let k=h.toLowerCase().trim(),d=[];return new Promise((z,$)=>{let B=this.db.transaction("palabras","readonly"),g=B.objectStore("palabras"),Z=IDBKeyRange.bound(k,k+"￿"),Y=g.openCursor(Z);Y.onsuccess=(Q)=>{let K=Q.target.result;if(K){if(d.push(K.value),f===0||d.length<f)K.continue()}},B.oncomplete=()=>z(d),B.onerror=()=>$(B.error)})}async buscarRimas(h,f="consonante",k){if(f==="consonante")return this.buscarPorTerminacion(h,k);let d=[...h.toLowerCase()].filter((B)=>"aeiouáéíóú".includes(B)).join("");if(!d)return[];let $=(await this.getAllByIndex("terminacion",h[0])).filter((B)=>{return[...B.terminacion.toLowerCase()].filter((Z)=>"aeiouáéíóú".includes(Z)).join("")===d});return this.aplicarFiltros($,k)}async count(){if(!this.db)return 0;return new Promise((h)=>{let d=this.db.transaction("palabras","readonly").objectStore("palabras").count();d.onsuccess=()=>h(d.result),d.onerror=()=>h(0)})}close(){if(this.db)this.db.close(),this.db=null}getAllByIndex(h,f,k=500){return new Promise((d,z)=>{let $=this.db.transaction("palabras","readonly"),g=$.objectStore("palabras").index(h),Z=IDBKeyRange.only(f),Y=[],Q=g.openCursor(Z);Q.onsuccess=(K)=>{let F=K.target.result;if(F){if(Y.push(F.value),k===0||Y.length<k)F.continue()}},$.oncomplete=()=>d(Y),$.onerror=()=>z($.error)})}aplicarFiltros(h,f){if(!f)return h;let k=h;if(f?.categoria)k=k.filter((d)=>d.categoria===f.categoria);if(f?.campoSemantico)k=k.filter((d)=>d.campoSemantico===f.campoSemantico);if(f?.numSilabas!==void 0&&f.numSilabas>0)k=k.filter((d)=>d.numSilabas===f.numSilabas);return k}}var B5=500,g5="eltaller/data/corpus/palabras.json";class s{static async ensureLoaded(h){if(await h.isPopulated())return;document.dispatchEvent(new CustomEvent("corpus:loading-start",{detail:{message:"Cargando diccionario de rimas..."}}));try{let k=await fetch(g5);if(!k.ok)throw Error(`Error al cargar corpus: ${k.status} ${k.statusText}`);await s.streamImport(h,k),document.dispatchEvent(new CustomEvent("corpus:ready"))}catch(k){console.error("[CorpusLoader] Error al cargar corpus:",k),document.dispatchEvent(new CustomEvent("corpus:error",{detail:{message:"Error al cargar el diccionario de rimas"}}))}}static async streamImport(h,f){let k=f.body;if(!k)throw Error("Response body is null");let d=0,z=[],$=new Set,Z=k.pipeThrough(new DecompressionStream("gzip")).pipeThrough(new TextDecoderStream).getReader(),Y="";try{while(!0){let{done:Q,value:K}=await Z.read();if(Q)break;Y+=K;let F=Y.split(`
`);Y=F.pop()||"";for(let w of F){if(!w.trim())continue;try{let U=JSON.parse(w);if(z.push(U),z.length>=B5)await h.importBatch(z,$),d+=z.length,s.reportProgress(d),z=[],await s.yieldToEventLoop()}catch{}}}if(Y.trim())try{let Q=JSON.parse(Y);z.push(Q)}catch{}if(z.length>0)await h.importBatch(z,$),d+=z.length,s.reportProgress(d)}finally{Z.releaseLock()}}static reportProgress(h){document.dispatchEvent(new CustomEvent("corpus:progress",{detail:{progress:-1,loaded:h,total:0}}))}static async yieldToEventLoop(){if(typeof requestIdleCallback<"u")await new Promise((h)=>{requestIdleCallback(()=>h(),{timeout:500})});else await new Promise((h)=>setTimeout(h,0))}}class G1 extends H{constructor(){super(...arguments);this.open=!1;this.versoActivo=null;this.palabraActual="";this.corpusReady=!1;this.loading=!1;this.corpusWordsLoaded=0;this.results=[];this.searchQuery="";this.searchFiltros={};this.allResults=[];this.page=0}static styles=W`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      font-family: 'Crimson Text', Georgia, serif;
      background: #E8D5B0;
      overflow: hidden;
      transition: opacity 0.3s ease, transform 0.3s ease;
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
      font-size: 0.8125rem;
      font-weight: 600;
      color: #8B4513;
      letter-spacing: 0.04em;
    }

    .panel-subtitle {
      font-size: 0.65rem;
      color: #8B7D6B;
      font-style: italic;
    }

    .close-btn {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      color: #8B7D6B;
      padding: 0.15rem 0.35rem;
      border-radius: 3px;
      transition: background 0.15s ease;
      font-family: 'Crimson Text', Georgia, serif;
    }

    .close-btn:hover {
      background: rgba(139, 69, 19, 0.1);
      color: #5C4033;
    }

    .active-verso {
      font-size: 0.6875rem;
      color: #A0522D;
      padding: 0.3rem 0.75rem;
      border-bottom: 1px solid rgba(44, 24, 16, 0.06);
      flex-shrink: 0;
      font-style: italic;
    }

    .loading-corpus {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      gap: 0.75rem;
      flex: 1;
    }

    .corpus-spinner {
      width: 24px;
      height: 24px;
      border: 3px solid rgba(139, 69, 19, 0.15);
      border-top-color: #8B4513;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .corpus-loading-text {
      font-size: 0.8125rem;
      color: #8B7D6B;
      font-style: italic;
      text-align: center;
    }

    .corpus-loading-sub {
      font-size: 0.6875rem;
      color: #B8A88A;
      text-align: center;
      margin-top: -0.25rem;
    }

    .corpus-loading-progress {
      font-size: 0.75rem;
      color: #8B4513;
      font-weight: 600;
      text-align: center;
      background: rgba(139, 69, 19, 0.06);
      padding: 0.3rem 0.75rem;
      border-radius: 6px;
      margin-top: 0.25rem;
    }

    .corpus-loading-note {
      font-size: 0.625rem;
      color: #C4B5A5;
      text-align: center;
      margin-top: 0.5rem;
      font-style: italic;
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
      overflow: hidden;
    }

    @media (max-width: 767px) {
      .close-btn {
        min-height: 40px;
        min-width: 40px;
        font-size: 1.1rem;
      }
    }
  `;pageSize=50;db=null;rhymeEngine=new t;connectedCallback(){super.connectedCallback(),this.initCorpus(),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("corpus:progress",this.onCorpusProgress)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("corpus:progress",this.onCorpusProgress)}async initCorpus(){try{if(this.db=new w1,await this.db.initialize(),await s.ensureLoaded(this.db),this.corpusReady=!0,this.palabraActual)this.doSearch(this.palabraActual,this.searchFiltros)}catch(h){console.error("[RhymeBrowser] Error al inicializar corpus:",h)}}onKeyDown=(h)=>{if(h.key==="Escape"&&this.open)this.close()};onCorpusProgress=(h)=>{let{loaded:f}=h.detail;if(typeof f==="number")this.corpusWordsLoaded=f};close(){this.dispatchEvent(new CustomEvent("panel-close",{bubbles:!0,composed:!0}))}onSearchChange(h){let{query:f,filtros:k}=h.detail;if(this.searchQuery=f,this.searchFiltros=k,!f||f.length<1){this.results=[],this.allResults=[];return}this.page=0,this.doSearch(f,k)}get totalPages(){return Math.ceil(this.allResults.length/this.pageSize)}onPageChange(h){this.page=h.detail.page,this.updateResults()}updateResults(){let h=this.page*this.pageSize;this.results=this.allResults.slice(h,h+this.pageSize)}async doSearch(h,f){if(!this.db||!this.corpusReady)return;this.loading=!0;try{let k=this.rhymeEngine.extraerTerminacionPalabra(h);if(!k){this.results=[];return}let d=await this.db.buscarRimas(k,f.tipoRima||"consonante",f);this.allResults=d.map((z)=>({palabra:z.palabra,terminacion:z.terminacion,categoria:z.categoria,campoSemantico:z.campoSemantico,numSilabas:z.numSilabas,acento:z.acento})),this.updateResults()}catch(k){console.error("[RhymeBrowser] Error en búsqueda:",k),this.results=[]}finally{this.loading=!1}}onRhymeSelect(h){let{palabra:f}=h.detail;this.dispatchEvent(new CustomEvent("rhyme-insert",{detail:{palabra:f,verso:this.versoActivo},bubbles:!0,composed:!0}))}render(){if(!this.open)return c``;return c`
      <div class="panel-header">
        <div>
          <div class="panel-title">Buscador de rimas</div>
          <div class="panel-subtitle">Cmd+R para cerrar</div>
        </div>
        <button class="close-btn" @click=${this.close} aria-label="Cerrar panel de rimas">✕</button>
      </div>

      ${this.versoActivo?c`
        <div class="active-verso">
          Verso ${this.versoActivo}${this.palabraActual?`: «${this.palabraActual}»`:""}
        </div>
      `:""}

      ${!this.corpusReady?c`
        <div class="loading-corpus">
          <div class="corpus-spinner"></div>
          <div class="corpus-loading-text">Preparando el diccionario de rimas…</div>
          <div class="corpus-loading-sub">642 mil palabras con todas sus conjugaciones</div>
          ${this.corpusWordsLoaded>0?c`
            <div class="corpus-loading-progress">
              ${this.corpusWordsLoaded.toLocaleString()} palabras indexadas
            </div>
          `:""}
          <div class="corpus-loading-note">
            Solo la primera vez — después será instantáneo
          </div>
        </div>
      `:c`
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
    `}}X([J({type:Boolean,reflect:!0})],G1.prototype,"open",void 0),X([J({type:Object})],G1.prototype,"versoActivo",void 0),X([J({type:String})],G1.prototype,"palabraActual",void 0),X([N()],G1.prototype,"corpusReady",void 0),X([N()],G1.prototype,"loading",void 0),X([N()],G1.prototype,"corpusWordsLoaded",void 0),X([N()],G1.prototype,"results",void 0),X([N()],G1.prototype,"searchQuery",void 0),X([N()],G1.prototype,"searchFiltros",void 0),X([N()],G1.prototype,"allResults",void 0),X([N()],G1.prototype,"page",void 0),G1=X([y("rhyme-browser-panel")],G1);class F1 extends H{static styles=W`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: #F5E6C8;
      font-family: 'Crimson Text', 'IBM Plex Serif', 'Georgia', serif;
    }

    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 48px;
      padding: 0 1.5rem;
      background: #E8D5B0;
      border-bottom: 1px solid rgba(44, 24, 16, 0.1);
      flex-shrink: 0;
      gap: 0.5rem;
    }

    .toolbar__title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #8B4513;
      letter-spacing: 0.02em;
      font-family: 'Crimson Text', Georgia, serif;
      white-space: nowrap;
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
    }

    .toolbar-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.35rem 0.75rem;
      border-radius: 4px;
      font-family: 'Crimson Text', Georgia, serif;
      font-size: 0.8125rem;
      color: #5C4033;
      transition: background-color 0.15s ease, color 0.15s ease;
      background: transparent;
      border: 1px solid transparent;
    }

    .toolbar-btn:hover {
      background: rgba(139, 69, 19, 0.1);
      color: #8B4513;
    }

    .toolbar-btn:active {
      background: rgba(139, 69, 19, 0.15);
    }

    .toolbar-forma {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.75rem;
      color: #A0522D;
      padding: 0.2rem 0.6rem;
      border-radius: 12px;
      background: rgba(139, 69, 19, 0.08);
      font-family: 'Crimson Text', Georgia, serif;
      white-space: nowrap;
    }

    .layout-grid {
      display: grid;
      grid-template-columns: 280px 1fr 240px;
      flex: 1;
      overflow: hidden;
      height: calc(100vh - 48px - 36px);
    }

    .layout-grid--rhyme-hidden {
      grid-template-columns: 0 1fr 240px;
    }

    .panel-left {
      background: #E8D5B0;
      border-right: 1px solid rgba(44, 24, 16, 0.1);
      overflow-y: auto;
      overflow-x: hidden;
      transition: width 0.3s ease;
    }

    .layout-grid--rhyme-hidden .panel-left {
      width: 0;
      overflow: hidden;
    }

    .editor-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 1.5rem;
      overflow-y: auto;
      max-width: 720px;
      justify-self: center;
      width: 100%;
    }

    .panel-right {
      background: #E8D5B0;
      border-left: 1px solid rgba(44, 24, 16, 0.1);
      overflow-y: auto;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .app-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 36px;
      padding: 0 1.5rem;
      background: #E8D5B0;
      border-top: 1px solid rgba(44, 24, 16, 0.1);
      flex-shrink: 0;
      font-size: 0.6875rem;
      color: #8B7D6B;
      font-family: 'Crimson Text', Georgia, serif;
    }

    .shortcut-hint {
      color: #8B7D6B;
      font-size: 0.65rem;
    }

    .rhyme-panel-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: #8B7D6B;
      font-style: italic;
      font-size: 0.875rem;
      padding: 1rem;
      text-align: center;
    }

    /* Selector de forma */
    .form-selector-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(44, 24, 16, 0.45);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 950;
      padding: 1rem;
    }

    .form-selector {
      background: #FFF8EC;
      border-radius: 12px;
      padding: 1.5rem;
      max-width: 560px;
      width: 100%;
      max-height: 86vh;
      overflow-y: auto;
      box-shadow: 0 8px 30px rgba(44, 24, 16, 0.18);
      border: 1px solid rgba(44, 24, 16, 0.1);
      font-family: 'Crimson Text', Georgia, serif;
    }

    .form-selector__title {
      font-size: 1.35rem;
      font-weight: 700;
      color: #2C1810;
      margin-bottom: 0.25rem;
    }

    .form-selector__sub {
      font-size: 0.875rem;
      color: #8B7D6B;
      font-style: italic;
      margin-bottom: 1.25rem;
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
      border-radius: 8px;
      border: 1px solid rgba(44, 24, 16, 0.12);
      background: rgba(245, 230, 200, 0.45);
      cursor: pointer;
      font-family: 'Crimson Text', Georgia, serif;
      transition: background-color 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
    }

    .form-option:hover {
      background: rgba(139, 69, 19, 0.08);
      border-color: rgba(139, 69, 19, 0.4);
      transform: translateX(2px);
    }

    .form-option__name {
      font-size: 1.05rem;
      font-weight: 700;
      color: #8B4513;
    }

    .form-option__desc {
      font-size: 0.8125rem;
      color: #5C4033;
      line-height: 1.45;
    }

    .form-option__esquema {
      font-size: 0.75rem;
      color: #A0522D;
      font-style: italic;
      background: rgba(139, 69, 19, 0.06);
      padding: 0.1rem 0.45rem;
      border-radius: 8px;
    }

    .form-selector__actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 1.25rem;
    }

    .form-selector__cancel {
      padding: 0.5rem 1rem;
      border-radius: 6px;
      font-family: 'Crimson Text', Georgia, serif;
      font-size: 0.875rem;
      cursor: pointer;
      background: transparent;
      color: #5C4033;
      border: 1px solid rgba(44, 24, 16, 0.2);
      transition: background-color 0.15s ease;
    }

    .form-selector__cancel:hover {
      background: rgba(139, 69, 19, 0.08);
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
        padding: 1.5rem 1.25rem;
      }

      /* Buscador de rimas → drawer lateral superpuesto */
      .panel-left {
        position: fixed;
        top: 48px;
        bottom: 36px;
        left: 0;
        width: min(360px, 88vw);
        height: auto;
        z-index: 800;
        box-shadow: 6px 0 24px rgba(44, 24, 16, 0.2);
        border-right: 1px solid rgba(44, 24, 16, 0.15);
        transition: transform 0.28s ease, width 0.28s ease;
        transform: translateX(0);
      }

      .layout-grid--rhyme-hidden .panel-left {
        width: min(360px, 88vw);
        transform: translateX(-110%);
        border-right: none;
      }

      /* Métricas y esquema debajo del editor */
      .panel-right {
        border-left: none;
        border-top: 1px solid rgba(44, 24, 16, 0.1);
        overflow: visible;
        padding: 1.25rem;
        max-width: 780px;
        justify-self: center;
        width: 100%;
      }
    }

    @media (max-width: 767px) {
      .toolbar {
        height: auto;
        min-height: 48px;
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
        font-size: 0.8125rem;
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
        font-size: 0.625rem;
      }

      .form-selector-backdrop {
        padding: 0.5rem;
      }

      .form-selector {
        padding: 1rem;
        max-height: 86vh;
      }

      .form-selector__sub {
        font-size: 0.8125rem;
      }

      .form-option {
        padding: 0.7rem 0.85rem;
      }

      .form-option__desc {
        font-size: 0.75rem;
      }
    }
  `;eventBus=new l0;storage=new t0;analysisService;autoSaveService;exportService=new d1;toastElement;constructor(){super();this.soneto=this.createEmptySoneto("soneto");this.forma=b("soneto");this.analysisMap=new Map;this.rhymePanelOpen=!1;this.selectedVerso=null;this.completados=0;this.conErrores=0;this.formSelectorOpen=!1;this.analysisService=new h1(this.eventBus),this.autoSaveService=new f1(this.eventBus,this.storage,()=>this.soneto)}connectedCallback(){super.connectedCallback();let h=this.storage.loadLastSoneto();if(h)this.soneto=this.migrarSonetoGuardado(h);if(this.aplicarForma(),this.soneto.versos.some((f)=>f.texto.trim()))this.analysisService.loadVersos(this.soneto.versos);this.eventBus.on("analysis:complete",({analysis:f,esquema:k})=>{this.analysisMap=f,this.esquema=k;let d=this.soneto.versos.map((z)=>({...z,analysis:f.get(z.numero)||z.analysis}));this.soneto={...this.soneto,versos:d},this.updateProgress()}),this.eventBus.on("ui:toast",({message:f,level:k})=>{this.showToast(f,k)}),this.eventBus.on("soneto:new",()=>{}),this.eventBus.on("export:txt",()=>{this.exportarTxt()}),this.eventBus.on("export:clipboard",()=>{this.copiarPortapapeles()}),document.addEventListener("keydown",this.onKeyDown.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.autoSaveService.destroy(),this.analysisService.destroy(),document.removeEventListener("keydown",this.onKeyDown.bind(this))}render(){let h=this.soneto.versos.length,f=D0(this.forma,h);return c`
      <div class="toolbar">
        <div class="toolbar__title">✎ El Taller</div>
        <div class="toolbar__forms">
          <span class="toolbar-forma" title="${this.forma.descripcion}">${this.forma.nombre}</span>
        </div>
        <div class="toolbar__actions">
          <button class="toolbar-btn" @click=${this.abrirSelector} title="Nuevo poema (Cmd+N)">
            ✏️ Nuevo
          </button>
          <button class="toolbar-btn" @click=${this.toggleRhymePanel} title="Buscar rimas (Cmd+R)">
            🔤 Rimas
          </button>
          <button class="toolbar-btn" @click=${this.exportarTxt} title="Exportar a .txt">
            📥 Exportar
          </button>
          <button class="toolbar-btn" @click=${this.exportarPdf} title="Exportar a PDF">
            📄 PDF
          </button>
          <button class="toolbar-btn" @click=${this.copiarPortapapeles} title="Copiar al portapapeles">
            📋 Copiar
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
            .total=${h}
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
            .grupos=${f}
          ></rhyme-scheme-panel>
        </aside>
      </div>

      <div class="app-footer">
        <span>${this.forma.medidaDescripcion}</span>
        <span>${this.soneto.versos.filter((k)=>k.texto.trim()).length} / ${h} versos escritos</span>
      </div>

      ${this.formSelectorOpen?this.renderFormSelector():""}

      <app-toast></app-toast>
    `}renderFormSelector(){return c`
      <div class="form-selector-backdrop" @click=${this.cerrarSelector}>
        <div class="form-selector" @click=${(h)=>h.stopPropagation()} role="dialog" aria-label="Elegir forma poética">
          <div class="form-selector__title">Nueva composición</div>
          <div class="form-selector__sub">Elige una forma del Siglo de Oro español</div>
          <div class="form-selector__list">
            ${J0.map((h)=>c`
              <button class="form-option" @click=${()=>this.nuevoPoemaDeForma(h.id)}>
                <span class="form-option__name">${h.nombre}</span>
                <span class="form-option__desc">${h.descripcion}</span>
                <span class="form-option__esquema">${h.esquemaReferencia||""}</span>
              </button>
            `)}
          </div>
          <div class="form-selector__actions">
            <button class="form-selector__cancel" @click=${this.cerrarSelector}>Cancelar</button>
          </div>
        </div>
      </div>
    `}createEmptySoneto(h){let f=b(h),k=crypto.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`,d=e1(f,k);return{id:k,forma:h,versos:d,createdAt:Date.now(),updatedAt:Date.now()}}migrarSonetoGuardado(h){let f=h.forma&&J0.some((z)=>z.id===h.forma)?h.forma:"soneto",k=b(f),d=Array.isArray(h.versos)?h.versos.map((z)=>({...z})):[];if(f==="soneto"&&d.length!==14)d=Array.from({length:14},(z,$)=>d[$]??{id:`${h.id}-v${$+1}`,numero:$+1,texto:""});return d=d.map((z,$)=>({...z,numero:$+1})),{...h,forma:f,versos:d,updatedAt:Date.now()}}aplicarForma(){this.forma=b(this.soneto.forma),this.analysisService.setForma(this.forma)}updateProgress(){let h=0,f=0;for(let k of this.soneto.versos)if(k.texto.trim()){h++;let d=this.analysisMap.get(k.numero);if(d&&d.errores.length>0)f++}this.completados=h,this.conErrores=f}renumberVersos(h){return h.map((f,k)=>({...f,numero:k+1}))}nuevoPoemaDeForma(h){if(this.completados>0)this.storage.saveToHistory(this.soneto);let f=this.createEmptySoneto(h);this.soneto=f,this.forma=b(h),this.analysisMap=new Map,this.esquema=void 0,this.completados=0,this.conErrores=0,this.selectedVerso=null,this.formSelectorOpen=!1,this.eventBus.emit("soneto:new",{}),this.analysisService.reset(),this.analysisService.setForma(this.forma),this.showToast(`Nuevo ${this.forma.nombre} creado`,"info")}abrirSelector(){this.formSelectorOpen=!0}cerrarSelector(){this.formSelectorOpen=!1}onVersoInput(h){let{numero:f,texto:k}=h.detail,d=this.soneto.versos.find((z)=>z.numero===f);if(d)d.texto=k,this.soneto.updatedAt=Date.now(),this.eventBus.emit("verso:input",{numero:f,texto:k})}onVersoBlur(h){let{numero:f}=h.detail;this.eventBus.emit("verso:blur",{numero:f})}onVersoFocus(h){let{numero:f}=h.detail;this.selectedVerso=f,this.eventBus.emit("verso:focus",{numero:f})}onTituloChange(h){this.soneto.titulo=h.detail.titulo}onEstrategiaChange(h){this.soneto.estrategia=h.detail.estrategia}onHiatoToggle(h){let{numero:f,silabaIndex:k}=h.detail;this.eventBus.emit("hiato:toggle",{numero:f,silabaIndex:k})}onVersoAdd(){let h=this.soneto.versos;if(h.length>=this.forma.versosMax)return;let f=h[h.length-1],k={id:`${this.soneto.id}-v${h.length+1}`,numero:h.length+1,texto:""};this.setVersos([...h,k]),this.showToast(`Verso ${k.numero} añadido`,"info")}onVersoRemove(){if(this.soneto.versos.length<=this.forma.versosMin)return;let h=this.soneto.versos.slice(0,-1);this.setVersos(h),this.showToast("Último verso eliminado","info")}onEstrofaAdd(){let h=this.forma;if(h.modo!=="estrofa")return;let k=(h.estrofas.find(($)=>$.id==="copla")||h.estrofas[1])?.nVersos||4;if(this.soneto.versos.length+k>h.versosMax)return;let d=this.soneto.versos.length,z=[...this.soneto.versos];for(let $=0;$<k;$++)z.push({id:`${this.soneto.id}-v${d+$+1}`,numero:d+$+1,texto:""});this.setVersos(z),this.showToast("Estrofa (copla) añadida","info")}onEstrofaRemove(){let h=this.forma;if(h.modo!=="estrofa")return;let f=h.versosIniciales;if(this.soneto.versos.length<=f)return;let d=(h.estrofas.find(($)=>$.id==="copla")||h.estrofas[1])?.nVersos||4,z=this.soneto.versos.slice(0,Math.max(f,this.soneto.versos.length-d));this.setVersos(z),this.showToast("Última copla eliminada","info")}setVersos(h){let f=this.renumberVersos(h);this.soneto={...this.soneto,versos:f,updatedAt:Date.now()},this.analysisService.reset(),this.analysisService.loadVersos(f),this.updateProgress()}toggleRhymePanel(){this.rhymePanelOpen=!this.rhymePanelOpen,this.eventBus.emit("ui:panel-toggle",{panel:"rhyme-browser",open:this.rhymePanelOpen})}exportarTxt(){this.exportService.exportToTxt(this.soneto),this.showToast("Poema exportado como .txt","info")}exportarPdf(){this.exportService.exportToPdf(this.soneto),this.showToast("Poema exportado como PDF","info")}async copiarPortapapeles(){let h=await this.exportService.copyToClipboard(this.soneto);this.showToast(h?"Poema copiado al portapapeles":"Error al copiar al portapapeles",h?"info":"error")}getPalabraActual(){if(!this.selectedVerso)return"";let h=this.soneto.versos.find((k)=>k.numero===this.selectedVerso);if(!h||!h.texto.trim())return"";let f=h.texto.trim().split(/\s+/);return f[f.length-1].replace(/[¿?!¡;:.,()\-"'«»]/g,"")}onRhymeInsert(h){let{palabra:f,verso:k}=h.detail;if(!k)return;let d=this.soneto.versos.find(($)=>$.numero===k);if(!d)return;let z=d.texto.trim().split(/\s+/);if(z.length>0&&d.texto.trim().length>0)z[z.length-1]=f,d.texto=z.join(" ")+" ";else d.texto=f+" ";this.soneto.updatedAt=Date.now(),this.requestUpdate(),this.eventBus.emit("verso:input",{numero:k,texto:d.texto}),this.showToast(`"${f}" insertada en verso ${k}`,"info")}onRhymePanelClose(){this.rhymePanelOpen=!1,this.eventBus.emit("ui:panel-toggle",{panel:"rhyme-browser",open:!1})}showToast(h,f="info"){let k=this.shadowRoot?.querySelector("app-toast");if(k?.show)k.show(h,f)}onKeyDown(h){if((h.metaKey||h.ctrlKey)&&h.key==="r")h.preventDefault(),this.toggleRhymePanel();if((h.metaKey||h.ctrlKey)&&h.key==="s")h.preventDefault(),this.autoSaveService.saveNow(),this.showToast("Poema guardado","info");if((h.metaKey||h.ctrlKey)&&h.key==="n")h.preventDefault(),this.abrirSelector();if(h.key==="Escape"&&this.formSelectorOpen)this.cerrarSelector()}}X([N()],F1.prototype,"soneto",void 0),X([N()],F1.prototype,"forma",void 0),X([N()],F1.prototype,"analysisMap",void 0),X([N()],F1.prototype,"esquema",void 0),X([N()],F1.prototype,"rhymePanelOpen",void 0),X([N()],F1.prototype,"selectedVerso",void 0),X([N()],F1.prototype,"completados",void 0),X([N()],F1.prototype,"conErrores",void 0),X([N()],F1.prototype,"formSelectorOpen",void 0),F1=X([y("el-taller-app")],F1);if("serviceWorker"in navigator)window.addEventListener("load",()=>{});console.log(`
  ╔══════════════════════════════╗
  ║    ✎ El Taller v0.1.0       ║
  ║  Asistente de sonetos        ║
  ║  Buscador de rimas activo    ║
  ╚══════════════════════════════╝
  Stack: Bun + TypeScript + Lit
`);
