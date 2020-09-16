export interface Login{
    COD_USUARIO?: number;
    COD_PERSONA?: number;
    NOMBRE_USUARIO: string;
    CLAVE: string,
    ESTADO: string;
    ULT_FECHA_INGRESO: Date;
    INTENTOS_FALLIDOS: number;
    COD_ROL: number;
    NOMBRE: string;
}

export interface Nota1{
    NOTA1?: number;
}

export interface ISession {
    session: Object;
}