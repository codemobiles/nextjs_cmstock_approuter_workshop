# Server and Client Components

- Server component is default
- Client component is optional - it is set with "use client"

When to use Server and Client Components:
To simplify the decision between Server and Client Components, we recommend using Server Components (default in the app directory) until you have a use case for a Client Component.

vdom(Server) -> vdom(Client)

```yaml
-app
--components
```

> **Note that** by default components that create in `/app` is Server components So, to implement `useEffect, useState, onClick...` you need to put `use client` at the top of your `.tsx` file

This is a documentation for server/client components when to use either Client or Server
But in sum:
**data fetching** or something about **api/sensitive info** should use in server

**Lifecycle effects/React Hooks** or **event listeners** should use in cleint

references:<https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components>
