import React from "react";
import { skillCategories } from '@/data/cv';

function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {skillCategories.map((category) => (
        <div key={category.title}>
          <h3 className="text-xs uppercase tracking-widest text-lightsubtext dark:text-darksubtext mb-5 font-medium">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1.5 rounded-full border border-border dark:border-borderdark text-lightsubtext dark:text-darksubtext hover:border-accentcolor hover:text-accentcolor transition-colors cursor-default whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
