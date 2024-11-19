"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Copy, Terminal } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  humanClothesKeys,
  humanEyebrowsKeys,
  humanEyesKeys,
  humanHairKeys,
  humanMouthKeys,
} from "@/components/human-shapes";
import { websiteUrl } from "@/lib/const";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ApiDocsPageWithSidebar() {
  const features = [
    {
      name: "eyes",
      options: humanEyesKeys,
    },

    {
      name: "mouth",
      options: humanMouthKeys,
    },
    {
      name: "hair",
      options: humanHairKeys,
    },
    {
      name: "eyebrows",
      options: humanEyebrowsKeys,
    },
    {
      name: "cloth",
      options: humanClothesKeys,
    },
  ];

  return (
    <div className="p-8 flex min-h-screen bg-background text-foreground">
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 border-b bg-background">
          <div className="container mx-auto flex items-center justify-between px-4 py-6">
            <h1 className="text-3xl font-bold">
              Avatar Generation API Documentation
            </h1>
            <SidebarTrigger />
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <section className="mb-8" id="overview">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              This API allows you to generate custom avatars for both animals
              and humans. You can customize various features like eyes, ears,
              hair, and eyebrows depending on the type of avatar you want to
              create.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Base URL</h2>
            <div className="bg-muted p-4 rounded-md flex justify-between items-center">
              <code className="text-sm">{websiteUrl + "?type=human"}</code>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  navigator.clipboard.writeText(websiteUrl + "?type=human")
                }
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Query Parameters</h2>

            <div className="w-full max-w-3xl p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Parameter</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Available Values</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {features.map((feature) => (
                    <TableRow key={feature.name}>
                      <TableCell className="font-bold">
                        {feature.name}
                      </TableCell>
                      <TableCell>string</TableCell>
                      <TableCell>random</TableCell>
                      <TableCell>
                        <ul>
                          {feature.options.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell className="font-bold">size</TableCell>
                    <TableCell>integer</TableCell>
                    <TableCell>140</TableCell>
                    <TableCell>Size of the avatar</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="font-bold">name</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Unique Id for the avatar</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>
          <section className="mb-8">
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Note !</AlertTitle>
              <AlertDescription>
                A unique name will consistently generate the same fixed avatar.
                If you add name, all the other query params will be discarded.
              </AlertDescription>
            </Alert>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Examples</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Generate an Animal Avatar
                </h3>
                <div className="bg-muted p-4 rounded-md flex justify-between items-center">
                  <code className="text-sm break-all">
                    {websiteUrl}?type=animal&eyes=sparkle-eyes&ears=pointed-cat
                  </code>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        websiteUrl +
                          "?type=animal&eyes=sparkle-eyes&ears=pointed-cat"
                      )
                    }
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
