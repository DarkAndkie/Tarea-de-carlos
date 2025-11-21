using System.ComponentModel.DataAnnotations;

namespace AppBanco.Data
{
    public class MovimientoModel
    {
        public int? idmovimiento { get; set; }
        [Required]
        public int? idcuenta { get; set; }
        [Required]
        public int? idsucursal { get; set; }
        public string? fecha { get; set; }
        [Required]
        public double? valor { get; set; }
        [Required]
        public int? idtipomovimiento { get; set; }
        public string? descripcion { get; set; }
        public string? numeroCuenta { get; set; }
        public string? sucursal { get; set; }
        public string? tipomovimiento { get; set; }
    }
}

