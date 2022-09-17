# Work.Trainings.Vega Car Dealer App
The Vega Car-Dealer App by Mosh Hamedani. Refurbished for .NET 6, Angular 14 and Bootstrap 5.

# Setup 
- Install [Dotnet CLI Tools for Entity Framework](https://learn.microsoft.com/en-us/ef/core/cli/dotnet): `dotnet tool install --global dotnet-ef`

# Entity Framework Migration Commands
- Add migration: `dotnet ef migrations add SomeMigration`
- Remove last migration: `dotnet ef migrations remove`
- Update database to last migration: `dotnet ef database update`
- Update/downgrade database to specific migration: `dotnet ef databse update SomeMigration` 
- Downgrade all migrations: `dotnet ef database update 0`
