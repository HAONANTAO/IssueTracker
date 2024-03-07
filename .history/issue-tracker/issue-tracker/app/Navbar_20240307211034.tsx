"use client";
import {
  Avatar,
  Box,
  Button,
  Container,
  DropdownMenu,
  Flex,
} from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa6";
const Navbar = () => {
  const { status, data: session } = useSession();
  // links labels

  return (
    <>
      <nav className="border-b space-x-4 px-2 py-2 mb-2 ">
        <Container>
          <Flex justify="between">
            <RenderLink />
           
          </Flex>
        </Container>
      </nav>
    </>
  );
};
const RenderLink = () => {
  const currentPath = usePathname();
  const link = [
    { label: "Dashboard", href: "/" },
    { label: "Issue", href: "/issues" },
  ];
  return (
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
                currentPath === l.href ? "text-zinc-800" : "text-zinc-400"
              }`}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </Flex>
  );

  const Profile=()=>{
    return 
  }
};
export default Navbar;
