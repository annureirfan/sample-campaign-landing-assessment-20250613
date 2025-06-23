import * as campaignService from "#services/campaign.service";

export const getAll = async (req, res) => {
  try {
    const campaigns = await campaignService.getAllCampaigns();
    res.status(200).json({
      status: "success",
      data: campaigns,
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
    const { name, templateId, slug, language } = req.body;
    const campaign = await campaignService.createCampaign(
      name,
      templateId,
      slug,
      language
    );
    res.status(200).json({
      status: "success",
      data: campaign,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await campaignService.deleteCampaign(id);
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

export const getOne = async (req, res) => {
  try {
    const { slug } = req.params;
    const campaign = await campaignService.getCampaign(slug);
    res.status(200).json({
      status: "success",
      data: campaign,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
