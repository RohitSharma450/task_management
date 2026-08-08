import Test from "../models/test.model.js";

export const testController = async (req, res) => {
  try {
    const { testName } = req.body;

    if (!testName) {
      return res.status(400).json({ message: "Test name is required" });
    }

    const newTest = await Test.create({ testName });

    res.status(201).json({
      message: "Test created successfully",
      data: newTest,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
