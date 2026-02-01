import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

interface Project {
  title: string;
  description: string;
  tech: string[];
  role: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-lg overflow-hidden transition-all cursor-pointer"
    >
      {/* Project Image/GIF */}
      <div className="relative h-56 overflow-hidden bg-black">
        <img 
          src={project.image}
          alt={project.title}
          width="800"
          height="450"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {project.role && (
          <div className="mb-4 pb-4 border-b border-gray-800">
            <p className="text-xs text-gray-600 mb-2 tracking-wider">ROLE</p>
            <p className="text-sm text-orange-500">{project.role}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <Badge key={techIndex} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-0">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}