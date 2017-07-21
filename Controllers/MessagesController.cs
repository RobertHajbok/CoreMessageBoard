using CoreMessageBoard.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace CoreMessageBoard.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class MessagesController : Controller
    {
        static List<Message> messages = new List<Message>
        {
            new Message
            {
                Owner = "John",
                Text = "hello"
            },
            new Message
            {
                Owner = "Tim",
                Text = "Hi"
            }
        };

        public IEnumerable<Message> Get()
        {
            return messages;
        }

        [HttpPost]
        public void Post([FromBody] Message message)
        {
            messages.Add(message);
        }
    }
}
