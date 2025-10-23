# Portals

Create portals for your external users to interact with specific data. Each portal is accessible by external users with their own domains.&#x20;

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2F64nhwcnwVgzehhR7H3G1%2FCleanShot%202024-07-31%20at%2014.37.36%402x.png?alt=media&#x26;token=3a2cf7d5-5311-42c0-ba25-45fd19c42de9" alt="" width="563"><figcaption></figcaption></figure>

## Create a Portal

1. Go to your workspace&#x20;
2. Select the + next to **Portals**
3. Give your portal a name

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FkjCoMJTYvEAtOX6VJUpW%2FCleanShot%202024-12-20%20at%2013.15.44%402x.png?alt=media&#x26;token=fb5f19d2-3263-42eb-90cc-f40d8c86b118" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
By default, the URL of the portal is *appname.stackerportal.com*
{% endhint %}

{% embed url="<https://vimeo.com/1010607221/95e3ffc4e8?share=copy>" %}

{% hint style="info" %}
Tables can be [shared](https://docs.stackerhq.com/stacker/data-management/edit-your-data-in-the-data-grid/share-data-with-other-apps) to your portals from your internal workspace
{% endhint %}

## Set a custom domain

First you will need to[ set up your domain. ](https://docs.stackerhq.com/stacker/workspace-portals-and-apps/portals/custom-domain)

Set your custom domain on your portal.&#x20;

1. Go to the Portal&#x20;
2. Select Settings
3. Input your Custom Domain in the space provided

## Generate Permanent Login Links

{% hint style="info" %}
Please contact <stackersupport@stackerhq.com> if you are interested in this feature
{% endhint %}

This link will allow your users to login to their accounts without needing to sign in. This will keep them logged in until they logout. Use a lookup field to pull this field to the table you are using as your Users table, giving your users direct access to this link.&#x20;

Ensure you have set up proper permissions on both tables to avoid sharing the login links with other users. ([Learn more about setting up permissions here)](https://docs.stackerhq.com/stacker/security/add-user-permissions).

1. Go to your Portal
2. Select Settings form the Workspace page
3. Check **Generate Permanent Login Links**
4. Go to **App Settings > Expose Login Links**
5. Go to **Manage Fields and Data**
6. Go to the **Stacker Users** Table
7. Select **Fields**
8. Toggle on **Login Links**

{% embed url="<https://app.arcade.software/share/qinxxxdA5wSNyFq60XnB>" %}

{% hint style="warning" %}
It is important to set your permissions for this field to prevent other users from seeing other login links ([Learn more about setting up permissions here)](https://docs.stackerhq.com/stacker/security/add-user-permissions).
{% endhint %}
