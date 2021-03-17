using API.DTOs;
using API.Enteties;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Helpers;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user);
        Task<bool> SaveAllAsync();
        Task<IEnumerable<AppUser>> GetUsersAsync();
        Task<AppUser> GetUserByIdAsync(int id);
        Task<AppUser> GetUserByUsernameAsync(string username);

        Task<PagedList<MemberDTO>> GetMembersAsync(UsersParams usersParams);
        Task<MemberDTO> GetMemberAsync(string username);
    }
}
