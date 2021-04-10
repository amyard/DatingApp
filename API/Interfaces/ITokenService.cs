using System.Threading.Tasks;
using API.Enteties;

namespace API.Interfaces
{
    public interface ITokenService
    {
        Task<string> CreateToken(AppUser user);
    }
}
