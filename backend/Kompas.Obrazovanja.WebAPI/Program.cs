using Kompas.Obrazovanja.Database;
using Kompas.Obrazovanja.Infrastructure;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddDbContext<KompasDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("KompasPostgres"),
        npgsql => npgsql.EnableRetryOnFailure()
    )
);

builder.Services.AddOpenApi();

builder.Services.AddTransient<DataSeeder>();


var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var seeder = scope.ServiceProvider.GetRequiredService<DataSeeder>();
    await seeder.SeedVarazdinskeSkoleAsync();
}

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild",
    "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", (KompasDbContext db) =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast");

app.MapGet("/api/schools", async (KompasDbContext db) =>
    await db.Skole
            .Select(s => new {
                s.SkolaId,
                s.NazivSkole,
                s.Adresa,
                s.Opis,
                Grad = s.Grad.NazivGrada
            })
            .ToListAsync()
)
.WithName("GetSchools");



app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
