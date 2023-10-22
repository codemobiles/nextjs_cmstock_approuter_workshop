# Routing / Dynamic Routes (Slug)

### Map all route by slug (Server-Side)

example:

url: `stock/1/blue/yellow?type=test`
directory: `app/stock/[...id]`
result in props:

```yaml
// in case of server side
{
  "params": {Id:['1','blue','yellow']},
  "searchParams": {type:'test'}
}
```

> Good to know: If you forget to create layout.tsx, Next.js will automatically create this file when running the development server with next dev.

## Routing

### File Conventions

Next.js provides a set of special files to create UI with specific behavior in nested routes:

`layout` Shared UI for a segment and its children
`page` Unique UI of a route and make routes publicly accessible
`loading` Loading UI for a segment and its children
`not-found` Not found UI for a segment and its children
`error` Error UI for a segment and its children
`global-error` Global Error UI
`route` Server-side API endpoint
`template` Specialized re-rendered Layout UI
`default` Fallback UI for Parallel Routes

In this project is seperated routing by layout concerns
--/app
----/_components => _ represent private folder that should not be considered by the routing system
----/(auth) => "()" represent Route groups the folder is for organizational purposes and should not be included in the route's URL path.
----/api => /api in /app represent routes handler (internal API)

## Dynamic Routes (Slug)

----/api
------/auth
--------/[route] => for "[]" representing the catch prop route `params` name route
----------/route.ts

----/(routes)
------/stock
--------/edit => but if this url contain query like `/stock/edit?id=123` mean this url have query name "id" value = "123"
and it can get query by prop `searchParams`
references:

- [Routing](https://nextjs.org/docs/app/building-your-application/routing)
- [Dynamic routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
