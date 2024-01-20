const Categorie = require("../models/categorie");
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.find();
    res.status(200).json({ msg: "Get with success", data: categories });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.addNewCategorie = async (req, res) => {
  try {
    const newCategorie = new Categorie(req.body);
    const savedCategorie = await newCategorie.save();
    res
      .status(201)
      .json({ msg: "Categorie added with success", data: savedCategorie });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getOneCategorie = async (req, res) => {
  try {
    const id = req.params.id;
    const categorie = await Categorie.findById(id);
    res.status(200).json({ msg: "Get with success", data: categorie });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateOneCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedCategoie = await Categorie.findByIdAndUpdate(id, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res
      .status(200)
      .json({ msg: "Categorie updated with success", data: updatedCategoie });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteOneCategorie = async (req, res) => {
  try {
    const id = req.params.id;
    await Categorie.deleteOne({ _id: id });
    res.status(200).json({ msg: "Categorie deleted with success" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
