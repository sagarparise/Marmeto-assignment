const radioButtons = document.querySelectorAll('.sz-radio input[type="radio"]');
const image = document.querySelectorAll('.img-wrapper img');
const productImg = document.getElementById('product-img');
let counterBtn = document.querySelectorAll('.bt-1')
let colorBox = document.querySelectorAll('.color-box');
const addBtn = document.querySelector('.add-btn');
const msgDisplay = document.querySelector('.msg-display');
  let counter = 1;
document.addEventListener('DOMContentLoaded', function(){

  handleRadioChange()
})
  // Loop through each radio button
  radioButtons.forEach(radioButton => {
    // Add event listener to each radio button
    radioButton.addEventListener('click', handleRadioChange)
  })


  function handleRadioChange(){
    console.log('first')
    const radioContainer = this.closest('.sz-radio');
      
    // Reset background color for all containers
    document.querySelectorAll('.sz-radio').forEach(container => {
      container.style.cssText = ' background-color: #edf0f8; border: none; color:#767171';
    });
    
    // Change background color of the container when radio button is checked
    if (this.checked) {
      radioContainer.style.cssText = 'background-color: #e0e9ff; border: 1px solid #00a6fb; color:#3a4980'
      
    }
  }
image.forEach(img=>{
  img.addEventListener('click',function (){
  let wrapper =  this.closest('.img-wrapper');

  image.forEach(ig=>{
    console.log('remove image')
    ig.closest('.img-wrapper').classList.remove('active')
  })

  wrapper.classList.add('active')
   productImg.src = img.src
  })
})
// color pallet
colorBox.forEach(box=>{
box.addEventListener('click', function(){
  for( let val of colorBox){
    val.classList.remove('active')
  }
  this.classList.add('active')
})
})
// add cart count 
counterBtn.forEach(btn => {
  btn.addEventListener('click', counterCalculate)
})

function counterCalculate(e) {
  if(e.target.innerText === '-' && counter > 1){
  counter--;
  }
  else if(e.target.innerText === '+' && counter < 100){
    counter++;
  }
  document.querySelector('.count-display').innerText = counter;
}

//add card
addBtn.addEventListener('click', function(){
  console.log('add card')
  msgDisplay.style.display = 'flex';
  setTimeout(function(){
    msgDisplay.style.display = 'none';
  }, 2000)
});