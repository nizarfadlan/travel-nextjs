import { ArrowDownRight } from "lucide-react"
import { useTranslation } from "next-i18next"
import React from 'react'

export const MainHero = () => {
  const { t } = useTranslation('common')
  const {
    title,
    description,
    buttonExplore
  }: {
    title: string
    description: string
    buttonExplore: string
  } = t('hero', {  returnObjects: true })

  return (
    <div className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-20">
        <div className="w-full md:w-2/5">
          <h1 className="text-5xl leading-[3.5rem] font-bold">
            {title}
          </h1>
          <p className="text-gray-700 mt-4 text-normal md:text-sm">
            {description}
          </p>
          <button className="mt-7 bg-indigo-500 px-6 py-3 rounded-xl text-white text-sm font-medium hover:bg-indigo-600">
            {buttonExplore}
            <ArrowDownRight className="inline ml-2" size={16} />
          </button>
        </div>
        <div className="w-full md:w-2/5 mt-8 md:mt-0">
          <img
            src="/images/image-hero.webp"
            alt=""
            className="block w-full right-0 object-cover"
            style={{ borderRadius: "0px 0px 0px 4rem" }}
          />
        </div>
      </div>
    </div>
  );
};
