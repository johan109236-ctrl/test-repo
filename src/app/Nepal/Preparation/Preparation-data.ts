

export type PrepCard = {
  icon?: string;
  title: string;
  body: string;
  tag?: string;
  cross?: boolean;
  
};



export type PrepChecklistGroup = {
  category: string;
  items: string[]; // 
};

export type PrepRisk = {
  icon?: string;
  title: string;
  description: string;
};

export type TrainingDay = {
  label: string;
  activity: string;
  note?: string;
};

export type TrainingPhase = {
  phase: string;
  title: string;
  description: string;
  days: TrainingDay[];
};

export type TrainingTrack = {
  label: string;
  description: string;
  phases: TrainingPhase[];
};

export type NutritionItem = {
  title: string;
  body: string;
  cross?: boolean;
};

export type NutritionPanel = {
  icon?: string;
  heading: string;
  items: NutritionItem[];
};

export type NutritionSnacks = {
  intro: string;
  items: string[];
};

export type GearBadge = 'provided by NHA' | 'additional cost' | 'bring your own';

export type GearItem = {
  name: string;
  note?: string;
  badge: GearBadge;
};

export type GearCategory = {
  category: string;
  items: GearItem[];
};

export type PrepContent = {
  intro?: string;
  cards?: PrepCard[];
  checklist?: PrepChecklistGroup[];
  risks?: PrepRisk[];
  training_plan?: TrainingPhase[];
  training_tracks?: TrainingTrack[];

  panels?: {
    heading: string;
    items: { title: string; body: string }[];
  }[];

  nutrition?: {
    panels: NutritionPanel[];
    snacks?: NutritionSnacks;
  };

  gear?: {
    legend?: { show: true };
    categories: GearCategory[];
  };
};

export type PrepSection = {
  id: string;
  label: string;
  content: PrepContent;
};

export type PrepGuideData = {
  title: string;
  subtitle: string;
  stats: { label: string; value: string }[];
  sections: PrepSection[];
};


export const prepGuides: Record<string, PrepGuideData> = {

  'expeditions': {
    title: 'Nepal Himal Adventures',
    subtitle: 'Expedition preparation guide',
    stats: [
      { label: 'Highest summit',     value: '6,812m'  },
      { label: 'Longest program',    value: '29 days' },
      { label: 'Technical grade',    value: 'Alpine'  },
      { label: 'Best seasons',       value: 'Apr / Oct' },
    ],
    sections: [
      {
  id: 'overview',
  label: 'Overview',
  content: {
    panels: [
      {
        heading: 'Extreme Alpine Hydration Protocol',
        items: [
          { title: 'Daily target', body: 'Drink 4.5 to 5.5 liters of fluids daily. This includes clean water, hot ginger water, black tea, and clear broths provided by the base camp kitchen. At 5,500m–6,500m, the air is freezing and bone-dry. Your respiration rate increases dramatically to compensate for low oxygen levels, meaning you lose massive amounts of moisture simply through breathing out warm air.' },
          { title: 'Summit night melting protocol', body: 'At high camps, all water comes from melted snow, which is entirely devoid of minerals. Drinking pure melted snow water causes rapid electrolyte depletion and muscle cramping. You must mix oral rehydration salts or high-sodium electrolyte tablets into every single liter of melted snow water.' },
          { title: 'Freezing prevention', body: 'Standard hydration bladders and tubes freeze instantly above the snowline. Use wide-mouth insulated flasks and store them upside down in your pack — water freezes from the top down, keeping the threads clear.' },
        ],
      },
      {
        heading: 'Critical High-Altitude & Climbing Risks',
        items: [
          { title: 'HAPE and HACE at extreme elevations', body: 'Climbing peaks like Mera (6,476m), Island Peak (6,160m), or Lobuche East (6,119m) pushes you into the extreme high-altitude zone. Monitor for HAPE — persistent wet cough, pink frothy sputum, bubbling lungs — and HACE — ataxia, confusion, slurred speech. Both are life-threatening emergencies. Immediate descent, oxygen administration, and dexamethasone/nifedipine are mandatory.' },
          { title: 'Summit-day frostbite & peripheral vascular shutdown', body: 'In sub-zero temperatures combined with high-altitude hypoxia, your body automatically pulls warm blood away from your fingers and toes. If your boots are laced too tightly or your gloves get damp from snow or sweat, frostbite can set in within minutes. Always wear high-quality double mountaineering boots, utilize chemical warmers, and constantly wiggle your toes on the trail.' },
          { title: 'Fixed-line anchor congestion & fatigue drop', body: 'On technical pitches such as the final headwalls of Island Peak or Lobuche East, multiple climbers share the same fixed rope. Sudden upper body exhaustion or panic can stall you on the line, exposing yourself and others to extreme cold and rock/ice fall. Training must emphasize upper body pulling stamina and core stability.' },
          { title: 'High-altitude snow blindness (UV Keratitis)', body: 'Snow reflections on glaciers reflect up to 80% of UV radiation directly back into your eyes. Climbing without Category 4 polarized glacier glasses featuring side shields can burn your corneas, causing temporary blindness, extreme pain, and a complete inability to descend safely.' },
          { title: 'Hypothermia via summit-stop delays', body: 'Summit pushes begin at midnight to beat afternoon winds. If a technical bottleneck occurs at a fixed rope anchor, you may stand still for 30–60 minutes. If your base layers are damp with sweat from the approach hike, your core temperature will drop rapidly. Keep a high-loft down parka at the very top of your daypack, ready to layer over your shell instantly.' },
        ],
      },
      {
        heading: 'Critical Risks & Golden Rules for Absolute Beginners',
        items: [
          { title: 'The "Bistari, Bistari" (Slowly, Slowly) rule', body: 'The single biggest mistake beginners make is walking too fast early in the morning. This burns out your leg muscles and rapidly increases your risk of Acute Mountain Sickness. Walk at a pace so slow that it feels almost frustrating. If you cannot sing or hold a casual conversation while walking uphill, you are moving too fast.' },
          { title: 'Do not ignore the hot spot — blister prevention', body: 'When wearing new boots, if you feel a burning sensation or friction on your heel or toes, stop immediately. Do not wait until you reach camp. Sit down, take off your boot, and apply a blister pad, sports tape, or a band-aid. Once a blister pops, walking becomes agonizing.' },
          { title: 'The two-trekking-pole system', body: 'Beginners often think trekking poles are optional or only for older hikers. This is a myth. Dual trekking poles act like two extra legs, reducing the jarring impact on your knees by up to 25% on steep downhills and keeping you balanced on slippery or uneven rocks.' },
          { title: 'The diamond rule of mountain water safety', body: 'A single sip of untreated tap, river, or spring water can cause severe traveler\'s diarrhea, which will end your trek within 24 hours due to rapid dehydration. Always treat your water using chlorine dioxide tablets, a high-quality portable UV purifier, or rely strictly on water that has been rolling-boiled by the lodge kitchen.' },
          { title: 'Layering against the flash-chill', body: 'Mountain weather changes rapidly. You might feel hot and sweaty walking under the afternoon sun, but the moment you stop or the sun dips behind a ridge, the temperature drops instantly. Keep a lightweight fleece or down jacket at the top of your daypack so you can put it on the second you stop walking.' },
        ],
      },
    ],
  },
},
      {
        id: 'training',
        label: 'Training plan',
        content: {
          
          training_plan: [
            {
              phase: 'PHASE 1 — WEEKS 1–4 · STRUCTURAL BASE',
              title: 'Bulletproof your joints',
              description: 'The priority is adapting connective tissues, lower back, and core to handle daily climbing with a loaded pack. Strict incline only — no flat ground training.',
              days: [
                { label: 'Mon', activity: '45 min treadmill at 6–10% incline — nasal breathing pace only' },
                { label: 'Tue', activity: 'Weighted goblet squats 3×12, ankle eversion drills 3×15 per foot with resistance band', note: 'Prepares ankles for lateral angles on hard snow slopes' },
                { label: 'Wed', activity: '45 min incline treadmill or steep local hill walk' },
                { label: 'Thu', activity: 'Calf raises full deficit 3×20, hollow body holds 3×30 sec' },
                { label: 'Fri', activity: 'Active recovery — 30 min easy walk or swimming' },
                { label: 'Sat', activity: '2.5 hr trail hike wearing daypack loaded with 6–8 kg' },
                { label: 'Sun', activity: 'Full rest' },
              ],
            },
            {
              phase: 'PHASE 2 — WEEKS 5–8 · WEIGHTED STEPPING & PULLING',
              title: 'Load the body, train the rope',
              description: 'Introduces the vertical stepping and upper-body pulling strength required to ascend fixed ropes on steep headwalls like the final pitches of Island Peak or Lobuche East.',
              days: [
                { label: 'Mon', activity: '45 min stairmaster — wear heavy hiking boots or ankle weights', note: 'Simulates the lifting weight of mountaineering boots' },
                { label: 'Tue', activity: 'Pull-ups or lat pulldowns 3×8–12, weighted box step-ups 3×15 per leg, farmers walks 3×45 sec' },
                { label: 'Wed', activity: '45 min stairmaster session' },
                { label: 'Thu', activity: 'Plank with alternating arm reaches 3×45 sec, ankle drills, calf raises' },
                { label: 'Fri', activity: 'Active recovery' },
                { label: 'Sat', activity: '2.5 hr outdoor trail hike with 6–8 kg pack' },
                { label: 'Sun', activity: 'Rest or easy walk' },
              ],
            },
            {
              phase: 'PHASE 3 — WEEKS 9–12 · PEAK VERTICAL VOLUME',
              title: 'Summit simulation',
              description: 'Maximum load and back-to-back days to condition your body to function on pre-fatigued muscles. This directly mirrors summit push conditions.',
              days: [
                { label: 'Mon', activity: '60 min incline treadmill power walk (12% grade) with 10 kg pack' },
                { label: 'Tue', activity: 'Mountaineering circuit ×3: 15 squats → 10 dumbbell rows → 15 step-ups per leg → 20 deficit calf raises → 60 sec plank', note: 'Zero rest between movements' },
                { label: 'Wed', activity: '60 min fast stair climbing session' },
                { label: 'Thu', activity: 'Circuit repeat or strength maintenance session' },
                { label: 'Fri', activity: 'Active recovery — mobility and stretching' },
                { label: 'Sat', activity: '4 hrs continuous trail hiking with significant elevation gain, 10–12 kg pack' },
                { label: 'Sun', activity: '2.5 hr trail hike next morning with the same pack weight', note: 'Back-to-back block — conditions body to push through cumulative fatigue' },
              ],
            },
            {
              phase: 'PHASE 4 — WEEKS 13–14 · TAPER',
              title: 'Sharpen and rest',
              description: 'Maintain structural loads through Week 13. Cut total workout volume by 50% in Week 14. Transition to pure mobility, stretching, and systemic rest in final days before departure.',
              days: [
                { label: 'Wk 13', activity: 'Maintain full training load — no reduction yet' },
                { label: 'Wk 14', activity: 'Cut all sets and reps by 50% — two short sessions only' },
                { label: 'Final wk', activity: 'Easy 30 min walks only, gear shakedown, sleep 8hrs+, no alcohol' },
              ],
            },
          ],
          training_tracks: [
      {
        label: 'Beginner track',
        description: 'Choose your track based on your current fitness level. Both programs are 14 weeks and designed specifically to prepare you for expedition conditions.',
        phases: [], 
      },
      {
        label: 'Active / fit track',
        description: 'For: regular gym-goer, runner, cyclist, or hiker with some experience. Goal: develop high-altitude endurance, heavy-pack efficiency, and multi-day hiking capacity over 16 weeks.',
        phases: [
          {
            phase: 'PHASE 1 — WEEKS 1–4 · SPORT-TO-TREK TRANSITION',
            title: 'Shifting from gym to mountain',
            description: 'Redirect your fitness to hiking-specific demands. Introduce loaded pack work immediately. Prioritize hiking and vertical gain over gym sessions.',
            days: [
              { label: 'Mon', activity: '60 min trail run or hike with 8kg pack' },
              { label: 'Tue', activity: 'Strength — heavy step-ups, Bulgarian split squats, single-leg deadlifts (4×10)', note: 'Functional leg strength, not aesthetics' },
              { label: 'Wed', activity: '90 min hike with 8–10kg pack, focus on elevation gain' },
              { label: 'Thu', activity: '60 min cycling (zone 2) or yoga' },
              { label: 'Fri', activity: 'Hill repeats 45 min or stair intervals with pack' },
              { label: 'Sat', activity: 'Long day hike 4–5hrs, 800–1,000m gain, 10kg pack' },
              { label: 'Sun', activity: 'Active recovery — swim or easy walk' },
            ],
          },
          {
            phase: 'PHASE 2 — WEEKS 5–10 · HIGH-VOLUME BUILD',
            title: 'Progressive overload',
            description: 'Increase pack to 12kg on long days. Saturday hikes should hit 6–7hrs. Complete a 2-day overnight hike by week 9 as a fitness benchmark.',
            days: [
              { label: 'Mon', activity: '75 min run/hike intervals with pack' },
              { label: 'Tue', activity: 'Strength — weighted lunges, trap-bar deadlifts, cable rows (4×10)' },
              { label: 'Wed', activity: '2hr hike with 12kg pack, aim for 600m+ elevation' },
              { label: 'Thu', activity: 'Mobility + 15 min breathwork (Wim Hof or box breathing)', note: 'Conditions lungs for reduced O₂ at altitude' },
              { label: 'Fri', activity: '45 min hill sprints or stair intervals' },
              { label: 'Sat', activity: 'Long day hike 6–7hrs, 1,200m+ gain, full 12kg pack' },
              { label: 'Sun', activity: 'Rest or easy hike (60 min)' },
            ],
          },
          {
            phase: 'PHASE 3 — WEEKS 11–14 · PEAK & SIMULATION',
            title: 'Trek-specific simulation',
            description: 'Multi-day hike (2–3 nights) in weeks 12–13. Maximum pack weight. Daily breathwork. Reduce strength to maintenance only.',
            days: [
              { label: 'Mon–Fri', activity: '5 days active: 2 long hikes (60–90 min), 2 cardio, 1 strength (maintenance)' },
              { label: 'Sat', activity: 'Hike 6–8hrs, 1,500m+ gain, 12kg pack — full simulation day' },
              { label: 'Wk 12–13', activity: 'Multi-night hike (2–3 days) in mountain terrain if accessible', note: 'Benchmark: can you complete day 3 feeling strong?' },
              { label: 'Daily', activity: '10 min diaphragmatic breathwork every morning' },
            ],
          },
          {
            phase: 'PHASE 4 — WEEKS 15–16 · TAPER',
            title: 'Sharpen and rest',
            description: 'Drop volume by 50%, maintain intensity on short sessions. Body needs to arrive fresh, not depleted.',
            days: [
              { label: 'Wk 15', activity: '3 hikes (1–1.5hrs each), 1 strength session, sleep 8hrs+' },
              { label: 'Wk 16', activity: '2 easy walks, stretching only, full gear shake-down, rest' },
            ],
          },
        ],
      },
    ],
          
          
        },
      },
      {
        id: 'gear',
        label: 'Gear & packing',
        content: {
          gear: {
            legend: { show: true },
            categories: [
              {
                category: 'CLIMBING HARDWARE (TECHNICAL)',
                items: [
                  { name: 'Mountaineering boots (double or single insulated, crampon-compatible)', note: 'Must be broken in — do not arrive with new boots', badge: 'bring your own' },
                  { name: 'Crampons (12-point, technical mountaineering grade)', note: 'Available via NHA rental at additional cost', badge: 'additional cost' },
                  { name: 'Ice axe (technical, 55–65cm)', note: 'Available via NHA rental at additional cost', badge: 'additional cost' },
                  { name: 'Climbing harness (sit harness, adjustable)', badge: 'additional cost' },
                  { name: 'Jumar / ascender (rope ascending device)', badge: 'additional cost' },
                  { name: 'Locking carabiners (×4 minimum)', badge: 'additional cost' },
                  { name: 'Prussik loops (×2) and belay device', badge: 'additional cost' },
                  { name: 'Helmet (climbing grade)', badge: 'additional cost' },
                ],
              },
              {
                category: 'CLOTHING — HIGH ALTITUDE',
                items: [
                  { name: 'Down suit or high-altitude down jacket + salopettes (rated −25°C or below)', note: 'NHA provides a high-quality down jacket for the expedition', badge: 'provided by NHA' },
                  { name: 'Sleeping bag (rated −30°C expedition grade)', note: 'NHA provides expedition sleeping bag — returned after trip', badge: 'provided by NHA' },
                  { name: 'Waterproof hardshell jacket and pants (Gore-Tex or equivalent)', badge: 'bring your own' },
                  { name: 'Mid layer fleece (×2) and thermal base layers (×3 merino wool)', badge: 'bring your own' },
                  { name: 'High-altitude gloves (expedition mitts + liner gloves)', badge: 'bring your own' },
                  { name: 'Balaclava and warm beanie', note: 'NHA beanie provided on arrival', badge: 'provided by NHA' },
                  { name: 'Neck gaiter / Buff', note: 'NHA Buff provided on arrival', badge: 'provided by NHA' },
                  { name: 'Trekking pants (×2 lightweight), hiking shirts (×3–4), thermal socks (×4 pairs)', badge: 'bring your own' },
                ],
              },
              {
                category: 'PACK, SHELTER & SAFETY',
                items: [
                  { name: 'NHA duffel bag (porter bag)', note: 'Provided by NHA in your welcome kit', badge: 'provided by NHA' },
                  { name: 'Summit pack / climbing pack (30–35L)', badge: 'bring your own' },
                  { name: 'Trekking poles (×2, collapsible)', badge: 'bring your own' },
                  { name: 'Headtorch (expedition grade, rated −20°C) + spare batteries', badge: 'bring your own' },
                  { name: 'Glacier UV400 goggles with side shields (full wraparound)', badge: 'bring your own' },
                  { name: 'Wide-mouth insulated flask (Nalgene style, 1L ×2)', note: 'Store upside down in pack — water freezes top-down keeping threads clear', badge: 'bring your own' },
                  { name: 'Oral rehydration salts / high-sodium electrolyte tablets', badge: 'bring your own' },
                  { name: 'Chemical toe/hand warmers (×10 pairs minimum)', badge: 'bring your own' },
                  { name: 'SPF 50+ sunscreen and high-altitude lip balm', badge: 'bring your own' },
                  { name: 'Power bank (20,000mAh+), dry bags for electronics', badge: 'bring your own' },
                  { name: 'NHA trekking map and trip completion certificate', note: 'Provided in NHA welcome kit', badge: 'provided by NHA' },
                ],
              },
            ],
          },
        },
      },
      {
        id: 'nutrition',
        label: 'Nutrition',
        content: {
          nutrition: {
            panels: [
              {
              
                heading: 'Pre-expedition diet (training phase)',
                items: [
                  { title: 'High complex carbohydrates', body: 'Oats, rice, sweet potato — sustained fuel for long training days. Increase carb intake by 25% the 24 hours before back-to-back weekend simulation hikes.' },
                  { title: 'Protein 1.6–2.2g per kg bodyweight', body: 'Higher than standard trekking — muscle repair under heavy climbing load and weighted rucking is critical.' },
                  { title: 'Iron-rich foods', body: 'Spinach, lentils, red meat — oxygen-carrying capacity becomes critical at 6,000m+.' },
                  { title: 'Beetroot, nitrates, and adaptogens', body: 'Rhodiola rosea and beet juice show meaningful altitude benefits. Begin 4 weeks before departure.' },
                  { title: 'No alcohol during training or on expedition', body: 'Severely impairs acclimatization and recovery at altitude.', cross: true },
                ],
              },
              {
                
                heading: 'Hydration at altitude',
                items: [
                  { title: '4.5–5.5 litres daily during the climbing period', body: 'Your single most important action to prevent AMS and HACE. Includes water, hot ginger water, black tea, and clear broths.' },
                  { title: 'Summit night — melt protocol', body: 'Melted snow water is devoid of minerals. Mix oral rehydration salts or electrolyte tablets into every single litre of melted snow water to prevent cramping.' },
                  { title: 'Freeze prevention', body: 'Use wide-mouth insulated flasks stored upside down in your pack. Water freezes from the top down — inverted storage keeps the threads clear.' },
                  { title: 'Approach trek fuel', body: 'Eat large carbohydrate-dense lodge meals: Dal Bhat, garlic pasta, porridge, potatoes. Avoid meat above Namche Bazaar or Manang — refrigeration is unreliable.' },
                  { title: 'High-camp summit day fuel', body: 'Above 5,000m switch to: energy gels for steep pitches, cyclic dextrin powder drinks, Snickers bars, peanut butter packets, marzipan, and dried fruits that do not freeze solid.' },
                ],
              },
            ],
            snacks: {
              intro: 'Base Camp meals are provided by NHA\'s cook. For Camp 1, Camp 2, and the summit push you will rely on your own high-energy snacks and the NHA high-altitude food pack (available as an additional).',
              items: [
                'Energy gels and liquid calories',
                'Cyclic dextrin powder drink mix',
                'Dark chocolate (70%+)',
                'Peanut butter sachets',
                'Marzipan (does not freeze)',
                'Freeze-dried meals (high camps)',
                'Electrolyte tablets',
                'Mixed nuts and seeds',
              ],
            },
          },
        },
      },
    ],
  },

};