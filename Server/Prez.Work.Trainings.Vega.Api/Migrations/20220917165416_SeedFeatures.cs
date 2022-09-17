using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Prez.Work.Trainings.Vega.Api.Migrations
{
    public partial class SeedFeatures : Migration
    {
        private static List<string> features = new() { "Air Conditioning", "Antilock Braking System", "Rear View Camera" };

        protected override void Up(MigrationBuilder migrationBuilder)
        {
            foreach(var feature in features)
            {
                migrationBuilder.Sql($"INSERT INTO Features(Name) VALUES('{feature}')");
            }
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            foreach (var feature in features)
            {
                migrationBuilder.Sql($"DELETE FROM Features where Name = '{feature}'");
            }
        }
    }
}
