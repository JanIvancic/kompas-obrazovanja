using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kompas.Obrazovanja.Model
{
    public class Predmet
    {
        public int PredmetId { get; set; }
        public string Naziv { get; set; }
        public string Opis { get; set; }

        public ICollection<SmjerPredmet> SmjerPredmeti { get; set; }
        public ICollection<Test> Tests { get; set; }
    }
}
