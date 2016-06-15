
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("yowch! don't click me so hard!")
})


//TASK #2
document.querySelector("#double button").addEventListener('click',function(){
  var dub=document.querySelector("#compoundInvestment")
	dub.textContent=dub.textContent*2

})

//  TASK #3
document.querySelector("#color-circle button").addEventListener('click',function(){


	var circle=document.querySelector("#circle-bw")
	var computedStyle = window.getComputedStyle(circle)

	if(circle.style.background==='white'){circle.style.background='black'}
	else {circle.style.background='white'}

})


  // TASK #4
document.querySelector("#blow-up button").addEventListener('click',function(){
	console.log('working function')
	// select the red circle 
	var blowUp=document.querySelector("#blow-up .circle-red")
	var computedStyle = window.getComputedStyle(blowUp)

	if (computedStyle.width != '320px') {
		blowUp.style.width = parseInt(computedStyle.width) * 2 + 'px'
		blowUp.style.height = parseInt(computedStyle.height) * 2 + 'px'
	}
	else { 
		blowUp.style.width = '40px' 
		blowUp.style.height = '40px'
	}
})

document.querySelector("#remove button").addEventListener('click',function(){
	var userList=document.querySelectorAll("#userList li")
	// var liNodes=document.querySelector("#userList li")
	
for(var i=0;i<userList.length;i++){
	
	if(userList[i].textContent==='inactive user'){
		
		userList[i].parentNode.removeChild(userList[i])

	}

}



})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
	var spanNodes=document.querySelectorAll("span")
	console.log(spanNodes)
	var containerNode=document.querySelector("#solution")
	for(var i=spanNodes.length-1;i>=0;i--){

		var oneSpan=spanNodes[i]
		oneSpan.parentNode.removeChild(oneSpan)
		console.log(containerNode)
		containerNode.appendChild(spanNodes[i])
	}
//   // TASK #6
 })

// document.querySelector("#pig-latin button").addEventListener('click',function(){
//   // TASK #7
// })

// document.querySelector("#cycle-image button").addEventListener('click',function(){
//   // TASK #8
// })


















