using System.ComponentModel.DataAnnotations;

namespace AppBanco.Data
{
    public class CuentaModel
    {
        public int? idcuenta { get; set; }
        [Required]public string? numero { get; set; }
        /*public DateOnly fechaApertura { get; set; }*/
        public string? fechaApertura { get; set; }
        [Required]public int? idtipocuenta { get; set; }
        [Required]public int? idSucursal { get; set; }
        [Required]public double? saldo { get; set; }
        [Required]public int? sobregiro { get; set; }
        [Required]public double? granmovimiento { get; set; }
        [Required]public int? sobregironoautorizado { get; set; }
        public string? tipocuenta { get; set; }
        public string? sucursal { get; set; }
    }
}
