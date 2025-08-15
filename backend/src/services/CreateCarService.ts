import prismaClient from "../prisma";

interface CreateCarProps {
    marca: string,
    modelo: string
    imagem: string,
    descricao: string,
    anoKm: string,
    local: string,
    preco: number
}

class CreateCarService {

    async execute({ marca, modelo, imagem, descricao, anoKm, local, preco }: CreateCarProps) {

        if (!marca || !modelo || !imagem || !descricao || !anoKm || !local || !preco) {
            throw new Error('Preencha todos os campos!')
        }

        const car = await prismaClient.customer.create({
            data: {
                marca,
                modelo,
                imagem,
                descricao,
                anoKm,
                local,
                preco,
                // status: true
            }
        })

        return car
    }
}

export { CreateCarService }