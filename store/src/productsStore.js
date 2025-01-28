// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to

const productsArray = [
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        title: "Coffee",
        price: 4.99,
        img: "https://m.media-amazon.com/images/I/71AkGIlaV7L._SY741_.jpg"
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        title: "Sunglasses",
        price: 9.99,
        img: "https://m.media-amazon.com/images/I/51U+zB6bw1L._AC_SX679_.jpg"
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
        title: "Camera",
        price: 39.99,
        img: "https://m.media-amazon.com/images/I/718tnaHeXyL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg"
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };