import Image from "next/image";
import Link from "next/link";

export default function LeftSidebar() {
  return (
    <section className="left-sidebar">
        <nav className="flex flex-col gap-6">
            <Link href="/" className="flex cursor-pointer items-center gap-3 pb-10 max-lg:justify-center">
            <Image src="/icons/logo.svg" alt="logo" width={23} height={23}  />
            <h1 className="text-24 font-extrabold text-white-1 max-lg:hidden">Podcast Platform</h1>
            </Link>

          {[
            {
            route: "/profile",
            label: "Profile",
            imageURL: "/icons/microphone.svg"
          },
          {
            route: "/home",
            label: "Home",
            imageURL: "/icons/home.svg"
          }
          ].map(({route,label,imageURL}) => {
            return <Link href={route}>{label}</Link>
          })}
        </nav>
    </section>
  );
}