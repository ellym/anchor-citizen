import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How many members can I have?',
      answer:
        'Unlimited. We do not have a limit on your membership capacity.',
    },
    {
      question: 'How many push notifications can I send per month?',
      answer: 'Unlimited. We do not have a limit on your push notifications.',
    },
    {
      question: 'Do you integrate with Seven Rooms?',
      answer:
        'Yes.',
    },
  ],
  [
    {
      question: 'Do you integrate with SimpleTexting.com?',
      answer:
        'Yes. We sync your member data directly with SimpleTexting.com.',
    },
    {
      question:
        'Do you integrate with Stripe for membership dues?',
      answer:
        'Yup! Members can pay their dues directly through your mobile app.',
    },
    {
      question:
        'Do you have a MailChimp integration?',
      answer:
        'Yes we do!',
    },
  ],
  [
    {
      question: 'What other apps do you have to add to our account?',
      answer:
        'We have apps for showing a daily speakeasy code and another for having an image gallery.',
    },
    {
      question: 'I have an idea for a feature. Can you add it to my club\'s app?',
      answer: 'Absolutely. Our platform is ripe for customization. We are hear to build the future of membership engagement.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
