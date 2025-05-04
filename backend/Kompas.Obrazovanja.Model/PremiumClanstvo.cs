using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kompas.Obrazovanja.Model
{
    public class PremiumClanstvo
    {
        public int PremiumClanstvoId { get; set; }
        public string Status { get; set; }
        public DateTime DatumPocetka { get; set; }
        public DateTime DatumZavrsetka { get; set; }

        public int KorisnikId { get; set; }
        public Korisnik Korisnik { get; set; }
    }
}
