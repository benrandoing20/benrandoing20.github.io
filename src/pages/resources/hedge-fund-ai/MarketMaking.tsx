import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const MarketMaking = () => {
  const content = `
## Overview

**In this section:**
- [Market Making Overview](#market-making-overview)
- [The Role of Market Makers](#the-role-of-market-makers)
- [Profiting from the Spread](#profiting-from-the-spread)
- [Inventory Management](#inventory-management)
- [High-Frequency Trading](#high-frequency-trading)
- [Why Market Makers Matter](#why-market-makers-matter)

## Market Making Overview

While most hedge funds focus on executing their own trades, some take on a different role: providing liquidity to others. This is the domain of market making. Market makers continuously post buy and sell quotes, standing ready to trade at those prices. They profit from the tiny difference between their bid and ask — the spread — but this comes with significant risk.

The core risk is **inventory risk**: when a market maker buys shares, they're exposed to price movements until they can sell them. If the price drops before they offload their position, they lose money. Similarly, if they sell shares short and the price rises, they face losses. Market makers must constantly balance their inventory, ensuring they don't accumulate too much exposure on either side while still capturing the spread on every trade.

## The Role of Market Makers

A market maker acts as an intermediary in the market. Instead of waiting for two parties who want to trade with each other to find each other, the market maker stands in the middle — always ready to buy from sellers and sell to buyers.

This service keeps markets liquid and orderly. Without market makers, traders would face wider spreads, longer wait times, and more volatile prices.

## Profiting from the Spread

Market makers earn money from the **bid-ask spread** — the difference between the price they're willing to buy at (bid) and the price they're willing to sell at (ask).

For example, suppose a market maker quotes a stock at:
- **Bid**: $100.00 (willing to buy)
- **Ask**: $100.05 (willing to sell)

If they buy 1,000 shares at $100.00 and immediately sell 1,000 shares at $100.05, they capture the spread:

\\[\\text{Profit} = (100.05 - 100.00) \\times 1,000 = \\$50\\]

This seems small, but market makers execute thousands or millions of trades per day. If they complete 10,000 round-trip trades daily with an average spread of $0.05, that's:

\\[\\text{Daily Profit} = 0.05 \\times 10,000 = \\$500,000\\]

A good market maker is like a tightrope walker. Move too slowly, and others will take your place in the queue. Move too quickly, and you'll be hit by informed traders just before the market moves. Algorithms handle this balancing act by constantly adjusting spreads based on volatility, order flow, and competition.

## Inventory Management

**Inventory management** is key. If a market maker accumulates too much of one side (too many longs or shorts), they'll hedge that exposure using correlated instruments or futures to keep risk contained.

For example, suppose a market maker has accumulated a long position of 50,000 shares in stock XYZ (currently at $100) because more people have been selling to them than buying from them. Their inventory risk is:

\\[\\text{Inventory Value} = 50,000 \\times 100 = \\$5,000,000\\]

If the stock drops by just 1%, they lose:

\\[\\text{Loss} = 5,000,000 \\times 0.01 = \\$50,000\\]

To manage this risk, they might:
**Adjust quotes** to encourage buying: Widen the bid to $99.95 and tighten the ask to $100.03, making it more attractive for others to buy from them.
**Hedge with futures**: Short 500 futures contracts (each representing 100 shares) to offset the long exposure.

The goal is to stay relatively neutral while collecting the spread on every trade. When inventory drifts too far in one direction, algorithms automatically adjust quotes to encourage trades that bring it back toward balance — offering better prices on the side they want to reduce.

## High-Frequency Trading

High-frequency trading firms take market making to the extreme — operating at **microsecond speeds**, colocating servers next to exchange data centers to minimize latency.

These firms compete on speed and efficiency, updating quotes thousands of times per second and trading millions of shares per day. Their profit per trade is tiny, but volume makes up for it.

At this level, every microsecond counts. Firms invest heavily in custom hardware, optimized network paths, and algorithm efficiency to stay ahead of competitors.

## Why Market Makers Matter

For the rest of the market, market makers are what keep prices orderly. They absorb supply and demand imbalances, ensuring that other traders can enter and exit positions smoothly.

For hedge funds that rely on liquidity, understanding how these players behave is crucial. It helps identify when liquidity is genuine and when it might vanish under stress. During market turbulence, market makers often widen their spreads or step back entirely, which can make execution much more difficult.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Execution & Market Microstructure"
      subtitle="Market Making"
      description="Ultra-fast trading measured in microseconds—providing liquidity by constantly quoting bid-ask spreads, managing inventory risk, competing for queue position, and avoiding being picked off by informed traders."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default MarketMaking;

