
  var obb= [ {
    "id": 4,
    "title": "newTitle",
    "price": 205,
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart  functionality",
    "image_url": "https://i.imgur.com/R2PN9Wq.jpeg"
    },
    
    {
    "id": 7,
    "title": "Ergonomic Wooden Tuna",
    "price": 743,
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "image_url": "https://i.imgur.com/mp3rUty.jpeg"
    },
    {
    "id": 9,
    "title": "Electronic Bronze Chips",
    "price": 808,
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and fourwheel drive",
    "image_url": "https://i.imgur.com/R3iobJA.jpeg"
    },
    {
    "id": 11,
    "title": "Awesome Bronze Car",
    "price": 382,
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "image_url": "https://i.imgur.com/cBuLvBi.jpeg"
    },
    {
    "id": 12,
    "title": "Recycled Rubber Cheese",
    "price": 30,
    "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    "image_url": "https://i.imgur.com/KeqG6r4.jpeg"
    }
]


// var [fst,scnd,thrd,frth,ffth] =obb


// console.log(scnd.price)


// var card =document.getElementById("c1");




// const {title,price,description,image_url}=scnd

// card.innerHTML= ` <div id="c1" class="card" style="width: 18rem">
// <img id="i1" src="${image_url}" class="card-img-top" alt="..." />
// <div id="d2" class="card-body">
//   <h5 class="card-title">Card title</h5>
//   <p class="card-text">
//     Some quick example text to build on the card title and make up the
//     bulk of the card's content.
//   </p>
//   <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>`






var cardsahir =document.getElementById("c1");

for (var i = 0; i < obb.length; i++) {
 
const {title,price,description,image_url}=obb[i]



    console.log(title, price, description, image_url);
  
    cardsahir.innerHTML += `
  <div class="card m-2" style="width: 18rem">
        <img
          src=${image_url}
          class="card-img-top"
          alt="..."
          height="160px"
        />
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <h5 class="card-title">Price: ${price}</h5>
          
          
          <p class="card-text">
            ${description}
          </p>
          <a href="pg${i}.html" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>
  `;
}