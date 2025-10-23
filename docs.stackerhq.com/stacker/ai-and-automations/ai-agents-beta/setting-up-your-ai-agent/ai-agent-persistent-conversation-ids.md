# AI Agent persistent conversation IDs

## **Persistent AI Agent Conversations**

Create long-running conversations around a single record, task or topic by giving the conversation a unique thread ID.\
Multiple triggers can then send events into that same conversation thread, allowing your agent to responds to each event with all the context and plans it had previously.\
Use the thread in detail page widgets to give access to a persistent conversation, scoped to a particular record, user, or anything else you want.

### How to set up on detail pages:&#x20;

1. Add an AI agent widget to your detail page
2. Set your template ID to keep it persistent based on record ID, user ID, or something else:
   1. **Record ID** use `{record.id}`: this will keep the conversation the same based on the record regardless of the user logged in.&#x20;
   2. **User Record** use `{record.user}`: this will keep the conversations or other AI tasks based on the user logged in.&#x20;
   3. Other fields use `{record.customer.primary_contact.email}`
      1. The path values here correspond to what is shown for the ‘developer name’ in the Manage Fields modal.
      2. If it is a multi-link, we will use only the first record in the list.

{% embed url="<https://vimeo.com/1093226590?share=copy>" %}

### Tool usage for Persistent IDs:

Use the **Record Creation** trigger along with a Conversation ID set to connect with specific users or other conversation records.

For example, when adding new records that associate with the same company, using the {record.company} will help the AI agent reference all record information that is in common with the company. Helping your AI agent gather more accurate and complete information.&#x20;

<figure><img src="https://3670244749-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6QaGf7ZvNU2Re8mlQTaJ%2Fuploads%2F5kGsAkNu0TsgYZOocfRK%2FCleanShot%202025-06-16%20at%2011.39.48%402x.png?alt=media&#x26;token=09eeee0a-215e-4d33-a397-c3e7cd58a344" alt=""><figcaption></figcaption></figure>
