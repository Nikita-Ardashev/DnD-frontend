using System.Net;
using System.Net.Http.Headers;
using dotenv.net;
using Microsoft.AspNetCore.Http.Headers;
using Microsoft.AspNetCore.Http.HttpResults;

namespace server.Services.Yandex;

public class YandexHttpClients
{
    private readonly HttpClient httpClient;

    private YandexHttpClients(HttpClient httpClient)
    {
        DotEnv.Load();
        var yandexToken = Environment.GetEnvironmentVariable("YANDEX_TOKEN");

        this.httpClient = httpClient;
        this.httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(
            $"Bearer {yandexToken}" ?? ""
        );
    }

    private string GetFileSrcDownload()
    {
        var yandexSrcModels = Environment.GetEnvironmentVariable("YANDEX_SRC_MODELS");
        var yandexClientId = Environment.GetEnvironmentVariable("YANDEX_CLIENT_ID");
        var yandexSecretId = Environment.GetEnvironmentVariable("YANDEX_SECRET_ID");
        var yandexToken = Environment.GetEnvironmentVariable("YANDEX_TOKEN");

        try
        {
            httpClient.
         }
        catch (HttpRequestException e)
        {
            Console.WriteLine(e);
            throw new HttpRequestException(e);
        }
    }
}
