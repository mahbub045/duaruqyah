const subCategory = require("../models/Sub_category");

const getSubCatService = async () => {
    const sub_cat = await subCategory.findAll();
    return sub_cat;
};
module.exports = getSubCatService;