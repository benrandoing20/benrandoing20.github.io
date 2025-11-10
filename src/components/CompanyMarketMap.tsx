import { useState } from 'react';

interface Company {
  name: string;
  description?: string;
  url?: string;
}

interface CompanyCategory {
  name: string;
  companies: Company[];
}

interface CompanyMarketMapProps {
  categories: CompanyCategory[];
  title?: string;
  subtitle?: string;
}

const CompanyMarketMap = ({ categories, title = "Industry Market Map", subtitle = "Companies and funds in the space" }: CompanyMarketMapProps) => {
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);

  return (
    <div className="mb-16">
      <div className="mb-6">
        <h3 className="text-lg font-light tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-sm font-light text-black/60 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Grid Market Map */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {categories.map((category, catIndex) => (
          <div
            key={catIndex}
            className="border border-black/10 hover:border-black/20 transition-all duration-200 bg-white"
          >
            {/* Category Header */}
            <div className="px-3 py-2 border-b border-black/10 bg-black/[0.02]">
              <h3 className="text-[10px] font-medium uppercase tracking-wider text-black/70 leading-tight">
                {category.name}
              </h3>
            </div>

            {/* Companies Grid */}
            <div className="p-2">
              <div className="flex flex-wrap gap-1.5">
                {category.companies.map((company, compIndex) => (
                  <div
                    key={compIndex}
                    className={`text-[10px] font-light px-2 py-1 border transition-all duration-150 leading-tight ${
                      hoveredCompany === `${catIndex}-${compIndex}`
                        ? 'bg-black text-white border-black'
                        : 'text-black/70 hover:text-black border-black/10 hover:border-black/30'
                    } ${company.url ? 'cursor-pointer' : 'cursor-default'}`}
                    onMouseEnter={() => setHoveredCompany(`${catIndex}-${compIndex}`)}
                    onMouseLeave={() => setHoveredCompany(null)}
                    onClick={() => company.url && window.open(company.url, '_blank')}
                    title={company.name}
                  >
                    {company.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyMarketMap;

