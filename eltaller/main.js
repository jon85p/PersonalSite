var x=function(r,o,d,c){var i=arguments.length,g=i<3?o:c===null?c=Object.getOwnPropertyDescriptor(o,d):c,h;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")g=Reflect.decorate(r,o,d,c);else for(var f=r.length-1;f>=0;f--)if(h=r[f])g=(i<3?h(g):i>3?h(o,d,g):h(o,d))||g;return i>3&&g&&Object.defineProperty(o,d,g),g};var _r=globalThis,Ur=_r.ShadowRoot&&(_r.ShadyCSS===void 0||_r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lr=Symbol(),Z0=new WeakMap;class jr{constructor(r,o,d){if(this._$cssResult$=!0,d!==lr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this._strings=o}get styleSheet(){let r=this._styleSheet,o=this._strings;if(Ur&&r===void 0){let d=o!==void 0&&o.length===1;if(d)r=Z0.get(o);if(r===void 0){if((this._styleSheet=r=new CSSStyleSheet).replaceSync(this.cssText),d)Z0.set(o,r)}}return r}toString(){return this.cssText}}var Bo=(r)=>{if(r._$cssResult$===!0)return r.cssText;else if(typeof r==="number")return r;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${r}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},Yo=(r)=>new jr(typeof r==="string"?r:String(r),void 0,lr),B=(r,...o)=>{let d=r.length===1?r[0]:o.reduce((c,i,g)=>c+Bo(i)+r[g+1],r[0]);return new jr(d,r,lr)},Q0=(r,o)=>{if(Ur)r.adoptedStyleSheets=o.map((d)=>d instanceof CSSStyleSheet?d:d.styleSheet);else for(let d of o){let c=document.createElement("style"),i=_r.litNonce;if(i!==void 0)c.setAttribute("nonce",i);c.textContent=d.cssText,r.appendChild(c)}},Fo=(r)=>{let o="";for(let d of r.cssRules)o+=d.cssText;return Yo(o)},qr=Ur?(r)=>r:(r)=>r instanceof CSSStyleSheet?Fo(r):r;var{is:Xo,defineProperty:Zo,getOwnPropertyDescriptor:J0,getOwnPropertyNames:Qo,getOwnPropertySymbols:Jo,getPrototypeOf:H0}=Object,Ho=!1,p=globalThis;if(Ho)p.customElements??=customElements;var G=!0,q,K0=p.trustedTypes,Ko=K0?K0.emptyScript:"",G0=G?p.reactiveElementPolyfillSupportDevMode:p.reactiveElementPolyfillSupport;if(G)p.litIssuedWarnings??=new Set,q=(r,o)=>{if(o+=` See https://lit.dev/msg/${r} for more information.`,!p.litIssuedWarnings.has(o)&&!p.litIssuedWarnings.has(r))console.warn(o),p.litIssuedWarnings.add(o)},queueMicrotask(()=>{if(q("dev-mode","Lit is in dev mode. Not recommended for production!"),p.ShadyDOM?.inUse&&G0===void 0)q("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var po=G?(r)=>{if(!p.emitLitDebugLogEvents)return;p.dispatchEvent(new CustomEvent("lit-debug",{detail:r}))}:void 0,rr=(r,o)=>r,ir={toAttribute(r,o){switch(o){case Boolean:r=r?Ko:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r);break}return r},fromAttribute(r,o){let d=r;switch(o){case Boolean:d=r!==null;break;case Number:d=r===null?null:Number(r);break;case Object:case Array:try{d=JSON.parse(r)}catch(c){d=null}break}return d}},$r=(r,o)=>!Xo(r,o),p0={attribute:!0,type:String,converter:ir,reflect:!1,useDefault:!1,hasChanged:$r};Symbol.metadata??=Symbol("metadata");p.litPropertyMetadata??=new WeakMap;class W extends HTMLElement{static addInitializer(r){this.__prepare(),(this._initializers??=[]).push(r)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(r,o=p0){if(o.state)o.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(r))o=Object.create(o),o.wrapped=!0;if(this.elementProperties.set(r,o),!o.noAccessor){let d=G?Symbol.for(`${String(r)} (@property() cache)`):Symbol(),c=this.getPropertyDescriptor(r,d,o);if(c!==void 0)Zo(this.prototype,r,c)}}static getPropertyDescriptor(r,o,d){let{get:c,set:i}=J0(this.prototype,r)??{get(){return this[o]},set(g){this[o]=g}};if(G&&c==null){if("value"in(J0(this.prototype,r)??{}))throw Error(`Field ${JSON.stringify(String(r))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);q("reactive-property-without-getter",`Field ${JSON.stringify(String(r))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:c,set(g){let h=c?.call(this);i?.call(this,g),this.requestUpdate(r,h,d)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??p0}static __prepare(){if(this.hasOwnProperty(rr("elementProperties",this)))return;let r=H0(this);if(r.finalize(),r._initializers!==void 0)this._initializers=[...r._initializers];this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(rr("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(rr("properties",this))){let o=this.properties,d=[...Qo(o),...Jo(o)];for(let c of d)this.createProperty(c,o[c])}let r=this[Symbol.metadata];if(r!==null){let o=litPropertyMetadata.get(r);if(o!==void 0)for(let[d,c]of o)this.elementProperties.set(d,c)}this.__attributeToPropertyMap=new Map;for(let[o,d]of this.elementProperties){let c=this.__attributeNameForProperty(o,d);if(c!==void 0)this.__attributeToPropertyMap.set(c,o)}if(this.elementStyles=this.finalizeStyles(this.styles),G){if(this.hasOwnProperty("createProperty"))q("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))q("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(r){let o=[];if(Array.isArray(r)){let d=new Set(r.flat(1/0).reverse());for(let c of d)o.unshift(qr(c))}else if(r!==void 0)o.push(qr(r));return o}static __attributeNameForProperty(r,o){let d=o.attribute;return d===!1?void 0:typeof d==="string"?d:typeof r==="string"?r.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((r)=>this.enableUpdating=r),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((r)=>r(this))}addController(r){if((this.__controllers??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected)r.hostConnected?.()}removeController(r){this.__controllers?.delete(r)}__saveInstanceProperties(){let r=new Map,o=this.constructor.elementProperties;for(let d of o.keys())if(this.hasOwnProperty(d))r.set(d,this[d]),delete this[d];if(r.size>0)this.__instanceProperties=r}createRenderRoot(){let r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Q0(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((r)=>r.hostConnected?.())}enableUpdating(r){}disconnectedCallback(){this.__controllers?.forEach((r)=>r.hostDisconnected?.())}attributeChangedCallback(r,o,d){this._$attributeToProperty(r,d)}__propertyToAttribute(r,o){let c=this.constructor.elementProperties.get(r),i=this.constructor.__attributeNameForProperty(r,c);if(i!==void 0&&c.reflect===!0){let h=(c.converter?.toAttribute!==void 0?c.converter:ir).toAttribute(o,c.type);if(G&&this.constructor.enabledWarnings.includes("migration")&&h===void 0)q("undefined-attribute-value",`The attribute value for the ${r} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=r,h==null)this.removeAttribute(i);else this.setAttribute(i,h);this.__reflectingProperty=null}}_$attributeToProperty(r,o){let d=this.constructor,c=d.__attributeToPropertyMap.get(r);if(c!==void 0&&this.__reflectingProperty!==c){let i=d.getPropertyOptions(c),g=typeof i.converter==="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:ir;this.__reflectingProperty=c;let h=g.fromAttribute(o,i.type);this[c]=h??this.__defaultValues?.get(c)??h,this.__reflectingProperty=null}}requestUpdate(r,o,d,c=!1,i){if(r!==void 0){if(G&&r instanceof Event)q("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let g=this.constructor;if(c===!1)i=this[r];if(d??=g.getPropertyOptions(r),(d.hasChanged??$r)(i,o)||d.useDefault&&d.reflect&&i===this.__defaultValues?.get(r)&&!this.hasAttribute(g.__attributeNameForProperty(r,d)))this._$changeProperty(r,o,d);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(r,o,{useDefault:d,reflect:c,wrapped:i},g){if(d&&!(this.__defaultValues??=new Map).has(r)){if(this.__defaultValues.set(r,g??o??this[r]),i!==!0||g!==void 0)return}if(!this._$changedProperties.has(r)){if(!this.hasUpdated&&!d)o=void 0;this._$changedProperties.set(r,o)}if(c===!0&&this.__reflectingProperty!==r)(this.__reflectingProperties??=new Set).add(r)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(o){Promise.reject(o)}let r=this.scheduleUpdate();if(r!=null)await r;return!this.isUpdatePending}scheduleUpdate(){let r=this.performUpdate();if(G&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof r?.then==="function")q("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return r}performUpdate(){if(!this.isUpdatePending)return;if(po?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),G){let i=[...this.constructor.elementProperties.keys()].filter((g)=>this.hasOwnProperty(g)&&(g in H0(this)));if(i.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${i.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[c,i]of this.__instanceProperties)this[c]=i;this.__instanceProperties=void 0}let d=this.constructor.elementProperties;if(d.size>0)for(let[c,i]of d){let{wrapped:g}=i,h=this[c];if(g===!0&&!this._$changedProperties.has(c)&&h!==void 0)this._$changeProperty(c,void 0,i,h)}}let r=!1,o=this._$changedProperties;try{if(r=this.shouldUpdate(o),r)this.willUpdate(o),this.__controllers?.forEach((d)=>d.hostUpdate?.()),this.update(o);else this.__markUpdated()}catch(d){throw r=!1,this.__markUpdated(),d}if(r)this._$didUpdate(o)}willUpdate(r){}_$didUpdate(r){if(this.__controllers?.forEach((o)=>o.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(r);if(this.updated(r),G&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))q("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(r){return!0}update(r){this.__reflectingProperties&&=this.__reflectingProperties.forEach((o)=>this.__propertyToAttribute(o,this[o])),this.__markUpdated()}updated(r){}firstUpdated(r){}}W.elementStyles=[];W.shadowRootOptions={mode:"open"};W[rr("elementProperties",W)]=new Map;W[rr("finalized",W)]=new Map;G0?.({ReactiveElement:W});if(G){W.enabledWarnings=["change-in-update","async-perform-update"];let r=function(o){if(!o.hasOwnProperty(rr("enabledWarnings",o)))o.enabledWarnings=o.enabledWarnings.slice()};W.enableWarning=function(o){if(r(this),!this.enabledWarnings.includes(o))this.enabledWarnings.push(o)},W.disableWarning=function(o){r(this);let d=this.enabledWarnings.indexOf(o);if(d>=0)this.enabledWarnings.splice(d,1)}}(p.reactiveElementVersions??=[]).push("2.1.2");if(G&&p.reactiveElementVersions.length>1)queueMicrotask(()=>{q("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var U=globalThis,v=(r)=>{if(!U.emitLitDebugLogEvents)return;U.dispatchEvent(new CustomEvent("lit-debug",{detail:r}))},Go=0,fr;U.litIssuedWarnings??=new Set,fr=(r,o)=>{if(o+=r?` See https://lit.dev/msg/${r} for more information.`:"",!U.litIssuedWarnings.has(o)&&!U.litIssuedWarnings.has(r))console.warn(o),U.litIssuedWarnings.add(o)},queueMicrotask(()=>{fr("dev-mode","Lit is in dev mode. Not recommended for production!")});var N=U.ShadyDOM?.inUse&&U.ShadyDOM?.noPatch===!0?U.ShadyDOM.wrap:(r)=>r,Br=U.trustedTypes,W0=Br?Br.createPolicy("lit-html",{createHTML:(r)=>r}):void 0,Wo=(r)=>r,Zr=(r,o,d)=>Wo,Uo=(r)=>{if(u!==Zr)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");u=r},lo=()=>{u=Zr},Ir=(r,o,d)=>{return u(r,o,d)},D0="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,M0="?"+M,jo=`<${M0}>`,R=document,nr=()=>R.createComment(""),xr=(r)=>r===null||typeof r!="object"&&typeof r!="function",Ar=Array.isArray,qo=(r)=>Ar(r)||typeof r?.[Symbol.iterator]==="function",Nr=`[ 	
\f\r]`,No=`[^ 	
\f\r"'\`<>=]`,Co=`[^\\s"'>=/]`,gr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U0=1,Cr=2,Do=3,l0=/-->/g,j0=/>/g,A=new RegExp(`>|${Nr}(?:(${Co}+)(${Nr}*=${Nr}*(?:${No}|("|')|))|$)`,"g"),Mo=0,q0=1,Io=2,N0=3,Dr=/'/g,Mr=/"/g,I0=/^(?:script|style|textarea|title)$/i,Ao=1,Yr=2,Fr=3,Tr=1,Xr=2,To=3,Oo=4,Vo=5,Or=6,Ro=7,Vr=(r)=>(o,...d)=>{if(o.some((c)=>c===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(d.some((c)=>c?._$litStatic$))fr("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:r,strings:o,values:d}},a=Vr(Ao),wd=Vr(Yr),yd=Vr(Fr),L=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),C0=new WeakMap,V=R.createTreeWalker(R,129),u=Zr;function A0(r,o){if(!Ar(r)||!r.hasOwnProperty("raw")){let d="invalid template strings array";throw d=`
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
`),Error(d)}return W0!==void 0?W0.createHTML(o):o}var Lo=(r,o)=>{let d=r.length-1,c=[],i=o===Yr?"<svg>":o===Fr?"<math>":"",g,h=gr;for(let n=0;n<d;n++){let k=r[n],b=-1,t,_=0,w;while(_<k.length){if(h.lastIndex=_,w=h.exec(k),w===null)break;if(_=h.lastIndex,h===gr){if(w[U0]==="!--")h=l0;else if(w[U0]!==void 0)h=j0;else if(w[Cr]!==void 0){if(I0.test(w[Cr]))g=new RegExp(`</${w[Cr]}`,"g");h=A}else if(w[Do]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(h===A)if(w[Mo]===">")h=g??gr,b=-1;else if(w[q0]===void 0)b=-2;else b=h.lastIndex-w[Io].length,t=w[q0],h=w[N0]===void 0?A:w[N0]==='"'?Mr:Dr;else if(h===Mr||h===Dr)h=A;else if(h===l0||h===j0)h=gr;else h=A,g=void 0}console.assert(b===-1||h===A||h===Dr||h===Mr,"unexpected parse state B");let K=h===A&&r[n+1].startsWith("/>")?" ":"";i+=h===gr?k+jo:b>=0?(c.push(t),k.slice(0,b)+D0+k.slice(b))+M+K:k+M+(b===-2?n:K)}let f=i+(r[d]||"<?>")+(o===Yr?"</svg>":o===Fr?"</math>":"");return[A0(r,f),c]};class kr{constructor({strings:r,["_$litType$"]:o},d){this.parts=[];let c,i=0,g=0,h=r.length-1,f=this.parts,[n,k]=Lo(r,o);if(this.el=kr.createElement(n,d),V.currentNode=this.el.content,o===Yr||o===Fr){let b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}while((c=V.nextNode())!==null&&f.length<h){if(c.nodeType===1){{let b=c.localName;if(/^(?:textarea|template)$/i.test(b)&&c.innerHTML.includes(M)){let t=`Expressions are not supported inside \`${b}\` elements. See https://lit.dev/msg/expression-in-${b} for more information.`;if(b==="template")throw Error(t);else fr("",t)}}if(c.hasAttributes()){for(let b of c.getAttributeNames())if(b.endsWith(D0)){let t=k[g++],w=c.getAttribute(b).split(M),K=/([.?@])?(.*)/.exec(t);f.push({type:Tr,index:i,name:K[2],strings:w,ctor:K[1]==="."?O0:K[1]==="?"?V0:K[1]==="@"?R0:br}),c.removeAttribute(b)}else if(b.startsWith(M))f.push({type:Or,index:i}),c.removeAttribute(b)}if(I0.test(c.tagName)){let b=c.textContent.split(M),t=b.length-1;if(t>0){c.textContent=Br?Br.emptyScript:"";for(let _=0;_<t;_++)c.append(b[_],nr()),V.nextNode(),f.push({type:Xr,index:++i});c.append(b[t],nr())}}}else if(c.nodeType===8)if(c.data===M0)f.push({type:Xr,index:i});else{let t=-1;while((t=c.data.indexOf(M,t+1))!==-1)f.push({type:Ro,index:i}),t+=M.length-1}i++}if(k.length!==g)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+r.join("${...}")+"`");v&&v({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:r})}static createElement(r,o){let d=R.createElement("template");return d.innerHTML=r,d}}function or(r,o,d=r,c){if(o===L)return o;let i=c!==void 0?d.__directives?.[c]:d.__directive,g=xr(o)?void 0:o._$litDirective$;if(i?.constructor!==g){if(i?._$notifyDirectiveConnectionChanged?.(!1),g===void 0)i=void 0;else i=new g(r),i._$initialize(r,d,c);if(c!==void 0)(d.__directives??=[])[c]=i;else d.__directive=i}if(i!==void 0)o=or(r,i._$resolve(r,o.values),i,c);return o}class T0{constructor(r,o){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=r,this._$parent=o}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(r){let{el:{content:o},parts:d}=this._$template,c=(r?.creationScope??R).importNode(o,!0);V.currentNode=c;let i=V.nextNode(),g=0,h=0,f=d[0];while(f!==void 0){if(g===f.index){let n;if(f.type===Xr)n=new ar(i,i.nextSibling,this,r);else if(f.type===Tr)n=new f.ctor(i,f.name,f.strings,this,r);else if(f.type===Or)n=new L0(i,this,r);this._$parts.push(n),f=d[++h]}if(g!==f?.index)i=V.nextNode(),g++}return V.currentNode=R,c}_update(r){let o=0;for(let d of this._$parts){if(d!==void 0)if(v&&v({kind:"set part",part:d,value:r[o],valueIndex:o,values:r,templateInstance:this}),d.strings!==void 0)d._$setValue(r,d,o),o+=d.strings.length-2;else d._$setValue(r[o]);o++}}}class ar{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(r,o,d,c){this.type=Xr,this._$committedValue=Q,this._$disconnectableChildren=void 0,this._$startNode=r,this._$endNode=o,this._$parent=d,this.options=c,this.__isConnected=c?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let r=N(this._$startNode).parentNode,o=this._$parent;if(o!==void 0&&r?.nodeType===11)r=o.parentNode;return r}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(r,o=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(r=or(this,r,o),xr(r)){if(r===Q||r==null||r===""){if(this._$committedValue!==Q)v&&v({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=Q}else if(r!==this._$committedValue&&r!==L)this._commitText(r)}else if(r._$litType$!==void 0)this._commitTemplateResult(r);else if(r.nodeType!==void 0){if(this.options?.host===r){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",r,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(r)}else if(qo(r))this._commitIterable(r);else this._commitText(r)}_insert(r){return N(N(this._$startNode).parentNode).insertBefore(r,this._$endNode)}_commitNode(r){if(this._$committedValue!==r){if(this._$clear(),u!==Zr){let o=this._$startNode.parentNode?.nodeName;if(o==="STYLE"||o==="SCRIPT"){let d="Forbidden";if(o==="STYLE")d="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else d="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(d)}}v&&v({kind:"commit node",start:this._$startNode,parent:this._$parent,value:r,options:this.options}),this._$committedValue=this._insert(r)}}_commitText(r){if(this._$committedValue!==Q&&xr(this._$committedValue)){let o=N(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=Ir(o,"data","property");r=this._textSanitizer(r),v&&v({kind:"commit text",node:o,value:r,options:this.options}),o.data=r}else{let o=R.createTextNode("");if(this._commitNode(o),this._textSanitizer===void 0)this._textSanitizer=Ir(o,"data","property");r=this._textSanitizer(r),v&&v({kind:"commit text",node:o,value:r,options:this.options}),o.data=r}this._$committedValue=r}_commitTemplateResult(r){let{values:o,["_$litType$"]:d}=r,c=typeof d==="number"?this._$getTemplate(r):(d.el===void 0&&(d.el=kr.createElement(A0(d.h,d.h[0]),this.options)),d);if(this._$committedValue?._$template===c)v&&v({kind:"template updating",template:c,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:o}),this._$committedValue._update(o);else{let i=new T0(c,this),g=i._clone(this.options);v&&v({kind:"template instantiated",template:c,instance:i,parts:i._$parts,options:this.options,fragment:g,values:o}),i._update(o),v&&v({kind:"template instantiated and updated",template:c,instance:i,parts:i._$parts,options:this.options,fragment:g,values:o}),this._commitNode(g),this._$committedValue=i}}_$getTemplate(r){let o=C0.get(r.strings);if(o===void 0)C0.set(r.strings,o=new kr(r));return o}_commitIterable(r){if(!Ar(this._$committedValue))this._$committedValue=[],this._$clear();let o=this._$committedValue,d=0,c;for(let i of r){if(d===o.length)o.push(c=new ar(this._insert(nr()),this._insert(nr()),this,this.options));else c=o[d];c._$setValue(i),d++}if(d<o.length)this._$clear(c&&N(c._$endNode).nextSibling,d),o.length=d}_$clear(r=N(this._$startNode).nextSibling,o){this._$notifyConnectionChanged?.(!1,!0,o);while(r!==this._$endNode){let d=N(r).nextSibling;N(r).remove(),r=d}}setConnected(r){if(this._$parent===void 0)this.__isConnected=r,this._$notifyConnectionChanged?.(r);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class br{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(r,o,d,c,i){if(this.type=Tr,this._$committedValue=Q,this._$disconnectableChildren=void 0,this.element=r,this.name=o,this._$parent=c,this.options=i,d.length>2||d[0]!==""||d[1]!=="")this._$committedValue=Array(d.length-1).fill(new String),this.strings=d;else this._$committedValue=Q;this._sanitizer=void 0}_$setValue(r,o=this,d,c){let i=this.strings,g=!1;if(i===void 0){if(r=or(this,r,o,0),g=!xr(r)||r!==this._$committedValue&&r!==L,g)this._$committedValue=r}else{let h=r;r=i[0];let f,n;for(f=0;f<i.length-1;f++){if(n=or(this,h[d+f],o,f),n===L)n=this._$committedValue[f];if(g||=!xr(n)||n!==this._$committedValue[f],n===Q)r=Q;else if(r!==Q)r+=(n??"")+i[f+1];this._$committedValue[f]=n}}if(g&&!c)this._commitValue(r)}_commitValue(r){if(r===Q)N(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=u(this.element,this.name,"attribute");r=this._sanitizer(r??""),v&&v({kind:"commit attribute",element:this.element,name:this.name,value:r,options:this.options}),N(this.element).setAttribute(this.name,r??"")}}}class O0 extends br{constructor(){super(...arguments);this.type=To}_commitValue(r){if(this._sanitizer===void 0)this._sanitizer=u(this.element,this.name,"property");r=this._sanitizer(r),v&&v({kind:"commit property",element:this.element,name:this.name,value:r,options:this.options}),this.element[this.name]=r===Q?void 0:r}}class V0 extends br{constructor(){super(...arguments);this.type=Oo}_commitValue(r){v&&v({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(r&&r!==Q),options:this.options}),N(this.element).toggleAttribute(this.name,!!r&&r!==Q)}}class R0 extends br{constructor(r,o,d,c,i){super(r,o,d,c,i);if(this.type=Vo,this.strings!==void 0)throw Error(`A \`<${r.localName}>\` has a \`@${o}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(r,o=this){if(r=or(this,r,o,0)??Q,r===L)return;let d=this._$committedValue,c=r===Q&&d!==Q||r.capture!==d.capture||r.once!==d.once||r.passive!==d.passive,i=r!==Q&&(d===Q||c);if(v&&v({kind:"commit event listener",element:this.element,name:this.name,value:r,options:this.options,removeListener:c,addListener:i,oldListener:d}),c)this.element.removeEventListener(this.name,this,d);if(i)this.element.addEventListener(this.name,this,r);this._$committedValue=r}handleEvent(r){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,r);else this._$committedValue.handleEvent(r)}}class L0{constructor(r,o,d){this.element=r,this.type=Or,this._$disconnectableChildren=void 0,this._$parent=o,this.options=d}get _$isConnected(){return this._$parent._$isConnected}_$setValue(r){v&&v({kind:"commit to element binding",element:this.element,value:r,options:this.options}),or(this,r)}}var uo=U.litHtmlPolyfillSupportDevMode;uo?.(kr,ar);(U.litHtmlVersions??=[]).push("3.3.3");if(U.litHtmlVersions.length>1)queueMicrotask(()=>{fr("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var hr=(r,o,d)=>{if(o==null)throw TypeError(`The container to render into may not be ${o}`);let c=Go++,i=d?.renderBefore??o,g=i._$litPart$;if(v&&v({kind:"begin render",id:c,value:r,container:o,options:d,part:g}),g===void 0){let h=d?.renderBefore??null;i._$litPart$=g=new ar(o.insertBefore(nr(),h),h,void 0,d??{})}return g._$setValue(r),v&&v({kind:"end render",id:c,value:r,container:o,options:d,part:g}),g};hr.setSanitizer=Uo,hr.createSanitizer=Ir,hr._testOnlyClearSanitizerFactoryDoNotCallOrElse=lo;var Po=(r,o)=>r,Rr=!0,I=globalThis,u0;if(Rr)I.litIssuedWarnings??=new Set,u0=(r,o)=>{if(o+=` See https://lit.dev/msg/${r} for more information.`,!I.litIssuedWarnings.has(o)&&!I.litIssuedWarnings.has(r))console.warn(o),I.litIssuedWarnings.add(o)};class y extends W{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){let o=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(r),this.__childPart=hr(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return L}}y._$litElement$=!0;y[Po("finalized",y)]=!0;I.litElementHydrateSupport?.({LitElement:y});var So=Rr?I.litElementPolyfillSupportDevMode:I.litElementPolyfillSupport;So?.({LitElement:y});(I.litElementVersions??=[]).push("4.2.2");if(Rr&&I.litElementVersions.length>1)queueMicrotask(()=>{u0("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var Y=(r)=>(o,d)=>{if(d!==void 0)d.addInitializer(()=>{customElements.define(r,o)});else customElements.define(r,o)};var P0=!0,S0;if(P0)globalThis.litIssuedWarnings??=new Set,S0=(r,o)=>{if(o+=` See https://lit.dev/msg/${r} for more information.`,!globalThis.litIssuedWarnings.has(o)&&!globalThis.litIssuedWarnings.has(r))console.warn(o),globalThis.litIssuedWarnings.add(o)};var Eo=(r,o,d)=>{let c=o.hasOwnProperty(d);return o.constructor.createProperty(d,r),c?Object.getOwnPropertyDescriptor(o,d):void 0},eo={attribute:!0,type:String,converter:ir,reflect:!1,hasChanged:$r},so=(r=eo,o,d)=>{let{kind:c,metadata:i}=d;if(P0&&i==null)S0("missing-class-metadata",`The class ${o} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let g=globalThis.litPropertyMetadata.get(i);if(g===void 0)globalThis.litPropertyMetadata.set(i,g=new Map);if(c==="setter")r=Object.create(r),r.wrapped=!0;if(g.set(d.name,r),c==="accessor"){let{name:h}=d;return{set(f){let n=o.get.call(this);o.set.call(this,f),this.requestUpdate(h,n,r,!0,f)},init(f){if(f!==void 0)this._$changeProperty(h,void 0,r,f);return f}}}else if(c==="setter"){let{name:h}=d;return function(f){let n=this[h];o.call(this,f),this.requestUpdate(h,n,r,!0,f)}}throw Error(`Unsupported decorator location: ${c}`)};function m(r){return(o,d)=>{return typeof d==="object"?so(r,o,d):Eo(r,o,d)}}function Z(r){return m({...r,state:!0,attribute:!1})}var T=(r,o,d)=>{if(d.configurable=!0,d.enumerable=!0,Reflect.decorate&&typeof o!=="object")Object.defineProperty(r,o,d);return d};var Lr=!0,E0;if(Lr)globalThis.litIssuedWarnings??=new Set,E0=(r,o)=>{if(o+=r?` See https://lit.dev/msg/${r} for more information.`:"",!globalThis.litIssuedWarnings.has(o)&&!globalThis.litIssuedWarnings.has(r))console.warn(o),globalThis.litIssuedWarnings.add(o)};function e0(r,o){return(d,c,i)=>{let g=(h)=>{let f=h.renderRoot?.querySelector(r)??null;if(Lr&&f===null&&o&&!h.hasUpdated){let n=typeof c==="object"?c.name:c;E0("",`@query'd field ${JSON.stringify(String(n))} with the 'cache' flag set for selector '${r}' has been accessed before the first update and returned null. This is expected if the renderRoot tree has not been provided beforehand (e.g. via Declarative Shadow DOM). Therefore the value hasn't been cached.`)}return f};if(o){let{get:h,set:f}=typeof c==="object"?d:i??(()=>{let n=Lr?Symbol(`${String(c)} (@query() cache)`):Symbol();return{get(){return this[n]},set(k){this[n]=k}}})();return T(d,c,{get(){let n=h.call(this);if(n===void 0){if(n=g(this),n!==null||this.hasUpdated)f.call(this,n)}return n}})}else return T(d,c,{get(){return g(this)}})}}var rd;function s0(r){return(o,d)=>{return T(o,d,{get(){return(this.renderRoot??(rd??=document.createDocumentFragment())).querySelectorAll(r)}})}}function Qr(r,o,d){let c=[];for(let i=r;i<=Math.min(o,d);i++)c.push(i);return c}var mr=[{id:"soneto",nombre:"Soneto",descripcion:"Dos cuartetos y dos tercetos. Endecasílabos (11) con rima consonante y, por lo general, acento en la 10ª sílaba.",ejemplo:"Un soneto me manda hacer Violante…",modo:"fija",medidaPorVerso:11,silabasObjetivo:11,acentosObligatorios:[10],acentoSugerido:[6],tipoRima:"consonante",esquemaReferencia:"ABBA ABBA CDC DCD",estrofas:[{id:"cuarteto1",nombre:"Primer cuarteto",nVersos:4,tipo:"normal"},{id:"cuarteto2",nombre:"Segundo cuarteto",nVersos:4,tipo:"normal"},{id:"terceto1",nombre:"Primer terceto",nVersos:3,tipo:"normal"},{id:"terceto2",nombre:"Segundo terceto",nVersos:3,tipo:"normal"}],versosIniciales:14,versosMin:14,versosMax:14,medidaDescripcion:"Endecasílabos · 11 sílabas métricas"},{id:"romance",nombre:"Romance",descripcion:"Tirada de octosílabos (8) con rima asonante en los versos pares; los impares quedan libres. Sin estrofas: serie continua.",ejemplo:"—Conde Olinos, Conde Olinos…",modo:"serie",medidaPorVerso:8,silabasObjetivo:8,acentosObligatorios:[7],tipoRima:"asonante",esquemaReferencia:"-a-a (pares asonantes)",estrofas:[{id:"tirada",nombre:"Tirada",nVersos:0,tipo:"normal"}],versosIniciales:8,versosMin:4,versosMax:400,medidaDescripcion:"Octosílabos · 8 sílabas métricas"},{id:"letrilla",nombre:"Letrilla",descripcion:"Estribillo que se repite tras cada copla; cada copla combina mudanza y vuelta que enlaza con el estribillo. Octosílabos, con estribillo frecuentemente hexasílabo.",ejemplo:"A mis soledades voy, / de mis soledades vengo…",modo:"estrofa",medidaPorVerso:8,silabasObjetivo:8,acentosObligatorios:[7],tipoRima:"asonante",esquemaReferencia:"AB aba AB",estrofas:[{id:"estribillo",nombre:"Estribillo",nVersos:2,tipo:"estribillo",medidaObjetivo:6,acentos:[5]},{id:"copla",nombre:"Copla",nVersos:4,tipo:"normal"}],estrofaRepetible:!0,versosIniciales:6,versosMin:6,versosMax:34,medidaDescripcion:"Octosílabos · 8 (estribillo 8/6)"},{id:"decima",nombre:"Décima (Espinela)",descripcion:"Décima espinela: diez octosílabos (8) con rima consonante abbaaccddc. Pausa estructural tras el 4º verso (el 5º inicia sentido nuevo).",ejemplo:"Yo, pues mirad si me aflijo…",modo:"fija",medidaPorVerso:8,silabasObjetivo:8,acentosObligatorios:[7],tipoRima:"consonante",esquemaReferencia:"abbaaccddc",estrofas:[{id:"espinela",nombre:"Décima",nVersos:10,tipo:"normal"}],versosIniciales:10,versosMin:10,versosMax:10,medidaDescripcion:"Octosílabos · 8 sílabas métricas"},{id:"octava",nombre:"Octava real",descripcion:"Ocho endecasílabos (11) por estancia con rima consonante ABABABCC: seis versos de rima alterna y un pareado final que cierra cada octava.",ejemplo:"Aquella voluntad honesta y pura, / ilustre y hermosísima María…",modo:"estrofa",medidaPorVerso:11,silabasObjetivo:11,acentosObligatorios:[10],acentoSugerido:[6],tipoRima:"consonante",esquemaReferencia:"ABABABCC",estrofas:[{id:"octava",nombre:"Octava",nVersos:8,tipo:"normal"}],estrofaRepetible:!0,versosIniciales:8,versosMin:8,versosMax:Number.MAX_SAFE_INTEGER,medidaDescripcion:"Endecasílabos · 11 sílabas métricas"},{id:"redondilla",nombre:"Redondilla",descripcion:"Cuatro octosílabos (8) con rima consonante abba.",ejemplo:"Quien bien ama tarde olvida…",modo:"fija",medidaPorVerso:8,silabasObjetivo:8,acentosObligatorios:[7],tipoRima:"consonante",esquemaReferencia:"abba",estrofas:[{id:"redondilla",nombre:"Redondilla",nVersos:4,tipo:"normal"}],versosIniciales:4,versosMin:4,versosMax:4,medidaDescripcion:"Octosílabos · 8 sílabas métricas"},{id:"cuarteta",nombre:"Cuarteta",descripcion:"Cuatro octosílabos (8) con rima consonante abab.",ejemplo:"No me mueve, mi Dios, para quererte…",modo:"fija",medidaPorVerso:8,silabasObjetivo:8,acentosObligatorios:[7],tipoRima:"consonante",esquemaReferencia:"abab",estrofas:[{id:"cuarteta",nombre:"Cuarteta",nVersos:4,tipo:"normal"}],versosIniciales:4,versosMin:4,versosMax:4,medidaDescripcion:"Octosílabos · 8 sílabas métricas"}];function C(r){return mr.find((o)=>o.id===r)||mr[0]}function ro(r,o,d){let c=d??r.versosIniciales;return Array.from({length:c},(i,g)=>({id:`${o}-v${g+1}`,numero:g+1,texto:""}))}function dr(r,o){let d=[...o].sort((g,h)=>g.numero-h.numero);if(r.modo==="serie"){let g=r.estrofas[0];return[{id:g?.id||"tirada",nombre:g?.nombre||"Tirada",tipo:g?.tipo||"normal",versos:d}]}if(r.modo==="estrofa"){let g=r.estrofas.slice(0,-1),h=r.estrofas[r.estrofas.length-1],f=[],n=0;for(let b of g){let t=Math.min(b.nVersos,d.length-n);if(t<=0)break;f.push({id:b.id,nombre:b.nombre,tipo:b.tipo,versos:d.slice(n,n+t)}),n+=t}let k=1;while(n<d.length&&h){let b=Math.min(h.nVersos,d.length-n);f.push({id:`${h.id}-${k}`,nombre:`${h.nombre} ${k}`,tipo:h.tipo,versos:d.slice(n,n+b)}),n+=b,k++}return f}let c=[],i=0;for(let g of r.estrofas){let h=Math.min(g.nVersos,d.length-i);if(h<=0)break;c.push({id:g.id,nombre:g.nombre,tipo:g.tipo,versos:d.slice(i,i+h)}),i+=h}return c}function Jr(r,o){let d=Math.max(0,o);if(r.modo==="serie"){let g=[];for(let h=1;h<=d;h+=4)g.push(Qr(h,h+3,d));return g.filter((h)=>h.length>0)}if(r.modo==="estrofa"){let g=[],h=r.estrofas.slice(0,-1),f=r.estrofas[r.estrofas.length-1],n=1;for(let k of h)g.push(Qr(n,n+k.nVersos-1,d)),n+=k.nVersos;while(n<=d&&f)g.push(Qr(n,n+f.nVersos-1,d)),n+=f.nVersos;return g.filter((k)=>k.length>0)}let c=[],i=1;for(let g of r.estrofas)c.push(Qr(i,i+g.nVersos-1,d)),i+=g.nVersos;return c.filter((g)=>g.length>0)}function ur(r){return{min:r.versosMin,max:r.versosMax}}function oo(r,o,d){let{silabasObjetivo:c,acentosObligatorios:i}=r;if(r.modo==="estrofa"){let g=r.estrofas.slice(0,-1),h=0;for(let f of g){if(o>h&&o<=h+f.nVersos){if(f.medidaObjetivo)c=f.medidaObjetivo,i=f.acentos??[c-1];break}h+=f.nVersos}}return{silabasObjetivo:c,acentosObligatorios:i,acentosSugeridos:r.acentoSugerido}}class Pr{listeners=new Map;on(r,o){if(!this.listeners.has(r))this.listeners.set(r,new Set);this.listeners.get(r).add(o)}off(r,o){let d=this.listeners.get(r);if(d){if(d.delete(o),d.size===0)this.listeners.delete(r)}}emit(r,o){let d=this.listeners.get(r);if(d)for(let c of d)try{c(o)}catch(i){console.error(`[EventBus] Error in handler for '${String(r)}':`,i)}}clear(){this.listeners.clear()}}var P={CURRENT_SONETO:"el-taller:soneto-actual",HISTORY:"el-taller:historial",PREFERENCES:"el-taller:preferencias"};class Sr{autoSave(r){try{let o=JSON.stringify({soneto:r,savedAt:Date.now()});localStorage.setItem(P.CURRENT_SONETO,o)}catch(o){console.warn("[Storage] Error al auto-guardar:",o)}}loadLastSoneto(){try{let r=localStorage.getItem(P.CURRENT_SONETO);if(!r)return null;let{soneto:o}=JSON.parse(r);return o}catch{return null}}saveToHistory(r){try{let o=this.loadHistory();if(o.unshift(r),o.length>20)o.pop();localStorage.setItem(P.HISTORY,JSON.stringify(o))}catch(o){console.warn("[Storage] Error al guardar historial:",o)}}loadHistory(){try{let r=localStorage.getItem(P.HISTORY);return r?JSON.parse(r):[]}catch{return[]}}savePreferences(r){try{localStorage.setItem(P.PREFERENCES,JSON.stringify(r))}catch{}}loadPreferences(){try{let r=localStorage.getItem(P.PREFERENCES);return r?JSON.parse(r):{}}catch{return{}}}getKeys(){return{...P}}}function co(r,o,d=!1){let c=null,i=!1;return(...g)=>{if(d&&!i)r(...g),i=!0;if(c!==null)clearTimeout(c);c=setTimeout(()=>{if(!d||i)r(...g);i=!1,c=null},o)}}var tr=new Set(["a","e","o","á","é","ó"]),Er=new Set(["i","u","í","ú"]),S=new Set([...tr,...Er]),io=new Set(["ia","ie","io","ua","ue","uo","ai","ei","oi","au","eu","ou","iu","ui"]),go=new Set(["iai","iei","uai","uei","iau","ueu"]),ho=new Set(["pr","pl","br","bl","fr","fl","gr","gl","kr","kl","cr","cl","dr","tr","tl","ch","ll","rr"]);var dd=[{tipo:"heroico",acentos:[6,10],descripcion:"Acento en 6ª y 10ª sílabas"},{tipo:"enfatico",acentos:[1,6,10],descripcion:"Acento en 1ª, 6ª y 10ª sílabas"},{tipo:"melodico",acentos:[3,6,10],descripcion:"Acento en 3ª, 6ª y 10ª sílabas"},{tipo:"safico",acentos:[4,8,10],descripcion:"Acento en 4ª, 8ª y 10ª sílabas"},{tipo:"dactilico",acentos:[4,7,10],descripcion:"Acento en 4ª, 7ª y 10ª sílabas"},{tipo:"anfibraquico",acentos:[2,5,8,10],descripcion:"Acento en 2ª, 5ª, 8ª y 10ª sílabas"}];function fo(r){if(!r.has(10))return;let o=[...dd].sort((d,c)=>c.acentos.length-d.acentos.length);for(let d of o){let c=new Set(d.acentos),i=!0;for(let g of c)if(!r.has(g)){i=!1;break}if(i)return d}return{tipo:"otro",acentos:[...r].sort(),descripcion:"Otra variante"}}class yr{silabearPalabra(r){if(!r)return[];let o=r.toLowerCase();if(o.length<=1)return[o];let d=[],c=0,i="";while(c<o.length){let g=o[c];if(wr(g)){let h=this.leerGrupoVocalico(o,c);if(i.length>0){if(i.length===1)d.push(i+h);else if(i.length===2)if(no(i))d.push(i+h);else{if(d.length>0)d[d.length-1]+=i[0];else d.push(i[0]);d.push(i[1]+h)}else{let f=i.length>=2&&no(i.slice(-2))?i.slice(-2):i.slice(-1),n=i.slice(0,i.length-f.length);if(d.length>0)d[d.length-1]+=n;else if(n.length>0)d.push(n);d.push(f+h)}i=""}else if(d.length===0)d.push(h);else d.push(h);c+=h.length}else if(/[bcdfghjklmnñpqrstvwxyzü]/i.test(g))i+=g,c++;else c++}if(i.length>0)if(d.length>0)d[d.length-1]+=i;else d.push(i);return d.filter((g)=>g.length>0)}normalizarVocal(r){return{"á":"a","é":"e","í":"i","ó":"o","ú":"u","ü":"u"}[r]||r}leerGrupoVocalico(r,o){if(o>=r.length)return"";let d=o+2<r.length?r.slice(o,o+3):"",c=o+1<r.length?r.slice(o,o+2):"",i=[...d].map((h)=>this.normalizarVocal(h)).join(""),g=[...c].map((h)=>this.normalizarVocal(h)).join("");if(i.length===3&&gd(i))return d;if(g.length===2&&id(g)){if(o>0){let h=r[o-1];if(er(h)&&(r[o]==="í"||r[o]==="ú"))return r[o]}if(r[o]==="í"||r[o]==="ú"){if(o+2<r.length){if(er(r[o+1])&&!wr(r[o+2]))return r[o]}if(o+1<r.length&&er(r[o+1])&&o+2>=r.length)return r[o]}return c}if(o>0){let h=r[o-1],f=r[o];if((f==="á"||f==="é"||f==="ó")&&cd(h))return f}return r[o]}leerGrupoConsonantico(r,o){let d="";while(o<r.length&&!wr(r[o]))d+=r[o],o++;return d}detectarSinalefas(r,o=[]){let d=[],c=[],i=0;for(let h=0;h<r.length;h++){let f=r[h];for(let n=0;n<f.length;n++)d.push(f[n]),i++}let g=0;for(let h=0;h<r.length-1;h++){let f=r[h],n=r[h+1],k=f[f.length-1],b=n[0],t=k.charAt(k.length-1),_=b.charAt(0),w=t==="y",K=_==="y"&&o[h+1]==="y";if((wr(t)||w)&&(wr(_)||_==="h"||K)){let J=g+f.length-1;c.push({silabaAnterior:J,silabaSiguiente:J+1,descartada:!1})}g+=f.length}return{silabas:d,sinalefas:c}}aplicarAcentoFinal(r,o){let d=this.determinarAcentoPalabra(o),c=r.length;switch(d){case"aguda":return c+1;case"esdrujula":return c-1;case"llana":default:return c}}determinarAcentoPalabra(r){let o=r.toLowerCase();if(/[áéíóú]/.test(o)){let c=this.silabearPalabra(o);if(c.length===0)return"llana";for(let i=0;i<c.length;i++)if(/[áéíóú]/.test(c[i])){if(i===c.length-1)return"aguda";if(i===c.length-2)return"llana";return"esdrujula"}}let d=o.charAt(o.length-1);if(d==="n"||d==="s"||/[aeiou]/.test(d))return"llana";return"aguda"}identificarTipoVerso(r,o){if(o!==11)return"no_endecasilabo";let d=new Set(r.map((i)=>i+1));return fo(d)?.tipo}encontrarSilabasTonicas(r){let o=[];for(let d of r)if(d.esAcentoEstrófico)o.push(d.index);return o}toggleSinalefa(r,o){let d=[...r.hiatoForzado];if(d.includes(o)){let c=d.indexOf(o);d.splice(c,1)}else d.push(o);return this.analizarVerso(r.texto,d)}analizarVerso(r,o=[],d){let c=d?.silabasObjetivo??11,i=d?.acentosObligatorios??[10],g=d?.acentosSugeridos??(c===11?[6]:[]),h=[],f=[],n=r.toLowerCase().trim();if(!n)return{texto:r,silabas:[],sinalefas:[],numSilabasMetricas:0,numSilabasFonologicas:0,acentoFinal:"llana",silabasTonicas:[],tipoVerso:void 0,errores:[{tipo:"num_silabas",mensaje:"Verso vacío"}],advertencias:[],hiatoForzado:[]};let k=n.replace(/[¿?!¡;:.,()\-"'«»]/g,"").trim(),b=k.split(/\s+/).filter((z)=>z.length>0);if(b.length===0)return{texto:r,silabas:[],sinalefas:[],numSilabasMetricas:0,numSilabasFonologicas:0,acentoFinal:"llana",silabasTonicas:[],tipoVerso:void 0,errores:[{tipo:"num_silabas",mensaje:"Verso vacío"}],advertencias:[],hiatoForzado:[]};let t=b.map((z)=>this.silabearPalabra(z)),{silabas:_,sinalefas:w}=this.detectarSinalefas(t,b),K=0,J=[],_0=k.replace(/h/g,""),pr=0;for(let z of b)for(let j of z)pr++;let $=r.toLowerCase(),X=0;for(let z=0;z<b.length;z++){let j=b[z],F=t[z],zr=$.indexOf(j,X);if(zr!==-1)X=zr;let Y0=0,zo=F.some((H)=>/[áéíóú]/.test(H)),cr=-1;if(zo){for(let H=0;H<F.length;H++)if(/[áéíóú]/.test(F[H])){cr=H;break}}else if(F.length>=2){let H=j.charAt(j.length-1);if(H==="n"||H==="s"||/[aeiou]/.test(H))cr=F.length-2;else cr=F.length-1}else cr=0;for(let H=0;H<F.length;H++){let F0=F[H],Wr=F0.toLowerCase(),X0=X+Y0,_o=X0+Wr.length;Y0+=Wr.length;let $o=/[áéíóú]/.test(Wr)||H===cr;J.push({texto:F0,index:J.length,esAcentoEstrófico:$o,esSinalefa:!1,hiatoForzado:!1,charStart:X0,charEnd:_o})}if(zr!==-1)X=zr+j.length;else X+=j.length}let D=[],s=[];for(let z of w){let j=o.includes(z.silabaAnterior),F=o.includes(z.silabaSiguiente);if(j||F){if(J[z.silabaAnterior])J[z.silabaAnterior].hiatoForzado=!0;D.push({...z,descartada:!0})}else{if(s.push({...z,descartada:!1}),D.push({...z,descartada:!1}),J[z.silabaAnterior])J[z.silabaAnterior].esSinalefa=!0;if(J[z.silabaSiguiente])J[z.silabaSiguiente].esSinalefa=!0}}let O=J.length,vr=s.length,l=O-vr,yo=b[b.length-1],Gr=this.determinarAcentoPalabra(yo);if(Gr==="aguda")l+=1;else if(Gr==="esdrujula")l-=1;let $0=this.encontrarSilabasTonicas(J),B0=$0.map((z)=>{let j=s.filter((F)=>F.silabaSiguiente<=z).length;return z-j}),vo=this.identificarTipoVerso(B0,l);if(l!==c)h.push({tipo:"num_silabas",mensaje:`El verso tiene ${l} sílabas métricas (debería tener ${c})`});else{let z=new Set(B0.map((F)=>F+1));if(c===11&&i.length===1&&i[0]===10&&g.length===1&&g[0]===6){if(!z.has(10))h.push({tipo:"sin_acento_10a",mensaje:"Falta acento en la 10ª sílaba (obligatorio)"});if(!z.has(6))f.push({tipo:"sin_acento_6a",mensaje:"Falta acento en la 6ª sílaba (recomendado)"})}else{for(let F of i)if(!z.has(F))h.push({tipo:"sin_acento_obligatorio",posicion:F,mensaje:`Falta acento en la ${F}ª sílaba (obligatorio)`});for(let F of g){if(i.includes(F))continue;if(z.has(F))continue;f.push({tipo:"sin_acento_sugerido",posicion:F,mensaje:`Falta acento en la ${F}ª sílaba (recomendado)`})}}}return{texto:r,silabas:J,sinalefas:D,numSilabasMetricas:Math.max(0,l),numSilabasFonologicas:O,acentoFinal:Gr,silabasTonicas:$0,tipoVerso:vo,errores:h,advertencias:f,hiatoForzado:o}}}function wr(r){return S.has(r.toLowerCase())}function er(r){return tr.has(r.toLowerCase())}function cd(r){return Er.has(r.toLowerCase())}function id(r){return io.has(r.toLowerCase())}function gd(r){return go.has(r.toLowerCase())}function no(r){return ho.has(r.toLowerCase())}class xo{engine=new yr;analyze(r){let o=new Map;for(let d of r.payload.versos){let c=this.engine.analizarVerso(d.texto,d.hiatoForzado,d.opts);o.set(d.numero,c)}return Promise.resolve({type:"ANALYZE_RESULT",payload:o})}terminate(){}}function ko(){return new xo}var ao={"á":"a","é":"e","í":"i","ó":"o","ú":"u"};class E{metric=new yr;detectarRima(r){if(!r||!r.silabas||r.silabas.length===0)return;let o=r.silabas.filter((g)=>g.esAcentoEstrófico),d;if(o.length>0)d=o[o.length-1];else{let g=r.silabas.filter((h)=>!h.esSinalefa);d=g.length>=2?g[g.length-2]:g[g.length-1]}if(!d)return;let c=this.extraerTerminacion(r.texto,d),i=r.texto.trim().split(/\s+/).pop()||"";return{terminacionFonetica:c,claveCompleta:c,claveVocales:this.extraerClaveAsonante(i),letra:"",esConsonante:!0,versosRelacionados:[]}}obtenerClaves(r){return{completa:this.extraerTerminacionPalabra(r),vocales:this.extraerClaveAsonante(r)}}extraerTerminacion(r,o){let d=r.toLowerCase().replace(/[¿?!¡;:.,()\-"'«»]/g,"").trim(),c=d.split(/\s+/),i=c[c.length-1]||"";if(!i)return d;return this.extraerTerminacionPalabra(i)}extraerTerminacionPalabra(r){let o=r.toLowerCase(),d=o.match(/[áéíóú]/);if(d){let k=o.lastIndexOf(d[0]);return o.slice(k)}let c=[...o].filter((k)=>S.has(k));if(c.length===0)return o;let i=c[c.length-1],g=o.lastIndexOf(i),h=o.charAt(o.length-1);if(h!=="n"&&h!=="s"&&!S.has(h))return o.slice(g);let f=c.length>=2?c[c.length-2]:i,n=o.lastIndexOf(f);if(c.length>=2){let b=o.substring(0,o.lastIndexOf(i)).lastIndexOf(f);if(b>=0)return o.slice(b)}return o.slice(g)}extraerClaveAsonante(r){if(!r)return"";let o=r.toLowerCase().replace(/[¿?!¡;:.,()\-"'«»]/g,"").trim();if(!o)return"";let d=this.metric.silabearPalabra(o);if(d.length===0)return"";let c=this.indiceSilabaTonica(o,d);if(c<0)return"";let i=[];for(let g=c;g<d.length;g++){let h=[...d[g]].filter((n)=>S.has(n)).join(""),f=this.procesarGrupoVocalico(h);for(let n of f)i.push(ao[n]||n)}return i.join("")}esRimaConsonante(r,o){return r.toLowerCase()===o.toLowerCase()}esRimaAsonante(r,o){let d=this.extraerClaveAsonante(r),c=this.extraerClaveAsonante(o);return d!==""&&d===c}esRima(r,o,d){return d?this.esRimaConsonante(r,o):this.esRimaAsonante(r,o)}indiceSilabaTonica(r,o){for(let c=0;c<o.length;c++)if(/[áéíóú]/.test(o[c]))return c;if(o.length===1)return 0;let d=r.charAt(r.length-1);if(d==="n"||d==="s"||S.has(d))return o.length-2;return o.length-1}procesarGrupoVocalico(r){if(!r)return[];if(r.length===1)return[r];if([...r].filter((d)=>tr.has(d)).length>=2)return[...r];if(/[íú]/.test(r))return[...r];return[this.vocalMasAbierta(r)]}vocalMasAbierta(r){let o="",d=-1;for(let c of r){let i=ao[c]||c,g=i==="a"?3:i==="e"||i==="o"?2:1;if(g>d)d=g,o=c}return o}}class sr{rhymeEngine;constructor(){this.rhymeEngine=new E}detectarEsquema(r,o={}){let d=o.tipoRima??"consonante",i=o.forma==="romance",g=new Map;for(let $ of r){let X=$.texto.trim();if(!X)continue;let D=X.split(/\s+/).pop()||"";if(!D)continue;g.set($.numero,this.rhymeEngine.obtenerClaves(D))}let h=r.map(($)=>$.numero).sort(($,X)=>$-X),f=new Map,n=[],k=new Map,b=["A","B","C","D","E","F","G","H","I","J","K","L","M","N"],t=0;for(let $ of h){let X=g.get($);if(i){if(!X||$%2!==0||!X.vocales){if(f.set($,"·"),!n.includes($))n.push($);continue}let vr=`v:${X.vocales}`,l=k.get(vr);if(!l)l=b[t++%b.length],k.set(vr,l);f.set($,l);continue}if(!X){if(f.set($,"·"),!n.includes($))n.push($);continue}let D=d==="asonante"?X.vocales:X.completa,s=d==="asonante"?`v:${D}`:`c:${D}`,O=k.get(s);if(!O)O=b[t++%b.length],k.set(s,O);f.set($,O)}let _=new Map;for(let $ of f.values())if($!=="·")_.set($,(_.get($)||0)+1);for(let $ of h){let X=f.get($);if(X&&X!=="·"&&(_.get(X)||0)<2){if(f.set($,"·"),!n.includes($))n.push($)}}let w=this.formatEsquema(f,o.grupos),{forma:K,nombre:J,esClasica:_0,aviso:pr}=this.identificarForma(w,o.grupos,d);return{asignacion:f,patron:w,versosSueltos:n,esClasico:_0,nombreClasico:J,forma:K,aviso:pr}}formatEsquema(r,o){return(o??[[1,2,3,4],[5,6,7,8],[9,10,11],[12,13,14]]).map((i)=>{return i.map((g)=>r.get(g)||"·").join("")}).join(" ")}identificarForma(r,o,d="consonante"){let c=r.replace(/\s+/g," ").trim(),i=c.split(" ").join(""),g=(h,f,n,k)=>({forma:f,nombre:n,esClasica:h,esClasico:h,aviso:k});if(d!=="asonante"){let h=[{patron:"ABBA ABBA CDC DCD",nombre:"Soneto (Petrarquista)"},{patron:"ABBA ABBA CDE CDE",nombre:"Soneto"},{patron:"ABBA ABBA CDE DCE",nombre:"Soneto (variante)"},{patron:"ABBA ABBA CDE EDC",nombre:"Soneto (variante)"},{patron:"ABBA ABBA CDE DEC",nombre:"Soneto (variante)"},{patron:"ABBA ABBA CDE CED",nombre:"Soneto (variante)"},{patron:"ABBA ABBA CCD EED",nombre:"Soneto (variante)"},{patron:"ABAB ABAB CDC DCD",nombre:"Soneto isabelino (Shakespeare)"},{patron:"ABAB ABAB CDE CDE",nombre:"Soneto isabelino (variante)"}];for(let n of h)if(c===n.patron)return g(!0,"soneto",n.nombre);let f=c.split(" ");if(f.length===4){let[n,k,b,t]=f,_=(w)=>w.length===4&&w[0]===w[3]&&w[1]===w[2]&&w[0]!==w[1];if(_(n)&&_(k)&&n===k&&b.length===3&&t.length===3)return g(!0,"soneto","Soneto (variante libre)")}}if(i==="ABBA")return g(!0,"redondilla","Redondilla");if(i==="ABAB")return g(!0,"cuarteta","Cuarteta");if(i==="ABBAACCDDC")return g(!0,"decima","Décima (Espinela)");if(this.pareceOctava(c))return g(!0,"octava","Octava real");if(this.pareceOctavaImperfecta(c))return g(!1,"octava","Octava real (pareado reutilizado)","El pareado final debe usar una rima nueva (C ≠ A, B)");if(this.pareceRomance(i))return g(!0,"romance","Romance");if(this.pareceLetrilla(c))return g(!0,"letrilla","Letrilla");return g(!1)}pareceRomance(r){let o=r.split("");if(o.length<4)return!1;let d="",c=!1;for(let i=0;i<o.length;i++){let g=o[i];if((i+1)%2===0){if(g==="·")return!1;if(c=!0,!d)d=g;else if(g!==d)return!1}else if(g!=="·"&&g!=="-")return!1}return c&&d!==""}clasificarOctava(r){if(r.length!==8)return"no";let o=r[0],d=r[1],c=r[6];if(r[2]!==o||r[4]!==o)return"no";if(r[3]!==d||r[5]!==d)return"no";if(r[7]!==c)return"no";if(o===d)return"no";if(c===o||c===d)return"imperfecta";return"perfecta"}pareceOctava(r){let o=r.split(" ").filter(Boolean),d=r.split(" ").join("");if(o.length>=1&&o.every((c)=>this.clasificarOctava(c)==="perfecta"))return!0;if(d.length>=1&&this.clasificarOctava(d)==="perfecta")return!0;return!1}pareceOctavaImperfecta(r){let o=r.split(" ").filter(Boolean),d=r.split(" ").join("");if(o.length>=1&&o.every((c)=>this.clasificarOctava(c)==="imperfecta"))return!0;if(d.length>=1&&this.clasificarOctava(d)==="imperfecta")return!0;return!1}pareceLetrilla(r){let o=r.split(" ").filter(Boolean);if(o.length<3)return!1;let d=o[0];if(!d||d.includes("·")&&d.length<=1)return!1;if(d.includes("·"))return!1;if(d.length<2||d.length>4)return!1;let c=o[1].length;if(c!==4)return!1;for(let i of o.slice(2))if(i.length!==c)return!1;return!0}}class r0{analyzer;rhymeEngine;schemeEngine;eventBus;pendingAnalysis=!1;forma={id:"soneto"};lastAnalysis=new Map;lastEsquema;dirtyVersos=new Set;textosVersos=new Map;hiatosForzados=new Map;constructor(r){this.analyzer=ko(),this.rhymeEngine=new E,this.schemeEngine=new sr,this.eventBus=r,this.eventBus.on("verso:input",({numero:o,texto:d})=>{this.textosVersos.set(o,d),this.dirtyVersos.add(o),this.scheduleAnalysis()}),this.eventBus.on("hiato:toggle",({numero:o,silabaIndex:d})=>{let c=this.hiatosForzados.get(o)||[],i=c.indexOf(d);if(i>=0)c.splice(i,1);else c.push(d);this.hiatosForzados.set(o,c),this.dirtyVersos.add(o),this.scheduleAnalysis()})}setForma(r){this.forma=r,this.forceReanalyze()}scheduleAnalysis=co(()=>{this.runAnalysis()},300);async runAnalysis(){if(this.pendingAnalysis||this.dirtyVersos.size===0)return;this.pendingAnalysis=!0;let r=[...this.dirtyVersos];this.eventBus.emit("analysis:start",{versos:r});try{let o=Math.max(...this.textosVersos.keys(),0),d=Jr(this.forma,o),c=r.map((f)=>{let n=oo(this.forma,f,o);return{numero:f,texto:this.textosVersos.get(f)||"",hiatoForzado:this.hiatosForzados.get(f)||[],opts:n}}),i=await this.analyzer.analyze({type:"ANALYZE",payload:{versos:c}});for(let[f,n]of i.payload)this.lastAnalysis.set(f,n);let h=[...this.textosVersos.keys()].sort((f,n)=>f-n).map((f)=>({id:String(f),numero:f,texto:this.textosVersos.get(f)||"",analysis:this.lastAnalysis.get(f)}));this.lastEsquema=this.schemeEngine.detectarEsquema(h,{tipoRima:this.forma.tipoRima,forma:this.forma.id,grupos:d}),this.eventBus.emit("analysis:complete",{analysis:this.lastAnalysis,esquema:this.lastEsquema}),this.dirtyVersos.clear()}catch(o){console.error("[AnalysisService] Error en análisis:",o),this.eventBus.emit("ui:toast",{message:"Error al analizar el verso",level:"error"})}finally{this.pendingAnalysis=!1}}loadVersos(r){for(let o of r)this.textosVersos.set(o.numero,o.texto),this.dirtyVersos.add(o.numero);this.scheduleAnalysis()}reset(){this.lastAnalysis.clear(),this.textosVersos.clear(),this.hiatosForzados.clear(),this.dirtyVersos.clear(),this.lastEsquema=void 0}getAnalysis(r){return this.lastAnalysis.get(r)}getEsquema(){return this.lastEsquema}forceReanalyze(){for(let r of this.textosVersos.keys())this.dirtyVersos.add(r);this.scheduleAnalysis()}destroy(){this.analyzer.terminate()}}class o0{storage;eventBus;dirtyVersos=new Set;lastSoneto=null;getCurrentSoneto;constructor(r,o,d){this.eventBus=r,this.storage=o,this.getCurrentSoneto=d,this.eventBus.on("verso:input",({numero:c})=>{this.dirtyVersos.add(c)}),this.eventBus.on("verso:blur",()=>{this.flush()}),window.addEventListener("beforeunload",()=>{this.flush(!0)}),setInterval(()=>{if(this.dirtyVersos.size>0)this.flush()},30000)}flush(r=!1){if(this.dirtyVersos.size===0)return;let o=this.getCurrentSoneto();if(o){if(r)try{let d=JSON.stringify({soneto:o,savedAt:Date.now()});localStorage.setItem("el-taller:soneto-actual",d)}catch{}else this.storage.autoSave(o);this.lastSoneto=o}this.dirtyVersos.clear()}saveNow(){this.flush()}destroy(){this.flush()}}function mo(r){let o="";for(let d of r){let c=d.charCodeAt(0);if(c===40||c===41||c===92)o+="\\"+d;else if(c>=32&&c<=126)o+=d;else if(c>=161&&c<=255)o+="\\"+c.toString(8);else o+="?"}return o}var Kr=595.28,to=841.89,Hr=72,d0=Kr/2;function bo(r,o,d){let c=r.length*d*0.55,i=d0-c/2;return`1 0 0 1 ${Math.max(Hr,Math.min(i,Kr-Hr-c)).toFixed(2)} ${o.toFixed(2)} Tm
(${mo(r)}) Tj`}function hd(r){let o=C(r.forma??"soneto"),d=r.versos.map((i,g)=>({id:String(g+1),numero:g+1,texto:i.texto})),c=dr(o,d);if(o.modo==="serie"){let i=c.flatMap((h)=>h.versos.map((f)=>f.texto)).filter((h)=>h.trim()),g=[];for(let h=0;h<i.length;h+=4)g.push(i.slice(h,h+4));return g.filter((h)=>h.length>0)}if(o.modo==="estrofa"){if(o.estrofas.length<=1)return c.map((n)=>n.versos.map((k)=>k.texto).filter((k)=>k.trim())).filter((n)=>n.length>0);let i=c[0],g=c.slice(1),h=i?.versos.map((n)=>n.texto).filter((n)=>n.trim())??[],f=[];if(h.length>0)f.push(h);for(let n of g){let k=n.versos.map((b)=>b.texto).filter((b)=>b.trim());if(k.length>0)f.push(k);if(h.length>0)f.push(h)}return f}return c.map((i)=>i.versos.map((g)=>g.texto).filter((g)=>g.trim())).filter((i)=>i.length>0)}function fd(r){let o=[],d=(k)=>o.push(k),c=to-85;if(r.titulo)d("BT"),d("/F1 18 Tf"),d(bo(r.titulo,c,18)),d("ET"),c-=30,d("q"),d("0.5 w"),d(`${Hr} ${c} m`),d(`${Kr-Hr} ${c} l`),d("S"),d("Q"),c-=16;let i=hd(r);for(let k=0;k<i.length;k++){let b=i[k];if(k>0){c-=10,d("BT"),d("/F1 9 Tf");let t=d0-18;d(`1 0 0 1 ${t.toFixed(2)} ${c.toFixed(2)} Tm`),d("(*   *   *) Tj"),d("ET"),c-=18}d("BT"),d("/F1 12 Tf");for(let t of b){let _=t.trim()||"·";d(bo(_,c,12)),c-=18}d("ET")}d("BT"),d("/F1 9 Tf");let g=60,h="-- El Taller",f=h.length*9*0.55,n=d0-f/2;return d(`1 0 0 1 ${n.toFixed(2)} ${g.toFixed(2)} Tm`),d(`(${mo(h)}) Tj`),d("ET"),o.join(`
`)}function wo(r){let o=fd(r),d=o.length,c={};c[1]="<< /Type /Catalog /Pages 2 0 R >>",c[2]="<< /Type /Pages /Kids [3 0 R] /Count 1 >>",c[3]=`<< /Type /Page /Parent 2 0 R
   /MediaBox [0 0 ${Kr} ${to}]
   /Contents 4 0 R
   /Resources << /Font << /F1 5 0 R >> >> >>`,c[4]=`<< /Length ${d} >>
stream
${o}
endstream`,c[5]="<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman /Encoding /WinAnsiEncoding >>";let i=Object.keys(c).map(Number).sort((k,b)=>k-b),g=`%PDF-1.4
`,h={};for(let k of i)h[k]=g.length,g+=`${k} 0 obj
${c[k]}
endobj
`;let f=g.length,n=i.length+1;g+=`xref
`,g+=`0 ${n}
`,g+=`0000000000 65535 f 
`;for(let k of i)g+=`${String(h[k]).padStart(10,"0")} 00000 n 
`;return g+=`trailer
`,g+=`<< /Size ${n} /Root 1 0 R >>
`,g+=`startxref
`,g+=`${f}
`,g+="%%EOF",new TextEncoder().encode(g)}class c0{formatAsText(r){let o=C(r.forma),d=[];if(r.titulo)d.push(`${r.titulo}
${"═".repeat(r.titulo.length)}`);let c=dr(o,r.versos);if(o.modo==="serie"){let i=c.map((g)=>g.versos.map((h)=>h.texto).join(`
`)).join(`
`);if(i)d.push(i);return d.join(`

`)}if(o.modo==="estrofa"){if(o.estrofas.length<=1){for(let f of c){let n=f.versos.map((k)=>k.texto).join(`
`);if(n)d.push(n)}return d.join(`

`)}let i=c[0],g=c.slice(1),h=i?.versos.map((f)=>f.texto).join(`
`)||"";if(h)d.push(h);for(let f of g){let n=f.versos.map((k)=>k.texto).join(`
`);if(n)d.push(n);if(h)d.push(h)}return d.join(`

`)}for(let i of c){let g=i.versos.map((h)=>h.texto).join(`
`);if(g)d.push(g)}return d.join(`

`)}exportToTxt(r){let o=this.formatAsText(r),d=new Blob([o],{type:"text/plain;charset=utf-8"}),c=URL.createObjectURL(d),i=document.createElement("a");i.href=c,i.download=this.getFileName(r),i.click(),URL.revokeObjectURL(c)}exportToPdf(r){let o=wo(r),d=new Blob([o.buffer],{type:"application/pdf"}),c=URL.createObjectURL(d),i=document.createElement("a");i.href=c,i.download=this.getFileName(r).replace(/\.txt$/,".pdf"),i.click(),URL.revokeObjectURL(c)}async copyToClipboard(r){try{let o=this.formatAsText(r);return await navigator.clipboard.writeText(o),!0}catch{try{let o=document.createElement("textarea");return o.value=this.formatAsText(r),o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),!0}catch{return!1}}}getFileName(r){if(r.titulo)return`${r.titulo.toLowerCase().replace(/[^a-záéíóúüñ\s]/g,"").trim().replace(/\s+/g,"-").slice(0,50)||"poema"}.txt`;return`poema-${new Date(r.createdAt).toISOString().slice(0,10)}.txt`}}class i0 extends y{constructor(){super(...arguments);this.numero=1;this.texto="";this.isActive=!1}static styles=B`
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
  `;firstUpdated(){this.actualizarTextoEnDOM()}updated(r){if(r.has("texto")&&this.editorRef)this.actualizarTextoEnDOM()}actualizarTextoEnDOM(){if(!this.editorRef)return;let r=this.texto||"";if(this.editorRef.textContent!==r)this.editorRef.textContent=r}render(){let r=this.getEstadoClass(),o=this.analysis&&this.texto.trim(),d=o&&this.analysis.errores.length>0;return a`
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
          <div class="verso-metrica ${r}">
            ${this.renderMetrica()}
          </div>
        </div>
        <div class="verso-estado ${r}">
          ${o?d?a`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`:a`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`:""}
        </div>
      </div>
    `}getEstadoClass(){if(!this.analysis||!this.texto.trim())return"";if(this.analysis.errores.length>0)return"verso-metrica--error";if(this.analysis.advertencias&&this.analysis.advertencias.length>0)return"verso-metrica--warning";return"verso-metrica--ok"}renderMetrica(){if(!this.analysis||!this.texto.trim())return"";let r=[];if(r.push(`${this.analysis.numSilabasMetricas} síl.`),this.analysis.tipoVerso&&this.analysis.tipoVerso!=="no_endecasilabo")r.push(`· ${this.analysis.tipoVerso}`);if(this.analysis.errores.length>0)r.push(`· ${this.analysis.errores[0].mensaje}`);else if(this.analysis.advertencias&&this.analysis.advertencias.length>0)r.push(`· ${this.analysis.advertencias[0].mensaje}`);return r.join(" ")}renderEstado(){if(!this.analysis||!this.texto.trim())return"";if(this.analysis.errores.length>0)return"✗";return"✓"}onInput(){let r=this.editorRef.textContent||"";this.dispatchEvent(new CustomEvent("verso-input",{detail:{numero:this.numero,texto:r},bubbles:!0,composed:!0}))}onBlur(){this.dispatchEvent(new CustomEvent("verso-blur",{detail:{numero:this.numero},bubbles:!0,composed:!0}))}onFocus(){this.dispatchEvent(new CustomEvent("verso-focus",{detail:{numero:this.numero},bubbles:!0,composed:!0}))}onKeyDown(r){if(r.key==="Enter")r.preventDefault()}}x([m({type:Number})],i0.prototype,"numero",void 0),x([m({type:String})],i0.prototype,"texto",void 0),x([m({type:Object})],i0.prototype,"analysis",void 0),x([m({type:Boolean})],i0.prototype,"isActive",void 0),x([e0(".verso-editor")],i0.prototype,"editorRef",void 0),i0=x([Y("verso-line")],i0);class g0 extends y{constructor(){super(...arguments);this.estrategia="";this.open=!1}static styles=B`
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
  `;render(){return a`
      <div class="estrategia-container">
        <button class="estrategia-toggle" @click=${this.toggle} aria-label="Mostrar/ocultar estrategia del poema">
          <svg class="arrow ${this.open?"arrow--open":""}" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          Estrategia del poema
          ${!this.open&&this.estrategia.trim()?a`<span style="color:var(--color-ink-muted); font-weight: 400; text-transform: none; letter-spacing: normal; font-family: var(--font-serif); font-style: italic; font-size: var(--font-size-caption);">— ${this.truncate(this.estrategia)}</span>`:""}
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
    `}toggle(){this.open=!this.open}truncate(r){return r.length>55?r.slice(0,55)+"…":r}onInput(r){let o=r.target;this.dispatchEvent(new CustomEvent("estrategia-change",{detail:{estrategia:o.value},bubbles:!0,composed:!0}))}}x([m({type:String})],g0.prototype,"estrategia",void 0),x([m({type:Boolean})],g0.prototype,"open",void 0),g0=x([Y("estrategia-line")],g0);class h0 extends y{constructor(){super(...arguments);this.forma={id:"soneto"};this.versos=[];this.titulo="";this.estrategia="";this.activeVerso=null}static styles=B`
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
  `;render(){let r=dr(this.forma,this.versos);return a`
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
          ${this.forma.esquemaReferencia?a`<span class="esquema-badge">${this.forma.esquemaReferencia}</span>`:""}
          <span class="esquema-badge">${this.forma.medidaDescripcion}</span>
        </div>

        <estrategia-line
          .estrategia=${this.estrategia}
          @estrategia-change=${this.onEstrategiaChange}
        ></estrategia-line>

        ${r.map((o,d)=>a`
          <div class="parte-container">
            <div class="parte-label">
              ${o.nombre}
              ${o.tipo==="estribillo"?a`<span class="parte-label__tag">(se repite tras cada copla)</span>`:""}
            </div>
            ${o.versos.map((c)=>a`
              <verso-line
                .numero=${c.numero}
                .texto=${c.texto||""}
                .analysis=${c.analysis}
                .isActive=${this.activeVerso===c.numero}
                @verso-input=${this.onVersoInput}
                @verso-blur=${this.onVersoBlur}
                @verso-focus=${this.onVersoFocus}
                @hiato-toggle=${this.onHiatoToggle}
              ></verso-line>
            `)}
          </div>
          ${d<r.length-1?a`<div class="parte-separator"></div>`:""}
        `)}

        ${this.renderControls()}
      </div>
    `}renderControls(){if(this.forma.modo==="serie"){let{min:r,max:o}=ur(this.forma),d=this.versos.length;return a`
        <div class="editor-controls">
          <button class="control-btn" ?disabled=${d>=o} @click=${this.onVersoAdd} title="Añadir un verso">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            verso
          </button>
          <button class="control-btn" ?disabled=${d<=r} @click=${this.onVersoRemove} title="Quitar el último verso">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
            verso
          </button>
        </div>
      `}if(this.forma.modo==="estrofa"){let{max:r}=ur(this.forma),o=this.versos.length,d=this.forma.versosIniciales,i=(this.forma.estrofas[this.forma.estrofas.length-1]?.nombre??"estrofa").toLowerCase();return a`
        <div class="editor-controls">
          <button class="control-btn" ?disabled=${o>=r} @click=${this.onEstrofaAdd} title="Añadir ${i}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            estrofa
          </button>
          <button class="control-btn" ?disabled=${o<=d} @click=${this.onEstrofaRemove} title="Quitar la última ${i}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
            estrofa
          </button>
        </div>
      `}return a``}getVerso(r){return this.versos.find((o)=>o.numero===r)}onTituloInput(r){let o=r.target;this.dispatchEvent(new CustomEvent("titulo-change",{detail:{titulo:o.value},bubbles:!0,composed:!0}))}onEstrategiaChange(r){r.stopPropagation();let{estrategia:o}=r.detail;this.dispatchEvent(new CustomEvent("estrategia-change",{detail:{estrategia:o},bubbles:!0,composed:!0}))}onVersoInput(r){r.stopPropagation();let{numero:o,texto:d}=r.detail;this.dispatchEvent(new CustomEvent("verso-input",{detail:{numero:o,texto:d},bubbles:!0,composed:!0}))}onVersoBlur(r){r.stopPropagation(),this.dispatchEvent(new CustomEvent("verso-blur",{detail:r.detail,bubbles:!0,composed:!0}))}onVersoFocus(r){r.stopPropagation();let{numero:o}=r.detail;this.activeVerso=o,this.dispatchEvent(new CustomEvent("verso-focus",{detail:{numero:o},bubbles:!0,composed:!0}))}onHiatoToggle(r){r.stopPropagation(),this.dispatchEvent(new CustomEvent("hiato-toggle",{detail:r.detail,bubbles:!0,composed:!0}))}onVersoAdd(){this.dispatchEvent(new CustomEvent("verso-add",{bubbles:!0,composed:!0}))}onVersoRemove(){this.dispatchEvent(new CustomEvent("verso-remove",{bubbles:!0,composed:!0}))}onEstrofaAdd(){this.dispatchEvent(new CustomEvent("estrofa-add",{bubbles:!0,composed:!0}))}onEstrofaRemove(){this.dispatchEvent(new CustomEvent("estrofa-remove",{bubbles:!0,composed:!0}))}focusVerso(r){this.activeVerso=r,this.shadowRoot?.querySelector(`verso-line[numero="${r}"]`)?.querySelector("[contenteditable]")?.focus()}}x([m({type:Object})],h0.prototype,"forma",void 0),x([m({type:Array})],h0.prototype,"versos",void 0),x([m({type:String})],h0.prototype,"titulo",void 0),x([m({type:String})],h0.prototype,"estrategia",void 0),x([m({type:Number})],h0.prototype,"activeVerso",void 0),x([s0("verso-line")],h0.prototype,"versoLines",void 0),h0=x([Y("soneto-editor")],h0);class f0 extends y{constructor(){super(...arguments);this.showErrors=!0;this.silabasObjetivo=11}static styles=B`
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
  `;render(){if(!this.analysis)return a`<span class="metric--muted">· · ·</span>`;let r=[];if(r.push({text:`${this.analysis.numSilabasMetricas} síl.`,class:this.analysis.numSilabasMetricas===this.silabasObjetivo?"metric--ok":"metric--error"}),this.silabasObjetivo===11&&this.analysis.tipoVerso&&this.analysis.tipoVerso!=="no_endecasilabo")r.push({text:this.analysis.tipoVerso,class:"metric--muted"});if(this.analysis.acentoFinal)r.push({text:this.analysis.acentoFinal,class:"metric--muted"});return a`
      <div>
        <span class="${r[0]?.class||"metric--muted"}">
          ${r.map((o)=>o.text).join(" · ")}
        </span>
        ${this.showErrors&&this.analysis.errores.length>0?a`
          <div class="error-list">
            ${this.analysis.errores.map((o)=>a`
              <span class="metric--error">${o.mensaje}</span>
            `)}
          </div>
        `:""}
        ${this.showErrors&&this.analysis.advertencias&&this.analysis.advertencias.length>0?a`
          <div class="error-list">
            ${this.analysis.advertencias.map((o)=>a`
              <span class="metric--warning">${o.mensaje}</span>
            `)}
          </div>
        `:""}
      </div>
    `}}x([m({type:Object})],f0.prototype,"analysis",void 0),x([m({type:Boolean})],f0.prototype,"showErrors",void 0),x([m({type:Number})],f0.prototype,"silabasObjetivo",void 0),f0=x([Y("verse-metrics")],f0);class n0 extends y{constructor(){super(...arguments);this.sinalefas=[]}static styles=B`
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
  `;render(){return a`
      <svg>
        ${this.renderArcs()}
      </svg>
    `}renderArcs(){if(!this.editorElement||!this.sinalefas.length)return"";let r=this.editorElement.getBoundingClientRect();return this.sinalefas.filter((d)=>!d.descartada).map((d)=>{let c=this.editorElement.querySelectorAll("[data-silaba]"),i=c[d.silabaAnterior],g=c[d.silabaSiguiente];if(!i||!g)return"";let h=i.getBoundingClientRect(),f=g.getBoundingClientRect(),n=h.right-r.left,k=f.left-r.left,b=h.bottom-r.top+2;return a`
        <path
          d="M ${n} ${b} Q ${(n+k)/2} ${b+10}, ${k} ${b}"
          fill="none"
          stroke="#8B7355"
          stroke-width="1.5"
          data-silaba="${d.silabaAnterior}"
          @click=${()=>this.onArcClick(d.silabaAnterior)}
        />
      `})}onArcClick(r){this.dispatchEvent(new CustomEvent("sinalefa-click",{detail:{silabaIndex:r},bubbles:!0,composed:!0}))}updated(r){if(r.has("sinalefas")||r.has("editorElement"))this.requestUpdate()}}x([m({type:Array})],n0.prototype,"sinalefas",void 0),x([m({type:Object})],n0.prototype,"editorElement",void 0),n0=x([Y("sinalefa-overlay")],n0);class x0 extends y{constructor(){super(...arguments);this.versos=[];this.silabasObjetivo=11}static styles=B`
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
  `;render(){let r=this.getPosiciones(),o=this.analysisMap&&this.analysisMap.size>0;return a`
      <div class="panel-title">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
        Métrica
        <span class="panel-title__count">${this.silabasObjetivo}</span>
      </div>
      ${!o||r.length===0?a`<div class="no-data">Escribe para ver análisis</div>`:a`<div class="metrics-list">${this.renderItems(r)}</div>`}
    `}getPosiciones(){if(this.versos.length>0)return this.versos.map((r)=>r.numero).sort((r,o)=>r-o);return Array.from({length:14},(r,o)=>o+1)}renderItems(r){let o=[];for(let d of r){let c=this.analysisMap?.get(d);if(!c)o.push(a`
          <div class="metrics-item">
            <span class="metrics-item__numero">${d}</span>
            <span class="metrics-item__tipo">—</span>
          </div>
        `);else{let i=c.numSilabasMetricas===this.silabasObjetivo?"metrics-item__silabas--ok":"metrics-item__silabas--error",g=this.silabasObjetivo===11&&c.tipoVerso&&c.tipoVerso!=="no_endecasilabo",h=[...c.errores.map((f)=>f.mensaje),...(c.advertencias??[]).map((f)=>f.mensaje)];o.push(a`
          <div class="metrics-item" title="${h.join(" · ")}">
            <span class="metrics-item__numero">${d}</span>
            <span class="metrics-item__silabas ${i}">
              ${c.numSilabasMetricas}
            </span>
            <span class="metrics-item__tipo">
              ${g?c.tipoVerso:c.errores.length>0?a`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`:""}
            </span>
          </div>
        `)}}return o}}x([m({type:Object})],x0.prototype,"analysisMap",void 0),x([m({type:Array})],x0.prototype,"versos",void 0),x([m({type:Number})],x0.prototype,"silabasObjetivo",void 0),x0=x([Y("metrics-panel")],x0);class k0 extends y{constructor(){super(...arguments);this.versos=[];this.grupos=[]}static styles=B`
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
  `;render(){if(!this.esquema)return a`
        <div class="panel-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
          Rimas
        </div>
        <div class="no-data">Completa versos para ver el esquema</div>
      `;let r=this.getPartes();return a`
      <div class="panel-title">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        Rimas
      </div>

      <div class="patron-display">${this.renderPatronColoreado(this.esquema.patron)}</div>

      ${this.esquema.esClasico?a`<div class="clasico-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            ${this.esquema.nombreClasico||"Forma clásica"}
          </div>`:this.esquema.aviso?a`<div class="aviso-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              ${this.esquema.nombreClasico||"Casi una forma clásica"}
              <span title="${this.esquema.aviso}">· ${this.esquema.aviso}</span>
            </div>`:a`<div class="libre-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              Esquema libre
            </div>`}

      ${r.map((o)=>a`
        <div class="scheme-part">
          ${o.map((d)=>{let c=this.esquema?.asignacion.get(d)||"·",i=c.toLowerCase(),g=c!=="·"&&/^[a-h]$/.test(i)?`scheme-line__letra--rhyme-${i}`:"scheme-line__letra--pending",h=this.versos.find((n)=>n.numero===d),f=h?.texto?h.texto.slice(0,20)+(h.texto.length>20?"…":""):"";return a`
              <div class="scheme-line">
                <span class="scheme-line__numero">${d}</span>
                <span class="scheme-line__letra ${g}">
                  ${c}
                </span>
                <span class="scheme-line__texto">${f||"—"}</span>
              </div>
            `})}
        </div>
      `)}
    `}renderPatronColoreado(r){return r.split("").map((o)=>{let d=o.toLowerCase();if(/^[a-h]$/.test(d))return a`<span class="rhyme-${d}">${o}</span>`;return o})}getPartes(){if(this.grupos&&this.grupos.length>0)return this.grupos;return[[1,2,3,4],[5,6,7,8],[9,10,11],[12,13,14]]}}x([m({type:Object})],k0.prototype,"esquema",void 0),x([m({type:Array})],k0.prototype,"versos",void 0),x([m({type:Array})],k0.prototype,"grupos",void 0),k0=x([Y("rhyme-scheme-panel")],k0);class a0 extends y{constructor(){super(...arguments);this.total=14;this.completados=0;this.conErrores=0}static styles=B`
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
  `;render(){let r=Math.max(0,this.completados-this.conErrores),o=this.completados===this.total&&this.conErrores===0,d=[];for(let c=0;c<this.total;c++){let i="segment";if(c<r)i+=" segment--complete";else if(c<r+this.conErrores)i+=" segment--error";d.push(a`<div class="${i}"></div>`)}return a`
      <div class="progress-bar__track ${o?"progress-bar--all-complete":""}">
        ${d}
      </div>
      <div class="progress-bar__text">
        <span class="progress-bar__count">${this.completados}</span>
        <span class="progress-bar__total">/ ${this.total}</span>
        <span class="progress-bar__label">versos</span>
        ${this.conErrores>0?a`<span class="progress-bar__warnings">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              ${this.conErrores}
            </span>`:""}
      </div>
    `}}x([m({type:Number})],a0.prototype,"total",void 0),x([m({type:Number})],a0.prototype,"completados",void 0),x([m({type:Number})],a0.prototype,"conErrores",void 0),a0=x([Y("progress-bar")],a0);class b0 extends y{constructor(){super(...arguments);this.messages=[]}static styles=B`
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
  `;nextId=0;show(r,o="info"){let d=++this.nextId;this.messages=[...this.messages,{id:d,message:r,level:o}],setTimeout(()=>{this.dismissToast(d)},3000)}dismissToast(r){this.messages=this.messages.filter((o)=>o.id!==r)}render(){return a`
      ${this.messages.map((r)=>a`
        <div class="toast toast--${r.level}" @click=${()=>this.dismissToast(r.id)}>
          ${r.message}
        </div>
      `)}
    `}}x([Z()],b0.prototype,"messages",void 0),b0=x([Y("app-toast")],b0);class m0 extends y{constructor(){super(...arguments);this.title="";this.open=!1}static styles=B`
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
  `;render(){if(!this.open)return a``;return a`
      <div class="modal" @click=${(r)=>r.stopPropagation()}>
        ${this.title?a`<div class="modal__title">${this.title}</div>`:""}
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
    `}onConfirm(){this.dispatchEvent(new CustomEvent("confirm",{bubbles:!0,composed:!0}))}onCancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}onBackdropClick(){this.onCancel()}}x([m({type:String})],m0.prototype,"title",void 0),x([m({type:Boolean})],m0.prototype,"open",void 0),m0=x([Y("app-modal")],m0);class t0 extends y{constructor(){super(...arguments);this.query="";this.tipoRima="consonante";this.categoria="";this.numSilabas=0}static styles=B`
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
  `;debounceTimer=null;onInput(r){let o=r.target.value;if(this.query=o,this.debounceTimer)clearTimeout(this.debounceTimer);this.debounceTimer=setTimeout(()=>{this.emitSearch()},200)}clearSearch(){this.query="",this.emitSearch()}setTipoRima(r){this.tipoRima=r,this.emitSearch()}setCategoria(r){this.categoria=this.categoria===r?"":r,this.emitSearch()}setNumSilabas(r){this.numSilabas=this.numSilabas===r?0:r,this.emitSearch()}emitSearch(){let r={tipoRima:this.tipoRima};if(this.categoria)r.categoria=this.categoria;if(this.numSilabas>0)r.numSilabas=this.numSilabas;this.dispatchEvent(new CustomEvent("search-change",{detail:{query:this.query,filtros:r},bubbles:!0,composed:!0}))}render(){let r=[{key:"",label:"Todas"},{key:"sustantivo",label:"Sustantivo"},{key:"verbo",label:"Verbo"},{key:"adjetivo",label:"Adjetivo"},{key:"adverbio",label:"Adverbio"}],o=[1,2,3,4,5];return a`
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
        ${this.query?a`
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
          ${r.map((d)=>a`
            <button
              class="chip ${this.categoria===d.key?"chip--active":""}"
              @click=${()=>this.setCategoria(d.key)}
            >
              ${d.label}
            </button>
          `)}
        </div>
      </div>

      <div class="filtros-section">
        <span class="filtros-label">Sílabas</span>
        <div class="silabas-filtro">
          ${o.map((d)=>a`
            <button
              class="chip silaba-chip ${this.numSilabas===d?"chip--active":""}"
              @click=${()=>this.setNumSilabas(d)}
            >
              ${d}
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
    `}}x([m({type:String})],t0.prototype,"query",void 0),x([m({type:String})],t0.prototype,"tipoRima",void 0),x([m({type:String})],t0.prototype,"categoria",void 0),x([m({type:Number})],t0.prototype,"numSilabas",void 0),t0=x([Y("rhyme-search-input")],t0);class w0 extends y{constructor(){super(...arguments);this.results=[];this.loading=!1;this.page=0;this.totalPages=0;this.totalResults=0}static styles=B`
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
  `;onSelect(r){this.dispatchEvent(new CustomEvent("rhyme-select",{detail:{palabra:r},bubbles:!0,composed:!0}))}gotoPage(r){if(r<0||r>=this.totalPages)return;this.dispatchEvent(new CustomEvent("page-change",{detail:{page:r},bubbles:!0,composed:!0}))}render(){if(this.loading)return a`
        <div class="results-container">
          <div class="loading">
            ${[1,2,3,4,5,6,7,8].map((o)=>a`
              <div class="skeleton-row skeleton-row--${o%3===0?"short":o%2===0?"long":"medium"}"></div>
            `)}
          </div>
        </div>
      `;if(this.results.length===0)return a`
        <div class="results-container">
          <div class="empty-state">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span class="empty-state-text">No se encontraron rimas</span>
          </div>
        </div>
      `;let r=this.agruparPorCategoria(this.results);return a`
      <div class="results-container">
        ${Array.from(r.entries()).map(([o,d])=>{let c=this.agruparPorCampo(d),i=c.size>1;return a`
            <div class="categoria-group">
              <div class="categoria-header">${o}</div>
              ${i?Array.from(c.entries()).map(([g,h])=>a`
                    <div class="campo-group">
                      <div class="campo-header">${g==="sin_campo"?"":g} (${h.length})</div>
                      ${h.map((f)=>this.renderItem(f))}
                    </div>
                  `):d.map((g)=>this.renderItem(g))}
            </div>
          `})}
        <div class="result-count">${this.totalResults} resultados</div>
      </div>
      ${this.totalPages>1?this.renderPagination():""}
    `}renderItem(r){return a`
      <div class="result-item" @click=${()=>this.onSelect(r.palabra)}>
        <span class="result-palabra">${r.palabra}</span>
        <span class="result-meta result-meta--categoria">(${r.categoria})</span>
        <span class="result-meta">${r.numSilabas} síl.</span>
        <span class="insert-arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </span>
      </div>
    `}renderPagination(){let o=Math.floor(2.5),d=Math.max(0,this.page-o),c=Math.min(this.totalPages,d+5);if(c-d<5)d=Math.max(0,c-5);let i=[];for(let g=d;g<c;g++)i.push(g);return a`
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

        ${i.map((g)=>a`
          <button
            class="pagination-btn ${g===this.page?"pagination-btn--active":""}"
            @click=${()=>this.gotoPage(g)}
          >${g+1}</button>
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
    `}agruparPorCategoria(r){let o=new Map;for(let d of r){let c=d.categoria||"otro";if(!o.has(c))o.set(c,[]);o.get(c).push(d)}return o}agruparPorCampo(r){let o=new Map;for(let d of r){let c=d.campoSemantico||"sin_campo";if(!o.has(c))o.set(c,[]);o.get(c).push(d)}return o}}x([m({type:Array})],w0.prototype,"results",void 0),x([m({type:Boolean})],w0.prototype,"loading",void 0),x([m({type:Number})],w0.prototype,"page",void 0),x([m({type:Number})],w0.prototype,"totalPages",void 0),x([m({type:Number})],w0.prototype,"totalResults",void 0),w0=x([Y("rhyme-result-list")],w0);class y0{db=null;async initialize(){if(this.db)return;return new Promise((r,o)=>{let d=indexedDB.open("ElTallerCorpus",1);d.onupgradeneeded=(c)=>{let i=c.target.result;if(!i.objectStoreNames.contains("palabras")){let g=i.createObjectStore("palabras",{keyPath:"palabra"});g.createIndex("terminacion","terminacion",{unique:!1}),g.createIndex("categoria","categoria",{unique:!1}),g.createIndex("campoSemantico","campoSemantico",{unique:!1})}},d.onsuccess=()=>{this.db=d.result,r()},d.onerror=()=>{o(d.error||Error("Error al abrir IndexedDB"))}})}async isPopulated(){if(!this.db)return!1;return new Promise((r)=>{try{let c=this.db.transaction("palabras","readonly").objectStore("palabras").count();c.onsuccess=()=>r(c.result>0),c.onerror=()=>r(!1)}catch{r(!1)}})}async importWords(r){if(!this.db)throw Error("CorpusDB no inicializada");let o=await this.getExistingKeys();for(let d=0;d<r.length;d+=500){let c=r.slice(d,d+500);await this.importBatch(c,o)}}async getExistingKeys(){return new Promise((r)=>{let c=this.db.transaction("palabras","readonly").objectStore("palabras").getAllKeys();c.onsuccess=()=>r(new Set(c.result.map((i)=>String(i)))),c.onerror=()=>r(new Set)})}async importBatch(r,o){return new Promise((d,c)=>{let i=this.db.transaction("palabras","readwrite"),g=i.objectStore("palabras");for(let h of r)if(!o.has(h.palabra))g.put(h),o.add(h.palabra);i.oncomplete=()=>d(),i.onerror=()=>c(i.error)})}async buscarPorTerminacion(r,o,d=0){if(!this.db)throw Error("CorpusDB no inicializada");let c=await this.getAllByIndex("terminacion",r,d);return this.aplicarFiltros(c,o)}async buscarPorTexto(r,o=200){if(!this.db)throw Error("CorpusDB no inicializada");if(!r||r.length<1)return[];let d=r.toLowerCase().trim(),c=[];return new Promise((i,g)=>{let h=this.db.transaction("palabras","readonly"),f=h.objectStore("palabras"),n=IDBKeyRange.bound(d,d+"￿"),k=f.openCursor(n);k.onsuccess=(b)=>{let t=b.target.result;if(t){if(c.push(t.value),o===0||c.length<o)t.continue()}},h.oncomplete=()=>i(c),h.onerror=()=>g(h.error)})}async buscarRimas(r,o="consonante",d){if(o==="consonante")return this.buscarPorTerminacion(r,d);let c=[...r.toLowerCase()].filter((h)=>"aeiouáéíóú".includes(h)).join("");if(!c)return[];let g=(await this.getAllByIndex("terminacion",r[0])).filter((h)=>{return[...h.terminacion.toLowerCase()].filter((n)=>"aeiouáéíóú".includes(n)).join("")===c});return this.aplicarFiltros(g,d)}async count(){if(!this.db)return 0;return new Promise((r)=>{let c=this.db.transaction("palabras","readonly").objectStore("palabras").count();c.onsuccess=()=>r(c.result),c.onerror=()=>r(0)})}close(){if(this.db)this.db.close(),this.db=null}getAllByIndex(r,o,d=500){return new Promise((c,i)=>{let g=this.db.transaction("palabras","readonly"),f=g.objectStore("palabras").index(r),n=IDBKeyRange.only(o),k=[],b=f.openCursor(n);b.onsuccess=(t)=>{let _=t.target.result;if(_){if(k.push(_.value),d===0||k.length<d)_.continue()}},g.oncomplete=()=>c(k),g.onerror=()=>i(g.error)})}aplicarFiltros(r,o){if(!o)return r;let d=r;if(o?.categoria)d=d.filter((c)=>c.categoria===o.categoria);if(o?.campoSemantico)d=d.filter((c)=>c.campoSemantico===o.campoSemantico);if(o?.numSilabas!==void 0&&o.numSilabas>0)d=d.filter((c)=>c.numSilabas===o.numSilabas);return d}}var nd=500,xd="data/corpus/palabras.json";class e{static async ensureLoaded(r){if(await r.isPopulated())return;document.dispatchEvent(new CustomEvent("corpus:loading-start",{detail:{message:"Cargando diccionario de rimas..."}}));try{let d=await fetch(xd);if(!d.ok)throw Error(`Error al cargar corpus: ${d.status} ${d.statusText}`);await e.streamImport(r,d),document.dispatchEvent(new CustomEvent("corpus:ready"))}catch(d){console.error("[CorpusLoader] Error al cargar corpus:",d),document.dispatchEvent(new CustomEvent("corpus:error",{detail:{message:"Error al cargar el diccionario de rimas"}}))}}static async streamImport(r,o){let d=o.body;if(!d)throw Error("Response body is null");let c=0,i=[],g=new Set,n=d.pipeThrough(new DecompressionStream("gzip")).pipeThrough(new TextDecoderStream).getReader(),k="";try{while(!0){let{done:b,value:t}=await n.read();if(b)break;k+=t;let _=k.split(`
`);k=_.pop()||"";for(let w of _){if(!w.trim())continue;try{let K=JSON.parse(w);if(i.push(K),i.length>=nd)await r.importBatch(i,g),c+=i.length,e.reportProgress(c),i=[],await e.yieldToEventLoop()}catch{}}}if(k.trim())try{let b=JSON.parse(k);i.push(b)}catch{}if(i.length>0)await r.importBatch(i,g),c+=i.length,e.reportProgress(c)}finally{n.releaseLock()}}static reportProgress(r){document.dispatchEvent(new CustomEvent("corpus:progress",{detail:{progress:-1,loaded:r,total:0}}))}static async yieldToEventLoop(){if(typeof requestIdleCallback<"u")await new Promise((r)=>{requestIdleCallback(()=>r(),{timeout:500})});else await new Promise((r)=>setTimeout(r,0))}}class v0 extends y{constructor(){super(...arguments);this.open=!1;this.versoActivo=null;this.palabraActual="";this.corpusReady=!1;this.loading=!1;this.corpusWordsLoaded=0;this.results=[];this.searchQuery="";this.searchFiltros={};this.allResults=[];this.page=0}static styles=B`
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
  `;pageSize=50;db=null;rhymeEngine=new E;connectedCallback(){super.connectedCallback(),this.initCorpus(),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("corpus:progress",this.onCorpusProgress)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("corpus:progress",this.onCorpusProgress)}async initCorpus(){try{if(this.db=new y0,await this.db.initialize(),await e.ensureLoaded(this.db),this.corpusReady=!0,this.palabraActual)this.doSearch(this.palabraActual,this.searchFiltros)}catch(r){console.error("[RhymeBrowser] Error al inicializar corpus:",r)}}onKeyDown=(r)=>{if(r.key==="Escape"&&this.open)this.close()};onCorpusProgress=(r)=>{let{loaded:o}=r.detail;if(typeof o==="number")this.corpusWordsLoaded=o};close(){this.dispatchEvent(new CustomEvent("panel-close",{bubbles:!0,composed:!0}))}onSearchChange(r){let{query:o,filtros:d}=r.detail;if(this.searchQuery=o,this.searchFiltros=d,!o||o.length<1){this.results=[],this.allResults=[];return}this.page=0,this.doSearch(o,d)}get totalPages(){return Math.ceil(this.allResults.length/this.pageSize)}onPageChange(r){this.page=r.detail.page,this.updateResults()}updateResults(){let r=this.page*this.pageSize;this.results=this.allResults.slice(r,r+this.pageSize)}async doSearch(r,o){if(!this.db||!this.corpusReady)return;this.loading=!0;try{let d=this.rhymeEngine.extraerTerminacionPalabra(r);if(!d){this.results=[];return}let c=await this.db.buscarRimas(d,o.tipoRima||"consonante",o);this.allResults=c.map((i)=>({palabra:i.palabra,terminacion:i.terminacion,categoria:i.categoria,campoSemantico:i.campoSemantico,numSilabas:i.numSilabas,acento:i.acento})),this.updateResults()}catch(d){console.error("[RhymeBrowser] Error en búsqueda:",d),this.results=[]}finally{this.loading=!1}}onRhymeSelect(r){let{palabra:o}=r.detail;this.dispatchEvent(new CustomEvent("rhyme-insert",{detail:{palabra:o,verso:this.versoActivo},bubbles:!0,composed:!0}))}render(){if(!this.open)return a``;return a`
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

      ${this.versoActivo?a`
        <div class="active-verso">
          Verso ${this.versoActivo}${this.palabraActual?`: «${this.palabraActual}»`:""}
        </div>
      `:""}

      ${!this.corpusReady?a`
        <div class="loading-corpus">
          <div class="corpus-spinner"></div>
          <div class="corpus-loading-text">Preparando el diccionario de rimas…</div>
          <div class="corpus-loading-sub">642 mil palabras con todas sus conjugaciones</div>
          ${this.corpusWordsLoaded>0?a`
            <div class="corpus-loading-progress">
              ${this.corpusWordsLoaded.toLocaleString()} palabras indexadas
            </div>
          `:""}
          <div class="corpus-loading-note">
            Solo la primera vez — después será instantáneo
          </div>
        </div>
      `:a`
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
    `}}x([m({type:Boolean,reflect:!0})],v0.prototype,"open",void 0),x([m({type:Object})],v0.prototype,"versoActivo",void 0),x([m({type:String})],v0.prototype,"palabraActual",void 0),x([Z()],v0.prototype,"corpusReady",void 0),x([Z()],v0.prototype,"loading",void 0),x([Z()],v0.prototype,"corpusWordsLoaded",void 0),x([Z()],v0.prototype,"results",void 0),x([Z()],v0.prototype,"searchQuery",void 0),x([Z()],v0.prototype,"searchFiltros",void 0),x([Z()],v0.prototype,"allResults",void 0),x([Z()],v0.prototype,"page",void 0),v0=x([Y("rhyme-browser-panel")],v0);class z0 extends y{static styles=B`
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
  `;eventBus=new Pr;storage=new Sr;analysisService;autoSaveService;exportService=new c0;toastElement;constructor(){super();this.soneto=this.createEmptySoneto("soneto");this.forma=C("soneto");this.analysisMap=new Map;this.rhymePanelOpen=!1;this.selectedVerso=null;this.completados=0;this.conErrores=0;this.formSelectorOpen=!1;this.analysisService=new r0(this.eventBus),this.autoSaveService=new o0(this.eventBus,this.storage,()=>this.soneto)}connectedCallback(){super.connectedCallback();let r=this.storage.loadLastSoneto();if(r)this.soneto=this.migrarSonetoGuardado(r);if(this.aplicarForma(),this.soneto.versos.some((o)=>o.texto.trim()))this.analysisService.loadVersos(this.soneto.versos);this.eventBus.on("analysis:complete",({analysis:o,esquema:d})=>{this.analysisMap=o,this.esquema=d;let c=this.soneto.versos.map((i)=>({...i,analysis:o.get(i.numero)||i.analysis}));this.soneto={...this.soneto,versos:c},this.updateProgress()}),this.eventBus.on("ui:toast",({message:o,level:d})=>{this.showToast(o,d)}),this.eventBus.on("soneto:new",()=>{}),this.eventBus.on("export:txt",()=>{this.exportarTxt()}),this.eventBus.on("export:clipboard",()=>{this.copiarPortapapeles()}),document.addEventListener("keydown",this.onKeyDown.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.autoSaveService.destroy(),this.analysisService.destroy(),document.removeEventListener("keydown",this.onKeyDown.bind(this))}render(){let r=this.soneto.versos.length,o=Jr(this.forma,r);return a`
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
            .total=${r}
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
            .grupos=${o}
          ></rhyme-scheme-panel>
        </aside>
      </div>

      <div class="app-footer">
        <span>${this.forma.medidaDescripcion}</span>
        <span>${this.soneto.versos.filter((d)=>d.texto.trim()).length} / ${r} versos escritos</span>
      </div>

      ${this.formSelectorOpen?this.renderFormSelector():""}

      <app-toast></app-toast>
    `}renderFormSelector(){return a`
      <div class="form-selector-backdrop" @click=${this.cerrarSelector}>
        <div class="form-selector" @click=${(r)=>r.stopPropagation()} role="dialog" aria-label="Elegir forma poética">
          <div class="form-selector__ornament">❦</div>
          <div class="form-selector__title">Nueva composición</div>
          <div class="form-selector__sub">Elige una forma del Siglo de Oro español</div>
          <div class="form-selector__list">
            ${mr.map((r)=>a`
              <button class="form-option" @click=${()=>this.nuevoPoemaDeForma(r.id)}>
                <span class="form-option__name">${r.nombre}</span>
                <span class="form-option__desc">${r.descripcion}</span>
                ${r.esquemaReferencia?a`<span class="form-option__esquema">${r.esquemaReferencia}</span>`:""}
              </button>
            `)}
          </div>
          <div class="form-selector__actions">
            <button class="form-selector__cancel" @click=${this.cerrarSelector}>Cancelar</button>
          </div>
        </div>
      </div>
    `}createEmptySoneto(r){let o=C(r),d=crypto.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`,c=ro(o,d);return{id:d,forma:r,versos:c,createdAt:Date.now(),updatedAt:Date.now()}}migrarSonetoGuardado(r){let o=r.forma&&mr.some((i)=>i.id===r.forma)?r.forma:"soneto",d=C(o),c=Array.isArray(r.versos)?r.versos.map((i)=>({...i})):[];if(o==="soneto"&&c.length!==14)c=Array.from({length:14},(i,g)=>c[g]??{id:`${r.id}-v${g+1}`,numero:g+1,texto:""});return c=c.map((i,g)=>({...i,numero:g+1})),{...r,forma:o,versos:c,updatedAt:Date.now()}}aplicarForma(){this.forma=C(this.soneto.forma),this.analysisService.setForma(this.forma)}updateProgress(){let r=0,o=0;for(let d of this.soneto.versos)if(d.texto.trim()){r++;let c=this.analysisMap.get(d.numero);if(c&&c.errores.length>0)o++}this.completados=r,this.conErrores=o}renumberVersos(r){return r.map((o,d)=>({...o,numero:d+1}))}nuevoPoemaDeForma(r){if(this.completados>0)this.storage.saveToHistory(this.soneto);let o=this.createEmptySoneto(r);this.soneto=o,this.forma=C(r),this.analysisMap=new Map,this.esquema=void 0,this.completados=0,this.conErrores=0,this.selectedVerso=null,this.formSelectorOpen=!1,this.eventBus.emit("soneto:new",{}),this.analysisService.reset(),this.analysisService.setForma(this.forma),this.showToast(`Nuevo ${this.forma.nombre} creado`,"info")}abrirSelector(){this.formSelectorOpen=!0}cerrarSelector(){this.formSelectorOpen=!1}onVersoInput(r){let{numero:o,texto:d}=r.detail,c=this.soneto.versos.find((i)=>i.numero===o);if(c)c.texto=d,this.soneto.updatedAt=Date.now(),this.eventBus.emit("verso:input",{numero:o,texto:d})}onVersoBlur(r){let{numero:o}=r.detail;this.eventBus.emit("verso:blur",{numero:o})}onVersoFocus(r){let{numero:o}=r.detail;this.selectedVerso=o,this.eventBus.emit("verso:focus",{numero:o})}onTituloChange(r){this.soneto.titulo=r.detail.titulo}onEstrategiaChange(r){this.soneto.estrategia=r.detail.estrategia}onHiatoToggle(r){let{numero:o,silabaIndex:d}=r.detail;this.eventBus.emit("hiato:toggle",{numero:o,silabaIndex:d})}onVersoAdd(){let r=this.soneto.versos;if(r.length>=this.forma.versosMax)return;let o=r[r.length-1],d={id:`${this.soneto.id}-v${r.length+1}`,numero:r.length+1,texto:""};this.setVersos([...r,d]),this.showToast(`Verso ${d.numero} añadido`,"info")}onVersoRemove(){if(this.soneto.versos.length<=this.forma.versosMin)return;let r=this.soneto.versos.slice(0,-1);this.setVersos(r),this.showToast("Último verso eliminado","info")}onEstrofaAdd(){let r=this.forma;if(r.modo!=="estrofa")return;let o=r.estrofas[r.estrofas.length-1],d=o?.nVersos||8;if(this.soneto.versos.length+d>r.versosMax)return;let c=this.soneto.versos.length,i=[...this.soneto.versos];for(let g=0;g<d;g++)i.push({id:`${this.soneto.id}-v${c+g+1}`,numero:c+g+1,texto:""});this.setVersos(i),this.showToast(`Estrofa añadida (${o?.nombre??"estrofa"})`,"info")}onEstrofaRemove(){let r=this.forma;if(r.modo!=="estrofa")return;let o=r.versosIniciales;if(this.soneto.versos.length<=o)return;let d=r.estrofas[r.estrofas.length-1],c=d?.nVersos||8,i=this.soneto.versos.slice(0,Math.max(o,this.soneto.versos.length-c));this.setVersos(i),this.showToast(`Estrofa eliminada (${d?.nombre??"estrofa"})`,"info")}setVersos(r){let o=this.renumberVersos(r);this.soneto={...this.soneto,versos:o,updatedAt:Date.now()},this.analysisService.reset(),this.analysisService.loadVersos(o),this.updateProgress()}toggleRhymePanel(){this.rhymePanelOpen=!this.rhymePanelOpen,this.eventBus.emit("ui:panel-toggle",{panel:"rhyme-browser",open:this.rhymePanelOpen})}exportarTxt(){this.exportService.exportToTxt(this.soneto),this.showToast("Poema exportado como .txt","info")}exportarPdf(){this.exportService.exportToPdf(this.soneto),this.showToast("Poema exportado como PDF","info")}async copiarPortapapeles(){let r=await this.exportService.copyToClipboard(this.soneto);this.showToast(r?"Poema copiado al portapapeles":"Error al copiar al portapapeles",r?"info":"error")}getPalabraActual(){if(!this.selectedVerso)return"";let r=this.soneto.versos.find((d)=>d.numero===this.selectedVerso);if(!r||!r.texto.trim())return"";let o=r.texto.trim().split(/\s+/);return o[o.length-1].replace(/[¿?!¡;:.,()\-"'«»]/g,"")}onRhymeInsert(r){let{palabra:o,verso:d}=r.detail;if(!d)return;let c=this.soneto.versos.find((g)=>g.numero===d);if(!c)return;let i=c.texto.trim().split(/\s+/);if(i.length>0&&c.texto.trim().length>0)i[i.length-1]=o,c.texto=i.join(" ")+" ";else c.texto=o+" ";this.soneto.updatedAt=Date.now(),this.requestUpdate(),this.eventBus.emit("verso:input",{numero:d,texto:c.texto}),this.showToast(`"${o}" insertada en verso ${d}`,"info")}onRhymePanelClose(){this.rhymePanelOpen=!1,this.eventBus.emit("ui:panel-toggle",{panel:"rhyme-browser",open:!1})}showToast(r,o="info"){let d=this.shadowRoot?.querySelector("app-toast");if(d?.show)d.show(r,o)}onKeyDown(r){if((r.metaKey||r.ctrlKey)&&r.key==="r")r.preventDefault(),this.toggleRhymePanel();if((r.metaKey||r.ctrlKey)&&r.key==="s")r.preventDefault(),this.autoSaveService.saveNow(),this.showToast("Poema guardado","info");if((r.metaKey||r.ctrlKey)&&r.key==="n")r.preventDefault(),this.abrirSelector();if(r.key==="Escape"&&this.formSelectorOpen)this.cerrarSelector()}}x([Z()],z0.prototype,"soneto",void 0),x([Z()],z0.prototype,"forma",void 0),x([Z()],z0.prototype,"analysisMap",void 0),x([Z()],z0.prototype,"esquema",void 0),x([Z()],z0.prototype,"rhymePanelOpen",void 0),x([Z()],z0.prototype,"selectedVerso",void 0),x([Z()],z0.prototype,"completados",void 0),x([Z()],z0.prototype,"conErrores",void 0),x([Z()],z0.prototype,"formSelectorOpen",void 0),z0=x([Y("el-taller-app")],z0);if("serviceWorker"in navigator)window.addEventListener("load",()=>{});console.log(`
  ╔══════════════════════════════╗
  ║    ✎ El Taller v0.1.0       ║
  ║  Asistente de sonetos        ║
  ║  Buscador de rimas activo    ║
  ╚══════════════════════════════╝
  Stack: Bun + TypeScript + Lit
`);
