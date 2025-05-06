using System.Collections.Generic;
using System.Threading.Tasks;
using Kompas.Obrazovanja.Database;
using Kompas.Obrazovanja.Model;
using Kompas.Obrazovanja.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Kompas.Obrazovanja.Repository.Implementations
{
    public class SchoolRepository : ISchoolRepository
    {
        private readonly KompasDbContext _db;

        public SchoolRepository(KompasDbContext db)
        {
            _db = db;
        }

        public async Task<IEnumerable<Skola>> GetAllAsync()
        {
            return await _db.Skole
                            .Include(s => s.Grad)
                            .ToListAsync();
        }
    }
}
