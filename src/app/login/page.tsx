"use client";

import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <div className="bg-white flex flex-col items-center justify-center h-screen rounded-xl relative gap-5">
      <button
        onClick={() => router.back()}
        className="absolute top-5 left-5 hover:underline underline-offset-2 cursor-pointer"
      >
        back
      </button>
      <h1 className="text-xl">Welcome!</h1>
      <form className="flex flex-col gap-5 w-72">
        <input
          className="border rounded-md outline-none px-2 py-1 placeholder:text-sm focus:border-primary-color duration-200"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
        />
        <input
          className="border rounded-md outline-none px-2 py-1 placeholder:text-sm focus:border-primary-color duration-200"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <button
          className="bg-primary-color px-1 py-1 rounded-md text-white"
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="text-sm text-center space-y-3">
        <p>
          Don't have an account?{" "}
          <a href="/register" className="underline underline-offset-2">
            Register here
          </a>
        </p>
        <p>
          <a href="/forgot-password">Forgot password?</a>
        </p>
      </div>
    </div>
  );
}

export default page;
