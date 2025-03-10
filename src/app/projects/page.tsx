"use client";
import React from "react";
import { projects } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="overflow-y-auto p-8 h-full">
      {projects.map(
        (
          { id, category, title, description, technologies, liveLink },
          index
        ) => (
          <motion.div
            key={id}
            className="mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="bg-zinc-900 px-4 border-zinc-800">
              <CardHeader>
                <div className="text-xs text-zinc-500 mb-2">{category}</div>
                <CardTitle className="text-xl font-normal">{title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-800 text-zinc-400 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">{description}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 text-gray-400 hover:text-white"
                  asChild
                >
                  <a href={liveLink} target="_blank" rel="noopener noreferrer">
                    <Eye className="h-4 w-4 mr-2" />
                    Live
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )
      )}
    </div>
  );
}
