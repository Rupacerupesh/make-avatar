"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Copy, Terminal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { websiteUrl } from "@/lib/const";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function ApiDocsPageWithSidebar() {
  return (
    <div className="flex min-h-screen bg-background text-foreground p-8">
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 border-b bg-background">
          <div className="container mx-auto flex items-center justify-between px-4 py-6">
            <h1 className="text-3xl font-bold">
              Avatar Generation API Documentation
            </h1>
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
              <code className="text-sm">{websiteUrl}</code>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigator.clipboard.writeText(websiteUrl)}
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Query Parameters</h2>

            <div className="w-full max-w-2xl p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4">Parameter</TableHead>
                    <TableHead className="w-1/4">Type</TableHead>
                    <TableHead className="w-1/4">Default</TableHead>
                    <TableHead className="w-1/4">Available Values</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold">type</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>animal</TableCell>
                    <TableCell>animal, human</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">response</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>svg</TableCell>
                    <TableCell>svg, png</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">size</TableCell>
                    <TableCell>integer</TableCell>
                    <TableCell>140</TableCell>
                    <TableCell>Any integer</TableCell>
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
        </main>
      </div>
    </div>
  );
}
