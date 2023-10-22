# Migration guide

## Migrating \_document.js and \_app.js

If you have an existing \_app or \_document file, you can copy the contents (e.g. global styles) to the root layout (app/layout.tsx). Styles in app/layout.tsx will not apply to pages/_. You should keep \_app/\_document while migrating to prevent your pages/_ routes from breaking. Once fully migrated, you can then safely delete them.

If you are using any React Context providers, they will need to be moved to a Client Component.

references: <https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods>
