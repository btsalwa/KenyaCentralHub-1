import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { insertMemberSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

const categories = [
  "National Government Department",
  "County Government",
  "Research Organization",
  "Academia",
  "NGO/Development Partners",
  "Private Sector",
  "Farmer Organization",
  "Media",
];

export default function MemberForm() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertMemberSchema),
    defaultValues: {
      organizationName: "",
      acronym: "",
      contactPerson: "",
      designation: "",
      address: "",
      category: "",
      website: "",
      counties: "",
      caProjects: "",
      caTechnologies: "",
      partners: "",
      donors: "",
    },
  });

  function onSubmit(values) {
    toast({
      title: "Form submitted",
      description: "Thank you for your interest in becoming a member.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="organizationName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter organization name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="caProjects"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Conservation Agriculture Projects</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your CA projects"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit Application</Button>
      </form>
    </Form>
  );
}
