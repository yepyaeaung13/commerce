"use client";

import IconBack from "@/components/icons/IconBack";
import IconGoogle from "@/components/icons/IconGoogle";
import { IconMail } from "@/components/icons/IconMail";
import IconPassword from "@/components/icons/IconPassword";
import Image from "next/image";
import Link from "next/link";

function LoginPage() {
  return (
    <div className="bg-white h-screen my-5 rounded-xl relative flex justify-center items-center">
      <Link
        href={"/"}
        className="absolute top-5 left-5 flex items-center hover:underline underline-offset-2 cursor-pointer"
      >
        <IconBack /> home
      </Link>

      <div className="relative w-2/3 mx-auto flex items-center">
        <Image
          src={"/assets/login-bg.svg"}
          alt="login photo"
          width={400}
          height={300}
          className="w-full"
        />
        <div className="absolute left-0 flex flex-col items-start space-y-5">
          <form className="flex flex-col gap-5 w-96 bg-white/95 px-7 py-10 rounded-xl shadow-2xl">
            <div className="space-y-0.5">
              <h1 className="text-xl font-bold text-primary-color">Login</h1>
              <h3 className="text-xs text-gray-500">
                Please login to continue.
              </h3>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-3 px-2 py-0.5 border rounded-md focus:border-primary-color duration-200">
                <IconMail className="size-6" />
                <input
                  className="w-full outline-none px-2 py-1 placeholder:text-sm"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  required
                />
              </div>

              <div className="flex items-center gap-3 px-2 py-0.5 border rounded-md focus:border-primary-color duration-200">
                <IconPassword className="size-6" />
                <input
                  className="w-full outline-none px-2 py-1 placeholder:text-sm"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div className="w-2/3 mx-auto flex flex-col gap-2 items-center">
              <button
                className="w-full bg-primary-color px-1 py-1.5 rounded-md text-white cursor-pointer"
                type="submit"
              >
                Login
              </button>
              <p>or</p>
              <button className="w-full bg-white border px-1 py-1.5 rounded-md flex items-center justify-center gap-1.5 shadow-2xl cursor-pointer">
                <IconGoogle /> Google
              </button>
            </div>
            <div className="text-sm text-center space-y-3">
              <p>
                {"Don't have an account? "}
                <a href="/register" className="underline underline-offset-2">
                  Register
                </a>
              </p>
              <p>
                <a href="/forgot-password">Forgot password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
