# Ules — Copy Deck (Calm & Premium)

Finalized wording suggestions for every section of the site, in **English, Russian, and Kazakh**. Suggestions only — no code changed. Keys map to `lib/i18n.ts`.

## The tone we're writing for

**Calm & Premium — quietly confident.** The brief: keep the restrained, elegant voice, but make "calm" read as *self-assured*, not *timid*.

- **No hedges.** Cut "we think," "a little," self-shrinking "немного / аздап" where they weaken the idea.
- **Active voice, with a doer.** "We rescue / brings to you" — not "gets rescued / спасается / сақталады."
- **Positive framing.** State the waste problem once, plainly, then move to the calm solution. **No bins, no trash, no guilt** ("мусорное ведро," "қоқысқа" — avoided on purpose).
- **Elegant, not loud.** No exclamation marks or slang on the consumer page. The `/business` page stays one notch more concrete (owners want trust + numbers).
- **RU & KZ: polite "вы" throughout** — fixes the current ты/вы mixing.

Lines already meeting this bar are marked **— keep**.

Items marked **🔴 fix** are genuine grammar/consistency errors — apply these even if you skip the styling.

---

# 🔴 Critical fixes (do these regardless)

| Key | Lang | Now | Fix | Problem |
|---|---|---|---|---|
| `home.mission.h2a` | KZ | …бірі ешқашан **жемейді**. | …бірі ешқашан **желінбейді**. | `жемейді` = "doesn't eat" (active). Food can't eat — needs passive. |
| `home.features.f1.p` | KZ | …бойынша **сортылады**. | …бойынша **сұрыптап көрсетеді**. | `сортылады` is not a Kazakh word. |
| `home.team.members[2].role` | KZ | **Негізші** · … | **Негізін қалаушы** · … | `Негізші` isn't a word; "founder" = `Негізін қалаушы`. |
| `home.team.members[*].role` | EN/RU/KZ | EN "Founding Engineer" vs RU "Сооснователь" vs KZ "Негізгі инженер" | Unify to **Co-founder** across all three (see Team section). | The three languages describe different roles for the same people. |
| `home.mission.h2a` | RU | Каждый третий **приём пищи** так и не съедается. | Каждое третье **блюдо** так и остаётся несъеденным. | "приём пищи… не съедается" is clumsy/imprecise. |
| RU ты→вы | RU | `consumerH3`, `features.f1.h3`, hero imperatives | Convert to **вы**. | Voice currently slips between ты and вы. |

---

# Navigation (`nav`)

Short labels — mostly keep. One change:

| Key | EN | RU | KZ |
|---|---|---|---|
| `fees` | Fees — keep | Комиссии → **Тарифы** | Комиссиялар — keep |

Everything else in `nav` — **keep**.

---

# HOME — Hero (`home.hero`)

### `kicker`
- **EN:** A food-rescue app from Kazakhstan **— keep** *(optional: "A food-rescue app, made in Kazakhstan.")*
- **RU:** Приложение по спасению еды из Казахстана **— keep**
- **KZ:** Қазақстандық тағам сақтау қолданбасы → **Қазақстанда жасалған тағам құтқару қолданбасы**

### `h1a` / `h1b`
- **EN:** Good food. / Rescued daily. **— keep** (already calm-premium)
- **RU:** Хорошая еда. / ~~Спасается каждый день.~~ → **Спасаем каждый день.** *(active — we save, with pride)*
- **KZ:** Жақсы тағам. / ~~Күнде сақталады.~~ → **Күн сайын құтқарамыз.** *(active; `құтқару` = rescue, warmer than `сақтау` = store)*

### `lede`
- **EN:** Local restaurants in Astana and Almaty prepare more than they sell. At the end of the day, Ules brings that fresh surplus to you — thoughtfully priced, up to 70% off the menu.
- **RU:** Рестораны Астаны и Алматы готовят больше, чем продают. В конце дня Ules приносит вам эту свежую еду — по справедливой цене, со скидкой до 70% от меню.
- **KZ:** Астана мен Алматының мейрамханалары сататынынан көбірек дайындайды. Күн соңында Ules сол жаңа тағамды сізге жеткізеді — әділ бағамен, мәзірден 70%-ға дейін арзан.

### Stats
- `stat1/2/3` + labels — **keep**, except:
- `stat3Label`: EN "+ Android, soon" → **"Android coming soon"** · RU "+ Android, скоро" → **"Android уже скоро"** · KZ "+ Android, жуырда" → **"Android жуырда"**

### Phone mockup strings
- All **keep**, except `phoneMealsSaved` KZ "≈7 тағам сақталды" → **"≈7 тағам құтқарылды"** (match the rescue verb).

---

# HOME — Mission (`home.mission`)

### `h2a` / `h2b`
- **EN:** A third of all food goes uneaten. / We believe that's worth changing.
  - *(replaces the hedging "We think that's worth fixing." — "We believe" is quiet conviction, not a hedge.)*
- **RU:** Каждое третье блюдо так и остаётся несъеденным. / Мы уверены: это можно изменить.
- **KZ:** Әр үш тағамның бірі ешқашан желінбейді. / Біз мұны өзгертуге болады деп сенеміз. *(`сенеміз` = we believe, warmer than `санаймыз`)*

### `p1`
- **EN / RU / KZ — keep.** Already warm and well-paced.

### `p2`
- **EN — keep.** *(Optional: "a little less carbon" is fine and honest for this calm tone.)*
- **RU:** …немного меньше углерода. → **…чуть меньше следа на планете.** *(softer than the technical "углерода")*
- **KZ:** …аздап азырақ көміртегі. → **…планетаға аздап жеңілдік.** *(warmer than the technical "көміртегі")*

---

# HOME — Audiences (`home.audiences`)

### `consumerH3`
- **EN:** ~~Find dinner. Save the planet a little.~~ → **Find dinner. Help the planet along the way.** *(drops the self-shrinking "a little")*
- **RU:** ~~Найди ужин. Сохрани планету немного.~~ → **Найдите ужин — а заодно поможете планете.**
- **KZ:** Кешкі ас табыңыз. Планетаны сақтаңыз. → **Кешкі асыңызды табыңыз — әрі планетаға көмектесесіз.**

### `consumerP` — **keep** (all three; RU/KZ already вы-form).

### `consumerList` (last item warmer)
- **EN:** "Track your impact over time" → **"See your impact add up over time"**
- **RU:** "Отслеживайте свой вклад" → **"Смотрите, как растёт ваш вклад"**
- **KZ:** "Үлесіңізді бақылаңыз" → **"Үлесіңіздің өсуін көріңіз"**
- Other list items — **keep**.

### `businessH3` / `businessP` / `businessList` — **keep** (business-side, calm-concrete is right).

### `businessLink`
- **EN:** "Learn more about the business side →" → **"More for restaurants →"**
- **RU:** "Узнать больше о бизнес-стороне →" → **"Подробнее для ресторанов →"**
- **KZ:** "Бизнес жағы туралы толығырақ →" → **"Мейрамханалар үшін толығырақ →"**

---

# HOME — Features (`home.features`)

### `eyebrow` — **keep** (all).

### `h2`
- **EN — keep:** Designed for the way people actually shop for food.
- **RU:** ~~Создано так, как люди на самом деле покупают еду.~~ → **Создано под то, как люди действительно покупают еду.**
- **KZ:** ~~Адамдардың шын мәнінде тағам сатып алу жолына бейімделген.~~ → **Адамдар тағамды шынымен қалай сатып алса, солай жасалған.**

### `f1`
- `h3` **EN — keep**; **RU** ~~Смотри…~~ → **Смотрите, что рядом — прямо сейчас.**; **KZ — keep** (Жаныңыздағыны дәл қазір көріңіз).
- `p` **EN — keep**. **RU 🔴** (dangling gerund) → **Лента показывает, что доступно сегодня, и сортирует по расстоянию и времени выдачи. Пакеты, которые скоро закончатся, отмечены отдельно.** **KZ 🔴** (`сортылады`) → **Басты лента бүгін қолжетімді тағамдарды қашықтық пен алу терезесі бойынша сұрыптап көрсетеді. Таусылуға жақын сөмкелер бөлек белгіленеді.**
- `points` — **keep** (all).

### `f2` — **keep** (all three; reassuring and clear already).

### `f3`
- `h3` **EN:** "Track what you've actually saved" — **keep** (calm). RU/KZ — **keep**.
- `p` **EN — keep** ("watch them tick up" is a lovely calm detail).
- `points` — **keep**.

### Phone strings — **keep** (all).

---

# HOME — Restaurant callout (`home.biz`)

- `eyebrow`, `h2`, `p1`, `p2`, `link` — **keep** (all three). This block already reads calm and inviting.

---

# HOME — Team (`home.team`)

### `eyebrow` / `h2` — **keep** (all). "A small team in Astana with one big goal." is a strong, calm line.

### `subtitle` (re-tone the cold ending)
- **EN:** We're builders, designers, and people who love food. We started Ules because good meals deserve to be enjoyed — even at the very end of the day.
  - *(drops the flat "a problem worth solving with software"; no guilt/"go to waste" imagery.)*
- **RU:** Мы — разработчики, дизайнеры и люди, влюблённые в еду. Мы создали Ules, потому что хорошая еда заслуживает того, чтобы её попробовали — даже в самом конце дня.
- **KZ:** Біз — жасаушылар, дизайнерлер және тағамды сүйетін адамдармыз. Ules-ті жасадық, өйткені жақсы тағам күн соңында да өз дәмін табуға лайық.

### Member roles 🔴 (unify to **Co-founder** across all three)
| Person | EN | RU | KZ |
|---|---|---|---|
| Timur | Co-founder · Engineering | Сооснователь · Инженерия | Негізін қалаушы · Инженерия |
| Almat | Co-founder · Engineering | Сооснователь · Инженерия | Негізін қалаушы · Инженерия |
| Yera | Co-founder · Operations & Growth | Сооснователь · Операции и рост | Негізін қалаушы · Операциялар және өсу |

### Member bios — **keep** (all three; warm, specific, on-tone).

---

# BUSINESS — Hero (`business.hero`)

### `kicker` / `h1a` / `h1b` — **keep** (all). The slightly more formal business voice fits here.

### `lede`
- **EN:** …we take a small fee per bag sold, and **the rest is yours.** *(replaces "you keep the rest")*
- **RU — keep** ("остальное ваше" already does this).
- **KZ — keep** ("қалғаны сіздікі" already does this).

### Stats / float labels — **keep** (all).

---

# BUSINESS — How it works (`business.how`)

- `eyebrow`, `h2`, all four `steps` — **keep** (all three). Clear, calm, and friendly already.

---

# BUSINESS — Dashboard (`business.dashboard`)

- `eyebrow`, `h2`, `subtitle`, `d1`, `d2`, phone strings — **keep** (all three). "Designed for restaurant owners, not data analysts." is exactly the right calm-confident note.

---

# BUSINESS — Fees (`business.pricing`)

### `eyebrow` / `h2` / `items` — **keep** (all). "Straightforward, no surprises." is perfect for pricing.

### `footnote` (warmer, concrete)
- **EN:** For example: you list a ₸2,000 bag, a customer buys it, and ₸1,700 goes to you. The ₸300 covers running the platform.
- **RU:** Пример: вы выставляете пакет за ₸2 000, клиент покупает его, и ₸1 700 поступают вам. ₸300 идут на работу платформы.
- **KZ:** Мысалы: ₸2 000 сөмке шығарасыз, клиент сатып алады, ал ₸1 700 сізге түседі. ₸300 платформаның жұмысына жұмсалады.

---

# BUSINESS — FAQ (`business.faq`)

- `eyebrow`, `h2`, all `items` — **keep** (all three). Honest and helpful — already on-tone.
- One soft optional: **EN Q1 ending** "Ules probably isn't the right fit." → **"Ules probably isn't the best match for you."** (gentler).

---

# BUSINESS — Contact (`business.contact`)

### `h2`
- **EN — keep:** Get in touch — we'd love to chat.
- **RU:** Напишите нам — рады пообщаться. → **Напишите нам — будем рады пообщаться.**
- **KZ:** Хабарласыңыз — сүйсіне сөйлесеміз. → **Хабарласыңыз — әңгімелесуге қуана қосыламыз.** *(`сүйсіне сөйлесеміз` is unidiomatic)*

### `p` / `backLink` — **keep** (all). "We're a small team and we read every email." is a lovely, calm human touch.

---

# Footer (`footer`)

- `tagline` — **keep** (all). "Cooked in Astana, served everywhere." is a great calm line.
- All columns, legal links, copyright, languages — **keep**.

---

# What to apply, in order

1. **Critical fixes** — the 🔴 table at the top (KZ grammar, unified team roles, RU "приём пищи" + ты→вы).
2. **The four highest-weight re-tones** — hero `lede`, mission `h2`, team `subtitle`, pricing `footnote`. These carry most of the page's emotional weight.
3. **Active-voice hero/mission verbs** in RU & KZ (`Спасаем` / `Күн сайын құтқарамыз`).
4. The remaining small polish items — apply as time allows.

Everything not listed here was reviewed and left as-is on purpose — it already fits the Calm & Premium voice.
