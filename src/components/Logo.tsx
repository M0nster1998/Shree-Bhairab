import React from 'react';
import { Music2 } from 'lucide-react';

interface LogoProps {
  size?: 'default' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'default' }) => {
  const sizeClasses = size === 'large' ? 'h-12 w-12 text-2xl' : 'h-8 w-8 text-lg';
  
  return (
    <div className="flex items-center">
      <div className={`${sizeClasses} rounded-full bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center`}>
        <Music2 className="w-5 h-5 text-white" />
      </div>
      <span className={`ml-2 ${size === 'large' ? 'text-xl' : 'text-lg'} font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent`}>
        Harmonic Fusion
      </span>
    </div>
  );
};

export default Logo;