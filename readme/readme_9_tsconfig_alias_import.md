# Add this code to tsconfig.json

```ts
"paths": {
      "@/*": ["./*"],
      "@/utils/*": ["./src/utils/*"],
      "@/components/*": ["./src/app/_components/*"],
      "@/models/*": ["./src/models/*"],
      "@/store/*": ["./src/store/*"],
      "@/services/*": ["./src/services/*"]
    }
```
