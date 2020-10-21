# studies.film

Custom blog for in-depth film analysis, designed around scrubbable timeline navigation bar.

[Visit](https://studiesfilm.vercel.app/)

## Content

Essays are written in markdown in `/essays` and images are stored in `/public/images`. Content is collected in `/lib/essayLib.js` and static pages are created in `/pages/essays/[dir]/[id]` using Next.js's getStaticPaths() and getStaticProps().

## CLI Commands

``` bash
# install dependencies
yarn install

# dev server with hot reload at localhost:3000
yarn dev

# build for production
yarn build

# start production server
yarn start
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).
