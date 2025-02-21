"use client";

import { Button } from "../ui/button";
import { Github, Twitter, Mail, Eye, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { projects } from "@/lib/data";
import Image from "next/image";
import { ToggleTheme } from "../layouts/toggle-theme";
import { motion } from "framer-motion";

export const Desktop = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center p-4">
        <ToggleTheme />
      </div>
      <main className="container mx-auto px-8 py-8">
        <div className="flex ">
          {/* Left side hero section */}
          <div className="space-y-6 w-1/2 ">
            <h1 className="text-5xl font-light tracking-tight text-black dark:text-white">
              Hello, I&apos;m
              <span className="block">Umunade Allen.</span>
            </h1>

            <p className="text-lg dark:text-gray-400 text-gray-600">
              I&apos;m a{" "}
              <span className="dark:text-white text-black">
                software engineer
              </span>{" "}
              focused on solving{" "}
              <span className="dark:text-white text-black">problems</span> using{" "}
              <span className="dark:text-white text-black">
                frontend technology
              </span>
              . I am interested in{" "}
              <span className="dark:text-white text-black">
                user experience
              </span>
              , accessibility,{" "}
              <span className="dark:text-white text-black">
                design engineering
              </span>
              , gaming, <span className="dark:text-white text-black">web3</span>
              , web animations{" "}
            </p>

            {/* image */}

            {/* Navigation */}
            {/* <nav className="space-y-2 pt-8">
              <Links
                href="#work"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                <span className="inline-block w-6 opacity-50">00</span>
                WORK
              </Link>
              <Link
                href="#articles"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                <span className="inline-block w-6 opacity-50">01</span>
                ARTICLES
              </Link>
              <Link
                href="#linkedin"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                <span className="inline-block w-6 opacity-50">02</span>
                LINKED IN
              </Link>
            </nav> */}

            {/* Footer */}
            <footer className="flex items-center gap-4 mt-20">
              <div className="flex justify-center">
                <div className="relative w-[110px] h-[110px] flex items-center justify-center animate-bounce">
                  {/* Rotating Border */}
                  <div className="absolute w-[110px] h-[110px] rounded-full border-[3px] border-green-500 border-t-transparent border-r-transparent animate-spin"></div>

                  {/* Image Container */}
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden relative bg-black">
                    <Image
                      src="/image/IMG_4247.jpg"
                      alt="Allen"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Buttons with different bounce effects */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                  asChild
                >
                  <a
                    href="https://github.com/allenade"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Github
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                  asChild
                >
                  <a
                    href="https://twitter.com/allenade_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5 mr-2" />
                    Twitter
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                  asChild
                >
                  <a href="mailto:umunadeallan@gmail.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Email
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/allen-umunade"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </footer>
          </div>
          {/* right side projects section */}
          <div className="w-1/2 overflow-y-auto pr-4 h-full">
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
                      <div className="text-xs text-zinc-500 mb-2">
                        {category}
                      </div>
                      <CardTitle className="text-xl font-normal">
                        {title}
                      </CardTitle>
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
                        <a
                          href={liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
        </div>
      </main>
    </div>
  );
};
