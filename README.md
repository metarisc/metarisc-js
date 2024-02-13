
# Metarisc JS

La librairie Metarisc JS offre un accès simple et pratique à l'API Metarisc à partir d'applications écrites en langage JS. Elle comprend un ensemble de classes et de fonctions pour l'ensemble des ressources de l'API.

## NPM

Vous pouvez installer la librairie en utilisant [NPM](https://www.npmjs.com). Exécutez la commande suivante dans votre projet :

```bash
npm i @metarisc/metarisc-js
```

Pour utiliser la librairie, il suffit de l'importer comme ceci :

```php
import { Metarisc } from '@metarisc/metarisc-js';
```

## Utilisation

### Requêtes

Pour effectuer une requête sur Metarisc, qu'elle soit simple ou paginée (voir la [documentation](http://metarisc.fr/docs/api/#/#pagination)), faites de cette manière :

Exemple :

```ts
const m = new Metarisc(config);
m.NotificationsAPI.getNotification('123456');
m.NotificationsAPI.paginateNotifications();
```
