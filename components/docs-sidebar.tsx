"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <ShadcnSidebar className="sticky top-16 h-[calc(100vh-4rem)] shadow-md">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-blue-700 font-semibold">Getting Started</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname === "/docs"} className="hover:bg-blue-50">
                    <Link href="/docs">Introduction</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="hover:bg-blue-50">
                    <Link href="/docs#setup">Setup</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="text-blue-700 font-semibold">Training</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="hover:bg-blue-50">
                    <Link href="/docs#training">Fine-tuning Process</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="hover:bg-blue-50">
                    <Link href="/docs#training">Co-training Loop</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="text-blue-700 font-semibold">Inference</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="hover:bg-blue-50">
                    <Link href="/docs#inference">Model Loading</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="hover:bg-blue-50">
                    <Link href="/docs#inference">Retrieval Augmentation</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="hover:bg-blue-50">
                    <Link href="/docs#inference">Chain-of-Thought</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </ShadcnSidebar>
    </SidebarProvider>
  )
}
