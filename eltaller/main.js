var g=function(f,c,h,i){var d=arguments.length,m=d<3?c:i===null?i=Object.getOwnPropertyDescriptor(c,h):i,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")m=Reflect.decorate(f,c,h,i);else for(var k=f.length-1;k>=0;k--)if(r=f[k])m=(d<3?r(m):d>3?r(c,h,m):r(c,h))||m;return d>3&&m&&Object.defineProperty(c,h,m),m};var o0=globalThis,Y0=o0.ShadowRoot&&(o0.ShadyCSS===void 0||o0.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q0=Symbol(),_f=new WeakMap;class J0{constructor(f,c,h){if(this._$cssResult$=!0,h!==Q0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=f,this._strings=c}get styleSheet(){let f=this._styleSheet,c=this._strings;if(Y0&&f===void 0){let h=c!==void 0&&c.length===1;if(h)f=_f.get(c);if(f===void 0){if((this._styleSheet=f=new CSSStyleSheet).replaceSync(this.cssText),h)_f.set(c,f)}}return f}toString(){return this.cssText}}var $c=(f)=>{if(f._$cssResult$===!0)return f.cssText;else if(typeof f==="number")return f;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${f}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},yc=(f)=>new J0(typeof f==="string"?f:String(f),void 0,Q0),H=(f,...c)=>{let h=f.length===1?f[0]:c.reduce((i,d,m)=>i+$c(d)+f[m+1],f[0]);return new J0(h,f,Q0)},Ff=(f,c)=>{if(Y0)f.adoptedStyleSheets=c.map((h)=>h instanceof CSSStyleSheet?h:h.styleSheet);else for(let h of c){let i=document.createElement("style"),d=o0.litNonce;if(d!==void 0)i.setAttribute("nonce",d);i.textContent=h.cssText,f.appendChild(i)}},zc=(f)=>{let c="";for(let h of f.cssRules)c+=h.cssText;return yc(c)},K0=Y0?(f)=>f:(f)=>f instanceof CSSStyleSheet?zc(f):f;var{is:xc,defineProperty:Bc,getOwnPropertyDescriptor:Gf,getOwnPropertyNames:_c,getOwnPropertySymbols:Fc,getPrototypeOf:Xf}=Object,Gc=!1,q=globalThis;if(Gc)q.customElements??=customElements;var W=!0,C,Zf=q.trustedTypes,Xc=Zf?Zf.emptyScript:"",Yf=W?q.reactiveElementPolyfillSupportDevMode:q.reactiveElementPolyfillSupport;if(W)q.litIssuedWarnings??=new Set,C=(f,c)=>{if(c+=` See https://lit.dev/msg/${f} for more information.`,!q.litIssuedWarnings.has(c)&&!q.litIssuedWarnings.has(f))console.warn(c),q.litIssuedWarnings.add(c)},queueMicrotask(()=>{if(C("dev-mode","Lit is in dev mode. Not recommended for production!"),q.ShadyDOM?.inUse&&Yf===void 0)C("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var Zc=W?(f)=>{if(!q.emitLitDebugLogEvents)return;q.dispatchEvent(new CustomEvent("lit-debug",{detail:f}))}:void 0,t=(f,c)=>f,l={toAttribute(f,c){switch(c){case Boolean:f=f?Xc:null;break;case Object:case Array:f=f==null?f:JSON.stringify(f);break}return f},fromAttribute(f,c){let h=f;switch(c){case Boolean:h=f!==null;break;case Number:h=f===null?null:Number(f);break;case Object:case Array:try{h=JSON.parse(f)}catch(i){h=null}break}return h}},g0=(f,c)=>!xc(f,c),Hf={attribute:!0,type:String,converter:l,reflect:!1,useDefault:!1,hasChanged:g0};Symbol.metadata??=Symbol("metadata");q.litPropertyMetadata??=new WeakMap;class j extends HTMLElement{static addInitializer(f){this.__prepare(),(this._initializers??=[]).push(f)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(f,c=Hf){if(c.state)c.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(f))c=Object.create(c),c.wrapped=!0;if(this.elementProperties.set(f,c),!c.noAccessor){let h=W?Symbol.for(`${String(f)} (@property() cache)`):Symbol(),i=this.getPropertyDescriptor(f,h,c);if(i!==void 0)Bc(this.prototype,f,i)}}static getPropertyDescriptor(f,c,h){let{get:i,set:d}=Gf(this.prototype,f)??{get(){return this[c]},set(m){this[c]=m}};if(W&&i==null){if("value"in(Gf(this.prototype,f)??{}))throw Error(`Field ${JSON.stringify(String(f))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);C("reactive-property-without-getter",`Field ${JSON.stringify(String(f))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:i,set(m){let r=i?.call(this);d?.call(this,m),this.requestUpdate(f,r,h)},configurable:!0,enumerable:!0}}static getPropertyOptions(f){return this.elementProperties.get(f)??Hf}static __prepare(){if(this.hasOwnProperty(t("elementProperties",this)))return;let f=Xf(this);if(f.finalize(),f._initializers!==void 0)this._initializers=[...f._initializers];this.elementProperties=new Map(f.elementProperties)}static finalize(){if(this.hasOwnProperty(t("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(t("properties",this))){let c=this.properties,h=[..._c(c),...Fc(c)];for(let i of h)this.createProperty(i,c[i])}let f=this[Symbol.metadata];if(f!==null){let c=litPropertyMetadata.get(f);if(c!==void 0)for(let[h,i]of c)this.elementProperties.set(h,i)}this.__attributeToPropertyMap=new Map;for(let[c,h]of this.elementProperties){let i=this.__attributeNameForProperty(c,h);if(i!==void 0)this.__attributeToPropertyMap.set(i,c)}if(this.elementStyles=this.finalizeStyles(this.styles),W){if(this.hasOwnProperty("createProperty"))C("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))C("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(f){let c=[];if(Array.isArray(f)){let h=new Set(f.flat(1/0).reverse());for(let i of h)c.unshift(K0(i))}else if(f!==void 0)c.push(K0(f));return c}static __attributeNameForProperty(f,c){let h=c.attribute;return h===!1?void 0:typeof h==="string"?h:typeof f==="string"?f.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((f)=>this.enableUpdating=f),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((f)=>f(this))}addController(f){if((this.__controllers??=new Set).add(f),this.renderRoot!==void 0&&this.isConnected)f.hostConnected?.()}removeController(f){this.__controllers?.delete(f)}__saveInstanceProperties(){let f=new Map,c=this.constructor.elementProperties;for(let h of c.keys())if(this.hasOwnProperty(h))f.set(h,this[h]),delete this[h];if(f.size>0)this.__instanceProperties=f}createRenderRoot(){let f=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ff(f,this.constructor.elementStyles),f}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((f)=>f.hostConnected?.())}enableUpdating(f){}disconnectedCallback(){this.__controllers?.forEach((f)=>f.hostDisconnected?.())}attributeChangedCallback(f,c,h){this._$attributeToProperty(f,h)}__propertyToAttribute(f,c){let i=this.constructor.elementProperties.get(f),d=this.constructor.__attributeNameForProperty(f,i);if(d!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:l).toAttribute(c,i.type);if(W&&this.constructor.enabledWarnings.includes("migration")&&r===void 0)C("undefined-attribute-value",`The attribute value for the ${f} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=f,r==null)this.removeAttribute(d);else this.setAttribute(d,r);this.__reflectingProperty=null}}_$attributeToProperty(f,c){let h=this.constructor,i=h.__attributeToPropertyMap.get(f);if(i!==void 0&&this.__reflectingProperty!==i){let d=h.getPropertyOptions(i),m=typeof d.converter==="function"?{fromAttribute:d.converter}:d.converter?.fromAttribute!==void 0?d.converter:l;this.__reflectingProperty=i;let r=m.fromAttribute(c,d.type);this[i]=r??this.__defaultValues?.get(i)??r,this.__reflectingProperty=null}}requestUpdate(f,c,h,i=!1,d){if(f!==void 0){if(W&&f instanceof Event)C("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let m=this.constructor;if(i===!1)d=this[f];if(h??=m.getPropertyOptions(f),(h.hasChanged??g0)(d,c)||h.useDefault&&h.reflect&&d===this.__defaultValues?.get(f)&&!this.hasAttribute(m.__attributeNameForProperty(f,h)))this._$changeProperty(f,c,h);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(f,c,{useDefault:h,reflect:i,wrapped:d},m){if(h&&!(this.__defaultValues??=new Map).has(f)){if(this.__defaultValues.set(f,m??c??this[f]),d!==!0||m!==void 0)return}if(!this._$changedProperties.has(f)){if(!this.hasUpdated&&!h)c=void 0;this._$changedProperties.set(f,c)}if(i===!0&&this.__reflectingProperty!==f)(this.__reflectingProperties??=new Set).add(f)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(c){Promise.reject(c)}let f=this.scheduleUpdate();if(f!=null)await f;return!this.isUpdatePending}scheduleUpdate(){let f=this.performUpdate();if(W&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof f?.then==="function")C("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return f}performUpdate(){if(!this.isUpdatePending)return;if(Zc?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),W){let d=[...this.constructor.elementProperties.keys()].filter((m)=>this.hasOwnProperty(m)&&(m in Xf(this)));if(d.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${d.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[i,d]of this.__instanceProperties)this[i]=d;this.__instanceProperties=void 0}let h=this.constructor.elementProperties;if(h.size>0)for(let[i,d]of h){let{wrapped:m}=d,r=this[i];if(m===!0&&!this._$changedProperties.has(i)&&r!==void 0)this._$changeProperty(i,void 0,d,r)}}let f=!1,c=this._$changedProperties;try{if(f=this.shouldUpdate(c),f)this.willUpdate(c),this.__controllers?.forEach((h)=>h.hostUpdate?.()),this.update(c);else this.__markUpdated()}catch(h){throw f=!1,this.__markUpdated(),h}if(f)this._$didUpdate(c)}willUpdate(f){}_$didUpdate(f){if(this.__controllers?.forEach((c)=>c.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(f);if(this.updated(f),W&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))C("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(f){return!0}update(f){this.__reflectingProperties&&=this.__reflectingProperties.forEach((c)=>this.__propertyToAttribute(c,this[c])),this.__markUpdated()}updated(f){}firstUpdated(f){}}j.elementStyles=[];j.shadowRootOptions={mode:"open"};j[t("elementProperties",j)]=new Map;j[t("finalized",j)]=new Map;Yf?.({ReactiveElement:j});if(W){j.enabledWarnings=["change-in-update","async-perform-update"];let f=function(c){if(!c.hasOwnProperty(t("enabledWarnings",c)))c.enabledWarnings=c.enabledWarnings.slice()};j.enableWarning=function(c){if(f(this),!this.enabledWarnings.includes(c))this.enabledWarnings.push(c)},j.disableWarning=function(c){f(this);let h=this.enabledWarnings.indexOf(c);if(h>=0)this.enabledWarnings.splice(h,1)}}(q.reactiveElementVersions??=[]).push("2.1.2");if(W&&q.reactiveElementVersions.length>1)queueMicrotask(()=>{C("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var U=globalThis,G=(f)=>{if(!U.emitLitDebugLogEvents)return;U.dispatchEvent(new CustomEvent("lit-debug",{detail:f}))},Hc=0,f0;U.litIssuedWarnings??=new Set,f0=(f,c)=>{if(c+=f?` See https://lit.dev/msg/${f} for more information.`:"",!U.litIssuedWarnings.has(c)&&!U.litIssuedWarnings.has(f))console.warn(c),U.litIssuedWarnings.add(c)},queueMicrotask(()=>{f0("dev-mode","Lit is in dev mode. Not recommended for production!")});var T=U.ShadyDOM?.inUse&&U.ShadyDOM?.noPatch===!0?U.ShadyDOM.wrap:(f)=>f,$0=U.trustedTypes,Qf=$0?$0.createPolicy("lit-html",{createHTML:(f)=>f}):void 0,Yc=(f)=>f,B0=(f,c,h)=>Yc,Qc=(f)=>{if(P!==B0)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");P=f},Jc=()=>{P=B0},U0=(f,c,h)=>{return P(f,c,h)},Uf="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,Mf="?"+N,Kc=`<${Mf}>`,O=document,c0=()=>O.createComment(""),h0=(f)=>f===null||typeof f!="object"&&typeof f!="function",M0=Array.isArray,bc=(f)=>M0(f)||typeof f?.[Symbol.iterator]==="function",b0=`[ 	
\f\r]`,qc=`[^ 	
\f\r"'\`<>=]`,Wc=`[^\\s"'>=/]`,a=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jf=1,q0=2,jc=3,Kf=/-->/g,bf=/>/g,A=new RegExp(`>|${b0}(?:(${Wc}+)(${b0}*=${b0}*(?:${qc}|("|')|))|$)`,"g"),Uc=0,qf=1,Mc=2,Wf=3,W0=/'/g,j0=/"/g,wf=/^(?:script|style|textarea|title)$/i,wc=1,y0=2,z0=3,w0=1,x0=2,Cc=3,Tc=4,Nc=5,C0=6,Dc=7,T0=(f)=>(c,...h)=>{if(c.some((i)=>i===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(h.some((i)=>i?._$litStatic$))f0("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:f,strings:c,values:h}},y=T0(wc),dh=T0(y0),mh=T0(z0),L=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),jf=new WeakMap,V=O.createTreeWalker(O,129),P=B0;function Cf(f,c){if(!M0(f)||!f.hasOwnProperty("raw")){let h="invalid template strings array";throw h=`
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
`),Error(h)}return Qf!==void 0?Qf.createHTML(c):c}var Ic=(f,c)=>{let h=f.length-1,i=[],d=c===y0?"<svg>":c===z0?"<math>":"",m,r=a;for(let $=0;$<h;$++){let z=f[$],o=-1,B,_=0,X;while(_<z.length){if(r.lastIndex=_,X=r.exec(z),X===null)break;if(_=r.lastIndex,r===a){if(X[Jf]==="!--")r=Kf;else if(X[Jf]!==void 0)r=bf;else if(X[q0]!==void 0){if(wf.test(X[q0]))m=new RegExp(`</${X[q0]}`,"g");r=A}else if(X[jc]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(r===A)if(X[Uc]===">")r=m??a,o=-1;else if(X[qf]===void 0)o=-2;else o=r.lastIndex-X[Mc].length,B=X[qf],r=X[Wf]===void 0?A:X[Wf]==='"'?j0:W0;else if(r===j0||r===W0)r=A;else if(r===Kf||r===bf)r=a;else r=A,m=void 0}console.assert(o===-1||r===A||r===W0||r===j0,"unexpected parse state B");let Q=r===A&&f[$+1].startsWith("/>")?" ":"";d+=r===a?z+Kc:o>=0?(i.push(B),z.slice(0,o)+Uf+z.slice(o))+N+Q:z+N+(o===-2?$:Q)}let k=d+(f[h]||"<?>")+(c===y0?"</svg>":c===z0?"</math>":"");return[Cf(f,k),i]};class i0{constructor({strings:f,["_$litType$"]:c},h){this.parts=[];let i,d=0,m=0,r=f.length-1,k=this.parts,[$,z]=Ic(f,c);if(this.el=i0.createElement($,h),V.currentNode=this.el.content,c===y0||c===z0){let o=this.el.content.firstChild;o.replaceWith(...o.childNodes)}while((i=V.nextNode())!==null&&k.length<r){if(i.nodeType===1){{let o=i.localName;if(/^(?:textarea|template)$/i.test(o)&&i.innerHTML.includes(N)){let B=`Expressions are not supported inside \`${o}\` elements. See https://lit.dev/msg/expression-in-${o} for more information.`;if(o==="template")throw Error(B);else f0("",B)}}if(i.hasAttributes()){for(let o of i.getAttributeNames())if(o.endsWith(Uf)){let B=z[m++],X=i.getAttribute(o).split(N),Q=/([.?@])?(.*)/.exec(B);k.push({type:w0,index:d,name:Q[2],strings:X,ctor:Q[1]==="."?Nf:Q[1]==="?"?Df:Q[1]==="@"?If:m0}),i.removeAttribute(o)}else if(o.startsWith(N))k.push({type:C0,index:d}),i.removeAttribute(o)}if(wf.test(i.tagName)){let o=i.textContent.split(N),B=o.length-1;if(B>0){i.textContent=$0?$0.emptyScript:"";for(let _=0;_<B;_++)i.append(o[_],c0()),V.nextNode(),k.push({type:x0,index:++d});i.append(o[B],c0())}}}else if(i.nodeType===8)if(i.data===Mf)k.push({type:x0,index:d});else{let B=-1;while((B=i.data.indexOf(N,B+1))!==-1)k.push({type:Dc,index:d}),B+=N.length-1}d++}if(z.length!==m)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+f.join("${...}")+"`");G&&G({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:f})}static createElement(f,c){let h=O.createElement("template");return h.innerHTML=f,h}}function n(f,c,h=f,i){if(c===L)return c;let d=i!==void 0?h.__directives?.[i]:h.__directive,m=h0(c)?void 0:c._$litDirective$;if(d?.constructor!==m){if(d?._$notifyDirectiveConnectionChanged?.(!1),m===void 0)d=void 0;else d=new m(f),d._$initialize(f,h,i);if(i!==void 0)(h.__directives??=[])[i]=d;else h.__directive=d}if(d!==void 0)c=n(f,d._$resolve(f,c.values),d,i);return c}class Tf{constructor(f,c){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=f,this._$parent=c}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(f){let{el:{content:c},parts:h}=this._$template,i=(f?.creationScope??O).importNode(c,!0);V.currentNode=i;let d=V.nextNode(),m=0,r=0,k=h[0];while(k!==void 0){if(m===k.index){let $;if(k.type===x0)$=new d0(d,d.nextSibling,this,f);else if(k.type===w0)$=new k.ctor(d,k.name,k.strings,this,f);else if(k.type===C0)$=new Af(d,this,f);this._$parts.push($),k=h[++r]}if(m!==k?.index)d=V.nextNode(),m++}return V.currentNode=O,i}_update(f){let c=0;for(let h of this._$parts){if(h!==void 0)if(G&&G({kind:"set part",part:h,value:f[c],valueIndex:c,values:f,templateInstance:this}),h.strings!==void 0)h._$setValue(f,h,c),c+=h.strings.length-2;else h._$setValue(f[c]);c++}}}class d0{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(f,c,h,i){this.type=x0,this._$committedValue=J,this._$disconnectableChildren=void 0,this._$startNode=f,this._$endNode=c,this._$parent=h,this.options=i,this.__isConnected=i?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let f=T(this._$startNode).parentNode,c=this._$parent;if(c!==void 0&&f?.nodeType===11)f=c.parentNode;return f}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(f,c=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(f=n(this,f,c),h0(f)){if(f===J||f==null||f===""){if(this._$committedValue!==J)G&&G({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=J}else if(f!==this._$committedValue&&f!==L)this._commitText(f)}else if(f._$litType$!==void 0)this._commitTemplateResult(f);else if(f.nodeType!==void 0){if(this.options?.host===f){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",f,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(f)}else if(bc(f))this._commitIterable(f);else this._commitText(f)}_insert(f){return T(T(this._$startNode).parentNode).insertBefore(f,this._$endNode)}_commitNode(f){if(this._$committedValue!==f){if(this._$clear(),P!==B0){let c=this._$startNode.parentNode?.nodeName;if(c==="STYLE"||c==="SCRIPT"){let h="Forbidden";if(c==="STYLE")h="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else h="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(h)}}G&&G({kind:"commit node",start:this._$startNode,parent:this._$parent,value:f,options:this.options}),this._$committedValue=this._insert(f)}}_commitText(f){if(this._$committedValue!==J&&h0(this._$committedValue)){let c=T(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=U0(c,"data","property");f=this._textSanitizer(f),G&&G({kind:"commit text",node:c,value:f,options:this.options}),c.data=f}else{let c=O.createTextNode("");if(this._commitNode(c),this._textSanitizer===void 0)this._textSanitizer=U0(c,"data","property");f=this._textSanitizer(f),G&&G({kind:"commit text",node:c,value:f,options:this.options}),c.data=f}this._$committedValue=f}_commitTemplateResult(f){let{values:c,["_$litType$"]:h}=f,i=typeof h==="number"?this._$getTemplate(f):(h.el===void 0&&(h.el=i0.createElement(Cf(h.h,h.h[0]),this.options)),h);if(this._$committedValue?._$template===i)G&&G({kind:"template updating",template:i,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:c}),this._$committedValue._update(c);else{let d=new Tf(i,this),m=d._clone(this.options);G&&G({kind:"template instantiated",template:i,instance:d,parts:d._$parts,options:this.options,fragment:m,values:c}),d._update(c),G&&G({kind:"template instantiated and updated",template:i,instance:d,parts:d._$parts,options:this.options,fragment:m,values:c}),this._commitNode(m),this._$committedValue=d}}_$getTemplate(f){let c=jf.get(f.strings);if(c===void 0)jf.set(f.strings,c=new i0(f));return c}_commitIterable(f){if(!M0(this._$committedValue))this._$committedValue=[],this._$clear();let c=this._$committedValue,h=0,i;for(let d of f){if(h===c.length)c.push(i=new d0(this._insert(c0()),this._insert(c0()),this,this.options));else i=c[h];i._$setValue(d),h++}if(h<c.length)this._$clear(i&&T(i._$endNode).nextSibling,h),c.length=h}_$clear(f=T(this._$startNode).nextSibling,c){this._$notifyConnectionChanged?.(!1,!0,c);while(f!==this._$endNode){let h=T(f).nextSibling;T(f).remove(),f=h}}setConnected(f){if(this._$parent===void 0)this.__isConnected=f,this._$notifyConnectionChanged?.(f);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class m0{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(f,c,h,i,d){if(this.type=w0,this._$committedValue=J,this._$disconnectableChildren=void 0,this.element=f,this.name=c,this._$parent=i,this.options=d,h.length>2||h[0]!==""||h[1]!=="")this._$committedValue=Array(h.length-1).fill(new String),this.strings=h;else this._$committedValue=J;this._sanitizer=void 0}_$setValue(f,c=this,h,i){let d=this.strings,m=!1;if(d===void 0){if(f=n(this,f,c,0),m=!h0(f)||f!==this._$committedValue&&f!==L,m)this._$committedValue=f}else{let r=f;f=d[0];let k,$;for(k=0;k<d.length-1;k++){if($=n(this,r[h+k],c,k),$===L)$=this._$committedValue[k];if(m||=!h0($)||$!==this._$committedValue[k],$===J)f=J;else if(f!==J)f+=($??"")+d[k+1];this._$committedValue[k]=$}}if(m&&!i)this._commitValue(f)}_commitValue(f){if(f===J)T(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=P(this.element,this.name,"attribute");f=this._sanitizer(f??""),G&&G({kind:"commit attribute",element:this.element,name:this.name,value:f,options:this.options}),T(this.element).setAttribute(this.name,f??"")}}}class Nf extends m0{constructor(){super(...arguments);this.type=Cc}_commitValue(f){if(this._sanitizer===void 0)this._sanitizer=P(this.element,this.name,"property");f=this._sanitizer(f),G&&G({kind:"commit property",element:this.element,name:this.name,value:f,options:this.options}),this.element[this.name]=f===J?void 0:f}}class Df extends m0{constructor(){super(...arguments);this.type=Tc}_commitValue(f){G&&G({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(f&&f!==J),options:this.options}),T(this.element).toggleAttribute(this.name,!!f&&f!==J)}}class If extends m0{constructor(f,c,h,i,d){super(f,c,h,i,d);if(this.type=Nc,this.strings!==void 0)throw Error(`A \`<${f.localName}>\` has a \`@${c}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(f,c=this){if(f=n(this,f,c,0)??J,f===L)return;let h=this._$committedValue,i=f===J&&h!==J||f.capture!==h.capture||f.once!==h.once||f.passive!==h.passive,d=f!==J&&(h===J||i);if(G&&G({kind:"commit event listener",element:this.element,name:this.name,value:f,options:this.options,removeListener:i,addListener:d,oldListener:h}),i)this.element.removeEventListener(this.name,this,h);if(d)this.element.addEventListener(this.name,this,f);this._$committedValue=f}handleEvent(f){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,f);else this._$committedValue.handleEvent(f)}}class Af{constructor(f,c,h){this.element=f,this.type=C0,this._$disconnectableChildren=void 0,this._$parent=c,this.options=h}get _$isConnected(){return this._$parent._$isConnected}_$setValue(f){G&&G({kind:"commit to element binding",element:this.element,value:f,options:this.options}),n(this,f)}}var Ac=U.litHtmlPolyfillSupportDevMode;Ac?.(i0,d0);(U.litHtmlVersions??=[]).push("3.3.3");if(U.litHtmlVersions.length>1)queueMicrotask(()=>{f0("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var e=(f,c,h)=>{if(c==null)throw TypeError(`The container to render into may not be ${c}`);let i=Hc++,d=h?.renderBefore??c,m=d._$litPart$;if(G&&G({kind:"begin render",id:i,value:f,container:c,options:h,part:m}),m===void 0){let r=h?.renderBefore??null;d._$litPart$=m=new d0(c.insertBefore(c0(),r),r,void 0,h??{})}return m._$setValue(f),G&&G({kind:"end render",id:i,value:f,container:c,options:h,part:m}),m};e.setSanitizer=Qc,e.createSanitizer=U0,e._testOnlyClearSanitizerFactoryDoNotCallOrElse=Jc;var Rc=(f,c)=>f,N0=!0,D=globalThis,Rf;if(N0)D.litIssuedWarnings??=new Set,Rf=(f,c)=>{if(c+=` See https://lit.dev/msg/${f} for more information.`,!D.litIssuedWarnings.has(c)&&!D.litIssuedWarnings.has(f))console.warn(c),D.litIssuedWarnings.add(c)};class F extends j{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let f=super.createRenderRoot();return this.renderOptions.renderBefore??=f.firstChild,f}update(f){let c=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(f),this.__childPart=e(c,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return L}}F._$litElement$=!0;F[Rc("finalized",F)]=!0;D.litElementHydrateSupport?.({LitElement:F});var Vc=N0?D.litElementPolyfillSupportDevMode:D.litElementPolyfillSupport;Vc?.({LitElement:F});(D.litElementVersions??=[]).push("4.2.2");if(N0&&D.litElementVersions.length>1)queueMicrotask(()=>{Rf("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var Y=(f)=>(c,h)=>{if(h!==void 0)h.addInitializer(()=>{customElements.define(f,c)});else customElements.define(f,c)};var Vf=!0,Of;if(Vf)globalThis.litIssuedWarnings??=new Set,Of=(f,c)=>{if(c+=` See https://lit.dev/msg/${f} for more information.`,!globalThis.litIssuedWarnings.has(c)&&!globalThis.litIssuedWarnings.has(f))console.warn(c),globalThis.litIssuedWarnings.add(c)};var Oc=(f,c,h)=>{let i=c.hasOwnProperty(h);return c.constructor.createProperty(h,f),i?Object.getOwnPropertyDescriptor(c,h):void 0},Lc={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:g0},Pc=(f=Lc,c,h)=>{let{kind:i,metadata:d}=h;if(Vf&&d==null)Of("missing-class-metadata",`The class ${c} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let m=globalThis.litPropertyMetadata.get(d);if(m===void 0)globalThis.litPropertyMetadata.set(d,m=new Map);if(i==="setter")f=Object.create(f),f.wrapped=!0;if(m.set(h.name,f),i==="accessor"){let{name:r}=h;return{set(k){let $=c.get.call(this);c.set.call(this,k),this.requestUpdate(r,$,f,!0,k)},init(k){if(k!==void 0)this._$changeProperty(r,void 0,f,k);return k}}}else if(i==="setter"){let{name:r}=h;return function(k){let $=this[r];c.call(this,k),this.requestUpdate(r,$,f,!0,k)}}throw Error(`Unsupported decorator location: ${i}`)};function x(f){return(c,h)=>{return typeof h==="object"?Pc(f,c,h):Oc(f,c,h)}}function K(f){return x({...f,state:!0,attribute:!1})}var R=(f,c,h)=>{if(h.configurable=!0,h.enumerable=!0,Reflect.decorate&&typeof c!=="object")Object.defineProperty(f,c,h);return h};var D0=!0,Lf;if(D0)globalThis.litIssuedWarnings??=new Set,Lf=(f,c)=>{if(c+=f?` See https://lit.dev/msg/${f} for more information.`:"",!globalThis.litIssuedWarnings.has(c)&&!globalThis.litIssuedWarnings.has(f))console.warn(c),globalThis.litIssuedWarnings.add(c)};function Pf(f,c){return(h,i,d)=>{let m=(r)=>{let k=r.renderRoot?.querySelector(f)??null;if(D0&&k===null&&c&&!r.hasUpdated){let $=typeof i==="object"?i.name:i;Lf("",`@query'd field ${JSON.stringify(String($))} with the 'cache' flag set for selector '${f}' has been accessed before the first update and returned null. This is expected if the renderRoot tree has not been provided beforehand (e.g. via Declarative Shadow DOM). Therefore the value hasn't been cached.`)}return k};if(c){let{get:r,set:k}=typeof i==="object"?h:d??(()=>{let $=D0?Symbol(`${String(i)} (@query() cache)`):Symbol();return{get(){return this[$]},set(z){this[$]=z}}})();return R(h,i,{get(){let $=r.call(this);if($===void 0){if($=m(this),$!==null||this.hasUpdated)k.call(this,$)}return $}})}else return R(h,i,{get(){return m(this)}})}}var Sc;function Sf(f){return(c,h)=>{return R(c,h,{get(){return(this.renderRoot??(Sc??=document.createDocumentFragment())).querySelectorAll(f)}})}}class I0{listeners=new Map;on(f,c){if(!this.listeners.has(f))this.listeners.set(f,new Set);this.listeners.get(f).add(c)}off(f,c){let h=this.listeners.get(f);if(h){if(h.delete(c),h.size===0)this.listeners.delete(f)}}emit(f,c){let h=this.listeners.get(f);if(h)for(let i of h)try{i(c)}catch(d){console.error(`[EventBus] Error in handler for '${String(f)}':`,d)}}clear(){this.listeners.clear()}}var S={CURRENT_SONETO:"el-taller:soneto-actual",HISTORY:"el-taller:historial",PREFERENCES:"el-taller:preferencias"};class A0{autoSave(f){try{let c=JSON.stringify({soneto:f,savedAt:Date.now()});localStorage.setItem(S.CURRENT_SONETO,c)}catch(c){console.warn("[Storage] Error al auto-guardar:",c)}}loadLastSoneto(){try{let f=localStorage.getItem(S.CURRENT_SONETO);if(!f)return null;let{soneto:c}=JSON.parse(f);return c}catch{return null}}saveToHistory(f){try{let c=this.loadHistory();if(c.unshift(f),c.length>20)c.pop();localStorage.setItem(S.HISTORY,JSON.stringify(c))}catch(c){console.warn("[Storage] Error al guardar historial:",c)}}loadHistory(){try{let f=localStorage.getItem(S.HISTORY);return f?JSON.parse(f):[]}catch{return[]}}savePreferences(f){try{localStorage.setItem(S.PREFERENCES,JSON.stringify(f))}catch{}}loadPreferences(){try{let f=localStorage.getItem(S.PREFERENCES);return f?JSON.parse(f):{}}catch{return{}}}getKeys(){return{...S}}}function Ef(f,c,h=!1){let i=null,d=!1;return(...m)=>{if(h&&!d)f(...m),d=!0;if(i!==null)clearTimeout(i);i=setTimeout(()=>{if(!h||d)f(...m);d=!1,i=null},c)}}var R0=new Set(["a","e","o","á","é","ó"]),V0=new Set(["i","u","í","ú"]),E=new Set([...R0,...V0]),vf=new Set(["ia","ie","io","ua","ue","uo","ai","ei","oi","au","eu","ou","iu","ui"]),pf=new Set(["iai","iei","uai","uei","iau","ueu"]),uf=new Set(["pr","pl","br","bl","fr","fl","gr","gl","kr","kl","cr","cl","dr","tr","tl","ch","ll","rr"]);var vc=[{tipo:"heroico",acentos:[6,10],descripcion:"Acento en 6ª y 10ª sílabas"},{tipo:"enfatico",acentos:[1,6,10],descripcion:"Acento en 1ª, 6ª y 10ª sílabas"},{tipo:"melodico",acentos:[3,6,10],descripcion:"Acento en 3ª, 6ª y 10ª sílabas"},{tipo:"safico",acentos:[4,8,10],descripcion:"Acento en 4ª, 8ª y 10ª sílabas"},{tipo:"dactilico",acentos:[4,7,10],descripcion:"Acento en 4ª, 7ª y 10ª sílabas"},{tipo:"anfibraquico",acentos:[2,5,8,10],descripcion:"Acento en 2ª, 5ª, 8ª y 10ª sílabas"}];function tf(f){if(!f.has(10))return;let c=[...vc].sort((h,i)=>i.acentos.length-h.acentos.length);for(let h of c){let i=new Set(h.acentos),d=!0;for(let m of i)if(!f.has(m)){d=!1;break}if(d)return h}return{tipo:"otro",acentos:[...f].sort(),descripcion:"Otra variante"}}class L0{silabearPalabra(f){if(!f)return[];let c=f.toLowerCase();if(c.length<=1)return[c];let h=[],i=0,d="";while(i<c.length){let m=c[i];if(r0(m)){let r=this.leerGrupoVocalico(c,i);if(d.length>0){if(d.length===1)h.push(d+r);else if(d.length===2)if(nf(d))h.push(d+r);else{if(h.length>0)h[h.length-1]+=d[0];else h.push(d[0]);h.push(d[1]+r)}else{let k=d.length>=2&&nf(d.slice(-2))?d.slice(-2):d.slice(-1),$=d.slice(0,d.length-k.length);if(h.length>0)h[h.length-1]+=$;else if($.length>0)h.push($);h.push(k+r)}d=""}else if(h.length===0)h.push(r);else h.push(r);i+=r.length}else if(/[bcdfghjklmnñpqrstvwxyzü]/i.test(m))d+=m,i++;else i++}if(d.length>0)if(h.length>0)h[h.length-1]+=d;else h.push(d);return h.filter((m)=>m.length>0)}normalizarVocal(f){return{"á":"a","é":"e","í":"i","ó":"o","ú":"u","ü":"u"}[f]||f}leerGrupoVocalico(f,c){if(c>=f.length)return"";let h=c+2<f.length?f.slice(c,c+3):"",i=c+1<f.length?f.slice(c,c+2):"",d=[...h].map((r)=>this.normalizarVocal(r)).join(""),m=[...i].map((r)=>this.normalizarVocal(r)).join("");if(d.length===3&&tc(d))return h;if(m.length===2&&uc(m)){if(c>0){let r=f[c-1];if(O0(r)&&(f[c]==="í"||f[c]==="ú"))return f[c]}if(f[c]==="í"||f[c]==="ú"){if(c+2<f.length){if(O0(f[c+1])&&!r0(f[c+2]))return f[c]}if(c+1<f.length&&O0(f[c+1])&&c+2>=f.length)return f[c]}return i}if(c>0){let r=f[c-1],k=f[c];if((k==="á"||k==="é"||k==="ó")&&pc(r))return k}return f[c]}leerGrupoConsonantico(f,c){let h="";while(c<f.length&&!r0(f[c]))h+=f[c],c++;return h}detectarSinalefas(f,c=[]){let h=[],i=[],d=0;for(let r=0;r<f.length;r++){let k=f[r];for(let $=0;$<k.length;$++)h.push(k[$]),d++}let m=0;for(let r=0;r<f.length-1;r++){let k=f[r],$=f[r+1],z=k[k.length-1],o=$[0],B=z.charAt(z.length-1),_=o.charAt(0),X=B==="y",Q=_==="y"&&c[r+1]==="y";if((r0(B)||X)&&(r0(_)||_==="h"||Q)){let I=m+k.length-1;i.push({silabaAnterior:I,silabaSiguiente:I+1,descartada:!1})}m+=k.length}return{silabas:h,sinalefas:i}}aplicarAcentoFinal(f,c){let h=this.determinarAcentoPalabra(c),i=f.length;switch(h){case"aguda":return i+1;case"esdrujula":return i-1;case"llana":default:return i}}determinarAcentoPalabra(f){let c=f.toLowerCase();if(/[áéíóú]/.test(c)){let i=this.silabearPalabra(c);if(i.length===0)return"llana";for(let d=0;d<i.length;d++)if(/[áéíóú]/.test(i[d])){if(d===i.length-1)return"aguda";if(d===i.length-2)return"llana";return"esdrujula"}}let h=c.charAt(c.length-1);if(h==="n"||h==="s"||/[aeiou]/.test(h))return"llana";return"aguda"}identificarTipoVerso(f,c){if(c!==11)return"no_endecasilabo";let h=new Set(f.map((d)=>d+1));return tf(h)?.tipo}encontrarSilabasTonicas(f){let c=[];for(let h of f)if(h.esAcentoEstrófico)c.push(h.index);return c}toggleSinalefa(f,c){let h=[...f.hiatoForzado];if(h.includes(c)){let i=h.indexOf(c);h.splice(i,1)}else h.push(c);return this.analizarVerso(f.texto,h)}analizarVerso(f,c=[]){let h=[],i=f.toLowerCase().trim();if(!i)return{texto:f,silabas:[],sinalefas:[],numSilabasMetricas:0,numSilabasFonologicas:0,acentoFinal:"llana",silabasTonicas:[],tipoVerso:void 0,errores:[{tipo:"num_silabas",mensaje:"Verso vacío"}],hiatoForzado:[]};let d=i.replace(/[¿?!¡;:.,()\-"'«»]/g,"").trim(),m=d.split(/\s+/).filter((Z)=>Z.length>0);if(m.length===0)return{texto:f,silabas:[],sinalefas:[],numSilabasMetricas:0,numSilabasFonologicas:0,acentoFinal:"llana",silabasTonicas:[],tipoVerso:void 0,errores:[{tipo:"num_silabas",mensaje:"Verso vacío"}],hiatoForzado:[]};let r=m.map((Z)=>this.silabearPalabra(Z)),{silabas:k,sinalefas:$}=this.detectarSinalefas(r,m),z=0,o=[],B=d.replace(/h/g,""),_=0;for(let Z of m)for(let M of Z)_++;let X=f.toLowerCase(),Q=0;for(let Z=0;Z<m.length;Z++){let M=m[Z],w=r[Z],k0=X.indexOf(M,Q);if(k0!==-1)Q=k0;let zf=0,kc=w.some((b)=>/[áéíóú]/.test(b)),s=-1;if(kc){for(let b=0;b<w.length;b++)if(/[áéíóú]/.test(w[b])){s=b;break}}else if(w.length>=2){let b=M.charAt(M.length-1);if(b==="n"||b==="s"||/[aeiou]/.test(b))s=w.length-2;else s=w.length-1}else s=0;for(let b=0;b<w.length;b++){let xf=w[b],H0=xf.toLowerCase(),Bf=Q+zf,oc=Bf+H0.length;zf+=H0.length;let gc=/[áéíóú]/.test(H0)||b===s;o.push({texto:xf,index:o.length,esAcentoEstrófico:gc,esSinalefa:!1,hiatoForzado:!1,charStart:Bf,charEnd:oc})}if(k0!==-1)Q=k0+M.length;else Q+=M.length}let I=[],X0=[];for(let Z of $){let M=c.includes(Z.silabaAnterior),w=c.includes(Z.silabaSiguiente);if(M||w){if(o[Z.silabaAnterior])o[Z.silabaAnterior].hiatoForzado=!0;I.push({...Z,descartada:!0})}else{if(X0.push({...Z,descartada:!1}),I.push({...Z,descartada:!1}),o[Z.silabaAnterior])o[Z.silabaAnterior].esSinalefa=!0;if(o[Z.silabaSiguiente])o[Z.silabaSiguiente].esSinalefa=!0}}let gf=o.length,dc=X0.length,u=gf-dc,mc=m[m.length-1],Z0=this.determinarAcentoPalabra(mc);if(Z0==="aguda")u+=1;else if(Z0==="esdrujula")u-=1;let $f=this.encontrarSilabasTonicas(o),yf=$f.map((Z)=>{let M=X0.filter((w)=>w.silabaSiguiente<=Z).length;return Z-M}),rc=this.identificarTipoVerso(yf,u);if(u!==11)h.push({tipo:"num_silabas",mensaje:`El verso tiene ${u} sílabas métricas (debería tener 11)`});else{let Z=new Set(yf.map((M)=>M+1));if(!Z.has(10))h.push({tipo:"sin_acento_10a",mensaje:"Falta acento en la 10ª sílaba (obligatorio)"});if(!Z.has(6))h.push({tipo:"sin_acento_6a",mensaje:"Falta acento en la 6ª sílaba (recomendado)"})}return{texto:f,silabas:o,sinalefas:I,numSilabasMetricas:Math.max(0,u),numSilabasFonologicas:gf,acentoFinal:Z0,silabasTonicas:$f,tipoVerso:rc,errores:h,hiatoForzado:c}}}function r0(f){return E.has(f.toLowerCase())}function O0(f){return R0.has(f.toLowerCase())}function pc(f){return V0.has(f.toLowerCase())}function uc(f){return vf.has(f.toLowerCase())}function tc(f){return pf.has(f.toLowerCase())}function nf(f){return uf.has(f.toLowerCase())}class sf{engine=new L0;analyze(f){let c=new Map;for(let h of f.payload.versos){let i=this.engine.analizarVerso(h.texto,h.hiatoForzado);c.set(h.numero,i)}return Promise.resolve({type:"ANALYZE_RESULT",payload:c})}terminate(){}}function lf(){return new sf}class v{detectarRima(f){if(!f||!f.silabas||f.silabas.length===0)return;let c=f.silabas.filter((d)=>d.esAcentoEstrófico),h;if(c.length>0)h=c[c.length-1];else{let d=f.silabas.filter((m)=>!m.esSinalefa);h=d.length>=2?d[d.length-2]:d[d.length-1]}if(!h)return;return{terminacionFonetica:this.extraerTerminacion(f.texto,h),letra:"",esConsonante:!0,versosRelacionados:[]}}extraerTerminacion(f,c){let h=f.toLowerCase().replace(/[¿?!¡;:.,()\-"'«»]/g,"").trim(),i=h.split(/\s+/),d=i[i.length-1]||"";if(!d)return h;return this.extraerTerminacionPalabra(d)}extraerTerminacionPalabra(f){let c=f.toLowerCase(),h=c.match(/[áéíóú]/);if(h){let z=c.lastIndexOf(h[0]);return c.slice(z)}let i=[...c].filter((z)=>E.has(z));if(i.length===0)return c;let d=i[i.length-1],m=c.lastIndexOf(d),r=c.charAt(c.length-1);if(r!=="n"&&r!=="s"&&!E.has(r))return c.slice(m);let k=i.length>=2?i[i.length-2]:d,$=c.lastIndexOf(k);if(i.length>=2){let o=c.substring(0,c.lastIndexOf(d)).lastIndexOf(k);if(o>=0)return c.slice(o)}return c.slice(m)}esRimaConsonante(f,c){return f.toLowerCase()===c.toLowerCase()}esRimaAsonante(f,c){let h=[...f.toLowerCase()].filter((d)=>E.has(d)).join(""),i=[...c.toLowerCase()].filter((d)=>E.has(d)).join("");return h===i}esRima(f,c,h){return h?this.esRimaConsonante(f,c):this.esRimaAsonante(f,c)}}class P0{rhymeEngine;constructor(){this.rhymeEngine=new v}detectarEsquema(f){let c=new Map;for(let B of f)if(B.analysis&&B.texto.trim()){let _=B.texto.trim().split(/\s+/),X=_[_.length-1]||"",Q=this.rhymeEngine.extraerTerminacionPalabra(X);c.set(B.numero,Q)}let h=new Map,i=new Map,d=["A","B","C","D","E","F","G","H","I","J","K","L","M","N"],m=0,r=[];for(let B of f){let _=c.get(B.numero);if(!_){h.set(B.numero,"·"),r.push(B.numero);continue}let X;for(let[Q,I]of i)if(this.rhymeEngine.esRimaConsonante(_,Q)){X=I;break}if(X)h.set(B.numero,X);else{let Q=d[m%d.length];m++,i.set(_,Q),h.set(B.numero,Q)}}let k=new Map;for(let B of h.values())k.set(B,(k.get(B)||0)+1);for(let B of f){let _=h.get(B.numero);if(_&&(k.get(_)||0)<2){if(!r.includes(B.numero))r.push(B.numero)}}let $=this.formatEsquema(h),{esClasico:z,nombre:o}=this.identificarForma($);return{asignacion:h,patron:$,versosSueltos:r,esClasico:z,nombreClasico:o}}formatEsquema(f){let c=[],h=[[1,2,3,4],[5,6,7,8],[9,10,11],[12,13,14]];for(let i of h){let d=i.map((m)=>f.get(m)||"·").join("");c.push(d)}return c.join(" ")}identificarForma(f){let c=f.replace(/\s+/g," ").trim(),h=[{patron:"ABBA ABBA CDC DCD",nombre:"Soneto clásico (Petrarquista)"},{patron:"ABBA ABBA CDE CDE",nombre:"Soneto clásico"},{patron:"ABAB ABAB CDC DCD",nombre:"Soneto isabelino (Shakespeare)"},{patron:"ABBA ABBA CCD EED",nombre:"Soneto clásico (variante)"},{patron:"ABBA ABBA CDE DCE",nombre:"Soneto clásico (variante)"}];for(let d of h)if(c===d.patron)return{esClasico:!0,nombre:d.nombre};let i=c.split(" ");if(i.length===4){let[d,m,r,k]=i,$=(o)=>o.length===4&&o[0]===o[3]&&o[1]===o[2]&&o[0]!==o[1];if($(d)&&$(m)&&d===m&&r.length===3&&k.length===3)return{esClasico:!0,nombre:"Soneto clásico (variante libre)"}}return{esClasico:!1}}}class S0{analyzer;rhymeEngine;schemeEngine;eventBus;pendingAnalysis=!1;lastAnalysis=new Map;lastEsquema;dirtyVersos=new Set;textosVersos=new Map;hiatosForzados=new Map;constructor(f){this.analyzer=lf(),this.rhymeEngine=new v,this.schemeEngine=new P0,this.eventBus=f,this.eventBus.on("verso:input",({numero:c,texto:h})=>{this.textosVersos.set(c,h),this.dirtyVersos.add(c),this.scheduleAnalysis()}),this.eventBus.on("hiato:toggle",({numero:c,silabaIndex:h})=>{let i=this.hiatosForzados.get(c)||[],d=i.indexOf(h);if(d>=0)i.splice(d,1);else i.push(h);this.hiatosForzados.set(c,i),this.dirtyVersos.add(c),this.scheduleAnalysis()})}scheduleAnalysis=Ef(()=>{this.runAnalysis()},300);async runAnalysis(){if(this.pendingAnalysis||this.dirtyVersos.size===0)return;this.pendingAnalysis=!0;let f=[...this.dirtyVersos];this.eventBus.emit("analysis:start",{versos:f});try{let c=f.map((d)=>({numero:d,texto:this.textosVersos.get(d)||"",hiatoForzado:this.hiatosForzados.get(d)||[]})),h=await this.analyzer.analyze({type:"ANALYZE",payload:{versos:c}});for(let[d,m]of h.payload)this.lastAnalysis.set(d,m);let i=[];for(let[d,m]of this.textosVersos)i.push({numero:d,texto:m,analysis:this.lastAnalysis.get(d)});for(let[d,m]of this.lastAnalysis){let r=this.rhymeEngine.detectarRima(m)}this.lastEsquema=this.schemeEngine.detectarEsquema(i.map((d)=>({id:String(d.numero),numero:d.numero,texto:d.texto,analysis:d.analysis}))),this.eventBus.emit("analysis:complete",{analysis:this.lastAnalysis,esquema:this.lastEsquema}),this.dirtyVersos.clear()}catch(c){console.error("[AnalysisService] Error en análisis:",c),this.eventBus.emit("ui:toast",{message:"Error al analizar el verso",level:"error"})}finally{this.pendingAnalysis=!1}}loadVersos(f){for(let c of f)this.textosVersos.set(c.numero,c.texto),this.dirtyVersos.add(c.numero);this.scheduleAnalysis()}getAnalysis(f){return this.lastAnalysis.get(f)}getEsquema(){return this.lastEsquema}forceReanalyze(){for(let f of this.textosVersos.keys())this.dirtyVersos.add(f);this.scheduleAnalysis()}destroy(){this.analyzer.terminate()}}class E0{storage;eventBus;dirtyVersos=new Set;lastSoneto=null;getCurrentSoneto;constructor(f,c,h){this.eventBus=f,this.storage=c,this.getCurrentSoneto=h,this.eventBus.on("verso:input",({numero:i})=>{this.dirtyVersos.add(i)}),this.eventBus.on("verso:blur",()=>{this.flush()}),window.addEventListener("beforeunload",()=>{this.flush(!0)}),setInterval(()=>{if(this.dirtyVersos.size>0)this.flush()},30000)}flush(f=!1){if(this.dirtyVersos.size===0)return;let c=this.getCurrentSoneto();if(c){if(f)try{let h=JSON.stringify({soneto:c,savedAt:Date.now()});localStorage.setItem("el-taller:soneto-actual",h)}catch{}else this.storage.autoSave(c);this.lastSoneto=c}this.dirtyVersos.clear()}saveNow(){this.flush()}destroy(){this.flush()}}function ef(f){let c="";for(let h of f){let i=h.charCodeAt(0);if(i===40||i===41||i===92)c+="\\"+h;else if(i>=32&&i<=126)c+=h;else if(i>=161&&i<=255)c+="\\"+i.toString(8);else c+="?"}return c}var F0=595.28,fc=841.89,_0=72,v0=F0/2;function af(f,c,h){let i=f.length*h*0.55,d=v0-i/2;return`1 0 0 1 ${Math.max(_0,Math.min(d,F0-_0-i)).toFixed(2)} ${c.toFixed(2)} Tm
(${ef(f)}) Tj`}function nc(f){let c=[],h=(o)=>c.push(o),i=fc-85,d=f.versos.filter((o)=>o.texto.trim()).map((o)=>o.texto.trim());if(f.titulo)h("BT"),h("/F1 18 Tf"),h(af(f.titulo,i,18)),h("ET"),i-=30,h("q"),h("0.5 w"),h(`${_0} ${i} m`),h(`${F0-_0} ${i} l`),h("S"),h("Q"),i-=16;let m=[d.slice(0,4),d.slice(4,8),d.slice(8,11),d.slice(11,14)].filter((o)=>o.length>0);for(let o=0;o<m.length;o++){let B=m[o];if(o>0){i-=10,h("BT"),h("/F1 9 Tf");let _=v0-18;h(`1 0 0 1 ${_.toFixed(2)} ${i.toFixed(2)} Tm`),h("(*   *   *) Tj"),h("ET"),i-=18}h("BT"),h("/F1 12 Tf");for(let _ of B)h(af(_,i,12)),i-=18;h("ET")}h("BT"),h("/F1 9 Tf");let r=60,k="-- El Taller",$=k.length*9*0.55,z=v0-$/2;return h(`1 0 0 1 ${z.toFixed(2)} ${r.toFixed(2)} Tm`),h(`(${ef(k)}) Tj`),h("ET"),c.join(`
`)}function cc(f){let c=nc(f),h=c.length,i={};i[1]="<< /Type /Catalog /Pages 2 0 R >>",i[2]="<< /Type /Pages /Kids [3 0 R] /Count 1 >>",i[3]=`<< /Type /Page /Parent 2 0 R
   /MediaBox [0 0 ${F0} ${fc}]
   /Contents 4 0 R
   /Resources << /Font << /F1 5 0 R >> >> >>`,i[4]=`<< /Length ${h} >>
stream
${c}
endstream`,i[5]="<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman /Encoding /WinAnsiEncoding >>";let d=Object.keys(i).map(Number).sort((z,o)=>z-o),m=`%PDF-1.4
`,r={};for(let z of d)r[z]=m.length,m+=`${z} 0 obj
${i[z]}
endobj
`;let k=m.length,$=d.length+1;m+=`xref
`,m+=`0 ${$}
`,m+=`0000000000 65535 f 
`;for(let z of d)m+=`${String(r[z]).padStart(10,"0")} 00000 n 
`;return m+=`trailer
`,m+=`<< /Size ${$} /Root 1 0 R >>
`,m+=`startxref
`,m+=`${k}
`,m+="%%EOF",new TextEncoder().encode(m)}class p0{formatAsText(f){let c=[f.titulo?`${f.titulo}
${"═".repeat(f.titulo.length)}
`:""],h=f.versos.map((d)=>d.texto),i=[h.slice(0,4).join(`
`),"",h.slice(4,8).join(`
`),"",h.slice(8,11).join(`
`),"",h.slice(11,14).join(`
`)];return c.push(i.join(`
`)),c.join("")}exportToTxt(f){let c=this.formatAsText(f),h=new Blob([c],{type:"text/plain;charset=utf-8"}),i=URL.createObjectURL(h),d=document.createElement("a");d.href=i,d.download=this.getFileName(f),d.click(),URL.revokeObjectURL(i)}exportToPdf(f){let c=cc(f),h=new Blob([c],{type:"application/pdf"}),i=URL.createObjectURL(h),d=document.createElement("a");d.href=i,d.download=this.getFileName(f).replace(/\.txt$/,".pdf"),d.click(),URL.revokeObjectURL(i)}async copyToClipboard(f){try{let c=this.formatAsText(f);return await navigator.clipboard.writeText(c),!0}catch{try{let c=document.createElement("textarea");return c.value=this.formatAsText(f),c.style.position="fixed",c.style.opacity="0",document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c),!0}catch{return!1}}}getFileName(f){if(f.titulo)return`${f.titulo.toLowerCase().replace(/[^a-záéíóúüñ\s]/g,"").trim().replace(/\s+/g,"-").slice(0,50)||"soneto"}.txt`;return`soneto-${new Date(f.createdAt).toISOString().slice(0,10)}.txt`}}var sc={1:"cuarteto1",2:"cuarteto1",3:"cuarteto1",4:"cuarteto1",5:"cuarteto2",6:"cuarteto2",7:"cuarteto2",8:"cuarteto2",9:"terceto1",10:"terceto1",11:"terceto1",12:"terceto2",13:"terceto2",14:"terceto2"},hc={cuarteto1:"Primer cuarteto",cuarteto2:"Segundo cuarteto",terceto1:"Primer terceto",terceto2:"Segundo terceto"};function G0(){return[1,2,3,4,5,6,7,8,9,10,11,12,13,14]}function ic(f){return sc[f]}class u0 extends F{constructor(){super(...arguments);this.numero=1;this.texto="";this.isActive=!1}static styles=H`
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
  `;firstUpdated(){this.actualizarTextoEnDOM()}updated(f){if(f.has("texto")&&this.editorRef)this.actualizarTextoEnDOM()}actualizarTextoEnDOM(){if(!this.editorRef)return;let f=this.texto||"";if(this.editorRef.textContent!==f)this.editorRef.textContent=f}render(){let f=this.getEstadoClass();return y`
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
          <div class="verso-metrica ${f}">
            ${this.renderMetrica()}
          </div>
        </div>
        <div class="verso-estado ${f}">
          ${this.renderEstado()}
        </div>
      </div>
    `}getEstadoClass(){if(!this.analysis||!this.texto.trim())return"";if(this.analysis.errores.length>0)return"verso-metrica--error";return"verso-metrica--ok"}renderMetrica(){if(!this.analysis||!this.texto.trim())return"";let f=[];if(f.push(`${this.analysis.numSilabasMetricas} síl.`),this.analysis.tipoVerso&&this.analysis.tipoVerso!=="no_endecasilabo")f.push(`· ${this.analysis.tipoVerso}`);if(this.analysis.errores.length>0)f.push(`· ${this.analysis.errores[0].mensaje}`);return f.join(" ")}renderEstado(){if(!this.analysis||!this.texto.trim())return"";if(this.analysis.errores.length>0)return"✗";return"✓"}onInput(){let f=this.editorRef.textContent||"";this.dispatchEvent(new CustomEvent("verso-input",{detail:{numero:this.numero,texto:f},bubbles:!0,composed:!0}))}onBlur(){this.dispatchEvent(new CustomEvent("verso-blur",{detail:{numero:this.numero},bubbles:!0,composed:!0}))}onFocus(){this.dispatchEvent(new CustomEvent("verso-focus",{detail:{numero:this.numero},bubbles:!0,composed:!0}))}onKeyDown(f){if(f.key==="Enter")f.preventDefault()}}g([x({type:Number})],u0.prototype,"numero",void 0),g([x({type:String})],u0.prototype,"texto",void 0),g([x({type:Object})],u0.prototype,"analysis",void 0),g([x({type:Boolean})],u0.prototype,"isActive",void 0),g([Pf(".verso-editor")],u0.prototype,"editorRef",void 0),u0=g([Y("verso-line")],u0);class t0 extends F{constructor(){super(...arguments);this.estrategia="";this.open=!1}static styles=H`
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
  `;render(){return y`
      <div class="estrategia-container">
        <button class="estrategia-toggle" @click=${this.toggle} aria-label="Mostrar/ocultar estrategia del poema">
          <span class="arrow ${this.open?"arrow--open":""}">▸</span>
          Estrategia del poema
          ${!this.open&&this.estrategia.trim()?y`<span style="color:#8B7D6B">— ${this.truncate(this.estrategia)}</span>`:""}
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
    `}toggle(){this.open=!this.open}truncate(f){return f.length>55?f.slice(0,55)+"…":f}onInput(f){let c=f.target;this.dispatchEvent(new CustomEvent("estrategia-change",{detail:{estrategia:c.value},bubbles:!0,composed:!0}))}}g([x({type:String})],t0.prototype,"estrategia",void 0),g([x({type:Boolean})],t0.prototype,"open",void 0),t0=g([Y("estrategia-line")],t0);class n0 extends F{constructor(){super(...arguments);this.versos=[];this.titulo="";this.estrategia="";this.activeVerso=null}static styles=H`
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
      margin-bottom: 1.5rem;
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
  `;render(){let f=G0(),c=["cuarteto1","cuarteto2","terceto1","terceto2"];return y`
      <div class="editor-section">
        <div class="editor-header">
          <input
            class="titulo-input"
            type="text"
            placeholder="Título del soneto (opcional)"
            .value=${this.titulo}
            @input=${this.onTituloInput}
            aria-label="Título del soneto"
          />
        </div>

        <estrategia-line
          .estrategia=${this.estrategia}
          @estrategia-change=${this.onEstrategiaChange}
        ></estrategia-line>

        ${c.map((h,i)=>{let d=f.filter((m)=>ic(m)===h);return y`
            <div class="parte-container">
              <div class="parte-label">${hc[h]}</div>
              ${d.map((m)=>{let r=this.getVerso(m);return y`
                  <verso-line
                    .numero=${m}
                    .texto=${r?.texto||""}
                    .analysis=${r?.analysis}
                    .isActive=${this.activeVerso===m}
                    @verso-input=${this.onVersoInput}
                    @verso-blur=${this.onVersoBlur}
                    @verso-focus=${this.onVersoFocus}
                    @hiato-toggle=${this.onHiatoToggle}
                  ></verso-line>
                `})}
            </div>
            ${i<c.length-1?y`<div class="parte-separator"></div>`:""}
          `})}
      </div>
    `}getVerso(f){return this.versos.find((c)=>c.numero===f)}onTituloInput(f){let c=f.target;this.dispatchEvent(new CustomEvent("titulo-change",{detail:{titulo:c.value},bubbles:!0,composed:!0}))}onEstrategiaChange(f){f.stopPropagation();let{estrategia:c}=f.detail;this.dispatchEvent(new CustomEvent("estrategia-change",{detail:{estrategia:c},bubbles:!0,composed:!0}))}onVersoInput(f){f.stopPropagation();let{numero:c,texto:h}=f.detail;this.dispatchEvent(new CustomEvent("verso-input",{detail:{numero:c,texto:h},bubbles:!0,composed:!0}))}onVersoBlur(f){f.stopPropagation(),this.dispatchEvent(new CustomEvent("verso-blur",{detail:f.detail,bubbles:!0,composed:!0}))}onVersoFocus(f){f.stopPropagation();let{numero:c}=f.detail;this.activeVerso=c,this.dispatchEvent(new CustomEvent("verso-focus",{detail:{numero:c},bubbles:!0,composed:!0}))}onHiatoToggle(f){f.stopPropagation(),this.dispatchEvent(new CustomEvent("hiato-toggle",{detail:f.detail,bubbles:!0,composed:!0}))}focusVerso(f){this.activeVerso=f,this.shadowRoot?.querySelector(`verso-line[numero="${f}"]`)?.querySelector("[contenteditable]")?.focus()}}g([x({type:Array})],n0.prototype,"versos",void 0),g([x({type:String})],n0.prototype,"titulo",void 0),g([x({type:String})],n0.prototype,"estrategia",void 0),g([x({type:Number})],n0.prototype,"activeVerso",void 0),g([Sf("verso-line")],n0.prototype,"versoLines",void 0),n0=g([Y("soneto-editor")],n0);class s0 extends F{constructor(){super(...arguments);this.showErrors=!0}static styles=H`
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
  `;render(){if(!this.analysis)return y`<span class="metric--muted">· · ·</span>`;let f=[];if(f.push({text:`${this.analysis.numSilabasMetricas} síl.`,class:this.analysis.numSilabasMetricas===11?"metric--ok":"metric--error"}),this.analysis.tipoVerso&&this.analysis.tipoVerso!=="no_endecasilabo")f.push({text:this.analysis.tipoVerso,class:"metric--muted"});if(this.analysis.acentoFinal)f.push({text:this.analysis.acentoFinal,class:"metric--muted"});return y`
      <div>
        <span class="${f[0]?.class||"metric--muted"}">
          ${f.map((c)=>c.text).join(" · ")}
        </span>
        ${this.showErrors&&this.analysis.errores.length>0?y`
          <div class="error-list">
            ${this.analysis.errores.map((c)=>y`
              <span class="metric--error">${c.mensaje}</span>
            `)}
          </div>
        `:""}
      </div>
    `}}g([x({type:Object})],s0.prototype,"analysis",void 0),g([x({type:Boolean})],s0.prototype,"showErrors",void 0),s0=g([Y("verse-metrics")],s0);class l0 extends F{constructor(){super(...arguments);this.sinalefas=[]}static styles=H`
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
  `;render(){return y`
      <svg>
        ${this.renderArcs()}
      </svg>
    `}renderArcs(){if(!this.editorElement||!this.sinalefas.length)return"";let f=this.editorElement.getBoundingClientRect();return this.sinalefas.filter((h)=>!h.descartada).map((h)=>{let i=this.editorElement.querySelectorAll("[data-silaba]"),d=i[h.silabaAnterior],m=i[h.silabaSiguiente];if(!d||!m)return"";let r=d.getBoundingClientRect(),k=m.getBoundingClientRect(),$=r.right-f.left,z=k.left-f.left,o=r.bottom-f.top+2;return y`
        <path
          d="M ${$} ${o} Q ${($+z)/2} ${o+10}, ${z} ${o}"
          fill="none"
          stroke="#8B7355"
          stroke-width="1.5"
          data-silaba="${h.silabaAnterior}"
          @click=${()=>this.onArcClick(h.silabaAnterior)}
        />
      `})}onArcClick(f){this.dispatchEvent(new CustomEvent("sinalefa-click",{detail:{silabaIndex:f},bubbles:!0,composed:!0}))}updated(f){if(f.has("sinalefas")||f.has("editorElement"))this.requestUpdate()}}g([x({type:Array})],l0.prototype,"sinalefas",void 0),g([x({type:Object})],l0.prototype,"editorElement",void 0),l0=g([Y("sinalefa-overlay")],l0);class a0 extends F{static styles=H`
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
  `;render(){if(!this.analysisMap||this.analysisMap.size===0)return y`
        <div class="panel-title">📊 Métrica</div>
        <div class="no-data">Escribe para ver análisis</div>
      `;return y`
      <div class="panel-title">📊 Métrica</div>
      <div class="metrics-list">
        ${this.renderItems()}
      </div>
    `}renderItems(){let f=[];for(let c=1;c<=14;c++){let h=this.analysisMap?.get(c);if(!h)f.push(y`
          <div class="metrics-item">
            <span class="metrics-item__numero">${c}</span>
            <span class="metrics-item__tipo">—</span>
          </div>
        `);else{let i=h.numSilabasMetricas===11?"metrics-item__silabas--ok":"metrics-item__silabas--error";f.push(y`
          <div class="metrics-item">
            <span class="metrics-item__numero">${c}</span>
            <span class="metrics-item__silabas ${i}">
              ${h.numSilabasMetricas}
            </span>
            <span class="metrics-item__tipo">
              ${h.tipoVerso&&h.tipoVerso!=="no_endecasilabo"?h.tipoVerso:h.errores.length>0?"⚠":""}
            </span>
          </div>
        `)}}return f}}g([x({type:Object})],a0.prototype,"analysisMap",void 0),a0=g([Y("metrics-panel")],a0);class e0 extends F{constructor(){super(...arguments);this.versos=[]}static styles=H`
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
  `;render(){if(!this.esquema)return y`
        <div class="panel-title">🎯 Rimas</div>
        <div class="no-data">Completa versos para ver el esquema</div>
      `;let f=this.getPartes();return y`
      <div class="panel-title">🎯 Rimas</div>

      <div class="patron-display">${this.esquema.patron}</div>

      ${this.esquema.esClasico?y`<div class="clasico-badge">✓ ${this.esquema.nombreClasico||"Soneto clásico"}</div>`:y`<div class="libre-badge">✗ Esquema libre</div>`}

      ${f.map((c)=>y`
        <div class="scheme-part">
          ${c.map((h)=>{let i=this.esquema?.asignacion.get(h)||"·",d=this.versos.find((r)=>r.numero===h),m=d?.texto?d.texto.slice(0,20)+(d.texto.length>20?"…":""):"";return y`
              <div class="scheme-line">
                <span class="scheme-line__numero">${h}</span>
                <span class="scheme-line__letra ${i!=="·"?"scheme-line__letra--active":"scheme-line__letra--pending"}">
                  ${i}
                </span>
                <span class="scheme-line__texto">${m||"—"}</span>
              </div>
            `})}
        </div>
      `)}
    `}getPartes(){return[[1,2,3,4],[5,6,7,8],[9,10,11],[12,13,14]]}}g([x({type:Object})],e0.prototype,"esquema",void 0),g([x({type:Array})],e0.prototype,"versos",void 0),e0=g([Y("rhyme-scheme-panel")],e0);class ff extends F{constructor(){super(...arguments);this.total=14;this.completados=0;this.conErrores=0}static styles=H`
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
  `;render(){let f=this.total>0?this.completados/this.total*100:0;return y`
      <div class="track">
        <div class="fill" style="width: ${f}%"></div>
      </div>
      <div class="text">
        ${this.completados} / ${this.total} versos
        ${this.conErrores>0?y`· ⚠ ${this.conErrores}`:""}
      </div>
    `}}g([x({type:Number})],ff.prototype,"total",void 0),g([x({type:Number})],ff.prototype,"completados",void 0),g([x({type:Number})],ff.prototype,"conErrores",void 0),ff=g([Y("progress-bar")],ff);class cf extends F{constructor(){super(...arguments);this.messages=[]}static styles=H`
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
  `;nextId=0;show(f,c="info"){let h=++this.nextId;this.messages=[...this.messages,{id:h,message:f,level:c}],setTimeout(()=>{this.dismissToast(h)},3000)}dismissToast(f){this.messages=this.messages.filter((c)=>c.id!==f)}render(){return y`
      ${this.messages.map((f)=>y`
        <div class="toast toast--${f.level}" @click=${()=>this.dismissToast(f.id)}>
          ${f.message}
        </div>
      `)}
    `}}g([K()],cf.prototype,"messages",void 0),cf=g([Y("app-toast")],cf);class hf extends F{constructor(){super(...arguments);this.title="";this.open=!1}static styles=H`
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
  `;render(){if(!this.open)return y``;return y`
      <div class="modal" @click=${(f)=>f.stopPropagation()}>
        ${this.title?y`<div class="modal__title">${this.title}</div>`:""}
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
    `}onConfirm(){this.dispatchEvent(new CustomEvent("confirm",{bubbles:!0,composed:!0}))}onCancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}onBackdropClick(){this.onCancel()}}g([x({type:String})],hf.prototype,"title",void 0),g([x({type:Boolean})],hf.prototype,"open",void 0),hf=g([Y("app-modal")],hf);class df extends F{constructor(){super(...arguments);this.query="";this.tipoRima="consonante";this.categoria="";this.numSilabas=0}static styles=H`
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
  `;debounceTimer=null;onInput(f){let c=f.target.value;if(this.query=c,this.debounceTimer)clearTimeout(this.debounceTimer);this.debounceTimer=setTimeout(()=>{this.emitSearch()},200)}setTipoRima(f){this.tipoRima=f,this.emitSearch()}setCategoria(f){this.categoria=this.categoria===f?"":f,this.emitSearch()}setNumSilabas(f){this.numSilabas=this.numSilabas===f?0:f,this.emitSearch()}emitSearch(){let f={tipoRima:this.tipoRima};if(this.categoria)f.categoria=this.categoria;if(this.numSilabas>0)f.numSilabas=this.numSilabas;this.dispatchEvent(new CustomEvent("search-change",{detail:{query:this.query,filtros:f},bubbles:!0,composed:!0}))}render(){let f=[{key:"",label:"Todas"},{key:"sustantivo",label:"Sustantivo"},{key:"verbo",label:"Verbo"},{key:"adjetivo",label:"Adjetivo"},{key:"adverbio",label:"Adverbio"}],c=[1,2,3,4,5];return y`
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
          ${f.map((h)=>y`
            <button
              class="chip ${this.categoria===h.key?"chip--active":""}"
              @click=${()=>this.setCategoria(h.key)}
            >
              ${h.label}
            </button>
          `)}
        </div>
      </div>

      <div class="filtros-section">
        <span class="filtros-label">Sílabas</span>
        <div class="silabas-filtro">
          ${c.map((h)=>y`
            <button
              class="chip silaba-chip ${this.numSilabas===h?"chip--active":""}"
              @click=${()=>this.setNumSilabas(h)}
            >
              ${h}
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
    `}}g([x({type:String})],df.prototype,"query",void 0),g([x({type:String})],df.prototype,"tipoRima",void 0),g([x({type:String})],df.prototype,"categoria",void 0),g([x({type:Number})],df.prototype,"numSilabas",void 0),df=g([Y("rhyme-search-input")],df);class mf extends F{constructor(){super(...arguments);this.results=[];this.loading=!1;this.page=0;this.totalPages=0;this.totalResults=0}static styles=H`
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
  `;onSelect(f){this.dispatchEvent(new CustomEvent("rhyme-select",{detail:{palabra:f},bubbles:!0,composed:!0}))}gotoPage(f){if(f<0||f>=this.totalPages)return;this.dispatchEvent(new CustomEvent("page-change",{detail:{page:f},bubbles:!0,composed:!0}))}render(){if(this.loading)return y`
        <div class="results-container">
          <div class="loading">
            <div class="loading-spinner"></div>
            Buscando...
          </div>
        </div>
      `;if(this.results.length===0)return y`
        <div class="results-container">
          <div class="empty-state">
            No se encontraron rimas
          </div>
        </div>
      `;let f=this.agruparPorCategoria(this.results);return y`
      <div class="results-container">
        ${Array.from(f.entries()).map(([c,h])=>{let i=this.agruparPorCampo(h),d=i.size>1;return y`
            <div class="categoria-group">
              <div class="categoria-header">${c}</div>
              ${d?Array.from(i.entries()).map(([m,r])=>y`
                    <div class="campo-group">
                      <div class="campo-header">${m==="sin_campo"?"":m} (${r.length})</div>
                      ${r.map((k)=>this.renderItem(k))}
                    </div>
                  `):h.map((m)=>this.renderItem(m))}
            </div>
          `})}
        <div class="result-count">${this.totalResults} resultados</div>
      </div>
      ${this.totalPages>1?this.renderPagination():""}
    `}renderItem(f){return y`
      <div class="result-item" @click=${()=>this.onSelect(f.palabra)}>
        <span class="result-palabra">${f.palabra}</span>
        <span class="result-meta result-meta--categoria">(${f.categoria})</span>
        <span class="result-meta">${f.numSilabas} síl.</span>
      </div>
    `}renderPagination(){let c=Math.floor(2.5),h=Math.max(0,this.page-c),i=Math.min(this.totalPages,h+5);if(i-h<5)h=Math.max(0,i-5);let d=[];for(let m=h;m<i;m++)d.push(m);return y`
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

        ${d.map((m)=>y`
          <button
            class="pagination-btn ${m===this.page?"pagination-btn--active":""}"
            @click=${()=>this.gotoPage(m)}
          >${m+1}</button>
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
    `}agruparPorCategoria(f){let c=new Map;for(let h of f){let i=h.categoria||"otro";if(!c.has(i))c.set(i,[]);c.get(i).push(h)}return c}agruparPorCampo(f){let c=new Map;for(let h of f){let i=h.campoSemantico||"sin_campo";if(!c.has(i))c.set(i,[]);c.get(i).push(h)}return c}}g([x({type:Array})],mf.prototype,"results",void 0),g([x({type:Boolean})],mf.prototype,"loading",void 0),g([x({type:Number})],mf.prototype,"page",void 0),g([x({type:Number})],mf.prototype,"totalPages",void 0),g([x({type:Number})],mf.prototype,"totalResults",void 0),mf=g([Y("rhyme-result-list")],mf);class rf{db=null;async initialize(){if(this.db)return;return new Promise((f,c)=>{let h=indexedDB.open("ElTallerCorpus",1);h.onupgradeneeded=(i)=>{let d=i.target.result;if(!d.objectStoreNames.contains("palabras")){let m=d.createObjectStore("palabras",{keyPath:"palabra"});m.createIndex("terminacion","terminacion",{unique:!1}),m.createIndex("categoria","categoria",{unique:!1}),m.createIndex("campoSemantico","campoSemantico",{unique:!1})}},h.onsuccess=()=>{this.db=h.result,f()},h.onerror=()=>{c(h.error||Error("Error al abrir IndexedDB"))}})}async isPopulated(){if(!this.db)return!1;return new Promise((f)=>{try{let i=this.db.transaction("palabras","readonly").objectStore("palabras").count();i.onsuccess=()=>f(i.result>0),i.onerror=()=>f(!1)}catch{f(!1)}})}async importWords(f){if(!this.db)throw Error("CorpusDB no inicializada");let c=await this.getExistingKeys();for(let h=0;h<f.length;h+=500){let i=f.slice(h,h+500);await this.importBatch(i,c)}}async getExistingKeys(){return new Promise((f)=>{let i=this.db.transaction("palabras","readonly").objectStore("palabras").getAllKeys();i.onsuccess=()=>f(new Set(i.result.map((d)=>String(d)))),i.onerror=()=>f(new Set)})}async importBatch(f,c){return new Promise((h,i)=>{let d=this.db.transaction("palabras","readwrite"),m=d.objectStore("palabras");for(let r of f)if(!c.has(r.palabra))m.put(r),c.add(r.palabra);d.oncomplete=()=>h(),d.onerror=()=>i(d.error)})}async buscarPorTerminacion(f,c,h=0){if(!this.db)throw Error("CorpusDB no inicializada");let i=await this.getAllByIndex("terminacion",f,h);return this.aplicarFiltros(i,c)}async buscarPorTexto(f,c=200){if(!this.db)throw Error("CorpusDB no inicializada");if(!f||f.length<1)return[];let h=f.toLowerCase().trim(),i=[];return new Promise((d,m)=>{let r=this.db.transaction("palabras","readonly"),k=r.objectStore("palabras"),$=IDBKeyRange.bound(h,h+"￿"),z=k.openCursor($);z.onsuccess=(o)=>{let B=o.target.result;if(B){if(i.push(B.value),c===0||i.length<c)B.continue()}},r.oncomplete=()=>d(i),r.onerror=()=>m(r.error)})}async buscarRimas(f,c="consonante",h){if(c==="consonante")return this.buscarPorTerminacion(f,h);let i=[...f.toLowerCase()].filter((r)=>"aeiouáéíóú".includes(r)).join("");if(!i)return[];let m=(await this.getAllByIndex("terminacion",f[0])).filter((r)=>{return[...r.terminacion.toLowerCase()].filter(($)=>"aeiouáéíóú".includes($)).join("")===i});return this.aplicarFiltros(m,h)}async count(){if(!this.db)return 0;return new Promise((f)=>{let i=this.db.transaction("palabras","readonly").objectStore("palabras").count();i.onsuccess=()=>f(i.result),i.onerror=()=>f(0)})}close(){if(this.db)this.db.close(),this.db=null}getAllByIndex(f,c,h=500){return new Promise((i,d)=>{let m=this.db.transaction("palabras","readonly"),k=m.objectStore("palabras").index(f),$=IDBKeyRange.only(c),z=[],o=k.openCursor($);o.onsuccess=(B)=>{let _=B.target.result;if(_){if(z.push(_.value),h===0||z.length<h)_.continue()}},m.oncomplete=()=>i(z),m.onerror=()=>d(m.error)})}aplicarFiltros(f,c){if(!c)return f;let h=f;if(c?.categoria)h=h.filter((i)=>i.categoria===c.categoria);if(c?.campoSemantico)h=h.filter((i)=>i.campoSemantico===c.campoSemantico);if(c?.numSilabas!==void 0&&c.numSilabas>0)h=h.filter((i)=>i.numSilabas===c.numSilabas);return h}}var lc=500,ac="data/corpus/palabras.json";class p{static async ensureLoaded(f){if(await f.isPopulated())return;document.dispatchEvent(new CustomEvent("corpus:loading-start",{detail:{message:"Cargando diccionario de rimas..."}}));try{let h=await fetch(ac);if(!h.ok)throw Error(`Error al cargar corpus: ${h.status} ${h.statusText}`);await p.streamImport(f,h),document.dispatchEvent(new CustomEvent("corpus:ready"))}catch(h){console.error("[CorpusLoader] Error al cargar corpus:",h),document.dispatchEvent(new CustomEvent("corpus:error",{detail:{message:"Error al cargar el diccionario de rimas"}}))}}static async streamImport(f,c){let h=c.body;if(!h)throw Error("Response body is null");let i=0,d=[],m=new Set,$=h.pipeThrough(new DecompressionStream("gzip")).pipeThrough(new TextDecoderStream).getReader(),z="";try{while(!0){let{done:o,value:B}=await $.read();if(o)break;z+=B;let _=z.split(`
`);z=_.pop()||"";for(let X of _){if(!X.trim())continue;try{let Q=JSON.parse(X);if(d.push(Q),d.length>=lc)await f.importBatch(d,m),i+=d.length,p.reportProgress(i),d=[],await p.yieldToEventLoop()}catch{}}}if(z.trim())try{let o=JSON.parse(z);d.push(o)}catch{}if(d.length>0)await f.importBatch(d,m),i+=d.length,p.reportProgress(i)}finally{$.releaseLock()}}static reportProgress(f){document.dispatchEvent(new CustomEvent("corpus:progress",{detail:{progress:-1,loaded:f,total:0}}))}static async yieldToEventLoop(){if(typeof requestIdleCallback<"u")await new Promise((f)=>{requestIdleCallback(()=>f(),{timeout:500})});else await new Promise((f)=>setTimeout(f,0))}}class kf extends F{constructor(){super(...arguments);this.open=!1;this.versoActivo=null;this.palabraActual="";this.corpusReady=!1;this.loading=!1;this.corpusWordsLoaded=0;this.results=[];this.searchQuery="";this.searchFiltros={};this.allResults=[];this.page=0}static styles=H`
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
  `;pageSize=50;db=null;rhymeEngine=new v;connectedCallback(){super.connectedCallback(),this.initCorpus(),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("corpus:progress",this.onCorpusProgress)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("corpus:progress",this.onCorpusProgress)}async initCorpus(){try{if(this.db=new rf,await this.db.initialize(),await p.ensureLoaded(this.db),this.corpusReady=!0,this.palabraActual)this.doSearch(this.palabraActual,this.searchFiltros)}catch(f){console.error("[RhymeBrowser] Error al inicializar corpus:",f)}}onKeyDown=(f)=>{if(f.key==="Escape"&&this.open)this.close()};onCorpusProgress=(f)=>{let{loaded:c}=f.detail;if(typeof c==="number")this.corpusWordsLoaded=c};close(){this.dispatchEvent(new CustomEvent("panel-close",{bubbles:!0,composed:!0}))}onSearchChange(f){let{query:c,filtros:h}=f.detail;if(this.searchQuery=c,this.searchFiltros=h,!c||c.length<1){this.results=[],this.allResults=[];return}this.page=0,this.doSearch(c,h)}get totalPages(){return Math.ceil(this.allResults.length/this.pageSize)}onPageChange(f){this.page=f.detail.page,this.updateResults()}updateResults(){let f=this.page*this.pageSize;this.results=this.allResults.slice(f,f+this.pageSize)}async doSearch(f,c){if(!this.db||!this.corpusReady)return;this.loading=!0;try{let h=this.rhymeEngine.extraerTerminacionPalabra(f);if(!h){this.results=[];return}let i=await this.db.buscarRimas(h,c.tipoRima||"consonante",c);this.allResults=i.map((d)=>({palabra:d.palabra,terminacion:d.terminacion,categoria:d.categoria,campoSemantico:d.campoSemantico,numSilabas:d.numSilabas,acento:d.acento})),this.updateResults()}catch(h){console.error("[RhymeBrowser] Error en búsqueda:",h),this.results=[]}finally{this.loading=!1}}onRhymeSelect(f){let{palabra:c}=f.detail;this.dispatchEvent(new CustomEvent("rhyme-insert",{detail:{palabra:c,verso:this.versoActivo},bubbles:!0,composed:!0}))}render(){if(!this.open)return y``;return y`
      <div class="panel-header">
        <div>
          <div class="panel-title">Buscador de rimas</div>
          <div class="panel-subtitle">Cmd+R para cerrar</div>
        </div>
        <button class="close-btn" @click=${this.close} aria-label="Cerrar panel de rimas">✕</button>
      </div>

      ${this.versoActivo?y`
        <div class="active-verso">
          Verso ${this.versoActivo}${this.palabraActual?`: «${this.palabraActual}»`:""}
        </div>
      `:""}

      ${!this.corpusReady?y`
        <div class="loading-corpus">
          <div class="corpus-spinner"></div>
          <div class="corpus-loading-text">Preparando el diccionario de rimas…</div>
          <div class="corpus-loading-sub">642 mil palabras con todas sus conjugaciones</div>
          ${this.corpusWordsLoaded>0?y`
            <div class="corpus-loading-progress">
              ${this.corpusWordsLoaded.toLocaleString()} palabras indexadas
            </div>
          `:""}
          <div class="corpus-loading-note">
            Solo la primera vez — después será instantáneo
          </div>
        </div>
      `:y`
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
    `}}g([x({type:Boolean,reflect:!0})],kf.prototype,"open",void 0),g([x({type:Object})],kf.prototype,"versoActivo",void 0),g([x({type:String})],kf.prototype,"palabraActual",void 0),g([K()],kf.prototype,"corpusReady",void 0),g([K()],kf.prototype,"loading",void 0),g([K()],kf.prototype,"corpusWordsLoaded",void 0),g([K()],kf.prototype,"results",void 0),g([K()],kf.prototype,"searchQuery",void 0),g([K()],kf.prototype,"searchFiltros",void 0),g([K()],kf.prototype,"allResults",void 0),g([K()],kf.prototype,"page",void 0),kf=g([Y("rhyme-browser-panel")],kf);class of extends F{static styles=H`
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
    }

    .toolbar__title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #8B4513;
      letter-spacing: 0.02em;
      font-family: 'Crimson Text', Georgia, serif;
    }

    .toolbar__actions {
      display: flex;
      gap: 0.25rem;
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
  `;eventBus=new I0;storage=new A0;analysisService;autoSaveService;exportService=new p0;toastElement;constructor(){super();this.soneto=this.createEmptySoneto();this.analysisMap=new Map;this.rhymePanelOpen=!1;this.selectedVerso=null;this.completados=0;this.conErrores=0;this.analysisService=new S0(this.eventBus),this.autoSaveService=new E0(this.eventBus,this.storage,()=>this.soneto)}connectedCallback(){super.connectedCallback();let f=this.storage.loadLastSoneto();if(f)this.soneto=f,this.analysisService.loadVersos(this.soneto.versos);this.eventBus.on("analysis:complete",({analysis:c,esquema:h})=>{this.analysisMap=c,this.esquema=h;let i=this.soneto.versos.map((d)=>({...d,analysis:c.get(d.numero)||d.analysis}));this.soneto={...this.soneto,versos:i},this.updateProgress()}),this.eventBus.on("ui:toast",({message:c,level:h})=>{this.showToast(c,h)}),this.eventBus.on("soneto:new",()=>{this.nuevoSoneto()}),this.eventBus.on("export:txt",()=>{this.exportarTxt()}),this.eventBus.on("export:clipboard",()=>{this.copiarPortapapeles()}),document.addEventListener("keydown",this.onKeyDown.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.autoSaveService.destroy(),this.analysisService.destroy(),document.removeEventListener("keydown",this.onKeyDown.bind(this))}render(){return y`
      <div class="toolbar">
        <div class="toolbar__title">✎ El Taller</div>
        <div class="toolbar__actions">
          <button class="toolbar-btn" @click=${this.nuevoSoneto} title="Nuevo soneto">
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
          ></soneto-editor>

          <progress-bar
            .total=${14}
            .completados=${this.completados}
            .conErrores=${this.conErrores}
          ></progress-bar>
        </main>

        <aside class="panel-right">
          <metrics-panel .analysisMap=${this.analysisMap}></metrics-panel>
          <rhyme-scheme-panel
            .esquema=${this.esquema}
            .versos=${this.soneto.versos}
          ></rhyme-scheme-panel>
        </aside>
      </div>

      <div class="app-footer">
        <span>Endecasílabos · 11 sílabas métricas</span>
        <span>${this.soneto.versos.filter((f)=>f.texto.trim()).length} versos escritos</span>
      </div>

      <app-toast></app-toast>
    `}createEmptySoneto(){let f=crypto.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`,c=G0().map((h)=>({id:`${f}-v${h}`,numero:h,texto:""}));return{id:f,versos:c,createdAt:Date.now(),updatedAt:Date.now()}}updateProgress(){let f=0,c=0;for(let h of this.soneto.versos)if(h.texto.trim()){f++;let i=this.analysisMap.get(h.numero);if(i&&i.errores.length>0)c++}this.completados=f,this.conErrores=c}onVersoInput(f){let{numero:c,texto:h}=f.detail,i=this.soneto.versos.find((d)=>d.numero===c);if(i)i.texto=h,this.soneto.updatedAt=Date.now(),this.eventBus.emit("verso:input",{numero:c,texto:h})}onVersoBlur(f){let{numero:c}=f.detail;this.eventBus.emit("verso:blur",{numero:c})}onVersoFocus(f){let{numero:c}=f.detail;this.selectedVerso=c,this.eventBus.emit("verso:focus",{numero:c})}onTituloChange(f){this.soneto.titulo=f.detail.titulo}onEstrategiaChange(f){this.soneto.estrategia=f.detail.estrategia}onHiatoToggle(f){let{numero:c,silabaIndex:h}=f.detail;this.eventBus.emit("hiato:toggle",{numero:c,silabaIndex:h})}toggleRhymePanel(){this.rhymePanelOpen=!this.rhymePanelOpen,this.eventBus.emit("ui:panel-toggle",{panel:"rhyme-browser",open:this.rhymePanelOpen})}nuevoSoneto(){if(this.completados>0)this.storage.saveToHistory(this.soneto);this.soneto=this.createEmptySoneto(),this.analysisMap=new Map,this.esquema=void 0,this.completados=0,this.conErrores=0,this.eventBus.emit("soneto:new",{}),this.showToast("Nuevo soneto creado","info")}exportarTxt(){this.exportService.exportToTxt(this.soneto),this.showToast("Soneto exportado como .txt","info")}exportarPdf(){this.exportService.exportToPdf(this.soneto),this.showToast("Soneto exportado como PDF","info")}async copiarPortapapeles(){let f=await this.exportService.copyToClipboard(this.soneto);this.showToast(f?"Soneto copiado al portapapeles":"Error al copiar al portapapeles",f?"info":"error")}getPalabraActual(){if(!this.selectedVerso)return"";let f=this.soneto.versos.find((h)=>h.numero===this.selectedVerso);if(!f||!f.texto.trim())return"";let c=f.texto.trim().split(/\s+/);return c[c.length-1].replace(/[¿?!¡;:.,()\-"'«»]/g,"")}onRhymeInsert(f){let{palabra:c,verso:h}=f.detail;if(!h)return;let i=this.soneto.versos.find((m)=>m.numero===h);if(!i)return;let d=i.texto.trim().split(/\s+/);if(d.length>0&&i.texto.trim().length>0)d[d.length-1]=c,i.texto=d.join(" ")+" ";else i.texto=c+" ";this.soneto.updatedAt=Date.now(),this.requestUpdate(),this.eventBus.emit("verso:input",{numero:h,texto:i.texto}),this.showToast(`"${c}" insertada en verso ${h}`,"info")}onRhymePanelClose(){this.rhymePanelOpen=!1,this.eventBus.emit("ui:panel-toggle",{panel:"rhyme-browser",open:!1})}showToast(f,c="info"){let h=this.shadowRoot?.querySelector("app-toast");if(h?.show)h.show(f,c)}onKeyDown(f){if((f.metaKey||f.ctrlKey)&&f.key==="r")f.preventDefault(),this.toggleRhymePanel();if((f.metaKey||f.ctrlKey)&&f.key==="s")f.preventDefault(),this.autoSaveService.saveNow(),this.showToast("Soneto guardado","info");if((f.metaKey||f.ctrlKey)&&f.key==="n")f.preventDefault(),this.nuevoSoneto()}}g([K()],of.prototype,"soneto",void 0),g([K()],of.prototype,"analysisMap",void 0),g([K()],of.prototype,"esquema",void 0),g([K()],of.prototype,"rhymePanelOpen",void 0),g([K()],of.prototype,"selectedVerso",void 0),g([K()],of.prototype,"completados",void 0),g([K()],of.prototype,"conErrores",void 0),of=g([Y("el-taller-app")],of);if("serviceWorker"in navigator)window.addEventListener("load",()=>{});console.log(`
  ╔══════════════════════════════╗
  ║    ✎ El Taller v0.1.0       ║
  ║  Asistente de sonetos        ║
  ║  Buscador de rimas activo    ║
  ╚══════════════════════════════╝
  Stack: Bun + TypeScript + Lit
`);
