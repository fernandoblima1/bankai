import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Card, CardHeader } from "@/components/ui/card";
import { useLoading } from "@/components/loading";
import Header from "@/components/header";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { TableShortedUrls } from "@/components/table/Table";
import { ProfileHeader } from "@/components/profile";

export default function Main() {
  const { keycloak, userInfo } = useContext(AuthContext);
  const loading = useLoading();
  const { toast } = useToast();
  const FormSchema = z.object({
    url: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data.url);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  useEffect(() => {
    if (!keycloak) {
      loading.show("");
    } else {
      loading.hide();
    }
  }, [userInfo, keycloak, loading]);

  return (
    <div className="w-full container">
      <ProfileHeader
        name={userInfo.preferred_username}
        email={userInfo.email}
        imageUrl={"https://github.com/shadcn.png"}
      />

      <div className="mt-2">
        <Card className="flex flex-col p-10 items-center w-full">
          <CardHeader className="font-extrabold text-4xl text-center">
            URL Shortner
          </CardHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-x-2 flex flex-row justify-center"
            >
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="url"
                        className="bg-slate-200"
                        placeholder="shadcn"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant={"default"} className="bg-blue-600" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </Card>
        <div>
          <TableShortedUrls />
        </div>
      </div>
    </div>
  );
}
