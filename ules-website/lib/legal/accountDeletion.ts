import type { LocalizedLegalDoc } from '@/lib/legal/types'

// Public account-deletion page required by the Google Play Data safety form
// ("URL для запроса на удаление аккаунта"). Google checks three things: that
// the page names the app and the developer as the store listing does, that the
// deletion steps are prominent and step-by-step, and that it states which data
// is deleted, which is retained and for how long. Keep all three intact.
//
// The two lists below describe what supabase/functions/delete-account actually
// does in the mobile-apps repo. If you reword them, keep them true.
//
// Retention figures confirmed by the business on 2026-09-16: five years for the
// anonymised order ledger (RK accounting/tax retention), thirty days for backup
// rotation. They are a public commitment — do not change them unilaterally.
//
// This page covers CUSTOMER accounts only. Ules Business needs its own: for a
// partner the same function refuses with HTTP 409 while orders are still open,
// and deleting the account removes the storefront and its listings.

const ru: LocalizedLegalDoc['ru'] = [
  { t: 'h1', text: 'Удаление аккаунта и связанных с ним данных' },
  {
    t: 'lede',
    text: 'Приложение **Ules** · Разработчик и оператор персональных данных: ТОО «КАДКАЗ», БИН 260440025903, Республика Казахстан.',
  },
  {
    t: 'p',
    text: 'На этой странице описано, как удалить аккаунт в приложении Ules, какие данные при этом удаляются безвозвратно, какие сохраняются и в течение какого срока.',
  },

  { t: 'h2', text: 'Способ 1. Удаление в приложении' },
  { t: 'p', text: 'Самый быстрый способ — аккаунт удаляется сразу, без ожидания обработки заявки.' },
  {
    t: 'steps',
    items: [
      'Откройте приложение Ules и войдите в свой аккаунт.',
      'Перейдите на вкладку **«Профиль»**.',
      'Выберите пункт **«Настройки конфиденциальности»**.',
      'Нажмите **«Удалить аккаунт»**.',
      'Подтвердите действие вводом пароля от аккаунта и нажмите **«Удалить аккаунт»**.',
    ],
  },
  {
    t: 'note',
    text: '**Действие необратимо.** Восстановить удалённый аккаунт или его содержимое невозможно. Если на момент удаления у вас есть незавершённые заказы, они будут автоматически отменены, а боксы возвращены партнёру.',
  },

  { t: 'h2', text: 'Способ 2. Запрос по электронной почте' },
  {
    t: 'p',
    text: 'Если у вас нет доступа к приложению (например, устройство утеряно или приложение удалено), отправьте запрос на удаление аккаунта на адрес admin@ules.business.',
  },
  {
    t: 'card',
    blocks: [
      { t: 'h3', text: 'Что указать в письме' },
      {
        t: 'ul',
        items: [
          'Тема письма: **«Удаление аккаунта Ules»**.',
          'Фамилия и имя, указанные в аккаунте.',
          'Адрес электронной почты или номер телефона, на который зарегистрирован аккаунт.',
        ],
      },
      {
        t: 'p',
        text: 'Запрос обрабатывается в срок до **30 календарных дней** с момента получения. Для защиты от удаления чужого аккаунта мы можем запросить дополнительное подтверждение личности.',
      },
    ],
  },

  { t: 'h2', text: 'Какие данные удаляются' },
  { t: 'p', text: 'Удаляются безвозвратно в момент удаления аккаунта:' },
  {
    t: 'table',
    head: ['Данные', 'Что именно'],
    rows: [
      ['Учётная запись', 'Имя, адрес электронной почты, номер телефона, пароль'],
      ['Фотография профиля', 'Загруженный аватар удаляется из файлового хранилища'],
      ['Избранное', 'Все сохранённые боксы и заведения'],
      ['Отзывы и оценки', 'Все оставленные вами отзывы и рейтинги партнёров'],
      ['Незавершённые заказы', 'Сначала отменяются — боксы возвращаются в наличие партнёра, — затем удаляются'],
      ['Отменённые и отклонённые заказы', 'Удаляются полностью'],
      ['Статистика', 'Спасено еды, сэкономлено денег, личные цели'],
      ['Push-уведомления', 'Токен устройства, по которому отправлялись уведомления'],
    ],
  },

  { t: 'h2', text: 'Какие данные сохраняются' },
  {
    t: 'p',
    text: 'После удаления аккаунта сохраняются **только завершённые (полученные) заказы**, и только в **обезличенном виде**: связь заказа с вашей личностью удаляется, в записи не остаётся ни имени, ни адреса электронной почты, ни номера телефона. По такой записи невозможно установить, кто оформлял заказ.',
  },
  {
    t: 'table',
    head: ['Что сохраняется', 'Основание и срок'],
    rows: [
      [
        'Обезличенные записи о завершённых заказах: сумма заказа, сервисный сбор, комиссия платформы, сумма выплаты партнёру, название бокса и заведения',
        'Необходимы для бухгалтерской и налоговой отчётности и для расчётов с партнёрами. Срок хранения: **5 лет**, в соответствии с законодательством Республики Казахстан.',
      ],
      [
        'Резервные копии баз данных',
        'Создаются автоматически и хранятся в защищённой инфраструктуре на территории Республики Казахстан. Удалённые данные исчезают из резервных копий в течение **30 дней** и не восстанавливаются в рабочую систему.',
      ],
    ],
  },

  { t: 'h2', text: 'Контакты' },
  {
    t: 'address',
    lines: [
      'ТОО «КАДКАЗ», БИН 260440025903',
      'Республика Казахстан, г. Астана, мкр. НҰРА, Жилой массив Комсомольский, ул. Жұбан Ана, дом 8, кв. 7',
      'Электронная почта: admin@ules.business',
    ],
  },
  {
    t: 'footnote',
    text: 'Обработка персональных данных осуществляется в соответствии с Политикой конфиденциальности платформы Ules: https://ules.business/legal/privacy/',
  },
]

const en: LocalizedLegalDoc['en'] = [
  { t: 'h1', text: 'Account and data deletion' },
  {
    t: 'lede',
    text: '**Ules** app · Developer and data controller: ТОО «КАДКАЗ», BIN 260440025903, Republic of Kazakhstan.',
  },
  {
    t: 'p',
    text: 'This page explains how to delete your Ules account, which data is permanently erased, which data is retained, and for how long.',
  },

  { t: 'h2', text: 'Option 1. Delete from inside the app' },
  { t: 'p', text: 'The fastest route — the account is removed immediately, with no request to process.' },
  {
    t: 'steps',
    items: [
      'Open the Ules app and sign in to your account.',
      'Go to the **Profile** tab.',
      'Open **Privacy Settings**.',
      'Tap **Delete Account**.',
      'Confirm by entering your account password, then tap **Delete Account**.',
    ],
  },
  {
    t: 'note',
    text: '**This cannot be undone.** A deleted account and its contents cannot be restored. Any orders still open at that moment are cancelled automatically and the boxes are returned to the partner’s stock.',
  },

  { t: 'h2', text: 'Option 2. Request deletion by email' },
  {
    t: 'p',
    text: 'If you cannot access the app — for example, the device was lost or the app was uninstalled — send a deletion request to admin@ules.business.',
  },
  {
    t: 'card',
    blocks: [
      { t: 'h3', text: 'What to include' },
      {
        t: 'ul',
        items: [
          'Subject line: **“Ules account deletion”**.',
          'The first and last name on the account.',
          'The email address or phone number the account is registered with.',
        ],
      },
      {
        t: 'p',
        text: 'Requests are processed within **30 calendar days** of receipt. We may ask for additional proof of identity to prevent someone deleting an account that is not theirs.',
      },
    ],
  },

  { t: 'h2', text: 'Data that is deleted' },
  { t: 'p', text: 'Permanently erased when the account is deleted:' },
  {
    t: 'table',
    head: ['Data', 'Details'],
    rows: [
      ['Account', 'Name, email address, phone number, password'],
      ['Profile photo', 'The uploaded avatar is removed from file storage'],
      ['Favourites', 'All saved boxes and stores'],
      ['Reviews and ratings', 'Every review and rating you left for a partner'],
      ['Open orders', 'Cancelled first — which returns the boxes to the partner’s stock — then deleted'],
      ['Cancelled and rejected orders', 'Deleted in full'],
      ['Statistics', 'Food saved, money saved, personal goals'],
      ['Push notifications', 'The device token used to send notifications'],
    ],
  },

  { t: 'h2', text: 'Data that is retained' },
  {
    t: 'p',
    text: 'Only **completed (collected) orders** are retained, and only in **anonymised form**: the link between the order and your identity is removed, so the record holds no name, email address or phone number. It is not possible to tell from such a record who placed the order.',
  },
  {
    t: 'table',
    head: ['Retained', 'Basis and retention period'],
    rows: [
      [
        'Anonymised records of completed orders: order amount, service fee, platform commission, partner payout, box and store name',
        'Required for accounting and tax reporting and for settlements with partners. Retention period: **5 years**, in accordance with the legislation of the Republic of Kazakhstan.',
      ],
      [
        'Database backups',
        'Created automatically and stored on secured infrastructure within the Republic of Kazakhstan. Deleted data ages out of backups within **30 days** and is never restored into the live system.',
      ],
    ],
  },

  { t: 'h2', text: 'Contact' },
  {
    t: 'address',
    lines: [
      'ТОО «КАДКАЗ», BIN 260440025903',
      '8–7 Zhuban Ana St., Komsomolsky residential area, NURA district, Astana, Republic of Kazakhstan',
      'Email: admin@ules.business',
    ],
  },
  {
    t: 'footnote',
    text: 'Personal data is processed in accordance with the Ules Privacy Policy: https://ules.business/legal/privacy/',
  },
]

const kz: LocalizedLegalDoc['kz'] = [
  { t: 'h1', text: 'Аккаунтты және онымен байланысты деректерді жою' },
  {
    t: 'lede',
    text: '**Ules** қосымшасы · Әзірлеуші және дербес деректер операторы: ТОО «КАДКАЗ», БСН 260440025903, Қазақстан Республикасы.',
  },
  {
    t: 'p',
    text: 'Бұл бетте Ules қосымшасындағы аккаунтты қалай жою керегі, бұл кезде қандай деректер қайтарымсыз жойылатыны, қандай деректер сақталатыны және қанша мерзімге сақталатыны сипатталған.',
  },

  { t: 'h2', text: '1-әдіс. Қосымша арқылы жою' },
  { t: 'p', text: 'Ең жылдам жол — аккаунт өтінімді өңдеуді күтпестен, бірден жойылады.' },
  {
    t: 'steps',
    items: [
      'Ules қосымшасын ашып, аккаунтыңызға кіріңіз.',
      '**«Профиль»** қыстырмасына өтіңіз.',
      '**«Құпиялылық баптаулары»** бөлімін таңдаңыз.',
      '**«Аккаунтты жою»** түймесін басыңыз.',
      'Аккаунт құпиясөзін енгізу арқылы растап, **«Аккаунтты жою»** түймесін басыңыз.',
    ],
  },
  {
    t: 'note',
    text: '**Бұл әрекетті қайтару мүмкін емес.** Жойылған аккаунтты немесе оның мазмұнын қалпына келтіру мүмкін емес. Жою сәтінде аяқталмаған тапсырыстарыңыз болса, олар автоматты түрде тоқтатылады, ал бокстар серіктеске қайтарылады.',
  },

  { t: 'h2', text: '2-әдіс. Электрондық пошта арқылы сұраныс' },
  {
    t: 'p',
    text: 'Егер қосымшаға қолжетімділігіңіз болмаса (мысалы, құрылғы жоғалса немесе қосымша жойылса), аккаунтты жоюға сұранысты admin@ules.business мекенжайына жіберіңіз.',
  },
  {
    t: 'card',
    blocks: [
      { t: 'h3', text: 'Хатта нені көрсету керек' },
      {
        t: 'ul',
        items: [
          'Хат тақырыбы: **«Ules аккаунтын жою»**.',
          'Аккаунтта көрсетілген тегіңіз бен атыңыз.',
          'Аккаунт тіркелген электрондық пошта мекенжайы немесе телефон нөмірі.',
        ],
      },
      {
        t: 'p',
        text: 'Сұраныс алынған сәттен бастап **күнтізбелік 30 күн** ішінде өңделеді. Бөтен аккаунттың жойылуынан қорғау үшін біз жеке басты қосымша растауды сұрауымыз мүмкін.',
      },
    ],
  },

  { t: 'h2', text: 'Қандай деректер жойылады' },
  { t: 'p', text: 'Аккаунт жойылған сәтте қайтарымсыз жойылады:' },
  {
    t: 'table',
    head: ['Деректер', 'Нақты не'],
    rows: [
      ['Тіркелгі', 'Аты-жөні, электрондық пошта мекенжайы, телефон нөмірі, құпиясөз'],
      ['Профиль суреті', 'Жүктелген аватар файл қоймасынан жойылады'],
      ['Таңдаулылар', 'Барлық сақталған бокстар мен мекемелер'],
      ['Пікірлер мен бағалар', 'Серіктестерге қалдырған барлық пікірлеріңіз бен бағаларыңыз'],
      ['Аяқталмаған тапсырыстар', 'Алдымен тоқтатылады — бокстар серіктестің қорына қайтарылады — содан кейін жойылады'],
      ['Тоқтатылған және қабылданбаған тапсырыстар', 'Толығымен жойылады'],
      ['Статистика', 'Сақталған тағам, үнемделген ақша, жеке мақсаттар'],
      ['Push-хабарламалар', 'Хабарлама жіберуге пайдаланылған құрылғы токені'],
    ],
  },

  { t: 'h2', text: 'Қандай деректер сақталады' },
  {
    t: 'p',
    text: 'Аккаунт жойылғаннан кейін **тек аяқталған (алынған) тапсырыстар** және тек **иесіздендірілген түрде** сақталады: тапсырыстың сіздің жеке басыңызбен байланысы жойылады, жазбада не аты-жөні, не электрондық пошта мекенжайы, не телефон нөмірі қалмайды. Мұндай жазба бойынша тапсырысты кім ресімдегенін анықтау мүмкін емес.',
  },
  {
    t: 'table',
    head: ['Не сақталады', 'Негіздемесі және мерзімі'],
    rows: [
      [
        'Аяқталған тапсырыстар туралы иесіздендірілген жазбалар: тапсырыс сомасы, қызмет алымы, платформа комиссиясы, серіктеске төленетін сома, бокс пен мекеменің атауы',
        'Бухгалтерлік және салықтық есептілік үшін, сондай-ақ серіктестермен есеп айырысу үшін қажет. Сақтау мерзімі: **5 жыл**, Қазақстан Республикасының заңнамасына сәйкес.',
      ],
      [
        'Дерекқордың сақтық көшірмелері',
        'Автоматты түрде жасалады және Қазақстан Республикасының аумағындағы қорғалған инфрақұрылымда сақталады. Жойылған деректер сақтық көшірмелерден **30 күн** ішінде жоғалады және жұмыс жүйесіне қалпына келтірілмейді.',
      ],
    ],
  },

  { t: 'h2', text: 'Байланыс' },
  {
    t: 'address',
    lines: [
      'ТОО «КАДКАЗ», БСН 260440025903',
      'Қазақстан Республикасы, Астана қ., НҰРА ш.а., Комсомольский тұрғын алабы, Жұбан Ана к-сі, 8-үй, 7-пәтер',
      'Электрондық пошта: admin@ules.business',
    ],
  },
  {
    t: 'footnote',
    text: 'Дербес деректерді өңдеу Ules платформасының Құпиялылық саясатына сәйкес жүзеге асырылады: https://ules.business/legal/privacy/',
  },
]

const accountDeletion: LocalizedLegalDoc = { ru, en, kz }

export default accountDeletion
