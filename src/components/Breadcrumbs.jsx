import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 py-3 md:px-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#555555]">
        <li>
          <Link to="/" className="hover:text-[#042345] transition-colors">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
            {item.href ? (
              <Link to={item.href} className="hover:text-[#042345] transition-colors">{item.label}</Link>
            ) : (
              <span className="text-[#042345] font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}