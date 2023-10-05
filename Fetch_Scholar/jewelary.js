let rootele = document.getElementById("root")
let url = "https://fakestoreapi.com/products/category/jewelery"

const Jewelary = async () => {
    try{
        fetch(url)
        let res = await fetch(url)
        let data = await res.json()
        printdata(data)
    }catch(error){
        console.log(error)
    }
}
const printdata = (data) => {
    data.forEach(product => {
        let productcart = document.createElement("div")
        product.className = "product_cart"

        let productImg = document.createElement("img")
        productImg.src = product.image

        let productName = document.createElement("p")
        productName.textContent = product.title

        let productprice = document.createElement("h3")
        productprice.textContent = "Price:- " + product.price

        productcart.append(productImg,productprice, productName)
        rootele.append(productcart)
    });
}

Jewelary()
