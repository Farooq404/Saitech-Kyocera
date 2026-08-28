import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, site } from "@/lib/siteData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { IconPhone, IconWhatsApp, IconArrowRight } from "@/components/Icons";
import ProductImageZoom from "@/components/ProductImageZoom";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    return {
      title: "Product Not Found | Saitech Kyocera Services",
    };
  }

  return {
    title: `${product.name} | Saitech Kyocera Services Kurnool`,
    description: `${product.name} - ${product.description} Available with genuine warranty, installation, and AMC support in Kurnool.`,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const otherProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const whatsappMsg = encodeURIComponent(
    `Hi Saitech, I am interested in the ${product.name}. Please share price quote, availability, and delivery details for Kurnool.`
  );

  return (
    <>
      <Header />

      <main className="bg-soft min-h-screen pb-20">
        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-line py-3.5">
          <div className="container-xl flex items-center gap-2 text-xs font-medium text-muted">
            <Link href="/" className="hover:text-brand-blue transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#products" className="hover:text-brand-blue transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-ink font-semibold truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </div>
        </div>

        {/* Product Hero / Main Details */}
        <section className="py-10 md:py-14">
          <div className="container-xl">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Product Image Gallery Box */}
              <div className="lg:col-span-5 bg-white rounded-xl2 border border-line p-8 shadow-card flex flex-col items-center justify-center relative lg:sticky lg:top-28">
                {product.badge && (
                  <span className="absolute top-4 left-4 text-[11px] font-display font-bold uppercase tracking-wide bg-accent-green text-white px-3 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                )}
                <div className="w-full h-72 sm:h-84 flex items-center justify-center my-4">
                  {product.image ? (
                    <ProductImageZoom src={product.image} alt={product.name} />
                  ) : (
                    <div className="grid place-items-center w-24 h-24 rounded-2xl bg-brand-blueLight text-brand-blue">
                      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                        <path d="M6 9V3h12v6" />
                        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                        <rect x="6" y="14" width="12" height="8" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="w-full pt-4 border-t border-line flex items-center justify-between text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5 text-accent-green font-semibold">
                    <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                    Genuine Kyocera Stock
                  </span>
                  <span>Kurnool On-Site Service</span>
                </div>
              </div>

              {/* Product Specs & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="bg-white rounded-xl2 border border-line p-6 sm:p-8 shadow-card">
                  <span className="text-xs font-display font-bold uppercase tracking-wider text-accent-green">
                    {product.category}
                  </span>
                  <h1 className="font-display font-extrabold text-brand-blueDark text-2xl sm:text-3xl md:text-4xl mt-1 mb-4 leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-muted text-base leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Highlights Checklist */}
                  {product.highlights && product.highlights.length > 0 && (
                    <div className="mb-6 p-4 rounded-xl bg-brand-blueLight/50 border border-brand-blueLight">
                      <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-blue mb-3">
                        Key Advantages
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2 text-sm text-ink/90">
                        {product.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-accent-green shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={site.phoneHref}
                      className="btn-accent flex-1 justify-center !py-3.5 !text-base shadow-sm"
                    >
                      <IconPhone className="w-4 h-4" />
                      Get a Call Back / Quote
                    </a>
                    <a
                      href={`https://wa.me/919949410109?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 justify-center !py-3.5 !text-base inline-flex items-center gap-2"
                    >
                      <IconWhatsApp className="w-5 h-5 text-accent-green" />
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Technical Specifications Table */}
                <div className="bg-white rounded-xl2 border border-line p-6 sm:p-8 shadow-card">
                  <h3 className="font-display font-bold text-brand-blueDark text-xl mb-4">
                    Technical Specifications
                  </h3>
                  <div className="divide-y divide-line">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                        <span className="font-semibold text-muted sm:w-1/3">{spec.label}</span>
                        <span className="font-medium text-ink sm:w-2/3">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Benefits Guarantee Box */}
                <div className="bg-brand-blueDark text-white rounded-xl2 p-6 sm:p-7 shadow-card">
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    Included with Every Purchase from Saitech
                  </h4>
                  <p className="text-white/75 text-sm mb-4">
                    As Kurnool&apos;s trusted Kyocera partner, we provide comprehensive sales and after-sales support.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs text-white/90">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                      <span>Free On-Site Installation &amp; Network Setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                      <span>Staff Operational Training &amp; Demo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                      <span>Genuine Manufacturer Warranty Coverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                      <span>Priority Breakdown Support &amp; AMC Plans</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Models Navigation Row */}
            {otherProducts.length > 0 && (
              <div className="mt-16 pt-12 border-t border-line">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="eyebrow mb-1">More Options</span>
                    <h3 className="font-display font-extrabold text-brand-blueDark text-2xl">
                      Other Popular Kyocera Models
                    </h3>
                  </div>
                  <Link
                    href="/#products"
                    className="hidden sm:inline-flex items-center gap-1.5 font-display font-semibold text-sm text-brand-blue hover:underline"
                  >
                    View All Range <IconArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProducts.map((p) => (
                    <article
                      key={p.slug}
                      className="bg-white border border-line rounded-xl2 p-6 hover:shadow-cardHover hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
                    >
                      {p.image && (
                        <div className="w-full h-40 mb-4 rounded-xl bg-gray-50 flex items-center justify-center">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="max-h-full max-w-full object-contain mix-blend-multiply"
                          />
                        </div>
                      )}
                      <span className="text-[0.72rem] font-display font-bold uppercase tracking-wider text-accent-green mb-1">
                        {p.category}
                      </span>
                      <h4 className="font-display font-bold text-ink text-base mb-2 group-hover:text-brand-blue transition-colors">
                        {p.name}
                      </h4>
                      <p className="text-xs text-muted line-clamp-2 mb-4 flex-1">{p.description}</p>
                      <Link
                        href={`/products/${p.slug}`}
                        className="inline-flex items-center gap-1 font-display font-semibold text-xs text-brand-blue group-hover:gap-2 transition-all mt-auto"
                      >
                        View Full Specs <IconArrowRight className="w-3 h-3" />
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
