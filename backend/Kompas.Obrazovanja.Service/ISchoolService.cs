using Kompas.Obrazovanja.Model;
namespace Kompas.Obrazovanja.Service.Interfaces;
public interface ISchoolService
{
    Task<IEnumerable<Skola>> GetAllAsync();
}