const pb=document.querySelector(".plrbtn"),pb1=document.querySelector(".plrbtn1"),plps=document.querySelector(".mp3box"),p=document.querySelector("p"),nl=document.querySelectorAll("p"),txal=document.querySelectorAll(".txtaln"),txaln=document.querySelectorAll(".txtalnn"),plr=document.querySelector(".plyr"),tb=document.querySelectorAll(".plyr"),tbd=document.querySelectorAll(".txtalnn"),audio=document.querySelector("audio"),tct=document.querySelector(".ct"),ttld=document.querySelector(".tlt"),tln=document.querySelector(".tln"),sbtn1=document.querySelector(".vlbtn1"),sbtn=document.querySelector(".vlbtn"),pl='\n      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-play-fill" viewBox="0 0 16 16">\n  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>\n</svg>',ps='\n      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pause-fill" viewBox="0 0 16 16">\n  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>\n</svg>\n      ',vbi='\n      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-volume-down-fill" viewBox="0 0 16 16">\n  <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>\n</svg>',mbi='\n      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"class="bi bi-volume-mute-fill" viewBox="0 0 16 16">\n  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>\n</svg>';function tadio(){audio.paused?(audio.play(),pb.innerHTML=ps,pb1.innerHTML=ps):(audio.pause(),pb.innerHTML=pl,pb1.innerHTML=pl)}function myFun(){for(pb.innerHTML=pl,pb1.innerHTML=pl,tct.innerHTML="00:00",ttld.innerHTML="00:00",sbtn.innerHTML=mbi,sbtn1.innerHTML=mbi,i=0;i<txal.length;i++)txal[i].innerHTML="Middle";for(k=0;k<txaln.length;k++)txaln[k].innerHTML="Bold"}function tCtnr(){if("center"!=p.style.textAlign){for(let t=0;t<nl.length;t++)nl[t].style.textAlign="center";for(i=0;i<txal.length;i++)txal[i].innerHTML="Left"}else{for(i=0;i<nl.length;i++)nl[i].style.textAlign="left";for(i=0;i<txal.length;i++)txal[i].innerHTML="Middle"}}function bld(){if("bold"!=plr.style.fontWeight){for(let t=0;t<tb.length;t++)tb[t].style.fontWeight="bold";for(k=0;k<txaln.length;k++)tbd[k].innerHTML="Normal"}else{for(k=0;k<tb.length;k++)tb[k].style.fontWeight="normal";for(k=0;k<txaln.length;k++)tbd[k].innerHTML="Bold"}}function tsnd(){audio.muted=!audio.muted,sbtn.innerHTML=audio.muted?mbi:vbi,sbtn1.innerHTML=audio.muted?mbi:vbi}function aEnd(){pb1.innerHTML=ps,plps.style.visibility="visible"}function sEnd(){pb1.innerHTML=pl,plps.style.visibility="hidden"}function splg(){pb.innerHTML=ps,rimg.style.animation="anim 4s linear infinite"}function sps(){pb.innerHTML=pl,pb1.innerHTML=pl,rimg.style.animationPlayState="paused"}function cAtlnP(){const t=100*audio.currentTime/audio.duration;tln.style.backgroundSize=`${t}% 100%`,tln.value=t}function changeSeek(){const t=tln.value*audio.duration/100;audio.currentTime=t}pb.addEventListener("click",tadio),pb1.addEventListener("click",tadio),sbtn.addEventListener("click",tsnd),sbtn1.addEventListener("click",tsnd),audio.ontimeupdate=cAtlnP,audio.onended=sEnd,audio.onplay=aEnd,audio.onplaying=splg,audio.onpause=sps,tln.addEventListener("change",changeSeek);const Vslr=document.querySelector(".Vslr");Vslr.addEventListener("change",(t=>{audio.volume=t.currentTarget.value/100}));const rimg=document.querySelector(".rimg");function reset(){seek_slider.value=tln.value}function stu(){if(audio.duration){let t=Math.floor(audio.currentTime/60),n=Math.floor(audio.currentTime-60*t),e=Math.floor(audio.duration/60),l=Math.floor(audio.duration-60*e);l<10&&(l="0"+l),e<10&&(e="0"+e),t<10&&(t="0"+t),n<10&&(n="0"+n),tct.textContent=t+":"+n,ttld.textContent=e+":"+l}else tct.innerHTML="00:00",ttld.innerHTML="00:00"}audio.addEventListener("timeupdate",stu);
const selectedAll = document.querySelectorAll(".selected"); selectedAll.forEach((selected) => { const optionsContainer = selected.previousElementSibling; const searchBox = selected.nextElementSibling; let inputs = document.querySelectorAll('input'); const optionsList = optionsContainer.querySelectorAll(".option"); selected.addEventListener("click", () => { arrowd.classList.contains("active"); if (optionsContainer.classList.contains("active")) { optionsContainer.classList.remove("active"); } else { let currentActive = document.querySelector(".options-container.active"); if (currentActive) { currentActive.classList.remove("active"); } inputs.forEach(input => input.value = ''); optionsContainer.classList.add("active"); } }); optionsList.forEach((o) => { o.addEventListener("click", () => { optionsContainer.classList.remove("active"); }); }); searchBox.addEventListener("keyup", function (e) { filterList(e.target.value); }); const filterList = (searchTerm) => { searchTerm = searchTerm.toLowerCase(); optionsList.forEach((option) => { let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase(); if (label.indexOf(searchTerm) != -1) { option.style.display = "block"; } else { option.style.display = "none"; } }); }; });
const musicm=document.querySelector(".musicmp3"),rotateimg=document.querySelector(".rotateimg");musicm.addEventListener("play",(function(){rotateimg.style.animation="anim 4s linear infinite"})),musicm.addEventListener("pause",(function(){rotateimg.style.animation="none"}));
