"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import defaultAvatar from "../../../../assets/user-avatar.png";

export default function ImageUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  return (
    <div className="flex items-center flex-col gap-4">
      <Image
        src={image ?? defaultAvatar}
        alt="Preview"
        width={90}
        height={90}
        className="rounded-full w-[90] h-[90] object-cover"
      />

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />

      <Button onClick={() => inputRef.current?.click()}>
        اضف صورة 
      </Button>
    </div>
  );
}