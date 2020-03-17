using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using HDR_UK_Web_Application.IServices;
using System;

namespace HDR_UK_Web_Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {

        private readonly IPatientService _service;

        public PatientController(IPatientService service)
        {
            _service = service;
        }

        // GET: api/Patient/
        [HttpGet]
        public async Task<List<JObject>> GetPatients()
        {
            return await _service.GetPatients();
        }

        // GET: api/Patient/<patient ID>
        [HttpGet("{id}", Name = "GetPatient")]
        public async Task<JObject> GetPatient(string id)
        {
            return await _service.GetPatient(id);
        }

        // GET: api/Patient/<patient ID>/print
        [HttpGet("{id}/print", Name = "PrintPatient")]
        public async Task<IActionResult> PrintPatient(string id) {
            var a = await _service.PrintPatient(id);

            if (a == false) {
                return StatusCode(500);
            }
            var fileName = "/app/FHIRNode/output/" + id + ".pdf";
            var mimeType = "application/pdf";
            var stream = System.IO.File.OpenRead(fileName);
            return File(stream, mimeType);
        }

        // GET: api/Patient/pages/<number of pages>
        [HttpGet("pages/{pages}", Name = "GetPatientPages")]
        public async Task<List<JObject>> GetPatientPages(int pages)
        {
            return await _service.GetPatientPages(pages);
        }

    }
}
