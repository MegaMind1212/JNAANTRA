# Ownership filter

The ownership filter lets you grant users access to records that they are connected to.

The format of these filters is based on a single condition that must match between the record and a user's record. You will need to use [**linked fields**](https://support.stackerhq.com/hc/en-us/articles/10759382971667-Stacker-Tables-Linked-Fields) to set up the ownership filter.

In our property app on our team table, we have selected some records and set the rule so that access can only be granted to users where **The record** matches the user's **Team Profile**.

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FUGXbAqwdKREPOjxaQFLW%2FScreenshot%202022-02-04%20at%2014.55.27.png?alt=media&#x26;token=c2f92a95-2100-4eca-a009-90ebfb8dea2a" alt=""><figcaption></figcaption></figure>

This rule limits the records so that users can only see their own profile.

Another example would be, on our jobs table we limit access so that customers can only see jobs that matches their profile.&#x20;

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FsQkp6rx2ENfUAL0PwRmw%2FCleanShot%202024-05-09%20at%2011.43.09%402x.png?alt=media&#x26;token=6df79ad3-d35b-42d1-a0c1-2e1c21db11eb" alt=""><figcaption></figcaption></figure>

To set up the ownership filter, you will need a [**linked field**](https://support.stackerhq.com/hc/en-us/articles/10759382971667-Stacker-Tables-Linked-Fields) to the appropriate table. In the case of our Service app, our Customers can only see their own jobs.

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2FnhmE2hMf3Q966Gkjv3ht%2FCleanShot%202024-05-09%20at%2011.44.12%402x.png?alt=media&#x26;token=06545483-51db-4317-bfa3-4587014a4054" alt=""><figcaption></figcaption></figure>
