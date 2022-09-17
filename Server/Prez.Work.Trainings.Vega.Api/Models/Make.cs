using System.ComponentModel.DataAnnotations;

namespace Prez.Work.Trainings.Vega.Api.Models
{
    public class Make
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string? Name { get; set; }

        public IList<Model>? Models { get; set; }
    }
}
