export class Empresa {

  constructor(
    public Id_Empresa: string,
    public Convenio: string,
    public NumEmpresa: string,
    public Nombre: string,
    public RazonSocial: string,
    public RFC: string,
    public Calle: string,
    public NumExt: string,
    public NumInt: string,
    public Colonia: string,
    public Municipio: string,
    public Ciudad: string,
    public Estado: string,
    public CP: string,
    public TelEmpresa: string,
    public CelEmpresa: string,
    public Referencia: string,
    public FechaAlta: string,
    public Estatus: string,
    public PrimerNombreRL: string,
    public SegundoNombreRL: string,
    public ApellidoPaternoRL: string,
    public ApellidoMaternoRL: string,
    public RFCRL: string,
    public FechaNacimientoRL: string,
    public PrimerNombreRep: string,
    public SegundoNombreRep: string,
    public ApellidoPaternoRep: string,
    public ApellidoMaternoRep: string,
    public PuestoRep: string,
    public CorreoRep: string,
    public TelRep: string,
    public ExtRep: string,
    public CelRep: string,
    public DiasAntCorteSemana: number,
    public DiasAntCorteCatorce: number,
    public DiasAntCorteQuincena: number,
    public DiasAntCorteMes: number,
    public Usuario_Id: number,
    public FechaCreacion: Date,
    public UsuarioMod_Id: number,
    public FechaMod: Date,
    public MotivoBajaEmpresa_Id: number
  ) { }

}
