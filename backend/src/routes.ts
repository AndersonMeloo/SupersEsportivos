import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCarController } from "./controllers/CreateCarService";
import { ListCarController } from "./controllers/ListCarService";
import { DeleteCarController } from "./controllers/DeleteCarService";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {

        return new CreateCarController().handle(request, reply)
    })

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {

        return new ListCarController().handle(request, reply)
    })

    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {


        return new DeleteCarController().handle(request, reply)
    })

}
