using Kompas.Obrazovanja.Contract.DTOs;
using Kompas.Obrazovanja.Database;
using Kompas.Obrazovanja.Service.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Kompas.Obrazovanja.Service
{
    public class SchoolService : ISchoolService
    {
        private readonly KompasDbContext _db;
        public SchoolService(KompasDbContext db) => _db = db;

        public async Task<IEnumerable<SchoolDto>> GetAllAsync()
        {
            return await _db.Skole
                .AsNoTracking()
                .Include(s => s.Grad)
                .Select(s => new SchoolDto
                {
                    SkolaId = s.SkolaId,
                    Naziv = s.NazivSkole,
                    Adresa = s.Adresa,
                    Opis = s.Opis,
                    Grad = s.Grad.NazivGrada
                })
                .ToListAsync();
        }
    }
}
