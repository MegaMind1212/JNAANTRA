# Auto-filling values into create forms

You can pre-fill fields in create forms by constructing an auto-fill URL. You can then add the URL to your app as a button to allow your users to create new records with some fields already filled in.

#### Field Types you can Auto-fill <a href="#field-types-0-2" id="field-types-0-2"></a>

* **Text fields-** You can auto-fill short text or long text fields.
* **Single and Multi-select fields-** You can only auto-fill a single value for multi-select fields.
* **Link to another record field-** You can use the Stacker Record ID to link records.
* **Checkbox field-** You use 'true' to fill the checkbox or 'false' to un-fill the checkbox.
* **Number, Percentage and Currency** **fields**- You should type percentages as a fraction, for example, 40% is given as 0.4 in the URL.

## Basic Link Structure <a href="#h_01h93ebb2dtzpvynnf87wj4mnh" id="h_01h93ebb2dtzpvynnf87wj4mnh"></a>

Auto-fill URL format: **`/page/new?autofill__field=value`**

* **`/page/new`**: The URL of your create form page.
* **`field`**: The developer name of the field you want to fill.
* **`value`**: The content you want to auto-fill in the field.

#### Auto-fill Multiple Fields <a href="#h_01h93ebb2d87b5stjv42c3tt64" id="h_01h93ebb2d87b5stjv42c3tt64"></a>

* Auto-fill multiple fields by adding the **`&`** separator in the URL, for example:

<pre><code><strong>/page/new?autofill__field1=value1&#x26;autofill__field2=value2
</strong></code></pre>

#### Find the developer name <a href="#h_01h41tmnkhxghgvcd5rs504qa3" id="h_01h41tmnkhxghgvcd5rs504qa3"></a>

1. Go to **Manage fields and data**
2. Select the table name
3. Select **Fields**
4. Select **Show developer name**
5. The developer name shows below the field name

![](https://support.stackerhq.com/hc/article_attachments/18299904482195)

**Note**

Developer names are always lowercase and case sensitive

#### Pre-filling linked records <a href="#h_01h93ebb2da5zye3dazy46rshy" id="h_01h93ebb2da5zye3dazy46rshy"></a>

To auto-fill a link to another record, you need the Stacker Record ID for the linked record.

1. Open the detail page of a record
2. Find the Stacker Record ID in the URL![CleanShot](https://support.stackerhq.com/hc/article_attachments/18299904483859)

## How to create the Auto-fill URL in Stacker <a href="#h_01h93ebb2dg2wd1t0qezyhhygw" id="h_01h93ebb2dg2wd1t0qezyhhygw"></a>

1. Go to **Manage Fields and Data**
2. Open the table you want the form to be accessed on
3. Add a new URL field
4. Insert the URL for the create form: `https://go.stackerhq.[workspace-name].com/app-name/page/new`
5. Add `?autofill__field=value` to the end of the URL
6. Replace `field` with the [Developer name](#h_01H41TMNKHXGHGVCD5RS504QA3) and replace `value` with the content you are auto-filling

## How to create the Auto-fill URL in Airtable <a href="#h_01h93ebb2d5t851wbh1p654tx3" id="h_01h93ebb2d5t851wbh1p654tx3"></a>

1. Go to the table on Airtable you want to access the create form
2. Add a new URL field
3. Insert the Auto-fill link: `https://[workspace].stackerhq.com/app name/page/new?autofill__[developer field name]=value`

## How to use your Auto-fill Link <a href="#h_01h93ebb2d0ncpw5rk5sshg4fg" id="h_01h93ebb2d0ncpw5rk5sshg4fg"></a>

* Add a button or quick links widget on a detail record layout to use the URL from a field on your data source.
* Add a banner widget on the detail record layout to use one URL for all of your records.
* Add a button on a list layout to use the URL from a field on your data source.

Use an auto-fill URL to fill a create form based on a specific record. For example, you can create a new order for a particular item in an inventory table. Rather than writing the URL for each individual record, we can use a formula in Stacker or Airtable to do it automatically.

### Auto-generation of Auto-fill URL links <a href="#h_01h4kjcd6pxrqw33ehm7s9ymzv" id="h_01h4kjcd6pxrqw33ehm7s9ymzv"></a>

Auto-fill a field dynamically based on the current record, by using formulas.

The Auto-fill formula format:

<pre><code><strong>'https//go.stackerhq.[workspace-name].com/[app name]/[Layout name]/new?autofill__field1=abc_'&#x26;Record ID()
</strong></code></pre>

1. Create a new formula field on Airtable on the page you want to access the auto-fill URL
2. Insert the Auto-fill formula using the URL from the Create form you want to auto-fill
3. Replace `field1` with the Developer field name
4. Replace the `abc` with the three letters in front of the Stacker ID that can be found in the record detail URL ![CleanShot](https://support.stackerhq.com/hc/article_attachments/18300547628179)
5. Use the `RECORD_ID()`Formula after the `&`sign
