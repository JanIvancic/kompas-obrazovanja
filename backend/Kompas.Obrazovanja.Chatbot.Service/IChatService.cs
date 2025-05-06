using Kompas.Obrazovanja.Chatbot.Contract.DTOs;
namespace Kompas.Obrazovanja.Chatbot.Service.Interfaces;
public interface IChatService
{
    Task<ChatResultDto> SendAsync(ChatDto input);
}
