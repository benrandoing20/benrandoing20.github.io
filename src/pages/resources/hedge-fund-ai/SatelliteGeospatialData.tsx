import SimpleSubsectionDetail from '@/components/SimpleSubsectionDetail';

const SatelliteGeospatialData = () => {
  const content = `
## Overview

**In this section:**
- [Overview](#overview)
- [Physical World Intelligence](#physical-world-intelligence)
- [Use Cases](#use-cases)
- [Data Sources](#data-sources)
- [Computer Vision Pipeline](#computer-vision-pipeline)
- [Feature Extraction](#feature-extraction)
- [Nowcasting Economic Activity](#nowcasting-economic-activity)
- [Validation and Signal Quality](#validation-and-signal-quality)
- [Cost and Coverage Tradeoffs](#cost-and-coverage-tradeoffs)

## Overview

If sentiment tells you what people are saying, satellite and geospatial data tells you what they're actually doing.

## Physical World Intelligence

This form of alternative data uses imagery and spatial analytics to observe real world activity, literally looking down at the planet for clues about economic behavior.

**Why it matters:**

Traditional economic data arrives weeks or months late:

- Retail sales: Released 2 weeks after month end
- GDP: Released quarterly with 1 month lag
- Employment: Monthly with 1 week lag

Satellite data provides **nowcasting**, real-time estimates of economic activity happening right now.

**The advantage:**

You can see what's happening at a specific company, factory, port, or retail location before anyone reports it. This turns patient capital into informed capital.

## Use Cases

Common use cases include:

**Retail foot traffic:**

Counting cars in parking lots or people entering malls to estimate sales before earnings reports.

- **Method**: Analyze parking lot occupancy at thousands of retail locations
- **Frequency**: Daily or weekly
- **Signal**: Correlate car counts with same store sales growth
- **Example**: Walmart parking lots show 15% increase in activity vs last year → potential earnings beat
- **Retailers tracked**: Walmart, Target, Home Depot, Costco, mall REITs

**Oil and commodities:**

Measuring shadows on oil storage tanks to infer inventory levels, or tracking the movement of cargo ships to monitor supply chains.

**Floating roof tanks**: Roof height changes as tanks fill or empty

**Shadow analysis**: Measure shadow length to calculate roof position

\\[\\text{Fill Level} = f(\\text{Shadow Length}, \\text{Tank Diameter}, \\text{Sun Angle})\\]

**Cargo ships**: Track vessel movements using AIS (Automatic Identification System)

- Departure and arrival times
- Dwell time at ports
- Route changes

**Signal**: Rising oil inventories → bearish for oil prices

**Agriculture:**

Using infrared imaging to assess crop health and forecast yields weeks before government reports.

**NDVI (Normalized Difference Vegetation Index):**

Measures plant health using infrared reflectance.

\\[\\text{NDVI} = \\frac{\\text{NIR} - \\text{Red}}{\\text{NIR} + \\text{Red}}\\]

Where:

- NIR = Near Infrared reflectance (plants reflect this)
- Red = Red light reflectance (plants absorb this)

**Scale**: 1 to +1

- High NDVI (0.6 to 0.9) = Healthy vegetation
- Low NDVI (0 to 0.3) = Bare soil or stressed crops

**Use case**: Predict corn yields in Iowa, soybean production in Brazil

**Impact**: Trade agricultural futures, fertilizer companies, food producers

**Construction and infrastructure:**

Tracking the pace of building projects or factory expansions across regions.

**Signals:**

- Construction site activity (equipment, materials)
- Factory expansion (new buildings, parking lots)
- Infrastructure development (roads, bridges, pipelines)

**Example**: Detect Tesla building Gigafactory in Austin months before official announcement by tracking construction progress.

**Economic inference**: Rising construction = economic growth, material demand (steel, cement)

## Data Sources

These datasets come from satellites, drones, and increasingly, AIS ship tracking, GPS traces, and geotagged social media posts.

**Satellite imagery:**

**Commercial providers:**

- Planet Labs: Daily global coverage, 3-5m resolution
- Maxar (DigitalGlobe): High resolution (30cm), less frequent
- Sentinel (ESA): Free, 10m resolution, weekly
- Landsat (NASA): Free, 30m resolution, every 16 days

**Resolution tradeoffs:**

- High resolution (< 1m): Can see individual cars, expensive
- Medium (3-10m): Can see parking lots, buildings, affordable
- Low (> 30m): Good for agriculture, weather, free

**Revisit frequency**: How often same location is imaged

- Daily: Expensive but detects fast changes
- Weekly: Good balance
- Monthly: Too slow for trading signals

**AIS ship tracking:**

- **What it is**: Ships broadcast position, speed, destination via radio
- **Coverage**: Global, real-time
- **Data fields**: Vessel ID, lat/lon, speed, heading, draft (load level)
- **Use cases**: Oil tanker movements (crude supply), container ships (trade flows), bulk carriers (iron ore, coal, grain)

**Use cases**:

- Oil tanker movements (crude supply)
- Container ships (trade flows)
- Bulk carriers (iron ore, coal, grain)

**Signal**: Increased tanker arrivals in China → rising oil demand

**GPS and mobile location data:**

- **Source**: Anonymized smartphone location pings
- **Coverage**: Global, real-time
- **Data fields**: Device ID, lat/lon, timestamp, speed, heading
- **Use cases**: Track foot traffic at retail, restaurants, theme parks
- **Privacy**: Must be aggregated and anonymized (GDPR, CCPA compliant)
- **Example**: SafeGraph provides foot traffic data for millions of POIs (points of interest)

**Drone imagery:**

- **Advantage**: Very high resolution, flexible timing
- **Disadvantage**: Limited scale, regulatory restrictions
- **Use cases**: Monitor specific facilities, construction sites, or events

## Computer Vision Pipeline

Computer vision models process the images, detecting patterns such as the density of cars, changes in surface color (for crops), or object counts in industrial zones.

**Standard pipeline:**

1. **Image acquisition**: Download satellite imagery
2. **Preprocessing**: Cloud removal (mask or filter cloudy pixels), atmospheric correction (remove haze), georeferencing (align to coordinates), normalization (consistent brightness/contrast)
3. **Object detection**: Find cars, ships, buildings, tanks
4. **Classification**: Categorize objects or land use
5. **Measurement**: Count, measure area, calculate index
6. **Time series**: Track changes over weeks/months

**Modern models use convolutional neural networks (CNNs) trained on labeled imagery:**

**Architecture examples:**

- **ResNet, EfficientNet**: General purpose image classification
- **YOLO, Faster R-CNN**: Real-time object detection
- **U-Net, Mask R-CNN**: Semantic segmentation (pixel level classification)

**Training process:**

Collect labeled data:

   - 10,000 images of parking lots
   - Human annotators count cars
   - Create bounding boxes around each car

Train CNN:

   - Input: Satellite image
   - Output: Number of cars, confidence scores

Validate:

   - Test on held out images
   - Compare predictions to ground truth

Deploy:

   - Run inference on new imagery
   - Extract features for trading models

**Extract reliable features from noisy environments:**

Challenges: clouds, lighting changes, terrain, shadows, occlusion

**Solutions:**

- Multi-temporal analysis (average over multiple dates)
- Synthetic aperture radar (SAR) for all weather imaging
- Ensemble models (combine multiple detections)

## Feature Extraction

**Car counting:**

\\[\\text{Traffic Index}_t = \\frac{\\text{Cars Counted}_t}{\\text{Historical Average}}\\]

**Tank fill level:**

\\[\\text{Fill}_t = \\frac{\\text{Current Height}}{\\text{Max Height}}\\]

\\[\\text{Inventory Change} = \\text{Fill}_t - \\text{Fill}_{t-1}\\]

**NDVI time series:**

Track vegetation health over growing season:

\\[\\text{Crop Health Score} = \\int_{t_0}^{t_1} \\text{NDVI}(t) \\, dt\\]

**Construction progress:**

\\[\\text{Progress}_t = \\frac{\\text{Area Built}_t}{\\text{Total Planned Area}}\\]

**Shipping activity:**

\\[\\text{Port Activity}_t = \\sum_{i} \\text{Vessel}_i \\times \\text{Tonnage}_i\\]

## Nowcasting Economic Activity

For example, a fund might notice consistent increases in truck activity near a major manufacturer's facilities, suggesting higher production and potential earnings surprises. Or it could use satellite images of Chinese ports to anticipate global trade flows.

**Concrete example:**

**Goal**: Predict Tesla Q3 deliveries before announcement

**Method**:

1. Image Tesla factories (Fremont, Shanghai, Berlin, Austin)
2. Count cars in delivery lots using computer vision
3. Track weekly inventory accumulation
4. Estimate deliveries based on lot turnover

**Signal**:

- If lots are full and cars are being moved out quickly → high deliveries
- If lots are empty or cars sit for weeks → production issues

**Trading strategy**:

- If estimate >> consensus → buy calls before earnings
- If estimate << consensus → buy puts or short stock

**The power of geospatial data lies in nowcasting:**

Providing real-time economic indicators rather than waiting for lagging reports.

**Macro nowcasting:**

Use satellite data to estimate:

- **GDP**: Industrial activity, construction, shipping
- **Inflation**: Commodity inventories, shipping costs
- **Employment**: Parking lot activity at factories
- **Consumer spending**: Retail foot traffic

**Regional analysis:**

Compare activity across regions:

- China port activity vs US
- European construction vs Asian
- Emerging market infrastructure growth

## Validation and Signal Quality

But again, validation is key. Each dataset must be tested for coverage, timeliness, signal to noise ratio, and cost efficiency.

**Testing framework:**

1. **Collect historical data**: 3-5 years of imagery
2. **Extract features**: Car counts, tank levels, NDVI, etc.
3. **Align with fundamentals**: Retail traffic → same store sales, Tank levels → EIA inventory reports, NDVI → USDA yield estimates
4. **Measure correlation**:   \\[\\text{IC} = \\text{Corr}(\\text{Satellite Feature}_t, \\text{Fundamental}_{t+k})\\]
5. **Test predictiveness**: Does it predict before official data? How much lead time (days/weeks)? Is it statistically significant?

**Quality metrics:**

**Coverage**: How many locations are monitored?

- More locations = better diversification
- Edge cases: remote areas, frequent cloud cover

**Revisit frequency**: How often is each location imaged?

- Daily = high cost, low cloud impact
- Weekly = balanced
- Monthly = may miss important changes

**Resolution**: Can you see what you need?

- Cars: Need 1-5m resolution
- Buildings: 10-30m okay
- Agriculture: 10-100m okay

**Accuracy**: How reliable are the measurements?

- Validate against ground truth
- Measure error rates
- Understand failure modes (clouds, shadows)

**Timeliness**: How fast do you get the data?

- Real-time: Within hours
- Near real-time: 1-2 days
- Batch: Weekly

## Cost and Coverage Tradeoffs

Collecting petabytes of imagery is easy; proving that it adds value to P&L is not.

**Cost structure:**

- **Data acquisition**: $100 to $10,000 per image depending on resolution and tasking
- **Processing**: Cloud compute for computer vision inference
- **Storage**: Petabytes of imagery ($1,000 to $10,000/month)
- **Personnel**: Data scientists, geospatial analysts
- **Total**: $500K to $5M+ annually for comprehensive program

**ROI analysis:**

Does the alpha generated exceed costs?

**Example calculation:**

- **Annual cost**: $2M
- **Alpha generated**: 50 bps on $1B AUM = $5M
- **Net benefit**: $3M
- **ROI**: 150%

**Scaling challenge:**

As more funds use same data, edge shrinks:

- First mover advantage matters
- Proprietary processing methods create differentiation
- Combining multiple datasets increases complexity and edge

**Strategic questions:**

**Build vs buy:**

- Build in-house capability (hire team, develop models)
- Buy from vendors (Orbital Insight, RS Metrics, SpaceKnow)

**Focus vs breadth:**

- Deep coverage of few sectors (e.g., only retail)
- Broad coverage of many sectors (diversified)

**Frequency vs resolution:**

- High resolution, low frequency (detailed but slow)
- Low resolution, high frequency (fast but less detail)

The best funds treat satellite data not as magic but as structured information that must earn its place in the investment process through rigorous testing and constant validation.

When done right, geospatial data provides an unmatched window into real-world economic activity, turning the physical planet into a trading signal.
`;

  return (
    <SimpleSubsectionDetail
      category="Hedge Fund AI"
      categoryHref="/resources/hedge-fund-ai"
      title="Alternative Data & Signals"
      subtitle="Satellite & Geospatial Data"
      description="Using satellite imagery for trading signals by tracking retail traffic, agricultural yields, oil storage levels from satellite imagery using computer vision for alternative alpha generation and nowcasting economic activity."
      lastUpdated="October 2025"
      content={content}
    />
  );
};

export default SatelliteGeospatialData;

