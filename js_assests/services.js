

var products = [
    {
        name: "T-shirt",
        price: 100,
        image: "_image/summerwear/toy-truck-shirt.jpg"
    },
    {
        name: "Shorts",
        price: 150,
        image: "_image/summerwear/blue-short-jeans.jpg"
    },
    {
        name: "Jeans",
        price: 200,
        image: "_image/summerwear/blue-jeans.jpg" 
    },
    
    {
        name: "Shirt",
        price: 250,
        image: "_image/summerwear/tiger-shirt.jpg"
    },
    {
        name: "Shirt",
        price: 250,
        image: "_image/summerwear/white-striped-shirt.jpg"
    },
    {
        name: "Shirt",
        price: 250,
        image: "_image/summerwear/dinosaur-shirt.jpg"
    }

];
// Store Winter Collection products
var winterProducts = [
    {
        name: "Jacket",
        price: 300,
        image: "_image/winterwear/black-jacket.jpg"
    },
    {
        name: "Jacket",
        price: 300,
        image: "_image/winterwear/khaki-jacket.jpg"
    },
    {
        name: "Jacket",
        price: 300,
        image: "_image/winterwear/red-jacket.jpg"
    },
    {
        name: "Jacket",
        price: 300,
        image: "_image/winterwear/dark-green-jacket.jpg"
    },
    {
        name: "Jacket",
        price: 300,
        image: "_image/winterwear/grey-black-hoody.jpg"
    },
    {
        name: "Jacket",
        price: 300,
        image: "_image/winterwear/fur-brown-jacket.jpg"
    }
];
// Store Formal Collection products
var formalProducts = [
    {
        name: "Formal Suit",
        price: 500,
        image: "_image/formalwear/vest-suit-set.jpg"
    },
    {
        name: "Formal Suit",
        price: 500,
        image: "_image/formalwear/ring-bearer-outfit.jpg"
    },
    {
        name: "Formal Suit",
        price: 500,
        image: "_image/formalwear/smart-casual-outfit.jpg"
    },
    {
        name: "Formal Suit",
        price: 500,
        image: "_image/formalwear/page-boy-outfit.jpg"
    },
    {
        name: "Formal Suit",
        price: 500,
        image: "_image/formalwear/coat-set.jpg"
    },
    {
        name: "Formal Suit",
        price: 500,
        image: "_image/formalwear/black-coat-set.jpg"
    }
];
// Store Footwear Collection products
var footwearProducts = [
    {
        name: "Formal Shoes",
        price: 200,
        image: "_image/shoes/all-star-likely-grey-shoes.jpg"
    },
    {
        name: "Formal Shoes",
        price: 300,
        image: "_image/shoes/all-star-likely-blue-shoes.jpg"
    },
    {
        name: "Formal Shoes",
        price: 100,
        image: "_image/shoes/baby-soft-sole-canvas-green-sneakers.jpg"
    },
    {
        name: "Formal Shoes",
        price: 100,
        image: "_image/shoes/baby-soft-sole-canvas-brown-sneakers.jpg"
    },
    {
        name: "Formal Shoes",
        price: 100,
        image: "_image/shoes/kids-canvas-slp-on-sneakers.jpg"
    },
    {
        name: "Formal Shoes",
        price: 100,
        image: "_image/shoes/baby-soft-sole-canvas-red-sneakers.jpg"
    }
];
// Store Sunglasses Collection products
var sunglassesProducts = [
    {
        name: "Sunglasses",
        price: 150,
        image: "_image/sunglass/square-styled-sunglasses.jpg"
    },
    {
        name: "Sunglasses",
        price: 150,
        image: "_image/sunglass/clubmaster-styled-sunglasses.jpg"
    },
    {
        name: "Sunglasses",
        price: 150,
        image: "_image/sunglass/wayfarer-styled-sunglasses.jpg"
    },
    {
        name: "Sunglasses",
        price: 150,
        image: "_image/sunglass/aviator-styled-sunglasses.jpg"
    },
    {
        name: "Sunglasses",
        price: 150,
        image: "_image/sunglass/rounded-frame-sytled-sunglasses.jpg"
    },
    {
        name: "Sunglasses",
        price: 150,
        image: "_image/sunglass/rounded-vintage-styled-sunglasses.jpg"
    }
];
// Store Headwear Collection products
var headwearProducts = [
    {
        name: "Headwear",
        price: 100,
        image: "_image/hats/classic-ribbed-cuffed-beanie.jpg"
    },
    {
        name: "Headwear",
        price: 100,
        image: "_image/hats/knit-beanie-hat.jpg"
    },
    {
        name: "Headwear",
        price: 100,
        image: "_image/hats/wide-brimmed-flet-hat.jpg"
    },
    {
        name: "Headwear",
        price: 100,
        image: "_image/hats/black-baseball-cap.jpg"
    },
    {
        name: "Headwear",
        price: 100,
        image: "_image/hats/cuffed-beanie-hat.jpg"
    },
    {
        name: "Headwear",
        price: 100,
        image: "_image/hats/baseball-cap.jpg"
    }
];
 // Find the space for our summer products
var productArea = document.getElementById("summer-products");

// Display products in three columns
productArea.style.display = "grid";
productArea.style.gridTemplateColumns = "repeat(3, 1fr)";
productArea.style.gap = "20px";

// Display each product on the webpage
for (var i = 0; i < products.length; i++) {
    productArea.innerHTML +=
        '<div style="text-align: center;">' +
            '<a href="' + products[i].image + '" data-lightbox="summer">' +
               '<img src="' + products[i].image + '" width="400" height="400" alt="' + products[i].name + '">' +
            '</a>' +
            '<p>' + products[i].name + '</p>' +
            '<p>R' + products[i].price + '</p>' +
        '</div>';
}
// Find the space for our winter products
var winterArea = document.getElementById("winter-products");

// Display winter products in three columns
winterArea.style.display = "grid";
winterArea.style.gridTemplateColumns = "repeat(3, 1fr)";
winterArea.style.gap = "20px";

// Display each winter product on the webpage
for (var i = 0; i < winterProducts.length; i++) {
    winterArea.innerHTML +=
        '<div style="text-align: center;">' +
            '<a href="' + winterProducts[i].image + '" data-lightbox="winter">' +
                '<img src="' + winterProducts[i].image + '" width="400" height="400" alt="' + winterProducts[i].name + '">' +
            '</a>' +
            '<p>' + winterProducts[i].name + '</p>' +
            '<p>R' + winterProducts[i].price + '</p>' +
        '</div>';
}
// Find the space for our formal products
var formalArea = document.getElementById("formal-products");

// Display formal products in three columns
formalArea.style.display = "grid";
formalArea.style.gridTemplateColumns = "repeat(3, 1fr)";
formalArea.style.gap = "20px";

// Display each formal product on the webpage
for (var i = 0; i < formalProducts.length; i++) {
    formalArea.innerHTML +=
        '<div style="text-align: center;">' +
            '<a href="' + formalProducts[i].image + '" data-lightbox="formal">' +
                '<img src="' + formalProducts[i].image + '" width="400" height="400" alt="' + formalProducts[i].name + '">' +
            '</a>' +
            '<p>' + formalProducts[i].name + '</p>' +
            '<p>R' + formalProducts[i].price + '</p>' +
        '</div>';
}
// Find the space for our footwear products
var footwearArea = document.getElementById("footwear-products");

// Display footwear products in three columns
footwearArea.style.display = "grid";
footwearArea.style.gridTemplateColumns = "repeat(3, 1fr)";
footwearArea.style.gap = "20px";

// Display each footwear product on the webpage
for (var i = 0; i < footwearProducts.length; i++) {
    footwearArea.innerHTML +=
        '<div style="text-align: center;">' +
            '<a href="' + footwearProducts[i].image + '" data-lightbox="footwear">' +
                '<img src="' + footwearProducts[i].image + '" width="400" height="400" alt="' + footwearProducts[i].name + '">' +
            '</a>' +
            '<p>' + footwearProducts[i].name + '</p>' +
            '<p>R' + footwearProducts[i].price + '</p>' +
        '</div>';
}
// Find the space for our sunglasses products
var sunglassesArea = document.getElementById("sunglasses-products");

// Display sunglasses in three columns
sunglassesArea.style.display = "grid";
sunglassesArea.style.gridTemplateColumns = "repeat(3, 1fr)";
sunglassesArea.style.gap = "20px";

// Display each sunglasses product on the webpage
for (var i = 0; i < sunglassesProducts.length; i++) {
    sunglassesArea.innerHTML +=
        '<div style="text-align: center;">' +
            '<a href="' + sunglassesProducts[i].image + '" data-lightbox="sunglasses">' +
                '<img src="' + sunglassesProducts[i].image + '" width="400" height="400" alt="' + sunglassesProducts[i].name + '">' +
            '</a>' +
            '<p>' + sunglassesProducts[i].name + '</p>' +
            '<p>R' + sunglassesProducts[i].price + '</p>' +
        '</div>';
}
// Find the space for our headwear products
var headwearArea = document.getElementById("headwear-products");

// Display headwear products in three columns
headwearArea.style.display = "grid";
headwearArea.style.gridTemplateColumns = "repeat(3, 1fr)";
headwearArea.style.gap = "20px";

// Display each headwear product on the webpage
for (var i = 0; i < headwearProducts.length; i++) {
    headwearArea.innerHTML +=
        '<div style="text-align: center;">' +
            '<a href="' + headwearProducts[i].image + '" data-lightbox="headwear">' +
                '<img src="' + headwearProducts[i].image + '" width="400" height="400" alt="' + headwearProducts[i].name + '">' +
            '</a>' +
            '<p>' + headwearProducts[i].name + '</p>' +
            '<p>R' + headwearProducts[i].price + '</p>' +
        '</div>';
}



// Find the search box and search button
var searchBox = document.getElementById("product-search");
var searchButton = document.getElementById("search-button");

// Run the search when the button is clicked
searchButton.addEventListener("click", function() {

    // Get the product name typed by the customer
    var searchText = searchBox.value.toLowerCase();

    // Search the products
    var allProducts = document.querySelectorAll("#summer-products > div, #winter-products > div, #formal-products > div, #footwear-products > div, #sunglasses-products > div, #headwear-products > div");
// Check each product
for (var i = 0; i < allProducts.length; i++) {

    // Find the product name
    var nameElement = allProducts[i].querySelector("p");

    // Skip the product if no name is found
    if (nameElement == null) {
        continue;
    }

    var productName = nameElement.textContent.toLowerCase();

    // Show products that match the search
    if (productName.includes(searchText)) {
        allProducts[i].style.display = "block";
    } else {
        allProducts[i].style.display = "none";
    }
}
});
// Find the Clear Search button
var clearButton = document.getElementById("clear-search");

// Run when the Clear Search button is clicked
clearButton.addEventListener("click", function() {

    // Empty the search box
    searchBox.value = "";

    // Find all products
    var allProducts = document.querySelectorAll("#summer-products > div, #winter-products > div, #formal-products > div, #footwear-products > div, #sunglasses-products > div, #headwear-products > div");

    // Show all products again
    for (var i = 0; i < allProducts.length; i++) {
        allProducts[i].style.display = "block";
    }
});