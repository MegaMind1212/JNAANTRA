# Record Actions

## List Records

`POST /api/external/objects/<object_sid>/search/` returns a list of records within the desired object.&#x20;

By default this returns a JSON object, but alternatively it will return a CSV file if the HTTP request has `Accept: text/csv` as a header.

#### Optional Parameters

This method accepts a JSON object in the body of the request with some parameters. Note that all parameters are optional:

* `search`: a string to filter records by. Records will only be returned if any of the fields specified in `search_fields` contains the `search` string.
* `search_fields`: an array containing a list of field API names that the search will be run on. If this is not specified, the search will run across all fields.
* `include_fields`: which fields to include in the response. If not specified, we'll return all fields.
* `count`: how many records to return. Defaults to 1000.
* `start`: which is the first record to return. For instance, with `count: 100` and `start: 200`, we'll return the records between positions 200 and 299, both inclusive. Defaults to 0.
* `order_by`: the field's API name by which we'll sort the records. In order to get a reverse sort, prefix the field's API name with `-`.
* `filters`: an array with filter conditions; records are only returned if they match all conditions. Each filter condition is a JSON object containing the following keys:
  * `target`: the API name of the field we want to filter by.
  * `operation`: one of the following:
    * `eq` (equals)
    * `neq` (not equals)
    * `startswith`
    * `endswith`
    * `contains` (for strings)
    * `notcontains` (for strings)
    * `in` (for links and dropdowns)
    * `notin` (for links and dropdowns)
    * `containsany` (for multi links and multi dropdowns)
    * `containsnone` (for multi links and multi dropdowns)
    * `listeq` (for multi links, an exact equality check)
    * `listneq` (for multi links, an exact inequality check)
    * `isempty` (for strings, numbers, links and dropdowns)
    * `isnotempty` (for strings, numbers, links and dropdowns)
    * `lt` (less than)
    * `lte` (less than or equal)
    * `gt` (greater than)
    * `gte` (greater than or equal)
    * `like` (whether the field matches a SQL-style LIKE expression)
    * `notlike` (whether the field does not match a SQL-style LIKE expression)
    * `beforeDate`
    * `afterDate`
    * `sameDay`
    * `withinnext` (for dates and datetimes, whether the date is among the next N days)
    * `withinlast` (for dates and datetimes, whether the date is among the last N days)
  * `value`: the value that will be used for the comparison (except for `isempty` and `isnotempty`).
    * Dates and datetimes accept filtering by relative values: instead of using exact dates or datetimes, you can use any of `_today`, `_tomorrow`, `_yesterday`, `_this_week`, `_last_week`, `_next_week`, `_this_quarter`, `_last_quarter`, `_next_quarter`, `_this_month`, `_last_month`, `_next_month`, `_this_year`, `_last_year`, and `_next_year`.

#### Filter example

```
filters: [
  {
    target: "myfield",
    operation: "contains",
    value: "foo"
  }, {
    target: "manufacture_date",
    operation: "beforeDate",
    value: "_today"
  }
]
```

would return records where the field with API name `myobj_myfield` contains the string "foo", and which have a `myobj__manufacture_date` before today.

## Read a record

To return a JSON object representing a record use:&#x20;

`GET /api/external/objects/<object_sid>/records/<record_sid>/`&#x20;

If you only need a subset of the record's fields to be returned, you can pass `include_fields` as an URL parameter. The value of this parameter must be a JSON string representing an array of the API names of the fields you want to retrieve.&#x20;

For example, if we use the following:&#x20;

`GET /api/external/objects/<object_sid>/records/<record_sid>/?include_fields=["field_1","field_2"]`

It will only return the fields with API names `field_1` and `field_2`.

Learn how to find a [field's API name.](https://docs.stackerhq.com/stacker/ai-and-automations/open-api-overview/field-api-names)

## Create a record

To create a record use: &#x20;

`POST /api/external/objects/<object_sid>/records/`&#x20;

You will need to pass a JSON object in the body of the request containing the values for this object, always in the format of `{field_api_name: value}`.

If you only need a subset of the record's fields to be returned, you can pass `include_fields` in the request of the body. The value of this property must be an array of the API names of the fields you want to retrieve.&#x20;

For example, if we use the following:

`{field_1: "new value", include_fields: ["field_1", "field_2"]}`

It will set `field_1` to the string `"new value"`, and only the fields `field_1` and `field_2` would be returned.

Learn how to find a [field's API name.](https://docs.stackerhq.com/stacker/ai-and-automations/open-api-overview/field-api-names)

## Update a record

To update a record use:&#x20;

`PATCH /api/external/objects/<object_sid>/records/<record_sid>/`&#x20;

You will need to pass a JSON object in the body of the request containing the values for this object, always in the format of `{field_api_name: value}`.

If you only need a subset of the record's fields to be returned, you can pass `include_fields` in the request of the body. The value of this property must be an array of the API names of the fields you want to retrieve.&#x20;

For example, if we use the following:&#x20;

`{field_1: "new value", include_fields: ["field_1", "field_2"]}`

It will set `field_1` to the string `"new value"`, and only the fields `field_1` and `field_2` would be returned.

Learn how to find a [field's API name.](https://docs.stackerhq.com/stacker/ai-and-automations/open-api-overview/field-api-names)

## Delete a record

To delete a record use:&#x20;

`DELETE /api/external/objects/<object_sid>/records/<record_sid>/`&#x20;

## Bulk record actions

Stacker's Bulk Records API allows inserting and updating multiple records at once. This API is intended for initially loading data into your app and can also be used to keep Stacker in sync with another system.

This endpoint can only be used by users who have administrator permissions on the target app - otherwise, they will receive a `403 Unauthorized` error.

`POST /api/external/objects/<object_sid>/bulk-records/` creates and updates a list of records for an object.&#x20;

You'll need to pass a JSON list of objects in the body of the request containing the values for the objects, always in the format of `{field_api_name: value}`. A maximum of 1000 records may be passed in a single request.

Learn how to find a [field's API name.](https://docs.stackerhq.com/stacker/ai-and-automations/open-api-overview/field-api-names)

## Example: Inserting records

To insert records simply provide the bodies of the records to be inserted, as you would for a single-record create. The records don't all have to set the same fields.

```
POST https://api.go.stackerhq.com/api/external/objects/object.custom.orders/bulk-records/
```

Request body:

```
[
    {
        "orders__name": "ORD004",
        "orders__order_date": "2024-08-12",
        "orders__customer": "rec3vg2gpynfxe34sr3"
    },
    {
        "orders__name": "ORD005",
        "orders__order_date": "2024-08-14"
    }
]
```

Response:

```
{
    "created": [
        "rec7wzphqrc9w7rii7h",
        "rec9wzp9j25ufieadnt"
    ],
    "updated": []
}
```

## Updating records

To update existing records, include the `_sid` field in the records, set to the Record ID for the record to be updated.

```
POST https://api.go.stackerhq.com/api/external/objects/object.custom.orders/bulk-records/
```

Request body:

```
[
    {
        "_sid": "rec7wzphqrc9w7rii7h",
        "orders__order_value": 175
    },
    {
        "_sid": "rec9wzp9j25ufieadnt",
        "orders__status": "Placed"
    }
]
```

Response:

```
{
    "created": [],
    "updated": [
        "rec7wzphqrc9w7rii7h",
        "rec9wzp9j25ufieadnt"
    ]
}
```

It is posible to include some updates and some inserts in a single request, simply by including the `_sid` field for the existing records to update and omitting it for the new records to be created.

## Using record External IDs

If you have External ID fields configured on your objects, then this API will use those fields to identify the records. Provided records which match an existing record will update that record, which records which don't match an existing record will be inserted.

```
POST https://api.go.stackerhq.com/api/external/objects/object.custom.orders/bulk-records/
```

Request body:

```
[
    {
        "orders__name": "ORD004",
        "orders__customer": "CUST003"
    },
    {
        "orders__name": "ORD005",
        "orders__customer": "CUST003"
    },
    {
        "orders__name": "ORD006",
        "orders__customer": "CUST003"
    }
]
```

Response:

```
{
    "created": [
        "rec7wzppwdr7vpk3xd3"
    ],
    "updated": [
        "rec7wzphqrc9w7rii7h",
        "rec9wzp9j25ufieadnt"
    ]
}
```
