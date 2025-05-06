using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kompas.Obrazovanja.Model
{
    public class Iskustvo
    {
        public int IskustvoId { get; set; }
        public string Tekst { get; set; }
        public int Ocjena { get; set; }
        public DateTime Datum { get; set; }

        public int KorisnikId { get; set; }
        public Korisnik Korisnik { get; set; }

        public int SkolaId { get; set; }
        public Skola Skola { get; set; }
    }
}
