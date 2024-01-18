import { Banner } from "@/components/banner"
import { TravelPackage } from "@/components/travelPackage"
import { Footer } from "@/components/footer"
import { MainHero } from "@/components/hero"
import MainLayout from "@/components/layout"
import { PeopleReview } from "@/components/review"
import { NextSeo } from "next-seo"
import Link from "next/link"
import { getI18nProps } from "@/utils/i18n"
import { useTranslation } from "next-i18next"

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

export const getStaticProps = getI18nProps

export default function Home() {
  const { t } = useTranslation('common')
  const {
    title: titleDestination,
    description: descriptionDestination,
    buttonMore: buttonMoreDestination,
  }: {
    title: string
    description: string
    buttonMore: string
  } = t('destination', {  returnObjects: true })
  const {
    title: titleReview,
    description: descriptionReview,
  }: {
    title: string
    description: string
  } = t('review', {  returnObjects: true })
  const {
    title: titleContact,
    description: descriptionContact,
    buttonContact
  }: {
    title: string
    description: string
    buttonContact: string
  } = t('contact', {  returnObjects: true })
  return (
    <div>
      <NextSeo
        title="Bless Travel"
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
            <h4 className="text-4xl font-extrabold text-center">{titleDestination}</h4>
            <p className="w-full md:w-2/4 leading-relaxed text-gray-700 text-center text-normal md:text-sm">
            {descriptionDestination}
            </p>
          </div>
          <TravelPackage />
          <div className="flex justify-center mt-10">
            <button className="border-indigo-500 border py-3 px-6 w-max text-sm sm:w-auto text-indigo-500 font-semibold mt-10 rounded-full hover:bg-indigo-600 hover:text-white">
              {buttonMoreDestination}
            </button>
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <div className="flex flex-col items-center space-y-4">
            <h4 className="text-4xl font-extrabold text-center">{titleReview}</h4>
            <p className="w-full md:w-2/4 leading-relaxed text-gray-700 text-center text-normal md:text-sm">
              {descriptionReview}
            </p>
          </div>
          <PeopleReview />
        </div>
        <div className="py-20">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-4 lg:mb-0">
            <div className="w-full lg:w-5/12 px-5 lg:px-20 flex flex-col justify-between">
              <div>
                <h4 className="text-4xl font-bold">
                {titleContact}
                </h4>
                <p className="text-gray-700 mt-4 text-normal md:text-sm">
                  {descriptionContact}
                </p>
              </div>
              <Link
                className="bg-indigo-500 rounded-full px-5 py-3 shadow-md text-white w-max font-medium text-sm hover:bg-indigo-600 mt-5"
                href="https://api.whatsapp.com/send?phone=6281354490456&text=Halo%20saya%20ingin%20pesan%20paket%20wisata%20"
                target="_blank"
              >
                {buttonContact}
              </Link>
            </div>
            <div className="w-full lg:w-7/12">
              <Banner />
            </div>
          </div>
        </div>
        <Footer />
      </MainLayout>
    </div>
  )
}
