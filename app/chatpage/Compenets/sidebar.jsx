"use client";

import {
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

export default function Component() {
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="w-full h-full bg-red-400 p-2"
    >
      <SidebarItems className="p-2 h-full">
        <SidebarItemGroup className="flex flex-col justify-between h-full">
          <div>
            <SidebarItem href="#" icon={HiChartPie}>
              Dashboard
            </SidebarItem>
            <SidebarCollapse icon={HiShoppingBag} label="E-commerce">
              <SidebarItem href="#">Products</SidebarItem>
              <SidebarItem href="#">Sales</SidebarItem>
              <SidebarItem href="#">Refunds</SidebarItem>
              <SidebarItem href="#">Shipping</SidebarItem>
            </SidebarCollapse>
            <SidebarItem href="#" icon={HiInbox}>
              Inbox
            </SidebarItem>
            <SidebarItem href="#" icon={HiUser}>
              Users
            </SidebarItem>
            <SidebarItem href="#" icon={HiShoppingBag}>
              Products
            </SidebarItem>
          </div>
          <div>
            <SidebarItem href="./../../login/" icon={HiArrowSmRight}>
              Sign In
            </SidebarItem>
            <SidebarItem href="#" icon={HiTable}>
              Sign Up
            </SidebarItem>
          </div>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
