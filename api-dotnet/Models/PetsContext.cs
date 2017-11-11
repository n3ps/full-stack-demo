using Microsoft.EntityFrameworkCore;

namespace api
{
  public class PetsContext : DbContext
  {
    public PetsContext(DbContextOptions<PetsContext> options) : base(options)
    {
        
    }

    public DbSet<Pet> Pets {get; set;}
  }
}