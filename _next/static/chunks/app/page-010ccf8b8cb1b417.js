(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2693:function(e,t,n){Promise.resolve().then(n.bind(n,8431))},3934:function(e,t,n){"use strict";n.d(t,{a9:function(){return a},m5:function(){return d},rw:function(){return p},xl:function(){return s},fs:function(){return i},xP:function(){return l},Eo:function(){return c}});let a={TT_PIXEL_ID:"CKNOFJ3C77U740699A5G",GTM_ID:"GTM-K9V3TGJ3"};var o=n(7948);let r=e=>{o.toast.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},c=e=>{o.toast.error(e,{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},i=(e,t)=>{let n=document.createElement("script");n.src=e,n.onload=n.onreadystatechange=function(){(!this.readyState||"loaded"===this.readyState||"complete"===this.readyState)&&(t&&t(),this.onload=this.onreadystatechange=null,this.parentNode&&this.parentNode.removeChild(this))},document.getElementsByTagName("head")[0].appendChild(n)},s=async e=>{let t=await fetch(e);return t.ok?await t.text():(c("Failed to fetch file from"+e),"")},l=e=>new Promise((t,n)=>{e.execute(e=>{e.code&&n(e),t(e)})}),d=e=>{window.dataLayer.push({ecommerce:null}),window.gtag("event",e,{transaction_id:"T_12345",value:Math.floor(100*Math.random())+1,currency:"USD",user_data:{email_address:"email@example.com",phone_number:"+15551234567",address:{first_name:"John",last_name:"Doe",city:"San Jose",region:"ca",postal_code:"95002",country:"usa"}},items:[{item_id:"SKU_12345",item_name:"Stan and Friends Tee",item_brand:"Google",item_category:"Apparel",price:10.01,quantity:3}]}),r("gtag("+e+")")},p=e=>{window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:e,user_data:{email_address:"email@example.com",phone_number:"+15551234567",address:{first_name:"John",last_name:"Doe",city:"San Jose",region:"ca",postal_code:"95002",country:"usa"}},ecommerce:{transaction_id:"T_12345",value:Math.floor(100*Math.random())+1,currency:"USD",items:[{item_id:"SKU_12345",item_name:"Stan and Friends Tee",item_brand:"Google",item_category:"Apparel",price:10.01,quantity:3}]}}),r("dataLayer.push("+e+")")}},8431:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(7437),o=n(6691),r=n.n(o),c=n(345),i=n.n(c),s=n(3934),l=n(2265);function d(e){let{href:t,title:n,description:o,onClick:r}=e;return(0,a.jsxs)("a",{href:t,className:i().card,target:"_blank",rel:"noopener noreferrer",onClick:r,children:[(0,a.jsxs)("h2",{children:[n,(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{children:o})]})}let p="(not selected)",u="proto-web-container",g=["https://www.googleapis.com/auth/tagmanager.edit.containers","https://www.googleapis.com/auth/tagmanager.edit.containerversions","https://www.googleapis.com/auth/tagmanager.publish"];function h(e){let{pixelId:t}=e,[n,o]=(0,l.useState)(0),[r,c]=(0,l.useState)([]),[h,m]=(0,l.useState)([]),[_,w]=(0,l.useState)([]),[v,x]=(0,l.useState)([]),[f,b]=(0,l.useState)(!1),[j,k]=(0,l.useState)(!1),[C,y]=(0,l.useState)({label:p,value:p}),[T,S]=(0,l.useState)({label:p,value:p}),[N,P]=(0,l.useState)({label:p,value:p}),[L,G]=(0,l.useState)(""),[O,E]=(0,l.useState)(""),[M,A]=(0,l.useState)(""),[D,I]=(0,l.useState)("");(0,l.useEffect)(()=>{window.gapiLoad||(window.gapiLoad=U,(0,s.fs)("https://apis.google.com/js/api.js?onload=gapiLoad",window.gapiLoad)),window.gisLoad||(window.gisLoad=W,(0,s.fs)("https://accounts.google.com/gsi/client",window.gisLoad))},[]),(0,l.useEffect)(()=>{f&&j&&n>0&&(window.gisClient.callback=e=>{if(void 0!==e.error)throw e;Y()},q())},[f,j,n]),(0,l.useEffect)(()=>{(0,s.xl)("/tt_web_template_v1.tpl").then(e=>{G(e)}),(0,s.xl)("/tt_server_template_v1.tpl").then(e=>{E(e)}),(0,s.xl)("/tt_web_template_v2.tpl").then(e=>{A(e)}),(0,s.xl)("/tt_server_template_v2.tpl").then(e=>{I(e)})},[]);let U=()=>{window.gapi&&window.gapi.load("client",()=>{window.gapi.client.init({}).then(()=>{b(!0)})})},W=()=>{window.google&&(window.gisClient=window.google.accounts.oauth2.initTokenClient({client_id:"289624798328-aqa97i679hubilrdvjubuundcqvot92g.apps.googleusercontent.com",scope:g.join(" "),callback:""}),k(!0))},q=()=>{window.gisClient&&window.gisClient.requestAccessToken({prompt:""})},H=()=>new Promise((e,t)=>{window.gapi.client.load("tagmanager","v2",e)}),J=async()=>new Promise((e,t)=>{K().then(V).then(B).then(F)}),K=()=>{let e=window.gapi.client.tagmanager.accounts.list();return(0,s.xP)(e).then(e=>{let t=e.account||[];if(!t.length){console.error("NO_GTM_ACCOUNT");return}console.info("accountList=",t);let n=t.map(e=>({label:e.name,value:e.path}));c(n);let a=t[0]?t[0].path:"";if(!a){console.error("NO_ACCOUNT_PATH");return}return n.length>=1&&y(n[0]),a}).catch(e=>{console.error(e)})},V=e=>{let t=window.gapi.client.tagmanager.accounts.containers.list({parent:e});return(0,s.xP)(t).then(e=>{let t=e.container||[];console.info("containerList=",t);let n=t.map(e=>({label:e.name,value:e.path}));m(n);let a=t[0]?t[0].path:"";if(!a){console.error("NO_CONTAINER_PATH");return}return n.length>=1&&S(n[0]),a}).catch(e=>{console.error(e)})},B=e=>{let t=window.gapi.client.tagmanager.accounts.containers.workspaces.list({parent:e});return(0,s.xP)(t).then(e=>{let t=e.workspace||[];console.info("workspaceList=",t);let n=t.map(e=>({label:e.name,value:e.path}));w(n);let a=t[0]?t[0].path:"";if(!a){console.error("NO_WORKSPACE_PATH");return}return n.length>=1&&P(n[0]),a}).catch(e=>{console.error(e)})},F=e=>{let t=window.gapi.client.tagmanager.accounts.containers.workspaces.tags.list({parent:e});return(0,s.xP)(t).then(e=>{let t=e.tag||[];return console.info("tagList=",t),x(t.map(e=>({label:e.name,value:e.path}))),t}).catch(e=>{console.error(e)})},R=e=>{let t=window.gapi.client.tagmanager.accounts.containers.workspaces.triggers.list({parent:e});return(0,s.xP)(t).then(e=>{let t=e.trigger||[];return console.info("triggerList=",t),t}).catch(e=>{console.error(e)})},X=e=>{let t=window.gapi.client.tagmanager.accounts.containers.workspaces.variables.list({parent:e});return(0,s.xP)(t).then(e=>{let t=e.variable||[];return console.info("varList=",t),t}).catch(e=>{console.error(e)})},Q=e=>{let t=window.gapi.client.tagmanager.accounts.containers.workspaces.templates.list({parent:e});return(0,s.xP)(t).then(e=>{let t=e.template||[];return console.info("templateList=",t),t}).catch(e=>{console.error(e)})},Y=()=>{H().then(J).catch(e=>{console.error(e)})},z=e=>{(0,s.rw)("search"),y(e),V(e.value).then(B).then(F)},Z=e=>{(0,s.rw)("view_item"),S(e),B(e.value).then(F)},$=e=>{(0,s.rw)("add_payment_info"),P(e),F(e.value)};return(0,a.jsxs)("div",{className:i().gtm_connection,children:[(0,a.jsx)("div",{children:(0,a.jsxs)("p",{className:i().center_text,children:["Select account: ",(0,a.jsx)("code",{className:i().code,children:C.label}),(0,a.jsx)("br",{}),"Select container: ",(0,a.jsx)("code",{className:i().code,children:T.label}),(0,a.jsx)("br",{}),"Select workspace: ",(0,a.jsx)("code",{className:i().code,children:N.label}),(0,a.jsx)("br",{})]})}),(0,a.jsxs)("div",{className:i().grid,children:[(0,a.jsx)(d,{title:"Login Google",description:"Login Google account to manage Google Tag Manager.",onClick:()=>{(0,s.rw)("sign_up"),o(e=>e+1)}}),(0,a.jsx)(d,{title:"Print GTM Items",description:"Print all the GTM components to console.",onClick:()=>{if((0,s.rw)("add_to_wishlist"),console.info("ttWebTemplateV2=",M),console.info("ttServerTemplateV2=",D),N.value==p){(0,s.Eo)("Workspace not selected");return}let e=new Date().toISOString();console.info(""),console.info("---["+e+"] Components---"),Promise.all([F(N.value),R(N.value),X(N.value),Q(N.value)]).then(()=>{console.info("---["+e+"] Components---")})}}),(0,a.jsx)(d,{title:"Create Container",description:'Create a web container "'.concat(u,'" in selected GTM account.'),onClick:()=>{if((0,s.m5)("view_content"),C.value==p){(0,s.Eo)("Account not selected");return}let e=window.gapi.client.tagmanager.accounts.containers.create({parent:C.value},{name:u,usageContext:["web"],description:"Proto Web container"});return(0,s.xP)(e).then(e=>{console.info("create container response:",e),V(C.value)}).catch(e=>{console.error(e)})}}),(0,a.jsx)(d,{title:"Create Templates",description:"Create client template in selected GTM account.",onClick:()=>{if((0,s.rw)("begin_checkout"),N.value==p){(0,s.Eo)("Workspace not selected");return}let e=window.gapi.client.tagmanager.accounts.containers.workspaces.templates.create({parent:N.value},{name:"TikTok Pixel Test",galleryReference:{host:"github.com",owner:"tiktok",repository:"gtm-template-pixel",version:"078f5d7f808bb5cd7a24b5c4fa7c4adc2f7dcc8c",signature:"e4a951e9950b811972c13c8c61c9620ba88ac6142f914041e471b6f624a49653"},templateData:L});return(0,s.xP)(e).then(e=>{console.info("create template response:",e)}).catch(e=>{console.error(e)})}}),(0,a.jsx)(d,{title:"Create Tags",description:"Create all the tags in selected GTM account.",onClick:()=>{if((0,s.rw)("add_to_cart"),N.value==p){(0,s.Eo)("Workspace not selected");return}let e=window.gapi.client.tagmanager.accounts.containers.workspaces.tags.create({parent:N.value},{name:"proto-web-container-tag",type:"cvt_171648748_6",parameter:[{key:"pixel_code",type:"template",value:t}]});return(0,s.xP)(e).then(e=>{console.info("create container response:",e),F(N.value)}).catch(e=>{console.error(e)})}})]}),(0,a.jsx)("h1",{style:{display:r.length>0?"":"none"},children:"Accounts"}),(0,a.jsx)("div",{className:i().grid,children:r.map(e=>(0,a.jsx)(d,{title:e.label,description:e.value,onClick:()=>z(e)},e.value))}),(0,a.jsx)("h1",{style:{display:h.length>0?"":"none"},children:"Containers"}),(0,a.jsx)("div",{className:i().grid,children:h.map(e=>(0,a.jsx)(d,{title:e.label,description:e.value,onClick:()=>Z(e)},e.value))}),(0,a.jsx)("h1",{style:{display:_.length>0?"":"none"},children:"Workspaces"}),(0,a.jsx)("div",{className:i().grid,children:_.map(e=>(0,a.jsx)(d,{title:e.label,description:e.value,onClick:()=>$(e)},e.value))}),(0,a.jsx)("h1",{style:{display:v.length>0?"":"none"},children:"Tags"}),v.map(e=>(0,a.jsxs)("div",{children:[(0,a.jsxs)("h4",{children:[e.label,":"]}),(0,a.jsx)("p",{children:e.value}),(0,a.jsx)("br",{})]},e.value))]})}function m(){let[e,t]=(0,l.useState)(s.a9.TT_PIXEL_ID);return(0,a.jsxs)("main",{className:i().main,children:[(0,a.jsxs)("div",{className:i().description,children:[(0,a.jsxs)("p",{children:["Pixel: \xa0",(0,a.jsx)("code",{className:i().code,children:e})," ",(0,a.jsx)("br",{}),"GTM: \xa0\xa0\xa0",(0,a.jsx)("code",{className:i().code,children:s.a9.GTM_ID})]}),(0,a.jsx)("div",{children:(0,a.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,a.jsx)(r(),{src:"/vercel.svg",alt:"Vercel Logo",className:i().vercelLogo,width:100,height:24,priority:!0})]})})]}),(0,a.jsx)(h,{pixelId:e})]})}},345:function(e){e.exports={main:"page_main__GlU4n",gtm_connection:"page_gtm_connection__pCqu7",center_text:"page_center_text__TiXxN",description:"page_description__86bsR",code:"page_code__9lUUd",grid:"page_grid__f5Kdy",card:"page_card__QV0Om",center:"page_center__5oHG7",logo:"page_logo__7fc9l",content:"page_content__kDoxQ",vercelLogo:"page_vercelLogo__rOY_u",rotate:"page_rotate__durgN"}}},function(e){e.O(0,[58,971,938,744],function(){return e(e.s=2693)}),_N_E=e.O()}]);