/* empty css                      */import{a as m,S as p,i as a}from"./assets/vendor-tnUJPedx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="48548888-6a688bae8a9a8d1a3f9b35105",g="https://pixabay.com/api/";async function h(o){try{return(await m.get(g,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){return console.error("Ошибка при загрузке изображений:",r),[]}}function b(o,r){r.innerHTML=o.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:u,comments:f,downloads:d})=>`
      <a href="${e}" class="gallery-item">
        <img src="${i}" alt="${t}" />
        <div class="info">
          <p>❤️ ${n} | 👀 ${u} | 💬 ${f} | ⬇️ ${d}</p>
        </div>
      </a>
    `).join(""),new p(".gallery a").refresh()}const L=document.querySelector("#search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");L.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements.searchQuery.value.trim();if(!r){a.error({title:"Ошибка",message:"Введите слово для поиска!"});return}c.innerHTML="",l.style.display="block";const s=await h(r);if(l.style.display="none",s.length===0){a.warning({title:"Упс...",message:"Изображения не найдены, попробуйте другой запрос."});return}b(s,c)});
//# sourceMappingURL=index.js.map
