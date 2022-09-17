using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Prez.Work.Trainings.Vega.Api.Models;
using Prez.Work.Trainings.Vega.Api.Persistence;

namespace Prez.Work.Trainings.Vega.Api.Controllers
{
    public class MakesController : Controller
    {
        private readonly VegaDbContext context;

        public MakesController(VegaDbContext context)
        {
            this.context = context;
        }

        [HttpGet("/api/makes")]
        public async Task<IEnumerable<Make>> GetMakes()
        {
            return await context.Makes.Include(m => m.Models).ToListAsync(); 
        }
    }
}
