import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Filter, X } from "lucide-react";

const ShopSidebarFilters = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}) => {
  return (
    <div>
      {/* header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Filters</h2>

          <Badge variant="secondary">{selectedCategory.length}</Badge>
        </div>

        <div className="flex items-center gap-2">
          {/* Clear All Button */}

          <Button
            variant="ghost"
            size="sm"
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setSelectedCategory([])}
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        </div>
      </div>

      {/* category filter*/}
      {categories.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {categories.map((category) => (
              <div key={category._id} className="flex items-center space-x-2">
                <Checkbox
                  id={category._id}
                  checked={selectedCategory.includes(category._id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedCategory((prev) => [...prev, category._id]);
                    } else {
                      setSelectedCategory((prev) =>
                        prev.filter((id) => id !== category._id)
                      );
                    }
                  }}
                />
                <Label
                  htmlFor={`category-${category._id}`}
                  className="text-sm font-normal cursor-pointer flex-1"
                >
                  {category.name}
                </Label>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ShopSidebarFilters;
