/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from "@heroicons/react/outline"

const features = [
  {
    name: "Next.js",
    description: "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
    icon: GlobeAltIcon,
  },
  {
    name: "TailwindCSS",
    description: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    icon: ScaleIcon,
  },
  {
    name: "Framer Motion",
    description: "A production-ready motion library for React. Utilize the power behind Framer, the best prototyping tool for teams. Proudly open source.",
    icon: LightningBoltIcon,
  },
  {
    name: "Strapi CMS",
    description: "Strapi is the leading open-source headless CMS. It’s 100% JavaScript, fully customizable and developer-first.",
    icon: AnnotationIcon,
  },
]

export default function NextTest() {
  return (
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>ZawojWeb</h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Website Template</p>
          <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>Currently it's the best way of making websites</p>
        </div>

        <div className='mt-10'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            {features.map((feature) => (
              <div key={feature.name} className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                    <feature.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>{feature.name}</p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
