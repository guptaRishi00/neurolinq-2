import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

export default function Header({ data }: any) {
  return (
    <div className="w-full bg-[#6E7D66] lg:p-8 lg:flex lg:justify-between lg:items-center">
      <Link href={"/"}>
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.logo.url}`}
          alt={"logo"}
          width={100}
          height={100}
          className="lg:w-50"
        />
      </Link>

      <div className="lg:flex lg:justify-between lg:items-center lg:gap-5">
        {data.links.map((link: any) => (
          <div className="" key={link.id}>
            <Link
              href={link?.href || "/"}
              className="text-white hover:text-[#D4AF84] transition-all duration-300 text-lg"
            >
              {link?.text}
            </Link>
          </div>
        ))}
      </div>

      <div className="lg:flex lg:items-center lg:gap-2">
        {data?.button?.map((item: any) => (
          <Button
            color={item.color}
            href={`/${item.href || "/"}`}
            key={item.id}
          >
            {item.text}
          </Button>
        ))}
      </div>
    </div>
  );
}
