# Introduction to Adding Users & Permissions

In Stacker, there are two main types of users: **internal** and **external**.

**Internal Users -** [**add users individually**](https://docs.stackerhq.com/stacker/user-access/add-users#add-individual-users)&#x20;

Internal users have access to edit the app’s **layouts**, **data grid**, and **schema**. You can add them **individually** or **in groups**. When adding a user individually, they will receive an invite link to access the app. You can assign them an **internal role** (e.g., administrator) to allow for editing the data grid and schema. Or assign them a role to interact with only the data in the UI to be an **external user.**

**External Users -** [**add table groups**](https://docs.stackerhq.com/stacker/user-access/add-users#add-users-to-app)

External users are typically added to **table groups**, which allow you to assign access and roles to multiple users at once. These users can update or create data in the app’s UI but cannot access the **layouts** or **data grid**. External users **do not** receive notifications when added to a table group. You can assign them an **external role** (e.g., Teacher or Student), to then create permissions on specific data they can interact with.&#x20;

Table groups are useful for managing permissions for **external users** in bulk, allowing you to control who can access the app and what they can do.

***

#### Key Points:

* **Internal users** can be added individually or in groups and have full access to layouts, data grids, and schema.
* **External users** can be added as **table groups**, where you can assign roles and manage their access in bulk.
* External users have restricted access to only the data within the app’s UI (no layout or data grid editing).
* Add any user individually and assign them a role to interact with the app.&#x20;

***

## Adding Permissions

Permissions in Stacker are designed to be intuitive, with icons and labels that provide a quick overview of each setting

* **Permission Name**: Indicates the permission rule and the user role it applies to, based on the permission sharing settings.
* **Access Levels**: Determines which records a user can access—whether they can view all, some, or no records at all—managed through record filters.
* **Actions**: Users can be granted capabilities for each field, including:
  * **Read**: Access to view data.
  * **Update**: Permission to modify existing data.
  * **Create**: Ability to add new records.
  * **Delete**: Permission to remove records.

{% hint style="info" %}
A user can access a table if *any* of the permission rules give them access.

By default, all users can read, update, and create data.
{% endhint %}

### **Edit Permissions**

1. Go to <img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FhTZDNl1iTPyTpvylyDfe%2FCleanShot%202024-04-02%20at%2009.08.24%402x.png?alt=media&#x26;token=5d8077d2-064e-4f87-bd6e-d2b09f9b3e98" alt="" data-size="line">**Manage fields and data**
2. Select **Permissions**&#x20;

### Editing your Permissions

{% tabs %}
{% tab title="Record Filters" %}
Limit the records your users can access based on certain conditions in the data grid.&#x20;

**All Records -** allow users to access all records on the table

**Some Records** - allow users to access only records that meet certain conditions. Here you can set up an [Ownership Filter](https://docs.stackerhq.com/stacker/security/add-user-permissions/create-or-edit-a-permission-rule/ownership-filter) or [Data Filter](https://docs.stackerhq.com/stacker/security/add-user-permissions/create-or-edit-a-permission-rule/data-filter) to limit the records a user can see on the table.

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FkQdmG9pDmon9fGGcial9%2FCleanShot%202024-09-24%20at%2010.20.33%402x.png?alt=media&#x26;token=df6a705b-1655-4b48-8aa7-205bed8fbbdf" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Permission Sharing" %}
Select which users receive this permission.

**Everyone -** All users, regardless of their role will have this permission&#x20;

**Some users** - Only users in a certain role or roles will be impacted by this role.&#x20;

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FxSieNap1oJFs6DdzvEXz%2FCleanShot%202024-09-24%20at%2010.28.22%402x.png?alt=media&#x26;token=26725574-639b-44dd-b57c-049e341616b1" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Field Access" %}
Choose the fields that the users can Read, Update or Create.&#x20;

**Read -** Read only access to the field.

**Update -** Ability to edit or change a fields data.

**Create -** Allow users to create new data on the table.&#x20;

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2F347ej1CY8oByOfoijZF6%2FCleanShot%202024-09-24%20at%2010.20.49%402x.png?alt=media&#x26;token=9f3132ea-f3af-43a5-b2a4-fea89794a93e" alt=""><figcaption></figcaption></figure>
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Common troubleshooting permissions steps can be found here.&#x20;
{% endhint %}
