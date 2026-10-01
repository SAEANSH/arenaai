// Mobile nav
const burger=document.querySelector('.burger'),links=document.querySelector('.nav-links');
if(burger){burger.addEventListener('click',()=>{const o=links.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');burger.setAttribute('aria-expanded',false)}))}

// Reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv,.chart').forEach(el=>io.observe(el));

// Count-up: <b data-count="1.2" data-dec="1" data-suffix="M">
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);
  const el=e.target,end=+el.dataset.count,dec=+(el.dataset.dec||0),pre=el.dataset.prefix||'',suf=el.dataset.suffix||'',t0=performance.now();
  const tick=t=>{const p=Math.min((t-t0)/1300,1),v=end*(1-Math.pow(1-p,4));el.textContent=pre+v.toFixed(dec)+suf;if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));

// Timeline timecode follows the CSS playhead (9s loop = 30s of "footage")
const ph=document.querySelector('.playhead b');
if(ph){const t0=performance.now();(function f(t){const s=(((t-t0)/1000)%9)/9*30,m=Math.floor(s),fr=Math.floor((s-m)*30);
  ph.textContent=`00:${String(m).padStart(2,'0')}:${String(fr).padStart(2,'0')}`;requestAnimationFrame(f)})(t0)}

// Work filters
const tabs=document.querySelectorAll('.tab');
tabs.forEach(c=>c.addEventListener('click',()=>{tabs.forEach(x=>x.classList.remove('on'));c.classList.add('on');
  const f=c.dataset.filter;document.querySelectorAll('.work-grid .clip').forEach(v=>v.classList.toggle('hide',f!=='all'&&v.dataset.cat!==f))}));

// Contact form: front-end only. Set <form action="..."> to Formspree/Netlify/etc. to receive submissions.
const form=document.querySelector('#contact-form');
if(form){form.addEventListener('submit',async e=>{e.preventDefault();
  if(!form.checkValidity()){form.reportValidity();return}
  const action=form.getAttribute('action');
  if(action&&action!=='#'){try{await fetch(action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}})}catch(_){}}
  form.classList.add('sent');form.querySelector('.success').classList.add('show')})}

document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
