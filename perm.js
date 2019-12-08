element = document.activeElement;

function setCharAt(str,index,chr) {
  if(index > str.length-1) return str;
  return str.substr(0,index) + chr + str.substr(index+1);
}

function encrypt(msg){
  for(i = 0; i<msg.length; i++){
    msg = setCharAt(msg, i, String.fromCharCode(msg.charCodeAt(i)-15));
  }
  return "Yip! " + msg + " Yip yip!";
}

element.value = encrypt(element.value);

