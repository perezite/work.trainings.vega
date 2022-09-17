using Prez.Work.Trainings.Vega.Api.Models;
using System.ComponentModel.DataAnnotations;

namespace Prez.Work.Trainings.Vega.Api.Controllers.Resources
{
    public class ModelResource
    {
        public int Id { get; set; }

        public string? Name { get; set; }
    }
}
