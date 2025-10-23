# Create form

Stacker allows you to customize the create form for each table in your app, you can control how your users submit new records. You can also include various static widgets: fields, banners, text, and callouts.

### Access Create Layout <a href="#access-create-layout-0-1" id="access-create-layout-0-1"></a>

1. Go to a **List Layout**
2. Click **+Add** (top right)
3. Click the **Expand** button
4. Select the **Edit Layout**
5. Select **Customize layout**
6. Choose new widgets to place on the page or select exisiting widgets to make changes

### Edit Create Layout <a href="#edit-create-layout-0-2" id="edit-create-layout-0-2"></a>

* Toggle on/off fields that you want your users to have access to when they create a new record
* Reorder the fields by clicking and dragging them
* Change the name by clicking the title of the form while in<img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FnwPUNjZ6bEwMwsAacHwR%2FCleanShot%202024-04-02%20at%2009.08.29%402x.png?alt=media&#x26;token=43a6b412-6838-4c61-9337-56245d54b81d" alt="" data-size="line">**Edit Layout.**
* Open up the settings for a specific field by hovering your mouse over it in the menu and clicking the <img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2F76e3bvFijIplrWQDhqm5%2FCleanShot%202024-04-17%20at%2010.13.50%402x.png?alt=media&#x26;token=76aa48ed-19de-43ed-a9dd-758f190b9d9b" alt="" data-size="line">pencil icon.
  * This will allow you to edit/hide the label
  * Add a description or make it a required field (users cannot submit the form unless a value is provided for that field)
  * Set a default value to prefill fields
  * Add placeholder texts
  * Allow quick copy which will put a little icon next to the field allowing a user to hover over text and copy this to a clipboard
  * Auto select a value if it is the only available option (i.e if a user can only see their name it will autofill with their name when this box is checked)

{% hint style="info" %}
While viewing a pop up for the create form click **Expand** to access the layout editor.
{% endhint %}

### Auto-Select if only one option available <a href="#advanced-form-settings-0-3" id="advanced-form-settings-0-3"></a>

You can set an option on linked fields to say if the user filling out the form only has the option to "read/update/create" in the permissions for one record it will automatically populate in the create form.&#x20;

For example, when a user fills out the form below they will automatically have their user record populate in the User Records field.&#x20;

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FzCCqj1guDIZbvrEV1BMh%2FCleanShot%202025-02-18%20at%2010.23.52%402x.png?alt=media&#x26;token=819d25e0-4f1e-49e1-b44f-8012b92d60b0" alt=""><figcaption></figcaption></figure>

### Creating a multi step Create form <a href="#advanced-form-settings-0-3" id="advanced-form-settings-0-3"></a>

Stacker also allows you to create the appearance of a multi-step form and collect different information from users depending on who they are, or their answers to previous questions using Conditional Visibility filters.&#x20;

Use two field widgets to get started. Place a field you want to use to distinguish the next step by, for example, on a real estate form, we want to have different options for different answers for the field called "For Sale/To Lease"

If the drop down choice is "For sale" we want to show the widget that requires "Sale Information".&#x20;

If the drop down choice is "To Lease" we want to show the widget that requires "Lease Information"&#x20;

#### Set your Conditional Visibility filter to decide when the widget will show

1. Click to highlight the first widget
2. In **Edit layout** click **Set conditional visibility**
3. Select the field. In this example, it will be the "For Sale/To Lease" field&#x20;
4. Select operator "is" and the option "For Sale"
5. Repeat this for the second widget

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FgbNoXDYwmJ8pSojMmQdK%2FScreenshot%202022-08-22%20at%2015.43.03.png?alt=media&#x26;token=af4721e4-d327-41ab-8282-524defbf9cad" alt=""><figcaption></figcaption></figure>

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FCpL5kIsvz8LXbF9IvJVO%2FScreenshot%202022-08-22%20at%2015.47.05.png?alt=media&#x26;token=24d5ee4b-a333-493b-8188-b7b355246e78" alt=""><figcaption></figcaption></figure>

Now when users select either "For Sale" or "To Lease" in the first field container, they will only be shown the relevant field container.

### Need users to fill out a form before seeing information?&#x20;

{% hint style="info" %}
Forms are not public, users will need to login to access the form.&#x20;
{% endhint %}

You can set up a form to be filled out when users access your portal.&#x20;

First you will need to set up a table as your form on the Data Grid. The fields will be your questions and people will write in their answers or make them multi or single select options.&#x20;

{% hint style="info" %}
The names of your fields can be your internal names, you can change the label in the Layout Editor. This can help for data collection purposes.&#x20;
{% endhint %}

Next, create a link to your users table or the users table provided.&#x20;

* [How to link to other tables](https://docs.stackerhq.com/stacker/data-management/edit-your-data-in-the-data-grid/linking-your-data)

Then, set up your [ownership permissions.](https://docs.stackerhq.com/stacker/security/add-user-permissions/create-or-edit-a-permission-rule/ownership-filter) This will connect people to their submissions once completed.&#x20;

Set the display to ["one record only"](https://docs.stackerhq.com/stacker/list-layout/display-types#one-record-only) and choose the option **"Show create form when empty"**

![](https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2Fn3qRSXaIfdfQXDy3cw3x%2FCleanShot%202024-11-20%20at%2012.55.13%402x.png?alt=media\&token=f86452d2-2564-4757-9827-335f0283a970)

This will show the form you created for this table if the users are not connected to a submission.&#x20;

Edit your form to collect the information you would like.&#x20;

Once the form is filled in users will see their information only.&#x20;

If you need multiple view types, [duplicate](https://docs.stackerhq.com/stacker/list-layout/customize-your-list-layouts#duplicating-list-layouts) the layout and choose a different view type.&#x20;
