import db from "#models/index";

export const getAllSectionContents = async () => {
  try {
    const sectionContents = await db.SectionContents.findAll({
      include: [
        {
          model: db.Campaigns,
          as: "campaign",
        },
      ],
    });
    return sectionContents;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createSectionContent = async (
  sectionType,
  content,
  campaignId
) => {
  try {
    const sectionContent = await db.SectionContents.create({
      sectionType,
      content,
      campaignId,
    });
    return sectionContent;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateSectionContent = async (id, updateData) => {
  try {
    const existingRecord = await db.SectionContents.findByPk(id);

    if (!existingRecord) {
      throw new Error("Section content not found");
    }

    await existingRecord.update(updateData);
    const updatedRecord = await existingRecord.reload();

    return updatedRecord;
  } catch (error) {
    console.error("Error updating section content:", error);
    throw error;
  }
};

export const deleteSectionContent = async (id) => {
  try {
    await db.SectionContents.destroy({ where: { id } });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSectionContent = async (campaignId) => {
  try {
    const sectionContent = await db.SectionContents.findAll({
      where: { campaignId },
    });
    return sectionContent;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
