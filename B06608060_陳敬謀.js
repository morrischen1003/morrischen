function getinput()
{
  var res;
  var conf;
  var res = prompt("Please enter your name.", "");

  if (res != null)
  {
    if (res != "")
    {
      conf = confirm("Your name is " + res);
      if (conf == true) 
        document.write("Welcome, " + res);
      else
        document.write("See you next time.");
    }
    else
      document.write("Hello whoever you are.");
  }
  else // if Cancel was clicked
  {
    document.write("See you next time.");
  }
}

getinput();