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
import Skeleton from "react-loading-skeleton";
const Navbar = () => {
  return (
    <>
      <nav className="border-b space-x-4 px-2 py-2 mb-2 ">
        <Container>
          <Flex justify="between">
            <RenderLink />
            <Profile />
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
};
const Profile = () => {
  const { status, data: session } = useSession();

  return (
    <Box>
      {status === "loading" && <Skeleton></Skeleton>}
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
          <DropdownMenu.Content>
            {session.user?.name}
            <br />
            {session.user?.email}

            <Button variant="soft">
              <Link href="/api/auth/signout">Logout</Link>
            </Button>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )}
    </Box>
  );
};
export default Navbar;
