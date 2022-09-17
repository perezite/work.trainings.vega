﻿namespace Prez.Work.Trainings.Vega.Api.Models
{
    public class Make
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public IList<Model> Models { get; set; } = new List<Model>();
    }
}
