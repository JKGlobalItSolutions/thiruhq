import React from 'react';

// Motor Insurance Illustration
export function MotorInsuranceIllustration() {
  return (
    <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Background */}
      <rect width="600" height="500" fill="transparent"/>
      
      {/* Road */}
      <rect x="50" y="380" width="500" height="60" rx="8" fill="#1E40AF" opacity="0.3"/>
      <rect x="50" y="405" width="500" height="4" fill="#FFCD48" opacity="0.6"/>
      
      {/* Car body */}
      <g transform="translate(180, 260)">
        <rect x="0" y="40" width="240" height="80" rx="20" fill="#3B82F6"/>
        <rect x="30" y="0" width="180" height="70" rx="15" fill="#60A5FA"/>
        {/* Windows */}
        <rect x="45" y="10" width="60" height="45" rx="8" fill="#E0F2FE" opacity="0.9"/>
        <rect x="135" y="10" width="60" height="45" rx="8" fill="#E0F2FE" opacity="0.9"/>
        {/* Wheels */}
        <circle cx="60" cy="120" r="25" fill="#14204A"/>
        <circle cx="60" cy="120" r="12" fill="#374151"/>
        <circle cx="180" cy="120" r="25" fill="#14204A"/>
        <circle cx="180" cy="120" r="12" fill="#374151"/>
        {/* Headlights */}
        <ellipse cx="230" cy="65" rx="8" ry="12" fill="#FFCD48"/>
        {/* Door line */}
        <line x1="120" y1="45" x2="120" y2="115" stroke="#1E40AF" strokeWidth="2"/>
      </g>

      {/* Shield */}
      <g transform="translate(480, 100)">
        <path d="M0,-60 L50,-30 L50,20 Q50,60 0,80 Q-50,60 -50,20 L-50,-30 Z" fill="#FFCD48"/>
        <path d="M0,-40 L30,-20 L30,10 Q30,40 0,55 Q-30,40 -30,10 L-30,-20 Z" fill="#FFE085" opacity="0.5"/>
      </g>

      {/* Document/Insurance Paper */}
      <g transform="translate(100, 120) rotate(-10)">
        <rect x="0" y="0" width="100" height="130" rx="8" fill="white" opacity="0.9"/>
        <rect x="15" y="20" width="70" height="4" rx="2" fill="#3B82F6" opacity="0.6"/>
        <rect x="15" y="35" width="50" height="4" rx="2" fill="#3B82F6" opacity="0.4"/>
        <rect x="15" y="50" width="60" height="4" rx="2" fill="#3B82F6" opacity="0.4"/>
        <rect x="15" y="70" width="70" height="30" rx="4" fill="#FFCD48" opacity="0.8"/>
      </g>

      {/* Family icon simplified */}
      <g transform="translate(520, 280)">
        <circle cx="0" cy="-20" r="15" fill="#60A5FA"/>
        <rect x="-12" y="0" width="24" height="35" rx="6" fill="#3B82F6"/>
        <circle cx="-30" cy="-10" r="12" fill="#60A5FA"/>
        <rect x="-42" y="5" width="20" height="28" rx="5" fill="#3B82F6"/>
        <circle cx="30" cy="-10" r="12" fill="#60A5FA"/>
        <rect x="22" y="5" width="20" height="28" rx="5" fill="#3B82F6"/>
      </g>

      {/* Floating circles */}
      <circle cx="120" cy="200" r="20" fill="#FFCD48" opacity="0.2"/>
      <circle cx="500" cy="400" r="30" fill="#3B82F6" opacity="0.15"/>
    </svg>
  );
}

// Health Insurance Illustration
export function HealthInsuranceIllustration() {
  return (
    <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="600" height="500" fill="transparent"/>
      
      {/* Hospital Building */}
      <g transform="translate(200, 80)">
        <rect x="0" y="0" width="200" height="200" rx="16" fill="#3B82F6"/>
        {/* Windows */}
        <rect x="20" y="20" width="40" height="40" rx="6" fill="#E0F2FE" opacity="0.9"/>
        <rect x="80" y="20" width="40" height="40" rx="6" fill="#E0F2FE" opacity="0.9"/>
        <rect x="140" y="20" width="40" height="40" rx="6" fill="#E0F2FE" opacity="0.9"/>
        <rect x="20" y="80" width="40" height="40" rx="6" fill="#E0F2FE" opacity="0.9"/>
        <rect x="80" y="80" width="40" height="40" rx="6" fill="#E0F2FE" opacity="0.9"/>
        <rect x="140" y="80" width="40" height="40" rx="6" fill="#E0F2FE" opacity="0.9"/>
        {/* Door */}
        <rect x="85" y="150" width="30" height="50" rx="4" fill="#14204A"/>
        {/* Medical cross on top */}
        <rect x="85" y="-40" width="30" height="60" rx="6" fill="#FFCD48"/>
        <rect x="70" y="-25" width="60" height="30" rx="6" fill="#FFCD48"/>
      </g>

      {/* Doctor */}
      <g transform="translate(120, 280)">
        <circle cx="25" cy="20" r="22" fill="#FFE5D0"/>
        {/* Hair */}
        <path d="M3,20 Q3,0 25,0 Q47,0 47,20 L47,15 Q47,5 25,5 Q3,5 3,15 Z" fill="#14204A"/>
        {/* Stethoscope */}
        <path d="M40,35 Q50,35 50,50 Q50,70 35,75" stroke="#FFCD48" strokeWidth="3" fill="none"/>
        <circle cx="35" cy="78" r="5" fill="#FFCD48"/>
        {/* Body/coat */}
        <rect x="5" y="45" width="40" height="55" rx="10" fill="white"/>
        <rect x="15" y="55" width="20" height="25" rx="4" fill="#3B82F6"/>
      </g>

      {/* Patient/Family */}
      <g transform="translate(380, 300)">
        <circle cx="20" cy="15" r="16" fill="#FFE5D0"/>
        <path d="M4,15 Q4,2 20,2 Q36,2 36,15 L36,12 Q36,5 20,5 Q4,5 4,12 Z" fill="#14204A"/>
        <rect x="5" y="32" width="30" height="40" rx="8" fill="#60A5FA"/>
        <circle cx="0" cy="50" r="12" fill="#FFE5D0"/>
        <rect x="-10" y="62" width="20" height="28" rx="6" fill="#3B82F6"/>
      </g>

      {/* Heart icon */}
      <g transform="translate(480, 180)">
        <path d="M0,-15 C0,-25 -15,-30 -20,-20 C-25,-10 -20,0 0,20 C20,0 25,-10 20,-20 C15,-30 0,-25 0,-15" fill="#EF4444"/>
      </g>

      {/* Medical cross small */}
      <g transform="translate(100, 420)">
        <rect x="-8" y="-25" width="16" height="50" rx="4" fill="#3B82F6" opacity="0.3"/>
        <rect x="-25" y="-8" width="50" height="16" rx="4" fill="#3B82F6" opacity="0.3"/>
      </g>

      {/* Floating circles */}
      <circle cx="80" cy="150" r="25" fill="#FFCD48" opacity="0.15"/>
      <circle cx="520" cy="420" r="35" fill="#3B82F6" opacity="0.1"/>
    </svg>
  );
}

// Life Insurance Illustration
export function LifeInsuranceIllustration() {
  return (
    <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="600" height="500" fill="transparent"/>
      
      {/* House/Home */}
      <g transform="translate(130, 150)">
        {/* Roof */}
        <polygon points="100,0 200,70 0,70" fill="#3B82F6"/>
        {/* House body */}
        <rect x="20" y="70" width="160" height="120" rx="8" fill="white"/>
        {/* Door */}
        <rect x="75" y="130" width="50" height="60" rx="6" fill="#14204A"/>
        <circle cx="118" cy="160" r="3" fill="#FFCD48"/>
        {/* Windows */}
        <rect x="35" y="95" width="30" height="30" rx="4" fill="#E0F2FE"/>
        <rect x="135" y="95" width="30" height="30" rx="4" fill="#E0F2FE"/>
        {/* Chimney */}
        <rect x="140" y="20" width="20" height="40" fill="#EF4444" opacity="0.7"/>
      </g>

      {/* Tree */}
      <g transform="translate(420, 200)">
        <rect x="-8" y="50" width="16" height="60" rx="4" fill="#8B5CF6"/>
        <circle cx="0" cy="30" r="35" fill="#10B981"/>
        <circle cx="-20" cy="50" r="25" fill="#10B981" opacity="0.8"/>
        <circle cx="20" cy="50" r="25" fill="#10B981" opacity="0.8"/>
      </g>

      {/* Shield */}
      <g transform="translate(480, 100)">
        <path d="M0,-55 L45,-25 L45,18 Q45,55 0,72 Q-45,55 -45,18 L-45,-25 Z" fill="#FFCD48"/>
        <path d="M0,-35 L28,-15 L28,8 Q28,35 0,48 Q-28,35 -28,8 L-28,-15 Z" fill="#FFE085" opacity="0.5"/>
        {/* Heart inside */}
        <path d="M0,10 C-6,-2 -14,-8 -14,-16 C-14,-24 -6,-24 0,-16 C6,-24 14,-24 14,-16 C14,-8 6,-2 0,10" fill="#EF4444"/>
      </g>

      {/* Family */}
      <g transform="translate(300, 350)">
        <circle cx="-30" cy="0" r="16" fill="#FFE5D0"/>
        <rect x="-44" y="18" width="28" height="40" rx="7" fill="#60A5FA"/>
        <circle cx="30" cy="0" r="16" fill="#FFE5D0"/>
        <rect x="16" y="18" width="28" height="40" rx="7" fill="#3B82F6"/>
        <circle cx="0" cy="25" r="14" fill="#FFE5D0"/>
        <rect x="-14" y="40" width="28" height="35" rx="7" fill="#93C5FD"/>
      </g>

      {/* Dollar/Financial icon */}
      <g transform="translate(80, 350)">
        <circle cx="25" cy="25" r="25" fill="#10B981"/>
        <text x="25" y="32" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">$</text>
      </g>

      {/* Floating circles */}
      <circle cx="150" cy="100" r="30" fill="#FFCD48" opacity="0.15"/>
      <circle cx="500" cy="400" r="40" fill="#3B82F6" opacity="0.1"/>
    </svg>
  );
}

// Travel Insurance Illustration
export function TravelInsuranceIllustration() {
  return (
    <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="600" height="500" fill="transparent"/>
      
      {/* Globe */}
      <g transform="translate(300, 250)">
        <circle cx="0" cy="0" r="90" fill="#3B82F6"/>
        <ellipse cx="0" cy="0" rx="40" ry="90" fill="none" stroke="#60A5FA" strokeWidth="3"/>
        <line x1="-90" y1="0" x2="90" y2="0" stroke="#60A5FA" strokeWidth="3"/>
        <path d="M-45,-65 Q0,-75 45,-65" stroke="#60A5FA" strokeWidth="3" fill="none"/>
        <path d="M-45,65 Q0,75 45,65" stroke="#60A5FA" strokeWidth="3" fill="none"/>
      </g>

      {/* Airplane */}
      <g transform="translate(420, 120) rotate(20)">
        <ellipse cx="0" cy="0" rx="60" ry="14" fill="#60A5FA"/>
        <polygon points="50,0 90,-25 90,25" fill="#3B82F6"/>
        <polygon points="-20,0 -50,-35 20,-35 0,0" fill="#93C5FD"/>
        <polygon points="-20,0 -50,35 20,35 0,0" fill="#93C5FD" opacity="0.7"/>
        {/* Windows */}
        <circle cx="-25" cy="0" r="4" fill="#E0F2FE"/>
        <circle cx="-10" cy="0" r="4" fill="#E0F2FE"/>
        <circle cx="5" cy="0" r="4" fill="#E0F2FE"/>
        <circle cx="20" cy="0" r="4" fill="#E0F2FE"/>
      </g>

      {/* Suitcase */}
      <g transform="translate(120, 320)">
        <rect x="0" y="0" width="80" height="100" rx="12" fill="#FFCD48"/>
        <rect x="20" y="-12" width="40" height="15" rx="4" fill="#FFE085"/>
        <line x1="0" y1="40" x2="80" y2="40" stroke="#8B5CF6" strokeWidth="3"/>
        <circle cx="40" cy="70" r="6" fill="#14204A"/>
      </g>

      {/* Passport */}
      <g transform="translate(100, 180) rotate(-15)">
        <rect x="0" y="0" width="80" height="100" rx="6" fill="#14204A"/>
        <rect x="8" y="8" width="64" height="50" rx="3" fill="#E0F2FE"/>
        <circle cx="40" cy="33" r="15" fill="#FFE5D0"/>
        <rect x="8" y="65" width="64" height="6" rx="2" fill="#FFCD48" opacity="0.6"/>
        <rect x="8" y="75" width="40" height="6" rx="2" fill="#FFCD48" opacity="0.4"/>
      </g>

      {/* Shield */}
      <g transform="translate(500, 380)">
        <path d="M0,-50 L40,-22 L40,16 Q40,50 0,65 Q-40,50 -40,16 L-40,-22 Z" fill="#FFCD48"/>
        <path d="M0,-30 L25,-12 L25,6 Q25,32 0,45 Q-25,32 -25,6 L-25,-12 Z" fill="#FFE085" opacity="0.5"/>
      </g>

      {/* Location pin */}
      <g transform="translate(160, 260)">
        <path d="M0,-40 C-25,-40 -40,-20 -40,0 C-40,30 0,70 0,70 C0,70 40,30 40,0 C40,-20 25,-40 0,-40" fill="#EF4444"/>
        <circle cx="0" cy="0" r="12" fill="white"/>
      </g>

      {/* Floating circles */}
      <circle cx="100" cy="120" r="25" fill="#FFCD48" opacity="0.2"/>
      <circle cx="500" cy="200" r="30" fill="#3B82F6" opacity="0.15"/>
    </svg>
  );
}

// Business Insurance Illustration
export function BusinessInsuranceIllustration() {
  return (
    <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="600" height="500" fill="transparent"/>
      
      {/* Main Office Building */}
      <g transform="translate(150, 80)">
        <rect x="0" y="50" width="180" height="250" rx="12" fill="#3B82F6"/>
        {/* Windows grid */}
        {[0,1,2,3,4].map(row => (
          <g key={row}>
            {[0,1,2].map(col => (
              <rect key={col} x={20 + col * 50} y={70 + row * 45} width="35" height="30" rx="4" fill="#E0F2FE" opacity="0.9"/>
            ))}
          </g>
        ))}
        {/* Door */}
        <rect x="70" y="260" width="40" height="40" rx="4" fill="#14204A"/>
        {/* Antenna */}
        <line x1="90" y1="50" x2="90" y2="20" stroke="#60A5FA" strokeWidth="3"/>
        <circle cx="90" cy="20" r="4" fill="#EF4444"/>
      </g>

      {/* Second Building */}
      <g transform="translate(380, 120)">
        <rect x="0" y="0" width="140" height="210" rx="10" fill="#1E40AF" opacity="0.85"/>
        {[0,1,2,3].map(row => (
          <g key={row}>
            {[0,1].map(col => (
              <rect key={col} x={15 + col * 55} y={20 + row * 40} width="40" height="28" rx="3" fill="#E0F2FE" opacity="0.85"/>
            ))}
          </g>
        ))}
        <rect x="45" y="180" width="30" height="30" rx="3" fill="#3B82F6"/>
      </g>

      {/* Business people */}
      <g transform="translate(200, 380)">
        {/* Person 1 */}
        <circle cx="0" cy="0" r="14" fill="#FFE5D0"/>
        <rect x="-12" y="16" width="24" height="35" rx="6" fill="#60A5FA"/>
        {/* Person 2 */}
        <circle cx="50" cy="0" r="12" fill="#FFE5D0"/>
        <path d="M38,0 Q38,-10 50,-10 Q62,-10 62,0 L62,5 Q62,-5 50,-5 Q38,-5 38,5 Z" fill="#14204A"/>
        <rect x="40" y="14" width="20" height="30" rx="5" fill="#3B82F6"/>
        {/* Person 3 */}
        <circle cx="100" cy="0" r="13" fill="#FFE5D0"/>
        <path d="M87,0 Q87,-12 100,-12 Q113,-12 113,0 L113,4 Q113,-4 100,-4 Q87,-4 87,4 Z" fill="#FFCD48"/>
        <rect x="89" y="15" width="22" height="32" rx="6" fill="#FFCD48"/>
      </g>

      {/* Briefcase */}
      <g transform="translate(480, 320)">
        <rect x="0" y="0" width="60" height="50" rx="8" fill="#FFCD48"/>
        <rect x="-5" y="-8" width="70" height="12" rx="4" fill="#FFE085"/>
        <rect x="22" y="15" width="16" height="16" rx="3" fill="#14204A"/>
      </g>

      {/* Laptop */}
      <g transform="translate(100, 420)">
        <rect x="0" y="0" width="70" height="45" rx="4" fill="#374151"/>
        <rect x="5" y="5" width="60" height="35" rx="2" fill="#60A5FA"/>
        <rect x="-10" y="45" width="90" height="8" rx="2" fill="#4B5563"/>
      </g>

      {/* Growth chart */}
      <g transform="translate(520, 200)">
        <polyline points="0,60 20,45 40,50 60,25 80,30 100,5" stroke="#FFCD48" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <circle cx="0" cy="60" r="4" fill="#3B82F6"/>
        <circle cx="20" cy="45" r="4" fill="#3B82F6"/>
        <circle cx="40" cy="50" r="4" fill="#3B82F6"/>
        <circle cx="60" cy="25" r="4" fill="#FFCD48"/>
        <circle cx="80" cy="30" r="4" fill="#FFCD48"/>
        <circle cx="100" cy="5" r="4" fill="#EF4444"/>
      </g>

      {/* Shield */}
      <g transform="translate(150, 180)">
        <path d="M0,-55 L45,-25 L45,18 Q45,55 0,72 Q-45,55 -45,18 L-45,-25 Z" fill="#FFCD48" opacity="0.9"/>
        <path d="M0,-35 L28,-15 L28,6 Q28,32 0,45 Q-28,32 -28,6 L-28,-15 Z" fill="#FFE085" opacity="0.5"/>
      </g>

      {/* Floating circles */}
      <circle cx="80" cy="100" r="30" fill="#FFCD48" opacity="0.1"/>
      <circle cx="520" cy="450" r="40" fill="#3B82F6" opacity="0.1"/>
    </svg>
  );
}