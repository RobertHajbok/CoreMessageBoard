using CoreMessageBoard.Models;
using Microsoft.EntityFrameworkCore;

namespace CoreMessageBoard
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {

        }

        public DbSet<Message> Messages { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
