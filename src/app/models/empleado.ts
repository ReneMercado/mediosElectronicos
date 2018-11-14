export class Empleado {

  constructor(
    public Id_Empresa: number,
    public Empresa: string,
    public Id_Empleado: number,
    public RFC: string,
    public CURP: string,
    public PrimerNombre: string,
    public SegundoNombre: string,
    public ApellidoPaterno: string,
    public ApellidoMaterno: string,
    public FechaNacimiento: string,
    public Id_Estado: number,
    public Estado: string,
    public Id_Municipio: number,
    public Municipio: string,
    public Id_Colonia: number,
    public Colonia: string,
    public CP: string,
    public TelefonoFijo: string,
    public TelefonoCelular: string,
    public Correo: string,
    public Puesto: string,
    public FechaIngreso: string,
    public IngresoNeto: number,
    public Id_TipoNomina: number,
    public TipoNomina: string,
    public FechaCorteNomina: string,
    public MontoMaximo: number,
    public SaldoDisponible: number,
    public FechaVencimientoContrato: string,
    public CargaMasiva: string
  ) { }

}
