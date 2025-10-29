// src/data/services.js
// Canonical service & pricing data used by PricingTable and PricingAccordion.
// Update this single file to change labels, prices, or add/remove services.

import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";

export const SERVICES = [
  {
    id: "roofscopex",
    name: "RoofScopeX",
    logo: logo,
    rows: [
      { key: "Description", value: "Residential - < 50 SQ" },
      { key: "# of Bldgs", value: "1" },
      { key: "Monthly (Opportunity)", value: 11.0 },
      { key: "Monthly (Growth)", value: 11.0 },
      { key: "Annual (Advantage)", value: 91.0 },
    ],
  },

  {
    id: "roofscope",
    name: "RoofScope",
    logo: logo1,
    rows: [
      { key: "Description", value: "Residential - < 50 SQ" },
      { key: "# of Bldgs", value: "1 (+3 Aux)" },
      { key: "Monthly (Opportunity)", value: 37.95 },
      { key: "Monthly (Growth)", value: 65.45 },
      { key: "Annual (Advantage)", value: 323.95 },
    ],
  },

  {
    id: "roofscopeplus",
    name: "RoofScope+",
    logo: logo,
    rows: [
      { key: "Description", value: "Residential - < 50 SQ" },
      { key: "# of Bldgs", value: "1 (+3 Aux)" },
      { key: "Monthly (Opportunity)", value: 40.95 },
      { key: "Monthly (Growth)", value: 59.45 },
      { key: "Annual (Advantage)", value: 345.95 },
    ],
  },

  {
    id: "gutterscope",
    name: "GutterScope",
    logo: logo1,
    rows: [
      { key: "Description", value: "Residential - < 250 LF" },
      { key: "# of Bldgs", value: "1 (+3 Aux)" },
      { key: "Monthly (Opportunity)", value: 14.2 },
      { key: "Monthly (Growth)", value: 23.7 },
      { key: "Annual (Advantage)", value: 127.1 },
    ],
  },

  {
    id: "sidingscope",
    name: "SidingScope",
    logo: logo,
    rows: [
      { key: "Description", value: "Residential - < 30 SQ" },
      { key: "# of Bldgs", value: "1 (+3 Aux)" },
      { key: "Monthly (Opportunity)", value: 71.2 },
      { key: "Monthly (Growth)", value: 94.95 },
      { key: "Annual (Advantage)", value: 623.71 },
    ],
  },

  {
    id: "paintscope",
    name: "PaintScope",
    logo: logo1,
    rows: [
      { key: "Description", value: "Residential - < 1,000 SF" },
      { key: "# of Bldgs", value: "1 (+3 Aux)" },
      { key: "Monthly (Opportunity)", value: 71.2 },
      { key: "Monthly (Growth)", value: 94.95 },
      { key: "Annual (Advantage)", value: 623.71 },
    ],
  },

  {
    id: "concretescope",
    name: "ConcreteScope",
    logo: logo,
    rows: [
      { key: "Description", value: "Residential - < 100 CCF" },
      { key: "# of Bldgs", value: "1 (+3 Aux)" },
      { key: "Monthly (Opportunity)", value: 18.95 },
      { key: "Monthly (Growth)", value: 28.45 },
      { key: "Annual (Advantage)", value: 119.95 },
    ],
  },

  {
    id: "insulationscope",
    name: "InsulationScope",
    logo: logo1,
    rows: [
      { key: "Description", value: "Residential - < 5,000 SF" },
      { key: "# of Bldgs", value: "1 (+3 Aux)" },
      { key: "Monthly (Opportunity)", value: 18.95 },
      { key: "Monthly (Growth)", value: 28.45 },
      { key: "Annual (Advantage)", value: 119.95 },
    ],
  },
];
