const productList = require('./items_list')

module.exports = {

        products:  (req, res) => {
            try {
                console.log(productList,'productslistadfs')
                    let pageCount = req.query.page || 1
                    let pageNum = parseInt(pageCount)
                    let totalProducts = productList.length
                    let lmt = parseInt(req.query.size) || 50
                    let pages = [];
                    for (let i = 1; i <= Math.ceil(totalProducts / lmt); i++) {
                        pages.push(i)
                    }
                    let skip = (pageNum-1)*50

                    let limitedProducts = productList.slice(skip,skip+lmt)
                    let products = limitedProducts.map((item)=>{
                        return {
                            id :item.id,
                            item_name :item.item_name,
                            item_image : item.item_image,
                            item_price : item.item_price,
                        }
                    })
                    res.render('productList',{ products,pages  })
                
        } catch (error) {
        res.render('error', { message: error.message, code: 500 });
        }
        },

        selectedProduct:(req,res)=>{
            let prodId = req.params.id
            let product = productList.find(item=> item.id == prodId)
            console.log(product,'products')
            res.render('productDetails',{product})
        }


}