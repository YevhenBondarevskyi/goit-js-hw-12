import{a as w,S as b,i as n}from"./assets/vendor-Dy2ZTtfi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();async function g(s,r=1){const e="51053325-3e2bfd05922f90ae0c618f7f8",i=new URLSearchParams({key:e,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15});return(await w(`https://pixabay.com/api/?${i}`)).data}const y=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-btn"),L=new b(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function h(s){const r=s.map(e=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
        <img
        class="gallery-img"
        src="${e.webformatURL}"
        alt="${e.tags}"
        width="360" />
        </a>
        <div class="descr">
       <p class="descr-label">Likes <span class="descr-span">${e.likes}</span></p>
       <p class="descr-label">Views <span class="descr-span">${e.views}</span></p>
       <p class="descr-label">Comments <span class="descr-span">${e.comments}</span></p>
       <p class="descr-label">Downloads <span class="descr-span">${e.downloads}</span></p>
       </div>
        </li>
        `).join("");y.insertAdjacentHTML("beforeend",r),L.refresh()}function S(){y.innerHTML=""}function P(){f.style.display="block"}function v(){f.style.display="none"}function q(){m.style.display="block"}function u(){m.style.display="none"}const E=document.querySelector(".form"),p=document.querySelector("input"),R=document.querySelector(".load-btn");E.addEventListener("submit",B);R.addEventListener("click",C);u();let a=1,c="",d;const $=15;async function B(s){s.preventDefault();const r=p.value.toLowerCase().trim();if(c=r,a=1,!r){n.warning({title:"Info",message:"Please, enter a searching word!",position:"topRight"});return}S(),u(),P();try{const e=await g(c,a);if(e.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(e.hits),p.value="",d=Math.ceil(e.totalHits/$),a<d&&q()}catch{n.error({title:"Error",message:"Something went wrong. Please, try again!",position:"topRight"})}finally{v()}}async function C(){a+=1;try{const s=await g(c,a);h(s.hits),a>=d&&(u(),n.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}catch{n.error({title:"Error",message:"Something went wrong. Please, try again!",position:"topRight"})}}
//# sourceMappingURL=index.js.map
