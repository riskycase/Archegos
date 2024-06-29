import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { cn } from "../../lib/utils";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";

import p1 from "../../components/assets/meds/IMG_0212.png";
import p2 from "../../components/assets/meds/IMG_0213.png";
import p3 from "../../components/assets/meds/IMG_0214.png";
import p4 from "../../components/assets/meds/IMG_0215.png";
import p5 from "../../components/assets/meds/IMG_0216.png";
import p6 from "../../components/assets/meds/IMG_0217.png";
import p7 from "../../components/assets/meds/IMG_0218.png";
import p8 from "../../components/assets/meds/IMG_0219.png";
import p9 from "../../components/assets/meds/IMG_0220.png";
import p10 from "../../components/assets/meds/IMG_0221.png";

const products = [
  { image: p1, title: "NextPara 650" },
  { image: p2, title: "Calgos-XT" },
  { image: p3, title: "SpinIron" },
  { image: p4, title: "Claazole-D" },
  { image: p5, title: "AlumGos" },
  { image: p6, title: "Trigos-L" },
  { image: p7, title: "Arcdextro" },
  { image: p8, title: "LevotaMol" },
  { image: p9, title: "Bretmet 400" },
  { image: p10, title: "LevotaMol-I" },
];

export default function Products() {
  return (
    <div className="bg-zinc-200 pb-20">
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          <p>
            Our product range will be available in leading online pharmacies
            starting August 2024.
          </p>
        </AlertDescription>
      </Alert>

      <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
          {products.map((product, index) => (
            <div key={index} className="border-2 border-red-800 rounded-md">
              <Card className="max-h-full text-center flex flex-col items-center overflow-hidden">
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    height={300}
                    quality={100}
                    className="p-6"
                  />
                </CardContent>
                <CardFooter className="text-center flex-shrink-0">
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}