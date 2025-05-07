using Kompas.Obrazovanja.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Kompas.Obrazovanja.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SchoolsController : ControllerBase
    {
        private readonly ISchoolService _svc;
        public SchoolsController(ISchoolService svc) => _svc = svc;

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var list = await _svc.GetAllAsync();
            return Ok(list);
        }
    }
}
