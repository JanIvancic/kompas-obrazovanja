using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kompas.Obrazovanja.Model
{
    public class Test
    {
        public int TestId { get; set; }
        public string NazivTesta { get; set; }

        public int? PredmetId { get; set; }
        public Predmet Predmet { get; set; }

        public ICollection<RezultatTesta> RezultatiTesta { get; set; }
    }
}
