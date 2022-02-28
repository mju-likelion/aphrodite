import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import _ from "lodash";

export function middleware(request: NextRequest) {
  // create an instance of the class to access the public methods. This uses `next()`,
  // you could use `redirect()` or `rewrite()` as well
  const response = NextResponse.next();
  const targetPage: string | undefined = request.page.name;
  const cookie: string | undefined = request.cookies.jwt;

  const allowedPage = ["signup", "auth"];
  const allowed = allowedPage.filter(
    (page) => targetPage?.split("/")[1] === page,
  );

  if (
    allowed.length === 0 &&
    targetPage !== "/" &&
    !_.isNil(request.page.name) &&
    !cookie
  ) {
    return NextResponse.redirect("/");
  }

  if (cookie && allowed.length === 0) {
    return NextResponse.redirect("/");
  }

  return response;
}
