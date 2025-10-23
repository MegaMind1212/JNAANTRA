# Formula Field

Formulas let you transform and combine existing fields into a new Formula field. For example, you can:

* Concatenate `First name` and `Last name` fields into a `Full name` Formula field.&#x20;
* Multiply `Price` and `Units` field to get the result in the `Revenue` Formula field.

The field will show only in your Stacker app, and won't show up in your Airtable base or Google Sheets.

### Create a formula field <a href="#h_01h8yqs1mvh1a00mbqr3dps3b6" id="h_01h8yqs1mvh1a00mbqr3dps3b6"></a>

1. Go to  **Manage Fields and data**
2. Select the table and select **Fields**
3. Click **Add field**
4. Give your field a name
5. Select the field type: **Formula**
6. Type in your formula and click **Save**

### Fields in formulas <a href="#h_01fzgb5yyad3t8s4jeehnzxe4q" id="h_01fzgb5yyad3t8s4jeehnzxe4q"></a>

To use a field in a formula, the field needs to be in the table where you're creating the formula field. It also needs to be one of the following data types:

* Text
* Long Text
* Number
* Checkbox
* URL
* Single Select Dropdown
* Percentage
* Currency
* Rich Text
* Date
* Date and Time
* Multiple Select Dropdown

To use a field in a formula, you will need to wrap it in curly brackets. For example, {Price}. If you type in the opening curly bracket, we will suggest all available fields.

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2Fl0x2iM5VoAAcIPH7DrmY%2FScreenshot%202022-03-31%20at%2016.06.25.png?alt=media&#x26;token=869930ff-558f-4584-be8f-0dd72ea05712" alt=""><figcaption></figcaption></figure>

### List of formulas <a href="#h_01h8yqs1mvyfpvqd3sypncrzk8" id="h_01h8yqs1mvyfpvqd3sypncrzk8"></a>

Functions work with any valid field data types, while operators work only on number fields. If you use an operator for a non-number field, we will try to convert it into a number. If we can't, you'll see an error message.

{% tabs %}
{% tab title="Number Functions" %}
**SUM**

Returns the sum of two or more numbers.

**Example:**

`SUM({Sold},{Not sold})`

or

`{Sold} + {Not sold}`

&#x20;

**SUBTRACT**

Returns the difference of two numbers.

**Example:**

`{Total stock} - {Sold stock}`

&#x20;

**MULTIPLY**

Returns the product of two numbers.

**Example:**

`{Sold} * {Price}`

&#x20;

**DIVIDE**

Returns one number divided by another.

**Example:**

`{Total sold} / {Price}`

&#x20;

**AVERAGE**

Returns the average of the values in two or more fields.

**Example:**

`AVERAGE({Sold},{Not sold})`

&#x20;

**NOT EQUAL TO**

Check if one value is not equal to another.

**Example:**

`1!=2 =>True` (represented as a checked checkbox)

&#x20;

**EQUAL TO**

Compare if one value is equal to another value.

**Example:**

`1=1 =>True` (represented as an empty checkbox)

&#x20;

**GREATER THAN**

Compare if one value is greater than another value.

**Example:**

`1>5 =>False` (represented as an empty checkbox)

&#x20;

**GREATER THAN OR EQUAL TO**

Compare if one value is greater than or equal to another value.

**Example:**

`2>=2 =>True` (represented as a checked checkbox)

&#x20;

**LESS THAN**

Compare if one value is less than another value.

**Example:**

`5<1 =>False` (represented as an empty checkbox)

&#x20;

**LESS THAN OR EQUAL TO**

Compare if one value is less than another value.

**Example:**

`2<=2 =>True` (represented as a checked checkbox)

**MIN( )**

Returns the item with the lowest value.

**Example:**

`MIN(number 1, number 2, number 3...)`

&#x20;

**MAX( )**

Returns the largest item between two or more parameters.

**Example:**

`MAX(number 1, number 2, number 3...)`&#x20;

**ROUND( )**

Rounds to a number of decimal places as specified by precision e.g "0", "1", etc.

**Example:**

`ROUND({Unit Price},0)`

&#x20;

**ROUNDUP( )**

Rounds the value to the number of decimal places given by "precision" always rounding up. e.g "0", "1", etc.

**Example:**

`ROUNDUP({Unit Price},0)`

&#x20;

**VALUE(string)**

Coverts text string to a number.

**Example:**

`VALUE({Quoted Price})`&#x20;

**INT( )**

Returns the greatest integer that is less than or equal to the number.

**Example:**

`INT({Unit Price})`&#x20;

**ABS(number)**

Returns the absolute value.

**Example:**

`ABS(-5)`
{% endtab %}

{% tab title="IF/AND" %}
**CONCAT( , ) or &**

Concatenate two values.

**Example:**

`CONCAT("Hello ", {Fullname}, " !")`

or

`"Hello " & {Fullname} & " !"`

&#x20;

**IF (statement, Action A, Action B)**

Check whether the statement is true. If it is true, then do action A, if it is false do action B.

**Example:**

`IF({UserId}, "https://dashboard.com/" + {UserId}, "")`

&#x20;

**AND( )**

Returns true if all the arguments are true, returns false otherwise.

**Example:**

`AND({Field 1}),{Field 2})`

or

`{Field 1} AND {Field 2}`

&#x20;

**OR( )**

Returns true id any one of the argument is true.

**Example:**

`OR({Field 1}),{Field 2})`

or

`{Field 1} OR {Field 2}`

&#x20;

**NOT( )**

Reverse a true to false.

**Example:**

`NOT(a<b)` Returns the same as `a>=b`
{% endtab %}

{% tab title="String Functions" %}
**LEN**

Returns the length of a string.

**Example:**

`LEN("Hello World") =>11`

&#x20;

**REGEX\_MATCH( )**

Returns whether the input text matches a regular expression.

**Example:**

`REGEX_MATCH("Good Morning","Good.Morning" =>True` (Represented as a checked checkbox)

&#x20;

**REGEX\_REPLACE( )**

Substitutes all matching substrings with a replacement string value.

**Example:**

`REGEX_REPLACE("Good Morning","M*",""=>"Good"`

&#x20;

**REGEX\_EXTRACT( )**

Returns the first substring that matches a regular expression.

**Example:**

`REGEX_EXTRACT("Good Morning","M*",""=>"Morning"`

&#x20;

**TRIM( )**

Removes the whitespace at the beginning and end of string.

**Example:**

`TRIM(" Hello ") =>"Hello"`

&#x20;

**UPPER( )**

Makes string uppercase.

**Example:**

`UPPER("Hello") =>"HELLO"`

&#x20;

**LOWER( )**

Makes string lowercase.

**Example:**

`LOWER("Hello") =>"hello"`

&#x20;

**RIGHT( )**

Extract how many characters from the end of the string. Accepts string for first arg, number for second.

**Example:**

`RIGHT("Hello",2) =>"lo"`&#x20;

**LEFT( )**

Extract how many characters from the beginning of the string. Accepts the string for first arg, number for second.

**Example:**

`LEFT("Hello",2) =>"He"`&#x20;

**APP\_URL()**

Use the App URL function to make sure your formulas are appropriate for the user type or workspace the user is in. Stacker will automatically apply the URL of where the Formula was accesesed.&#x20;
{% endtab %}

{% tab title="Time Functions" %}
**IS\_SAME( )**

Compares two dates up to a unit and determines whether they are identical. Returns true or false.

**Example:**

`IS_SAME({date 1},{date 2}, 'unit')`

current acceptable units are:

`'exact'`(matches all units)

`'year'`, `'month'`, `'day'`

&#x20;

**IS\_BEFORE( )**

Determines if \[date1] is earlier than \[date2]. Returns 1 is yes, 0 if no.

**Example:**

`IS_BEFORE({date 1},{date 2})`

&#x20;

**IS\_AFTER( )**

Determines if \[date1] is later than \[date2]. Returns 1 is yes, 0 if no.

**Example:**

`IS_AFTER({date 1},{date 2})`

&#x20;

**YEAR( )**

Returns the four-digit year of datetime.

**Example:**

`YEAR({Date},[timezone])`

&#x20;

**MONTH( )**

Returns the month of a datetime as a number between 1 (January) and 12 (Decemeber).

**Example:**

`MONTH({Date},[timezone])`

&#x20;

**DAY( )**

Returns the day of a month of a datetimein the form of a number between 1-31.

**Example:**

`DAY({Date},[timezone])`

&#x20;

**HOUR( )**

Returns the hour of a datetime as a number between 0 (12.00am) and 23 (11.00pm).

**Example:**

`HOUR({Date},[timezone])`

&#x20;

**MINUTE( )**

Returns the minute if datetime as a number.

**Example:**

`MINUTE({Date},[timezone])`&#x20;

**DATEDIF( )**

Returns the difference between datetimes in the unit specified.

Unit accepts:

`'year'`,`'month'`,`'week'`,`'day'`,`'hour'`,`'minute'`

**Example:**

`DATEDIF([date1],[date2],"units")`&#x20;

**DATEADD( )**

Adds a time/date interval to a date and then returns the date.

**Example:**

`DATEADD([date],[#],"units")` (accepts years, months, weeks and days as well as singular counter-parts)

&#x20;

**TODAY(timezone)**

Returns the current date, but not the current time.

&#x20;

**NOW( )**

Returns the current date and time.
{% endtab %}
{% endtabs %}

### Error messages <a href="#h_01h8yqs1mx9cwey2acmq73gm16" id="h_01h8yqs1mx9cwey2acmq73gm16"></a>

If a formula is invalid, you will see an error message that might help you understand what went wrong

<table><thead><tr><th>Error Message</th><th>Meaning</th><th data-hidden></th></tr></thead><tbody><tr><td><code>Missing formula function</code> or <code>Unexpected formula function</code></td><td>Means that you were very creative, but we don't have the formula function yet.</td><td></td></tr><tr><td><code>Function only works with field_type but field is a another_field_type</code></td><td>Shows when using a field with an incompatible field type.</td><td></td></tr><tr><td><code>In an IF function, field_name and field_name_2 must be of similar types</code></td><td>Shows in an IF function when the Action A and Action B are different types.</td><td></td></tr><tr><td><code>Missing keys in formula 'IF' function: else</code></td><td>Means that there is a missing else (Action B) in the IF function.</td><td></td></tr></tbody></table>
