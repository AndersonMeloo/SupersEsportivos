import sass from './sass.module.scss'

function VendaCarros() {

    return (

        <>

            <div className={sass.containerVendas}>

                <div className={sass.containerMarcas}>
                    <h1>Categorias</h1>

                    <a href="#">
                        <img src="imagens/logo/audi.png" alt="Logo Audi" />
                    </a>

                    <a href="#">
                        <img src="imagens/logo/bmw.png" alt="Logo BMW" />
                    </a>

                    <a href="#">
                        <img src="imagens/logo/logoMercedesBenz.png" alt="Logo Mercedes-Benz" />
                    </a>

                    <a href="#">
                        <img src="imagens/logo/porsche.png" alt="Logo Porsche" />
                    </a>

                    <a href="#">
                        <img src="imagens/logo/volkswagen.png" alt="Logo Volkswagen" />
                    </a>
                </div>

                <div className={sass.containerCarros}>
                    <h2>Teste</h2>
                </div>
            </div>

        </>
    );
}

export default VendaCarros;