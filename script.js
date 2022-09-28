const allImages = document.querySelectorAll('div.foodlist div img')
const cartContainer = document.querySelector('.cartlist')
const cartdiv = document.querySelector("div.cart");
const buttons = document.querySelectorAll('section.sidebar div');
const sidebar = document.querySelector('.sidebar');
const menuButton = document.getElementById('menu');
const cartButton = document.getElementById('cart');
const totalAmount = document.getElementById("cash");
const cartItem ={
  foodName: ["Smashed Avo", "Yin & Yang", "Pancakes", "Huevos Rancheros","Rancheros (Tofu)","Breakkie Roll","Breakkie Roll","Burrito"],
  foodPrice: ["$20.00","$10.00","$25.00","$20.00","$25.00","$20.00","$20.00","$20.00"]  
} 
let imageCount;
// adding event listener to food images
allImages.forEach((image,value)=>{
  image.addEventListener("click",()=>{
    // creation of parent div
    const parentItem = document.createElement('div')
    parentItem.className = "item"
    parentItem.setAttribute("id", value)
    //creation of first child of parentItem
    const firstChild = document.createElement('div')
    const img = document.createElement('img')
    img.src= image.src;
    firstChild.appendChild(img)
    parentItem.appendChild(firstChild)
    //creation of secondChild
    const secondChild = document.createElement('div')
    const para1 = document.createElement('p')
    para1.className = "foodname";
    para1.innerHTML = cartItem.foodName[value]
    secondChild.appendChild(para1)
    const para2 = document.createElement('p')
    para2.className = "dollarprice";
    para2.innerHTML =cartItem.foodPrice[value]
    secondChild.appendChild(para2)
    parentItem.appendChild(secondChild)
    //creation a thirdChild
    const thirdChild = document.createElement('div')
    const span1 = document.createElement('span')
    span1.className = "minus";
    span1.innerHTML = "&minus;"
    thirdChild.appendChild(span1)
    const span2 = document.createElement('span')
    span2.className = "small-box";
    span2.setAttribute("id",value)
    span2.innerHTML = "0"
    thirdChild.appendChild(span2)
    const span3 = document.createElement('span')
    span3.className = "plus";
    span3.innerHTML = "&plus;"
    thirdChild.appendChild(span3)
    parentItem.appendChild(thirdChild)
    // create a fourthChild
    const fourthChild = document.createElement('div')
    fourthChild.className = "times";
    fourthChild.innerHTML = "&times;"
    parentItem.appendChild(fourthChild)
    cartContainer.appendChild(parentItem)
    // To remove picked Items for a  cart 
    const removeButtons = document.querySelectorAll('.times')
    removeButtons.forEach(remove => {
  remove.addEventListener("click",()=>{
    const parentOfRmbtn = remove.parentElement
    parentOfRmbtn.remove()
    cartdiv.dataset.counter = cartContainer.children.length;
    if(cartContainer.children.length == 0)
        totalAmount.innerHTML = "$" + "00.00"
  })

})
const allsmallBox = document.querySelectorAll('.small-box')

const priceArray = document.querySelectorAll('.dollarprice')
const orderlist = {
  foodPrice:priceArray,
  foodQuatity: allsmallBox
}
/*let counter = []
allsmallBox.forEach(smallbox=>{
  counter.push(+smallbox.innerHTML)
})*/
const increBtn = document.querySelectorAll('.plus');
// Increment of Order
increBtn.forEach((btn,value) =>{
  btn.addEventListener("click",()=>{
      if (value == 0){
        const allbox = document.querySelectorAll(".small-box");
        let count = +allbox[value].innerHTML
        count = count + 1;
        btn.previousElementSibling.innerHTML = count;
        orderlist.foodQuatity[value].innerHTML = count;
        totalAmount.innerHTML = "$" + total(orderlist.foodPrice, orderlist.foodQuatity) + ".00"; 
      }
      
    })
})
const decreBtn = document.querySelectorAll('.minus');
    decreBtn.forEach((btn,value)=>{
      btn.addEventListener("click",()=>{
        const allbox = document.querySelectorAll(".small-box");
        let count = allbox[value].innerHTML
        count--;
        if (count <= 0){
          count = 0;
        }
        btn.nextElementSibling.innerHTML = count;
        orderlist.foodQuatity[value].innerHTML = count;
        totalAmount.innerHTML = "$" + total(orderlist.foodPrice, orderlist.foodQuatity) + ".00"
      })
    })
    cartdiv.dataset.counter = cartContainer.children.length 
  })
})
buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains('menu'))
    {
      document.querySelector('.menulist').style.display = 'block';
      document.querySelector('.shopping-cart').style.display = 'none'; 
    }
     else if (button.classList.contains('cart'))
    {
      document.querySelector('.menulist').style.display = 'none';
      document.querySelector('.shopping-cart').style.display = 'block'; 
    }
    buttons.forEach(button => {
      button.style.backgroundColor = "black";
    })
    button.style.backgroundColor = "#F1D5BB";
  })
})
// Adding of Orders 
function total(a,b){
  let amount = 0;
  let i,j;
  for(i=0,j=0;i<a.length &&j<b.length;i++,j++){
      let price = +a[i].innerHTML.slice(1);
      let quatity = +b[j].innerHTML
      amount += price * quatity
  }
  return amount
}


