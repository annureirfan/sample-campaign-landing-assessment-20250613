import * as templateService from "#services/template.service";

export const getAll = async (req, res) => {
  try {
    const templates = await templateService.getAllTemplates();
    res.status(200).json({
      status: "success",
      data: templates,
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
    const { name, backgroundColor, textColor } = req.body;
    const template = await templateService.createTemplate(
      name,
      backgroundColor,
      textColor
    );
    res.status(200).json({
      status: "success",
      data: template,
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
    await templateService.deleteTemplate(id);
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
