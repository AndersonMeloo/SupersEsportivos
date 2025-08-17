import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Calendar, MapPin, Trash } from 'lucide-react';
import sass from './sass.module.scss';
import { api } from '../../services/api';

interface FormProps {
    id: string,
    modelo: string,
    marca: string,
    imagem: string,
    descricao: string,
    anoKm: string,
    local: string,
    preco: number
}

// Carros Simulando já o que vai vir no Banco de Dados
const carrosExemplo: FormProps[] = [
    {
        id: '1',
        marca: 'Volkswagen',
        modelo: 'Golf GTI',
        imagem: 'imagens/imagensIndex/Golf-Nardo-Gray.jpg',
        descricao: '2.0 Turbo. Automático',
        anoKm: '2013/2014 - 10.000 KM',
        local: 'Guarulhos (SP)',
        preco: 100000
    },
    {
        id: '2',
        marca: 'Volkswagen',
        modelo: 'Jetta GLI',
        imagem: 'imagens/imagensIndex/jettaGLI.jpg',
        descricao: '2.0 Turbo. Automático',
        anoKm: '2024/2025 - 0 KM',
        local: 'São Paulo (SP)',
        preco: 250000
    },
    {
        id: '3',
        marca: 'BMW',
        modelo: 'BMW M3',
        imagem: 'imagens/imagensIndex/bmwM3.webp',
        descricao: '2.0 Turbo. Automático',
        anoKm: '2023/2024 - 20.000 KM',
        local: 'Rio de Janeiro (RJ)',
        preco: 700000
    },
];

function VendaCarros() {
    const [cars, setCars] = useState<FormProps[]>([]);
    const [marcaSelecionada, setMarcaSelecionada] = useState<string | null>(null);

    const marcaRef = useRef<HTMLSelectElement | null>(null);
    const modeloRef = useRef<HTMLInputElement | null>(null);
    const descricaoRef = useRef<HTMLInputElement | null>(null);
    const anoKmRef = useRef<HTMLInputElement | null>(null);
    const localRef = useRef<HTMLInputElement | null>(null);
    const precoRef = useRef<HTMLInputElement | null>(null);
    const imagemFileRef = useRef<File | null>(null);

    useEffect(() => {
        loardCars();
    }, []);

    async function loardCars() {
        const response = await api.get("/customers");
        setCars([...carrosExemplo, ...response.data]);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (
            !modeloRef.current?.value ||
            !marcaRef.current?.value ||
            !descricaoRef.current?.value ||
            !anoKmRef.current?.value ||
            !localRef.current?.value ||
            !precoRef.current?.value ||
            !imagemFileRef.current
        ) return;

        const imagemUrl = URL.createObjectURL(imagemFileRef.current);

        const response = await api.post("/customer", {
            modelo: modeloRef.current.value,
            marca: marcaRef.current.value,
            imagem: imagemUrl,
            descricao: descricaoRef.current.value,
            anoKm: anoKmRef.current.value,
            local: localRef.current.value,
            preco: Number(precoRef.current.value),
        });

        setCars(allCars => [...allCars, response.data]);

        modeloRef.current.value = "";
        marcaRef.current.value = "";
        descricaoRef.current.value = "";
        anoKmRef.current.value = "";
        localRef.current.value = "";
        precoRef.current.value = "";
        imagemFileRef.current = null;
    }

    async function handleDelete(id: string) {
        try {
            await api.delete("/customer", { params: { id } });
        } catch (e) {
            console.log(e);
        }

        setCars(prevCars => prevCars.filter(c => c.id !== id));
    }

    const carrosFiltrados = marcaSelecionada
        ? cars.filter(carro => carro.marca === marcaSelecionada)
        : cars;

    return (
        <div>
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
                        <div className={sass.carrosNaoEncontrados}>
                            <p>Nenhum carro encontrado, selecione outra marca ou cadastre um carro!</p>
                            <a href="#cadastrar">Cadastre aqui!</a>
                        </div>
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
                                        <p>{`R$ ${carro.preco}`}</p>
                                        <button onClick={() => handleDelete(String(carro.id))}>
                                            <Trash className={sass.icon} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div id='cadastrar' className={sass.containerFormulario}>
                <h2>Cadastre seu Carro</h2>

                <div className={sass.container}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Marca:</label>
                            <select ref={marcaRef} required>
                                <option value="">Selecione a marca</option>
                                <option value="Audi">Audi</option>
                                <option value="BMW">BMW</option>
                                <option value="Mercedes-Benz">Mercedes-Benz</option>
                                <option value="Porsche">Porsche</option>
                                <option value="Volkswagen">Volkswagen</option>
                            </select>
                        </div>

                        <div>
                            <label>Modelo:</label>
                            <input type="text" ref={modeloRef} required />
                        </div>

                        <div>
                            <label>Imagem (Arquivo):</label>
                            <input
                                type="file"
                                accept="image/*"
                                required
                                onChange={e => {
                                    if (e.target.files && e.target.files[0]) {
                                        imagemFileRef.current = e.target.files[0];
                                    }
                                }}
                            />
                        </div>

                        <div>
                            <label>Motor:</label>
                            <input type="text" ref={descricaoRef} required />
                        </div>

                        <div>
                            <label>Ano/KM:</label>
                            <input type="text" ref={anoKmRef} required />
                        </div>

                        <div>
                            <label>Localização:</label>
                            <input type="text" ref={localRef} required />
                        </div>

                        <div>
                            <label>Preço:</label>
                            <input type="number" ref={precoRef} required />
                        </div>

                        <div>
                            <label>Cadastrar Carro</label>
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default VendaCarros;
