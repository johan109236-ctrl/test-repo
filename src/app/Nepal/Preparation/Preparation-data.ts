

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


  'GKLMTUA': {
    title: 'Nepal Himal Adventures',
    subtitle: 'Everest region — client preparation guide',
    stats: [
      { label: 'Highest point',      value: '5,545m'  },
      { label: 'Longest program',    value: '24 days' },
      { label: 'Total distance',     value: '~160km'  },
      { label: 'Best seasons',       value: 'Mar / Oct' },
    ],
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        content: {
          cards: [
            { icon: '✈️', title: 'Lukla flight both ways', body: '35-min scenic mountain flight from Kathmandu. Alternative: drive to Ramechhap for 20-min flight when Kathmandu is congested.' },
            { icon: '🏕', title: 'Teahouse accommodation throughout', body: 'Full-board meals included at every guesthouse. No camping required on standard Everest region treks.' },
            { icon: '🔄', title: 'Mandatory acclimatization days', body: 'Namche Bazaar (day 2 above 3,000m) and Dingboche. These rest days are non-negotiable — they determine your summit success.' },
            { icon: '🏔', title: 'Kala Patthar sunrise (5,545m)', body: 'Pre-dawn summit hike for the definitive close-up view of Everest\'s summit ridge and the Khumbu Icefall.' },
            { icon: '🔵', title: 'Gokyo Lakes option', body: 'Turquoise glacial lakes at 4,800m with views of four 8,000m peaks from Gokyo Ri — the finest panorama in the Khumbu.' },
            { icon: '⛰', title: 'Three high passes (optional)', body: 'Renjo La (5,360m), Cho La (5,420m), Kongma La (5,535m) — the ultimate Khumbu circuit for fit and experienced trekkers.' },
          ],
          checklist: [
            {
              category: 'Client preparation checklist',
              items: [
                'Medical check-up with GP | At least 8 weeks before departure',
                'Begin training program | See training tab — beginner or fit track',
                'Obtain travel insurance | Must cover helicopter evacuation up to 6,000m',
                'Vaccinations & medications | Typhoid, Hep A/B, Diamox prescription',
                'Trekking boots broken in | Minimum 6 full-day hikes before arrival',
                'Gear acquisition complete | At least 4 weeks before departure',
                'Nepal visa (available on arrival) | Bring passport photos and cash (USD)',
                'Sagarmatha National Park permit | Arranged through NHA',
              ],
            },
          ],
          risks: [
            { icon: '🏔', title: 'Acute Mountain Sickness', description: 'Most common reason to turn back. Never ascend with symptoms — headache, nausea, or dizziness mean you stay or descend.' },
            { icon: '🫁', title: 'HAPE / HACE', description: 'Above 5,000m on passes or Kala Patthar these become real threats. Know the symptoms: wet cough, loss of coordination, confusion.' },
            { icon: '🦵', title: 'Knee stress on descent', description: 'Dropping from Kala Patthar or Cho La places extreme eccentric load on quads. Dual trekking poles reduce joint impact by 25%.' },
            { icon: '👁', title: 'Snow blindness', description: 'Glaciers and snow reflect up to 80% of UV. Category 4 polarized glasses required above Namche Bazaar.' },
            { icon: '🌊', title: 'Thromboembolism', description: 'Cold air numbs thirst. Dehydration thickens blood and raises DVT risk. Force 4 litres daily even with zero thirst.' },
            { icon: '🤢', title: 'Gastrointestinal infection', description: 'One sip of untreated water ends your trek within 24 hours. Treat all water above Base Camp without exception.' },
          ],
        },
      },
      {
        id: 'training',
        label: 'Training plan',
        content: {
          training_plan: [
            {
              phase: 'COMPLETE BEGINNER PROGRAM — WEEKS 1–4 · INCLINE FOUNDATION',
              title: 'Joint realignment & aerobic base',
              description: 'For individuals with no multi-day alpine experience. Priority: prepare joints, tendons, and cardiovascular system for continuous daily climbing. No flat-ground training.',
              days: [
                { label: 'Mon', activity: '30–45 min brisk walk on treadmill at 4–6% incline — conversational pace' },
                { label: 'Tue', activity: 'Bodyweight deep squats 3×10, floor glute bridges 3×12, standing calf raises 3×20, forearm plank 3×30–45 sec' },
                { label: 'Wed', activity: '30–45 min incline walk' },
                { label: 'Thu', activity: 'Strength session — same as Tuesday' },
                { label: 'Fri', activity: 'Rest' },
                { label: 'Sat', activity: '90 min outdoor walk on uneven trail wearing daypack with 4 kg — rhythmic belly breathing (inhale 2 steps, exhale 2 steps)' },
                { label: 'Sun', activity: 'Full rest' },
              ],
            },
            {
              phase: 'COMPLETE BEGINNER PROGRAM — WEEKS 5–8 · STRUCTURAL LOADING',
              title: 'Stone step simulation',
              description: 'Builds specific conditioning for the endless stone steps of Namche Bazaar, Manang, and the Langtang valley rim.',
              days: [
                { label: 'Mon', activity: '40 min stairmaster at slow, deliberate Himalayan pace' },
                { label: 'Tue', activity: 'Alternating forward lunges 3×10 per leg, step-ups 6–8" 3×15 per leg, side planks 3×20 sec per side, hip abductions 3×15 per side' },
                { label: 'Wed', activity: '40 min stairmaster session' },
                { label: 'Thu', activity: 'Strength repeat' },
                { label: 'Fri', activity: 'Rest' },
                { label: 'Sat', activity: '90 min outdoor trail wearing daypack with 4 kg' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'COMPLETE BEGINNER PROGRAM — WEEKS 9–12 · PEAK ENDURANCE',
              title: 'Boot breaking & full endurance',
              description: 'Peak conditioning phase. Must wear actual trekking boots for all outdoor sessions.',
              days: [
                { label: 'Mon', activity: '50 min incline treadmill (8–10%) wearing 6 kg pack' },
                { label: 'Tue', activity: 'Circuit ×3: 12 squats → 10 lunges per leg → 15 step-ups per leg → 20 calf raises → 45 sec plank', note: 'Zero rest between movements' },
                { label: 'Wed', activity: '60 min fast-paced hill walk' },
                { label: 'Thu', activity: 'Circuit repeat' },
                { label: 'Fri', activity: 'Active recovery' },
                { label: 'Sat', activity: '3 hrs continuous mountain walking on steep trails with full 7 kg daypack in actual trekking boots' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'ACTIVE / FIT PROGRAM — WEEKS 1–4 · UNILATERAL STABILITY',
              title: 'Convert fitness to mountain legs',
              description: 'For regular gym-goers or runners. Active individuals often have great general fitness but lack specific joint conditioning for thousands of uneven steps and downhill braking.',
              days: [
                { label: 'Mon', activity: '45 min Zone 2 run or row' },
                { label: 'Tue', activity: 'Dumbbell goblet squats 3×12, weighted walking lunges 3×12 per leg, Romanian deadlifts 3×10, weighted calf raises 3×15, three-way plank 3×45 sec' },
                { label: 'Wed', activity: '60 min incline treadmill walk (10%) with 6 kg pack' },
                { label: 'Thu', activity: 'Strength repeat' },
                { label: 'Fri', activity: 'Active recovery' },
                { label: 'Sat', activity: '3–4 hr outdoor trail hike with 8–10 kg pack' },
                { label: 'Sun', activity: 'Rest or easy walk' },
              ],
            },
            {
              phase: 'ACTIVE / FIT PROGRAM — WEEKS 5–8 · ECCENTRIC OVERLOAD',
              title: 'Protect the knees on descent',
              description: 'The focus shifts to eccentric quad strength — the braking action that protects knees during massive stone-stair descents from Thorong La or Kala Patthar.',
              days: [
                { label: 'Mon', activity: '45 min HIIT stairmaster session (2 min fast, 2 min recovery)' },
                { label: 'Tue', activity: 'Weighted step-ups 12–14" box 3×12 per leg with 3 sec lowering, jump squats 3×12, single-leg Romanian deadlifts 3×8 per leg' },
                { label: 'Wed', activity: '60 min weighted outdoor trail rucking' },
                { label: 'Thu', activity: 'Strength repeat' },
                { label: 'Fri', activity: 'Active recovery' },
                { label: 'Sat', activity: '4–5 hr technical trail hike with 10 kg pack' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'ACTIVE / FIT PROGRAM — WEEKS 9–12 · PEAK TACTICAL SIMULATION',
              title: 'Back-to-back block',
              description: 'Conditions your central nervous system to push through deep cumulative fatigue — the exact condition you will face on pass-crossing days.',
              days: [
                { label: 'Mon', activity: '60 min incline treadmill with 10–12 kg pack' },
                { label: 'Tue', activity: 'Strength session — maintain full load' },
                { label: 'Wed', activity: '60 min step climbing session' },
                { label: 'Thu', activity: 'Strength — maintain full load' },
                { label: 'Fri', activity: 'Active recovery' },
                { label: 'Sat', activity: 'Day 1: 5 hr steep mountain trail with full pack weight' },
                { label: 'Sun', activity: 'Day 2: 3 hr trail climb next morning — same pack weight', note: 'Back-to-back block directly conditions body to function on pre-fatigued muscles' },
              ],
            },
            {
              phase: 'TAPER — WEEK 12',
              title: 'Sharpen and rest',
              description: 'Cut total workout volume by 50%. Prioritise sleep (8hrs+), nutrition, and final gear preparation.',
              days: [
                { label: 'Mon–Fri', activity: '2 short sessions only — 50% of normal sets and reps' },
                { label: 'Final days', activity: 'Easy 30 min walks only, gear shakedown, no alcohol, sleep 8hrs+' },
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
                category: 'FOOTWEAR & LOWER BODY',
                items: [
                  { name: 'Waterproof trekking boots (mid to high-top, broken in)', note: 'Must be broken in — minimum 6 full-day hikes before departure', badge: 'bring your own' },
                  { name: 'Trekking poles (×2, collapsible)', badge: 'bring your own' },
                  { name: 'Thermal socks (×4 pairs merino wool)', badge: 'bring your own' },
                  { name: 'Microspikes or light crampons', note: 'Required for Cho La and Kongma La pass crossings on the Three Passes route', badge: 'additional cost' },
                ],
              },
              {
                category: 'CLOTHING LAYERS',
                items: [
                  { name: 'Down jacket (rated −15°C or below)', note: 'NHA provides a high-quality down jacket for the trek', badge: 'provided by NHA' },
                  { name: 'Sleeping bag (rated −20°C)', note: 'NHA provides trekking sleeping bag — returned after trip', badge: 'provided by NHA' },
                  { name: 'Waterproof hardshell jacket and pants', badge: 'bring your own' },
                  { name: 'Mid layer fleece (×2)', badge: 'bring your own' },
                  { name: 'Merino wool base layers (×3)', badge: 'bring your own' },
                  { name: 'Warm trekking gloves + liner gloves', badge: 'bring your own' },
                  { name: 'Warm beanie', note: 'NHA beanie provided on arrival', badge: 'provided by NHA' },
                  { name: 'Neck gaiter / Buff', note: 'NHA Buff provided on arrival', badge: 'provided by NHA' },
                  { name: 'Trekking pants (×2), hiking shirts (×3–4)', badge: 'bring your own' },
                ],
              },
              {
                category: 'PACK & ESSENTIALS',
                items: [
                  { name: 'NHA duffel bag (porter bag)', note: 'Provided by NHA in your welcome kit', badge: 'provided by NHA' },
                  { name: 'Daypack (25–30L)', badge: 'bring your own' },
                  { name: 'Headtorch + spare batteries', badge: 'bring your own' },
                  { name: 'UV400 polarized sunglasses', badge: 'bring your own' },
                  { name: 'Insulated water bottle (1L ×2) + water purification tabs', badge: 'bring your own' },
                  { name: 'SPF 50+ sunscreen and high-altitude lip balm', badge: 'bring your own' },
                  { name: 'Power bank (20,000mAh+)', badge: 'bring your own' },
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
                icon: '🍚',
                heading: 'High-altitude nutrition strategy',
                items: [
                  { title: 'Carbohydrates are the primary fuel', body: 'At altitude your body burns carbs far more efficiently than fats. Eat large portions of lodge food: Dal Bhat, rice, potatoes, garlic pasta, and porridge at every meal.' },
                  { title: 'Protein 1.4–2.0g per kg bodyweight', body: 'Eat fresh eggs, lentil stews, or protein bars at every stop to prevent muscle wasting over consecutive heavy trekking days.' },
                  { title: 'Micro-snacking every 60 minutes', body: 'Altitude suppresses hunger hormones. Force small, calorie-dense snacks (nuts, peanut butter, chocolate, dried fruit) on the trail even when appetite is low.' },
                  { title: 'Pre-trek protein foundation', body: 'During training months: 1.2–2.0g protein per kg bodyweight daily. Hydration baseline: 30–35ml water per kg bodyweight daily.' },
                  { title: 'No meat above Namche Bazaar', body: 'Avoid meat products at high altitude lodges — refrigeration above 3,440m is unreliable and food poisoning at altitude is a trek-ending emergency.' },
                ],
              },
              {
                icon: '💧',
                heading: 'Hydration at altitude',
                items: [
                  { title: '4–5 litres daily', body: 'Cool mountain air suppresses thirst sensation while you are losing massive fluid through rapid high-altitude breathing. Force fluids constantly.' },
                  { title: 'Electrolytes every day', body: 'Add one oral rehydration salt packet or electrolyte tablet to at least 1.5 litres of your daily water. Plain water alone dilutes blood sodium.' },
                  { title: 'Always treat water sources', body: 'Use chlorine dioxide tablets, a UV purifier, or rely strictly on rolling-boiled water from the lodge kitchen. Never drink untreated alpine water.' },
                  { title: 'Warm drinks at altitude', body: 'Hot ginger tea, garlic soup, and black tea all count toward your fluid target and are widely available at every lodge.' },
                  { title: 'The dehydration warning sign', body: 'If your urine is dark yellow or amber, you are already dehydrated. Target pale straw colour at all times.' },
                ],
              },
            ],
            snacks: {
              intro: 'Lodge meals are included throughout. For long days between lodges and pre-dawn starts on pass days or Kala Patthar, carry your own trail snacks.',
              items: [
                'Energy gels and chews',
                'Dark chocolate (70%+)',
                'Peanut butter sachets',
                'Mixed nuts and seeds',
                'Dried mango and fruit mix',
                'Electrolyte tablets',
                'Protein bars from home',
                'Honey sachets',
              ],
            },
          },
        },
      },
    ],
  },


  // ════════════════════════════════════════════════════════════════════════
  // GUIDE 3 — HIGH PASS TREKS
  // Everest Three Passes, Gokyo→EBC, Gokyo + Renjo La,
  // Annapurna Circuit + Tilicho Lake, Nar Phu + Annapurna Circuit
  // ════════════════════════════════════════════════════════════════════════
  'high-pass-treks': {
    title: 'Nepal Himal Adventures',
    subtitle: 'High pass treks — client preparation guide',
    stats: [
      { label: 'Highest pass',       value: '5,535m'  },
      { label: 'Longest program',    value: '24 days' },
      { label: 'Passes crossed',     value: 'Up to 3'  },
      { label: 'Best seasons',       value: 'Mar / Oct' },
    ],
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        content: {
          cards: [
            { icon: '⛰', title: 'Multiple 5,000m+ passes', body: 'These routes cross between one and three passes above 5,000m — Renjo La, Cho La, Kongma La, Thorong La, and Kang La — each requiring an early pre-dawn start.' },
            { icon: '🧊', title: 'Glacier travel sections', body: 'Crossing the Ngozumpa and Khumbu glaciers involves navigating shifting boulders and hidden ice. High-top boots and trekking poles are non-negotiable.' },
            { icon: '🏕', title: 'Teahouse throughout', body: 'Full-board lodge accommodation on all routes. Remote sections like Nar Valley have basic but functional teahouses.' },
            { icon: '🔄', title: 'Mandatory rest days', body: 'At least two dedicated acclimatization days are built into every itinerary — skipping them dramatically increases your HACE and HAPE risk.' },
            { icon: '🌡', title: 'Violent microclimate changes', body: 'High passes can shift from clear skies to blizzard conditions in under 15 minutes. A fully waterproof windproof hardshell must be at the top of your pack at all times.' },
            { icon: '🗺', title: 'Restricted area permits', body: 'The Nar Phu Valley requires a Special Restricted Area Permit alongside ACAP and TIMS. NHA handles all permit logistics.' },
          ],
          checklist: [
            {
              category: 'Client preparation checklist',
              items: [
                'Medical check-up with GP | At least 8 weeks before departure',
                'Begin training program | Beginner or active track — see training tab',
                'Obtain travel insurance | Must cover helicopter evacuation up to 6,000m',
                'Vaccinations complete | Typhoid, Hep A/B, Tetanus',
                'Diamox prescription | Discuss with GP for high pass crossings above 5,000m',
                'High-top trekking boots broken in | Minimum 6 full-day hikes before arrival',
                'Microspikes or light crampons | Required for icy pass approaches — available via NHA rental',
                'Nepal visa on arrival | Passport photos and USD cash',
              ],
            },
          ],
          risks: [
            { icon: '🏔', title: 'AMS / HAPE / HACE', description: 'These routes consistently cross 5,000m+ — Renjo La, Cho La, Kongma La, Thorong La, Kang La. Never ascend with symptoms. Immediate descent is the only option.' },
            { icon: '🦶', title: 'Ankle inversion on moraine', description: 'Crossing the Ngozumpa Glacier involves walking over shifting boulders. When ankle stabilizers tire, a misstep can snap ligaments far from a hospital.' },
            { icon: '🥶', title: 'Hypothermia on passes', description: 'Sweaty base layers plus sudden wind at 5,400m cause rapid core cooling. High-wicking synthetics plus a down jacket at the pack top are mandatory.' },
            { icon: '👁', title: 'Snow blindness', description: 'At 5,000m+ snow reflects up to 80% UV. Category 3 or 4 polarized wrap-around sunglasses required across all glacier and pass sections.' },
            { icon: '🦠', title: 'GI infection', description: 'Vomiting or diarrhea combined with extreme altitude hypoxia causes life-threatening dehydration in under 12 hours. Treat all water without exception.' },
            { icon: '💉', title: 'DVT / thromboembolism', description: 'Cold numbs thirst. Dehydration thickens blood, slows circulation, raises blood clot risk. Force 4.5 litres daily even with zero sensation of thirst.' },
          ],
        },
      },
      {
        id: 'training',
        label: 'Training plan',
        content: {
          training_plan: [
            {
              phase: 'BEGINNER PROGRAM — WEEKS 1–4 · STRUCTURAL INCLINE',
              title: 'Ankle stabilization & aerobic base',
              description: 'For individuals transitioning to technical high-pass trekking with baseline fitness but no prior high-altitude pass experience. Priority: tendons, ligaments, and deep core for heavy load on uneven shifting surfaces.',
              days: [
                { label: 'Mon', activity: '40 min walk on treadmill at 6–8% incline — steady rhythmic breathing' },
                { label: 'Tue', activity: 'Bodyweight deep squats 3×12, single-leg balance on pillow 45 sec per side, floor glute bridges 3×15, forearm plank 3×45 sec', note: 'Balance drill mimics micro-stabilizers needed for loose moraine' },
                { label: 'Wed', activity: '40 min incline walk' },
                { label: 'Thu', activity: 'Strength session repeat' },
                { label: 'Fri', activity: 'Rest' },
                { label: 'Sat', activity: '2 hr trail hike wearing daypack with 5 kg' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'BEGINNER PROGRAM — WEEKS 5–8 · LOADED STEP-UPS & LATERAL STRENGTH',
              title: 'Relentless alpine pass stepping',
              description: 'Builds the structural tolerance needed for Cho La, Kang La, and the stone staircases of the upper Khumbu.',
              days: [
                { label: 'Mon', activity: '45 min stairmaster at slow deliberate Himalayan pace' },
                { label: 'Tue', activity: 'Step-ups 8–10" 3×15 per leg, side lunges 3×10 per side, calf raises (edge of step) 3×20, side planks 3×30 sec per side' },
                { label: 'Wed', activity: '45 min stairmaster' },
                { label: 'Thu', activity: 'Strength repeat' },
                { label: 'Fri', activity: 'Rest' },
                { label: 'Sat', activity: '2 hr outdoor trail with 5 kg pack' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'BEGINNER PROGRAM — WEEKS 9–12 · PEAK PASS VOLUME',
              title: 'Full circuit simulation',
              description: 'Builds the muscular endurance needed to push through burning fatigue while climbing a pass rim with a loaded pack.',
              days: [
                { label: 'Mon', activity: '60 min incline treadmill (10–12%) with 7 kg pack' },
                { label: 'Tue', activity: 'Circuit ×3: 15 squats → 12 reverse lunges → 20 step-ups per leg → 25 calf raises → 60 sec plank', note: 'Zero rest between movements' },
                { label: 'Wed', activity: '60 min fast-paced power walk over hilly terrain' },
                { label: 'Thu', activity: 'Circuit repeat' },
                { label: 'Fri', activity: 'Active recovery' },
                { label: 'Sat', activity: '3–4 hr continuous hiking on steep trails with 7–8 kg pack' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'ACTIVE PROGRAM — WEEKS 1–4 · UNILATERAL LOADING',
              title: 'Anaerobic threshold & single-leg stability',
              description: 'For regular gym-goers or runners. Converts linear fitness into single-leg stability and high-capacity blood-oxygen efficiency for long days in the hypoxia zone.',
              days: [
                { label: 'Mon', activity: '50 min Zone 2 run or row (conversational pace)' },
                { label: 'Tue', activity: 'Heavy goblet squats 3×10, weighted walking lunges 3×12 per leg, Romanian deadlifts 3×10, deficit calf raises 3×15, hanging knee raises 3×12' },
                { label: 'Wed', activity: '60 min incline treadmill (10–12%) with 7 kg pack' },
                { label: 'Thu', activity: 'Strength repeat' },
                { label: 'Fri', activity: 'Active recovery' },
                { label: 'Sat', activity: '4–5 hr technical trail hike with 10 kg pack' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'ACTIVE PROGRAM — WEEKS 5–8 · ECCENTRIC DECELERATION',
              title: 'Descending thousands of metres safely',
              description: 'Mimics the structural demand of descending steep scree, boulder fields, and ice slopes after a pass crossing.',
              days: [
                { label: 'Mon', activity: '50 min HIIT stairmaster (3 min high effort, 2 min recovery)' },
                { label: 'Tue', activity: 'Weighted step-ups 14–16" box 3×12 per leg at 3–4 sec lowering tempo, single-leg RDLs 3×8, skater hops 3×12 total', note: 'Strict lowering tempo builds eccentric braking power for pass descents' },
                { label: 'Wed', activity: '60 min weighted outdoor rucking' },
                { label: 'Thu', activity: 'Strength repeat' },
                { label: 'Fri', activity: 'Active recovery' },
                { label: 'Sat', activity: '4–5 hr technical trail with significant elevation changes, 10 kg pack' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'ACTIVE PROGRAM — WEEKS 9–12 · BACK-TO-BACK SHOCK BLOCK',
              title: 'Central nervous system conditioning',
              description: 'Conditions your CNS to push through deep cumulative fatigue — directly mirroring what you will experience crossing consecutive passes on the same trip.',
              days: [
                { label: 'Mon', activity: '60–75 min simulated step climb with 12–14 kg training weight', note: 'Conditioning your frame for heavy layers, water volume, and technical gear' },
                { label: 'Tue', activity: 'Maintain full strength load' },
                { label: 'Wed', activity: '60 min step climbing session' },
                { label: 'Thu', activity: 'Maintain full strength load. Cut 50% in Week 11' },
                { label: 'Sat', activity: 'Day 1: 5–6 hrs technical trail walking with full pack' },
                { label: 'Sun', activity: 'Day 2: 3–4 hrs steep climbing next morning — same pack weight', note: 'Back-to-back shock block' },
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
                category: 'FOOTWEAR & TRACTION',
                items: [
                  { name: 'Waterproof high-top trekking boots (broken in)', note: 'High ankle support is mandatory for glacier moraine and pass approaches', badge: 'bring your own' },
                  { name: 'Microspikes or light trail crampons', note: 'Required for icy sections on Cho La, Kongma La, and Thorong La', badge: 'additional cost' },
                  { name: 'Dual trekking poles (collapsible)', badge: 'bring your own' },
                  { name: 'Merino wool trekking socks (×4 pairs)', badge: 'bring your own' },
                ],
              },
              {
                category: 'CLOTHING — PASS CONDITIONS',
                items: [
                  { name: 'Down jacket (rated −15°C or below)', note: 'NHA provides a high-quality down jacket', badge: 'provided by NHA' },
                  { name: 'Sleeping bag (rated −20°C)', note: 'NHA provides — returned after trip', badge: 'provided by NHA' },
                  { name: 'Fully waterproof windproof hardshell jacket and pants', note: 'Must be instantly accessible at the top of your pack on all pass days', badge: 'bring your own' },
                  { name: 'High-wicking synthetic base layers (×3)', note: 'Synthetic — not cotton — dries quickly when soaked with sweat before a pass', badge: 'bring your own' },
                  { name: 'Mid layer fleece (×2)', badge: 'bring your own' },
                  { name: 'Warm gloves + liner gloves', badge: 'bring your own' },
                  { name: 'Warm beanie', note: 'NHA beanie provided', badge: 'provided by NHA' },
                  { name: 'Neck gaiter / Buff', note: 'NHA Buff provided', badge: 'provided by NHA' },
                ],
              },
              {
                category: 'PACK & SAFETY',
                items: [
                  { name: 'NHA duffel bag (porter bag)', note: 'In your NHA welcome kit', badge: 'provided by NHA' },
                  { name: 'Daypack with rain cover (25–30L)', badge: 'bring your own' },
                  { name: 'Headtorch + spare batteries', badge: 'bring your own' },
                  { name: 'Category 3–4 polarized wrap-around sunglasses', badge: 'bring your own' },
                  { name: 'Insulated water bottle (1L ×2) + purification tablets', badge: 'bring your own' },
                  { name: 'Electrolyte tablets or oral rehydration sachets', badge: 'bring your own' },
                  { name: 'Personal medical kit: loperamide, rehydration salts, azithromycin, ibuprofen', badge: 'bring your own' },
                  { name: 'SPF 50+ sunscreen and lip balm', badge: 'bring your own' },
                  { name: 'NHA trekking map and trip certificate', note: 'In your NHA welcome kit', badge: 'provided by NHA' },
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
                icon: '🍚',
                heading: 'On-trail high altitude protocol',
                items: [
                  { title: 'Carbohydrates — the essential oxygen saver', body: 'Above 3,000m your body needs less oxygen to burn carbs than fats or protein. Do not restrict carbs. Eat Dal Bhat, potatoes, garlic pasta, Sherpa stews, and porridge at every lodge meal.' },
                  { title: 'Protein preservation', body: 'Eat fresh eggs, chickpea/lentil dishes, yak cheese, or protein bars packed from home at every stop to prevent muscle wasting on multi-week circuits.' },
                  { title: 'Micro-snacking every 45–60 minutes', body: 'Severe elevation disrupts hunger hormones. You cannot rely on natural appetite signals. Force yourself to eat small high-calorie snacks every 45–60 minutes of movement.' },
                  { title: 'Pre-trek preparation', body: 'Protein: 1.6–2.2g per kg bodyweight daily. Increase carb intake by 25% the 24 hours before long weekend simulation hikes. Hydration baseline: 35ml water per kg bodyweight.' },
                  { title: 'Glycogen management', body: 'Complex carbohydrates before big days: oats, brown rice, sweet potatoes, quinoa. Increase carb intake the night before and morning of all long weekend simulation hikes.' },
                ],
              },
              {
                icon: '💧',
                heading: 'Extreme alpine hydration',
                items: [
                  { title: '4.5–5.5 litres daily', body: 'Above 4,500m your lungs work twice as fast, causing massive water loss through respiration. Combine clean water, hot lemon water, garlic soup, and herbal teas.' },
                  { title: 'Electrolyte saturation', body: 'Plain water alone dilutes blood sodium (hyponatremia) during intense UV sun exposure. Ensure at least 2 litres daily contains oral rehydration salts or electrolyte tablets.' },
                  { title: 'Multi-stage water treatment', body: 'Use a hollow-fiber filter followed by chlorine dioxide tablets, or rely on rolling-boiled water from teahouses. Never drink unpurified glacial melt or stream water.' },
                  { title: 'Warm drinks at camp', body: 'Hot ginger tea and garlic soup are locally available and excellent for circulation at altitude. They count fully toward your daily fluid target.' },
                  { title: 'Thermal swing awareness', body: 'After a major climb you may be drenched in sweat. Change into dry base layers immediately at camp to prevent rapid core cooling before a pass crossing day.' },
                ],
              },
            ],
            snacks: {
              intro: 'Teahouse meals are included throughout. For pre-dawn pass starts and long summit days between lodges, carry your own trail snacks.',
              items: [
                'Energy gels and chews',
                'Dark chocolate (70%+)',
                'Peanut butter sachets',
                'Mixed nuts and seeds',
                'Nut butter packets',
                'Dried fruit mix',
                'Electrolyte tablets',
                'Protein bars from home',
              ],
            },
          },
        },
      },
    ],
  },


  // ════════════════════════════════════════════════════════════════════════
  // GUIDE 4 — REMOTE & RESTRICTED
  // Kanchenjunga, Manaslu Circuit, Manaslu + Tsum, Upper Dolpo,
  // Dhaulagiri Circuit, Langtang + Ganja La Pass
  // ════════════════════════════════════════════════════════════════════════
  'remote-restricted': {
    title: 'Nepal Himal Adventures',
    subtitle: 'Remote & restricted treks — preparation guide',
    stats: [
      { label: 'Highest pass',       value: '5,360m'  },
      { label: 'Longest program',    value: '26 days' },
      { label: 'Min. group size',    value: '2 people' },
      { label: 'Best seasons',       value: 'Mar / Oct' },
    ],
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        content: {
          cards: [
            { icon: '🚫', title: 'Restricted area permits required', body: 'All routes require a Special Restricted Area Permit (RAP). Solo trekking is legally prohibited. A licensed government guide must accompany the group at all times.' },
            { icon: '🏕', title: 'Camping on several routes', body: 'Dhaulagiri, Upper Dolpo, and high sections of Kanchenjunga use fully supported tented camps. NHA provides kitchen crew, cook, and all camping equipment.' },
            { icon: '🚁', title: 'Delayed helicopter evacuation', body: 'Unlike EBC or Annapurna, helicopter rescue in Upper Dolpo and Kanchenjunga can be delayed for days by weather. AMS must be caught at the earliest possible stage.' },
            { icon: '🧊', title: 'Glacier travel on Dhaulagiri', body: 'The Dhaulagiri Circuit crosses the Chonbardan Glacier and involves sleeping on moraines at -15°C to -30°C. Expedition-grade sleeping bag and complete dry-layer protocol are mandatory.' },
            { icon: '🗺', title: 'Extreme route isolation', body: 'No pharmacies or clinics exist on these routes. A comprehensive personal medical kit including loperamide, rehydration salts, and azithromycin is a non-negotiable requirement.' },
            { icon: '🦵', title: 'Ankle stability is critical', body: 'The Ganja La Pass cliff section and moraine travel on the Dhaulagiri and Kanchenjunga routes are extremely technical. Rigid high-top boots and dual poles are required.' },
          ],
          checklist: [
            {
              category: 'Pre-departure checklist',
              items: [
                'Full medical check-up | At least 8 weeks before departure',
                'Restricted area permit confirmed | Arranged exclusively through NHA',
                'Travel insurance | Must cover helicopter evacuation up to 6,000m in extremely remote zones',
                'Vaccinations complete | Typhoid, Hep A/B, Tetanus, rabies recommended for Kanchenjunga',
                'Diamox prescription | Essential for Ganja La, Larkya La, French Pass, and Kang La approaches',
                'Personal medical kit packed | Loperamide, azithromycin, ORS, ibuprofen, bandages, Compeed',
                'High-top rigid trekking boots broken in | Minimum 8 full-day hikes including off-trail terrain',
                'Expedition sleeping bag rated −20°C or lower | Critical for camping routes',
              ],
            },
          ],
          risks: [
            { icon: '🏔', title: 'AMS / HAPE / HACE', description: 'On remote camping routes you cannot wait for rescue. AMS must be caught immediately. Descend on foot at the first sign of progression.' },
            { icon: '🦶', title: 'Ankle inversion on moraine', description: 'Technical glacier and moraine travel on Dhaulagiri and Kanchenjunga. A ligament snap is weeks away from a hospital. Rigid ankle support is non-negotiable.' },
            { icon: '🥶', title: 'Tent hypothermia', description: 'Arriving at a frozen camp with sweat-soaked base layers causes rapid core cooling. Change into completely dry synthetics immediately upon reaching camp — every single time.' },
            { icon: '👁', title: 'Snow blindness at high passes', description: 'Larkya La (5,106m), French Pass (5,360m), Ganja La (5,122m). Category 3–4 polarized wrap-around sunglasses. Do not leave camp without them.' },
            { icon: '🦠', title: 'GI infection — critical emergency', description: 'Vomiting or diarrhea in an isolated wilderness zone causes life-threatening dehydration in under 12 hours. Multi-stage water purification is mandatory. Sanitize hands before every meal.' },
            { icon: '😴', title: 'Camp appetite fatigue', description: 'On 25-day camping routes meals can become monotonous. Altitude suppresses appetite further. Pack high-flavor, calorie-dense personal items from home to force eating.' },
          ],
        },
      },
      {
        id: 'training',
        label: 'Training plan',
        content: {
          training_plan: [
            {
              phase: 'BEGINNER PROGRAM — WEEKS 1–4 · DEEP INCLINE LOADING',
              title: 'Postural stability & connective tissue',
              description: 'For individuals with solid baseline fitness transitioning to multi-week isolated wilderness camping and high-pass crossings. 6–8% incline exclusively. No flat-ground training.',
              days: [
                { label: 'Mon', activity: '45 min treadmill at 6–8% incline — steady nasal-breathing pace' },
                { label: 'Tue', activity: 'Bodyweight deep squats 3×12 (hold 2 sec at bottom), floor glute bridges 3×15, standing calf raises 3×20 full extension, forearm plank 3×45 sec' },
                { label: 'Wed', activity: '45 min incline walk' },
                { label: 'Thu', activity: 'Strength repeat' },
                { label: 'Fri', activity: 'Rest' },
                { label: 'Sat', activity: '2 hr outdoor trail walk with daypack loaded with 5–6 kg' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'BEGINNER PROGRAM — WEEKS 5–8 · WEIGHTED STEPPING & MULTI-DIRECTIONAL BALANCE',
              title: 'Wild riverbanks, moraines, glacier margins',
              description: 'Transitions your body to handle the unpredictable, uneven steps found on wild terrain unique to remote wilderness routes.',
              days: [
                { label: 'Mon', activity: '45 min stairmaster at slow relentless Himalayan pace' },
                { label: 'Tue', activity: 'Step-ups 8–10" 3×15 per leg, forward lunges 3×10 per leg, lateral lunges 3×12 per side, calf raises 3×20, side planks 3×30 sec' },
                { label: 'Wed', activity: '45 min stairmaster' },
                { label: 'Thu', activity: 'Strength repeat' },
                { label: 'Fri', activity: 'Rest' },
                { label: 'Sat', activity: '2 hr outdoor trail with 5–6 kg pack on off-trail or rough terrain' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'BEGINNER PROGRAM — WEEKS 9–12 · PEAK WILDERNESS VOLUME',
              title: 'Multi-week cumulative fatigue',
              description: 'Builds the muscular endurance required to perform under severe cumulative fatigue across 20+ consecutive trekking days.',
              days: [
                { label: 'Mon', activity: '60 min incline treadmill (8–10%) with 8 kg pack' },
                { label: 'Tue', activity: 'Circuit ×3: 15 deep squats → 12 forward lunges → 15 step-ups per leg → 20 calf raises → 45 sec plank', note: 'Zero rest between movements' },
                { label: 'Wed', activity: '60 min fast-paced hilly outdoor walk' },
                { label: 'Thu', activity: 'Circuit repeat' },
                { label: 'Fri', activity: 'Active recovery — mobility and stretching' },
                { label: 'Sat', activity: '3–4 hr continuous hiking on rough varied terrain with 8 kg pack' },
                { label: 'Sun', activity: 'Maintain structural loads through week 9–10. Cut 50% in week 11. Pure mobility in week 12.' },
              ],
            },
            {
              phase: 'ACTIVE PROGRAM — WEEKS 1–4 · UNILATERAL LOADING & ANAEROBIC THRESHOLD',
              title: 'Convert fitness to wilderness endurance',
              description: 'For regular gym-goers, runners, or structural lifters. Quickly converts linear fitness into single-leg stability and high-capacity blood-oxygen efficiency.',
              days: [
                { label: 'Mon', activity: '50 min Zone 2 run or row (steady conversational pace)' },
                { label: 'Tue', activity: 'Heavy goblet squats 3×10, weighted walking lunges 3×12 per leg, Romanian deadlifts 3×10, deficit calf raises 3×15, Pallof presses or hanging knee raises 3×12' },
                { label: 'Wed', activity: '60 min incline treadmill (10–12%) with 7 kg pack' },
                { label: 'Thu', activity: 'Strength repeat' },
                { label: 'Fri', activity: 'Active recovery' },
                { label: 'Sat', activity: '4–5 hr technical trail hike with 10 kg pack over variable terrain' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'ACTIVE PROGRAM — WEEKS 5–8 · ECCENTRIC DECELERATION & MULTI-DIRECTIONAL STABILITY',
              title: 'Boulder fields and steep descents',
              description: 'Mimics the extreme structural demand of descending steep scree, boulder fields, and ice slopes specific to Dhaulagiri, Kanchenjunga, and Ganja La.',
              days: [
                { label: 'Mon', activity: '50 min HIIT stairmaster (3 min high effort, 2 min recovery)' },
                { label: 'Tue', activity: 'Weighted step-ups 14–16" box 3×12 per leg at 3–4 sec lowering, single-leg RDLs 3×8, skater hops / lateral bounds 3×12', note: 'Slow lowering tempo builds eccentric braking power for steep wilderness descents' },
                { label: 'Wed', activity: '60 min weighted outdoor rucking on uneven trails' },
                { label: 'Thu', activity: 'Strength repeat' },
                { label: 'Fri', activity: 'Active recovery' },
                { label: 'Sat', activity: '4–5 hr technical trail with significant elevation changes and rough surfaces, 10 kg pack' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'ACTIVE PROGRAM — WEEKS 9–12 · BACK-TO-BACK SHOCK BLOCK',
              title: 'Simulate the wilderness long haul',
              description: 'Conditions your central nervous system for the sustained multi-week output required on routes like Upper Dolpo and Kanchenjunga. Maximum volume through week 10, then strategic taper.',
              days: [
                { label: 'Mon', activity: '60–75 min step climb with 12–14 kg training weight' },
                { label: 'Tue', activity: 'Maintain maximum structural loading' },
                { label: 'Wed', activity: '60 min step climbing or incline session' },
                { label: 'Thu', activity: 'Strength — maximum load week 9 & 10, cut 50% week 11' },
                { label: 'Sat', activity: 'Day 1: 5–6 hrs technical mountain trail with full pack' },
                { label: 'Sun', activity: 'Day 2: 3–4 hrs steep climbing next morning with same pack', note: 'Back-to-back shock block — CNS conditioning for multi-week output' },
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
                category: 'FOOTWEAR & TRACTION',
                items: [
                  { name: 'Rigid high-top waterproof trekking boots (broken in)', note: 'Mandatory ankle support for glacier moraine and cliff sections on Ganja La and Dhaulagiri', badge: 'bring your own' },
                  { name: 'Microspikes or light trail crampons', note: 'Required for Ganja La, Larkya La, French Pass, and Dhampus Pass icy approaches', badge: 'additional cost' },
                  { name: 'Dual trekking poles (collapsible)', badge: 'bring your own' },
                  { name: 'Merino wool trekking socks (×4 pairs)', badge: 'bring your own' },
                ],
              },
              {
                category: 'CLOTHING — CAMPING & EXTREME CONDITIONS',
                items: [
                  { name: 'Down jacket (rated −20°C or below)', note: 'NHA provides high-quality down jacket', badge: 'provided by NHA' },
                  { name: 'Expedition sleeping bag (rated −20°C or lower)', note: 'NHA provides expedition sleeping bag — returned after trip. Critical for camping nights at −15°C to −30°C.', badge: 'provided by NHA' },
                  { name: 'Fully waterproof windproof hardshell jacket and pants', badge: 'bring your own' },
                  { name: 'High-wicking synthetic base layers (×3)', note: 'Synthetic only — must dry quickly after sweaty pass climbs before camp arrival', badge: 'bring your own' },
                  { name: 'Mid layer fleece (×2)', badge: 'bring your own' },
                  { name: 'Warm gloves + liner gloves', badge: 'bring your own' },
                  { name: 'Warm beanie', note: 'NHA beanie provided', badge: 'provided by NHA' },
                  { name: 'Neck gaiter / Buff', note: 'NHA Buff provided', badge: 'provided by NHA' },
                ],
              },
              {
                category: 'PACK, SAFETY & MEDICAL',
                items: [
                  { name: 'NHA duffel bag (porter bag)', note: 'In your NHA welcome kit', badge: 'provided by NHA' },
                  { name: 'Trekking daypack with rain cover (30L)', badge: 'bring your own' },
                  { name: 'Headtorch (rated −20°C) + spare batteries', badge: 'bring your own' },
                  { name: 'Category 3–4 polarized wrap-around sunglasses', badge: 'bring your own' },
                  { name: 'Insulated water bottle (1L ×2)', badge: 'bring your own' },
                  { name: 'Hollow-fiber water filter + chlorine dioxide tablets', note: 'Multi-stage purification mandatory on camping routes with wilderness water sources', badge: 'bring your own' },
                  { name: 'Personal medical kit: loperamide, azithromycin, ORS, ibuprofen, Compeed, Diamox', badge: 'bring your own' },
                  { name: 'Electrolyte / high-sodium ORS tablets (×30 minimum)', badge: 'bring your own' },
                  { name: 'High-flavor personal snacks from home', note: 'To combat camp appetite fatigue on 20–26 day routes: hot sauce, premium electrolyte powders, nut packs', badge: 'bring your own' },
                  { name: 'NHA trekking map and trip certificate', note: 'In your NHA welcome kit', badge: 'provided by NHA' },
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
                icon: '🏕',
                heading: 'Wilderness expedition nutrition',
                items: [
                  { title: 'Carbohydrates — do not restrict', body: 'In low-oxygen zones your body requires less oxygen to convert carbs to energy than fats or protein. Eat massive clean portions of crew food: rice, flatbreads, oats, lentil stews, and potatoes.' },
                  { title: 'Protein preservation', body: 'Keep muscle wasting at bay during long-duration circuits by prioritizing protein sources at camp: eggs, chickpea/lentil dishes, beans, supplemented by your own packed protein bars.' },
                  { title: 'Combat camp appetite fatigue', body: 'On 25-day camping treks meals can become monotonous. Pack high-flavor, nutrient-dense personal items: premium electrolyte powders, hot sauces, freeze-dried meat snacks, high-calorie nut packets.' },
                  { title: 'Pre-trek preparation', body: 'Protein: 1.6–2.2g per kg bodyweight daily. Glycogen: increase carb intake 25% the 24 hours before back-to-back weekend simulation hikes. Hydration baseline: 35–40ml per kg bodyweight.' },
                  { title: 'Dry base layer protocol at camp', body: 'After every major uphill push — especially pre-pass climbs — change into completely dry thermal layers the moment you reach camp. Wet base layers in a frozen tent cause dangerous core cooling.' },
                ],
              },
              {
                icon: '💧',
                heading: 'Extreme wilderness hydration',
                items: [
                  { title: '4.5–5.5 litres daily', body: 'The atmosphere in Upper Dolpo and on Dhaulagiri high passes is desert-dry. Your lungs work twice as fast causing massive water loss through respiration alone.' },
                  { title: 'Electrolyte saturation — 2L minimum', body: 'Plain water alone dangerously dilutes blood sodium (hyponatremia) when sweating under intense UV sun. At least 2 litres daily must contain oral rehydration salts or electrolyte tablets.' },
                  { title: 'Multi-stage water purification', body: 'On camping routes you depend on glacial streams. Use a hollow-fiber filter followed by chlorine dioxide tablets. Never drink unpurified glacial melt or stream water under any circumstances.' },
                  { title: 'Hot lemon water and garlic soup', body: 'Garlic soup is excellent for high-altitude circulation and widely available at camp kitchens. Both count toward your daily fluid target.' },
                  { title: 'Cold tent — forced hydration', body: 'Subfreezing temperatures numb thirst completely. Set a timer every 45 minutes and drink regardless of perceived thirst. Dehydration combined with hypoxia at this level is life-threatening.' },
                ],
              },
            ],
            snacks: {
              intro: 'Fully supported camp kitchen meals are provided by NHA on all camping routes. For long wilderness days between camps carry your own personal energy supply.',
              items: [
                'Energy gels and chews',
                'Freeze-dried meat snacks',
                'Peanut butter sachets',
                'Premium electrolyte powder',
                'Mixed nuts and seeds',
                'Dark chocolate (70%+)',
                'Dried fruit and mango',
                'Hot sauce packets',
              ],
            },
          },
        },
      },
    ],
  },


  // ════════════════════════════════════════════════════════════════════════
  // GUIDE 5 — VALLEY & LOWER TREKS
  // Ghorepani Poon Hill, Khopra Danda, Langtang Valley,
  // Mardi Himal, Tsum Valley, Upper Mustang, Annapurna Base Camp
  // ════════════════════════════════════════════════════════════════════════
  'valley-treks': {
    title: 'Nepal Himal Adventures',
    subtitle: 'Valley & classic treks — client preparation guide',
    stats: [
      { label: 'Highest point',      value: '4,130m'  },
      { label: 'Longest program',    value: '18 days' },
      { label: 'Total distance',     value: '~100km'  },
      { label: 'Best seasons',       value: 'Mar / Dec' },
    ],
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        content: {
          cards: [
            { icon: '🏠', title: 'Teahouse accommodation', body: 'All routes use comfortable community teahouses with full board meals. Upper Mustang has well-established guesthouses throughout the restricted zone.' },
            { icon: '🌸', title: 'Accessible for beginners', body: 'These routes are Nepal\'s most approachable multi-day treks — but they still involve significant daily elevation gain and 5–7 hours of walking on stone-stepped trails.' },
            { icon: '🏔', title: 'World-class views at lower altitude', body: 'Poon Hill (3,210m), Mardi Himal Base Camp (4,120m), and Annapurna Base Camp (4,130m) all offer front-row views of 7,000m and 8,000m peaks.' },
            { icon: '📋', title: 'Permits required', body: 'ACAP (Annapurna Conservation Area), Langtang National Park, or Upper Mustang Special Restricted Area Permit depending on route. NHA arranges all permits.' },
            { icon: '🏺', title: 'Cultural immersion', body: 'Tsum Valley and Upper Mustang offer rare access to living Tibetan Buddhist communities with centuries-old monasteries, chortens, and traditional village architecture.' },
            { icon: '🦵', title: 'Stone steps are the challenge', body: 'Routes like Poon Hill and Annapurna Base Camp are famous for thousands of stone steps — both ascending and descending. Eccentric quad strength and trekking poles are essential.' },
          ],
          checklist: [
            {
              category: 'Client preparation checklist',
              items: [
                'Medical check-up with GP | At least 6 weeks before departure',
                'Begin training program | 10–12 weeks before departure — see training tab',
                'Obtain travel insurance | Must cover helicopter evacuation up to 5,000m',
                'Vaccinations | Typhoid, Hepatitis A, Tetanus',
                'Trekking boots broken in | Minimum 4–6 full-day hikes before arrival',
                'Gear acquisition complete | At least 3 weeks before departure',
                'Nepal visa on arrival | Passport photos and USD cash',
                'ACAP or park permit | Arranged through NHA',
              ],
            },
          ],
          risks: [
            { icon: '🏔', title: 'Acute Mountain Sickness', description: 'ABC (4,130m), Khopra Ridge (3,660m), and Langtang upper valleys cross critical AMS thresholds. Watch for headaches, nausea, dizziness. Never ascend with symptoms.' },
            { icon: '🦵', title: 'Severe knee strain', description: 'Thousands of stone steps on Poon Hill and ABC descents place extreme eccentric load on knees. Without dual poles and strong quads, joint failure is common.' },
            { icon: '💧', title: 'Dehydration-induced altitude fatigue', description: 'Cool mountain air suppresses thirst. Dehydration thickens blood, mimics AMS. Force 4 litres daily even with zero sensation of thirst.' },
            { icon: '🤢', title: 'GI illness and waterborne infection', description: 'Changes in water sources cause rapid traveler\'s diarrhea. At elevation this causes lightning-fast dehydration. Treat all water. Carry ORS and loperamide.' },
            { icon: '🌡', title: 'Extreme environmental microclimates', description: 'Mardi Himal and Khopra ridges can shift from intense sun to freezing winds within minutes. A high-quality insulating layer and windproof shell must be instantly accessible in your daypack.' },
            { icon: '🩹', title: 'Blister prevention', description: 'When wearing new boots and you feel a hot spot or friction — stop immediately. Sit down and apply a blister pad or Compeed. Once a blister pops, walking becomes agonizing.' },
          ],
        },
      },
      {
        id: 'training',
        label: 'Training plan',
        content: {
          training_plan: [
            {
              phase: 'COMPLETE BEGINNER — WEEKS 1–4 · STEP FOUNDATION',
              title: 'Joint realignment & walking engine',
              description: 'For individuals with no trekking experience. Priority: joints, tendons, and lower back for continuous daily climbing. Build baseline cardiovascular efficiency at a comfortable conversational pace.',
              days: [
                { label: 'Mon', activity: '30–45 min brisk walk on treadmill at 4–6% incline — conversational pace, never gasping' },
                { label: 'Tue', activity: 'Bodyweight squats 3×10, glute bridges 3×12, calf raises 3×15, standard plank 3×30 sec' },
                { label: 'Wed', activity: '30 min incline walk' },
                { label: 'Thu', activity: 'Strength repeat' },
                { label: 'Fri', activity: 'Rest' },
                { label: 'Sat', activity: '60–90 min walk on hilly local path or park' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'COMPLETE BEGINNER — WEEKS 5–8 · STONE STEP SIMULATION',
              title: 'Pack work and stair conditioning',
              description: 'Himalayan trails are famous for continuous uneven stone steps. This phase teaches your body how to step upward while carrying weight — directly simulating Poon Hill and ABC trails.',
              days: [
                { label: 'Mon', activity: '40 min stairmaster or step-climber at slow steady rhythmic pace' },
                { label: 'Tue', activity: 'Forward lunges 3×10 per leg, step-ups 6–8" 3×12 per leg, side planks 3×20 sec, hip abductions 3×15 per side' },
                { label: 'Wed', activity: '40 min stairmaster' },
                { label: 'Thu', activity: 'Strength repeat' },
                { label: 'Fri', activity: 'Rest' },
                { label: 'Sat', activity: '60–90 min outdoor walk wearing your actual daypack with 3–5 kg' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'COMPLETE BEGINNER — WEEKS 9–12 · PEAK STAIR ENDURANCE',
              title: 'Boot breaking & full endurance circuit',
              description: 'Peak conditioning. All outdoor sessions must be done in your actual trekking boots to break them in and eliminate blister risk on the trek.',
              days: [
                { label: 'Mon', activity: '45 min stairmaster — deep, slow steps' },
                { label: 'Tue', activity: 'Circuit ×3: 12 squats → 10 lunges per leg → 15 step-ups per leg → 20 calf raises → 45 sec plank', note: 'Move immediately from one exercise to the next — builds muscular endurance' },
                { label: 'Wed', activity: '60 min fast-paced power walk on hilly terrain' },
                { label: 'Thu', activity: 'Circuit repeat' },
                { label: 'Fri', activity: 'Rest' },
                { label: 'Sat', activity: '2–3 hr outdoor trail with 5–7 kg pack — must wear trekking boots', note: 'The Bistari Bistari rule: walk so slowly it feels almost frustrating. Hold a casual conversation at all times.' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'ACTIVE PROGRAM — WEEKS 1–4 · UNILATERAL STRENGTH & AEROBIC EFFICIENCY',
              title: 'Convert fitness to trek-specific legs',
              description: 'For regular gym-goers, runners, or cyclists. Active individuals often have great general fitness but lack the specific joint conditioning needed for thousands of uneven steps and downhill braking.',
              days: [
                { label: 'Mon', activity: '45 min Zone 2 run or cycle (easy sustainable pace)' },
                { label: 'Tue', activity: 'Weighted goblet squats 3×12, walking lunges 3×15 per leg, Romanian deadlifts 3×10, weighted calf raises 3×15, plank variations 3×60 sec' },
                { label: 'Wed', activity: '60 min incline treadmill walk (8–10%) with 5 kg pack' },
                { label: 'Thu', activity: 'Strength repeat' },
                { label: 'Fri', activity: 'Active recovery' },
                { label: 'Sat', activity: '3–4 hr outdoor trail hike with 8–10 kg pack' },
                { label: 'Sun', activity: 'Rest or easy walk' },
              ],
            },
            {
              phase: 'ACTIVE PROGRAM — WEEKS 5–8 · ECCENTRIC QUAD STRENGTH',
              title: 'Protect knees on stone stair descents',
              description: 'The focus shifts to eccentric quadriceps strength — the braking action that prevents severe knee pain during massive stone-stair descents from Poon Hill or Annapurna Base Camp.',
              days: [
                { label: 'Mon', activity: '45 min HIIT stairmaster (2 min fast, 2 min recovery)' },
                { label: 'Tue', activity: 'Weighted step-ups 12–14" box 3×12 per leg with 3 sec lowering tempo, jump squats 3×12, single-leg RDLs 3×8 per leg' },
                { label: 'Wed', activity: '60 min weighted outdoor trail walk' },
                { label: 'Thu', activity: 'Strength repeat' },
                { label: 'Fri', activity: 'Active recovery' },
                { label: 'Sat', activity: '3–4 hr hike over rolling terrain with 8–10 kg pack' },
                { label: 'Sun', activity: 'Rest' },
              ],
            },
            {
              phase: 'ACTIVE PROGRAM — WEEKS 9–12 · PEAK VOLUME & TAPER',
              title: 'Back-to-back block and strategic rest',
              description: 'Maintains high volume through weeks 9–11. Week 12 cuts volume by 50% — the body must recover fully before departure.',
              days: [
                { label: 'Mon', activity: '60 min simulated step-climb or incline treadmill with 10–12 kg pack' },
                { label: 'Tue', activity: 'Strength session — maintain full load' },
                { label: 'Sat', activity: 'Day 1: 4 hr weighted hike on stairs or steep trail' },
                { label: 'Sun', activity: 'Day 2: 2 hr recovery walk next morning with same pack', note: 'Back-to-back block directly conditions body to function on fatigued legs' },
                { label: 'Wk 12', activity: 'Cut all sets and reps by 50%. Two short sessions only. Easy walks, sleep 8hrs+, no alcohol.' },
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
                category: 'FOOTWEAR & SUPPORT',
                items: [
                  { name: 'Waterproof trekking boots (mid to high-top, broken in)', note: 'Must be broken in — minimum 4–6 full-day hikes before departure. Hot spots on the trail must be treated immediately.', badge: 'bring your own' },
                  { name: 'Dual trekking poles (collapsible)', note: 'Not optional. Reduce knee impact by up to 25% on stone-stair descents.', badge: 'bring your own' },
                  { name: 'Merino wool trekking socks (×4 pairs)', badge: 'bring your own' },
                  { name: 'Blister kit: Compeed pads, sports tape, antiseptic', badge: 'bring your own' },
                ],
              },
              {
                category: 'CLOTHING LAYERS',
                items: [
                  { name: 'Down jacket (rated −10°C)', note: 'NHA provides a high-quality down jacket for the trek', badge: 'provided by NHA' },
                  { name: 'Sleeping bag (rated −15°C)', note: 'NHA provides trekking sleeping bag — returned after trip', badge: 'provided by NHA' },
                  { name: 'Lightweight waterproof jacket and pants', badge: 'bring your own' },
                  { name: 'Mid layer fleece (×1–2)', badge: 'bring your own' },
                  { name: 'Merino base layers (×2)', badge: 'bring your own' },
                  { name: 'Trekking gloves', badge: 'bring your own' },
                  { name: 'Warm beanie', note: 'NHA beanie provided', badge: 'provided by NHA' },
                  { name: 'Neck gaiter / Buff', note: 'NHA Buff provided', badge: 'provided by NHA' },
                  { name: 'Trekking pants (×2), hiking shirts (×3), socks', badge: 'bring your own' },
                ],
              },
              {
                category: 'PACK & ESSENTIALS',
                items: [
                  { name: 'NHA duffel bag (porter bag)', note: 'In your NHA welcome kit', badge: 'provided by NHA' },
                  { name: 'Daypack with rain cover (20–25L)', badge: 'bring your own' },
                  { name: 'Headtorch + spare batteries', badge: 'bring your own' },
                  { name: 'UV400 polarized sunglasses', badge: 'bring your own' },
                  { name: 'Water bottle (1L ×2) + chlorine dioxide tablets or UV purifier', badge: 'bring your own' },
                  { name: 'Electrolyte tablets or ORS sachets', badge: 'bring your own' },
                  { name: 'Personal medical kit: ORS, loperamide, ibuprofen, antihistamine, Compeed', badge: 'bring your own' },
                  { name: 'SPF 50+ sunscreen and lip balm', badge: 'bring your own' },
                  { name: 'Hand sanitizer (essential — use before every meal)', badge: 'bring your own' },
                  { name: 'NHA trekking map and trip certificate', note: 'In your NHA welcome kit', badge: 'provided by NHA' },
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
                icon: '🍚',
                heading: 'High-altitude nutrition strategy',
                items: [
                  { title: 'Carbohydrates are your best friend', body: 'Walking uphill in thin mountain air burns carbohydrates much faster than fats or protein. Enjoy local lodge food: rice, pasta, potatoes, porridge, and bread are the cleanest muscle fuels.' },
                  { title: 'Protein 1.2–2.0g per kg bodyweight', body: 'Eat clean protein sources at every stop: eggs, lentil/bean stews, cheese. Bring high-quality protein bars from home to maintain muscle tissue over consecutive trekking days.' },
                  { title: 'Pack "joy food" and fuel bars', body: 'High altitude naturally reduces appetite and can cause mild nausea. Bring familiar snacks from home — candy bars, nuts, energy bars. When a full meal looks unappealing these keep your energy from crashing.' },
                  { title: 'Pre-trek foundation', body: 'Training months: 1.2–2.0g protein per kg daily. Hydration baseline: 2.5 litres daily. Form good habits at home before you arrive on the mountain.' },
                  { title: 'The Bistari Bistari eating rule', body: 'Eat small amounts regularly throughout the day. Do not wait until you are starving. At altitude your digestive system slows — small frequent meals are better than large infrequent ones.' },
                ],
              },
              {
                icon: '💧',
                heading: 'Altitude hydration protocol',
                items: [
                  { title: 'The 4-litre daily rule', body: 'Cool mountain air suppresses your thirst sensation while you lose massive fluid through rapid breathing. Force 4 litres every single day including hot teas, garlic soups, and clean water.' },
                  { title: 'Electrolytes every day', body: 'Add one ORS packet or electrolyte tablet to at least one water bottle daily. Flushing your system with pure water alone dilutes essential sodium, compounding altitude fatigue.' },
                  { title: 'Always treat water', body: 'Use chlorine dioxide tablets, a UV purifier, or rely strictly on rolling-boiled water from the lodge kitchen. One sip of untreated water can end your trek within 24 hours.' },
                  { title: 'Watch your urine colour', body: 'Dark yellow or amber means you are already dehydrated. Target pale straw colour at all times. Drink before you feel thirsty.' },
                  { title: 'Hot drinks count', body: 'Hot ginger tea, lemon tea, and garlic soup all count toward your daily 4-litre target. They are widely available at every lodge on all routes.' },
                ],
              },
            ],
            snacks: {
              intro: 'Full-board lodge meals are included throughout. For long days between lodges, pre-dawn Poon Hill hikes, and summit days on Mardi Himal, carry your own personal trail snacks.',
              items: [
                'Energy bars from home',
                'Mixed nuts and seeds',
                'Peanut butter sachets',
                'Dark chocolate (70%+)',
                'Dried mango and fruit',
                'Electrolyte tablets',
                'Honey sachets',
                'Familiar candy from home',
              ],
            },
          },
        },
      },
    ],
  },

};