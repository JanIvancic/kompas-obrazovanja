using Kompas.Obrazovanja.Database;
using Kompas.Obrazovanja.Infrastructure;
using Kompas.Obrazovanja.IoC;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<KompasDbContext>(opts =>
    opts.UseNpgsql(
        builder.Configuration.GetConnectionString("KompasPostgres"),
        npg => npg.EnableRetryOnFailure()
    )
);

builder.Services.AddKompas();
builder.Services.AddTransient<DataSeeder>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", p =>
        p.WithOrigins("http://localhost:3000")
         .AllowAnyHeader()
         .AllowAnyMethod()
    );
});

builder.Services.AddControllers()
    .AddJsonOptions(o =>
        o.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles
    );

builder.Services.AddOpenApi();

var app = builder.Build();

using var scope = app.Services.CreateScope();
await scope.ServiceProvider.GetRequiredService<DataSeeder>()
     .SeedVarazdinskeSkoleAsync();

if (app.Environment.IsDevelopment())
    app.MapOpenApi();

app.UseHttpsRedirection();

app.UseCors("AllowReactApp");

app.MapControllers();

app.Run();
