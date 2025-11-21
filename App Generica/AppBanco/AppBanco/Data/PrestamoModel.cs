using System.ComponentModel.DataAnnotations;

namespace AppBanco.Data
{
    public class PrestamoModel
    {
        public int? idprestamo { get; set; }
        public int? idcuenta { get; set; }
        [Required] public string? numero { get; set; }
        public string? fecha { get; set; }
        public double? valor { get; set; }
        public double? intereses { get; set; }
        public int? plazo { get; set; }
        public double? seguro { get; set; }
        public double? cuota { get; set; }
    }
}
