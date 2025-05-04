using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kompas.Obrazovanja.Model
{
    public class Grad
    {
        public int GradId { get; set; }
        public string NazivGrada { get; set; }

        public int ZupanijaId { get; set; }
        public Zupanija Zupanija { get; set; }

        public ICollection<Skola> Skole { get; set; }
    }
}
