function autax() {
    const inp = document.getElementById("input").value;
    var amount = Math.floor(inp * 20 / 19 + 1);
    var taxbot = Math.floor(inp * (5 / 100));
    var usertax = Math.floor(inp - inp * (5 / 100));
  document.getElementById("taax").innerHTML = amount; 
  document.getElementById("bot").innerHTML = taxbot;
  document.getElementById("user").innerHTML = usertax; 
} 


document.getElementById("btn").addEventListener("click", copy_text);

function copyText() {      
    var copyText = document.getElementById("taax");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
  document.getElementById("CopyTheText").innerHTML = `The amount is copy now !`;
  setTimeout(() => {
  CopyTheText.style.visibility = 'hidden';
}, 1000); 

}