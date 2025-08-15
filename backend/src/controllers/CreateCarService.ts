import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCarService } from "../services/CreateCarService";

class CreateCarController {

    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { marca, modelo, imagem, descricao, anoKm, local, preco } = request.body as { modelo: string, marca: string, imagem: string, descricao: string, anoKm: string, local: string, preco: number }

        console.log(marca, modelo, imagem, descricao, anoKm, local, preco)

        const customerCar = new CreateCarService()

        const customer = await customerCar.execute({ marca, modelo, imagem, descricao, anoKm, local, preco })

        reply.send(customer)
    }
}

export { CreateCarController }