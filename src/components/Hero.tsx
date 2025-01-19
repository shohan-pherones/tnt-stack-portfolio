import { Code2, Github, Instagram, Linkedin, MoveUpRight } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    id: 1,
    route: "https://github.com/shohan-pherones",
    label: "GitHub",
    icon: Github,
  },
  {
    id: 2,
    route: "https://www.linkedin.com/in/shohan-pherones",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    id: 3,
    route: "https://leetcode.com/u/spectrashohan",
    label: "LeetCode",
    icon: Code2,
  },
  {
    id: 4,
    route: "https://www.instagram.com/shohan.writes.codez",
    label: "Instagram",
    icon: Instagram,
  },
];

const Hero = () => {
  return (
    <div
      className="hero h-[calc(100vh-4rem)]"
      style={{
        backgroundImage: 'url("/images/hero.jpg")',
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-screen-md">
          <h1 className="mb-5 text-5xl md:text-7xl">
            Hi, I&apos;m Md. Shohanur Rahman 👋
          </h1>
          <p className="mb-5 md:text-xl">
            I am a Full-Stack Developer from Bangladesh, specializing in
            Node.js, React.js, Python, and Go. I focus on building secure,
            sustainable, and innovative web applications to shape a better
            future.
          </p>
          <div className="flex gap-x-2.5 md:gap-x-5 flex-wrap items-center justify-center">
            {socialLinks.map((socialLink) => (
              <div
                key={socialLink.id}
                className="tooltip tooltip-bottom"
                data-tip={socialLink.label}
              >
                <Link href={socialLink.route} target="_blank">
                  <socialLink.icon />
                </Link>
              </div>
            ))}
            <Link href="/#contact" className="btn">
              Hire Me <MoveUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
