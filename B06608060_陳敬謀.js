$(()=>{  //'當文件準備好時執行{}\
alert('準備好了嗎?');
function getinput(){
  var res;
  var conf;
  var res = prompt("先填上您的大名", "");

  if (res != null)
  {
    if (res != "")
    {
      conf = confirm("歡迎蒞臨! " + res);
      if (conf == true) 
        alert("感謝您的蒞臨!  " + res);
      else
        alert("Hello whoever you are.");
    }
    else
      alert("Hello whoever you are.");
  }
  else // if Cancel was clicked
  {
    alert("See you next time.");
  }
}

getinput();
})