import sass from './sass.module.scss'

function Sobre() {

    return (

        <>
            <div className={sass.containerSobre}>

                <div className={sass.container}>

                    <div className={sass.containerTextos}>
                        <h1>Supers<span>Esportivos</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incdunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerciti aulamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehederit essete cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum perspiciatis. aliquip ex ea commodo consequat. Duis aute irure dolor in reprehederit laborum.</p>
                        <a href="">Contact</a>
                    </div>

                    <div className={sass.containerImagem}>
                        <img src=".imagens/imagensBanner/VW-Golf-GTI-TCR-By-ABT.jpg" alt="" />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Sobre;