function showabout(){
 if(document.getElementsByClassName('menu')[0].classList.contains('menu-show')){
  document.getElementsByClassName('about')[0].classList.toggle('about-show')
  document.getElementsByClassName('menu')[0].classList.toggle('menu-show')
 }else{
  document.getElementsByClassName('about')[0].classList.toggle('about-show')
  document.getElementsByClassName('shadow')[0].classList.toggle('shadow-show')
 }
}
function showmenu(){
 if(document.getElementsByClassName('about')[0].classList.contains('about-show')){
  document.getElementsByClassName('menu')[0].classList.toggle('menu-show')
  document.getElementsByClassName('about')[0].classList.toggle('about-show')
 }else{
  document.getElementsByClassName('menu')[0].classList.toggle('menu-show')
  document.getElementsByClassName('shadow')[0].classList.toggle('shadow-show')
 }
}

var sub = `
<head>
<style>
 body>*{
  background-color:#aaa;
  transition:all 0.3s 0s ease;
 }
 body{
  background-color:#aaa;
  margin:0;
 }
header{
  user-select:none;
  position:fixed;
  background-color:#33c;
  margin:0;
  top:0;
  width:100%;
  height:50;
  box-shadow:0 0 5px 0 rgba(0,0,0,.5);
  color:#fff;
  display: flex;
  justify-content:space-between;
  align-items:center;
  font-size:25px;
 }
 .top-center{
  display:flex;
  align-items:center;
  justify-content:center;
 }
 .top-left{
  margin-left:10px;
 }
 .top-right{
  margin-right:10px;
 }
 .top-center>*{
  height:36px;
  border-left:1px solid #fff;
  padding-left:10px;
  padding-right:10px;
 }
 .top-center>*:first-child{
  border:none;
 }
 .top-center>span>a{
  color:#fff;
  height:36px;
  display:flex;
  align-items:center;
 }
.side{
  position:fixed;
  height:calc(80% - 50px);
  top:calc(10% + 50px);
  width:30%;
  background-color:#fff;
  padding-left:10px;
  padding-right:10px;
  box-shadow:0 0 5px 0 rgba(0,0,0,.5);
}
 .about{
  right:100%;
  border-radius:0 10px 10px 0;
  transition:all 300ms 0s ease;
 }
 .about-show{
  right:calc(70% - 20px);
 }
 .menu{
  left:100%;
  border-radius:10px 0 0 10px;
  transition:all 300ms 0s ease;
 }
 .menu-show{
  left:calc(70% - 20px);
 }
a{
  text-decoration:none;
}
.menu>span>img{
  vertical-align:middle;
  margin:3px 5px 3px 0;
  border:solid 1px #000;
}
 .shadow{
  background-color:#000;
  opacity:0.5;
  position:fixed;
  top:100%;
  height:100%;
  width:100%;
  transition: all 300ms 0s ease;
 }
 .shadow-show{
  top:50px;
 }
h1{
  border:solid 3px #33c;
  border-left:solid 20px #33c;
  padding-left:5px;
  margin:10px auto;
}
.center{
  margin:75px 10% auto 10%;
  background-color:#fff;
  border-radius:10px;
  padding:10px;
  box-shadow:0 0 5px 0 rgba(0,0,0,.5);
  min-height:calc(100% - 220px);
}
footer{
  margin-top:25px;
  background-color:#eee;
  height:100px;
}
footer>p{
  text-align:center;
  padding-top:10px;
}
footer>div>a>img{
  background-color:#fff;
  border-radius:16px;
}
footer>div{
  display:flex;
  justify-content:flex-end;
  margin-right:10px;
}
footer>div>*{
  margin:0 10px 0 10px;
}
.none{
  opacity:0;
 }
</style>
</head>
<body>
 <header class="none">
  <div class="top-left" onclick="showabout()">
    About
  </div>
  <div class="top-center">
   <span>
    <a href="https://yukkku.github.io">
    <img src="/icon.png" height="40px" width="40px">
    Yukkku?????????
    </a>
   </span>
   <span>
    <a href="https://yukkku.github.io/list">
     ????????????
    </a>
   </span>
   <span>
    <a href="https://yukkku.github.io/info">
     ??????
    </a>
   </span>
  </div>
  <div class="top-right" onclick="showmenu()">
   <svg viewBox="0 0 5 5" width="30px" height="30px"><g fill="#fff"><rect x="0" y="0" width="5" height="1"/><rect x="0" y="2" width="5" height="1"/><rect x="0" y="4" width="5" height="1"/></g></svg>
  </div>
 </header>
 <div class="center none">
 </div>
 <footer class="none">
  <p>????????????????????????????????????????????? <a href="https://creativecommons.org/licenses/by-sa/2.0/deed.ja">???????????????????????????????????? ?????? - ?????? 2.0 ??????</a> ???????????????????????????????????????????????????</p>
  <div>
  <a href="https://scratch.mit.edu/users/yukku"><img src="https://scratch.mit.edu/favicon.ico" width="32"></a>
  <a href="https://github.com/yukkku"><img src="https://github.com/favicon.ico" width="32"></a>
  </div>
 </footer>
 <div class="shadow"></div>
 <div class="side about">
  <h1>About</h1>
  ??????????????????????????????Scratch???????????????????????????????????????????????????????????????
  <ul>
   <li>HTML???CSS???Javascript????????????</li>
   <li>Scratch??????????????????</li>
   <li>??????????????????</li>
   <li>??????????????????</li>
   <li>???????????????</li>
  </ul>
  ??????????????????????????????????????????????????????
 </div>
 <div class="side menu">
  <h1>???????????????</h1>
<span><img src="https://uploads.scratch.mit.edu/users/avatars/33702239.png" width="30" height="30"><a href="https://tsumuri3.github.io/homepage/tsumuri">tsumuri3?????????????????????</a> by <a href="https://scratch.mit.edu/users/tsumuri3">tsumuri3</a></span><br>
<span><img src="https://uploads.scratch.mit.edu/users/avatars/19147035.png" width="30" height="30"><a href="https://neko001robov.github.io">nyankotrain????????????</a> by <a href="https://scratch.mit.edu/users/nyankotrain">nyankotrain</a></span><br>
<span><img src="https://uploads.scratch.mit.edu/users/avatars/26293407.png" width="30" height="30"><a href="https://enthusiasticprogram.github.io/index.html">Enthusiastic</a> by <a href="https://scratch.mit.edu/users/-p-e-n-">-p-e-n-</a></span><br>
<span><img src="https://uploads.scratch.mit.edu/users/avatars/59800751.png" width="30" height="30"><a href="https://yuikunyeah.github.io/homepage/profile.html">yuikunyeah????????????</a> by <a href="https://scratch.mit.edu/users/yuikunyeah">yuikunyeah</a></span>
 </div>
</body>
`
var cent = document.getElementsByClassName('cent')[0].innerHTML
document.documentElement.innerHTML = sub
document.getElementsByClassName('center')[0].innerHTML = cent
window.setTimeout(function(){
for(i=0;i<3;i++){
  document.getElementsByClassName('none')[0].classList.remove('none')
}
},0)
