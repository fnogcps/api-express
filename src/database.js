const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const products = {}

function saveProduct(p) {
    if(!p.id) p.id = sequence.id
    products[p.id] = p
    return p
}

function getProduct(id) { return products[id] || {} }
function getProducts() { return Object.values(products) }

function deleteProduct(id) {
    const p = products.id
    delete products[id]
    return p
}

module.exports = {saveProduct, getProduct, getProducts, deleteProduct}
