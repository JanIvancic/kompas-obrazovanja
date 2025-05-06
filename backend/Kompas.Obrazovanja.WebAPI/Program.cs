using Kompas.Obrazovanja.Database;
using Kompas.Obrazovanja.Infrastructure;
using Kompas.Obrazovanja.IoC;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<KompasDbContext>(opts =>
    opts.UseNpgsql(
        builder.Configuration.GetConnectionString("KompasPostgres"),
        npg => npg.EnableRetryOnFailure()
    )
);

builder.Services.AddKompas();
builder.Services.AddOpenApi();
builder.Services.AddControllers();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var seeder = scope.ServiceProvider.GetRequiredService<DataSeeder>();
    await seeder.SeedVarazdinskeSkoleAsync();
}

if (app.Environment.IsDevelopment())
    app.MapOpenApi();

app.UseHttpsRedirection();
app.MapControllers();

app.Run();
