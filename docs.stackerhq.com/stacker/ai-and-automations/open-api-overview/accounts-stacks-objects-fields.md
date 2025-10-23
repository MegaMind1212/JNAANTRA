# Accounts, Stacks, Objects, Fields

## Read list of accounts

`GET /api/external/accounts/` returns the list of accounts associated with your integration key.&#x20;

Since integration keys are bound to one account only, this should not return more than one account.

## Read list of stacks

`GET /api/external/stacks/` returns the list of stacks associated with the account specified in the `X-Account-Id` header.

## Objects

#### Read list of objects

`GET /api/external/objects/` returns the list of objects associated with the account and stack specified in the `X-Account-Id` and `X-Stack-Id` headers.

#### Read list of action buttons for a given object

`GET /api/external/objects/<object_sid>/action-buttons/` returns the list of action buttons for a given object.&#x20;

This is normally useful for third-party integrations such as Zapier or Make.

## Fields

#### Read list of fields

`GET /api/external/objects/<object_sid>/fields/` returns the list of fields for an object.
