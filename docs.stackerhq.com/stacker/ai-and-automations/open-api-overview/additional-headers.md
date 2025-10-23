# Additional Headers

In addition to your Integration Key to authenticate your requests, you may need to provide additional headers.

## Account ID

Most endpoints (aside from `/hello` and `/accounts`) require an Account ID to be specified.&#x20;

An account represents a single workspace in Stacker, and usually corresponds to a single company.

#### Getting your Account ID

You can access your Account ID by running the following command in the javascript console:

`JSON.parse(localStorage.user).account_id`

#### Using the Account ID

You should use the `X-Account-Id` header to specify the Account you wish to apply to your query

## Stack ID

The Stack ID represents the ID of the particular application within Stacker that you are accessing.

#### Getting your Stack ID

The easiest way to find the Stack ID for a given application is by calling the Stacks endpoint.

#### Getting your Stack ID from browser

You can access your Stack ID from a request in the network tab of the developer tools.

Open the Developer Tools, and navigate to a page within the application you're trying to access. Select the "Network" tab and filter to a request containing `/api` and check the Request Headers section.&#x20;

{% hint style="warning" %}
Coming soon: we'll be adding a better way to access this!
{% endhint %}

#### Using the Stack ID

You should use the `X-Stack-Id` header to specify the Stack you wish to apply to your query.

Even when specifying a Stack ID, you should also provide the matching Account ID.

## Timezone

Endpoint which return records optionally allow you to specify a timezone for any datetime fields to be returned in.

This can be achieved by setting the `X-Timezone header` with your desired timezone in a canonical format such as America/Los\_Angeles (list of these).&#x20;

If this is not specified, the timezone defaults to UTC.

## Content Type

If you are providing data to a POST request, you may need to set the content type header to `application/json`

```bash
-H "Content-Type: application/json"
```
