import { AiOutlineTrademarkCircle } from "react-icons/ai";

export default function Logo() {
  return (
    <div className="flex  justify-evenly">
      <svg width="85" height="30" viewBox="0 0 102 39" xmlns="http://www.w3.org/2000/svg">
  <!-- Background circle -->
  <circle cx="100" cy="100" r="90" fill="#4f46e5" opacity="0.1"/>
  
  <!-- Main logo shape -->
  <path d="M70,70 L130,70 L160,100 L130,130 L70,130 L40,100 Z" 
        fill="none" 
        stroke="#4f46e5" 
        stroke-width="8"/>
  
  <!-- Inner design element -->
  <circle cx="100" cy="100" r="30" fill="none" stroke="#10b981" stroke-width="5"/>
  
  <!-- Center dot -->
  <circle cx="100" cy="100" r="8" fill="#10b981"/>
  
  
</svg>

      <AiOutlineTrademarkCircle className="text-gray-500 mb-6 w-3 h-3 flex col-auto ml-1 text-sm" />
    </div>
  );
}
