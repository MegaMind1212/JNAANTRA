# Field API names

Within the Stacker API, fields are accessed via their API Names.

## Getting the API Names from the Endpoint

The easiest way to get the API for a given field is by calling Fields endpoint.

## Constructing an API Name

The API Name for a field is constructed from the unique code for the object associated (e.g. `projects10`) and the field's Developer Name (e.g. `created_by`), joined with two underscores: `projects10__created_by`.

{% hint style="warning" %}
While API Names are currently constructed in this way, this may change in the future. It is not recommended to construct names in this way directly, but instead to refer to names found from the Fields endpoint.&#x20;
{% endhint %}

#### Developer Names&#x20;

These can be accessed by selecting "Show developer name" in the Manage Fields pane, accessible from the data grid.

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2Fcd2E77h0diWfRDqpc9jb%2Fimage.png?alt=media&#x26;token=bf7e4ff0-74d8-4549-a72a-55207a1b73bc" alt=""><figcaption></figcaption></figure>
