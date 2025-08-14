import prismaClient from "../prisma";

interface DeleteCarProps {

    id: string
}

class DeleteCarService {

    async execute({ id }: DeleteCarProps) {

        if (!id) {
            throw new Error('Solicitação invalida!')
        }

        const findCar = await prismaClient.customer.findFirst({

            // where() - Filtra, procura o dado que estou informando
            where: {
                id: id
            }
        })

        if (!findCar) {
            throw new Error('Carro não existe.')
        }

        await prismaClient.customer.delete({
            where: {
                id: findCar.id
            }
        })

        return { message: 'Deletado com sucesso!' }
    }
}

export { DeleteCarService }