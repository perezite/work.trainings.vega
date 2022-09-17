using Microsoft.EntityFrameworkCore;
using Prez.Work.Trainings.Vega.Api.Models;

namespace Prez.Work.Trainings.Vega.Api.Persistence
{
    public class VegaDbContext : DbContext
    {
        public VegaDbContext(DbContextOptions<VegaDbContext> options) : base(options)
        {
        }

        // https://learn.microsoft.com/en-us/ef/core/miscellaneous/nullable-reference-types
        public DbSet<Make> Makes => Set<Make>();

        public DbSet<Feature> Features => Set<Feature>();
    }
}
