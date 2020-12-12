using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Errors
{
    public class ApiException
    {
        public ApiException(int statusCoce, string message = null, string details = null)
        {
            StatusCoce = statusCoce;
            Message = message;
            Details = details;
        }

        public int StatusCoce { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
    }
}
