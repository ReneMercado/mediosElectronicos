export class Empresa {

  constructor(
    public Id_Empresa: number,
    public Nombre: string,
    public RazonSocial: string,
    public RFC: string,
    public Calle: string,
    public Id_Colonia: number,
    public Colonia: string,
    public CP: string,
    public Fecha: string,
    public NumeroInterior: string,
    public NumeroExterior: string,
    public Id_Municipio: number,
    public Municipio: string,
    public Id_Estado: number,
    public Estado: string,
    public Telefono: string,
    public CuentaBancaria: string,
    public Referencia: string,
    public MotivoBaja: string
  ) { }

}
