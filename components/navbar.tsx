"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  Lightbulb,
  TrendingUp,
  Users,
  FileText,
  LifeBuoy,
  Menu,
  LayoutDashboard,
} from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

interface AuthStatus {
  authenticated: boolean;
  user?: {
    username?: string;
    name?: string;
    email?: string;
  };
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, icon, href, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <div className="text-muted-foreground">{icon}</div>}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
);
ListItem.displayName = "ListItem";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [authStatus, setAuthStatus] = React.useState<AuthStatus>({
    authenticated: false,
  });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Check authentication status
    fetch("/api/auth/check")
      .then((res) => res.json())
      .then((data) => {
        setAuthStatus(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error checking auth:", error);
        setIsLoading(false);
      });
  }, []);

  const dashboardUrl = authStatus.user?.username
    ? `https://app.crisper.io/${authStatus.user.username}`
    : "https://app.crisper.io";

  return (
    <header className="sticky top-0 z-50 w-full pt-3 px-3">
      <Container>
        <div className="flex items-center justify-between rounded border border-border bg-background/50 backdrop-blur-md p-2">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <Image
                src="/logo.png"
                alt="Crisper.io Logo"
                width={28}
                height={28}
                className="rounded"
              />
              <span className="text-foreground font-medium">crisper.io</span>
            </Link>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-60 gap-1 p-2">
                      <ListItem
                        href="/how-it-works"
                        title="How it works"
                        icon={<Lightbulb className="size-4" />}
                      >
                        Learn how our platform works
                      </ListItem>
                      <ListItem
                        href="/ad-revenue-booster"
                        title="Ad revenue booster"
                        icon={<TrendingUp className="size-4" />}
                      >
                        Maximize your ad revenue
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-60 gap-1 p-2">
                      <ListItem
                        href="/about"
                        title="About us"
                        icon={<Users className="size-4" />}
                      >
                        Learn about our mission
                      </ListItem>
                      <ListItem
                        href="/blog"
                        title="Blog"
                        icon={<FileText className="size-4" />}
                      >
                        Read our latest articles
                      </ListItem>
                      <ListItem
                        href="/support"
                        title="Support / Help center"
                        icon={<LifeBuoy className="size-4" />}
                      >
                        Get help when you need it
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/integration"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "cursor-pointer"
                    )}
                  >
                    Integration
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/pricing"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "cursor-pointer"
                    )}
                  >
                    Pricing
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-2">
            <AnimatedThemeToggler className="inline-flex items-center justify-center rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 cursor-pointer" />
            <div className="hidden items-center gap-2 sm:flex">
              {!isLoading &&
                (authStatus.authenticated ? (
                  <Button asChild>
                    <Link
                      href={dashboardUrl}
                      className="flex items-center gap-2"
                    >
                      <LayoutDashboard className="size-4" />
                      Go to Dashboard
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Button variant="secondary" asChild>
                      <Link href="https://app.crisper.io/login">Login</Link>
                    </Button>
                    <Button asChild>
                      <Link href="https://app.crisper.io/signup">Sign up</Link>
                    </Button>
                  </>
                ))}
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[90vw] max-w-sm sm:max-w-md flex flex-col"
              >
                <nav className="flex flex-col gap-4 mt-8 px-2 flex-1">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-muted-foreground px-2">
                      Product
                    </span>
                    <Link
                      href="/how-it-works"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 rounded px-2 py-2 text-sm hover:bg-accent cursor-pointer"
                    >
                      <Lightbulb className="size-4 text-muted-foreground" />
                      How it works
                    </Link>
                    <Link
                      href="/ad-revenue-booster"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 rounded px-2 py-2 text-sm hover:bg-accent cursor-pointer"
                    >
                      <TrendingUp className="size-4 text-muted-foreground" />
                      Ad revenue booster
                    </Link>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-muted-foreground px-2">
                      Resources
                    </span>
                    <Link
                      href="/about"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 rounded px-2 py-2 text-sm hover:bg-accent cursor-pointer"
                    >
                      <Users className="size-4 text-muted-foreground" />
                      About us
                    </Link>
                    <Link
                      href="/blog"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 rounded px-2 py-2 text-sm hover:bg-accent cursor-pointer"
                    >
                      <FileText className="size-4 text-muted-foreground" />
                      Blog
                    </Link>
                    <Link
                      href="/support"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 rounded px-2 py-2 text-sm hover:bg-accent cursor-pointer"
                    >
                      <LifeBuoy className="size-4 text-muted-foreground" />
                      Support / Help center
                    </Link>
                  </div>

                  <div className="flex flex-col gap-2 pt-4 border-t">
                    <Link
                      href="/integration"
                      onClick={() => setIsOpen(false)}
                      className="rounded px-2 py-2 text-sm hover:bg-accent cursor-pointer"
                    >
                      Integration
                    </Link>
                    <Link
                      href="/pricing"
                      onClick={() => setIsOpen(false)}
                      className="rounded px-2 py-2 text-sm hover:bg-accent cursor-pointer"
                    >
                      Pricing
                    </Link>
                  </div>
                </nav>

                <div className="flex flex-col gap-2 p-4 border-t mt-auto">
                  {!isLoading &&
                    (authStatus.authenticated ? (
                      <Button asChild>
                        <Link
                          href={dashboardUrl}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2"
                        >
                          <LayoutDashboard className="size-4" />
                          Go to Dashboard
                        </Link>
                      </Button>
                    ) : (
                      <>
                        <Button variant="secondary" asChild>
                          <Link
                            href="https://app.crisper.io/login"
                            onClick={() => setIsOpen(false)}
                          >
                            Login
                          </Link>
                        </Button>
                        <Button asChild>
                          <Link
                            href="https://app.crisper.io/signup"
                            onClick={() => setIsOpen(false)}
                          >
                            Sign up
                          </Link>
                        </Button>
                      </>
                    ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
