using System.ComponentModel.DataAnnotations;

namespace Prez.Work.Trainings.Vega.Api.Controllers.Resources
{
    public class MakeResource
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public IList<ModelResource>? Models { get; set; } = new List<ModelResource>();
    }
}
