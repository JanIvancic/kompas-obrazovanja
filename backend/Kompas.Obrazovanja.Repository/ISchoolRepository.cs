using System.Collections.Generic;
using System.Threading.Tasks;
using Kompas.Obrazovanja.Model;

namespace Kompas.Obrazovanja.Repository.Interfaces
{
    public interface ISchoolRepository
    {
        Task<IEnumerable<Skola>> GetAllAsync();
    }
}