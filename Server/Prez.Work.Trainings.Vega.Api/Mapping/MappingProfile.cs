using AutoMapper;
using Prez.Work.Trainings.Vega.Api.Controllers.Resources;
using Prez.Work.Trainings.Vega.Api.Models;

namespace Prez.Work.Trainings.Vega.Api.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Make, MakeResource>();
            CreateMap<Model, ModelResource>();
            CreateMap<Feature, FeatureResource>();
        }
    }
}
