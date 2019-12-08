element = document.activeElement;

function setCharAt(str,index,chr) {
  if(index > str.length-1) return str;
  return str.substr(0,index) + chr + str.substr(index+1);
}

function decrypt(msg){
  let reg = new RegExp("Yip! (.*) Yip yip!");
  let match = msg.match(reg);
  if(match[1]){
    let tmpmsg = match[1];
    console.log(tmpmsg);
    for(i = 0; i<tmpmsg.length; i++){
      tmpmsg = setCharAt(tmpmsg, i, String.fromCharCode(tmpmsg.charCodeAt(i)+15));
    }
    msg = tmpmsg;
  }
  return msg;
}

element.value = decrypt(element.value);
