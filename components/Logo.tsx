'use client';

import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/akoremd-logo4.png"
      alt="AkoreMD"
      width={280}
      height={80}
      className="logo-img"
      priority
    />
  );
}
