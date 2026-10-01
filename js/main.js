// Mobile nav
const burger=document.querySelector('.burger'),links=document.querySelector('.nav-links');
if(burger){burger.addEventListener('click',()=>{const o=links.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');burger.setAttribute('aria-expanded',false)}))}

// Scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

// Count-up numbers: <b data-count="1.2" data-suffix="M" data-dec="1">
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);
  const el=e.target,end=+el.dataset.count,dec=+(el.dataset.dec||0),pre=el.dataset.prefix||'',suf=el.dataset.suffix||'',t0=performance.now();
  const tick=t=>{const p=Math.min((t-t0)/1400,1),v=end*(1-Math.pow(1-p,3));el.textContent=pre+v.toFixed(dec)+suf;if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));

// Work filters
const chips=document.querySelectorAll('.chip');
chips.forEach(c=>c.addEventListener('click',()=>{chips.forEach(x=>x.classList.remove('on'));c.classList.add('on');
  const f=c.dataset.filter;document.querySelectorAll('.work-grid .vcard').forEach(v=>v.classList.toggle('hide',f!=='all'&&v.dataset.cat!==f))}));

// Subtle 3D tilt on cards (pointer devices only)
if(matchMedia('(hover:hover)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
  document.querySelectorAll('.work-grid .vcard').forEach(c=>{
    c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      c.style.transform=`perspective(700px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-8px)`});
    c.addEventListener('pointerleave',()=>c.style.transform='')})}

// Contact form (front-end only — wire `action` to Formspree/Netlify/etc. to receive submissions)
const form=document.querySelector('#contact-form');
if(form){form.addEventListener('submit',async e=>{e.preventDefault();
  if(!form.checkValidity()){form.reportValidity();return}
  const action=form.getAttribute('action');
  if(action&&action!=='#'){try{await fetch(action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}})}catch(_){}}
  form.classList.add('sent');form.querySelector('.success').classList.add('show')})}

document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
