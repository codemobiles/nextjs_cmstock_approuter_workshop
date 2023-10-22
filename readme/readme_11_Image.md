# Image

```ts
import Image from "next/image";
```

It's will error on the first time if you didn't config `next.config`

```yaml
Unhandled Runtime Error
Error: Invalid src prop (https://via.placeholder.com/600/14ba42) on `next/image`, hostname "via.placeholder.com" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
```

Please config `next.config` with images

```ts
const nextConfig = {
  images: [],
};
```
