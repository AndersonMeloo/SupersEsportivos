import { Calendar, MapPin, Trash } from 'lucide-react';
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
                    {/* <h2>Teste</h2> */}

                    <div className={sass.div1}>
                        <img src="imagens/imagensIndex/Golf-Nardo-Gray.jpg" alt="Imagem Golf GTI    " />
                        <div>
                            <h3>Volkswagen Golf GTI</h3>
                            <p>2.0 Turbo. Automático</p>
                            <p>
                                <Calendar size={16} className={sass.icon} />
                                2013/2014 - 10.000 KM
                                <br />
                                <MapPin size={16} className={sass.icon} />
                                Guarulhos (SP)
                            </p>
                            <div className={sass.textDelet}>
                                <p>R$ 100,000</p>
                                <button>
                                    <Trash className={sass.icon} />
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className={sass.div1}>
                        <img src="imagens/imagensIndex/jettaGLI.jpg" alt="Imagem Jetta GLI" />
                        <div>
                            <h3>Jetta GLI</h3>
                            <p>2.0 Turbo. Automático</p>
                            <p>
                                <Calendar size={16} className={sass.icon} />
                                2024/2025 - 0 KM
                                <br />
                                <MapPin size={16} className={sass.icon} />
                                São Paulo (SP)
                            </p>
                            <div className={sass.textDelet}>
                                <p>R$ 250,000</p>
                                <button>
                                    <Trash className={sass.icon} />
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className={sass.div1}>
                        <img src="imagens/imagensIndex/bmwM3.webp" alt="Foto BMW M3" />
                        <div>
                            <h3>BMW M3</h3>
                            <p>2.0 Turbo. Automático</p>
                            <p>
                                <Calendar size={16} className={sass.icon} />
                                2023/2024 - 20.000 KM
                                <br />
                                <MapPin size={16} className={sass.icon} />
                                Rio de Janeiro (RJ)
                            </p>
                            <div className={sass.textDelet}>
                                <p>R$ 700,000</p>
                                <button>
                                    <Trash className={sass.icon} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default VendaCarros;