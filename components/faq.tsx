"use client";

import { Container } from "@/components/ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How does the AI helpdesk work?",
      answer:
        "Our AI helpdesk uses advanced machine learning to understand customer queries and provide instant, accurate responses. It learns from your knowledge base and past interactions to deliver personalized support 24/7.",
    },
    {
      question: "Can I integrate the chat widget with my existing website?",
      answer:
        "Yes! Our chat widget is designed for easy integration. Simply add a few lines of code to your website and the widget will appear. It's fully customizable to match your brand's look and feel.",
    },
    {
      question: "What makes your shared inbox different from email?",
      answer:
        "Our shared inbox centralizes all customer communications from email, chat, social media, and other channels into one unified platform. Your team can collaborate, assign conversations, and maintain context across all touchpoints.",
    },
    {
      question: "How can I track support performance with analytics?",
      answer:
        "Our analytics dashboard provides real-time insights into response times, customer satisfaction, team performance, and conversation trends. You can create custom reports and set up automated alerts for key metrics.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started. You can explore all our tools and see how they work with your team before committing.",
    },
    {
      question: "What kind of customer support do you provide?",
      answer:
        "We provide 24/7 customer support via chat, email, and phone. Our support team includes technical specialists who can help with integrations, custom configurations, and troubleshooting.",
    },
    {
      question: "Can I customize the knowledge base to match my brand?",
      answer:
        "Absolutely! Our knowledge base is fully customizable with your branding, colors, and styling. You can organize content with categories, tags, and search functionality to help customers find answers quickly.",
    },
    {
      question: "How secure is my customer data?",
      answer:
        "Security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, and regular security audits. Your data is stored in secure, compliant data centers with 99.9% uptime guarantee.",
    },
  ];

  return (
    <section className="px-3">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our platform. Can't find the
            answer you're looking for? Please chat with our friendly team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 py-2 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
