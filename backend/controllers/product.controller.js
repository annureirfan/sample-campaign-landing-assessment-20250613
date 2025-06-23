import * as productService from "#services/product.service";

export const getAll = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const create = async (req, res) => {
  try {
    const { name, price, imageUrl } = req.body;
    const product = await productService.createProduct(name, price, imageUrl);
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = {};

    // Only include fields that are provided in the request
    if (req.body.name !== undefined) updateData.name = req.body.name;
    if (req.body.price !== undefined) updateData.price = req.body.price;
    if (req.body.imageUrl !== undefined)
      updateData.imageUrl = req.body.imageUrl;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        status: "error",
        message: "No valid fields provided for update",
      });
    }

    const product = await productService.updateProduct(id, updateData);

    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: error.message || "Internal Server Error",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const getProductbyCampaignId = async (req, res) => {
  try {
    const { campaignId } = req.params;
    const product = await productService.getProductbyCampaignId(campaignId);

    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
