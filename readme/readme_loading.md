# Loading UI and Streaming

## Instant Loading States

An instant loading state is fallback UI that is shown immediately upon navigation. You can pre-render loading indicators such as skeletons and spinners, or a small but meaningful part of future screens such as a cover photo, title, etc. This helps users understand the app is responding and provides a better user experience.

```yaml
/app
-- page.tsx
-- layout.tsx
-- loading.tsx # loading indicator
```

## <Suspense></Suspense>

By using Suspense, you get the benefits of:

- Streaming Server Rendering - Progressively rendering HTML from the server to the client.
- Selective Hydration - React prioritizes what components to make interactive first based on user interaction.

> > For more Suspense examples and use cases, please see the React Documentation.

```tsx
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

references:
[\*\*Loading UI and Streaming](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)
[App router directory](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions)
[Suspense](https://react.dev/reference/react/Suspense)
