using System.Collections.Generic;
using System.Threading.Tasks;

namespace ConversationFacadeBot.Services
{
    public interface IHotelReservationOperations
    {
        Task<IList<string>> GetExistingReservations(int userId);
    }
}
