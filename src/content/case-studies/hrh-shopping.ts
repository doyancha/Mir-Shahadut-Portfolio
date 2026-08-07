import type { CaseStudy } from ".";

export const hrhShoppingCaseStudy = {
  slug: "hrh-shopping",
  projectSlug: "hrh-shopping",
  title: "HRH Shopping",
  description:
    "Customer-facing multivendor ecommerce portfolio project with a broad public storefront and customer-account experience.",
  canonicalPath: "/projects/hrh-shopping",
  liveDemoUrl: "https://hrh-shopping.vercel.app/",
  keyFacts: [
    { label: "Current status", value: "Active Development" },
    { label: "Private repository", value: "Private repository" },
    { label: "Live demo available", value: "Live demo available" },
  ],
  relatedProjectSlug: "bookeasy",
  sections: {
    overview: {
      paragraphs: [
        "HRH Shopping is a customer-facing multivendor ecommerce portfolio project with a broad public storefront and customer-account experience. The repository shows product discovery, product detail, cart, wishlist, checkout, orders, tracking, return, review, notification, address, profile, and support surfaces.",
        "The strongest verified implementation evidence lives in the Next.js frontend, where public storefront routes and customer-account flows are wired to demo data, browser-local state, and responsive layouts that can be reviewed without exposing private source links.",
      ],
    },
    problem: {
      paragraphs: [
        "A large ecommerce interface has to coordinate search, categories, product detail, cart, wishlist, and account journeys while keeping the navigation understandable.",
        "The implementation also has to keep repeated customer states, responsive layout constraints, route metadata, and missing-route behavior consistent across a large surface area.",
      ],
    },
    goals: {
      items: [
        "Build a coherent storefront discovery flow.",
        "Support search, category, and product navigation.",
        "Provide realistic customer account journeys.",
        "Keep cart and wishlist interactions persistent in the browser.",
        "Support orders, tracking, return and refund preview, reviews, notifications, addresses, and support.",
        "Maintain responsive layouts across small and large screens.",
        "Keep static route behavior predictable with metadata and notFound handling.",
        "Structure the frontend so future backend integrations can replace demo state cleanly.",
      ],
    },
    architecture: {
      frontend: [
        "Next.js App Router pages under `src/app` organize the public storefront and customer-account route surfaces.",
        "Static-first product detail routing uses `generateStaticParams`, `generateMetadata`, and `notFound` so approved slugs resolve predictably.",
        "Shared shell, listing, and detail components keep the large storefront and account experience visually consistent.",
        "Customer-facing routes cover browsing, cart, wishlist, checkout, orders, tracking, returns, reviews, notifications, addresses, profile, and account support.",
      ],
      backend: [
        "The repository also contains a NestJS app bootstrap and configuration foundation in `apps/api/src`, but no feature controllers or services were verified in that runtime tree.",
        "A Prisma/MySQL commerce schema exists in `apps/api/prisma`, which documents the broader domain model, but schema presence is not the same as completed backend behavior.",
      ],
      data: [
        "Browser-managed `localStorage` powers the cart and wishlist demo state.",
        "Profile and communication preferences are held in a client provider, while notification previews use a separate client provider.",
        "Customer orders, reviews, notifications, and storefront composition use demo datasets so the experience remains reviewable in portfolio conditions.",
      ],
    },
    features: {
      items: [
        "Homepage storefront and promotional discovery sections.",
        "Search, categories, category detail, and product browsing.",
        "Product detail pages with related products, questions, and review previews.",
        "Cart with add, update, remove, and clear interactions.",
        "Wishlist with save, remove, and move-to-cart flows.",
        "Account, profile, and support pages.",
        "Checkout UI flow.",
        "Orders, order detail, tracking, return, and refund preview flows.",
        "Reviews, notifications, and addresses routes.",
      ],
    },
    workflows: {
      items: [
        {
          title: "Discovery workflow",
          steps: [
            "Browse search and category routes to find a product.",
            "Open product detail to review the gallery, questions, reviews, and related products.",
            "Continue into the cart or save the item to the wishlist.",
          ],
        },
        {
          title: "Shopping workflow",
          steps: [
            "Add a product to the cart from listing or detail views.",
            "Update quantities, remove items, or clear the cart.",
            "Move products between wishlist and cart without leaving the customer-owned browser state boundary.",
            "Continue through the checkout UI flow.",
          ],
        },
        {
          title: "Customer account workflow",
          steps: [
            "Open the account or profile surface and review customer details.",
            "Inspect orders and order detail pages, then open tracking where available.",
            "Preview return or refund request flows for eligible orders.",
            "Review notifications, addresses, and support pages as part of the same customer shell.",
          ],
        },
      ],
    },
    decisions: {
      items: [
        "Route grouping by public and customer scope keeps discovery and account journeys easy to separate.",
        "Static-first dynamic routing with page metadata and notFound handling keeps product and category pages predictable.",
        "Browser localStorage is used for cart and wishlist demo state so the UI remains interactive without inventing backend persistence.",
        "Client providers hold profile and notification preview state because those surfaces are still demo-oriented in this repository.",
        "Shared storefront, detail, and account components reduce repetition across a large ecommerce surface.",
        "Frontend behavior is kept separate from backend and schema groundwork so future integrations can replace demo state cleanly.",
      ],
    },
    challenges: {
      items: [
        "Keeping cart and wishlist state stable across route transitions.",
        "Structuring a large customer-account surface without fragmenting navigation.",
        "Making search, categories, and product detail usable on small screens.",
        "Representing order, tracking, return, review, and notification flows without a completed backend runtime.",
        "Preserving predictable route metadata and missing-route behavior across dynamic pages.",
        "Keeping future backend integration boundaries clear.",
      ],
    },
    solutions: {
      items: [
        "Cart and wishlist providers use localStorage with hydration guards so the browser state survives navigation.",
        "A shared customer shell and consistent page layouts keep the account surface coherent.",
        "Responsive listing, detail, and account layouts stack cleanly and were verified at narrow widths.",
        "Mock/demo datasets and preview providers keep the customer journeys reviewable while staying honest about runtime scope.",
        "Dynamic route pages use static params, page metadata, and notFound handling for predictable resolution.",
        "The case study explicitly separates implemented frontend behavior from schema and bootstrap groundwork.",
      ],
    },
    responsive: {
      paragraphs: [
        "Responsive behavior is verified across the storefront, product detail, and customer-account surfaces, with stacked mobile layouts, wrapping CTAs, and reusable listing grids.",
        "The repository's Playwright coverage checks the shared customer experience across 320px, 390px, 768px, 1024px, 1440px, and 1536px, with horizontal overflow assertions on the narrow widths.",
      ],
    },
    accessibility: {
      items: [
        "Semantic App Router pages and sectioned layouts provide a clear document structure.",
        "Labeled navigation and controls support the storefront and customer-account flows.",
        "Keyboard-visible controls are present in the shared storefront and account surfaces.",
        "Responsive touch targets and stacked mobile layouts support narrow-screen use.",
        "Readable form and preview messages avoid relying on color alone.",
      ],
    },
    testing: {
      items: [
        "Playwright covers cart and wishlist interactions.",
        "Playwright covers customer orders, tracking, return and refund preview, reviews, notifications, addresses, and profile and account surfaces.",
        "Responsive checks assert no horizontal overflow across narrow viewports.",
        "Route-level checks cover product and category detail navigation and missing-route behavior.",
        "Verification relies on source inspection, build checks, and Playwright regression coverage rather than a large unit-test matrix.",
      ],
    },
    currentStatus: {
      paragraphs: [
        "HRH Shopping is presented publicly as an active development portfolio project. The approved live demo remains available and the repository remains private.",
        "The public case study should be read as verified frontend and customer-experience implementation work, not as a claim of commercial operation.",
      ],
    },
    limitations: {
      items: [
        "The strongest implementation evidence is frontend and customer-facing.",
        "Several customer flows use mock or demo data.",
        "Cart and wishlist use browser-local persistence.",
        "Profile and notification preview state is client-managed.",
        "The NestJS source tree currently contains bootstrap and configuration only.",
        "The Prisma schema is groundwork, not proof of runtime backend behavior.",
        "Seller, vendor, and admin capabilities are not included in this public narrative.",
        "No commercial production or adoption claim is made.",
      ],
    },
    lessons: {
      items: [
        "Broad ecommerce experiences benefit from clear route and component boundaries.",
        "Mobile behavior needs deliberate verification across discovery and account flows.",
        "Demo and local state should stay separate from future backend integration.",
        "Static route generation and metadata make product and category routing predictable.",
        "Large customer experiences benefit from consistent shared account and navigation patterns.",
      ],
    },
    screenshots: [
      {
        src: "/images/projects/hrh-shopping/01-primary-desktop.png",
        alt: "HRH Shopping storefront homepage with hero promotion, search, and category shortcuts.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/hrh-shopping/02-listing-desktop.png",
        alt: "HRH Shopping category listing with filters and product cards.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/hrh-shopping/03-detail-desktop.png",
        alt: "HRH Shopping product detail page for a compact smartwatch with pricing and purchase options.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/hrh-shopping/04-tracking-desktop.png",
        alt: "HRH Shopping order tracking page with shipping status and timeline.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/hrh-shopping/05-account-desktop.png",
        alt: "HRH Shopping customer reviews page with ratings summary and review targets.",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/hrh-shopping/06-checkout-mobile.png",
        alt: "HRH Shopping mobile checkout view with cart summary and purchase actions.",
        width: 390,
        height: 844,
      },
    ],
  },
} satisfies CaseStudy;
