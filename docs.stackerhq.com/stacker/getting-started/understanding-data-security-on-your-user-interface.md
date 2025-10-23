# Understanding data security on your user interface

Stacker has a lot of features that control what your users will see in the app. These can be divided into two groups:

* Data Security Features: control what a user can access anywhere across the Stacker app and the Stacker API.
* User Interface Features: control what a user sees on a particular view.

### Data Security Features

These restrictions are enforced on the Stacker server. The data that the user isn’t permitted to see is never sent to the users browser. This functionality is secure and is how you should handle sharing sensitive data with the right users in the platform.

#### [Users](https://docs.stackerhq.com/stacker/user-access/add-users)

Only users that you specify to have access to your app will have access to your app. Unauthorized users who attempt to access your app directly using the URL will not be able to access it, they will be redirected to login.

#### [Data permissions](https://docs.stackerhq.com/stacker/security/add-user-permissions)

The data that any user can see in the app or via the Stacker API is determined based on the user or the [role](https://docs.stackerhq.com/stacker/user-access/add-users/roles) of the user, and the permissions assigned to that user or role. Any records that don’t match the permissions assigned to the role or user will not be accessible anywhere within our platform to the user.

NB. Lookup fields can be configured to show data from a table that a user doesn’t have access to, this can be controlled by setting the permissions on the lookup field to meet your requirements.

### User Interface Features

These features control what a user sees in a particular context. They don’t limit the data that is sent to a users browser. They should be used to give an appropriate experience for your users, but not relied upon to secure your data.

#### [List view filters](https://docs.stackerhq.com/stacker/security/data-filters/list-layout-filters)

Each table (e.g. Products) in Stacker can have multiple list views (e.g. Active Products, Bestselling Products, Archived Products). A list view can have filters set limiting which records show on the list view. This filter doesn’t limit which records a user can see across the app, it only limits what they can see in that list.

Even if a user only has access to one list view it isn’t the case that the user can only see the records that appear on that list view. They could see other records in various places including:

* Link fields that link to records that aren’t on this list view
* Editing link fields that link to this table will show all accessible records
* If the user is mentioned on a record they will receive a notification even if the record isn’t on that list view
* Calls to the Stacker API will show all accessible records

This is true even if the list view filter uses “is current user” or role based filters. The only way to truly limit the data a user has access to is to use the [data permissions.](https://docs.stackerhq.com/stacker/security/add-user-permissions/create-or-edit-a-permission-rule)

#### Conditional visibility

On detail pages you can choose to show or hide widgets, fields or buttons based on conditional visibility. The conditions chosen here do not prevent the most determined users from seeing the widgets, the fields or the buttons. The users browser still receives the full contents of the page and conditional visibility is applied when rendering the components that make up the page.

To control access to sensitive data don’t rely solely on conditional widget or field visibility. Instead use [data permissions](https://docs.stackerhq.com/stacker/security/add-user-permissions/create-or-edit-a-permission-rule) which are enforced across the app.
