export class Tarjeta {

    constructor(
        public Id_Tarjeta: number,
        public Empleado_Id: number,
        public NumTarjeta: string,
        public FechaVencimiento: string,
        public CVV: string,
        public NIP: string,
        public Producto_Id: number,
        public Estatus: string,
        public TarjetaEstatus_Id: number,
        public Usuario_Id: number,
        public FechaCreacion: Date,
        public UsuarioMod_Id: number,
        public FechaMod: Date,
        public LimiteCredito: number,
        public MontoSolicitado: number,
        public TotalCompras: number,
        public ImportePagar: number,
        public DisponibleSolicitar: number
    ) { }

}
