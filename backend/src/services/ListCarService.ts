import prismaClient from "../prisma";

class ListCarService {

    async execute() {

        // findMany() - Encontrar todos
        const customers = await prismaClient.customers.findMany()

        return customers
    }
}

export { ListCarService }