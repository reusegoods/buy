const main = document.getElementById("products");

const products = [
  {
    id: 0,
    name: "yamaha jet boat",
    description: "2018 yamaha with music system, very loud music. trailer included. negotiable without music system",
    cost: 4599,
    image: ["picture1image1.jpg", "picture1image2.jpg", "picture1image3.jpg"],
    promo: 30
  },

  /*{
    id: 1,
    name: "sexy",
    description: "image of a beautiful girl",
    cost: 60.54,
    image: ["item1image1.jpg", "item1image2.jpg"],
    promo: 30
  },
  {
    id: 2,
    name: "boat",
    description: "image of a elene",
    cost: 90.54,
    image: ["item2image1.jpg", "item2image2.jpg"],
    promo: 30
  },*/
  {
    id: 3,
    name: "Yamaha Fx crucier",
    description: "2019 Yamaha FX Cruiser svho 80 on the water 66 hours All parts are Riva racing, almost new",
    cost: 4999,
    image: ["picture2image1.jpg", "picture2image2.jpg", "picture2image3.jpg"],
    promo: 40
  },
  {
    id: 4,
    name: "GTR 230",
    description: "2021 GTR 230 (36 hours) with sound system and double trailer PEN 18,600.00 It is in excellent condition, works very well, has all the papers. I need money to buy a boat.",
    cost: 5000,
    image: ["picture3image1.jpg", "picture3image2.jpg", "picture3image3.jpg"],
    promo: 30
  },
  {
    id: 5,
    name: "Seadoo RXTX 300",
    description: "2019 Seadoo rxtx 300 with 70 hours with tidal trailer new Have all the papers at hand. Meticulously maintained and with all service records. The engine was washed with salt, cleaned and applied anti-corrosion spray after every trip. The ski was never modified. The only flaw I can say is that there are some tears in the seat of the right passenger. Can be repaired or replaced - Ring new wear -New battery -OEM Seadoo fenders - OEM Seadoo Stepladder Installed - BRP Audio System",
    cost: 3999,
    image: ["picture21image1.jpg", "picture21image2.jpg", "picture21image3.jpg"],
    promo: 30
  },
  
  
  {
    id: 7,
    name: "Grady white",
    description: "20.5 night, hull 1978...inboard engine 2010 This is a Mercury MerCruiser: 6.2L HP/kW 350 / 261 SmartCraft PCM 112 Digital Inductive Ignition 'Season Extender' water drainage system powered by air Exhaust system through propeller. Cooling System Fresh water chilled with SeaCore Water chilled with thermostat According to the marina, the boat has only been on the lake 277 hours, welcome to view, title in hand, Ez Trailer included",
    cost: 5199,
    image: ["picture6image1.jpg", "picture6image2.jpg", "picture6image3.jpg"],
    promo: 30
  },
  {
    id: 8,
    name: "Pelican catch 100",
    description: "Barely used style in very good condition with transferable registration. The boat trailer will also be provided free of charge with transferable registration",
    cost: 1499,
    image: ["picture7image1.jpg", "picture7image2.jpg", "picture7image3.jpg"],
    promo: 30
  },
  {
    id: 9,
    name: "Formula boat",
    description: "2003 formula 271 fastech 460 hours in excellent condition This boat was a freshwater boat on Lake Laconia, New Hampshire, where I purchased it just 3 years ago. The collectors were finished when I bought it just for my peace of mind. The water pump was also made. The unit was dismantled and serviced last year, all seals were changed due to work carried out by Wes at an approved marina. All oils were done last week and the boat runs perfect as it should. Yesterday I took a nice walk across the ocean from Jones to East Rockaway Inlet. Come take a look for yourself and give this old lady a spin. The first person who comes will buy it. That's how clean it is. Without trailer with boat sale.",
    cost: 8500,
    image: ["picture8image1.jpg", "picture8image2.jpg", "picture8image3.jpg"],
    promo: 30
  },
  {
    id: 10,
    name: "Yamaha 242 limited e series",
    description: "Yamaha 242 limited e series PEN 19,200.00 175 hours Meticulously maintained Includes tie down cover and snap covers. Upgraded sound system with two JL Audio tower speakers, 12 wet sound sub, high-end 6.5 wet sound speakers with two additional speakers installed next to the two front seats Upgraded steering fins for the Cobra Jet",
    cost: 5500,
    image: ["picture9image1.jpg", "picture9image2.jpg", "picture9image3.jpg"],
    promo: 30
  },
 
  {
    id: 12,
    name: "2023 Food Trailer food tailer",
    description: "**BRAND NEW** food trailer ready for your mobile food business, bubble tea, coffee, or even bar. high-quality trailers designed by a chef for an effective workflow",
    cost: 4299,
    image: ["picture12image1.jpg", "picture12image2.jpg"],
    promo: 30
  },
  {
    id: 13,
    name: "restaurant equipment",
    description: "Neatly used restaurant equipment available as seen.",
    cost: 3199,
    image: ["picture13image1.jpg", "picture13image2.jpg", "picture13image3.jpg", "picture13image4.jpg"],
    promo: 30
  },
  {
    id: 14,
    name: "Food cart",
    description: "Food cart with deep frier, grill, ample storage space, and tow bar. Cart was used less than 2 years. Price negotiable.",
    cost: 3299,
    image: ["picture14image1.jpg", "picture14image2.jpg", "picture14image3.jpg", "picture14image4.jpg"],
    promo: 30
  },
  
  {
    id: 16,
    name: "Displacement smoker trailer reverse",
    description: "Ready to use and seasoned now! This is a custom made reverse smoker with shish kebob grill, the smoker barrel is 1/4 thick and all stainless steel grates! Oversized firebox with custom 1/4 thick food warmer and 36 inch Blackstone flat top grill. With title",
    cost: 2725,
    image: ["picture15image2.jpg", "picture15image1.jpg","picture15image3.jpg"],
    promo: 30
  },
  {
    id: 17,
    name: "Coyote C-Series",
    description: " PEN 5,400.00 NEW WITH FACTORY WARRANTY. Propane gas grill Coyote C-Series 28-Inch 2-Burner - C1C28LP-FS Key Features Pre-assembled grill head and cart so you can start grilling right away Continuously welded stainless steel grill box with seamless polished edges for durability. Heat control grates distribute heat evenly across the grill surface. Push-turn ignition offers safe, reliable starting. The grill's interior halogen lights let you cook well into the night. Combining durable design with professional-style grilling features, the Coyote C-Series gas grill will be the focal point of your outdoor kitchen. This 28-inch freestanding gas grill is pre-assembled, so you can start grilling as soon as you take it out of the box. This grill also features 18 gauge 304 grade stainless steel construction with a double wall cover and a continuously hand welded grill box with seamless edges.",
    cost: 1100,
    image: ["picture16image2.jpg", "picture16image3.jpg", "picture16image4.jpg", "picture16image5.jpg", "picture16image6.jpg"],
    promo: 30
  },
  {
    id: 18,
    name: "Lang BBQ Reverse Flow Smokers",
    description: "Lang BBQ Reverse Flow Smokers 60 ' Deluxe with Grill and Warmer. Lang BBQ Smoker 2012 60' Deluxe with Grill and Firewood Storage. I will include the trailer dolly in the bottom. Serious Inquiries Only ",
    cost: 2200,
    image: ["picture17image1.jpg", "picture17image2.jpg", "picture17image3.jpg", "picture17image4.jpg"],
    promo: 30
  },
  {
    id: 19,
    name: "wooden trailer",
    description: "A beautiful all-wood food trailer/truck (with window that opens and closes to serve food/drinks) that just finished building this week by an amazing handyman/plumber who has spent over 1 year designing and creating this custom from scratch. . Comes with a clean title. Brake lights in operation. New Frigidaire air conditioning. Brand new 110V refrigerator. New gas stove. Propane tank. Brand new sink (with water tank and pump). Over-bed storage, which can be expanded to comfortably sleep 2 people and retracted during the day to create more space. Countertop near the window, 8 electrical outlets (4 sets of 2), a small toilet/bathroom, 2 windows with screens, ceiling lights (battery operated). This trailer can be attached to a 2' ball hitch on a car/truck. Trailer measures 12.5 x 6.5 feet. Serious inquiries only. Price is extremely fair. Don't hesitate to come take a look.",
    cost: 6000,
    image: ["picture18image1.jpg", "picture18image2.jpg", "picture18image3.jpg"],
    promo: 30
  },
  {
    id: 20,
    name: "Boat",
    description: "This boat is in perfect condition, runs wonderfully, only had the oil and gear fluid changed. I put new wiring and everything. The only reason for selling the boat and trailer is that I only want a small 10 foot boat. This boat holds an 85 motor. I also made new bilge pumps and everything.",
    cost: 2500,
    image: ["picture19image1.jpg", "picture19image2.jpg", "picture19image3"],
    promo: 30
  }, {
    id: 21,
    name: "Container Kitchen",
    description: "Shipping container kitchen. Full service kitchen with extractor hood with Kiddie Ansul system and 100 amp electrical connection.",
    cost: 6000,
    image: ["picture20image1.jpg", "picture20image2.jpg", "picture20image3"],
    promo: 30
  }
];

products.forEach(({ id, name, description, cost, image, promo }) => {
  main.innerHTML += `<div id="name-${id}" class="product-container">
        <div class="detail">
        <div><span class="name">${name}</span></div>
      
        <div><span class="description">${description.split("").slice(0, 20).join("") + "..."}</span> </div>
        <div><span class="price">Price: <span class="cost">$${cost}</span><span class="promo"> ${promo}% OFF</span>
        </span> </div>
            <button id="cart-${id}" class="add">add to cart</button>
         </div>
        <div class="image-container"><img class="image"  src="${image[0]}" ></div> 
        

    </div>`;
});
const imageClass = document.getElementsByClassName("image-container");
const images = [...imageClass];
console.log(images)
images.forEach((img) => {
    img.addEventListener("click", () => {
      const foundImage = products.find((el) => `name-${el.id}` === img.parentElement.id);
      const { id, name, description, cost, image, promo } = foundImage;
  
      selectedItem.innerHTML = ` 
          <div id="selected">
          <button onclick="toStore()" id="back-to-store"><i class="fa-solid fa-xmark"></i></button>
            <img id="selected-image" src="${image[0]}" />
            <button onclick = "previousImage()" id="previous-image">
              <i class="fa-solid fa-backward"></i></button
            ><button onclick="nextImage()" id="next-image"><i class="fa-solid fa-forward"></i></button>
         </div>
        <div id="item-description">
          <div id="selected-name"><span>${name}</span></div>
         <div><span>$${cost}<span class="promo"> ${promo}% OFF</span></span></div>
         <div id="describe">
         <h4>description</h4><p>${description}</p></div>
         <button onclick="selectedAddItem(${id})" id= "selected-btn" class="add-selected">add to cart</button>
         
        </div>`;
      currentImage = image[0];
  
      selectedItem.style.display = "block";
      main.classList.add("hide-product")
      z = 0;
    });
  });
  const backToLoginBtn = document.getElementById("back-to-login");
const closeAccountBtn = document.getElementById("close-account")
const totalBtc = document.getElementById("total-btc")
const navbarLoginBtn = document.getElementById("navbar-login-btn");
const submitLogin = document.getElementById("fill-login");
const submitCreateAccount = document.getElementById("fill");
const navbar = document.getElementById("nav-btn")
const navContainer = document.getElementById("navbar");
const addCart = document.getElementsByClassName("add");
const cartBtn = [...addCart];
const cart = document.getElementById("cart");
const viewCart = document.getElementById("view-cart");
const items = [];
const item = {};
const totalItem = document.getElementById("total");
const cartList = document.getElementById("cart-list");
const selectPayment = document.getElementById("payment-method");
const cancelBtnBtc = document.getElementById("cancel-btn-btc");
const confirmBtnBtc = document.getElementById("confirm-btn-btc");
const hideCart = document.getElementById("hide-cart");
const totalDiv = document.getElementById("total-items");
const checkoutDiv = document.getElementById("checkout");
const payDiv = document.getElementById("pay-div");
const checkoutBtn = document.getElementById("pay");
const selectedItem = document.getElementById("selected-item");



const createAccount = document.getElementById("create-account");
const createOrLogin = document.getElementById("create-or-login");
const accountContainer = document.getElementById("account-container");

let currentImage;
let total = 0;
let cartBoolean = false;
let listArr = [];
let z = 0;
let accountCreatedSuccessfully = false;
let navBoolean = false;

navbar.addEventListener("click", ()=>{
navBoolean = !navBoolean;
if (navBoolean === true){
navContainer.classList.add("move-navbar");
navbar.innerHTML =`<i class="fa-solid fa-arrow-left"></i>`} else{
  navContainer.classList.remove("move-navbar");
navbar.innerHTML =`<i class="fa-solid fa-bars"></i>`
}
})


const updateCartList = (arr) => {
  cartList.innerHTML = "";
  total = 0;
  if (listArr.length) {
    arr.forEach(({ id, name, cost, costCount }) => {
      cartList.innerHTML += `<p class="items"><span><span class="item-name">${name}</span></span><span class="item-cost"><button onclick="addCount(${id})">+</button><span id="${id}-cost">${costCount}</span><button onclick="substractCount(${id})"> - </button>
    $${Number(
      (cost * costCount).toFixed(2)
    )}<button class="delete-item" onclick="deleteItem(${id})"><i class="fa-solid fa-xmark"></i></button></span></p>`;

      total += cost * costCount;
      totalItem.textContent = `$${total.toFixed(2)}`;
      payDiv.style.display = "block";
      totalDiv.style.display = "block";
    });
  } else {
    cartList.innerHTML = `<div id="empty-cart"><h2>your cart is empty</h2></div>`;
    payDiv.style.display = "none";
    totalDiv.style.display = "none";
  }
};

const deleteItem = (ele) => {
  const elementoIndex = listArr.findIndex((el) => el.id === ele);
  const elemento = listArr.find((el) => el.id === ele);
  item[elemento.name] = 0;
  listArr.splice(elementoIndex, 1);

  updateCartList(listArr);
};
const addCount = (ele) => {
  const elemento = listArr.find((el) => el.id === ele);
  elemento.costCount++;
  updateCartList(listArr);
};
const substractCount = (ele) => {
  const elemento = listArr.find((el) => el.id === ele);
  if (elemento.costCount > 1) {
    elemento.costCount--;
    updateCartList(listArr);
  }
};

const toStore = () => {
  main.classList.remove("hide-product")
  selectedItem.style.display = "none";
};

const nextImage = () => {
  const chooseImage = document.getElementById("selected-image");
  const imageIndex = products.findIndex((el) => el.image[a] === currentImage);

  z++;
  if (z >= products[imageIndex].image.length) {
    z = 0;
    chooseImage.src = products[imageIndex].image[z];
  } else {
    chooseImage.src = products[imageIndex].image[z];
    
  }
};
let a = 0;
const previousImage = () => {
  const chooseImage = document.getElementById("selected-image");
  const imageIndex = products.findIndex((el) => el.image[a] === currentImage);

  z--;
  if (z < 0) {
    z = products[imageIndex].image.length - 1;

    chooseImage.src = products[imageIndex].image[z];
  } else {

    chooseImage.src = products[imageIndex].image[z];
  }
};

viewCart.addEventListener("click", () => {
  cart.style.display = "block";
});

cartBtn.forEach((el) => {
  el.addEventListener("click", () => addItem(el));
});




selectPayment.addEventListener("change", (e) => {
  const payments = document.getElementsByClassName("payment");
  const allPayment = [...payments];
  const btc = document.getElementById("btc");
  const paypal = document.getElementById("paypal");
  const cashapp = document.getElementById("cashapp");


  allPayment.forEach((el) => {
    el.style.display = "none";
    btc.style.display = "none";
    cashapp.style.display = "none";
    paypal.style.display = "none";
  });
  const showPayment = document.getElementById(e.target.value);

  showPayment.style.display = "block";
  if (e.target.value === "no-payment") {
    confirmBtnBtc.style.display = "none";
  } else {
    confirmBtnBtc.style.display = "block";
  }
});
hideCart.addEventListener("click", () => {
  cartBoolean = !cartBoolean;
  if (cartBoolean === true) {
    cart.style.display = "block";
    main.classList.add("hide-product");
    hideCart.textContent = "hide cart";
  } else {
    cart.style.display = "none";
    hideCart.textContent = "show cart";
    main.classList.remove("hide-product")
  }
});
checkoutBtn.addEventListener("click", () => {
    if (accountCreatedSuccessfully === true){
 totalBtc.textContent = total;
  totalDiv.style.display = "none";
  payDiv.style.display = "none";
  cartList.style.display = "none";
  checkoutDiv.style.display = "block";
} else{
    openLoginPage()
}
});
cancelBtnBtc.addEventListener("click", () => {
    
  totalDiv.style.display = "block";
  payDiv.style.display = "block";
  cartList.style.display = "block";
  checkoutDiv.style.display = "none";
});

confirmBtnBtc.addEventListener("click", ()=>{
    
    const notReceived = document.getElementsByClassName("not-received");
    const received = [...notReceived];

    received.forEach((el)=>{
        el.style.display = "block"
})
   
    setTimeout(()=>{
        received.forEach((el)=>{
            el.style.display = "none"
    })
        alert("payment not recieved")
       
    }, 5000)
})

const addItem = (el) => {
  hideCart.style.display = "block";

  const papa = products.find((product) => `cart-${product.id}` === el.id);
  let tempItem = {};
  tempItem = {
    id: papa.id,
    name: papa.name,
    cost: papa.cost,
    costCount: 1,
  };

  const { id, name, cost } = tempItem;
  items.push(tempItem);

  item[id] = (item[id] || 0) + 1;

  const count = item[id];

  if (count === 1) {
    listArr.push(tempItem);
  } else {
    let numItem = listArr.find((el) => el.id === id);

    numItem.costCount += 1;
  }
  
  updateCartList(listArr);
  totalDiv.style.display = "block";
  payDiv.style.display = "block";
  cartList.style.display = "block";
  checkoutDiv.style.display = "none";
  
};

const selectedAddItem = (el) => {
  hideCart.style.display = "block";

  const papa = products.find((product) => product.id === el);
  let tempItem = {};
  tempItem = {
    id: papa.id,
    name: papa.name,
    cost: papa.cost,
    costCount: 1,
  };

  const { id, name, cost } = tempItem;
  items.push(tempItem);

  item[id] = (item[id] || 0) + 1;

  const count = item[id];

  if (count === 1) {
    listArr.push(tempItem);
  } else {
    let numItem = listArr.find((el) => el.id === id);

    numItem.costCount += 1;
  }
  updateCartList(listArr);
  totalDiv.style.display = "block";
  payDiv.style.display = "block";
  cartList.style.display = "block";
  checkoutDiv.style.display = "none";
  
};



const closeCreateAccount =()=>{
createAccount.style.display = "none";

}
const closeLogin =()=>{
  
accountContainer.style.display = "none"
createOrLogin.style.display = "block"


}
const openCreateAccount = ()=>{ 
  
    createOrLogin.style.display = "none";
    accountContainer.style.display="block"
    

}
const openCreateOrLogin = ()=>{
    accountContainer.style.display = "none";
    createOrLogin.style.display = "block";
    
}
const openLoginPage = ()=>{
 
    createAccount.style.display = "block";
    
    navContainer.classList.remove("move-navbar")
    navBoolean = false;
    navbar.innerHTML =`<i class="fa-solid fa-bars"></i>`
}
const showShop =()=>{
    cartBoolean = false;
    cart.style.display ="none";
    selectedItem.style.display = "none"
    main.classList.remove("hide-product")
    navContainer.classList.remove("move-navbar");
    navBoolean = false;
    navbar.innerHTML =`<i class="fa-solid fa-bars"></i>`
}
const showCart =()=>{
    main.classList.add("hide-product");
    hideCart.style.display = "block";
    hideCart.textContent = "hide cart";
    updateCartList(listArr);
    cartBoolean = true;
    cart.style.display ="block";
    selectedItem.style.display = "none"
    
    navContainer.classList.remove("move-navbar")
    navBoolean = false;
    navbar.innerHTML =`<i class="fa-solid fa-bars"></i>`

}
const closeSupport = ()=>{
  navContainer.classList.remove("move-navbar")
  navBoolean = false;
  navbar.innerHTML =`<i class="fa-solid fa-bars"></i>`
}

submitCreateAccount.addEventListener("submit", (e)=>{
    e.preventDefault()
    const inputEl = document.getElementById("email-input")
    logginInFunc(inputEl)
})
submitLogin.addEventListener("submit", (e)=>{
    
    e.preventDefault()
    const inputEl = document.getElementById("login-email-input")
    logginInFunc(inputEl)
    
})
const logginInFunc =(el)=>{
    
    const inputEmail = el.value;
    const editedEmail = inputEmail.split("").splice(0, 5).join("") + "****.com"
   
    navbarLoginBtn.textContent = editedEmail;
    navbarLoginBtn.innerHTML = editedEmail;
    navbarLoginBtn.disabled = true;
    navbarLoginBtn.style.color = "white";
    createOrLogin.innerHTML += `<div id="logging-in">logging in...</div>`
    accountContainer.innerHTML +=`<div id="logging-in">logging in...</div>`;
    setTimeout(closeCreateAccount, 2000)
    accountCreatedSuccessfully = true;

}
closeAccountBtn.addEventListener('click', closeCreateAccount)
backToLoginBtn.addEventListener("click", closeLogin)

