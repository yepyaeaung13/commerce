import Image from "next/image";
import IconPlayStore from "../icons/IconPlayStore";
import IconAppStore from "../icons/IconAppStore";
import Link from "next/link";

export default function AppDownloadSection() {
  return (
    <section className="mt-16 rounded-2xl overflow-hidden h-[400]">
      <div className="relative">
        <Image
          src="/assets/app-download.jpg"
          alt="app download"
          width={1140}
          height={400}
          className="w-full h-auto absolute top-0 left-0"
        />
        <div className="absolute top-20 left-16 space-y-10">
          <h2 className="text-3xl font-bold text-primary-color">
            Stay Home and Get All <br />
            Your Essential From <br />
            Our Store!
          </h2>
          <div className="space-y-3">
            <p className="text-sm text-primary-color">
              Download the app from Google Play or App Store
            </p>
            <div className="flex gap-3">
              <Link
                href="https://play.google.com/store/apps/details?id=com.example.app"
                target="_blank"
                className="bg-black text-white flex gap-2 items-center font-medium cursor-pointer active:scale-95 transition-all duration-300 px-2 py-0 rounded-md"
              >
                <span className="w-6">
                  <IconPlayStore />
                </span>
                <span className="flex flex-col items-start -space-y-1">
                  <span className="text-[10px]">Get it on</span>
                  <span className="text-sm font-bold">Google Play</span>
                </span>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.example.app"
                target="_blank"
                className="bg-black text-white flex gap-2 items-center font-medium cursor-pointer active:scale-95 transition-all duration-300 px-2 py-1 rounded-md"
              >
                <span className="w-6">
                  <IconAppStore />
                </span>
                <span className="flex flex-col items-start -space-y-1">
                  <span className="text-[10px]">Download on the</span>
                  <span className="text-sm font-bold">App Store</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
