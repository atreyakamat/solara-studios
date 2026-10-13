
(function(){
  var html=document.documentElement;
  var rm=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine=window.matchMedia&&window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  var EMAIL="atkamat1204@gmail.com";
  function all(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));}

  /* ---------------------------------------------------------------- nav */
  var m=document.getElementById("menu"),n=document.getElementById("nav");
  if(m&&n){m.addEventListener("click",function(){var o=n.classList.toggle("open");m.setAttribute("aria-expanded",o);});
    n.addEventListener("click",function(e){if(e.target.tagName==="A"){n.classList.remove("open");m.setAttribute("aria-expanded","false");}});}

  /* ------------------------------------------------------------ palette */
  /* The <head> snippet applies the stored palette before first paint; this
     only keeps the dock buttons in step and saves new choices. */
  var PALS=["cobalt","indigo","delft","oxblood"];
  function setPal(p,save){
    if(PALS.indexOf(p)<0)p="cobalt";
    html.setAttribute("data-pal",p);
    all(".sw").forEach(function(s){s.setAttribute("aria-pressed",s.getAttribute("data-p")===p?"true":"false");});
    if(save){try{localStorage.setItem("solara-pal",p);}catch(e){}}
  }
  setPal(html.getAttribute("data-pal")||"cobalt",false);
  all(".sw").forEach(function(s){
    s.addEventListener("click",function(){setPal(s.getAttribute("data-p"),true);});
  });

  /* --------------------------------------------------- scroll reveal (3D) */
  var els=all(".head,.pc,.item,.fact,.pr2>div,ol.steps li,.cta,.wc,.gc,.vc,.founder,.prot>div,.statement,.plate,.alm,.anchor");
  if(!rm&&"IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target);}});},{threshold:.12});
    els.forEach(function(el){el.classList.add("rv");io.observe(el);});
  } else {els.forEach(function(el){el.classList.add("in");});}

  /* ------------------------------------------------- pointer tilt on cards */
  if(!rm&&fine){
    all(".tilt").forEach(function(c){
      var frame=null;
      c.addEventListener("pointerenter",function(){c.classList.add("live");});
      c.addEventListener("pointermove",function(e){
        if(frame)return;
        frame=requestAnimationFrame(function(){
          frame=null;
          var r=c.getBoundingClientRect();
          if(!r.width||!r.height)return;
          var x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
          c.style.setProperty("--ry",((x-.5)*9).toFixed(2));
          c.style.setProperty("--rx",((.5-y)*7).toFixed(2));
          c.style.setProperty("--mx",(x*100).toFixed(1)+"%");
          c.style.setProperty("--my",(y*100).toFixed(1)+"%");
        });
      });
      c.addEventListener("pointerleave",function(){
        c.classList.remove("live");
        c.style.setProperty("--rx","0");c.style.setProperty("--ry","0");
      });
    });
  }

  /* ------------------------------------------------------- hero parallax */
  var hero=document.querySelector(".hero");
  if(hero&&!rm&&fine){
    hero.style.setProperty("--pz","1");
    var hf=null;
    hero.addEventListener("pointerenter",function(){hero.classList.add("live");});
    hero.addEventListener("pointermove",function(e){
      if(hf)return;
      hf=requestAnimationFrame(function(){
        hf=null;
        var r=hero.getBoundingClientRect();
        if(!r.width||!r.height)return;
        hero.style.setProperty("--px",(((e.clientX-r.left)/r.width-.5)*2).toFixed(3));
        hero.style.setProperty("--py",(((e.clientY-r.top)/r.height-.5)*2).toFixed(3));
      });
    });
    hero.addEventListener("pointerleave",function(){
      hero.classList.remove("live");
      hero.style.setProperty("--px","0");hero.style.setProperty("--py","0");
    });
  }

  /* -------------------------------------------- bookmark shelf (practices) */
  var tabs=all(".bm");
  if(tabs.length){
    var show=function(id,animate){
      all(".leaf").forEach(function(l){
        var on=l.id===id;
        l.hidden=!on;
        if(on&&animate&&!rm){l.classList.remove("turn");void l.offsetWidth;l.classList.add("turn");}
      });
      tabs.forEach(function(t){t.setAttribute("aria-selected",t.getAttribute("aria-controls")===id?"true":"false");});
    };
    tabs.forEach(function(t,i){
      t.addEventListener("click",function(){show(t.getAttribute("aria-controls"),true);});
      t.addEventListener("keydown",function(e){
        var k=e.key,nx=null;
        if(k==="ArrowRight"||k==="ArrowDown")nx=tabs[(i+1)%tabs.length];
        if(k==="ArrowLeft"||k==="ArrowUp")nx=tabs[(i-1+tabs.length)%tabs.length];
        if(k==="Home")nx=tabs[0];
        if(k==="End")nx=tabs[tabs.length-1];
        if(nx){e.preventDefault();nx.focus();show(nx.getAttribute("aria-controls"),true);}
      });
    });
  }

  /* --------------------------------------------------------- floating dock */
  var dock=document.querySelector(".dock");
  if(dock){
    var sf=null,tick=function(){
      if(sf)return;
      sf=requestAnimationFrame(function(){sf=null;dock.classList.toggle("up",window.pageYOffset>420);});
    };
    window.addEventListener("scroll",tick,{passive:true});tick();
    var tp=dock.querySelector(".top");
    if(tp)tp.addEventListener("click",function(){
      window.scrollTo(rm?{top:0}:{top:0,behavior:"smooth"});
    });
  }

  /* --------------------------------------------- post a form to Netlify */
  function post(form){
    return fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},
      body:new URLSearchParams(new FormData(form)).toString()})
      .then(function(r){if(!r.ok)throw new Error("status "+r.status);return r;});
  }

  /* ------------------------------------------------- almanac (wax seal) */
  var alm=document.getElementById("alm");
  if(alm){
    var amsg=document.getElementById("alm-msg"),seal=document.querySelector(".seal"),abtn=document.getElementById("alm-send");
    alm.addEventListener("submit",function(e){
      e.preventDefault();
      var em=document.getElementById("alm-email").value.trim();
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){amsg.textContent="Please enter a valid email address.";return;}
      abtn.disabled=true;amsg.textContent="Sending…";
      post(alm).then(function(){
        alm.reset();amsg.textContent="You are on the list. The next Almanac goes out at the start of the month.";
        if(seal)seal.classList.add("on");
      }).catch(function(){
        amsg.textContent="That did not send. Please write to "+EMAIL+" and we will add you.";
      }).then(function(){abtn.disabled=false;});
    });
  }

  /* -------------------------------------------------------- project brief */
  var f=document.getElementById("brief");if(!f)return;
  var out=document.getElementById("out"),st=document.getElementById("status"),btn=document.getElementById("send");
  var q=new URLSearchParams(location.search).get("plan");
  if(q){var sel=document.getElementById("f-offer");
    if(sel){var want=q.replace(/\+/g," ");
      for(var i=0;i<sel.options.length;i++){if(sel.options[i].text.indexOf(want)===0){sel.selectedIndex=i;break;}}}}
  function v(id){var el=document.getElementById(id);return el?el.value.trim():"";}
  f.addEventListener("submit",function(e){
    e.preventDefault();
    var em=v("f-email");
    if(!v("f-name")||!v("f-msg")||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){st.textContent="Please add your name, a valid email and what the site should achieve.";return;}
    btn.disabled=true;st.textContent="Sending…";out.style.display="none";
    post(f).then(function(){f.reset();st.textContent="Thank you. Your brief has been sent. Expect a reply within 24 hours.";})
    .catch(function(){
      var off=document.getElementById("f-offer");
      var t="Project brief for Solara Studios\n\nName: "+v("f-name")+"\nEmail: "+em+"\nCompany: "+(v("f-co")||"-")+"\nWebsite: "+(v("f-site")||"-")+"\nPackage: "+(off?off.value:"-")+"\n\nGoal and timing:\n"+v("f-msg");
      var a=document.createElement("a");a.href="mailto:"+EMAIL+"?subject="+encodeURIComponent("Project brief")+"&body="+encodeURIComponent(t);a.textContent="Open it in your email app";
      st.textContent="We could not send that automatically. ";st.appendChild(a);st.appendChild(document.createTextNode(" or write to "+EMAIL+"."));
    })
    .then(function(){btn.disabled=false;});
  });
})();
