# Custom Domain

By default, the URL for your Stacker Workspace will be *go.stackerhq.com/workspacename*. If you would like to use your own domain, you can do that using our Custom domain feature.

You will need to:

1. Choose a name
2. Set up your DNS settings with your domain host
3. Verify the domain
4. Add the domain in Stacker

**Enterprise plan**

If your Workspace is using SSO, please reach out to `stackersupport@stackerhq.com`[ ](mailto:support@stackerhq.com)before you set up your custom domain.

For best DNS provider compatibility, we recommend using a subdomain:

* workspacename.yourcompany.com
* yourcompany.com

If you would like to use a top-level domain, such as yourcompany.com, go to the top-level domain section.

## Set up your DNS <a href="#h_01fz0cw791x6fr4gg7tb9hxhjq" id="h_01fz0cw791x6fr4gg7tb9hxhjq"></a>

Exact steps might vary depending on your DNS provider. If you're not sure where to go, please contact your provider's support.

1. Open your DNS provider's DNS settings for the domain you want to use.
2. If your DNS provider has a proxy setting or anything that can impact the domain traffic flow, turn it off.&#x20;
3. Add a CNAME record.
4. Use your domain for the name, and **connect.stackerhq.com** as the target.

In our example, we are setting up app.stacker.help with Cloudflare as our DNS provider.

## Verify the domain <a href="#h_01fz0n1dnd5patvbcxznpre6kg" id="h_01fz0n1dnd5patvbcxznpre6kg"></a>

It may take up to 24 hours for a DNS change to apply. Before adding the domain in Stacker, please verify that the aliasing works. To do that you can use any DNS checker tools. If you're not sure which one to use, you can try [dnschecker.org](http://dnschecker.org/).

Enter the full domain you set up, for example workspacename.yourcompany.com. If you get connect.stacker.app as the result, you can add the domain in Stacker.

## Add a custom domain in Stacker <a href="#h_01fz0cwt3xqyjgwpzke539x6gb" id="h_01fz0cwt3xqyjgwpzke539x6gb"></a>

1. Go to Workspace Settings > General
2. Add your Custom Domain in the Custom workspace domain field
3. Include the full domain, but do not include <https://www>
4. Click Save

## Top-level domains

Some DNS providers do not support aliasing the top-level domains (also known as root, or @) using the CNAME record. If your DNS provider doesn't allow this, please use a subdomain.

Exact steps might vary depending on your DNS provider. If you're not sure how to set up a top-level domain, contact your provider's support.

## To set up a top level domain:

1. Open your DNS provider's DNS settings for the domain you want to use.
2. If your DNS provider has a proxy setting or anything that can impact the domain traffic flow, turn it off.&#x20;
3. Add a CNAME record.
4. Use @ or whatever your DNS provider uses for the top-level domain as the name , and **connect.stackerhq.com** as the target.
