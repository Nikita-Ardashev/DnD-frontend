using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotenv.net;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

public class YandexDiskController : ControllerBase
{
    [Route("/api")]
    [HttpGet]
    public ActionResult<string> Get(int id)
    {
        DotEnv.Load();
        var test = Environment.GetEnvironmentVariable("YANDEX_CLIENT_ID");
        return Ok(test);
    }
}
