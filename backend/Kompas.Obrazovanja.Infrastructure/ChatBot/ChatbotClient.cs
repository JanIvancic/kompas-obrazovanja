using System.Net.Http.Json;

namespace Kompas.Obrazovanja.Infrastructure.Chatbot;
public record ChatRequest(int UserId, string Message);
public record ChatResponse(string Reply);
public class ChatbotClient
{
    private readonly HttpClient _http;
    public ChatbotClient(HttpClient http) => _http = http;
    public async Task<ChatResponse> SendAsync(ChatRequest req)
    {
        var res = await _http.PostAsJsonAsync("/chat", req);
        return await res.Content.ReadFromJsonAsync<ChatResponse>();
    }
}