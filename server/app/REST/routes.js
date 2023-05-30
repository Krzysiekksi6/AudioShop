import userEndpoint from "./user.endpoint";
import productEndpoint from './product.endpoint';
const routes = function (router) {
    userEndpoint(router);
    productEndpoint(router);
}
export default routes;