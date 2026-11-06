import { skillCategories } from '@/data/cv';

function Skills() {
  return (
    <div className="card">
      {skillCategories.map((category, index) => (
        <div
          key={category.title}
          className={`flex flex-col md:flex-row gap-3 md:gap-4 p-4 ${index > 0 ? 'hairline-t' : ''}`}
        >
          <h3 className="text-body md:w-40 md:shrink-0">{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span key={skill} className="badge">
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
