const Tag = require("../models/tag");
exports.getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).json({ msg: "Get with success", data: tags });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.addNewTag = async (req, res) => {
  try {
    const newTag = new Tag(req.body);
    const savedTag = await newTag.save();
    res.status(201).json({ msg: "Tag added with success", data: savedTag });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getOneTag = async (req, res) => {
  try {
    const id = req.params.id;
    const tag = await Tag.findById(id);
    res.status(200).json({ msg: "Get with success", data: tag });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateOneTag = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedCategoie = await Tag.findByIdAndUpdate(id, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res
      .status(200)
      .json({ msg: "Tag updated with success", data: updatedCategoie });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteOneTag = async (req, res) => {
  try {
    const id = req.params.id;
    await Tag.deleteOne({ _id: id });
    res.status(200).json({ msg: "Tag deleted with success" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
