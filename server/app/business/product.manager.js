import productDAO from "../DAO/productDAO";
function create(context) {
    async function query() {
        let result = productDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        let result = await productDAO.get(id);
        if (result) {
            return result;
        }
    }

    async function createNewOrUpdate(data) {
        let result = await productDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }

    return {
        query: query,
        get: get,
        createNewOrUpdate: createNewOrUpdate,
    };
}
export default {
    create: create,
};