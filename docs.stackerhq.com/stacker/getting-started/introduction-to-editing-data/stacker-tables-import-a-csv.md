# Stacker Tables: Import a CSV

### **Import a CSV to create a new table**

1. Click<img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FhTZDNl1iTPyTpvylyDfe%2FCleanShot%202024-04-02%20at%2009.08.24%402x.png?alt=media&#x26;token=5d8077d2-064e-4f87-bd6e-d2b09f9b3e98" alt="" data-size="line">**Manage fields and data**&#x20;
2. Click the plus icon
3. Click **Add a new table**&#x20;
4. Select **Import from CSV**
5. Select the file and upload

{% hint style="warning" %}
It is important that your header is located in the top row of your CSV file.
{% endhint %}

### **Import a CSV into an existing table (Beta)**

{% hint style="info" %}
This feature is currently in limited release and must be enabled by a Stacker team member
{% endhint %}

1. Navigate to the intended target in the Data Grid
2. Click **Import**
3. Upload your CSV
4. After upload, there will be an automatic validation check to ensure your data is formatted correctly for import
5. If the check fails, the errors will be displayed and you will not be able to proceed
6. If the validation check passes, click **Start Import**
7. Once the import is completed, you will see a summary of the actions completed

#### How does the import work?

We import data using an upsert method. This means records are either created or updated depending on if a valid reference to an existing record is found.

#### How do I structure the CSV file?

The column header values in the CSV should map onto the developer names of the fields in the table you are importing in to.

You can also use the column header "\_sid" to provide a target record to be updated using the Record ID.

Values for multi-value fields such as Multiple Select and Link to Multiple Records can be provided in comma-separated format.
