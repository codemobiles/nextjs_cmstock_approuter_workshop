# styled conflicts

The problem here is that tailwinds **prefligh** implements the following styles when adding

```css
@tailwind base;
```

the problem is due to preflight action in tailwind directives. @base directive overrides the mui styles! Here is the solution. based on official MUI doc, you should **disable peflight** in tailwind.config.js file, as below :

```ts
module.exports = {
  corePlugins: {
    preflight: false,
  },
};
```

references:
[Stackoverflow]<https://stackoverflow.com/questions/70536210/unexpected-behavior-when-using-tailwind-and-mui-in-nextjs-project-white-button>
[Tailwinds-preflight]<https://tailwindcss.com/docs/preflight>
