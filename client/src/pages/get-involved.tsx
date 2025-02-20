import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Share2, FileText, ImagePlus, DollarSign, Users } from "lucide-react";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  locality: z.string().min(1, "Locality is required"),
  description: z.string().min(1, "Description is required"),
  references: z.string().optional(),
});

const successStorySchema = z.object({
  title: z.string().min(1, "Title is required"),
  locality: z.string().min(1, "Locality is required"),
  description: z.string().min(1, "Story description is required"),
  keyIssues: z.string().min(1, "Key issues are required"),
});

const mediaSchema = z.object({
  caption: z.string().min(1, "Caption is required"),
  locality: z.string().min(1, "Locality is required"),
  description: z.string().min(1, "Description is required"),
  links: z.string().optional(),
});

export default function GetInvolved() {
  const { toast } = useToast();
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const blogForm = useForm({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      locality: "",
      description: "",
      references: "",
    },
  });

  const successStoryForm = useForm({
    resolver: zodResolver(successStorySchema),
    defaultValues: {
      title: "",
      locality: "",
      description: "",
      keyIssues: "",
    },
  });

  const mediaForm = useForm({
    resolver: zodResolver(mediaSchema),
    defaultValues: {
      caption: "",
      locality: "",
      description: "",
      links: "",
    },
  });

  const onSubmit = (values: any) => {
    toast({
      title: "Submission received",
      description: "Thank you for your contribution to CA-Hub Kenya.",
    });
    
    if (activeForm === "blog") blogForm.reset();
    if (activeForm === "success") successStoryForm.reset();
    if (activeForm === "media") mediaForm.reset();
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Get Involved</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <Users className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Become a Member</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Join our network of organizations promoting conservation agriculture in Kenya.
            </p>
            <Button variant="outline" asChild>
              <a href="/member-registration">Apply for Membership</a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Share2 className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Share Your Work</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Contribute your success stories, blogs, and media to our knowledge base.
            </p>
            <Button variant="outline" onClick={() => setActiveForm("blog")}>
              Share Content
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <DollarSign className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Support Our Work</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Make a donation to support conservation agriculture initiatives.
            </p>
            <Button variant="outline">Donate Now</Button>
          </CardContent>
        </Card>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="blog">
          <AccordionTrigger>Share a Blog</AccordionTrigger>
          <AccordionContent>
            <Form {...blogForm}>
              <form onSubmit={blogForm.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={blogForm.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Blog Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter blog title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={blogForm.control}
                  name="locality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Locality</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter location" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={blogForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Blog Content</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Write your blog content here"
                          className="min-h-[200px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit Blog</Button>
              </form>
            </Form>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="success">
          <AccordionTrigger>Share Success Story</AccordionTrigger>
          <AccordionContent>
            <Form {...successStoryForm}>
              <form onSubmit={successStoryForm.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={successStoryForm.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Story Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter story title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={successStoryForm.control}
                  name="locality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Locality</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter location" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={successStoryForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Story Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your success story"
                          className="min-h-[200px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit Story</Button>
              </form>
            </Form>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="media">
          <AccordionTrigger>Share Photos/Videos</AccordionTrigger>
          <AccordionContent>
            <Form {...mediaForm}>
              <form onSubmit={mediaForm.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={mediaForm.control}
                  name="caption"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Media Caption</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter caption" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={mediaForm.control}
                  name="locality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Locality</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter location" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={mediaForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your media content"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={mediaForm.control}
                  name="links"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Media Links</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter media links (optional)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit Media</Button>
              </form>
            </Form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
