import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Card, CardHeader } from "@/components/ui/card";
import { useLoading } from "@/components/loading";
import Header from "@/components/header";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Skeleton } from "@/components/ui/skeleton";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const FormSchema = z.object({
    url: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function SkeletonTable() {
    return (
      <div className="flex flex-col space-y-3 my-5">
        <Skeleton className="h-28 w-full bg-slate-200" />
        <Skeleton className="h-28 w-full bg-slate-200" />
        <Skeleton className="h-28 w-full bg-slate-200" />
        <Skeleton className="h-28 w-full bg-slate-200" />
        <Skeleton className="h-28 w-full bg-slate-200" />
        <Skeleton className="h-28 w-full bg-slate-200" />
      </div>
    );
  }
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data.url);
    toast({
      title: "Parabéns! Você acabou de encurtar um link!",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <a href="/" className="text-blue-600 font-bold text-2xl">
            {data.url}
          </a>
        </div>
      ),
    });
  }

  useEffect(() => {
    if (!keycloak) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [userInfo, keycloak, isLoading]);

  return (
    <div className="w-full container">
      <ProfileHeader
        name={userInfo.preferred_username}
        email={userInfo.email}
        imageUrl={"https://github.com/shadcn.png"}
        isLoading={isLoading}
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
                        className="bg-slate-200 w-96 text-black"
                        placeholder="Insira o link que deseja encurtar"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="bg-blue-600" type="submit">
                Encurtar
              </Button>
            </form>
          </Form>
        </Card>
        {isLoading ? (
          <SkeletonTable />
        ) : (
          <div className="flex mt-5">
            <TableShortedUrls />
          </div>
        )}
      </div>
    </div>
  );
}
