import userManager from './user.manager';
import productManager from "./product.manager";

function getter(manager, request) {
    return function () {
        return manager.create(request, this);
    };
}

export default {
    getUserManager: getter(userManager),
    getProductManager: getter(productManager),
};