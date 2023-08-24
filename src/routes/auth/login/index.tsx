import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { Form, Link, routeAction$, z, zod$ } from "@builder.io/qwik-city";

import { prisma } from "~/utils/prisma.server";
import { PageHead } from "~/components/page/head";

import crypto from "node:crypto";

export const useLogin = routeAction$(async (data, requestEvent) => {
  zod$({
    email: z.string().email(),
  });

  // Find if the user exists
  const user = await prisma.user.findUnique({
    where: { email: data.email as string },
  });

  // If the user doesn't exist, return a 404
  if (!user) {
    return requestEvent.fail(404, {
      errorMessage: "User not found",
    });
  }

  // If the user exists, create an auth token
  const token = await prisma.token.create({
    data: {
      token: crypto.randomBytes(128).toString("base64"),
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  if (!token) {
    return requestEvent.fail(500, {
      errorMessage: "Unable to create token",
    });
  }

  // Return the auth token as a cookie
  requestEvent.cookie.set("auth_token", token.token, {
    path: "/",
  });
  throw requestEvent.redirect(303, "/");
});

export default component$(() => {
  const login = useLogin();

  return (
    <>
      <PageHead title="Login">
        <div class="flex flex-row gap-8">
          <Link href="/auth/register">Register</Link>
          <Link href="/auth/reset">Reset password</Link>
        </div>
      </PageHead>
      <div class="container mx-auto">
        <Form class="" action={login}>
          <label for="email">Email</label>
          <input type="email" name="email" id="email" class="input-base" />

          <button type="submit" class="button-primary">
            Login
          </button>

          {login.value?.errorMessage}
        </Form>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Login",
};
