# Patti Baby Room Decor – site

*(Deutsche Version weiter unten.)*

Este pacote é o site completo da Patti Baby Room Decor, com todo o código-fonte. Ele é seu: pode usar, mudar, publicar e vender como quiser.

## O que tem aqui

| Arquivo / pasta | O que é |
|---|---|
| `index.html` | Página principal: vídeo, sobre, galeria, produtos, contato (DE/PT) |
| `showroom.html` + `js/showroom.js` | Showroom 3D com dois quartos (rosa e azul/verde) |
| `impressum.html`, `datenschutz.html` | Páginas legais (ainda com texto provisório, ver abaixo) |
| `style.css` | Cores, fontes e layout de todas as páginas |
| `img/` | Fotos das peças e o logo |
| `video/` | Vídeos da página inicial (DE e PT) e a imagem de capa |
| `fonts/` | Fontes Quicksand e Dancing Script, hospedadas no próprio site |
| `js/three.module.min.js` | Biblioteca 3D (Three.js) |
| `licenses/` | Licenças da biblioteca 3D e das fontes. Mantenha esta pasta junto do site |

O site é estático: não tem servidor, banco de dados, cookies nem rastreamento. Funciona em qualquer hospedagem de site estático.

## Antes de divulgar: preencher

Os trechos marcados em amarelo no site são provisórios:

1. **Impressum** (`impressum.html`): nome completo, endereço para correspondência, e-mail, telefone e, se for o caso, o aviso de Kleinunternehmerin (§ 19 UStG). É obrigatório para site comercial na Alemanha (§ 5 DDG).
2. **Datenschutzerklärung** (`datenschutz.html`): pode ser gerada num gerador gratuito (por exemplo, o da e-recht24). Informe: responsável, provedor de hospedagem (GitHub Pages ou outro), contato por e-mail. O site não usa Google Fonts, cookies nem ferramentas de análise; só guarda no navegador o idioma escolhido (DE/PT).
3. **Sobre mim** (`index.html`): já tem um texto baseado no seu currículo. Revise e ajuste como preferir.
4. **Contato** (`index.html`): WhatsApp, Instagram e link da Etsy. Se não usar algum, apague o trecho.
5. **Logo**: o logo atual diz "Patty for baby decor", e o nome do site é "Patti Baby Room Decor". Vale escolher uma grafia só.

Recomendação: pedir a um advogado ou à Handelskammer para revisar Impressum e Datenschutz.

## Como publicar

**GitHub Pages (gratuito)**
1. Crie uma conta em github.com.
2. Se o site já estiver num repositório de outra pessoa, ela pode transferi-lo para você em *Settings → Danger Zone → Transfer ownership*. Depois de aceitar, o endereço passa a ser `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.
3. Para começar do zero: *New repository* → público → *Add file → Upload files* → arraste todo o conteúdo desta pasta → *Commit*.
4. Em *Settings → Pages*: *Source: Deploy from a branch*, *Branch: main*, pasta `/ (root)` → *Save*. Em um ou dois minutos o site está no ar.
5. Domínio próprio (ex.: `patti-babyroomdecor.de`): compre o domínio num registrador e configure em *Settings → Pages → Custom domain*.

Observação: o GitHub Pages não pode ser usado como loja online (venda e pagamento no próprio site). Para portfólio com pedido de orçamento, como agora, está dentro das regras. Se um dia vender direto no site, migre para uma hospedagem comercial.

**Netlify (alternativa, também gratuita)**: em app.netlify.com/drop, arraste a pasta inteira. Pronto.

## Como mudar coisas

- **Trocar ou incluir fotos na galeria**: coloque a foto em `img/` e copie uma linha `<img src="img/...">` em `index.html`, na categoria certa.
- **Peças do showroom 3D**: em `js/showroom.js`, a lista `ROOMS` diz qual foto vai em qual parede (`wall: 'n' | 'e' | 'w' | 's'`), a posição (`u`, `y`) e o tamanho (`s`, em metros). Para trocar uma peça, mude o nome da foto em `img:`.
- **Textos**: cada texto aparece duas vezes, uma em `<span lang="de">` e outra em `<span lang="pt">`. Mude os dois.
- **Sua foto no "Sobre mim"**: salve a foto como `img/patricia.jpg` (de preferência vertical). Ela aparece sozinha, numa moldura arredondada ao lado do texto. Sem esse arquivo, o espaço fica invisível.
- **Cores**: no começo de `style.css` (`--rose`, `--cream`, `--sage`, `--teal`, `--text`).
- **E-mail**: procure `patti.babyroomdecor@gmail.com` em `index.html`, `impressum.html` e `js/showroom.js`.

## Vídeo

Os vídeos têm narração de vozes da biblioteca da ElevenLabs ("Letícia" em português, "Marlena Lark" em alemão), geradas numa conta paga, que permite uso comercial. As vozes não pertencem a ninguém da família. Para trocar um vídeo, substitua o arquivo em `video/` mantendo o mesmo nome (`patti-de.mp4` ou `patti-pt.mp4`).

---

# Patti Baby Room Decor – Website (Deutsch)

Dieses Paket enthält die komplette Website von Patti Baby Room Decor mit dem gesamten Quellcode. Sie gehört dir: du kannst sie nutzen, ändern, veröffentlichen und verkaufen, wie du möchtest.

## Inhalt

| Datei / Ordner | Inhalt |
|---|---|
| `index.html` | Startseite: Video, Über mich, Galerie, Produkte, Kontakt (DE/PT) |
| `showroom.html` + `js/showroom.js` | 3D-Showroom mit zwei Zimmern (rosa und blau-grün) |
| `impressum.html`, `datenschutz.html` | Rechtliche Seiten (noch Platzhalter, siehe unten) |
| `style.css` | Farben, Schriften und Layout |
| `img/` | Fotos der Stücke und Logo |
| `video/` | Videos der Startseite (DE und PT) und Vorschaubild |
| `fonts/` | Schriften Quicksand und Dancing Script, lokal eingebunden |
| `js/three.module.min.js` | 3D-Bibliothek (Three.js) |
| `licenses/` | Lizenzen der 3D-Bibliothek und der Schriften. Diesen Ordner bitte immer mitliefern |

Die Seite ist statisch: kein Server, keine Datenbank, keine Cookies, kein Tracking.

## Vor der Veröffentlichung ausfüllen

1. **Impressum** (`impressum.html`): vollständiger Name, ladungsfähige Anschrift, E-Mail, Telefon, ggf. Hinweis Kleinunternehmerin (§ 19 UStG). Pflicht für geschäftliche Websites (§ 5 DDG).
2. **Datenschutzerklärung** (`datenschutz.html`): z. B. mit einem kostenlosen Generator (etwa e-recht24) erstellen. Angeben: Verantwortliche, Hosting-Anbieter (GitHub Pages o. a.), Kontakt per E-Mail. Die Seite nutzt keine Google Fonts, keine Cookies und keine Analyse-Tools; im Browser wird nur die gewählte Sprache (DE/PT) gespeichert.
3. **Über mich** (`index.html`): enthält bereits einen Text auf Basis deines Lebenslaufs. Bitte prüfen und nach Wunsch anpassen.
4. **Kontakt** (`index.html`): WhatsApp, Instagram, Etsy-Link. Nicht genutzte Einträge löschen.
5. **Logo**: Das Logo zeigt „Patty for baby decor“, die Website heißt „Patti Baby Room Decor“. Am besten eine Schreibweise festlegen.

Empfehlung: Impressum und Datenschutzerklärung rechtlich prüfen lassen.

## Veröffentlichen

**GitHub Pages (kostenlos)**
1. Konto auf github.com anlegen.
2. Liegt die Seite in einem fremden Repository, kann es dir unter *Settings → Danger Zone → Transfer ownership* übertragen werden. Danach lautet die Adresse `https://DEIN-NAME.github.io/REPOSITORY-NAME/`.
3. Neu anlegen: *New repository* → public → *Add file → Upload files* → gesamten Ordnerinhalt hineinziehen → *Commit*.
4. *Settings → Pages*: *Deploy from a branch*, *main*, `/ (root)` → *Save*.
5. Eigene Domain unter *Settings → Pages → Custom domain*.

Hinweis: GitHub Pages ist nicht für Online-Shops mit Bezahlung auf der Seite gedacht. Für ein Portfolio mit Anfrage per E-Mail ist es zulässig.

**Netlify (Alternative, kostenlos)**: Ordner auf app.netlify.com/drop ziehen.

## Änderungen

- **Galerie**: Foto in `img/` legen und eine `<img src="img/...">`-Zeile in `index.html` ergänzen.
- **3D-Showroom**: In `js/showroom.js` legt die Liste `ROOMS` fest, welches Foto an welcher Wand hängt (`wall`), wo (`u`, `y`) und wie groß (`s`, in Metern).
- **Texte**: Jeder Text steht zweimal da, in `<span lang="de">` und `<span lang="pt">`.
- **Dein Foto bei „Über mich“**: Foto als `img/patricia.jpg` speichern (am besten im Hochformat). Es erscheint automatisch in einem abgerundeten Rahmen neben dem Text. Ohne diese Datei bleibt der Platz unsichtbar.
- **Farben**: am Anfang von `style.css`.

## Video

Die Videos werden von Stimmen aus der ElevenLabs-Bibliothek gesprochen („Letícia“ auf Portugiesisch, „Marlena Lark“ auf Deutsch), erstellt mit einem bezahlten Konto, das kommerzielle Nutzung erlaubt. Zum Austauschen die Datei in `video/` mit gleichem Namen ersetzen.
