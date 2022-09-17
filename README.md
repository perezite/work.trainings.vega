# Work.Trainings.Vega Car Dealer App
The Vega Car-Dealer App by Mosh Hamedani. Refurbished for .NET 6, Angular 14 and Bootstrap 5.

# Setup 
- Install [Dotnet-Ef CLI Tools](https://learn.microsoft.com/en-us/ef/core/cli/dotnet): `dotnet tool install --global dotnet-ef`

# Entity Framework Migrations
- Add a migration: `dotnet ef migrations add SomeDescription`
- Remove a migration: `dotnet ef migrations remove`
- Update the database: `dotnet ef database update`
- Special tip: Downgrade the very last migration: `dotnet ef database update 0`


