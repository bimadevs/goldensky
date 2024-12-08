import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import type { TeamMember as TeamMemberType } from '../types';

export const TeamMember = ({ member }: { member: TeamMemberType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
        <p className="text-sky-500 mb-3">{member.role}</p>
        <p className="text-gray-300 mb-4">{member.bio}</p>
        <div className="flex space-x-4">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};