import { Banner } from "@/components/banner"
import { TravelPackage } from "@/components/travelPackage"
import { Footer } from "@/components/footer"
import { MainHero } from "@/components/hero"
import { MainLayout } from "@/components/layout"
import { PeopleReview } from "@/components/review"
import { NextSeo } from "next-seo"
import { Inter } from 'next/font/google'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

const DEFAULT_SEO = {
  title: 'Bless Travel (blesstravel)',
  description: 'Bless travel adalah Biro Perjalanan Wisata yang didukung dan dikelola oleh Agen Lokal Bali dengan tim yang sudah berpengalaman. kami telah melayani banyak berbagai pelanggan mulai dari Individu, Keluarga, Group maupun Perushaan. Hal ini tentu nya menjadikan kemudahan dan kenyamanan Anda pada saat berlibur di Pulau Dewata.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://blesstravel.vercel.app',
    title: 'Bless Travel (blesstravel)',
    description: 'Bless travel adalah Biro Perjalanan Wisata yang didukung dan dikelola oleh Agen Lokal Bali dengan tim yang sudah berpengalaman. kami telah melayani banyak berbagai pelanggan mulai dari Individu, Keluarga, Group maupun Perushaan. Hal ini tentu nya menjadikan kemudahan dan kenyamanan Anda pada saat berlibur di Pulau Dewata.',
    image:
      'https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg',
    site_name: 'blesstravel.vercel.app',
    imageWidth: 1200,
    imageHeight: 1200,
  },
  twitter: {
    handle: '@garmeeh',
    cardType: 'summary_large_image',
  },
}

export default function Home() {
  return (
    <>
      <NextSeo
        title="Bless Travel (blesstravel)"
        description="Bless travel adalah Biro Perjalanan Wisata yang didukung dan dikelola oleh Agen Lokal Bali dengan tim yang sudah berpengalaman. kami telah melayani banyak berbagai pelanggan mulai dari Individu, Keluarga, Group maupun Perushaan. Hal ini tentu nya menjadikan kemudahan dan kenyamanan Anda pada saat berlibur di Pulau Dewata."
        openGraph={DEFAULT_SEO}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "Bless Travel",
          },
          {
            name: "application-name",
            content: "Bless Travel (blesstravel)",
          },
        ]}
      />
      <MainLayout>
        <MainHero />
        <div className="px-5 md:px-20 py-10">
          <div className="flex flex-col items-center space-y-4">
            <h4 className="text-4xl font-extrabold text-center">Top Travel Packages</h4>
            <p className="w-full md:w-2/4 leading-relaxed text-gray-700 text-center text-normal md:text-sm">
              We offer the best travel packages, there are several top travel packages that are good, interesting and much loved by customers.
            </p>
          </div>
          <TravelPackage />
          <div className="flex justify-center mt-10">
            <button className="border-indigo-500 border py-3 px-20 w-full sm:w-auto text-indigo-500 font-semibold mt-10 rounded-full hover:bg-indigo-600 hover:text-white">
              More
            </button>
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <div className="flex flex-col items-center space-y-4">
            <h4 className="text-4xl font-extrabold text-center">What travellers say about us</h4>
            <p className="w-full md:w-2/4 leading-relaxed text-gray-700 text-center text-normal md:text-sm">
              What they say about the travel packages we provide, these are direct testimonials from customers who have used our travel packages.
            </p>
          </div>
          <PeopleReview />
        </div>
        <div className="py-20">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-5/12 px-5 lg:px-20 flex flex-col justify-between">
              <div>
                <h4 className="text-4xl font-bold">
                  Protect yourself and your family’s future{" "}
                </h4>
                <p className="leading-relaxed mt-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptates expedita, quibusdam, consequuntur doloribus est, vel
                  autem accusamus aut aperiam sed illo consectetur odit impedit
                  distinctio! Laborum vitae itaque quo molestias.
                </p>
              </div>
              <Link
                className="bg-indigo-500 rounded-full px-5 py-3 shadow-md text-white w-max font-medium text-sm hover:bg-indigo-600 mt-5"
                href="https://wa.me/6281354490456?text=Halo%20saya%20ingin%20pesan%20paket%20wisata%20"
                target="_blank"
              >
                Contact Us
              </Link>
            </div>
            <div className="w-full lg:w-7/12">
              <Banner />
            </div>
          </div>
        </div>
        <Footer />
      </MainLayout>
    </>
  )
}
