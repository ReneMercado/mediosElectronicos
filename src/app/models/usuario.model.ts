export class Usuario {

    constructor(
        public Alias: string,
        public Area_Id: number,
        public CantIntentos: number,
        public Correo: string,
        public Estatus: number,
        public Fec_Pwd: Date,
        public Fec_PwdTemporal: Date,
        public Fec_UltAcceso: Date,
        public Id_Usuario: number,
        public LugarSucursal: string,
        public Nombre: string,
        public Password: string,
        public PwdTemporal: string,
        public Rol_Id: number,
        public Sucursal: string,
        public Sucursal_Id: string,
        public TipInactivo: string,
        public TipoInactivoDescripcion: string,
        public EstatusDescripcion: string
        ) { }

}
