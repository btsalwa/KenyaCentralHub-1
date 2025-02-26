import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { insertNewsSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { queryClient } from "@/lib/queryClient";

export default function NewsManagement() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertNewsSchema),
    defaultValues: {
      title: "",
      content: "",
      imageUrl: "",
      date: new Date().toISOString(),
    },
  });

  const { data: news, isLoading } = useQuery({
    queryKey: ["/api/news"],
    queryFn: async () => {
      const response = await fetch("/api/news");
      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }
      return response.json();
    },
  });

  const createNews = useMutation({
    mutationFn: async (data) => {
      const response = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create news");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/news"] });
      form.reset();
      toast({
        title: "Success",
        description: "News item created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  function onSubmit(data) {
    createNews.mutate(data);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">News Management</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* News Creation Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Create News</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <Input {...form.register("title")} />
                {form.formState.errors.title && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.title.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Content</label>
                <Textarea {...form.register("content")} rows={5} />
                {form.formState.errors.content && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.content.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <Input {...form.register("imageUrl")} />
                {form.formState.errors.imageUrl && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.imageUrl.message}
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={createNews.isPending}
              >
                {createNews.isPending ? "Creating..." : "Create News"}
              </Button>
            </form>
          </Form>
        </Card>

        {/* News List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">News List</h2>
          {isLoading ? (
            <p>Loading news...</p>
          ) : news?.length ? (
            <div className="space-y-4">
              {news.map((item) => (
                <Card key={item.id} className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                  <p className="mt-2 line-clamp-2">{item.content}</p>
                  {item.imageUrl && (
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="mt-2 rounded-md w-full h-40 object-cover"
                    />
                  )}
                </Card>
              ))}
            </div>
          ) : (
            <p>No news items found.</p>
          )}
        </div>
      </div>
    </div>
  );
}