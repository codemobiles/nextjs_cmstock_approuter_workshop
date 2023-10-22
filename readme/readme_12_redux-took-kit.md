# Setup Redux Tool kit

Is Wrapped on the `RootLayout` for Using state management of reduxtoolkit.

- src/app/layout.tsx

```ts
<ReduxProvider>
  <AuthProvider>
    <ThemeRegistry>{children}</ThemeRegistry>
  </AuthProvider>
</ReduxProvider>
```
