using Microsoft.EntityFrameworkCore;
using Test1.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("TaskDb"));
builder.Services.AddControllers();
 

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Configure the HTTP request pipeline.
var app = builder.Build();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
