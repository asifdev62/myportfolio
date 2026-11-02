export interface Project {
  /** URL segment used by /projects/[slug]. */
  slug: string;
  name: string;
  /** Optional secondary (e.g. Bengali) name. */
  alternateName?: string;
  /** One-line summary shown on cards and detail headers. */
  tagline: string;
  /** Short paragraph used for meta descriptions. */
  summary: string;
  overview: string;
  /** The user need / problem the project addresses. */
  problem: string;
  /** Features that are supported by the project's code or README. */
  features: string[];
  /** Technologies that are supported by the project's code or README. */
  tech: string[];
  /** How the project was implemented, described from the actual code/README. */
  implementation: string;
  /** Notable technical decisions that are verifiable from the project. */
  decisions: string[];
  liveUrl: string;
  repoUrl: string;
  /** Set when the project's API/backend lives in a separate repository. */
  backendRepoUrl?: string;
  /** Only set when a real screenshot exists in /public. */
  image?: string;
  /** Intrinsic width of `image`, used to reserve the correct aspect ratio. */
  imageWidth?: number;
  /** Intrinsic height of `image`, used to reserve the correct aspect ratio. */
  imageHeight?: number;
}

export const projects: Project[] = [
  {
    slug: "booknook",
    name: "BookNook",
    alternateName: "Book Management Platform",
    tagline:
      "A full-stack book platform to discover books by category, explore details, and protect member routes with JWT authentication.",
    summary:
      "A full-stack book management platform for discovering books, browsing organised categories, and reading book details, with JWT-protected routes.",
    overview:
      "BookNook is a full-stack book management platform built with the Next.js App Router. Readers can browse a collection of books, explore them by category, and open individual book pages for more detail. The app pairs a Next.js frontend with a separate Express.js API, uses JWT-based authentication, and relies on Next.js Proxy for request-level route protection.",
    problem:
      "Book discovery usually means jumping between storefronts and scattered reading lists, with little structure around categories. BookNook gives readers one organised place to browse books by category and open the details they need, while keeping member-only areas behind authentication.",
    features: [
      "Browse a collection of books from the homepage",
      "Category-based browsing for organised discovery",
      "Individual book detail pages",
      "JWT-based authentication for protected resources",
      "Next.js Proxy checks before protected routes load",
      "MongoDB-backed book data",
      "Separate Express.js backend API",
      "Reusable component structure",
      "Responsive layout for mobile, tablet, and desktop",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Next.js Proxy",
    ],
    implementation:
      "Split across two repositories: a Next.js App Router frontend and an Express.js backend. The frontend renders the home, category, book-listing, and book-detail views and reads data through the backend's REST API. JWT-based authentication issues tokens for signed-in users, Next.js Proxy performs request-level checks on protected routes, and MongoDB stores the application data.",
    decisions: [
      "Kept the frontend and backend in separate repositories so the Next.js UI and the Express API can be developed and deployed independently.",
      "Used JWT-based authentication with Next.js Proxy for request-level route checks, while keeping the backend responsible for validating tokens on protected endpoints.",
      "Organised browsing around categories so readers can move from a broad shelf to an individual book quickly.",
    ],
    liveUrl: "https://book-nook-ivory.vercel.app/",
    repoUrl: "https://github.com/asifdev62/BookNook",
    backendRepoUrl: "https://github.com/asifdev62/BookNook-Server",
    image: "/booknook.png",
    imageWidth: 1899,
    imageHeight: 868,
  },
  {
    slug: "wanderlust",
    name: "Wanderlust",
    alternateName: "Travel & Destination Booking Platform",
    tagline:
      "A full-stack travel platform to explore destinations, discover new places, and manage travel bookings with a modern, user-friendly experience.",
    summary:
      "A full-stack travel and destination booking platform for exploring destinations, adding new places, and managing travel bookings.",
    overview:
      "Wanderlust is a full-stack travel web application that helps users discover destinations and manage travel bookings. Visitors can browse destinations from different countries, open detail pages with prices, durations, and descriptions, explore destinations by category such as beaches, mountains, cities, adventure, and culture, add new destinations, and submit bookings through an authenticated account.",
    problem:
      "Trip research and booking details are usually spread across several sites and notes, which makes destinations hard to compare and bookings easy to lose track of. Wanderlust brings discovery and booking into a single interface, with categories for narrowing the options and an account layer that keeps booking information together.",
    features: [
      "Explore travel destinations from different countries",
      "Destination detail pages with descriptions, prices, and durations",
      "Category-based browsing for beaches, mountains, cities, adventure, and culture",
      "Add new destinations to the platform",
      "Submit travel bookings for a selected destination",
      "Authentication with Better Auth (sign in / sign up)",
      "Booking management with access to travel booking information",
      "REST API integration with a separate Express.js backend",
      "Destination and booking data stored in MongoDB",
      "Responsive layout for mobile, tablet, and desktop",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "REST API",
    ],
    implementation:
      "Split across two repositories: a Next.js App Router frontend and an Express.js backend. The frontend renders the home, destination listing, destination detail, add-destination, booking, and authentication views, and reads and writes data through the REST API exposed by the Express server. Destinations and booking records are stored in MongoDB, while Better Auth handles sign-in, sign-up, sessions, and the routes that require an account.",
    decisions: [
      "Separated the frontend and backend into their own repositories so the Next.js UI and the Express API can be developed and deployed independently.",
      "Modelled destinations with country, category, price, duration, departure date, and image fields so the same records power the listing, detail, and booking views.",
      "Used Better Auth for authentication so booking-related views are only reachable by signed-in users.",
    ],
    liveUrl: "https://wanderlust-gamma-pink.vercel.app/",
    repoUrl: "https://github.com/asifdev62/Wanderlust",
    backendRepoUrl: "https://github.com/asifdev62/wanderlust-server",
    image: "/wanderlust.png",
    imageWidth: 1891,
    imageHeight: 827,
  },
  {
    slug: "bazar-dor",
    name: "Bazar Dor",
    alternateName: "বাজার দর",
    tagline:
      "A Bengali market-price app to explore everyday product prices and compare changes over time.",
    summary:
      "A Bengali market-price application for exploring essential product prices and comparing price changes over time.",
    overview:
      "Bazar Dor is a Bengali-language web application that helps users follow the prices of everyday essential products in Bangladesh. Visitors can browse products, explore them by category, open individual product pages, and read price history alongside clear increase and decrease indicators.",
    problem:
      "Prices of daily essentials shift frequently and are spread across markets and categories, which makes it hard for people to understand what is getting cheaper or more expensive. Bazar Dor addresses this with a single, Bengali-first interface for checking and comparing prices.",
    features: [
      "Modern homepage that introduces the current market prices",
      "Dedicated views for products whose prices have increased",
      "Dedicated views for products whose prices have decreased",
      "All-products listing to browse available essentials",
      "Category-based navigation such as rice, lentils, oil, vegetables, fish, meat, and eggs",
      "Individual product detail pages with price history",
      "Price comparison between the current and previous prices",
      "Market trend indicators using percentage changes and visual cues",
      "Responsive layout for mobile, tablet, and desktop",
      "Bengali-language interface",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "React Icons",
    ],
    implementation:
      "Built with the Next.js App Router, the app fetches product and category data from a REST API and renders it across home, category, product-listing, and product-detail routes. Price values and historical prices from the API are transformed into increase/decrease indicators that drive the trend views and the percentage changes shown on cards and detail pages.",
    decisions: [
      "Kept price logic client-facing by deriving increase/decrease indicators from the API's current and historical prices instead of hardcoding price states.",
      "Organised browsing around categories so users can narrow a large catalogue to the goods they actually buy.",
      "Prioritised a Bengali-first interface to match the audience of the data.",
    ],
    liveUrl: "https://bazar-dor-psi-olive.vercel.app/",
    repoUrl: "https://github.com/asifdev62/bazar-dor.git",
    image: "/bazardor.png",
    imageWidth: 1920,
    imageHeight: 859,
  },
  {
    slug: "bangla-news-24",
    name: "Bangla News 24",
    tagline:
      "A Bengali news platform for browsing articles by category with authenticated user accounts.",
    summary:
      "A Bengali news web application for browsing news articles by category, with authentication and user profiles.",
    overview:
      "Bangla News 24 is a Bengali news platform built with the Next.js App Router. Readers can browse the latest news, open a most-read section, explore news by category, and read individual articles. Accounts are handled with Better Auth, giving users a profile they can manage.",
    problem:
      "Bengali readers need a fast, well-organised place to follow the news, with categories that make it easy to find relevant stories and an account layer for a personalised experience. Bangla News 24 addresses this with category browsing, dedicated article pages, and authenticated profiles.",
    features: [
      "Browse the latest Bangla news on the homepage",
      "Most-read / popular news section",
      "Category-based news browsing",
      "Individual news article detail pages",
      "Authentication with Better Auth (sign in / sign up / sign out)",
      "User profile with editable profile information",
      "Protected user routes",
      "Session management",
      "Google sign-in (when configured)",
      "MongoDB-backed data and user storage",
      "Toast notifications for user actions",
      "Responsive layout for mobile, tablet, and desktop",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Better Auth",
      "App Router",
    ],
    implementation:
      "Structured as a Next.js App Router application with route groups for news, categories, profile, and authentication. Better Auth provides the sign-in, sign-up, sign-out, and session handling, while MongoDB stores authentication and user data. News pages render article lists and details, and profile routes are protected so they are only reachable by signed-in users.",
    decisions: [
      "Used Better Auth for authentication so session handling and protected routes stay consistent across the app.",
      "Stored authentication and user-related data in MongoDB, keeping the data layer separate from the UI.",
      "Placed category navigation at the centre of the browsing experience to serve readers who follow specific topics.",
    ],
    liveUrl: "https://bangla-news24-kappa.vercel.app/",
    repoUrl: "https://github.com/asifdev62/banglaNews24.git",
    image: "/banglanews.png",
    imageWidth: 1920,
    imageHeight: 868,
  },
  {
    slug: "fitlog",
    name: "FitLog",
    tagline:
      "A workout planner to build a daily plan, save routines for later, and track completion.",
    summary:
      "A fitness-focused web application for exploring workouts, building a daily plan, and saving routines for later.",
    overview:
      "FitLog is a workout planning application built with Next.js, TypeScript, and Tailwind CSS. Users browse a workout library, open detailed workout pages, add up to five workouts to a Today's Plan, save workouts for later, sort their plan, and track completion with live statistics.",
    problem:
      "Planning workouts and remembering what has been completed is easy to lose track of across notes and apps. FitLog gives users one place to assemble a manageable daily routine, keep a shortlist of workouts for later, and see the combined duration and calories of what they have planned.",
    features: [
      "Workout library showing name, target muscles, equipment, difficulty, duration, calories, and rating",
      "Individual workout detail pages with sets, repetitions, and step-by-step instructions",
      "Add a workout to Today's Plan, capped at five workouts per day",
      "Save workouts for later, separate from Today's Plan",
      "Plan management: view, remove, mark as completed, and sort",
      "Automatic plan statistics for total workouts, duration, and calories",
      "Sorting by duration, calories, or rating",
      "Persistence of plan and saved workouts in the browser via localStorage",
      "Toast notifications for add, save, remove, and completion actions",
      "Responsive layout for mobile, tablet, and desktop",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Context API",
      "REST API",
      "localStorage",
      "React Icons",
      "React Hot Toast",
    ],
    implementation:
      "Built with the Next.js App Router and a React Context that holds the plan and saved-workout state. Workout data is retrieved from a REST API for the library and the dynamic workout detail route. Selections and completion status are persisted to localStorage, so the plan and saved list survive refreshes, and the plan view derives totals for count, duration, and calories from the current selection.",
    decisions: [
      "Used React Context plus localStorage instead of a backend so the planning experience works without an account.",
      "Enforced a five-workout cap on Today's Plan to keep daily routines realistic.",
      "Kept saved workouts separate from the daily plan so users can shortlist without committing to a day.",
    ],
    liveUrl: "https://fitlog-black-two.vercel.app/",
    repoUrl: "https://github.com/asifdev62/FitLog-in-Next.js.git",
    image: "/fitlog.png",
    imageWidth: 1920,
    imageHeight: 831,
  },
  {
    slug: "book-vibe",
    name: "Book Vibe",
    tagline:
      "A book discovery app to explore titles and organise reading lists and wishlists.",
    summary:
      "A book discovery and reading-list web application for exploring books and organising reading selections.",
    overview:
      "Book Vibe is a book library web application built with Next.js, TypeScript, and Tailwind CSS. Users browse available books, open detailed book pages with ratings and reviews, build a reading list and a wishlist, and review reading statistics.",
    problem:
      "Readers often want to track what they plan to read and what they want to buy next without spreadsheets or scattered notes. Book Vibe addresses this by combining book discovery with reading-list and wishlist management and a simple view of reading progress.",
    features: [
      "Browse available books",
      "Detailed book information pages",
      "Book ratings and reviews",
      "Add books to a reading list",
      "Add books to a wishlist",
      "Reading statistics view",
      "Sort books by different options",
      "Responsive layout for mobile, tablet, and desktop",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Context API",
      "React Icons",
      "Recharts",
    ],
    implementation:
      "Built with the Next.js App Router and a React Context that manages the reading list and wishlist across pages. Book data is read from a local dataset and rendered on the home and book-detail pages, while the listed-books and pages-to-read views summarise the user's selections and chart their reading progress with Recharts.",
    decisions: [
      "Used a React Context for the reading list and wishlist so selections stay in sync across pages.",
      "Kept book data local to the project so the app runs without a backend.",
      "Added a statistics view to turn saved selections into readable progress.",
    ],
    liveUrl: "https://bookvibe-sigma.vercel.app/",
    repoUrl: "https://github.com/asifdev62/Book-Vibe-in-Next.js.git",
    image: "/bookvibe.png",
    imageWidth: 1920,
    imageHeight: 865,
  },
];

/** Projects shown in the "Latest Projects" section, in order. */
export const latestProjectSlugs = [
  "booknook",
  "wanderlust",
  "bazar-dor",
] as const;

export const latestProjects: Project[] = latestProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => project !== undefined);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Other projects, used by the "Related projects" section. */
export function getRelatedProjects(slug: string, limit = 3): Project[] {
  return projects.filter((project) => project.slug !== slug).slice(0, limit);
}
