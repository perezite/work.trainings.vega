using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Prez.Work.Trainings.Vega.Api.Controllers.Resources;
using Prez.Work.Trainings.Vega.Api.Models;
using Prez.Work.Trainings.Vega.Api.Persistence;

namespace Prez.Work.Trainings.Vega.Api.Controllers
{
    public class FeaturesController
    {
        private readonly VegaDbContext context;
        private readonly IMapper mapper;

        public FeaturesController(VegaDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet("api/features")]
        public async Task<IEnumerable<FeatureResource>> GetFeatures()
        {
            var features = await context.Features.ToListAsync();
            return mapper.Map<List<Feature>, List<FeatureResource>>(features);
        }
    }
}
