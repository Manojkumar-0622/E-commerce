import Product from "../models/productModel.js";


//get all the product plus pagination
export const getAllItem = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;

    const limit = 8;

    const skip = (page - 1) * limit;

    const productCount = await Product.countDocuments();

    const all_product = await Product.find()
      .skip(skip)    
      .limit(limit); 

    return res.status(200).json({
      success: true,
      totalPages: Math.ceil(productCount / limit), 
      currentPage: page,                          
      totalProduct: productCount,                  
      data: all_product,
      message: "All products are retrieved successfully"
    });

  } catch (error) {
    console.log("Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

//Add to new item to the store
export const addNewProduct = async (req,res) => {
    const new_Product = req.body;

    try {
      console.log(new_Product);

      if( !new_Product.name ||
          new_Product.images[0].normal_img === '' ||
          !new_Product.price[0].price ||
          !new_Product.simple_des || 
          new_Product.Categories.length === 0 ||
          new_Product.Tags.length === 0
      ){
        return res.status(400).json({
          success : false,
          message : 'require data invlied'
        })
      }

      const product = new Product(new_Product);
      await product.save();

      if(new_Product.price[0].price <= -1){
        return res.status(400).json({
          success : false,
          message : 'price amount is less then -1 change the value into 0 or higher'
        })
      }

      return res.status(200).json({
        success : true,
        message : 'value added'
      })
    } catch (error) {
      console.log(error);
    }
}

