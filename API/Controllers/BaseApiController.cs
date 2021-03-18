﻿using API.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    // track last user activity     
    [ServiceFilter(typeof(LogUserActivity))]
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        
    }
}
