# Troubleshooting Permissions

### Add new button showing when it shouldn't

Users do not have the permission to create a new record, but the **Add new** button is still showing on [List Layout.](https://support.stackerhq.com/hc/en-us/articles/4415488992147-Layout-Types#h_01FSSM0NA5S95EGYRPR843DS7A)&#x20;

Reasons:

* The **Add new** button will always appear for admins, to see the change you need to preview as a user
* Create permissions is still enabled&#x20;
* User Roles need to be updated

### Role not appearing under Permission Sharing

If a role is allowed to "Read/modify all data" on the Roles settings page the role does not appear to be selected for the Permission Sharing option.&#x20;

1. Go to <img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2F6MACvhEEvM6FAZfOqvw6%2FCleanShot%202024-05-03%20at%2012.43.07%402x.png?alt=media&#x26;token=58951157-77fb-4ddb-a5c8-dce654aa7e54" alt="" data-size="line"> App Settings
2. Select **Roles**
3. Select the Role name
4. Uncheck the "Read/modify all data"

### Your users are getting an error when saving a record <a href="#your-users-are-getting-saving-your-record-error-0-0" id="your-users-are-getting-saving-your-record-error-0-0"></a>

If your users are getting the “Sorry, there was an error saving your record. Please try again.” Check the steps below:

* Do your users have permission to **create** a new record on the table?
* Do your users have permission to **create** new on specific fields in the table?
* If you are using a linked field to another table, your users will need **create** permission to be given on both tables.
