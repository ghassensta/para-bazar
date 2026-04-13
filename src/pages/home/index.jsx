import HomeViewPage from "../../sections/home/home-view-page";
import { Helmet } from "react-helmet";

export default function Page() {
  const pageTitle = "Para Bazar Tunisien - Parapharmacie en Ligne & Beauté à Prix Exceptionnels";
  const pageDescription =
    "Découvrez Para Bazar Tunisien, votre parapharmacie en ligne de référence. Produits de beauté, santé, cosmétiques, bien-être et promotions exclusives. Livraison rapide partout en Tunisie.";
  const pageUrl = "https://parabazar.tn"; // ← change si ton domaine est différent

  // ==================== SCHEMAS JSON-LD ====================

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Para Bazar Tunisien",
    description: pageDescription,
    url: pageUrl,
    image: "https://parabazar.tn/logo.png",
    logo: {
      "@type": "ImageObject",
      url: "https://parabazar.tn/logo.png",
    },
    publisher: {
      "@type": "Organization",
      name: "Para Bazar Tunisien",
      logo: {
        "@type": "ImageObject",
        url: "https://parabazar.tn/logo.png",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "12 Avenue Habib Bourguiba",
        postalCode: "1000",
        addressLocality: "Tunis",
        addressCountry: "TN",
      },
      sameAs: [
        "https://www.facebook.com/parabazartunisien",
        "https://www.instagram.com/parabazartunisien",
        "https://www.tiktok.com/@parabazartunisien",
      ],
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://parabazar.tn/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Para Bazar Tunisien",
    description: pageDescription,
    url: pageUrl,
    logo: "https://parabazar.tn/logo.png",
    image: "https://parabazar.tn/logo.png",
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "contact@parabazar.tn",
      areaServed: ["TN"],
    },
    sameAs: [
      "https://www.facebook.com/parabazartunisien",
      "https://www.instagram.com/parabazartunisien",
      "https://www.tiktok.com/@parabazartunisien",
    ],
    knowsAbout: ["Parapharmacie", "Beauté", "Santé", "Cosmétiques", "Bien-être", "Cartes cadeaux", "Promotions Tunisie"],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Para Bazar Tunisien",
    image: "https://parabazar.tn/logo.png",
    description: pageDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Avenue Habib Bourguiba",
      postalCode: "1000",
      addressLocality: "Tunis",
      addressCountry: "TN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1240",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce que Para Bazar Tunisien ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Para Bazar Tunisien est votre parapharmacie en ligne de référence en Tunisie. Nous proposons des milliers de produits de beauté, santé, cosmétiques et bien-être des plus grandes marques à prix très avantageux.",
        },
      },
      {
        "@type": "Question",
        name: "Comment bénéficier de réductions ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Inscrivez-vous à notre programme de fidélité, commandez une carte cadeau ou rejoignez notre communauté pour profiter d'offres exclusives, promotions et réductions CSE toute l'année.",
        },
      },
      {
        "@type": "Question",
        name: "Proposez-vous des cartes cadeaux ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui ! Nous proposons des cartes cadeaux élégantes en version physique ou numérique, disponibles en plusieurs montants, parfaites pour offrir beauté et bien-être.",
        },
      },
      {
        "@type": "Question",
        name: "Comment devenir membre ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Créez votre compte gratuitement sur Para Bazar Tunisien pour accéder à la communauté privée, aux tarifs préférentiels, aux avant-premières et au programme de fidélité.",
        },
      },
      {
        "@type": "Question",
        name: "Quels produits proposez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plus de 5000 produits : parapharmacie, soins visage & corps, maquillage, compléments alimentaires, produits bébé, solaire, hygiène et bien-être. Livraison rapide partout en Tunisie.",
        },
      },
      {
        "@type": "Question",
        name: "Comment fonctionne le programme de parrainage ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Parrainez vos amis et recevez 10 DT en bon d'achat. Chaque ami parrainé reçoit également 10 DT offerts sur sa première commande. Simple, rapide et généreux !",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="parapharmacie tunisie, para bazar, produits beauté tunisie, cosmétiques en ligne, parapharmacie en ligne, cartes cadeaux, promotions tunisie, bien-être, santé, livraison tunisie"
        />

        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://parabazar.tn/logo.png" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Para Bazar Tunisien" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://parabazar.tn/logo.png" />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

        <meta name="language" content="fr-TN" />
        <meta name="author" content="Para Bazar Tunisien" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="theme-color" content="#B6B499" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Helmet>

      <HomeViewPage />
    </>
  );
}