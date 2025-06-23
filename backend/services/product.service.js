import db from "#models/index";

export const getAllProducts = async () => {
  try {
    const products = await db.Products.findAll();
    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createProduct = async (name, price, imageUrl) => {
  try {
    const product = await db.Products.create({ name, price, imageUrl });
    return product;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateProduct = async (id, updateData) => {
  try {
    const existingRecord = await db.Products.findByPk(id);

    if (!existingRecord) {
      throw new Error("Product not found");
    }

    await existingRecord.update(updateData);
    const updatedRecord = await existingRecord.reload();

    return updatedRecord;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    await db.Products.destroy({ where: { id } });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductbyCampaignId = async (campaignId) => {
  try {
    const product = await db.CampaignProducts.findAll({
      where: { campaignId },
    });
    const productId = product.map((item) => item.productId);
    const products = await db.Products.findAll({
      where: { id: productId },
    });
    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
