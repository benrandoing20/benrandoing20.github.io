import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const LongShortEquityAndPortfolioConstruction = () => {
  const content = `
## Overview

**In this section:**
- [The Long/Short Strategy](#the-longshort-strategy)
- [Portfolio as a Living System](#portfolio-as-a-living-system)
- [Position Sizing and Diversification](#position-sizing-and-diversification)
- [The Art and Science of Construction](#the-art-and-science-of-construction)

## The Long/Short Strategy

Long/short equity is where the modern hedge fund industry began. The idea is simple enough: buy the companies you think are undervalued and short the ones you think are overpriced. But doing it well is as much about structure as it is about stock picking.

## Portfolio as a Living System

A portfolio is a system with three key exposures. **Long exposure** is the total value of all long positions—the stocks you own. **Short exposure** is the total value of all short positions—the stocks you've borrowed and sold. **Net exposure** is the difference between the two, measuring how directional the portfolio is. If you're $150 million long and $100 million short, your net exposure is $50 million long, meaning you'll profit if the market rises and lose if it falls. **Gross exposure** is the sum of both sides ($250 million in this case), measuring the total capital at risk and the fund's leverage.

## Position Sizing and Diversification

Position sizing decides how much weight each idea gets. Larger positions reflect higher conviction or lower volatility, while smaller positions limit the damage from being wrong. The math behind optimal sizing—whether using Kelly criterion, risk parity, or mean-variance optimization—will be covered in the portfolio optimization section.

Diversification across sectors prevents unintended concentration. If half your longs are tech stocks and the sector sells off, your entire portfolio suffers regardless of individual stock quality. Monitoring factor exposures—value, momentum, growth, quality—ensures the portfolio's risk comes from intentional choices rather than hidden biases. A portfolio that looks diversified by name count can still be dangerously concentrated in a single factor. We'll explore factor models and risk decomposition in depth when we cover risk management.

## The Art and Science of Construction

At this level, portfolio construction becomes both art and science. The goal is to combine positions so that the portfolio behaves in a stable and predictable way. Good construction turns a series of individual insights into a coherent engine for generating returns.

Once you understand this process, every other hedge fund style — from event-driven to macro to quantitative — follows the same basic logic: find an edge, control the risks, and size it intelligently.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Hedge Fund Fundamentals"
      subtitle="Long/Short Equity & Portfolio Construction"
      description="Building portfolios with long positions in undervalued assets and short positions in overvalued ones, creating market-neutral or directional bets while managing gross and net exposure."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default LongShortEquityAndPortfolioConstruction;

