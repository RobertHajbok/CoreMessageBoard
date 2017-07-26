using CoreMessageBoard.Models;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;

namespace CoreMessageBoard.Controllers
{
    [Produces("application/json")]
    [Route("auth")]
    public class AuthController : Controller
    {
        private readonly ApiContext context;

        public AuthController(ApiContext context)
        {
            this.context = context;
        }

        [HttpPost("register")]
        public JwtPacket Register([FromBody]User user)
        {
            context.Users.Add(user);
            context.SaveChanges();

            return CreateJwtPacket(user);
        }

        [HttpPost("login")]
        public ActionResult Login([FromBody]LoginData loginData)
        {
            var user = context.Users.SingleOrDefault(x => x.Email == loginData.Email && x.Password == loginData.Password);

            if (user == null)
                return NotFound("Email or password incorrect");
            return Ok(CreateJwtPacket(user));
        }

        private JwtPacket CreateJwtPacket(User user)
        {
            var jwt = new JwtSecurityToken();
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return new JwtPacket
            {
                Token = encodedJwt,
                FirstName = user.FirstName
            };
        }
    }
}
