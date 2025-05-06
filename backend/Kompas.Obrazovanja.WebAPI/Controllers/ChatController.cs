using Kompas.Obrazovanja.Chatbot.Contract.DTOs;
using Kompas.Obrazovanja.Chatbot.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;
namespace Kompas.Obrazovanja.WebAPI.Controllers;
[ApiController, Route("api/[controller]")]
public class ChatController : ControllerBase
{
    private readonly IChatService _svc;
    public ChatController(IChatService svc) => _svc = svc;
    [HttpPost("send")]
    public async Task<IActionResult> Send(ChatDto dto)
    {
        var res = await _svc.SendAsync(dto);
        return Ok(res);
    }
}