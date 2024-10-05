import { z } from "zod";
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

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div
      className="py-20 flex items-center justify-center container mx-auto"
      id="contact"
    >
      <div className="border p-10 flex flex-col rounded-lg w-full max-w-2xl bg-muted shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-900">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mt-2 mb-8">
          We would love to hear from you! Please fill out this form and we will
          get in touch with you shortly.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-gray-700">Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-gray-700">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-gray-700">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      rows={5}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Write your message here..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
