"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();

  const showSidebar = pathname.startsWith("/docs"); // Pages to show sidebar

  if (!showSidebar) return null;

  return (
    <Sidebar className="w-64 border-r">
      <SidebarHeader className="p-4">
        <Link href="/" passHref>
          <SidebarMenuButton className={"text-lg font-bold mb-4"}>
            Back
          </SidebarMenuButton>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/docs" passHref>
              <SidebarMenuButton
                className={pathname === "/docs" ? "font-semibold " : ""}
              >
                Getting Started
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Link href="/docs/animal" passHref>
              <SidebarMenuButton
                className={pathname === "/docs/animal" ? "font-semibold " : ""}
              >
                Animal
              </SidebarMenuButton>
            </Link>
            <SidebarMenuSub>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>Eyes</SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>Ears</SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>Muzzle</SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>Eyebrows</SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>Hair</SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>Patterns</SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>Name</SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Link href="/docs/human" passHref>
              <SidebarMenuButton
                className={pathname === "/docs/human" ? "font-bold  " : ""}
              >
                Human
              </SidebarMenuButton>
            </Link>
            <SidebarMenuSub>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>Eyes</SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>Mouth</SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>Cloth</SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>Eyebrows</SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>Hair</SidebarMenuSubButton>
              </SidebarMenuSubItem>
              <SidebarMenuSubItem>
                <SidebarMenuSubButton>Name</SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
