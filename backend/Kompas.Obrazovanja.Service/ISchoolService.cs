using Kompas.Obrazovanja.Contract.DTOs;

namespace Kompas.Obrazovanja.Service.Interfaces
{
    public interface ISchoolService
    {
        Task<IEnumerable<SchoolDto>> GetAllAsync();
    }
}