using HDR_UK_Web_Application.IServices;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;

namespace HDR_UK_Web_Application.Services
{
    public class PatientService : IPatientService
    {
        private static readonly string requestOption = "/Patient/";
        private readonly IResourceFetchService _resource;
        private readonly ILoggerManager _logger;
        private readonly IObservationService _observation;

        public PatientService(IResourceFetchService resource, ILoggerManager logger, IObservationService observationService)
        {
            _resource = resource;
            _logger = logger;
            _observation = observationService;
        }

        public async Task<List<JObject>> GetPatients()
        {
            _logger.LogInfo("Class: PatientService, Method: GetAllPages");
            return await _resource.GetAllPages(requestOption);
        }

        public async Task<List<JObject>> GetPatientPages(int pages)
        {
            _logger.LogInfo("Class: PatientService, Method: GetPatientPages");
            return await _resource.GetPages(requestOption, pages);
        }

        public async Task<JObject> GetPatient(string id)
        {
            _logger.LogInfo("Class: PatientService, Method: GetPatient");
            JObject jObject = await _resource.GetSinglePage($"{requestOption}{id}");
            return jObject;
        }

        public async Task<Boolean> PrintPatient(string id) {
            var patient = await GetPatient(id);
            var observations = await _observation.GetPatientObservations(id);
            patient.Add(new JProperty("observations", observations));

            Process process = new Process()
            {
                StartInfo = new ProcessStartInfo()
                {
                    FileName = "npm",
                    Arguments = "start",
                    WorkingDirectory = "/app/FHIRNode",
                    RedirectStandardInput = true,
                    RedirectStandardOutput = true
                }
            };

            process.Start();
            process.StandardInput.WriteLine(patient.ToString());
            process.StandardInput.Close();

            System.Threading.Thread.Sleep(2000);
            string output = await process.StandardOutput.ReadToEndAsync();

            return output.Contains("Finish generating");
        }
    }
}
