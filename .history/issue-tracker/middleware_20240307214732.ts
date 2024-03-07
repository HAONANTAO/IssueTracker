export { default } from "next/auth";

export const config = {
  matcher: ["/issues/new", "/issues/edit/:id+"],
};
