// GO!

var button = document.querySelector("#pushButton") 
var hide = document.querySelector(".nav-menu") 
button.addEventListener("click", function(){

if(hide.style.opacity=0){hide.style.opacity=1 }
else{hide.style.opacity=0 }

})



var inputNode = document.querySelector('input[type="text"]')
var itemsListUl = document.querySelector(".guest-list")
var nameAdd = function(add) {

    if (add.keyCode === KEY_CODES.enterKey) {
      
      //GRAB TEXT INPUT FROM USER
      var inputNode = add.target
      // VV same as VV       
      // var inputNode = document.querySelector('input[type="text"]')
      var usrText = inputNode.value
      
      //GRAB THE UL NODE
      
      
      //CREATE AN LI NODE
      //document.createElement(<tag name>)
      var liNode = document.createElement('p')
      
      //STORE THE USER TEXT UNDER THE textContent PROPERTY OF THE LI NODE
      liNode.textContent = usrText
      
      //APPEND THE LI NODE TO THE UL
      // itemsListUl
      itemsListUl.appendChild(liNode)
      
      inputNode.v = ''
    }
}

