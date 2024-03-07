"use client";
import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Avatar, Box, Container, DropdownMenu, Flex } from "@radix-ui/themes";
const Navbar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  // links labels
  const link = [
    { label: "Dashboard", href: "/" },
    { label: "Issue", href: "/issues" },
  ];

  return (
    <>
      <nav className="border-b space-x-4 px-2 py-2 mb-2 ">
        <Container>
          <Flex justify="between">
            <Flex align="center" gap="3">
              <Link href="/">
                <FaBug />
              </Link>
              <ul className="flex space-x-4 ">
                {link.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className={`hover:text-zinc-600 transition-colors ${
                        currentPath === l.href
                          ? "text-zinc-800"
                          : "text-zinc-400"
                      }`}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Flex>
            <Box>
              {status === "unauthenticated" && (
                <Link href="/api/auth/signin">Login</Link>
              )}
              {status === "authenticated" && (
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Avatar
                      src={session.user!.image!}
                      fallback="?"
                      size="3"
                      radius="full"
                      className="cursor-pointer"></Avatar>
                  </DropdownMenu.Trigger>
                  <Link href="/api/auth/signout">Logout</Link>
                </DropdownMenu.Root>
              )}
            </Box>
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
