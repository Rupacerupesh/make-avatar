import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  HumanClothComponent,
  HumanClothesOptionsKeysType,
} from "./human-shapes";
import { HumanShapeOptionType } from "@/lib/types";

interface ChangeFeatureHumanProps {
  viewPort: string;
  label: string;
  feature: string;
  options: HumanShapeOptionType;
  currentValue: string;
  onChange: (feature: string, index: number | string) => void;
  color: string;
}

const ChangeFeatureHuman: React.FC<ChangeFeatureHumanProps> = ({
  label,
  options,
  currentValue,
  onChange,
  feature,
  viewPort,
  color,
}) => {
  const optionLabels = Object.keys(options);

  const cycleOption = (increment: number) => {
    const index = optionLabels.indexOf(currentValue);
    const newIndex =
      (index + increment + optionLabels.length) % optionLabels.length;
    const newValue = optionLabels[newIndex];
    onChange(feature, newValue);
  };

  const renderOptions = (option: string) => {
    const isSelected = currentValue === option;

    return (
      <Button
        size={"lg"}
        key={option}
        variant="secondary"
        className={`p-2 rounded flex flex-col items-center justify-center h-full w-full ${
          isSelected ? "border-2 border-primary" : ""
        }`}
        onClick={() => onChange(feature, option)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="50"
          viewBox={viewPort}
        >
          {label === "Cloth" ? (
            <HumanClothComponent
              clothKey={option as HumanClothesOptionsKeysType}
              color={color}
            />
          ) : (
            (options[option] as JSX.Element)
          )}
        </svg>

        <span className="text-xs">{option}</span>
      </Button>
    );
  };

  return (
    <div className="flex flex-row">
      <div className="basis-1/4 min-w-32  content-center">
        <span className="text-md font-medium">{label}</span>
      </div>
      <div className="basis-3/4">
        <div className=" flex items-center justify-center bg-slate-200 rounded-lg">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => cycleOption(-1)}
            aria-label={`Previous ${label} option`}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="50"
              viewBox={viewPort}
            >
              {label === "Cloth" ? (
                <HumanClothComponent
                  clothKey={currentValue as HumanClothesOptionsKeysType}
                  color={color}
                />
              ) : (
                (options[currentValue] as JSX.Element)
              )}
            </svg>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => cycleOption(1)}
            aria-label={`Next ${label} option`}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                aria-label={`Show all ${label} options`}
              >
                <ChevronDown className="h-42 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full">
              <div className="grid grid-cols-4 gap-2">
                {optionLabels.map(renderOptions)}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default ChangeFeatureHuman;
