# Authentication

The Stacker API uses a personal Integration Key to authenticate.&#x20;

You can view and manage your Integration Key in the "Account Settings" section of your Stacker account choose "Integrations".&#x20;

<div align="left"><figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FeMLVvhx0MJem6NxOEjmH%2FCleanShot%202025-03-20%20at%2010.15.55%402x.png?alt=media&#x26;token=c5171a68-c345-4f6b-9b7d-9edb18b71353" alt="" width="375"><figcaption></figcaption></figure></div>

## Authenticating Requests

API requests are authenticated using Request Headers. To authenticate a request, provide the token in the `X-Integration-Key` header of the request:

```
curl -H "X-Integration-Key: [your key]" https://api.go.stackerhq.com/api/external/hello/
```

Integration keys are tied to the Stacker user account for which they were created. **A key provides the same level of access & privileges that its associated Stacker user account would have.**

## Additional Headers

In addition to the Integration Key, you may need to provide additional headers to the endpoint.

These are detailed in [Additional Headers.](https://docs.stackerhq.com/stacker/ai-and-automations/open-api-overview/additional-headers)
