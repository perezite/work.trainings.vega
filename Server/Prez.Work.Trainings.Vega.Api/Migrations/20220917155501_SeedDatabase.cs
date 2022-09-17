using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Prez.Work.Trainings.Vega.Api.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Skoda')");
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Tesla')");
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Renault')");

            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Fabia', (SELECT Id FROM Makes WHERE Name = 'Skoda'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Roomster', (SELECT Id FROM Makes WHERE Name = 'Skoda'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Octavia', (SELECT Id FROM Makes WHERE Name = 'Skoda'))");
                                                                
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Model S', (SELECT Id FROM Makes WHERE Name = 'Tesla'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Model X', (SELECT Id FROM Makes WHERE Name = 'Tesla'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Roadster', (SELECT Id FROM Makes WHERE Name = 'Tesla'))");
                                                                
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Kangoo', (SELECT Id FROM Makes WHERE Name = 'Renault'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Captur', (SELECT Id FROM Makes WHERE Name = 'Renault'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('Espace', (SELECT Id FROM Makes WHERE Name = 'Renault'))");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Makes where Name IN('Skoda', 'Tesla', 'Renault')");
        }
    }
}
