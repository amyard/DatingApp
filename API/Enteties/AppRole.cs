using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace API.Enteties
{
    public class AppRole : IdentityRole<int>
    {
        public ICollection<AppUserRole> UserRoles { get; set; }
    }
}