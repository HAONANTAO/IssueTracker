export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/newIssue", "/issues/edit/:id+"],
};
