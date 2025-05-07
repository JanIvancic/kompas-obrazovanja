using Kompas.Obrazovanja.Database;
using Kompas.Obrazovanja.Infrastructure.Email;
using Kompas.Obrazovanja.Infrastructure.Chatbot;
using Kompas.Obrazovanja.Repository.Interfaces;
using Kompas.Obrazovanja.Repository.Implementations;
using Kompas.Obrazovanja.Service.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using Kompas.Obrazovanja.Service;
namespace Kompas.Obrazovanja.IoC;
public static class DependencyInjection
{
    public static IServiceCollection AddKompas(this IServiceCollection services)
    {
        services.AddScoped<ISchoolRepository, SchoolRepository>();
        services.AddScoped<ISchoolService, SchoolService>();
        services.AddTransient<IEmailSender, SmtpEmailSender>();
        services.AddHttpClient<ChatbotClient>();
        return services;
    }
}