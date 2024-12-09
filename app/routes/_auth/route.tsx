import { Outlet } from "@remix-run/react";
import IconCloud from "~/components/ui/icon-cloud";
// import bgImg from "../../../src/images/office-bg.jpg";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "remix",
  "sequelize",
  "amazonaws",
  "postgresql",
  "pocketbase",
  "nginx",
  "vercel",
  "dotnet",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const AuthLayout = () => {
  return (
    <section
      // style={{ backgroundImage: `url(${bgImg})` }}
      className="w-full bg-cover mix-blend-exclusion bg-gradient-to-r from-slate-500 via-puslate-700 to-slate-900 bg-center bg-no-repeat bg-fixed min-h-screen grid grid-cols-2 "
    >
      <div className="col-span-1">
        <Outlet />
      </div>
      <div className="col-span-1 w-full min-h-screen flex justify-center items-center">
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
};

export default AuthLayout;
