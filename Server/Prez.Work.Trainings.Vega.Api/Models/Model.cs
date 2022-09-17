using System.ComponentModel.DataAnnotations.Schema;

namespace Prez.Work.Trainings.Vega.Api.Models
{
    [Table("Models")]
    public class Model
    {
        public int Id { get; set; }

        public Make? Make { get; set; }

        public int MakeId { get; set; }
    }
}
