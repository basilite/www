import React from "react";
import Link from "next/link";
import { LinksItems } from "@/app/lib/types/links";
import Image from "next/image";

export default function Card({ data }: { data: LinksItems }) {
  const Container: React.ElementType = data.link ? Link : "div";

  return (
    <Container
      {...(data.link && { href: data.link, target: "_blank" })}
      className={`group flex-col relative max-lg:!w-full ${
        data.size.rows == 1 && "h-44"
      } max-lg:h-44 rounded-[22px] overflow-hidden flex justify-center items-center border-2 border-neutral-900/10 dark:border-neutral-100/10`}
      style={{
        gridColumn: `${data.size.cols} span / ${data.size.cols} span`,
        gridRow: `${data.size.rows} span / ${data.size.rows} span`,
        cursor: data.link && "pointer",
      }}
    >
      {data.link && (
        <div className="absolute z-10 top-0 left-0 p-3 w-full h-full hover:bg-black/10 transition-colors flex justify-end">
          <div className="h-fit bg-white/20 p-1 rounded-full border-2 border-white/20 group-hover:border-white/40">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.25403 1.46875C2.83987 1.46875 2.5041 1.80446 2.50403 2.21862C2.50396 2.63289 2.83977 2.96875 3.25403 2.96875H5.94325L1.47358 7.43842C1.18068 7.73131 1.18068 8.20619 1.47358 8.49908C1.76647 8.79197 2.24134 8.79197 2.53424 8.49908L7.00299 4.03033L7.00314 6.71982C7.00316 7.13345 7.34024 7.46875 7.75387 7.46875C8.16752 7.46875 8.50108 7.13342 8.50108 6.71978V2.21875C8.50108 1.80454 8.16529 1.46875 7.75108 1.46875H3.25403Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      )}
      {data.label && (
        <div className="absolute z-20 bottom-0 left-0 p-3 pointer-events-none">
          <div className="bg-white/60 text-black px-3 py-1 rounded-[34px] text-sm font-normal">
            {data.label}
          </div>
        </div>
      )}
      {data.image && (
        <Image
          src={data.image}
          alt={`${data.label} image`}
          fill
          className="w-full select-none object-cover"
        />
      )}
      {data.video && (
        <video
          className="w-full object-cover absolute h-full pointer-events-none"
          src={data.video}
          controls={false}
          autoPlay
          muted
          loop
        ></video>
      )}
    </Container>
  );
}
