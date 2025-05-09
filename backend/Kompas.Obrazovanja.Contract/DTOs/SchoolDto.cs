namespace Kompas.Obrazovanja.Contract.DTOs
{
    public class SchoolDto
    {
        public int SkolaId { get; set; }
        public string Naziv { get; set; } = null!;
        public string Adresa { get; set; } = null!;
        public string Opis { get; set; } = null!;
        public string Grad { get; set; } = null!;
    }
}
