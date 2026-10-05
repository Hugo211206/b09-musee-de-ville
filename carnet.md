# Carnet de bord J1 · Appareillage


Un carnet par binôme, rempli au fil de l'eau avec vos propres mots. Une phrase honnête (« j'ai essayé X, j'ai vu Y, je ne comprends pas pourquoi ») vaut mieux qu'une phrase parfaite recopiée. Aucune donnée personnelle, aucune clé ni jeton, ni l'adresse complète que `dsh web` affiche (elle contient un jeton). C'est aussi votre journal de décisions (astuce 13) : ce que vous avez demandé, ce qui a cassé, ce que vous avez refusé, et pourquoi.

Binôme : Mohand-Said

Thème provisoire et public visé : Musée de ville / Visiteurs du musée

Trois questions auxquelles l'assistant pourrait répondre :
1. Horaires de visite
2. Il y a des guides
3. Tarifs (adultes, enfants, étudiants, etc)

Rôles de départ et moments d'échange :

## Cahier personnel (remis par le formateur en J1-01)

Recopiez les valeurs telles que le formateur vous les a remises. Ne les changez pas, ne les échangez pas avec un autre binôme.

- Limite de caractères d'un message (le nombre N) :
- Premier mot reconnu, en plus de « salut », « aide » et « test » :
- Second mot reconnu :

## Commandes essayées

Notez le dossier de lancement, la commande et sa sortie exacte, surtout quand un outil a bloqué.

- Dossier :
- Commande et résultat :

Pour chaque checkpoint : cochez la case quand toute la preuve de la fiche est réunie, collez la preuve (texte, commande ou phrase), puis notez ce que vous avez prédit, essayé, observé, et une difficulté qui reste.

## Le chat web (N0 Subir)

### J1-01 · 🧭 Équipage — [fiche](checkpoints/J1-01-equipage.md)

- [ ] Validé
- Preuve (page de départ affichée sur votre poste, cahier personnel recopié ci-dessus) :
- Le `p#status` est-il vide dans le HTML ? Qui écrit sa phrase ?
- Décision prise ensemble :
- Difficulté qui reste :

### J1-02 · 💬 Premier prompt — [fiche](checkpoints/J1-02-premier-prompt.md)

- [ ] Validé
- Preuve : `essais-n0/chatbot-v1.html` s'ouvre ; le prompt et la première réponse sont collés ci-dessous, en entier, sans donnée personnelle.
- Mon prompt, tel quel : Fais-moi un chatbot sur musée de ville, dans une seule page HTML que j'ouvre dans mon navigateur
- La première réponse du chat (texte et code), telle quelle :
Ton chatbot est prêt : chatbot-musee.html. Double-clique sur le fichier pour l'ouvrir dans ton navigateur. Il fonctionne sans connexion internet et sans clé d'API. Je ne l'ai pas ouvert moi-même dans un navigateur, donc fais un premier essai.

Ce qu'il fait:

Il répond aux questions sur un musée fictif, le « Musée de la Ville » :
horaires, tarifs et exposition en cours
collections et visites guidées
accès et accessibilité
café et boutique, audioguides
règles de visite, durée de la visite et contact
Il repère des mots-clés dans la question, sans tenir compte des accents ni des majuscules. « c'est combien l'entrée ? » donne donc les tarifs.
Des boutons de suggestion permettent de poser une question en un clic.
Il affiche « L'assistant écrit… » avant de répondre, et une réponse par défaut quand il ne comprend pas.
Pour l'adapter à ton musée : tout le contenu est dans le tableau knowledge, dans la balise <script>. Chaque sujet contient une liste de mots-clés (keys) et une réponse (answer). Tu peux changer les infos (nom, adresse, prix…) ou ajouter un sujet en copiant un bloc existant.

- Trois lignes d'observation (ce que j'ai vu en utilisant la page) :
- Difficulté qui reste :

### J1-03 · 💥 Ça marche… jusqu'à quand — [fiche](checkpoints/J1-03-jusqua-quand.md)

- [ ] Validé
- Liste de contrôle de la version 1 (cinq à huit comportements essayés) :
1. Ecrire un message
2. Envoyer un message
3. Le chatbot réponds sur le thème
4. Choissir un catégorie
5. Les messages restent sur le chat
- Journal des régressions, une entrée par modification : ce que j'ai demandé · ce qui marche maintenant · ce qui marchait et ne marche plus · ce que je n'avais pas vu, et comment je l'ai trouvé.
  - Modification 1 : Ajouter boutton Evénements spéciaux
  - Modification 2 : Ajouter boutton nouveau chat
  - Modification 3 : Afficher historique des chats
- Chasse à l'angle mort (ce qui a été trouvé, et par qui) :
- Deux phrases de conclusion :
- Difficulté qui reste :

### J1-04 · 🎲 Même prompt, autre réponse — [fiche](checkpoints/J1-04-meme-prompt.md)

- [ ] Validé
- Le prompt de référence (identique aux trois essais, collé mot pour mot dans trois conversations neuves) : Fais-moi un chatbot sur musée de ville, dans une seule page HTML que j'ouvre dans mon navigateur
- Le tableau des écarts (trois colonnes A, B, C ; au moins quatre critères ; des faits, pas des impressions) :

| Critère | A | B | C |
|---|---|---|---|
| Lignes | 327 | 483 | 464 |
| Sujets reconnus | 12 | 19 | 14 |
| Message vide | ignoré | ignoré | ignoré |
| Après F5 | conversation effacée | conversation effacée | conversation effacée |
| Fonctionnalités en plus | boutons de suggestion | boutons de suggestion, statut « Ouvert/Fermé », bouton grisé pendant la réponse | boutons de suggestion, statut « Ouvert/Fermé », 2 expositions |
| Plein tarif | 8 € | 10 € | 8 € |

- Une phrase de conclusion (ce que ces écarts autorisent, ce qu'ils interdisent de supposer) :
- Difficulté qui reste :

## L'agent (N1 Demander)

### J1-05 · 🛠 dsh en main — [fiche](checkpoints/J1-05-dsh-en-main.md)

- [ ] Validé
- Preuve (`dsh --version`, mode Read Only, modèle `capweb-ia`, `git status -- atelier` propre ; **jamais la clé**) :
- La consigne exacte envoyée à l'agent et sa réponse : Liste les fichiers de ce dossier et dis ce que fait chacun. Donne le chemin de chaque fichier. Si tu ne sais pas ce que fait un fichier, écris « je ne sais pas ». N'écris rien et ne modifie rien.

- Pour chaque fichier cité : existe ou non, description juste ou fausse, pourquoi ; et un fichier qu'il n'a pas cité :
| Fichier | Existe ? | Description | Pourquoi |
  |---|---|---|---|
  | `.gitignore` | existe | juste | les 6 dossiers listés sont bien ceux du fichier |
  | `README.md` | existe | juste | parle bien de `npm start`, `npm test`, `npm run verify` et de la suite |
  | `eslint.config.js` | existe | juste mais incomplète | oublie la règle `no-undef` (5 règles, pas 4) |
  | `package.json` | existe | juste | nom, 5 scripts et 3 devDependencies exacts |
  | `package-lock.json` | existe | juste | 1044 lignes, `lockfileVersion: 3` |
  | `playwright.config.js` | existe | juste | Chromium headless, port 4173, `./browser`, `node server/start.js` |
  | `browser/depart.spec.js` | existe | juste | vérifie le titre h1 « Cap Web », le `role=status` et l'absence d'erreur JS |
  | `public/index.html` | existe | juste | h1, paragraphe, `p#status`, liens vers `styles.css` et `js/app.js` |
  | `public/styles.css` | existe | juste | `system-ui`, marge, couleur, `main` à 48rem |
  | `public/js/app.js` | existe | juste | une seule ligne qui écrit le message dans `#status` |
  | `server/app.js` | existe | juste | liste fixe de chemins + `/version.json`, GET/HEAD seulement, 404/405 |
  | `server/start.js` | existe | juste | port 3000 par défaut, 127.0.0.1, arrêt sur SIGINT/SIGTERM |
  | `tests/server.test.js` | existe | juste | 9 tests `node:test`, on les compte bien |

- Difficulté qui reste :

### J1-06 · 🧱 Anatomie d'un prompt — [fiche](checkpoints/J1-06-anatomie-dun-prompt.md)

- [ ] Validé
- Preuve (deux prompts, deux résultats, grille remplie, commit du squelette) : prompt structuré → `git status -- atelier` ne montre que `public/index.html`, `public/styles.css`, `public/js/app.js` modifiés, aucun fichier nouveau ; `npm test` vert (9/9) ; commit : ✏️ À COMPLÉTER (`git log --oneline`).
- Prompt vague et ce que montre la page (trois lignes, fichiers touchés) :
Écris la page de Cap Web : un formulaire, une liste de messages et un statut.

- Prompt structuré, en six parties, tel qu'envoyé :

  RÔLE : Tu es développeur web. Tu écris du HTML, du CSS et du JavaScript sans bibliothèque, pour des débutants.
  TÂCHE : Écris le squelette de la page de « Cap Web », un assistant sur un musée de ville, pour les visiteurs du musée : un formulaire, une liste de messages, une ligne de statut.
  CONTRAINTES :
  - Modifie uniquement public/index.html, public/styles.css et public/js/app.js. Le serveur ne sert que ces trois fichiers : n'en crée aucun autre.
  - Garde ces identifiants : form#chat-form, textarea#message, ul#messages, p#status.
  - Le champ #message est limité à 100 caractères (maxlength).
  - Le contenu de la page est dans un main. Un seul h1 (« Cap Web »), un label lié au champ, un bouton « Envoyer », p#status avec role="status", html lang="fr". Aucune bibliothèque, aucune adresse https://.
  FORMAT DE SORTIE : d'abord la liste de tes hypothèses (cinq au plus), puis tu t'arrêtes. Après mon « ok », tu écris les trois fichiers, puis tu réponds par la liste des fichiers écrits.
  EXEMPLES ET CONTRE-EXEMPLES : voulu : <button type="submit">Envoyer</button>. Refusé : <div onclick="envoyer()">Envoyer</div> (ce n'est pas un bouton) ; un fichier script.js à côté de app.js (le serveur répondrait 404).
  CRITÈRE D'ARRÊT : app.js empêche seulement le rechargement de la page à l'envoi et écrit alors « Interface prête. » dans le statut ; il n'ajoute aucun message à la liste. Quand les trois fichiers sont écrits, tu t'arrêtes.

  Résultat : formulaire `#chat-form` avec label, `textarea#message` (maxlength 100), bouton « Envoyer » de type submit, `ul#messages` vide, `p#status` avec `role="status"`, le tout dans un `main` sous un seul h1 « Cap Web ». À l'envoi, `app.js` empêche le rechargement et écrit « Interface prête. » sans rien ajouter à la liste.
- Les hypothèses de l'agent, et ma réponse :
- La grille (✔ ou ✘ et un mot, pour « vague » puis « structuré ») :

  | Critère | Prompt vague | Prompt structuré |
  |---|---|---|
  | La page s'affiche sans erreur (F12, onglet Console) | | |
  | Formulaire, liste et statut sont là, avec les quatre identifiants | | (les 4 identifiants sont dans le HTML) |
  | Seuls les trois fichiers autorisés ont changé (`git status -- atelier`) | (seul `index.html` modifié) | (les 3 fichiers, aucun nouveau) |
  | `npm test` reste vert | | (9/9) |
  | Aucune bibliothèque, aucune adresse `https://` | | (aucune trouvée) |
  | Vous savez expliquer chaque partie de la page en une phrase | | |
- Une phrase :
- Difficulté qui reste :

### J1-07 · 👣 Petits pas — [fiche](checkpoints/J1-07-petits-pas.md)

- [ ] Validé
- Preuve (découpage écrit avant la première demande, trois diffs relus, un refus écrit, un commit par étape acceptée, trois boutons de questions qui fonctionnent) : commits `343b2c3` (étape 1), `6b76314` (étape 2), `9822834` (étape 3) ; `git status -- atelier` propre ; `npm test` vert (9/9) ; diffs relus et refus : voir le journal des décisions ci-dessous.
- La tâche, mes trois questions et mon découpage en trois étapes (écrit avant la première demande d'écriture) :
  - Tâche : afficher sous le formulaire mes trois questions en boutons ; un clic sur un bouton copie la question dans le champ #message, sans l'envoyer.
  - Mes trois questions (celles de J1-01, reformulées en vraies questions, sans le mot « Envoyer ») :
    1. Quels sont les horaires de visite ?
    2. Y a-t-il des visites guidées ?
    3. Quels sont les tarifs (adultes, enfants, étudiants) ?
  - Découpage :
    1. Dans `public/index.html` seulement : une liste `ul#suggestions` de trois boutons `type="button"`, un par question, écrits dans le HTML. Test : F5, les trois boutons s'affichent et ne font rien.
    2. Dans `public/js/app.js` seulement : un clic sur un bouton copie son texte dans `#message`. Test : clic → le texte arrive dans le champ, le statut ne change pas (rien n'est envoyé).
    3. Dans `public/js/app.js` seulement : après le clic, le curseur est dans le champ et le statut dit « Question copiée : modifiez-la ou envoyez-la. » Test : clic → curseur dans le champ, message dans le statut.
- Ce que l'agent a proposé comme découpage, ce que j'ai gardé, pourquoi : l'agent garde mon découpage en 3 ; il propose aussi en option 2 étapes (HTML, puis tout le JS d'un coup : copie + focus + statut). Je garde mes 3 étapes : des diffs plus petits se relisent mieux, et l'étape 3 rend le critère « curseur + statut » vérifiable à part. Ses hypothèses étaient justes (boutons placés après `</form>` et avant `#messages`, `type="button"` pour ne pas envoyer, copie = remplacement du texte du champ, « Interface prête. » conservé) ; il signalait qu'il ne connaissait pas mes questions : je les lui donne dans la demande de l'étape 1. Elles font toutes moins de 100 caractères (limite `maxlength`).
- Mon refus écrit : ce que l'agent avait fait, pourquoi je le refuse, ce que j'ai demandé à la place :
  - Mon refus porte sur une **proposition**, pas sur un diff : les trois diffs faisaient exactement ce que je demandais. À la fin de l'étape 3, j'ai demandé à l'agent : « Liste, sans les faire, les changements que tu aurais ajoutés en plus de ces trois étapes. N'écris rien. »
  - Ce que l'agent proposait : ajouter dans `app.js` une « garde » qui ne fait rien si `#suggestions` ou `#message` sont absents de la page, « pour éviter une erreur si le HTML change ».
  - Pourquoi je refuse : ce n'était pas demandé, et cela cacherait un vrai problème. Si un jour `ul#suggestions` disparaît du HTML, je préfère voir une erreur rouge dans la console (F12) qui me dit ce qui manque, plutôt que des boutons qui ne font plus rien sans aucun message.
  - Ce que j'ai demandé à la place : ne rien ajouter, garder `app.js` tel qu'il est après l'étape 3.
- Difficulté qui reste :

**Journal des décisions.** Une ligne par demande faite à l'agent, de J1-07 à J1-09 (les trois étapes de J1-07, puis la correction de J1-08, puis les six demandes de J1-09) : la demande copiée, le diff relu (fichiers, nombre de lignes, une chose que je n'avais pas demandée ?), le verdict et pourquoi.

| N° | Demande | Diff relu | Verdict et pourquoi |
|---|---|---|---|
| 1 | Étape 1 : 3 boutons de questions dans `index.html` | `index.html`, +5 lignes, rien en plus | Accepté : exactement ce que j'ai demandé |
| 2 | Étape 2 : un clic copie la question dans le champ (`app.js`) | `app.js`, +10 lignes ; en plus : `.trim()` (inoffensif) | Accepté : fait l'étape, rien d'autre |
| 3 | Étape 3 : curseur dans le champ + statut « Question copiée… » (`app.js`) | `app.js`, +3 lignes, rien en plus | Accepté : texte du statut exact |
| 4 | J1-08 : couper le mot long dans `#messages` à 360 px (`styles.css`) | `styles.css`, +1 ligne ; en plus : `word-break` (doublon inoffensif) | Accepté : dépassement 152 → 0 px |
| 5 | | | |
| 6 | | | |
| 7 | | | |
| 8 | | | |
| 9 | | | |
| 10 | | | |

### J1-08 · 🔎 Revue de la page — [fiche](checkpoints/J1-08-revue-de-la-page.md)

- [ ] Validé
- Preuve (trois défauts, un corrigé avec son avant et son après, diff relu, revue adverse vérifiée) : 3 défauts ci-dessous ; mot long corrigé (152 → 0 px) ; diff relu (1 fichier, 1 ligne) ; revue adverse : 1 vraie, 1 « je ne sais pas », 1 vraie en partie.
- Mes défauts, un par ligne :

  | Lentille (structure, clavier, écrans) | Où (élément ou fichier) | Comment je l'ai vu |
  |---|---|---|
  | Écrans | `#messages li`, `styles.css` (aucune règle pour couper les mots) | À 360 px, un `<li>` « Vous : » + 60 « a » dépasse : mesure = **152 px**. 0 à 600 et 1280 px. |
  | Structure | `ul#suggestions` et `ul#messages` (`index.html:18` et `:23`) | Ni `aria-label` ni titre : les deux listes n'ont pas de nom |
  | Structure | `index.html` | Pas de `header` ni de `footer` : seul `main` existe |

  Clavier sans défaut : Tab va dans l'ordre champ → Envoyer → 3 questions, contour visible partout ; Espace sur une question la copie sans envoyer ; Entrée sur Envoyer affiche « Interface prête. », sans `?message=` dans l'adresse. Étiquette liée au champ, un seul `h1`, `lang`, `title`, `viewport` présents.
  (Mesures faites avec Chrome sans fenêtre, en simulant un écran de 360 px.)

- La revue adverse : trois affirmations de l'agent, la référence qu'il a donnée (fichier, ligne), mon verdict (vrai, faux, rejeté sans référence) et comment j'ai vérifié :
  1. Structure, `index.html` l. 11 et 18-24 : un seul titre, listes sans nom → **vrai** (aucun `aria-label`, aucun `h2` : vu dans le HTML).
  2. Clavier, `index.html` l. 13-22, `styles.css` l. 1-6 : « je ne sais pas » → **rien à vérifier** ; mon test confirme qu'il n'y a pas de défaut clavier.
  3. Écrans, `styles.css` l. 4 : `#message` en `width: 100%` sans `box-sizing` dépasse → **vrai en partie** : le champ dépasse du formulaire de 6 px, à 360 comme à 1280 px, mais la page ne défile pas (mesure = 0). Le « risque de défilement horizontal » est faux.
- Le défaut corrigé : l'avant (capture ou valeur), ma demande ciblée (copiée), le diff relu (fichiers, lignes, changement non demandé ?), l'après (même geste, même mesure) :
  - Défaut : le mot de 60 lettres dans `#messages` à 360 px.
  - Avant : **152 px** de dépassement → Après : **0 px** (même mesure, à 360 px ; toujours 0 à 600 et 1280 px).
  - Ma demande :

    ```text
    RÔLE : tu es développeur web, tu corriges du CSS pour des débutants.
    TÂCHE : à 360 px de large, un message contenant un mot très long (60 lettres) dans ul#messages dépasse de l'écran : la page défile horizontalement de 152 px. Corrige ce seul défaut.
    CONTRAINTES : ne modifie que public/styles.css. Pas d'overflow: hidden sur html ou body. Ne touche pas aux autres règles.
    FORMAT DE SORTIE : le diff, puis une phrase sur la façon de vérifier.
    CONTRE-EXEMPLE : ce qu'on ne veut plus voir : une ligne « Vous : aaaa… » qui sort de l'écran à droite.
    CRITÈRE D'ARRÊT : quand ce seul défaut est corrigé, tu t'arrêtes.
    ```
  - Diff relu : `styles.css` seul, +1 ligne : `#messages li { overflow-wrap: break-word; word-break: break-word; }`. Pas d'`overflow: hidden`, aucune autre règle touchée. `word-break: break-word` fait doublon avec `overflow-wrap` (ancienne écriture), mais ne change rien d'autre : accepté.
- Difficulté qui reste :

### J1-09 · 🧠 Un cerveau à règles, par prompts — [fiche](checkpoints/J1-09-cerveau-a-regles.md)

- [ ] Validé
- Preuve (comportements vérifiés : « Vous : … », message vide, `<b>gras</b>`, mes deux mots, ma limite ; `/js/brain.js` et `/js/view.js` affichés ; F5 ; « Effacer ») :
- Mes six demandes et leurs verdicts : dans le journal des décisions ci-dessus.
- Le rôle de chaque fichier, en une phrase chacun :
  - `app.js` :
  - `brain.js` :
  - `view.js` :
- Ce que j'ai vu quand j'ai mis `{pas du json` dans la mémoire :
- Difficulté qui reste :

### J1-10 · 🧪 Épreuve de l'explication — [fiche](checkpoints/J1-10-epreuve-explication.md)

- [ ] Validé
- Preuve (`npm test` vert avec cinq tests dont ma limite, commit de sauvegarde, remise faite) :
- Le test rouge : son nom, son message exact, et ce qu'il m'a appris :
- Épreuve de l'explication, éditeur fermé :
  - Ce que je n'ai pas su expliquer :
  - Ce que mon binôme n'a pas su expliquer :
- Difficulté qui reste :

## Quatre questions pour finir

1. Pourquoi `textContent` et pas `innerHTML` ?
2. Pourquoi trois fichiers plutôt qu'un seul ?
3. L'agent a écrit le code : comment savez-vous qu'il est juste, et qu'est-ce qui l'a vu échouer ?
4. Quelle astuce avez-vous le plus utilisée aujourd'hui, et laquelle avez-vous oubliée ?

## Aides utilisées

- Indices, aide-mémoire, voisins :
- Ce que j'ai demandé à une IA, et comment j'ai vérifié sa réponse :

## Notes personnelles (chacun)

Pour préparer l'explication de votre part du code. Chacun écrit avec ses mots.

- Nom :
- Ce que j'ai compris :
- Ce que je n'ai pas encore compris :

- Nom :
- Ce que j'ai compris :
- Ce que je n'ai pas encore compris :

Git sert à sauvegarder chaque étape acceptée : lisez les différences et nommez les fichiers à enregistrer, jamais `git add -A`. Attendez la consigne du formateur avant tout envoi vers un dépôt commun.

[README du jour](README.md) · [Aide-mémoire HTML/CSS](ressources/aide-memoire.md) · [Aide-mémoire JavaScript](ressources/aide-memoire-js.md) · [Notice dsh](ressources/dsh.md)
