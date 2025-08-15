import Fastify from "fastify";
import { routes } from "./routes";
import cors from '@fastify/cors'

const app = Fastify({ logger: true })

//Tratando Erro
app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message })
})

const start = async () => {

    await app.register(cors, {
        origin: '*',
        methods: ['GET', 'POST', 'DELETE'],
    })

    await app.register(routes)

    try {
        await app.listen({ port: 3333, host: '0.0.0.0' })
    } catch (error) {
         console.error(error) // <--- adiciona isso para ver o erro real
        process.exit(1)
    }
}

start()