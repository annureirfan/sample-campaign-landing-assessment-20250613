import * as sectionContentService from "#services/section-content.service";

export const getAll = async (req, res) => {
  try {
    const sectionContents = await sectionContentService.getAllSectionContents();
    res.status(200).json({
      status: "success",
      data: sectionContents,
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
    const { sectionType, content, campaignId } = req.body;
    const sectionContent = await sectionContentService.createSectionContent(
      sectionType,
      content,
      campaignId
    );
    res.status(200).json({
      status: "success",
      data: sectionContent,
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
    if (req.body.sectionType !== undefined)
      updateData.sectionType = req.body.sectionType;
    if (req.body.content !== undefined) updateData.content = req.body.content;
    if (req.body.campaignId !== undefined)
      updateData.campaignId = req.body.campaignId;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        status: "error",
        message: "No valid fields provided for update",
      });
    }

    const sectionContent = await sectionContentService.updateSectionContent(
      id,
      updateData
    );

    res.status(200).json({
      status: "success",
      data: sectionContent,
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
    await sectionContentService.deleteSectionContent(id);
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

export const getSectionContent = async (req, res) => {
  try {
    const { campaignId } = req.params;
    const sectionContent = await sectionContentService.getSectionContent(
      campaignId
    );
    res.status(200).json({
      status: "success",
      data: sectionContent,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
