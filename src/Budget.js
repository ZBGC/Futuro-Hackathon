/* This example requires Tailwind CSS v2.0+ */
import { FireIcon, BanknotesIcon, BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon, GiftIcon, StarIcon} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Learn to budget according to your financial goals ',
    description:
      'By calculating your income and your age, you can examine your retirement goals, on your Futuro, for your Futuro.',
    icon: BanknotesIcon,
  },
  {
    name: 'Technology of the future',
    description:
      'With automatic tracking through credit and ApplePay, we are able to accurately track your own personal Futuro account with your budgetary goals.',
    icon: StarIcon,
  },
  {
    name: 'Begin your investing adventure',
    description:
      'With our location-based financial finder, we can direct you to local friends that you can trust for investing opportunities.',
    icon: BoltIcon,
  },
  {
    name: 'Real Objective',
    description:
      'Our objective is to improve the Hispanic community; by letting us help, you are helping us.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Track your progress',
    description:
      'It can be boring to save- we understand. But with incentive-based goals and gradual consistency, our application makes progress a reward!',
    icon: FireIcon,

  }
]

export default function Budget() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-lg font-semibold text-black">.</h1>
          <h1 className="text-lg font-semibold text-black">.</h1>
          <h1 className="text-lg font-semibold text-black">.</h1>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            A better way to save money
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Find out how Futuro can aid your business or personal finance grow
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="">
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-lime-700 text-white" id='bet'>
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd> 
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}