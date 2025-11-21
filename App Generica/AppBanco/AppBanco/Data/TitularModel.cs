using System.ComponentModel.DataAnnotations;

namespace AppBanco.Data
{
    public class TitularModel
    {
        [Required]
        public int? idcuenta { get; set; }
        [Required]
        public int? idcuentahabiente { get; set; }
        public string? numeroCuenta { get; set; }
        public string? nombreCuentahabiente { get; set; }
    }
}

