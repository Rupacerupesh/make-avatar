import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ShapeOptionType } from "@/lib/types";
import { createPreview } from "@/lib/svg";

interface ChangeFeatureProps {
  viewPort: string;
  label: string;
  feature: string;
  currentValue: string;
  onChange: (feature: string, index: number | string) => void;
  color: string;
  options: ShapeOptionType;
}

const ChangeFeature: React.FC<ChangeFeatureProps> = ({
  label,
  currentValue,
  onChange,
  viewPort,
  feature,
  color,
  options,
}) => {
  const shapeSVG = createPreview(
    viewPort,
    50,
    options[currentValue](color),
    ""
  );

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
        <div
          dangerouslySetInnerHTML={{
            __html: createPreview(viewPort, 40, options[option](color), ""),
          }}
        />
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

          <div dangerouslySetInnerHTML={{ __html: shapeSVG }} />

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

export default ChangeFeature;
