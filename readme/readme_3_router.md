# Router

Nowadays (22/8/23) is have 2 router to serve your next application are

1. [App router](https://nextjs.org/docs/app) - new style
1. [Page router](https://nextjs.org/docs/pages) - old style

For new applications, we recommend using the **App Router.** This router allows you to use React's latest features and is an evolution of the Pages Router based on community feedback.

```yaml
Good to know: Although you can use both routers in the same project, routes in app will be prioritized over pages. We recommend using only one router in your new project to avoid confusion.
```

## Different between 2 of them

the App Router and the Pages Router in Next.js have different purposes123:

- The App Router is used to create routes for dynamic pages that require data fetching.
- The Pages Router is used to create routes for static pages that do not require data fetching.
- The App Router is responsible for the overall routing and navigation of your application.
- The Page Router focuses on routing within individual pages.

  You can use useRouter from `next/router` in the pages folder (Page router),  
  while useRouter from `next/navigation` in the app folder. (App router)

## Tables

| Feature                       |   App Router   | Pages Router  |
| ----------------------------- | :------------: | :-----------: |
| Routing type                  | Server-centric |  Client-side  |
| Support for Server Components |      Yes       |      No       |
| Complexity                    |  More complex  |    Simpler    |
| Performance                   |     Better     |     Worse     |
| Flexibility                   | More flexible  | Less flexible |

reference: <https://stackoverflow.com/questions/76570208/what-different-between-app-router-and-pages-router-in-next-js>

## String Query / Params

```ts
export default function DashboardIdPage() {
  // dashboard/[category]/page.tsx
  // http://localhost:3001/dashboard/product?id=223
  const params = useParams(); // get params
  const query = useSearchParams(); // get string query
  return (
    <div>
      Param: {params.category}, Query: {query.get("id")}
    </div>
  );
}
```

## App Router / Slug

```yaml
- app ## folder
-- page.tsx ## page (/)
-- layout.tsx # root layout
--- dashboard ## folder
---- page.tsx ## page (/dashboard)
-----[id] ## folder
------page.tsx # page (/dashboard/[id]) where is [id] = 1,2,3,4,abc,d,s,...
```

## Get String Query

```ts
// ...?id=1234

type Props = {
  searchParams: {
    id?: string;
  };
};
```

### Best practice for organize

```yaml
- app ## folder
-- page.tsx # page (/)
-- layout.tsx # root layout
--- (auth) ## (folder)Group routes without affecting routing - use for your organized
---- login ## folder for autual route
----- page.tsx ## page (/login)
---- register ## folder for autual route
----- page.tsx # page (/register)
```
