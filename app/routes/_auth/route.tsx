import { Outlet } from "@remix-run/react";
import IconCloud from "~/components/ui/icon-cloud";
// import bgImg from "../../../src/images/office-bg.jpg";

const slugs: string[] = [
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
      className="w-full bg-cover dark:from-slate-500 dark:via-slate-700 dark:to-slate-900 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-center bg-no-repeat bg-fixed min-h-screen grid grid-cols-2 "
    >
      <div className="tablet:col-span-1 col-span-2">
        <Outlet />
      </div>
      <div className="hidden col-span-1 w-full min-h-screen tablet:flex tablet:justify-center tablet:items-center">
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
};

export default AuthLayout;
