import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Video } from "lucide-react";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
    title: "CA Field Day",
    description: "Farmers learning about minimum tillage techniques",
  },
  {
    url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d",
    title: "Soil Conservation",
    description: "Demonstrating soil cover practices",
  },
];

const videos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9",
    title: "CA Training Session",
    description: "Workshop on conservation agriculture practices",
  },
];

export default function Gallery() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>

      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="photos">
            <Image className="h-4 w-4 mr-2" />
            Photos
          </TabsTrigger>
          <TabsTrigger value="videos">
            <Video className="h-4 w-4 mr-2" />
            Videos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="photos">
          <div className="grid md:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <Card key={photo.title}>
                <CardContent className="p-0">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{photo.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {photo.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos">
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card key={video.title}>
                <CardContent className="p-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {video.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
