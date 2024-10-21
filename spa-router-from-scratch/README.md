# 0den SPA Router

Bilemiz, React, Vue, Angular sıyaqlı framework'lar óziniń tayın bolǵan feature'ları menen keledi. Olardan paydalanıp turıp [SPA](https://en.wikipedia.org/wiki/Single-page_application) lardı ańsat jaratıwımız múmkin. Sol tayın, SPA ushın zárúr feature'lardan biri bul - **router** esaplanadı.

Usı jerde soraw, router ózi qaytıp jaratıladı? Heshqanday framework'sız router'dan paydalanıw múmkin ba?

Usı sorawlarǵa juwap beriw máqsetinde ózlerimiz qoldan, kishkene router soǵıp kóremiz.

Negizinde, router qurıw dım quramalı nárse emes. Ol tiykarınan ápiwayı [browser API](https://developer.mozilla.org/en-US/docs/Web/API/Window) larınan turadı.

Baslawdan aldın router qurıw ushın kerek bolatuǵın bir-eki túsinikler menen tanısıwımız kerek:

## Window: History hám Location obyektleri

[window.history](https://developer.mozilla.org/en-US/docs/Web/API/History_API) obyekti browser sessiyası haqqında maǵlıwmatlardı kórsetedi. Onıń metod hám property lerinen paydalanıp paydalanıwshınıń kirgen websaytları ishinde turıp, saytlardı birme-bir ótkerip kóriwimiz múmkin.
Bul metodlardı browser console'ınan paydalanıp kórseńiz boladı:
![Firefox Browser Console](https://i.ibb.co/FWMVDR1/image.png)

## Location Obyekti

[window.location](https://developer.mozilla.org/en-US/docs/Web/API/Location) ámeldegi websaytqa baylanıslı bolǵan websayt mánzili, port'ı sıyaqlı maǵlıwmatlardı kórsetedi:
![Firefox Browser Console](https://i.ibb.co/g9XGV83/image.png)

## History - pushState()

Bul metodtan paydalanıw arqalı sayttı jańalamastan (refresh) turıp, browser sessiyasına yaǵnıy kirilgen websaytlar qatarına tazadan jazıw qosıwımız múmkin.

    history.pushState(state, title, url);

- state - taza jazıw, path haqqında maǵlıwmat
- title - path'qa qoyılatuǵın at (buǵan ápiwayı ǵana "" dı paydalansaq ta boladı, sebebi házir kópshilik browser'ler title'di qollap-quwwatlamaydı)
- url - taza path'diń siltemesiniń qanday kóriniwi

## Window - popstate event'i

Browser'diń shep tárepinde, joqarılawda <-, -> ǵa uqsas belgiler bar. Bul belgilerdiń wazıypası aldınǵı yamasa keyingi websaytqa ótkeriw. Usıǵan **popstate** event'i deyiledi. Bul event'ten sol belgidegi túymeler basılǵandaǵı ózgerislerdi ámelge asırıw ushın paydalanamız.

## Router qurıwdı baslaw

Kerekli bolǵan túsiniklerdi bilip aldıq, endi router kodın jazıwdı baslaymız.
Terminalda: `npm init -y` (node.js ornatılǵan bolıwı kerek)

### Kórinisi

index.html file'ında ul, li hám a taǵleri arqalı jaratılǵan 3 link jaylasqan boladı:

- home
- about
- contact

Hám jáne **home.html**, **about.html**, **contact.html** degen file'larımız da boladı.
**index.html**:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vanilla JS Router</title>
      </head>
      <body>
        <ul class="navbar-list">
          <li class="navbar-item">
            <a href="#" onclick="onNavClick('/about'); return false;">About</a>
          </li>
          <li class="navbar-item">
            <a href="#" onclick="onNavClick('/'); return false;">Home</a>
          </li>
          <li class="navbar-item">
            <a href="#" onclick="onNavClick('/contact'); return false;">Contact</a>
          </li>
        </ul>
        <div id="root"></div>
        <script src="./js/app.js"></script>
      </body>
    </html>

**home.html**:

    <div>
      <h1>******Welcome to the Home Page*****</h1>
    </div>

**about.html**:

    <div>
      <h1>******Welcome to the About Page*****</h1>
    </div>

**contact.html**:

    <div>
      <h1>******Welcome to the Contact Page*****</h1>
    </div>

### HTML betlerdi júklew (async)

HTML file'lardı asinxron júklew ushın fetch API menen async/await'tan paydalanamız, nátiyjeni ózgeriwshige júklew ushın Promise'tan paydalanamız. Hám kerekli route'lardı belgilep alamız.

    // Declare the variables for home, about & contact html pages
    let home = '';
    let about = '';
    let contact = '';

    /**
     *
     * @param {String} page - Represents the page information that needs to be retrieved
     * @returns {String} resHtml - The Page's HTML is returned from the async invocation
     */
    const loadPage = async (page) => {
      const response = await fetch(page);
      const resHtml = await response.text();
      return resHtml;
    };

    // Define routes globally
    let  routes  =  {};

    /**
     * The Async function loads all HTML to the variables 'home', 'about' & 'contact'
     */
    const  loadAllPages  = async ()  =>  {
        home  = await loadPage("home.html");
        about  = await loadPage("about.html");
        contact  = await loadPage("contact.html");
        // Initialize routes after pages are loaded
        routes = {
    	    "/":  home,
    	    "/contact":  contact,
    	    "/about":  about
        };
    };

### Tiykarǵı funkciya hám Root elementi

**index.html** ishindegi **rootDiv** elementin belgilep alamız.
Tiykarǵı funkciya sayt júklenip bolǵan kezi orınlanadı.
Sayt júklengende kerekli page kóriniwi ushın rootDiv.innerHTML'di routes tiń ishindegi ámeldegi path'qa teńeymiz.

    //Get the Element with the Id 'root'
    const rootDiv = document.getElementById('root');

    /**
     * The Main Function is an async function that first loads All Page HTML to the variables
     * Once the variables are loaded with the contents, then they are assigned to the 'routes' variable
     */
    const  main  = async ()  =>  {
    	await loadAllPages();
    	// Check the current pathname and load the appropriate content
    	const  currentPath  =  window.location.pathname;
    	rootDiv.innerHTML  =  routes[currentPath]  ||  "<h1>Page Not Found</h1>";  // Set content based on current URL
    };

    // Invoke the Main function
    main();

### Tiykarǵı bette link basılǵandaǵı ózgeris

**index.html** file'ındaǵı hárbir link ushın tómendegidey kod jazılǵan:

    <li class="navbar-item">
    	<a href="#" onclick="onNavClick('/about'); return false;">About</a>
    </li>

Bul link basılǵanda **onNavClick** funkciyası orınlanadı hám ol funkciya route'tı ózgertedi.

    const onNavClick = (pathname) => {
    	window.history.pushState({}, pathname, window.location.origin + pathname);
    	rootDiv.innerHTML = routes[pathname] || "<h1>Page Not Found</h1>";
    };

Bul funkciya route siltemesine teń bolǵan **pathname** parametrin qabıl etedi hám sol arqalı **window.history.pushState()** tan paydalanıp sayt jazıwın ózgertedi.
Ekinshi qatardaǵı **rootDiv.innerHTML = routes[pathname]** kerekli bolǵan bettiń HTML'in kórsetiwdi buyıradı hám onday bet joq bolǵan jaǵdayda **Page Not Found** kórsetetuǵın boladı.

Házir, sizde link basılǵanda sayttı ózgertpesten, jańalamastan onın kontentin ózgertetuǵın, sayt jazıwın ózgertpeytuǵın funkcional router bar.
Biraq, ele bir problema bar. <-, -> belgiler basılǵanda sayt jazıwları ózgerip atır biraq kontentti qáte kórsetip atır. Bunı sheshiw ushın baǵanaǵı **popstate** event'inen paydalanamız:

    // Event listener for back/forward navigation
    window.addEventListener("popstate", () => {
      const currentPath = window.location.pathname;
      rootDiv.innerHTML = routes[currentPath] || "<h1>Page Not Found</h1>";
    });

### Nátiyjeni kóriw

Endi tolıq nátiyjeni kóriw ushın ápiwayı ǵana HTML file'dı browser'de ashıwdıń ózi jeterli emes. Onıń ornına [live-server](https://www.npmjs.com/package/live-server) package'ınan paydalanamız:

- **npm install live-server**
- **package.json** ishinde `"scripts": {"start": "live-server"}`
- `npm start`

![Firefox Browser](https://i.ibb.co/G52PPRr/image.png)

### Kemshilik

Eger **/contact**ke ótip turıp sayttı jańalap jibersek (refresh) yáki **http://127.0.0.1:8080/contact** qolda jazsaq **Cannot GET /contact** degen qátelikke dus kelemiz.

Bunnan bilip alıwǵa boladı - tek ǵana Vanilla Javascript'ten paydalanıp turıp tolıq funkciyanal bolǵan **router** jaratıw imkansız yáki qıyın:
![Firefox Browser](https://i.ibb.co/qnMFypX/image.png)
Joqarıdaǵı qátelikti durıslaw ushın server kerek boladı. Ol ushın **Express**ten paydalanıwımız múmkin (Qáleseńiz Python Flask, ózińizge baylanıslı).

1.  `npm install express`
2.  Express server jaratıw (server.js):

        const express = require('express');
        const path = require('path');

        const app = express();
        const PORT = process.env.PORT || 3000;

        // Serve static files from the "public" directory
        app.use(express.static(path.join(__dirname, 'public')));

        // Catch-all route to serve index.html for all other routes (for SPA)
        app.get('*', (req, res) => {
          res.sendFile(path.join(__dirname, 'public', 'index.html'));
        });

        app.listen(PORT, () => {
          console.log(`Server is running on http://localhost:${PORT}`);
        });

3.  File'lar jaylasıwın ózgertiw:
    - public degen folder jaratıń
    - index.html, about.html, contact.html, home.html hám app.js file'ların public folder'iniń ishine jaylastırıń
4.  Nátiyjeni kóriw: `node server.js`
    ![Firefox Browser](https://i.ibb.co/MNFQxVV/image.png)

Ulıwmalastırıp aytqanda, 0den router jazıw imkansız nárse emes, biraq onı tek ǵana taza JS arqalı qılıw problema bolıwı múmkin.

Bul article'diń originalı: https://blog.skay.dev/custom-spa-router-vanillajs

Bul article tolıqlıgınsha, birge-bir nusxalanıp, awdarmalanǵanı joq. Bir jerinde ózgertildi, bir jerinde taza zatlar qosıldı.

Router'diń tolıq kodı: https://github.com/uabdirasul/i-wrote-an-article/tree/main/spa-router-from-scratch

Qáte-kemshilikler bolsa ózgertiń:)
