import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="container max-w-screen-xl py-20">
      <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        <div>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Reach out to our customer support team.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <FaqItem
              question="What makes this SaaS special?"
              answer="Our Next.js SaaS platform offers unparalleled performance, scalability, and developer experience, making it the perfect foundation for your project."
            />
            <FaqItem
              question="Is my data secure?"
              answer="Yes, we implement industry-standard security protocols and regular audits to ensure your data remains protected."
            />
            <FaqItem
              question="Do you offer a free trial?"
              answer="We offer a 14-day free trial with no credit card required, allowing you to explore all features before committing."
            />
          </Accordion>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full">
            <FaqItem
              question="How easy is setup and onboarding?"
              answer="Our setup process is streamlined and typically takes less than 5 minutes. Our documentation guides you through each step."
            />
            <FaqItem
              question="What integrations are available?"
              answer="We integrate with all major productivity tools, payment processors, and analytics platforms. Custom integrations are also available."
            />
            <FaqItem
              question="Can I customize for my business needs?"
              answer="Our platform is built with customization in mind, offering extensive API access and configuration options."
            />
            <FaqItem
              question="What type of payment methods do you support?"
              answer="We support all major credit cards, PayPal, bank transfers, and various regional payment methods."
            />
          </Accordion>
        </div>
      </div>
    </section>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <AccordionItem value={question}>
      <AccordionTrigger className="text-left">{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}

