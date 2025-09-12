import { Button } from "@/components/ui/button";
import { X, ExternalLink } from "lucide-react";
import { useState } from "react";

const ProductHuntBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-surface-highlight border-b border-border-light">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-orange-500 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <span className="text-text-primary text-sm">
              We are on Product Hunt! It would be great if you could take a moment to
            </span>
            <Button 
              variant="link" 
              size="sm" 
              className="text-text-accent hover:text-text-accent p-0 h-auto text-sm underline"
            >
              review us and show your support
              <ExternalLink className="ml-1 w-3 h-3" />
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="h-6 w-6 p-0 hover:bg-surface"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductHuntBanner;