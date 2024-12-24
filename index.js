let products = [
    
  {
    id: 1,
    name: "LAKME",
    discription: "Ultimate Glam 4 in 1 Lip Stack ",
    prize: 350,
    quatity: 12,
    imgpath:
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRQ654qv8tx-kcVE94Jffac-Klx4MEJ2MHWZ7KyfuG9g-zz7RLSkSKkrxXt1fSrRe1hTxAA50R-nFexhecdvyzL7aDoS1nAgwzXuDVNbeeD7fLmjynxM-IU"      },

  
  
    {
      id: 2,
      name: "MAYBELLINE",
      discription: "Super Stay Matte",
      prize: 400,
      quatity: 10,
      imgpath:
        "https://images-static.nykaa.com/media/catalog/product/a/0/a0959c5MAYBE00000406-z_1.jpg?tr=w-344,h-344,cm-pad_resize",
    },
    {
      id: 3,
      name: "LAKME",
      discription: "Ultimate Glam 4 in 1 Lip Stack ",
      prize: 500,
      quatity: 12,
      imgpath:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTC0W6Jx1tMGJckoXyVU3CzMCLvDmLuvvsiAjq9l_arg_uRA8Rynqw512jRL7u7fAMqeKjlw7FJ22Yn6mGIgWgyrnu0hwP0mdZ25tzvzRlailxcnPji2qy9-ZjA0lkiO9BII-CbHgM&usqp=CAc",
    },
     {
        id: 4,
        name: "RENEE",
        discription: "Ultimate Glam 4 in 1 Lip Stack ",
        prize: 300,
        quatity: 12,
        imgpath:
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdmn53loGg5pVDoY9oannv-KPZzPPigsfrHe9OVLI70P2UjnMzBqWDWnutaHmAyeWlmWg_t_xVEhvOsfj05nXe02Rv8sf_S4W3z5TVKbxPEc43nrLVGmmGDg"      },
{
  id: 5,
  name: "MAMAEARTH",
  discription: "Ultimate Glam 4 in 1 Lip Stack ",
  prize: 700,
  quatity: 12,
  imgpath:
"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQH-3rYssiblvBBNjuEWeHLCwmiI7wpeQKhnzxyhKVUSMgf2DzR6hG-XP47V4VdHUvDynx3xUzhQbmf45C7Lwx_4aXOL6hhTtbf8SMWIWNnBeOOCOJLfSQ"      },

{
  id: 6,
  name: "SUGAR",
  discription: "Matte As Hell Crayon Lipstick",
  prize: 300,
  quatity: 5,
  imgpath:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlp5vVtUqUCrnhS-Iik1tgB5Z0AhauR04qaMJrNVX5XPC5eL-3ThtnkdZPwC_BoGN4e8&usqp=CAU",
},

{
    id: 7,
    name: "LAKME",
    discription: "Ultimate Glam 4 in 1 Lip Stack ",
    prize: 450,
    quatity: 12,
    imgpath:
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRNCot9cdOMRytXn6G7mEdljo7nEJNWFF_65NcRXAHRNOf6NyCA-W0keYnlKhk_vRgVqdQ3IwHbs5lRlvJGcsyvpNebt694iWiCub0P5NlIxXGlFdbrN1GO"      },




{
        id: 8,
        name: "MAMAEARTH",
        discription: "Ultimate Glam 4 in 1 Lip Stack ",
        prize: 350,
        quatity: 12,
        imgpath:
"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRYppptK0FLCOV3334XN8onizhz351kgIdU1x4ziU4V3KW1ozGhnpSadzf9Fi2_D_BAkO2RtBEwfjKpkCDuv3F3cuxxJ3YIrNjyF2lCK1x4HAhMY4f9hPGM4djRFf3EyJNEreokOQ&usqp=CAc" } ];
      
      function saveToLocalStorage() {
    localStorage.setItem("Products", JSON.stringify(products));
  }
 saveToLocalStorage();

  

  function showproduct()
{
    document.getElementById("prodlist").innerHTML = products
    .map
    
    ((product)=>


   ` <div class=" ">
            <div class="card shadow m-3" style="width: 18rem; ">
                <img src='${product.imgpath}' class="card-img-top" alt=${product.name} style="height:350px ;">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.discription}</p>
                     <p class="card-text "><span class="me-5 pe-5 fs-5">Price ₹${product.prize} </span> <span class="pe-2 text-danger fw-semibold">${product.quatity} Left </span></p>
                     
                   
                   <div class="d-flex" >
                                        <a href="#" class="btn btn-primary border-black m-2 " style="font-size:15px" onclick="wishlistbag(${product.id})"><i class="fa-regular fa-heart "></i>   Wishlist</a>
                

                     <a href="#" class="btn btn-primary border-black m-2 "style="font-size:15px"   onclick="addtobag(${product.id})"><i class="fa-regular fa-clipboard"></i>  Add to Cart</a>
               </div>
               
                 </div>    
            </div>
            </div>`


    )
    .join("");
}
showproduct();









// let cartItems=[];
// function loadfromlocalstorage()
// {
//   storedproducts=localStorage.getItem('products');
//   cart=localStorage.getItem('cart');

//   console.log(storedproducts)
//   if(storedproducts){
//     products=JSON.parse(storedproducts);

//   }
//   if(cart){
//     cartItems=JSON.parse(cart);
//     console.log("cartitems",cartItems);
    

//   }
// }



// loadfromlocalstorage();
// document.getElementById('lengthCart').innerHTML = cartItems.length;




// function addtocard(id) {

//     const cartItem = products.filter((p) =>p.id === id);

  
//     console.log(cartItems);
    
//     cartItems.push(cartItem[0]);
//     saveToLocalStorage();
//     localStorage.setItem("to_favorite", JSON.stringify(cartItems));
//     document.getElementById('lengthCart').innerHTML = cartItems.length;


//   }





// function saveToLocalStoragecart() {
//   localStorage.setItem("cart", JSON.stringify(cartItems));
// }





let cart=[];
function addtobag(id) {

    const product= products.find((p) =>p.id === id);
    if(product)
    {
    cart.push(product);
      console.log(cart);
      
      document.getElementById('supid').innerHTML=cart.length
    }
    
    addtobagdisplay(cart);
    console.log("cart",cart);
    // console.log(cartItems);
    
    // cartItems.push(cartItem[0]);
    // saveToLocalStorage();
    // localStorage.setItem("to_favorite", JSON.stringify(cartItems));
    // document.getElementById('lengthCart').innerHTML = cartItems.length;


  }

 



  





function addtobagdisplay()

{
    document.getElementById("addtobaglist").innerHTML = cart
    .map
    
    ((product)=>


   ` 
   <div class="fs-6">
            <div class="card shadow m-2 w-100" style="height:180px; ">

            <div class="row">

            <div class="col-5">
                <img src='${product.imgpath}' class="card-img-top" alt=${product.name} style="height:180px;width:200px">
              </div>
              <div class="col-7">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.discription}</p>
                     <p class="card-text "><span class="me-2 fw-bold fs-5">Price ₹${product.prize} </span> <span class=" text-danger fw-semibold ">${product.quatity} Left </span></p>
                 
                 <a href="#" class="btn btn-primary border-black m-0 "style="font-size:14px"   onclick="remove1(${product.id})"> <i class="fa-solid fa-trash"></i> Remove</a>
                                        <a href="#" class="btn btn-primary border-black m-0 ms-2"style="font-size:14px" onclick="wishlistbag(${product.id})"><i class="fa-regular fa-heart "></i>   Wishlist</a>

                     </div>     
             </div>
                 </div>    
            </div>
            </div>`


    )
    .join("");
    placeorder();

}




function placeorder(){
total=cart.reduce((total,product)=>{
  return total+product.prize
},0);
console.log(total);

document.getElementById("total").innerHTML = total


}
placeorder();



let wishlistcart=[];
function wishlistbag(id) {

    const product= products.find((p) =>p.id === id);
    if(product)
    {
      wishlistcart.push(product);
     
      
      document.getElementById('supid-wish').innerHTML=wishlistcart.length
    }
    
    addtowishlist(wishlistcart);
    console.log(wishlistcart);

  }
  


 function addtowishlist()

{
    document.getElementById("wishlistbag-list").innerHTML = wishlistcart
    .map
    
    ((product)=>


   ` 
   <div class="fs-6">
            <div class="card shadow m-2 w-100" style="height:210px; ">

            <div class="row">

            <div class="col-5">
                <img src='${product.imgpath}' class="card-img-top" alt=${product.name} style="height:210px;width:200px">
              </div>
              <div class="col-7">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.discription}</p>
                     <p class="card-text "><span class="me-2  fs-5">Price ₹${product.prize} </span> <span class=" text-danger fw-semibold ">${product.quatity} Left </span></p>
                 
 <a href="#" class="btn btn-primary border-black m-0"style="font-size:14px"   onclick="addtobag(${product.id})"><i class="fa-regular fa-clipboard"></i>  Add to Cart</a>
 <a href="#" class="btn btn-primary border-black m-0 ms-2"style="font-size:14px"   onclick="remove2(${product.id})"> <i class="fa-solid fa-trash"></i> Remove</a>

                     </div>     
             </div>
                 </div>    
            </div>
            </div>`


    )
    .join("");
    

}



 function remove1(id)
 {
  cart.splice(id, 1);
  console.log(cart);
  addtobagdisplay(cart);
  document.getElementById('supid').innerHTML=cart.length

 }


 function remove2(id)
 {
  wishlistcart.splice(id, 1);
  console.log(wishlistcart);
  addtowishlist(wishlistcart);
  document.getElementById('supid-wish').innerHTML=wishlistcart.length

 }