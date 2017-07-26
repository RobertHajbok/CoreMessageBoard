using CoreMessageBoard.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace CoreMessageBoard.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class MessagesController : Controller
    {
        private readonly ApiContext context;

        public MessagesController(ApiContext context)
        {
            this.context = context;
        }

        public IEnumerable<Message> Get()
        {
            return context.Messages;
        }

        [HttpGet("{name}")]
        public IEnumerable<Message> Get(string name)
        {
            return context.Messages.Where(x => x.Owner == name);
        }

        [HttpPost]
        public Message Post([FromBody] Message message)
        {
            var dbMessage = context.Messages.Add(message).Entity;
            context.SaveChanges();
            return dbMessage;
        }
    }
}
