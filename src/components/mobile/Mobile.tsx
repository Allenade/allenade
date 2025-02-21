"use client";

import { Button } from "../ui/button";
import { ChevronRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

import Image from "next/image";
import { ToggleTheme } from "../layouts/toggle-theme";
import Link from "next/link";

export const Mobile = () => {
  return (
    <div className="min-h-screen">
      <nav className="flex justify-between items-center p-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold">Allenade.</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center p-4"
        >
          <ToggleTheme />
        </motion.div>
      </nav>
      {/* main section */}
      <main className="space-y-6 flex flex-col items-center">
        {/* Profile Image */}
        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-[200px] h-[200px] flex items-center justify-center">
            {/* Rotating Border */}
            <div className="absolute w-[200px] h-[200px] rounded-full border-[3px] border-green-500 border-t-transparent border-r-transparent animate-spin"></div>
            {/* Image Container */}
            <div className="w-[190px] h-[190px] rounded-full overflow-hidden relative bg-black">
              <Image
                src="/image/IMG_4247.jpg"
                alt="Allen"
                width={190}
                height={190}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="space-y-4 text-center px-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1
            className="text-3xl font-light tracking-tight text-black dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hello, I&apos;m
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Umunade Allen.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-base dark:text-gray-400 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I&apos;m a{" "}
            <span className="dark:text-white text-black">
              software engineer
            </span>{" "}
            focused on solving{" "}
            <span className="dark:text-white text-black">problems</span> using{" "}
            <span className="dark:text-white text-black">
              frontend technology
            </span>
            .
          </motion.p>

          <motion.p
            className="text-base dark:text-gray-400 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I am interested in{" "}
            <span className="dark:text-white text-black">user experience</span>,
            accessibility,{" "}
            <span className="dark:text-white text-black">
              design engineering
            </span>
            , gaming, <span className="dark:text-white text-black">web3</span>,
            web animations.
          </motion.p>
        </motion.div>
        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/projects">
            <Button variant="outline">
              <span>Explore</span>
              <ChevronRight />
            </Button>
          </Link>
        </motion.div>

        {/* footer */}
        <footer className="flex items-center gap-4 py-8">
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
              className="text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
              asChild
            >
              <a
                href="https://github.com/allenade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
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
              className="text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
              asChild
            >
              <a
                href="https://twitter.com/allenade_dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
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
              className="text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
              asChild
            >
              <a href="mailto:umunadeallan@gmail.com">
                <Mail className="h-5 w-5" />
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
              className="text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/allen-umunade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </footer>
      </main>
    </div>
  );
};
