using Kompas.Obrazovanja.Model;
using Kompas.Obrazovanja.Repository.Interfaces;
using Kompas.Obrazovanja.Service.Interfaces;
namespace Kompas.Obrazovanja.Service.Implementations;
public class SchoolService : ISchoolService
{
    private readonly ISchoolRepository _repo;
    public SchoolService(ISchoolRepository repo) => _repo = repo;
    public Task<IEnumerable<Skola>> GetAllAsync() => _repo.GetAllAsync();
}
