import{C as f}from"./Common.7f25dcb3.js";import{P as k}from"./PageHeader.7051df09.js";import{_ as g,f as h,u as v,G as L,i as B,o as t,g as w,w as x,d as C,a as e,c as o,F as c,D as u,h as y,t as i}from"./app.0e8dadff.js";const D={class:"links-wrapper"},F={class:"link-group"},P={class:"content"},$=["href"],N=["src"],T={class:"sitename"},V={class:"desc"},b=h({__name:"Links",setup(E){const a=v(),_=L(),p=B(()=>{var r;const s=a.value.pages&&a.value.pages.links?a.value.pages.links:{};return s.title===void 0&&(s.title=(r=a.value.pageText)==null?void 0:r.links),s});return(s,r)=>(t(),w(f,null,{page:x(()=>[C(k,{"page-info":p.value},null,8,["page-info"]),e("div",D,[(t(!0),o(c,null,u(y(_).links,(l,d)=>(t(),o("div",{key:`link-group-${d}`,class:"link-section"},[e("h2",null,i(l.title),1),e("div",F,[(t(!0),o(c,null,u(l.items,(n,m)=>(t(),o("div",{key:`link-${m}`,class:"link-item"},[e("div",P,[e("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:s.$withBase(n.img)},null,8,N),e("span",T,i(n.sitename),1),e("div",V,i(n.desc),1)],8,$)])]))),128))])]))),128))])]),_:1}))}});var S=g(b,[["__file","Links.vue"]]);export{S as default};
