import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectItemProps {
  number: number;
  category: string;
  title: string;
  backgroundImg: string | StaticImageData;
  projectUrl: string;
  projectPara: string;
  projectCode?: string;
  description: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  number,
  category,
  title,
  backgroundImg,
  projectUrl,
  projectPara,
  projectCode,
  description,
}) => {
  return (
    <div className="card overflow-hidden md:grid md:grid-cols-5">
      <div className="relative h-56 md:h-full md:min-h-80 md:col-span-2 overflow-hidden">
        <Image
          className="object-cover"
          src={backgroundImg}
          alt={title}
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
        />
      </div>

      <div className="p-6 md:p-8 md:col-span-3 flex flex-col justify-center">
        <p className="eyebrow">
          {String(number).padStart(2, "0")} / {category}
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-text-main pt-3">
          {title}
        </h3>
        <p className="text-muted pt-3 leading-relaxed">{description}</p>
        <p className="font-mono text-xs text-muted/70 pt-4 uppercase tracking-wide">
          {projectPara}
        </p>

        <div className="flex gap-3 pt-6">
          <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
            <button className="!px-6 !py-2 !text-sm">Demo</button>
          </Link>
          {projectCode && (
            <Link href={projectCode} target="_blank" rel="noopener noreferrer">
              <button className="!px-6 !py-2 !text-sm !bg-none !bg-paper !text-text-main !border !border-line !shadow-none">
                Code
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
