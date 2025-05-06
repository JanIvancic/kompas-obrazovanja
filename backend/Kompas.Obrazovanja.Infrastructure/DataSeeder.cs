using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Kompas.Obrazovanja.Database;
using Kompas.Obrazovanja.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Linq;

namespace Kompas.Obrazovanja.Infrastructure
{
    public class DataSeeder
    {
        private readonly KompasDbContext _db;
        private readonly IHostEnvironment _env;

        public DataSeeder(KompasDbContext db, IHostEnvironment env)
        {
            _db = db;
            _env = env;
        }

        public async Task SeedVarazdinskeSkoleAsync()
        {
            // 1) Seed the county (Županija)
            var countyName = "Varaždinska županija";
            var county = await _db.Zupanije
                .FirstOrDefaultAsync(z => z.NazivZupanije == countyName)
                ?? new Zupanija { NazivZupanije = countyName };

            if (county.ZupanijaId == 0)
                _db.Zupanije.Add(county);

            // 2) Seed the city (Grad)
            var cityName = "Varaždin";
            var city = await _db.Gradovi
                .FirstOrDefaultAsync(g => g.NazivGrada == cityName && g.ZupanijaId == county.ZupanijaId)
                ?? new Grad { NazivGrada = cityName, Zupanija = county };

            if (city.GradId == 0)
                _db.Gradovi.Add(city);

            await _db.SaveChangesAsync();

            // 3) Now seed schools if none exist
            if (await _db.Skole.AnyAsync(s => s.GradId == city.GradId))
                return; // already seeded for this city

            // Path to your JSONL
            var path = Path.Combine(_env.ContentRootPath, "rag_input_varazdinske_skole_complete.jsonl");
            if (!File.Exists(path))
                return;

            var lines = await File.ReadAllLinesAsync(path);
            foreach (var line in lines)
            {
                var obj = JObject.Parse(line);
                var raw = (string)obj["text"]!;

                // Parse school name & address
                var naziv = raw
                    .Split("Škola:")[1]
                    .Split('\n')[0]
                    .Trim();
                var adresa = raw
                    .Split("Adresa:")[1]
                    .Split('\n')[0]
                    .Trim();

                var skola = new Skola
                {
                    NazivSkole = naziv,
                    Adresa = adresa,
                    Opis = raw,
                    GradId = city.GradId
                };
                _db.Skole.Add(skola);
            }

            await _db.SaveChangesAsync();
        }
    }
}
