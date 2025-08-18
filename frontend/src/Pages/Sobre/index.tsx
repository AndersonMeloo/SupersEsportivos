import { Github } from 'lucide-react';
import sass from './sass.module.scss'

function Sobre() {

    return (

        <>
            <div className={sass.containerSobre}>

                <div className={sass.container}>

                    <div className={sass.containerTextos}>
                        <h1>Supers<span>Esportivos</span></h1>
                        <p>Encontre os carros mais desejados do mercado em um só lugar.
                            Na SupersEsportivos, você tem acesso às melhores ofertas de veículos esportivos e de luxo. Todos os anúncios são verificados para garantir mais segurança e confiança na sua negociação.</p>
                        <p>Anuncie seu carro em poucos passos e tenha acesso a compradores reais e interessados. Nossa plataforma conecta você a um público apaixonado por carros de alta performance.  </p>

                        <div className={sass.containerLinks}>
                            <a href="https://www.linkedin.com/in/andersonrodriguesmelo/" target='_blank'>
                                <img src="imagens/icons/linkedin.png" alt="" />
                            </a>
                            <a href="https://portfolio-anderson-nine.vercel.app/" target='_blank'>
                                <img src="imagens/icons/domain.png" alt="" />
                            </a>
                            <a className={sass.iconGitHub} href="https://github.com/AndersonMeloo" target='_blank'>
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    <div className={sass.containerImagem}>

                        <div className={sass.imagens}>
                            <img src="imagens/imagensIndex/bmwM2.jpg" alt="" />
                            <img src="imagens/imagensIndex/audiRS3.webp" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Sobre;