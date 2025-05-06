using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kompas.Obrazovanja.Model
{
    public class SmjerPredmet
    {
        public int SmjerId { get; set; }
        public Smjer Smjer { get; set; }

        public int PredmetId { get; set; }
        public Predmet Predmet { get; set; }
    }
}
