const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.12,
        reviews: []
    },

    {
        id: 'bluejean',
        description: 'Blue Jeans',
        price: 55.55,
        reviews: []
    }
   ]

function getAllProducts () {
    return  products
}

function getProductsByPrice (min, max) {
   return products.filter((product)=> {
        return product.price > min && product.price< max
    })
}

function getProductsById (id) {
       return products.find((product)=> {
        return product.id === id
    })
}

function addNewProduct (id, description, price) {
    const newProduct = {
        id, 
        price,
        description,
        reviews: []
    };
    products.push(newProduct)
    return newProduct

}

function addNewProductReview (id, rating, comment) {
    let matchedProduct = getProductsById
    if (matchedProduct) {
        const newReview = {
            id,
            rating,
            comment
        }

       matchedProduct.reviews?.push(newReview)
       return newReview
    }
}


module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductsById,
    addNewProduct,
    addNewProductReview
}