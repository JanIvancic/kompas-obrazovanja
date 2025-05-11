using Kompas.Obrazovanja.Contract.DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Kompas.Obrazovanja.Service.Interfaces
{
    public interface ISchoolService
    {
        Task<IEnumerable<SchoolDetailDto>> GetAllAsync();
        Task<SchoolDetailDto?> GetByIdAsync(int id);
    }
}
