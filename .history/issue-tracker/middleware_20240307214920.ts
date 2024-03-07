export { default } from "next-auth/middleware";
import from "next"

export const config = {
  matcher: ["/issues/new", "/issues/edit/:id+"],
};
