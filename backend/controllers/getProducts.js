const getProducts = (req,res) => {
    res.send({ name: "Veggie pizza", price: 18});
}

module.exports = getProducts;