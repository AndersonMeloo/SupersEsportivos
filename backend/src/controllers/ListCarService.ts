import { FastifyRequest, FastifyReply } from "fastify";
import { ListCarService } from "../services/ListCarService";

class ListCarController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const listcarService = new ListCarService()

        const customers = await listcarService.execute()

        reply.send(customers)
    }
}

export { ListCarController }