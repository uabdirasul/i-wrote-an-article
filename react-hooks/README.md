# React Hook'ları

React'tı "React" qılǵan nárselerden biri bul —onıń **hook**'ları desek boladı. Olardı 2ge bóliwimiz múmkin, birewi onıń ózi menen keletuǵın, birewi qoldan islenetuǵın hook'lar.
Bul ret onıń ózi menen keletuǵın, basqasha qılıp aytqanda **built-in** hook'ların kórip shıǵamız.

## State hook'ları

**State** bul — ózinde **component** haqqında maǵlıwmat saqlaytuǵın object esaplanadı. Al, sol component ishinde state'lardı basqarıwǵa kómek beretuǵın funkciyalardı state hook'ları dep ataydı:

- **useState** hook'ı component'ke taza state qosıp beredi. Ol argument sıpatında eń birinshi kórsetiliwi kerek bolǵan maǵlıwmattı (by default) aladı hám eki elementten ibarat bolǵan **array** qaytarıp beredi: birinshisi state'tiń házirgi, ámeldegi maǵlıwmatı hám sol maǵlıwmattı jańalaytuǵın funkciya:

  ```js
  import { useState } from "react";

  function MyComponent() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  ```

  Joqarıdaǵı mısalda, `useState(0)` `count`'tı 0den baslaydı. `setCount` funkciyası bolsa onı jańalaydı. `useState` **array** qaytarǵanı ushın **array destructuring**|nan paydalanamız.

- **useReducer** hook'ın useState'tıń kúshlirek versiyası desek boladı. Onnan state'ler qattı quramalasıp ketkende paydalanıwǵa boladı. Ol taza state, góne state'ke baylanıslı bolǵanda yáki state bir neshe bólekten ibarat bolǵan jaǵdaylarda óz kúshin kórsetedi:

  ```js
  import React, { useReducer } from "react";

  function cartReducer(state, action) {
    switch (action.type) {
      case "add":
        return [...state, action.payload];
      case "remove":
        return state.filter((item) => item.id !== action.payload.id);
      default:
        return state;
    }
  }

  function ShoppingCart() {
    const [cart, dispatch] = useReducer(cartReducer, []);
    const addItem = (item) => {
      dispatch({ type: "add", payload: item });
    };

    const removeItem = (item) => {
      dispatch({ type: "remove", payload: item });
    };

    return (
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeItem(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={() => addItem({ id: 1, name: "Item 1", price: 9.99 })}>
          Add Item
        </button>
      </div>
    );
  }
  ```

  Bul mısalda onlayn magazinge uqsaǵan dástúrdiń kishi bólegi, "Корзина"ǵa tovar qosıw funkciyası kórsetilgen.
  Oǵan kóre, `action` túrine qarap taza state qaytaratuǵın, state hám action|dı argument sıpatında qabıllaytuǵın `cartReducer` funkciyası jaratılǵan. (Bul jerde action degende tovar menen júz beretuǵın hádiyse názerde tutılıp atır: tovardıń qosılıwı, óshiriliwi.)
  Keyin, cartReducer funkciyasınan paydalanıp cart state'in basqaratuǵın `useReducer` hook'ınan paydalanılǵan.
  Qosımsha, `cartReducer`ǵa tovar óshiriw hám qosıwdı buyıratuǵın `addItem` hám `removeItem` funkciyaları da qosılǵan.
  Hám aqırında, tovarlardı qosatuǵın, óshiretuǵın túymelerdi render qılatuǵın kod jazılǵan.

## Context hook'ları

**Context** component'ke **props**'lardan paydalanbastan turıp basqa component'lerden maǵlıwmat qabıl etiwge járdem beredi.

- **useContext** hook'ı component ushın context object'inen paydalanıwǵa imkan jaratadı.
  Tómendegi mısalda qanday qılıp useContext'ten paydalanıp dástúr temasın (aq, qara, dark, light) ózgertiw kodı kórsetilgen:

  ```js
  import React, { useContext } from "react";

  const ThemeContext = React.createContext("light");

  function ThemeButton() {
    const theme = useContext(ThemeContext);

    return (
      <button
        style={{
          background: theme === "dark" ? "black" : "white",
          color: theme === "dark" ? "white" : "black"
        }}
      >
        Toggle Theme
      </button>
    );
  }
  ```

  Bul mısalda dáslepki maǵlıwmatı `light`qa teń bolǵan context jarattıq hám `ThemeButton` component'i ishinde useContext hook'ınan paydalanıp context maǵlıwmatın aldıq.

## Ref hook'ları

React'ta state ózgerse, ol component'tıń tolıqlıǵınsha qaytadan render bolıwına sebep boladı. Bul jaqsı, biraq hárdayım emes. Deylik, maǵlıwmattı ózgertiwimiz kerek, biraq bul sebepli component qaytadan render bolmawı kerek. Bunday jaǵdayda ref hook'ınan paydalanıladı.

- **useRef** hook'ı component joq bolaman degenshe saqlanıp qalatuǵın, ózgeretuǵın ref object'in jaratıw imkanın beredi. Nátiyjede, ol object'ten componentti qaytadan render qılıp almastan, maǵlıwmat saqlaw hám alıwda paydalanıwǵa boladı. Hám jáne onnan **DOM** elementlerin belgilep alıwda da paydalanıladı.
  Tómendegi mısalda **input** elementin belgilep alıw kórsetilgen:

  ```js
  import React, { useRef } from "react";

  function InputWithFocus() {
    const inputRef = useRef();
    const handleClick = () => {
      inputRef.current.focus();
    };

    return (
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Focus Input</button>
      </div>
    );
  }
  ```

  Bul mısalda useRef hook'ı arqalı ref object'in jaratatuǵın, hám oǵan input elementin biriktiretuǵın **InputWithFocus** component'i jaratılǵan. Ol object'ten **Focus Input** túymesi basılǵanda input'qa focus beriwde paydalanılǵan.

  Keyingi mısalda bolsa ref object'ine maǵlıwmat júklew hám alıw kórsetilgen:

  ```js
  import React, { useRef } from "react";
  const UserComponent = () => {
    const userRef = useRef({ name: "", age: 0 });
    const updateUser = () => {
      userRef.current.name = "John Doe";
      userRef.current.age = 30;

      console.log("Updated User:", userRef.current);
    };

    return (
      <div>
        <h1>User Information</h1>
        <button onClick={updateUser}>Update User</button>
      </div>
    );
  };

  export default UserComponent;
  ```

  Bul mısalda bolsa, useRef hook'ı `userRef` objectin jaratıwda qollanılǵan, ol object'ke `name` hám `age` tárizli dáslepki maǵlıwmat kirgizilgen.
  `updateUser` funkciyası bolsa **userRef.current** ishinde maǵlıwmatlardı ózgertedi. Túyme basılǵanda object ishinde maǵlıwmatlar ózgeredi.
  Eń áhmiyetlisi, ol maǵlıwmattıń ózgeriwi component'tın qayta render bolıwına sebep bola almaydı. (userRef object'i ózgergende console'ǵa nátiyjeni shıǵarıw kodı da qosılǵan.)

- ref arqalı joqarıdaǵı component'ke maǵlıwmatlardıń hámmesin kórinetuǵın qılıwǵa boladı. **useImperativeHandle** hook'ı bolsa bolsa kórsetiletuǵın maǵlıwmatlardı basqarıwǵa kómek beredi, yaǵnıy biz qaysı maǵlıwmat kórsetiliwi, qaysı maǵlıwmat kórsetilmewi kerek ekenligin bildire alamız.
  Mısalı:

  ```js
  import React, { forwardRef, useImperativeHandle, useRef } from "react";
  const VideoPlayer = forwardRef((props, ref) => {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
      play: () => videoRef.current.play(),
      pause: () => videoRef.current.pause()
    }));
    return (
      <video ref={videoRef} width="400" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
    );
  });

  function App() {
    const videoPlayerRef = useRef();
    return (
      <div>
        <VideoPlayer ref={videoPlayerRef} />
        <button onClick={() => videoPlayerRef.current.play()}>
          Play Video
        </button>
        <button onClick={() => videoPlayerRef.current.pause()}>
          Pause Video
        </button>
      </div>
    );
  }
  export default App;
  ```

  Bul mısalda video player arqalı saytqa video qosıw kodı kórsetilgen. Onda 2 component bar: bas (ata) `App` component'i hám onıń ishinde paydalanılatuǵın `VideoPlayer` component'i.

  `useImperativeHandle`'dı paydalanıw ushın ol component'ke `forwardRef` beriliwi hám hook ishinde ata component'tegi useRef, target sıpatında beriliwi kerek.
  Hook'qa qaraytuǵın bolsaq ol jerde `play` hám `pause`'lar jazılǵan, áne usınday etip qaysı metodlar joqarıdaǵı ata component'te kórinetuǵın bolıwı kerek ekenin belgilewimiz múmkin.
  useImperativeHandle'di paydalanıwdan keletuǵın payda bul — kerek emes nárselerdiń joqarıdaǵı component'lerge tarqap ketpewi esaplanadı. Jáne de, bul arqalı encapsulation|ǵa yaǵnıy hár bir component tek ózine kerek nárseler menen islesiwi kerek degen "qaǵıydaǵa" boysınǵan bolamız.

## Effect hook'ları

Component'tiń render processinen tısqarı júz beretuǵın hádiyselerge **side effect** delinedi. Oǵan API|dan maǵlıwmat alıp keliw, DOM (HTML)'dı ózgertiw, qandaydur **event**'ten paydalanıwlar kiredi. Effect hook'ları usınday hádiyselerdi ámelge asırıw wazıypasın atqaradı.

- **useEffect** hook'ı joqarıdaǵı wazıypalardı atqaradı.
  Mısalı:

  ```js
  import React, { useState, useEffect } from "react";

  function DataFetcher() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://api.example.com/data")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);

    return (
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
  ```

  Bul kodda side effect, API|dan maǵlıwmat alıp keliw kodı kórsetilgen.

  **useEffect** hook'ı 2 túrli argumentti qabıl etedi: - Callback funkciya — qanday side effect orınlanıwın belgileydi - Beriliwi shárt emes bolǵan dependency array — usı effect qashan orınlanıwın belgileydi.

  Effect qashan orınlanıwın belgilewshi dependency array'diń jaǵdayları: - (**[]**), dependency array berilmese, sol effect hár bir render'den keyin tákirarlanadı - (**[]**) bos bolǵan dependency array berilse, effect tek bir márte — component júklengende orınlanadı. - (**[dep1, dep2]**) dependency'leri bar bolǵan array berilse, effect sol dependency'lardan birewi jańalanǵanda orınlanadı.

  **useEffect** ishinde jaratılǵan event'ti keyinshelik óshiriw kerek bolsa tómendegidey, return funkciyasın jazıw kerek boladı:

  ```js
  import React, { useEffect } from "react";

  function EventListenerComponent() {
    useEffect(() => {
      const handleResize = () => {
        console.log("Window resized");
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return <div>Resize the window and check the console!</div>;
  }
  ```

  Bunday funkciyalar **cleanup functions** dep ataladı.
  Dástúrlewde **memory leak** degen túsinik bolıp, ol dástúr basında kerekli bolǵan maǵlıwmat, dástúr aqırlarında kerek bolmay qalǵan jaǵdayda da saqlanıp qalıwına aytıladı. Bunday maǵlıwmatlar tazalanıwı kerek. **cleanup functions** usındaylardı tazalaw ushın kerek boladı.

* **useLayoutEffect** hook'ı **useEffect** hook'ına júda uqsas, bir parqı bul — olardıń hár túrli waqıtta orınlanıwında. **useLayoutEffect** saytta HTML elementleri render qılınǵan biraq ele style'lar payda bolmaǵan waqıtta orınlanadı. **useLayoutEffect** tiykarınan layout'tı ólshew hám ózgeris kiritiw ushın qollanıladı.
  Mısalı:

  ```js
  import React, { useLayoutEffect, useRef, useState } from "react";

  const LayoutEffectExample = () => {
    const [boxHeight, setBoxHeight] = useState(0);
    const boxRef = useRef(null);
    useLayoutEffect(() => {
      if (boxRef.current) {
        setBoxHeight(boxRef.current.getBoundingClientRect().height);
      }
    }, []);

    return (
      <div>
        <div
          ref={boxRef}
          style={{ height: "100px", background: "lightblue", margin: "10px" }}
        >
          Box
        </div>
        <div style={{ height: boxHeight, background: "lightcoral" }}>
          This div's height is equal to the box above
        </div>
      </div>
    );
  };

  export default LayoutEffectExample;
  ```

  Bul kodda bir elementtiń biyikligin basqa bir elementtiń biyikligine salıstırǵan halda ózgertiw kórsetilgen.
  Bul kodtıń máqseti — saytqa ele style'lar berilmey turıp, elementtiń biyikligin ózgertiw. Bul jerde **useEffect**'tı paydalansaq kózlengen nátiyjege erise almawımız anıq.

- **useInsertionEffect** hook'ı **useLayoutEffect**ke uqsaydı. **useInsertionEffect**ten saytqa tazadan style qosıwda hám olardı hárqanday render'den aldın kórsetiwde paydalanadı:

  ```js
  import React, { useInsertionEffect } from "react";
  const DynamicStyleComponent = () => {
    useInsertionEffect(() => {
      const style = document.createElement("style");
      style.textContent = `.dynamic {
        color: blue;
      }`;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }, []);

    return <div className="dynamic">This text is blue!</div>;
  };
  ```

## Performance hook'ları

> **cache** — júklew tezligin asırıw ushın paydalanılatuǵın maǵlıwmattı waqtınsha saqlaw usılı esaplanadı.

**Re-render** yaǵnıy qaytadan render qılıwdı optimizaciya qılıwdıń bir jolı bul —kereksiz basqıshlardan qutılıw esaplanadı. Mısalı: qandaydur úlken sanlardı bir-birine kóbeytiw kerek. Hám sol komponent ishinde state ózgerdi, nátiyjede sol kóbeymeni qaytadan ámelge asırıwǵa tuwra keledi, bul bolsa kóp kompyuter resursıń sarıplawı múmkin. Onıń ornına **performance** hook'ı arqalı sol kóbeyme nátiyjesin saqlap, **cache**lep alıwımız múmkin, bunıń arqasında sayt re-render bolǵanda ol kóbeymeni qaytadan esaplap otırmay, odan aldınǵı nátiyjeni qaytarıp beredi.

- **useMemo** hookı járdeminde **performance**ti jaqsılaw múmkin. Onıń sintaksı tómendegishe boladı:

  const cachedValue = useMemo(calculateValue, dependencies)

  **useMemo**ǵa 2 túrli argument beriledi: **callback** funkciya hám **dependency array**.

  1**callback** sıpatında sol biz **cache**lep yaǵnıy saqlap qalmaqshı bolǵan maǵlıwmattı esaplaytuǵın "úlken", kóp resurs sarıplaytuǵın funkciya beriledi. Bul funkciya maǵlıwmatı birinshi esaplanadı, soń **re-render** bolǵanda qaytadan esaplamay sol **value**di qaytarıp beredi.

  **Dependency array** ǵa berilgen **value**lar ózgerse **callback** funkciya qaytadan esaplanadı, sebebi **dependency array**daǵı **value**lar sol nátiyjeni esaplawda kerek bolǵan **value**lar esaplanadı. Soń joqarıdaǵilar qaytadan tákirarlanadı:

  ```js
  import React, { useState, useMemo } from 'react';

  function SortedList() {
  const [sortOrder, setSortOrder] = useState('asc');
  const names = ['Johń, 'Alice', 'Bob', 'Zará, 'Eve', 'Oscar', 'Charlie', 'Lily'];

  const sortedNames = useMemo(() => {
    console.log('Sorting names...');
    const sorted = [...names].sort((a, b) => {
      if (sortOrder === 'asc') return a.localeCompare(b);
      return b.localeCompare(a);
    });
    return sorted;
  }, [sortOrder]);

  return (
    <div>
      <h2>Sorted List</h2>
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Toggle Sort Order (Currently: {sortOrder})
      </button>
      <ul>
        {sortedNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
  }

  export default SortedList;
  ```

  Bul kodta **useMemo**dan paydalanıw mısalı berilgen. Oǵan kóre, bizde adam atlarınan ibarat **array** bar hám onı paydalanıwshıǵa álipbe izbe-izliginde ya joqarıdan-tómenge, ya tómennen-joqarıǵa tártiplep kórsetiw kerek. Durıs bul mısalda adam atları az, sonıń ushın **useMemo**dan paydalanbasaq ta boladı biraq, mısal retinde adam atları 1000+ dep oylaymız. Bunshama adam atların álipbe izbe-izliginde joqarı-tómen ya kerisinshe tártiplew kompyuterden kóp resurs talap etedi. Usılayınsha dástúrimiz tezligin azǵana bolsa da asırıwımız múmkin.

- **useCallback** hookınıń **useMemo**dan parqı bul — **useCallback** funkciyadan shıqqan nátiyjeni emes, funkciyanıń ózin **cache**leydi yaǵnıy saqlaydı.

  Qullası, komponent ishinde **cache**leyjaq bolǵan funkciyamızǵa baylanıslı bolmaǵan qandaydur **state**, yáki hárqanday **state** ózgerse de sol komponent ishindegi funkciyalardıń barlıǵı qaytadan jaratıladı. Usınıń aldın alıw ushın **useCallback**tan paydalanıladı.

  Bul jerde túsiniksiz bolıwı múmkin bolǵan nárse: funkciya **cache**lenedi bunıń nátiyjesinde komponent **re-render** bolǵanda hámme funkciyalar qaytadan jaratılıp atırǵanda usı **cache**lengen funkciyaǵa heshnárse bolmaydı yaǵnıy qaytadan jaratılmaydı. Biraq sol funkciya ishindegi wazıypa **dependency array** daǵı **value** ózgerse qaytadan esaplana beredi:

  ```js
  import React, { useState, useCallback } from 'react';

  function SortedList() {
  const [sortOrder, setSortOrder] = useState('asc');
  const names = ['Johń, 'Alice', 'Bob', 'Zará, 'Eve', 'Oscar', 'Charlie', 'Lily'];

  const getSortedNames = useCallback(() => {
    console.log('Sorting names...');
    return [...names].sort((a, b) => {
      if (sortOrder === 'asc') return a.localeCompare(b);
      return b.localeCompare(a);
    });
  }, [sortOrder, names]);

  return (
    <div>
      <h2>Sorted List</h2>
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Toggle Sort Order (Currently: {sortOrder})
      </button>
      <ul>
        {getSortedNames().map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
  }

  export default SortedList;
  ```

  Bul mısal **useMemo** mısalına uqsas. Bir parqı bul jerde maǵlıwmat **cache**lenbey biraq sol maǵlıwmattı esaplaytuǵın funkciya **cache**lenedi. Nátiyjede **re-render** bolǵan waqıtta eger **dependency array**da heshnárse ózgermegen bolsa funkciyanı qaytadan jaratpastan **cache**lengen variantın qaytaradı.

## Qosımsha hook'lar

- **React DevTools** bul — React dástúrlerin **debug** qılıwǵa járdem beretuǵın tool esaplanadı. Sol tool arqalı state'lardı, componentlerdi, react'qa baylanıslı derlik barlıq dástúrdegi zatlardı kóre alamız. Oǵan component haqqındaǵı maǵlıwmattı óz qolımız benen kiritiw ushın **useDebugValue** hook'ınan paydalanamız:

  ```js
  import { useState, useDebugValue } from "react";
  function useCount(initialValue = 0) {
    const [count, setCount] = useState(initialValue);
    useDebugValue(count > 5 ? "High Count" : "Low Count");
    return [count, setCount];
  }

  export default useCount;
  ```

  Bul kodta **useDebugValue** hook'ınan paydalanıw mısalı kórsetilgen, oǵan kóre, DevTools'ta **debugging** qılıp atırǵanda **count**tiń ózimiz belgilegen túrin kórsetedi.

- **Accessibility** bul — sayttıń bir sıpatı bolıp, oǵan kóre, sayt hámme ushın paydalanıw ańsat bolıwı kerek, hátteki imkaniyatı sheklengen adamlarǵa da. Sayttıń usı sıpatın jaqsılaw ushın kerekli bolǵan jumıslar qılınıwı kerek.
  Sol "jumıs"lardan biri HTML'degi **input** hám **label** elementleri ushın **unique**, yaǵnıy tákirarlanbas **ID** beriw, bul arqalı **accessibility** jaqsılanadı. Bug'an erisiw ushi'n React'ta **useId** hook'i' bar:

  ```js
  import React, { useId } from "react";

  function inputWithUniqueID() {
    const id = useId();

    return (
      <div>
        <label htmlFor={id}>Enter your name:</label>
        <input id={id} type="text" />
      </div>
    );
  }
  ```

Bul artikldi jazi'wda to'mendegi dereklerden paydalani'ldi':

- https://react.dev/reference/react/hooks
- https://medium.com/@AbidKazmi/all-react-hooks-in-one-short-4b0ed4b5a6e4
- https://daily.dev/blog/react-hooks-explained-simply

Bul article tolıqlıgınsha, birge-bir nusxalanıp, awdarmalanǵanı joq. Bir jerinde ózgertildi, bir jerinde taza zatlar qosıldı.

Qáte-kemshilikler bolsa ózgertiń:)
