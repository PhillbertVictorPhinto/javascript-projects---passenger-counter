
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count in the HTML to reflect the new count
let Count = document.getElementById('count')
let count = 0
function increment(){
	count += 1

	Count.innerText = count

}
function decrement(){
	count -=1
	console.log('Decrement button clicked')
	Count.innerText = count
}