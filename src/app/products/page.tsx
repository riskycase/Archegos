import Image from "next/image";
import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";

const products = [
  { image: "/assets/meds/IMG_0212.png", title: "NextPara 650" },
  { image: "/assets/meds/IMG_0213.png", title: "Calgos-XT" },
  { image: "/assets/meds/IMG_0214.png", title: "SpinIron" },
  { image: "/assets/meds/IMG_0215.png", title: "Claazole-D" },
  { image: "/assets/meds/IMG_0216.png", title: "AlumGos" },
  { image: "/assets/meds/IMG_0217.png", title: "Trigos-L" },
  { image: "/assets/meds/IMG_0218.png", title: "Arcdextro" },
  { image: "/assets/meds/IMG_0219.png", title: "LevotaMol" },
  { image: "/assets/meds/IMG_0220.png", title: "Bretmet 400" },
  { image: "/assets/meds/IMG_0221.png", title: "LevotaMol-I" },
];

export default function Products() {
  return (
    <div className="bg-zinc-200 pb-20">
      <Alert>
        <AlertTitle className="text-center">Coming soon!</AlertTitle>
        <AlertDescription className="text-center">
          <p>
            Our product range will be in stock starting July 15 & available in leading online pharmacies
            starting August 2024.
          </p>
        </AlertDescription>
      </Alert>

      <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-80 p-10 w-fit">
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