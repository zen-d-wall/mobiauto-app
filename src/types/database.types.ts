export interface Brand {
    codigo: string;
    nome: string;
}

export type Categories = 'Marca' | 'Modelo' | 'Ano';

export interface Car {
    TipoVeiculo: number
    Valor: string
    Marca: string
    Modelo: string
    AnoModelo: number
    Combustivel: string
    CodigoFipe: string
    MesReferencia: string
    SiglaCombustivel: string
}