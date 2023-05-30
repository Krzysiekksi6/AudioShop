import business from "../business/business.container";

const productEndpoint = (router) => {
    router.get('/api/products', async (request, response, next) => {
        try {
            let result =  await business.getProductManager().query();
            response.status(200).send(result);
        }catch (err) {
            console.log(err)
        }
    });

    router.get('/api/products/:id', async (request, response, next) => {
        try {
            const id = request.params.id;
            const result = await business.getProductManager().get(id)
            response.status(200).send(result);
        }catch (err) {
            console.log(err)
        }

    })
    router.post("/api/products", async (request, response, next) => {
        try {
            const data = request.body;
            const result = await business.getProductManager().createNewOrUpdate(data);
            response.status(201).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.put("/api/products/:id", async (request, response, next) => {
        try {
            const data = request.body;
            const result = await  business.getProductManager().createNewOrUpdate(data);
            console.log(result)
            response.status(200).send(result);
        }catch (err) {
            console.log(err)
        }
    })

}

export default productEndpoint;