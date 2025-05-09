namespace Kompas.Obrazovanja.Contract.DTOs
{
    public class SchoolDetailDto
    {
        public int SkolaId { get; set; }
        public string Naziv { get; set; } = null!;
        public string Adresa { get; set; } = null!;
        public string? Opis { get; set; }
        public string Grad { get; set; } = null!;
        public string? Telefon { get; set; }
        public string? Email { get; set; }
        public string? Fax { get; set; }
        public string? WebStranica { get; set; }
    }
}
