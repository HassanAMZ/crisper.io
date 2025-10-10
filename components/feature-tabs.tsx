"use client";

import { Tabs } from "@/components/ui/tabs";
import { Container } from "@/components/ui/container";
import MuxEmbed from "@/components/mux-embed";
import {
  Brain,
  MessageCircle,
  Inbox,
  BookOpen,
  Users,
  BarChart3,
} from "lucide-react";

export function FeatureTabs() {
  const tabs = [
    {
      title: "AI Helpdesk",
      value: "ai-helpdesk",
      icon: <Brain className="h-5 w-5" />,
      description: " superpowers to your teams",
      content: (
        <MuxEmbed
          embedId="2ycrwGk9Mq02JzWDaH9sgWWaPC2ts1dvoQMPX5asddgY"
          className="w-full max-w-none"
        />
      ),
    },
    {
      title: "Chat Widget",
      value: "chat-widget",
      icon: <MessageCircle className="h-5 w-5" />,
      description: "Support from your website",
      content: (
        <MuxEmbed
          embedId="2ycrwGk9Mq02JzWDaH9sgWWaPC2ts1dvoQMPX5asddgY"
          className="w-full max-w-none"
        />
      ),
    },
    {
      title: "Shared Inbox",
      value: "shared-inbox",
      icon: <Inbox className="h-5 w-5" />,
      description: "Centralize your  communications",
      content: (
        <MuxEmbed
          embedId="2ycrwGk9Mq02JzWDaH9sgWWaPC2ts1dvoQMPX5asddgY"
          className="w-full max-w-none"
        />
      ),
    },
    {
      title: "Knowledge",
      value: "knowledge-base",
      icon: <BookOpen className="h-5 w-5" />,
      description: "Make your customers",
      content: (
        <MuxEmbed
          embedId="2ycrwGk9Mq02JzWDaH9sgWWaPC2ts1dvoQMPX5asddgY"
          className="w-full max-w-none"
        />
      ),
    },
    {
      title: "Support CRM",
      value: "support-crm",
      icon: <Users className="h-5 w-5" />,
      description: "Organize your customer data",
      content: (
        <MuxEmbed
          embedId="2ycrwGk9Mq02JzWDaH9sgWWaPC2ts1dvoQMPX5asddgY"
          className="w-full max-w-none"
        />
      ),
    },
    {
      title: "Support ",
      value: "support-analytics",
      icon: <BarChart3 className="h-5 w-5" />,
      description: "Monitor and track performance",
      content: (
        <MuxEmbed
          embedId="2ycrwGk9Mq02JzWDaH9sgWWaPC2ts1dvoQMPX5asddgY"
          className="w-full max-w-none"
        />
      ),
    },
  ];

  return (
    <section className="px-3">
      <Container>
        <div className="[perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full items-start justify-start">
          <Tabs
            tabs={tabs}
            containerClassName="w-full"
            tabClassName="min-w-0 flex-shrink-0"
            contentClassName="w-full"
          />
        </div>
      </Container>
    </section>
  );
}
