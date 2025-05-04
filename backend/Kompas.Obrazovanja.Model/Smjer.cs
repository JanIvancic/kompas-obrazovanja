using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kompas.Obrazovanja.Model
{
    public class Smjer
    {
        public int SmjerId { get; set; }
        public string Naziv { get; set; }
        public string Opis { get; set; }
        public int TrajanjeMjeseci { get; set; }

        public int SkolaId { get; set; }
        public Skola Skola { get; set; }

        public ICollection<SmjerPredmet> SmjerPredmeti { get; set; }
    }
}
