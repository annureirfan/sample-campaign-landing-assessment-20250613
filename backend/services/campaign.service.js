import db from "#models/index";

export const getAllCampaigns = async () => {
  try {
    const campaigns = await db.Campaigns.findAll({
      attributes: ["id", "name", "slug"],
    });
    return campaigns;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createCampaign = async (name, templateId, slug, language) => {
  try {
    const campaign = await db.Campaigns.create({
      name,
      templateId,
      slug,
      language,
    });
    return campaign;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteCampaign = async (id) => {
  try {
    await db.Campaigns.destroy({ where: { id } });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCampaign = async (slug) => {
  try {
    const campaign = await db.Campaigns.findOne({
      where: { slug },
      include: [
        {
          model: db.Templates,
          as: "template",
        },
      ],
    });
    return campaign;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
