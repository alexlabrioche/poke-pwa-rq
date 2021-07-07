# POKEFLEX

`yarn build:local`

## Routing

Main Navigator :

- home
- planning
- students
- preferences
- billing
- notification

Stacked Navigator (Drawer desktop)

- Portal (https://fr.reactjs.org/docs/portals.html)

## Code splitting

- React lazy (https://fr.reactjs.org/docs/code-splitting.html#reactlazy) (au moins sur la route /facturation)

## PWA

- cache-first strategy (le navigateur récupère la version installé dans le cache)
- alert app update (si le navigateur n'a pas la bonne version de la pwa)
- Installation Desktop via in app Notif
- Offline mode
- Soon : Push Notification Service Worker

## Données

- Cache Rafraichi après X temps (configurable pour chaque route de l'api)

## Besoins Offline

- Calendrier N jours (si dispo et considéré comme à jour dans le localStorage)
- Eleves (idem)

## Besoins UX

- Calendrier Drag "slide" sur mobile
- Drawer Desktop (Stacked Slide sur mobile)

## Libs proposées

- react-router
- google workbox plugins (besoins PWA)
- react-query (cache + server state)
- react-device-detect (réels besoins différents selon device, pas juste un window width)
- framer-motion (Gesture handler, pages transition, Drawer, Menu, Calendar...)
- react-content-loader

## TODO

- ErrorBoundary
- Local Storage
- Local Storage Supprimer après T temps
- Mise à jour App en local (Versioning)

### Some stuff to read

- https://developers.google.com/web/tools/workbox/modules
- https://medium.com/progressive-web-apps
- https://create-react-app.dev/docs/making-a-progressive-web-app/
