import db from "#models/index";

export const getAllTemplates = async () => {
  try {
    const templates = await db.Templates.findAll();
    return templates;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createTemplate = async (name, backgroundColor, textColor) => {
  try {
    if (!isValidHexCode(backgroundColor))
      throw new Error("backgroundColor is not valid hex code color");
    if (!isValidHexCode(textColor))
      throw new Error("textColor is not valid hex code color");
    const template = await db.Templates.create({
      name,
      backgroundColor,
      textColor,
    });
    return template;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const isValidHexCode = (color) => {
  const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
  return hexRegex.test(color);
};

export const deleteTemplate = async (id) => {
  try {
    await db.Templates.destroy({ where: { id } });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
