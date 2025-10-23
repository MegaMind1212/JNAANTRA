# Introduction to Editing Data

Stacker apps rely on data to function effectively. With Stacker tables, you can manage and organize your database, enabling the creation of fully operational apps. This process includes uploading data, updating your schema (such as field names and types), and adding records directly to your database.

**Data Management Overview**

Data management refers to the organization, storage, and retrieval of data in a structured way. This includes:

* Adding new tables, fields, or records to your database.
* Organizing and cleaning up unused fields or records in your apps.

**How to Access Data in Stacker**

You can add new tables, manage your schema (fields and objects), and input records directly into your Stacker app through the <img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FhTZDNl1iTPyTpvylyDfe%2FCleanShot%202024-04-02%20at%2009.08.24%402x.png?alt=media&#x26;token=5d8077d2-064e-4f87-bd6e-d2b09f9b3e98" alt="" data-size="line">**Data Grid**.

To manage your data effectively, explore the various features of the **Stacker Data Grid:**

{% tabs %}
{% tab title="1- Add data tables" %}
Stacker offers flexibility in incorporating your existing data. You can do this through CSV imports, by pasting new tables, or by starting from scratch. When you add a new table, a corresponding layout is created on the front end of your app, powered by your data grid.

**Options for Adding New Tables**

1. **Import from a CSV**\
   Choose existing data from an Excel sheet, Google Sheet, or another data source to export as a CSV file, which can then be imported into Stacker. This allows you to create a user-friendly interface for others to interact with the data, while maintaining control over access to your spreadsheet.
2. **Paste Data**\
   Use the copy/paste option to input data without requiring headers or predefined fields. This provides flexibility in how you create your fields.
3. **Start from Scratch**\
   If you’re starting a new project, you can add fields as you go, allowing for the flexibility to capture the data you need.
   {% endtab %}

{% tab title="2- Manage your fields" %}
Whether you’re starting from scratch or using your own data, you can add new fields to collect additional information about your users or the companies you work with. You can also update existing fields, such as changing the name or the icon associated with them.

**How to Manage Your Fields**

* **Add New Fields**: To add a new field, select the plus icon on the far right of the data grid.
* **Edit a Field**: Click the down arrow next to the field in the data grid to rename it, change its icon, or modify the field type. *Note: Some field types may not convert correctly.*

## Types of fields:&#x20;

| Field Type                   | Description                                                                                                                                                         | Display options                                                                                                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Short Text**               | A single line of text - e.g suggested for names, titles, emails and short details.                                                                                  |                                                                                                                                                                    |
| **Long Text**                | A longer, multi-line text field - e.g suggested for notes, comments and descriptions.                                                                               |                                                                                                                                                                    |
| **Rich Text**                | A longer, multi-line text field with text formatting options - e.g You can add headers, hyperlinks and code blocks. Suggested for notes, comments and descriptions. | Display in a Document Layout                                                                                                                                       |
| **Currency**                 | A value formatted in your chosen currency - e.g prices, revenue and payment details.                                                                                | Choose the currency label to use.                                                                                                                                  |
| **Number**                   | Any type of numeric value - e.g number of products.                                                                                                                 |                                                                                                                                                                    |
| **Percentage**               | A percentage-formatted value - e.g growth stats, churn stats etc.                                                                                                   | Display your percentage as a progress bar or ring.                                                                                                                 |
| **Checkbox**                 | A single checkbox that can be checked or unchecked - e.g allow users to check a box to show they have read and understood the information.                          | Display Check box fields:                                                                                                                                          |
| **Single Select**            | Select a single option from predefined dropdown options. Suggested for statuses - e.g. To Do, In Progress, Done.                                                    | Assign colors to your different options.                                                                                                                           |
| **Multiple Select**          | Select multiple options from predefined dropdown options e.g users can select multiple products.                                                                    | Assign colors to your different options.                                                                                                                           |
| **Date**                     | Enter a date or pick one from a calendar - e.g users can select a date for events.                                                                                  |                                                                                                                                                                    |
| **Date and Time**            | Enter a date and a time, or pick from the calendar - e.g users can include a time for an event.                                                                     |                                                                                                                                                                    |
| **Link to another record**   | Link to a record in another table - e.g Link a user to their profile. Use dynamic data filtering to limit what records can be selected in a drop down.              |                                                                                                                                                                    |
| **Link to multiple records** | Link to records from another table - e.g Link orders to users. Use dynamic data filtering to limit what records can be selected in a drop down.                     |                                                                                                                                                                    |
| **Lookup related value**     | Show a specific field from a linked table. Filter records on your lookups using data filters.                                                                       |                                                                                                                                                                    |
| **Roll-up related records**  | Display different results of a field based on related records. Filter records on your rollups using data filters.                                                   | <ul><li>Number of related records</li><li>Count values...</li><li>Count unique values...</li><li>Sum...</li><li>Average...</li><li>Min...</li><li>Max...</li></ul> |
| **Created Date**             | Field will auto fill with the date the record was created.                                                                                                          |                                                                                                                                                                    |
| **Created By**               | Field will auto fill with the user profile of the person who created the record.                                                                                    |                                                                                                                                                                    |
| **Formula**                  | Calculate a value based on other fields in the same record. Start typing for formula suggestions.                                                                   | Display your formula as a percentage, number or currency.                                                                                                          |
| **Attachments**              | Add images, documents or other files -e.g Profile images, invoices.                                                                                                 |                                                                                                                                                                    |
| **Record ID**                | Field auto populates with the record ID associated the record.                                                                                                      |                                                                                                                                                                    |
| **Autonumber**               | Create a field that will automatically assign numbers to records.                                                                                                   |                                                                                                                                                                    |
| **Last updated Date**        | Field will update with the date field is last updated.                                                                                                              |                                                                                                                                                                    |
| **Last updated by**          | Field will update with the user profile field of who last updated it.                                                                                               |                                                                                                                                                                    |
| **URL**                      | Display a link.                                                                                                                                                     | Display as a button, open in a new tab                                                                                                                             |
| {% endtab %}                 |                                                                                                                                                                     |                                                                                                                                                                    |

{% tab title="3- Add/update records in the data grid" %}

#### Adding or Updating Records in the Data Grid

You can easily add or update records directly within your data grid. This feature is particularly useful when you need to manage multiple records simultaneously or when you want to make bulk updates.

**How to Add or Update Records**

1. **Adding Records**:\
   To add new records, navigate to the data grid and locate the option to add a new entry at the bottom of the data grid. You can input the necessary information for each field individually or paste to input multiple records at once.
2. **Updating Records**:\
   To update existing records, simply locate the record you wish to modify within the data grid. Click on the cell you want to change and enter the new information. This allows for quick edits and adjustments to your data without navigating away from the grid.
3. **Bulk Actions**:\
   For large-scale updates, consider pasting information in. This allows you to update multiple records at once.&#x20;

This functionality enhances your ability to manage data efficiently, ensuring that your records are always up to date and accurately reflect your needs.

{% endtab %}
{% endtabs %}

Effective data management is essential for maximizing the utility of your information. By understanding how to add records, create new fields, and incorporate data from various sources, you can maintain an organized and efficient database. Follow the examples and guidelines provided to enhance your data management skills.
