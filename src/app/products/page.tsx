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
  { image: "/assets/IMG_0212.png", title: "NextPara 650", indications: ""},
  { image: "/assets/IMG_0213.png", title: "Calgos-XT", indications: "Osteoporosis, Hypocalcemia, Rickets with osteomalacia, Ostodystrophy, Softening of bones, Pregnancy and lactation"},
  { image: "/assets/IMG_0214.png", title: "SpinIron", indications: "Iron deficiency anaemia, Haemoglobin deficiency, General weakness, Pregnancy and lactation, Chronic blood loss, Menopause haemorrhagic" },
  { image: "/assets/IMG_0215.png", title: "Claazole-D", indications: "Reflux oesophagitis, Gerd, Heartburn and hyperacidity, Gastric and peptic ulcers, Antibiotic induced gastritis, Regurgitation and flatulance" },
  { image: "/assets/IMG_0216.png", title: "AlumGos", indications: "Gastritis, Bleed and peptic ulcer, Ibs, Hitaus hernia, Esophagitis, Heartburn, Hyperacidity, Dyspepsia of pregnancy" },
  { image: "/assets/IMG_0217.png", title: "Trigos-L", indications: "Seasonal allergic rhinitis, Productive cough, Bronchial asthama, Bronchopneumonia, Perinial allergic rhinitis, Exercise induced bronchoconstriction" },
  { image: "/assets/IMG_0218.png", title: "Arcdextro", indications: "Dry / allergic cough, Running or blocked nose,Mouth and throat infection, Sinusitis, Common cold" },
  { image: "/assets/IMG_0219.png", title: "LevotaMol", indications: "Bronchitis, Bronchial asthama, Emphysema, Broncho pulmonary disease" },
  { image: "/assets/IMG_0220.png", title: "Bretmet 400", indications: "Prophylactic therapy for asthma, control & prevention of wheezing and shortness of breath, treatment of Chronic Obstructive Pulmonary Disease, chronic bhronchitis & emphysema" },
  { image: "/assets/IMG_0221.png", title: "LevotaMol-I", indications: "Management of bronchospasm, relief from wheezing, shortness of breath, chest tightness and coughing, therapy for asthma" },
];

export default function Products() {
  return (
    <div className="bg-zinc-200 pb-20 mb-20 overflow-hidden h-fit">
      <Alert>
        <AlertTitle className="text-center">Coming soon!</AlertTitle>
        <AlertDescription className="text-center">
          <p>
            Our product range will be in stock starting July 15 & available in leading online pharmacies
            starting August 2024.
          </p>
          <p>
            *Images used are for representational purposes only.
          </p>
        </AlertDescription>
      </Alert>

      <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-80 p-10 w-fit mt-20">
          {products.map((product, index) => (
            <div key={index} className="border-2 border-red-800 rounded-lg overflow-hidden">
            <Card className="h-full flex flex-col">
              <CardHeader className="flex-shrink-0 text-center">
                <CardTitle className="text-lg">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  height={300}
                  width={500}
                  quality={100}
                  className="p-6 object-contain"
                />
              </CardContent>
              <CardFooter className="flex-shrink-0">
                <div className="w-full text-center">
                  <p className="text-zinc-700 font-semibold text-sm">INDICATIONS:</p>
                  <p className="text-zinc-700 text-sm">{product.indications}</p>
                </div>
              </CardFooter>
            </Card>
          </div>
          ))}

        </div>
      </MaxWidthWrapper>
    </div>
  );
}