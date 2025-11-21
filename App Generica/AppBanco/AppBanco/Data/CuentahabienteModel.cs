using System.ComponentModel.DataAnnotations;

namespace AppBanco.Data
{
    public class CuentahabienteModel
    {
        public int? idcuentahabiente { get; set; }
        [Required]
        public string? nombre { get; set; }
        [Required]
        public int? idtipodocumento { get; set; }
        [Required]
        public string? documento { get; set; }
        public string? direccion { get; set; }
        public string? telefono { get; set; }
        [Required]
        public int? idciudad { get; set; }
        public string? clave { get; set; }
        public string? tipodocumento { get; set; }
        public string? sigla { get; set; }
        public string? ciudad { get; set; }
    }
}

