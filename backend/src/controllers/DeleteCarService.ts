import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCarService } from "../services/DeleteCarService";

class DeleteCarController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { id } = request.query as { id: string }

        const carService = new DeleteCarService()

        const customer = await carService.execute({ id })

        reply.send(customer)
    }
}

export { DeleteCarController }