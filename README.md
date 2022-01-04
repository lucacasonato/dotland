# dotland

This is the repository containing the source code for https://deno.land. The
site is built using [fresh](https://github.com/lucacasonato/fresh) and is hosted
on [Deno Deploy](https://deno.com/deploy).

The website is entirely server side rendered, and fully usable without
JavaScript enabled. The site does get enhanced with some client side JavaScript,
but it all non essential.

Functionality of this website:

- Home page with introduction and installation instructions
- Viewer for the Deno manual
- Serve /std and /x modules to Deno CLI
- /std and /x module browser
- Benchmarks page
- Artwork page with a gallery of artwork related to the Deno website
- Translations page

## Development

To start the website, just run `./main.ts`:

```
./main.ts
```
