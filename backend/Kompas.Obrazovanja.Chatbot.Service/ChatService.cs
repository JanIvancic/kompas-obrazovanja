using Kompas.Obrazovanja.Chatbot.Contract.DTOs;
using Kompas.Obrazovanja.Infrastructure.Chatbot;
using Kompas.Obrazovanja.Chatbot.Service.Interfaces;
using Kompas.Obrazovanja.Chatbot.Contract.DTOs;
namespace Kompas.Obrazovanja.Chatbot.Service.Implementations;
public class ChatService : IChatService
{
    private readonly ChatbotClient _client;
    public ChatService(ChatbotClient client) => _client = client;
    public async Task<ChatResultDto> SendAsync(ChatDto input)
    {
        var res = await _client.SendAsync(new Kompas.Obrazovanja.Infrastructure.Chatbot.ChatRequest(input.UserId, input.Message));
        return new ChatResultDto(res.Reply);
    }
}
