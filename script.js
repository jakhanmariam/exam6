

const wshop = {
    name: "WMarket",
    phoneNumber: 8777298182,
    products: [
        { name: "memory stick", price: 11000, stock: "500"},
        { name: "macBook air", price: 700000, stock: "500"},
        { name: "mouse", price: 9000, stock: "500"},
        { name: "Iphone 11", price: 800, stock: "500"},
        { name: "setup", price: 1890000, stock: "500"},
    ]
}

console.log(wshop);



function chaneShopName() {
    let newName = prompt("enter the new name of the shop");
    chaneShopName
}


function changePhoneNumber() {
    let newNumber = prompt("enter the new number of the shop");

}


function listProductNames() {
    wshop.products.forEach(products => {
        alert(`${products.name}`);
    })
}

console.log(listProductNames());




function addProduct() {
    let productName = prompt("enter products name");
    let productTotal = prompt("enter products total");
    let productCategory = prompt("enter products category");

    
}

console.log(addProduct());


























