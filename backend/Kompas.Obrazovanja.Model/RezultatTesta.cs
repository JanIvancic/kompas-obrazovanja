using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace Kompas.Obrazovanja.Model
{
    public class RezultatTesta
    {
        public int RezultatTestaId { get; set; }
        public DateTime DatumRjesavanja { get; set; }
        public string RezultatTekst { get; set; }

        public int KorisnikId { get; set; }
        public Korisnik Korisnik { get; set; }

        public int TestId { get; set; }
        public Test Test { get; set; }
    }
}
