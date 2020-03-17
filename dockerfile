FROM mcr.microsoft.com/dotnet/core/sdk:2.1 AS build
USER root
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.sln .
COPY dotnet-azure-fhir-web-api/*.csproj ./dotnet-azure-fhir-web-api/
RUN dotnet restore

# copy everything else and build app
COPY dotnet-azure-fhir-web-api/. ./dotnet-azure-fhir-web-api/
WORKDIR /app/dotnet-azure-fhir-web-api
RUN dotnet publish -c Release -o out


FROM mcr.microsoft.com/dotnet/core/aspnet:2.1 AS runtime
USER root

WORKDIR /app
COPY --from=build /app/dotnet-azure-fhir-web-api/out ./
COPY FHIRNode/. ./FHIRNode/

WORKDIR /app/FHIRNode
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_10.x  | bash -
RUN apt-get -y install nodejs
RUN npm install

WORKDIR /app
ENTRYPOINT ["dotnet", "donet-azure-fhir-web-api.dll"]