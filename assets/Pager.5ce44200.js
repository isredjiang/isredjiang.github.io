import{f as i,r as l,o as e,c as n,g as s,w as c,b as d,t as r,s as a,_ as u}from"./app.0e8dadff.js";const x={class:"pager"},k={key:0},v={key:1},m={key:0},f={key:1},y=i({__name:"Pager",props:{data:{type:Object,required:!0}},setup(t){return(h,g)=>{const o=l("RouterLink");return e(),n("div",x,[t.data.prev?(e(),s(o,{key:0,class:"prev",to:t.data.prev.link},{default:c(()=>[d(r(t.data.prev.text)+" ",1),t.data.prev.title?(e(),n("br",k)):a("",!0),t.data.prev.title?(e(),n("span",v,r(t.data.prev.title),1)):a("",!0)]),_:1},8,["to"])):a("",!0),t.data.next?(e(),s(o,{key:1,class:"next",to:t.data.next.link},{default:c(()=>[d(r(t.data.next.text)+" ",1),t.data.next.title?(e(),n("br",m)):a("",!0),t.data.next.title?(e(),n("span",f,r(t.data.next.title),1)):a("",!0)]),_:1},8,["to"])):a("",!0)])}}});var C=u(y,[["__file","Pager.vue"]]);export{C as P};
