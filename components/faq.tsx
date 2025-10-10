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
      id: "faq-ai-helpdesk",
      question: "How does the AI helpdesk work?",
      answer:
        "Our AI helpdesk uses advanced machine learning to understand customer queries and provide instant, accurate responses. It learns from your knowledge base and past interactions to deliver personalized support 24/7.",
    },
    {
      id: "faq-chat-widget-integration",
      question: "Can I integrate the chat widget with my existing website?",
      answer:
        "Yes! Our chat widget is designed for easy integration. Simply add a few lines of code to your website and the widget will appear. It's fully customizable to match your brand's look and feel.",
    },
    {
      id: "faq-shared-inbox",
      question: "What makes your shared inbox different from email?",
      answer:
        "Our shared inbox centralizes all customer communications from email, chat, social media, and other channels into one unified platform. Your team can collaborate, assign conversations, and maintain context across all touchpoints.",
    },
    {
      id: "faq-analytics",
      question: "How can I track support performance with analytics?",
      answer:
        "Our analytics dashboard provides real-time insights into response times, customer satisfaction, team performance, and conversation trends. You can create custom reports and set up automated alerts for key metrics.",
    },
    {
      id: "faq-free-trial",
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started. You can explore all our tools and see how they work with your team before committing.",
    },
    {
      id: "faq-customer-support",
      question: "What kind of customer support do you provide?",
      answer:
        "We provide 24/7 customer support via chat, email, and phone. Our support team includes technical specialists who can help with integrations, custom configurations, and troubleshooting.",
    },
    {
      id: "faq-knowledge-base-customization",
      question: "Can I customize the knowledge base to match my brand?",
      answer:
        "Absolutely! Our knowledge base is fully customizable with your branding, colors, and styling. You can organize content with categories, tags, and search functionality to help customers find answers quickly.",
    },
    {
      id: "faq-data-security",
      question: "How secure is my customer data?",
      answer:
        "Security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, and regular security audits. Your data is stored in secure, compliant data centers with 99.9% uptime guarantee.",
    },
  ];

  return (
    <section className="px-3">
      <Container>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
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
      </Container>
    </section>
  );
}
