﻿using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Enteties;
using API.Helpers;

namespace API.Interfaces
{
    public interface IMessageRepository
    {
        void AddMessage(Message message);
        void DeleteMessage(Message message);
        Task<Message> GetMessage(int id);
        Task<PagedList<MessageDTO>> GetMessagesForUser(MessageParams messageParams);
        Task<IEnumerable<MessageDTO>> GetMessageThread(int currentUserId, int recipientId);
        Task<bool> SageAllAsync();
    }
}