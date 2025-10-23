import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const HowHedgeFundsMakeMoney = () => {
  const content = `
## Overview

**In this section:**
- [The Absolute Return Goal](#the-absolute-return-goal)
- [Long and Short Positions](#long-and-short-positions)
- [Leverage and Derivatives](#leverage-and-derivatives)
- [Fund Economics](#fund-economics)

## The Absolute Return Goal

At their core, hedge funds are simply pools of investor money managed with one purpose: to make a profit regardless of what the broader market is doing. The goal is what's called **absolute return**. Unlike a mutual fund that lives or dies by the performance of the S&P 500, a hedge fund aims to generate positive results in both bull and bear markets.

## Long and Short Positions

Managers do this by combining long and short positions. They buy assets they believe will go up and sell short the ones they expect will go down. This flexibility allows them to focus on relative value rather than just direction.

A fund might be long a group of strong companies and short a group of weak ones, so the overall exposure to the market is limited. The profit comes from the difference between how those two groups perform, not from whether the market as a whole rises or falls.

## Leverage and Derivatives

Most hedge funds also use leverage and derivatives to magnify small edges. Borrowing capital lets them scale trades, while options and swaps help express more precise views on risk or volatility.

Everything ultimately flows into a single number: the fund's daily profit and loss. After subtracting borrowing costs and expenses, that P&L determines how much investors earn and how much the manager gets paid.

## Fund Economics

The economics of a hedge fund usually follow a **"two and twenty"** model. Investors pay a management fee, often around two percent of their capital, and a performance fee of twenty percent of any profits.

The **high-water mark** ensures the manager only earns performance fees when new gains are achieved, not when they are simply recovering from losses. When the fund performs well, both investors and the manager benefit. When it struggles, everyone feels it.

Understanding this flow from investment idea to executed trade to investor return is the foundation for everything that comes later. Every piece of a hedge fund's operation — data analysis, modeling, risk control, and execution — exists to support that chain.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Hedge Fund Fundamentals"
      subtitle="How Hedge Funds Make Money"
      description="Understanding the absolute-return goal, long/short mechanics, leverage, derivatives, fund economics, and how P&L flows from trades to investor returns."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default HowHedgeFundsMakeMoney;

