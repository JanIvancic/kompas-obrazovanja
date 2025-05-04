using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kompas.Obrazovanja.Model
{
    public class ChatSesija
    {
        public int ChatSesijaId { get; set; }
        public string PorukaKorisnika { get; set; }
        public string OdgovorChatbota { get; set; }
        public DateTime Vrijeme { get; set; }

        public int KorisnikId { get; set; }
        public Korisnik Korisnik { get; set; }
    }
}
