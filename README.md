# nuxt-css-issue
https://nuxt-css-issue.netlify.com/

```
yarn
yarn build
yarn start
```

Notice that 2 components are on the page : 
- `MyComponent` https://github.com/kevinmarrec/nuxt-css-issue/blob/master/components/MyComponent.vue
- `MySpecialComponent` https://github.com/kevinmarrec/nuxt-css-issue/blob/master/components/MySpecialComponent.js

The latter import his css within JS ans it seems it make Nuxt not being able to extract the CSS,
causing the CSS file to be downloaded on client with noticable flicker on the second text (turning black to red).

You can go on https://nuxt-css-issue.netlify.com/ (which has been generated with `nuxt generate`),
and compare code source of the page and final HTML on client, you'll be able to see that the `special-component-class` CSS class is in a not preloaded chunk,
meanwhile everything is good for the `component-class` of the `MyComponent` component.

All Vuetify components are using this approach to import CSS of each component, 
making the CSS not SSR ready (no `preload`, it is injected only at runtime when page is hit).
