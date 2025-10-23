# Action buttons

Action buttons let you update specific fields on a record. You can add action buttons on both the **List layout** and the **Detail layout**.

**How you can use Action buttons:**&#x20;

1. [Trigger a record update](#create-action-buttons-in-list-layout-0-0)
2. [Trigger a Stacker workflow](#undefined)
3. [Trigger a Zapier/Make.com action](#trigger-a-zapier-make-automation)
4. [Navigate to an internal link, external link or link in field](#navigate-to)

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2Fj0jcZSYiqnGTVK1118M6%2FCleanShot%202025-05-19%20at%2012.03.57%402x.png?alt=media&#x26;token=f704716c-274d-4202-8a51-5816e0da926b" alt="" width="375"><figcaption></figcaption></figure>

### Update record with action button <a href="#create-action-buttons-in-list-layout-0-0" id="create-action-buttons-in-list-layout-0-0"></a>

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FWb950IHgzVbagztHl0mN%2FCleanShot%202025-03-25%20at%2009.47.44%402x.png?alt=media&#x26;token=b36eabe6-2196-4cc8-b720-8bd18779657c" alt="" width="375"><figcaption></figcaption></figure>

1. Click <img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FnwPUNjZ6bEwMwsAacHwR%2FCleanShot%202024-04-02%20at%2009.08.29%402x.png?alt=media&#x26;token=43a6b412-6838-4c61-9337-56245d54b81d" alt="" data-size="line">**Edit Layout**
2. Click the **Actions** tab
3. Click the **+** to create a new button
4. Title the action button (this is the label that will appear on the button)
5. Select **Update Record**
6. Toggle on the field to allow users to update&#x20;
7. [Edit options](https://docs.stackerhq.com/stacker/ai-and-automations/action-buttons/edit-an-action-button) by selecting the pencil icon

{% hint style="info" %}
Double check users can "update" fields used in the action button even if the pop up does not open.&#x20;
{% endhint %}

{% embed url="<https://vimeo.com/1010664940?share=copy>" %}

### Trigger a Stacker workflow

1. Create a workflow by clicking the lightning bolt (beta feature)
2. Set it up to be "triggered by action button"&#x20;
3. Choose the table the action button is on
4. Finish the workflow and set status on
5. Create the action button&#x20;
6. Select "Trigger workflow" and select the corresponding workflow

{% hint style="info" %}
Learn more about workflows [here](https://docs.stackerhq.com/stacker/ai-and-automations/workflows-beta).
{% endhint %}

### Trigger a Zapier/Make automation

Learn more about [Zapier](https://docs.stackerhq.com/stacker/ai-and-automations/integrations/zapier-integration) and [Make.com](https://docs.stackerhq.com/stacker/ai-and-automations/integrations/make.com-integration) here.&#x20;

### Navigate to&#x20;

* External link: Place a URL in the button that will appear the same for all places the button is located.
* Internal link: Target a URL in Stacker by selecting the auto generated pages.&#x20;
* From field: Choose a field that has a URL, this can be a unique URL for each user or record when paired with permissions.&#x20;
  * Learn more about custom URLs [here](https://docs.stackerhq.com/stacker/customize-layouts/create-form/auto-filling-values-into-create-forms).&#x20;
