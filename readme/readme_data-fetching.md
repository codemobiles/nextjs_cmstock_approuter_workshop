# Data fetching

**Migrating Data Fetching Methods**
The `/pages` directory uses `getServerSideProps` and `getStaticProps` to fetch data for pages.
Inside the `/app` directory, these previous data fetching functions are replaced with a `simpler API` built on top of `fetch()` and async React Server Components.

references:

- [Migrate Data fetching method](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods)
- [Data-fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
