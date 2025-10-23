# Set field default values from the data grid

Set a dynamic field to be autofilled based on a user profile or a fixed record to autofill on your create forms for all editable field types.&#x20;

{% hint style="info" %}
You need to first have a [users table](https://docs.stackerhq.com/stacker/user-access/add-users) connected or a profile link to the users table to use the users option.
{% endhint %}

{% embed url="<https://app.arcade.software/share/4f3xmrDPg5T0ofeUJRY6>" %}

Under your manage data tab go to the table you want to set up the dynamic or fixed auto-fill. Create a linked record or find an existing linked record that was created on the table.&#x20;

Open the field settings and select the drop down under Default value&#x20;

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2Fy2CGsjdRrB3M6IbutwhA%2FCleanShot%202025-04-29%20at%2008.37.09%402x.png?alt=media&#x26;token=d173cf1f-5200-463c-8093-a31587bdf2b9" alt="" width="563"><figcaption></figcaption></figure>

Choose to use a fixed value or a value based on the user profile.&#x20;

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FQf1g4FrRFpELxHx4w47v%2FCleanShot%202025-04-29%20at%2008.38.41%402x.png?alt=media&#x26;token=9be6f48f-f247-42ec-99e2-1dcc7cd2333d" alt="" width="563"><figcaption></figcaption></figure>

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FYHHjquOGdpTWsYSmLHEI%2FCleanShot%202025-04-29%20at%2008.38.51%402x.png?alt=media&#x26;token=40d61e0c-4708-48d5-801a-3ee488b15eef" alt="" width="563"><figcaption></figcaption></figure>

### Troubleshooting tips:

The link needs to have a link on the table being used as the users table for the profile to show up as an option.&#x20;

The record chosen will automatically fill regardless of the field showing in the Create form. It will also not automatically populate in the Form for the user to see as of right now. We recommend hiding it to avoid confusion.&#x20;

If a user chooses an option in the create form it will override the default option setting.&#x20;
