import sass from './sass.module.scss'

function Banner() {

    return (

        <>

            <div className={sass.banner}>
                <div className={sass.container}>

                    <div className={sass.containerTextos}>
                        <p>// Plataforma de compra e venda de veículos</p>
                        <h1>Venda seu carro de forma rápida e segura</h1>
                        <p>Cadastre seu carro e encontre interessados em minutos</p>

                        <div className={sass.links}>
                            <a href="">Cadastre</a>
                            <a href="">Contato</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Banner;