
    let trendingProducts = [
        {
            name: "EASY BATH WET WIPES",
            disc: "pacet 10 wet wipes",
            price: "₹ 173.30",
            img: "https://mednear.com/uploads/medicine/76c2cd60a6a47c18b51d6fa13550b0f6.jpeg"
        },
        {
            name: "GLIZIGEN SPRAY",
            disc: "bottle of 60ml spray",
            price: "₹ 1772",
            img: "https://mednear.com/uploads/medicine/227f5b56d0db6c737f0b1549f1daec49.png"
        },
        {
            name: "STUD CLASSIC WEIGHT...",
            disc: "jar of 500gm Powder",
            price: "₹ 569",
            img: "https://mednear.com/uploads/medicine/95dfcb1cd6c2855fc3a4905e1290a630.png"
        },
        {
            name: "DANGO SHAMPOO",
            disc: 'bottle of 100ml Shampoo',
            price: "₹ 181",
            img: "https://mednear.com/uploads/medicine/ecb71805b859e3ac8903d06c5c9938a3.jpg"
        },
        {
            name: "NUTRIHUB GOLD SOFTGEL",
            disc: "bottle of 30 softgel capsules",
            price: "₹ 1995",
            img: "https://mednear.com/uploads/medicine/9746a65404b16f1d5e4662deea0b66d6.png"
        },
        {
            name: "CASTOR NF CREAM",
            disc: "tube of 15gm Cream",
            price: "₹ 84.15",
            img: "https://mednear.com/uploads/icons/drugs.png"
        },
        {
            name: "MFB AL SHIFA CHURAN PACK OF 3",
            disc: "bottle of 100 gm Churna",
            price: "₹ 341",
            img: "https://mednear.com/uploads/medicine/7fc7425c2329e03670a347e47d3c4455.png"
        }
    ]
    
    let recommendedProducts = [
        {
            name: "TRESSGRO LOTION",
            disc: "bottle of 100ml Lotion",
            price: "₹ 722.90",
            img: "https://mednear.com/uploads/icons/bottle.png"
        },
        {
            name: "MANFORCE 50MG TABLET",
            disc: "strip of 9 Tablets",
            price: "₹ 197",
            img: "https://mednear.com/uploads/medicine/2f7e8584b66331a6858a373eb8c22afc.jpg"
        },
        {
            name: "MANFORCE 100MG TABLET",
            disc: "strip of 4 Tablets",
            price: "₹ 229",
            img: "https://mednear.com/uploads/medicine/7332ee0350d09046239b80bd4e290120.jpg"
        },
        {   
            name: "MFB AL SHIFA CHURAN PACK OF 3",
            disc: "bottle of 100 gm Churna",
            price: "₹ 341",
            img: "https://mednear.com/uploads/medicine/7fc7425c2329e03670a347e47d3c4455.png"
        },
        {
            name: "CASTOR NF CREAM",
            disc: "tube of 15gm Cream",
            price: "₹ 84.15",
            img: "https://mednear.com/uploads/icons/drugs.png"
        },
        {
            name: "NUTRIHUB GOLD SOFTGEL",
            disc: "bottle of 30 softgel capsules",
            price: "₹ 1995",
            img: "https://mednear.com/uploads/medicine/9746a65404b16f1d5e4662deea0b66d6.png"
        },
        {
            name: "DANGO SHAMPOO",
            disc: 'bottle of 100ml Shampoo',
            price: "₹ 181",
            img: "https://mednear.com/uploads/medicine/ecb71805b859e3ac8903d06c5c9938a3.jpg"   
        }
    ]
    
    let trendingParent = document.getElementById("trendingProducts");
    let recommendedParent = document.getElementById("recommendedProducts")
    
    function showProducts(){
    
        trendingProducts.forEach(function(product){
    
            let div = document.createElement("div");
            let img = document.createElement("img");
    
            img.src = product.img;
    
            let tp_name = document.createElement("p");
            tp_name.textContent = product.name;
    
            let tp_price = document.createElement("p");
            tp_price.textContent = product.price;
    
            let tp_disc = document.createElement("p");
            tp_disc.textContent = product.disc;
    
            let add_cart_btn = document.createElement("button");
            add_cart_btn.textContent = "Add To Cart";
    
            add_cart_btn.onclick = function(){
                addToCart(product)
            }
    
            div.append(img, tp_name, tp_disc, tp_price,  add_cart_btn);
            trendingParent.append(div)
        })
    
        recommendedProducts.forEach(function(product){
    
            let div = document.createElement("div");
            let img = document.createElement("img");
    
            img.src = product.img;
    
            let tp_name = document.createElement("p");
            tp_name.textContent = product.name;
    
            let tp_price = document.createElement("p");
            tp_price.textContent = product.price;
    
            let tp_disc = document.createElement("p");
            tp_disc.textContent = product.disc;
    
            let add_cart_btn = document.createElement("button");
            add_cart_btn.textContent = "Add To Cart";
    
            add_cart_btn.onclick = function(){
                addToCart(product)
            }
    
            div.append(img, tp_name, tp_disc, tp_price,  add_cart_btn);
            recommendedParent.append(div)
        })
    }
    
    showProducts();
    
    
    
    // if (localStorage.getItem("mednearCart") === null){
    //     localStorage.setItem("mednearCart", JSON.stringify([]));
    // }
    
    // function addToCart(prod){
    //     let products_in_cart = JSON.parse(localStorage.getItem("mednearCart"));
    //     products_in_cart.push(prod);
    //     localStorage.setItem("mednearCart", JSON.stringify(products_in_cart));
    // }
    
  