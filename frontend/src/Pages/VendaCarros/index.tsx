import { useState } from 'react';
import { Calendar, MapPin, Trash } from 'lucide-react';
import sass from './sass.module.scss';

function VendaCarros() {

    // Inicialmente é null - Mostra todos (sem filtro)
    const [marcaSelecionada, setMarcaSelecionada] = useState<string | null>(null);

    // Inicialmente se inicia com esses e no Banco de Dados Vira assim
    const carros = [
        {
            id: 1,
            marca: 'Volkswagen',
            modelo: 'Golf GTI',
            imagem: 'imagens/imagensIndex/Golf-Nardo-Gray.jpg',
            descricao: '2.0 Turbo. Automático',
            anoKm: '2013/2014 - 10.000 KM',
            local: 'Guarulhos (SP)',
            preco: 'R$ 100,000',
        },
        {
            id: 2,
            marca: 'Volkswagen',
            modelo: 'Jetta GLI',
            imagem: 'imagens/imagensIndex/jettaGLI.jpg',
            descricao: '2.0 Turbo. Automático',
            anoKm: '2024/2025 - 0 KM',
            local: 'São Paulo (SP)',
            preco: 'R$ 250,000',
        },
        {
            id: 3,
            marca: 'BMW',
            modelo: 'BMW M3',
            imagem: 'imagens/imagensIndex/bmwM3.webp',
            descricao: '2.0 Turbo. Automático',
            anoKm: '2023/2024 - 20.000 KM',
            local: 'Rio de Janeiro (RJ)',
            preco: 'R$ 700,000',
        },
    ];

    // Filtra os carros de acordo com as Marcas Selecionadas
    const carrosFiltrados = marcaSelecionada
        ? carros.filter(carro => carro.marca === marcaSelecionada)
        : carros;

    return (
        <div className={sass.containerVendas}>
            <div className={sass.containerMarcas}>
                <h1>Categorias</h1>

                <button type='button' onClick={() => setMarcaSelecionada(null)}>
                    <span className={sass.todasCategorias}>Mostrar todos</span>
                </button>

                <button type='button' onClick={() => setMarcaSelecionada('Audi')}>
                    <img src="imagens/logo/audi.png" alt="Logo Audi" />
                </button>

                <button type='button' onClick={() => setMarcaSelecionada('BMW')}>
                    <img src="imagens/logo/bmw.png" alt="Logo BMW" />
                </button>

                <button type='button' onClick={() => setMarcaSelecionada('Mercedes-Benz')}>
                    <img src="imagens/logo/logoMercedesBenz.png" alt="Logo Mercedes-Benz" />
                </button>

                <button type='button' onClick={() => setMarcaSelecionada('Porsche')}>
                    <img src="imagens/logo/porsche.png" alt="Logo Porsche" />
                </button>

                <button type='button' onClick={() => setMarcaSelecionada('Volkswagen')}>
                    <img src="imagens/logo/volkswagen.png" alt="Logo Volkswagen" />
                </button>
            </div>

            <div className={sass.containerCarros}>
                {carrosFiltrados.length === 0 ? (
                    <p>Nenhum carro encontrado, selecione outra marca ou cadastre um carro</p>
                ) : (
                    carrosFiltrados.map(carro => (
                        <div key={carro.id} className={sass.div1}>
                            <img src={carro.imagem} alt={`Imagem ${carro.modelo}`} />
                            <div>
                                <h3>{carro.modelo}</h3>
                                <p>{carro.descricao}</p>
                                <p>
                                    <Calendar size={16} className={sass.icon} />
                                    {carro.anoKm}
                                    <br />
                                    <MapPin size={16} className={sass.icon} />
                                    {carro.local}
                                </p>
                                <div className={sass.textDelet}>
                                    <p>{carro.preco}</p>
                                    <button>
                                        <Trash className={sass.icon} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default VendaCarros;
