<script>/*<![CDATA[*/ const pbtn=document.querySelector(".plrbtn"),pbtn1=document.querySelector(".plrbtn1"),mp3box=document.querySelector(".mp3box"),para=document.querySelector("p"),nodeList=document.querySelectorAll("p"),txtaln=document.querySelectorAll(".txtaln"),txtalnn=document.querySelectorAll(".txtalnn"),plyr=document.querySelector(".plyr"),tbld=document.querySelectorAll(".plyr"),tbldd=document.querySelectorAll(".txtalnn"),audio=document.querySelector("audio"),tln=document.querySelector(".tln"),sbtn1=document.querySelector(".vlbtn1"),sbtn=document.querySelector(".vlbtn"),plIon='\n      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-play-fill" viewBox="0 0 16 16">\n  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>\n</svg>',psIcn='\n      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pause-fill" viewBox="0 0 16 16">\n  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>\n</svg>\n      ',sicn='\n      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-volume-down-fill" viewBox="0 0 16 16">\n  <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>\n</svg>',micn='\n      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"class="bi bi-volume-mute-fill" viewBox="0 0 16 16">\n  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>\n</svg>';function tadio(){audio.paused?(audio.play(),pbtn.innerHTML=psIcn,pbtn1.innerHTML=psIcn):(audio.pause(),pbtn.innerHTML=plIon,pbtn1.innerHTML=plIon)}function myFun(){for(i=0;i<txtaln.length;i++)txtaln[i].innerHTML="Middle";for(k=0;k<txtalnn.length;k++)txtalnn[k].innerHTML="Bold"}function tCtnr(){if("center"!=para.style.textAlign){for(let t=0;t<nodeList.length;t++)nodeList[t].style.textAlign="center";for(i=0;i<txtaln.length;i++)txtaln[i].innerHTML="Left"}else{for(i=0;i<nodeList.length;i++)nodeList[i].style.textAlign="left";for(i=0;i<txtaln.length;i++)txtaln[i].innerHTML="Middle"}}function bld(){if("bold"!=plyr.style.fontWeight){for(let t=0;t<tbld.length;t++)tbld[t].style.fontWeight="bold";for(k=0;k<txtalnn.length;k++)tbldd[k].innerHTML="Normal"}else{for(k=0;k<tbld.length;k++)tbld[k].style.fontWeight="normal";for(k=0;k<txtalnn.length;k++)tbldd[k].innerHTML="Bold"}}function tsnd(){audio.muted=!audio.muted,sbtn.innerHTML=audio.muted?micn:sicn,sbtn1.innerHTML=audio.muted?micn:sicn}function aEnd(){pbtn1.innerHTML=psIcn,mp3box.style.visibility="visible"}function sEnd(){pbtn1.innerHTML=plIon,mp3box.style.visibility="hidden"}function splg(){pbtn.innerHTML=psIcn,rimg.style.animation="anim 4s linear infinite"}function sps(){pbtn.innerHTML=plIon,pbtn1.innerHTML=plIon,rimg.style.animationPlayState="paused"}function cAtlnP(){const t=100*audio.currentTime/audio.duration;tln.style.backgroundSize=`${t}% 100%`,tln.value=t}function changeSeek(){const t=tln.value*audio.duration/100;audio.currentTime=t}pbtn.addEventListener("click",tadio),pbtn1.addEventListener("click",tadio),sbtn.addEventListener("click",tsnd),sbtn1.addEventListener("click",tsnd),audio.ontimeupdate=cAtlnP,audio.onended=sEnd,audio.onplay=aEnd,audio.onplaying=splg,audio.onpause=sps,tln.addEventListener("change",changeSeek);const Vslr=document.querySelector(".Vslr");Vslr.addEventListener("change",(t=>{audio.volume=t.currentTarget.value/100}));const rimg=document.querySelector(".rimg"),tct=document.querySelector(".ct"),ttld=document.querySelector(".tlt");function reset(){seek_slider.value=tln.value}function stu(){if(audio.duration){let t=Math.floor(audio.currentTime/60),n=Math.floor(audio.currentTime-60*t),e=Math.floor(audio.duration/60),l=Math.floor(audio.duration-60*e);l<10&&(l="0"+l),e<10&&(e="0"+e),t<10&&(t="0"+t),n<10&&(n="0"+n),tct.textContent=t+":"+n,ttld.textContent=e+":"+l}else tct.innerHTML="00:00",ttld.innerHTML="00:00"}audio.addEventListener("timeupdate",stu); /*]]>*/</script>
                                <script>/*<![CDATA[*/ function get_text(el) {ret = ''; var length = el.childNodes.length; for(var i = 0; i < length; i++) {var node = el.childNodes[i]; if(node.nodeType != 8) {ret += node.nodeType != 1 ? node.nodeValue : get_text(node);} } return ret;} var words = get_text(document.getElementById('postBody')); var count = words.split(' ').length; var avg = 200; var counted = count / avg; var maincount = Math.round(counted); document.getElementById('rdTime').innerHTML = maincount + ' min read'; /*]]>*/</script>
