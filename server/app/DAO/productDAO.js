import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import mongoConverter from "../service/mongoConverter";
import * as _ from "lodash";

const productSchema = new mongoose.Schema({
    slug: {type: String},
    name: {type: String},
    image: {type: String},
    category: {type: String},
    new: {type: Boolean},
    price: {type: Number},
    description: {type: String},
    features: {type: String},
}, {
    collection: 'product'
})
productSchema.plugin(uniqueValidator)

const ProductModel = mongoose.model("product", productSchema);

async function query() {
    const result = await ProductModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function get(id) {
    return ProductModel.findOne({ _id: id}).then(function (result) {
        if(result) {
            return mongoConverter(result);
        }
    })
}

async function createNewOrUpdate(data) {
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new ProductModel(data)
                .save()
                .then((result) => {
                    if (result) {
                        return mongoConverter(result);
                    }
                });
        } else {
            return ProductModel.findByIdAndUpdate(data.id, _.omit(data, "id"), {
                new: true,
            });
        }
    });
}


export default {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
    model: ProductModel,
};