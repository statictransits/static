function $(e){return document.querySelector(e)}let timer,gotop=$("goTop"),tf=!0;window.onscroll=function(){let e=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight||document.body.clientHeight;goTop.style.display=e>=n?"block":"none",tf||clearInterval(timer),tf=!1},goTop.onclick=function(){document.body.scrollIntoView()};let has_children=document.getElementsByClassName("menu-item-has-children");for(i=0;i<has_children.length;i++)has_children[i].getElementsByTagName("a")[0].insertAdjacentHTML("afterend",'<span class="menu-sign"></span>');if($(".goFind").onclick=function(){$(".site-search").classList.toggle("none"),$(".field").focus()},$(".closeFind").onclick=function(){$(".site-search").classList.toggle("none")},$(".field").onblur=function(){$(".site-search").classList.toggle("none")},$(".openMenu").onclick=function(){$(".header-menu").classList.toggle("open-header-menu"),$(".mask").style.display="block"},$(".closeMenu").onclick=function(){$(".header-menu").classList.toggle("open-header-menu"),$(".mask").style.display="none"},$(".mask").onclick=function(){$(".header-menu").classList.toggle("open-header-menu"),$(".mask").style.display="none"},!$(".post-navigation")||$(".nav_box_previous")&&$(".nav_box_next")||($(".nav-box").style.width="100%"),document.body.scrollWidth<767){for(var oldIndex="",classIndex="",menu_has_children=document.getElementsByClassName("menu-item-has-children"),menu_sign=document.getElementsByClassName("menu-sign"),i=0;i<menu_sign.length;i++)menu_sign[i].setAttribute("index",i),menu_sign[i].onclick=function(){classIndex=this.getAttribute("index"),""!=oldIndex&&oldIndex!=classIndex&&(menu_sign[oldIndex].classList.remove("open-menu-sign"),menu_has_children[oldIndex].classList.remove("open-menu-item-has-children")),menu_sign[classIndex].classList.toggle("open-menu-sign"),menu_has_children[classIndex].classList.toggle("open-menu-item-has-children"),oldIndex=classIndex};document.addEventListener("click",function(e){""!=oldIndex&&e.target!==menu_sign[oldIndex]&&(menu_sign[oldIndex].classList.remove("open-menu-sign"),menu_has_children[oldIndex].classList.remove("open-menu-item-has-children"),oldIndex="")})}
