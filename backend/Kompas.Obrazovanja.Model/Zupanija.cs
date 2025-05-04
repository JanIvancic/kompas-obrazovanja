using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kompas.Obrazovanja.Model
{
    public class Zupanija
    {
        public int ZupanijaId { get; set; }
        public string NazivZupanije { get; set; }

        public ICollection<Grad> Gradovi { get; set; }
    }
}
