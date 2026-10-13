
(function(){
  var m=document.getElementById("menu"),n=document.getElementById("nav");
  if(m&&n){m.addEventListener("click",function(){var o=n.classList.toggle("open");m.setAttribute("aria-expanded",o);});
    n.addEventListener("click",function(e){if(e.target.tagName==="A"){n.classList.remove("open");m.setAttribute("aria-expanded","false");}});}

  // gentle scroll reveal (skipped for reduced motion)
  var rm=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els=document.querySelectorAll(".head,.pc,.item,.fact,.pr2>div,ol.steps li,.cta,.wc,.gc,.founder,.prot>div,.statement");
  if(!rm&&"IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target);}});},{threshold:.12});
    els.forEach(function(el){el.classList.add("rv");io.observe(el);});
  } else {els.forEach(function(el){el.classList.add("in");});}

  var f=document.getElementById("brief");if(!f)return;
  var out=document.getElementById("out"),st=document.getElementById("status"),btn=document.getElementById("send");
  var EMAIL="atkamat1204@gmail.com";
  var q=new URLSearchParams(location.search).get("plan");
  if(q){var sel=document.getElementById("f-offer");for(var i=0;i<sel.options.length;i++){if(sel.options[i].text.indexOf(q.replace(/\+/g," "))===0){sel.selectedIndex=i;break;}}}
  function v(id){return document.getElementById(id).value.trim();}
  f.addEventListener("submit",function(e){
    e.preventDefault();
    var em=v("f-email");
    if(!v("f-name")||!v("f-msg")||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){st.textContent="Please add your name, a valid email and what the site should achieve.";return;}
    btn.disabled=true;st.textContent="Sending...";out.style.display="none";
    var body=new URLSearchParams(new FormData(f)).toString();
    fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:body})
    .then(function(r){if(!r.ok)throw new Error("status "+r.status);f.reset();st.textContent="Thank you. Your brief has been sent. Expect a reply within 24 hours.";})
    .catch(function(){
      var t="Project brief for Solara Studios\n\nName: "+v("f-name")+"\nEmail: "+em+"\nCompany: "+(v("f-co")||"-")+"\nWebsite: "+(v("f-site")||"-")+"\nPackage: "+document.getElementById("f-offer").value+"\n\nGoal and timing:\n"+v("f-msg");
      var a=document.createElement("a");a.href="mailto:"+EMAIL+"?subject="+encodeURIComponent("Project brief")+"&body="+encodeURIComponent(t);a.textContent="Open it in your email app";
      st.textContent="We could not send that automatically. ";st.appendChild(a);st.appendChild(document.createTextNode(" or write to "+EMAIL+"."));
    })
    .then(function(){btn.disabled=false;});
  });
})();
