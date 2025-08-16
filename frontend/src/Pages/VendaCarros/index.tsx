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

function VendaCarros() {
    const [cars, setCars] = useState<FormProps[]>([]);
    const [marcaSelecionada, setMarcaSelecionada] = useState<string | null>(null);

    const modeloRef = useRef<HTMLInputElement | null>(null);
    const marcaRef = useRef<HTMLInputElement | null>(null);
    const descricaoRef = useRef<HTMLInputElement | null>(null);
    const anoKmRef = useRef<HTMLInputElement | null>(null);
    const localRef = useRef<HTMLInputElement | null>(null);
    const precoRef = useRef<HTMLInputElement | null>(null);
    const imagemFileRef = useRef<File | null>(null);

    // Carros de exemplo
    const carrosExemplo: FormProps[] = [
        {
            id: '1',
            marca: 'Volkswagen',
            modelo: 'Golf GTI',
            imagem: 'imagens/imagensIndex/Golf-Nardo-Gray.jpg',
            descricao: '2.0 Turbo. Automático',
            anoKm: '2013/2014 - 10.000 KM',
            local: 'Guarulhos (SP)',
            preco: 100.000
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

    useEffect(() => {
        loardCars();
    }, []);

    async function loardCars() {
        const response = await api.get("/customers");
        setCars(response.data);
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

        // Cria URL temporária da imagem para exibir no front
        const imagemUrl = URL.createObjectURL(imagemFileRef.current);

        const response = await api.post("/customer", {
            modelo: modeloRef.current.value,
            marca: marcaRef.current.value,
            imagem: imagemUrl, // Envia URL Temporária para Exibir a Imagem
            descricao: descricaoRef.current.value,
            anoKm: anoKmRef.current.value,
            local: localRef.current.value,
            preco: Number(precoRef.current.value),
        });

        setCars(allCars => [...allCars, response.data]);

        // Limpar campos
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
            setCars(cars.filter(c => c.id !== id));
        } catch (e) {
            console.log(e);
        }
    }

    // Combina carros de exemplo + carros do backend
    const carrosCompletos = [...carrosExemplo, ...cars];

    // Filtra os carros de acordo com a marca selecionada
  const carrosFiltrados = marcaSelecionada
    ? carrosCompletos.filter(carro => carro.marca === marcaSelecionada)
    : carrosCompletos;


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

            {/* Seção de Carros */}
            <div className={sass.containerCarros}>
                {carrosFiltrados.length === 0 ? (
                    <p className={sass.carrosEncontrados}>
                        Nenhum carro encontrado, selecione outra marca ou cadastre um carro!
                    </p>
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

            {/* Form */}
            <div className={sass.containerFormulario}>
                <h2>Cadastro de Carro</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Modelo:</label>
                        <input type="text" ref={modeloRef} required />
                    </div>

                    <div>
                        <label>Marca:</label>
                        <input type="text" ref={marcaRef} required />
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
                        <label>Descrição:</label>
                        <input type="text" ref={descricaoRef} required />
                    </div>

                    <div>
                        <label>Ano/KM:</label>
                        <input type="text" ref={anoKmRef} required />
                    </div>

                    <div>
                        <label>Local:</label>
                        <input type="text" ref={localRef} required />
                    </div>

                    <div>
                        <label>Preço:</label>
                        <input type="number" ref={precoRef} required />
                    </div>

                    <button type="submit">Cadastrar Carro</button>
                </form>
            </div>
        </div>
    );
}

export default VendaCarros;
