import prismaClient from "../prisma";

interface CreateCarProps {
    marca: string,
    modelo: string
    descricao: string,
    anoKm: string,
    local: string,
    preco: number
}

class CreateCarService {

    async execute({ marca, modelo, descricao, anoKm, local, preco }: CreateCarProps) {

        if (!marca || !modelo || descricao || anoKm || local || preco) {
            throw new Error('Preencha todos os campos!')
        }

        const car = await prismaClient.customer.create({
            data: {
                marca,
                modelo,
                descricao,
                anoKm,
                local,
                preco,
                status: true
            }
        })

        return car
    }
}

export { CreateCarService }