# Deployment Guide

## Install Docker

- Download and install [Docker](https://www.docker.com/)

## Clone the project (optional)

- Clone the project to local machine
    ```bash
    git clone https://github.com/cjim8889/GOSH-FHIRworks2020-FHIRTOPDF
    ```

## Build the docker image (optional)

- Build the docker image by opening a new terminal and running the following command:

    ```bash
    docker build -t fhirtopdf .
    ```

# Running the app

- Make sure docker daemon is running
- Create a file named **docker.env**


    ```bash
    Instance=https://login.microsoftonline.com/{0}
    Tenant=
    ClientId=
    ClientSecret=
    BaseAddress=
    Scope=
    ```
- Replace the empty fields with the Azure FHIR API credentials you have been given.
- Save the file.
- In the terminal, run the following command if you want to use locally built image:

    ```bash
    docker run -it --rm -p 8080:80 --env-file docker.env --name fhirtopdf fhirtopdf
    ```
- In the terminal, run the following command if you want to use remote built [image](https://hub.docker.com/repository/docker/jimchen8889/fhirtopdf) from dockerhub:

    ```bash
    docker run -it --rm -p 8080:80 --env-file docker.env --name fhirtopdf jimchen8889/fhirtopdf:latest
    ```
- Open a web browser and navigate to [http://localhost:8080/api/Patient/bfc44552-b5a9-40ce-b705-dcf3e67dfded/print](http://localhost:8080/api/Patient/bfc44552-b5a9-40ce-b705-dcf3e67dfded/print) to view an example report.


## List of API endpoints

#### Patients

- Print a patient record: **/api/Patient/print** *patient ID*

