using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kompas.Obrazovanja.Model
{
    public class Skola
    {
        public int SkolaId { get; set; }
        public string NazivSkole { get; set; }
        public string Adresa { get; set; }
        public string? Opis { get; set; }
        public int GradId { get; set; }
        public Grad Grad { get; set; }

        public ICollection<Smjer> Smjerovi { get; set; }
        public ICollection<Iskustvo> Iskustva { get; set; }
    }
}
