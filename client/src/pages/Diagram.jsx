import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Circle } from "lucide-react";

function Diagram() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
      {/* Top Circle Container */}
      <div className="relative flex flex-wrap justify-center items-center max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
        {/* Invisible border to match the image diagram - make space for the circles */}
        {/* Network/Partnership */}
        <Button
          className="rounded-full bg-orange-400 text-white hover:bg-orange-500 shadow-md m-2 transition-colors duration-200 flex items-center justify-center px-4 py-2 text-sm font-medium"
        >
          <Circle className="mr-2 h-4 w-4" />
          Network/Partnership
        </Button>

        {/* Knowledge & Information Exchange */}
        <Button
          className="rounded-full bg-yellow-400 text-white hover:bg-yellow-500 shadow-md m-2 transition-colors duration-200 flex items-center justify-center px-4 py-2 text-sm font-medium"
        >
          <Circle className="mr-2 h-4 w-4" />
          Knowledge & Info
        </Button>

        {/* Policy Advocacy & Lobbying */}
        <Button
          className="rounded-full bg-green-400 text-white hover:bg-green-500 shadow-md m-2 transition-colors duration-200 flex items-center justify-center px-4 py-2 text-sm font-medium"
        >
          <Circle className="mr-2 h-4 w-4" />
          Policy & Advocacy
        </Button>

        {/* Capacity Building */}
        <Button
          className="rounded-full bg-gray-400 text-white hover:bg-gray-500 shadow-md m-2 transition-colors duration-200 flex items-center justify-center px-4 py-2 text-sm font-medium"
        >
          <Circle className="mr-2 h-4 w-4" />
          Capacity Building
        </Button>

        {/* Institutional Dev */}
        <Button
          className="rounded-full bg-blue-400 text-white hover:bg-blue-500 shadow-md m-2 transition-colors duration-200 flex items-center justify-center px-4 py-2 text-sm font-medium"
        >
          <Circle className="mr-2 h-4 w-4" />
          Institutional Dev
        </Button>
      </div>

      {/* Arrow */}
      <ArrowDown className="h-8 w-8 text-gray-700 mb-6" />

      {/* Main Card */}
      <Card className="w-full max-w-2xl bg-blue-50 rounded-xl shadow-xl overflow-hidden border border-blue-200">
        <CardContent className="p-8 text-center">
          <p className="text-xl font-semibold text-blue-800 leading-relaxed">
            Promotion + Adoption + Upscaling + Practice of Conservation
            Agriculture in Kenya
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Diagram;
