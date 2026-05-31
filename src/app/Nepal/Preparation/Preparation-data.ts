

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
  description: string | null;
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
  description?: string;
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
  description?: string;
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

  expeditions: {
    title: "Nepal Himal Adventures",
    subtitle: "Preparation guide",
    stats: [
      { label: "Highest summit", value: "6,812m" },
      { label: "Longest program", value: "29 days" },
      { label: "Technical grade", value: "Alpine" },
      { label: "Best seasons", value: "Apr / Oct" }
    ],
    sections: [
      {
        id: "overview",
        label: "Overview",
        content: {
          panels: [
            {
              heading: "Extreme Alpine Hydration Protocol",
              description: "At 5,500m - 6,500m, the air is freezing and bone-dry. Your respiration rate increases dramatically to compensate for low oxygen levels, meaning you lose massive amounts of moisture simply through breathing out warm air.",
              items: [
                {
                  title: "Daily Target:",
                  body: "Drink 4.5 to 5.5 liters of fluids daily. This includes clean water, hot ginger water, black tea, and clear broths provided by the base camp kitchen."
                },
                {
                  title: "Summit Night Melting Protocol:",
                  body: "At high camps, all water comes from melted snow, which is entirely devoid of minerals. Drinking pure melted snow water causes rapid electrolyte depletion and muscle cramping. You must mix oral rehydration salts or high-sodium electrolyte tablets into every single liter of melted snow water."
                },
                {
                  title: "Freezing Prevention:",
                  body: "Standard hydration bladders and tubes freeze instantly above the snowline. Use wide-mouth insulated flasks (like Nalgene bottles inside insulated jackets) and store them upside down in your pack (water freezes from the top down, keeping the threads clear)."
                }
              ]
            },
            {
              heading: "Critical High-Altitude & Climbing Risks to Manage",
              description: "Climbing Himalayan peaks is an extreme sport with inherent risks. Your preparation must include a deep understanding of these dangers and how to mitigate them.",
              items: [
                {
                  title: "HAPE and HACE at Extreme Elevations:",
                  body: "Climbing peaks like Mera (6,476m), Island Peak (6,160m), or Lobuche East (6,119m) pushes you into the extreme high-altitude zone. Monitor yourself and teammates for High Altitude Pulmonary Edema (HAPE)---indicated by a persistent wet cough, pink frothy sputum, and bubbling lungs---and High-Altitude Cerebral Edema (HACE)---marked by ataxia (loss of balance, walking like a drunk person), confusion, and slurred speech. HAPE and HACE are life-threatening medical emergencies. Immediate descent, oxygen administration, and dexamethasone/nifedipine are mandatory."
                },
                {
                  title: "Summit-Day Frostbite & Peripheral Vascular Shutdown:",
                  body: "In sub-zero temperatures combined with high-altitude hypoxia, your body automatically pulls warm blood away from your fingers and toes to protect your internal core organs. If your boots are laced too tightly (restricting circulation) or your gloves get damp from snow or sweat, frostbite can set in within minutes. Always wear high-quality double mountaineering boots, utilize chemical warmers, and constantly wiggle your toes on the trail."
                },
                {
                  title: "Fixed-Line Anchor Congestion & Fatigue Drop:",
                  body: "On technical pitches (such as the final headwalls of Island Peak or Lobuche East), multiple climbers share the same fixed rope. If you experience sudden upper body exhaustion or panic, you can stall out on the line, exposing yourself and others to extreme cold and rock/ice fall. Your training must emphasize upper body pulling stamina and core stability so you can navigate ascenders, jumars, and safety transitions efficiently."
                },
                {
                  title: "High-Altitude Snow Blindness (UV Keratitis):",
                  body: "Snow reflections on glaciers and high-altitude slopes reflect up to 80% of UV radiation directly back into your eyes. Pushing toward a summit without Category 4 polarized glacier glasses (featuring side shields to block lateral glare) can burn your corneas, causing temporary blindness, extreme pain, and a complete inability to descend safely."
                },
                {
                  title: "Hypothermia via Summit-Stop Delays:",
                  body: "Summit pushes typically begin at midnight (12:00 AM - 2:00 AM) to beat afternoon winds. This means climbing for hours in absolute darkness during the coldest part of the night. If a technical bottleneck occurs at a fixed rope anchor, you may find yourself standing still for 30--60 minutes. If your base layers are damp with sweat from the approach hike, your core temperature will drop rapidly. Keep a high-loft down parka packed at the very top of your daypack, ready to layer over your shell instantly during any delay."
                }
              ]
            },
            {
              heading: "Critical Risks & Golden Rules for Absolute Beginners",
              items: [
                {
                  title: "The \"Bistari, Bistari\" (Slowly, Slowly) Rule:",
                  body: "The single biggest mistake beginners make is walking too fast early in the morning because they feel energetic. This burns out your leg muscles and rapidly increases your risk of Acute Mountain Sickness (AMS). Walk at a pace so slow that it feels almost frustrating. If you cannot sing or hold a casual conversation while walking uphill, you are moving too fast."
                },
                {
                  title: "Do Not Ignore the \"Hot Spot\" (Blister Prevention):",
                  body: "When wearing new boots, if you feel a burning sensation or friction on your heel or toes, stop immediately. Do not wait until you reach camp. Sit down, take off your boot, and apply a blister pad, sports tape, or a band-aid to the area. Once a blister pops, walking becomes agonizing."
                },
                {
                  title: "The Two-Trekking-Pole System:",
                  body: "Beginners often think trekking poles are optional or only for older hikers. This is a myth. Dual trekking poles act like two extra legs, reducing the jarring impact on your knees by up to 25% on steep downhills and keeping you balanced on slippery or uneven rocks."
                },
                {
                  title: "The Diamond Rule of Mountain Water Safety:",
                  body: "A single sip of untreated tap, river, or spring water can cause severe traveler's diarrhea, which will end your trek within 24 hours due to rapid dehydration. Always treat your water using chlorine dioxide tablets, a high-quality portable UV purifier, or rely strictly on water that has been rolled-boiled by the lodge kitchen."
                },
                {
                  title: "Layering Against the Flash-Chill:",
                  body: "Mountain weather changes rapidly. You might feel hot and sweaty while walking under the afternoon sun, but the moment you stop for a rest or the sun dips behind a ridge, the temperature drops instantly. If your clothes are soaked with sweat, you will begin shivering within minutes. Keep a lightweight fleece or a down jacket right at the top of your daypack so you can put it on the second you stop walking."
                }
              ]
            }
          ]
        }
      },
      {
        id: "training",
        label: "Training plan",
        content: {
          training_plan: [
            {
              phase: "Beginner Physical Training Program",
              title: "Weeks 1--4: Building the \"Walking Engine\" & Joint Awakening",
              description: "Your initial goal is to build base stamina and wake up the small stabilizer muscles around your ankles, knees, and lower back.",
              days: [
                { label: "Cardio Focus", activity: "(3x/week): 30 to 40-minute walks. Do not walk on flat pavement. Use a treadmill set to a continuous 4--6% incline, or find local hilly parks and dirt trails. Your pace should be comfortable enough that you can speak a full sentence without gasping for air." },
                { label: "Strength & Balance Focus", activity: "(2x/week --- Non-consecutive days): Bodyweight Squats: 3 sets of 10 reps. Focus on keeping your chest up and your heels glued to the floor. Pillow Balance Matrix: Stand on one leg on a soft pillow for 45 seconds. Repeat on the other side. Do this 3 times. *This mimics walking on uneven mountain stones and builds ankle stability.* Glute Bridges: 3 sets of 12 reps. Lie on your back, knees bent, and lift your hips toward the ceiling. This strengthens your glutes to protect your lower back when carrying a pack. Calf Raises: 3 sets of 15 reps. Raise up onto your tiptoes on the edge of a step, then lower your heels slightly below the step level." }
              ]
            },
            {
              phase: "Beginner Physical Training Program",
              title: "Weeks 5--8: Introducing the Pack & Mountain Stair Simulation",
              description: "Himalayan trails are famous for continuous, uneven stone steps. This phase teaches your body how to step upward while carrying weight.",
              days: [
                { label: "Cardio & Pack Work", activity: "(3x/week): Two mid-week sessions: 40 minutes on a gym stairmaster or a real outdoor flight of stairs at a very slow, steady, rhythmic pace. One weekend session: A 60 to 90-minute walk on a local trail or incline wearing the exact daypack you plan to take on your trek, loaded with 3--4 kg of weight (use water bottles)." },
                { label: "Strength Focus", activity: "(2x/week): Low Step-Ups: 3 sets of 12 reps per leg on a 6-inch step or bench. Step up, straighten your leg, and step down slowly. Forward Lunges: 3 sets of 10 steps total (5 per leg). Focus on balance. Standard Abdominal Plank: 3 sets of 30 seconds. A strong core keeps your backpack from shifting and causing shoulder pain." }
              ]
            },
            {
              phase: "Beginner Physical Training Program",
              title: "Weeks 9--12: Peak Endurance & Boot Breaking",
              description: null,
              days: [
                { label: "Cardio & Pack Work", activity: "(3x/week): One mid-week session: 45--60 minutes on a stairmaster or steep incline treadmill (8--10% incline) wearing your weighted pack. The Weekend Breakthrough: One 2 to 3-hour outdoor trail hike. You must wear your actual trekking boots during this hike to break them in and ensure they do not cause blisters. Carry a 5--6 kg load." },
                { label: "Muscular Stamina Circuit", activity: "(2x/week): Move from one exercise straight to the next with minimal rest to build muscular endurance. Repeat the loop 3 times: 12 Squats → 10 Step-Ups per leg → 15 Calf Raises → 30-second Plank → Rest 2 minutes." }
              ]
            },
            {
              phase: "Base Fitness to Peak Climbing Transition",
              title: "Weeks 1--4: Structural Leg Strength & Ankle Conditioning",
              description: "The priority is bulletproofing your lower joints and lower back against the heavy weight of technical climbing boots and an expedition pack.",
              days: [
                { label: "Cardio Focus", activity: "(3x/week): 45-minute continuous walks performed strictly on a treadmill at a 6--10% incline or on steep local hills. Focus on keeping a steady, nasal-breathing pace. No flat ground." },
                { label: "Strength Focus", activity: "(2x/week --- Non-consecutive days): Weighted Goblet Squats: 3 sets of 12 reps (Focus on holding the bottom position for 2 seconds to condition patellar tendons). Ankle Eversion/Inversion Drills: 3 sets of 15 reps per foot using a resistance band (Prepares the ankles for lateral ankle angles on hard snow slopes). Calf Raises (Full Deficit): 3 sets of 20 reps on the edge of a step (Crucial for preventing severe calf cramping when kicking steps into hard snow). Hollow Body Holds: 3 sets of 30 seconds (Builds deep abdominal stamina)." }
              ]
            },
            {
              phase: "Base Fitness to Peak Climbing Transition",
              title: "Weeks 5--8: Weighted Stepping & Upper Body Pulling",
              description: "This phase introduces targeted vertical steps and the pulling strength required to ascend fixed ropes on steep headwalls (like the final pitches of Island Peak or Lobuche East).",
              days: [
                { label: "Cardio & Pack Work", activity: "(3x/week): Two 45-minute sessions on a stairmaster or step-climber. *Training tip: Wear heavy hiking boots or ankle weights to simulate the lifting weight of mountaineering boots.* One weekend outdoor simulation: A 2.5-hour trail hike carrying a daypack loaded with 6--8 kg of static weight." },
                { label: "Strength Focus", activity: "(2x/week): Weighted Box Step-Ups (12\" box): 3 sets of 15 reps per leg holding light dumbbells. Pull-Ups or Lat Pulldowns: 3 sets of 8--12 reps (Builds the back muscles needed to pull yourself up a fixed line). Farmers Walks: 3 sets of 45 seconds holding heavy dumbbells (Strengthens your grip for holding ascenders and handling cold tools). Plank with Alternating Arm Reaches: 3 sets of 45 seconds." }
              ]
            },
            {
              phase: "Base Fitness to Peak Climbing Transition",
              title: "Weeks 9--12: Peak Vertical Volume & Endurance Circuits",
              description: null,
              days: [
                { label: "Cardio & Pack Work", activity: "(3x/week): One 60-minute incline treadmill power walk (12% grade) carrying a 10 kg pack. One mid-week 60-minute fast stair climbing session. One weekend outdoor simulation: 4 hours of continuous trail hiking with significant elevation gain, carrying a 10--12 kg pack." },
                { label: "Mountaineering Endurance Circuit", activity: "(2x/week): Run through these exercises continuously with zero rest between movements to build total muscular endurance. Repeat the loop 3 times: 15 Bodyweight Squats → 10 Dumbbell Rows → 15 Weighted Step-Ups per leg → 20 Deficit Calf Raises → 60-second Plank." }
              ]
            }
          ],
          training_tracks: [
            {
              label: "Beginner track",
              description: "Choose your track based on your current fitness level. Both programs are 14 weeks and designed specifically to prepare you for expedition conditions.",
              phases: []
            },
            {
              label: "Active / fit track",
              description: "For: regular gym-goer, runner, cyclist, or hiker with some experience. Goal: develop high-altitude endurance, heavy-pack efficiency, and multi-day hiking capacity over 16 weeks.",
              phases: [
                {
                  phase: "PHASE 1 — WEEKS 1–4 · SPORT-TO-TREK TRANSITION",
                  title: "Shifting from gym to mountain",
                  description: "Redirect your fitness to hiking-specific demands. Introduce loaded pack work immediately. Prioritize hiking and vertical gain over gym sessions.",
                  days: [
                    { label: "Mon", activity: "60 min trail run or hike with 8kg pack" },
                    { label: "Tue", activity: "Strength — heavy step-ups, Bulgarian split squats, single-leg deadlifts (4×10)", note: "Functional leg strength, not aesthetics" },
                    { label: "Wed", activity: "90 min hike with 8–10kg pack, focus on elevation gain" },
                    { label: "Thu", activity: "60 min cycling (zone 2) or yoga" },
                    { label: "Fri", activity: "Hill repeats 45 min or stair intervals with pack" },
                    { label: "Sat", activity: "Long day hike 4–5hrs, 800–1,000m gain, 10kg pack" },
                    { label: "Sun", activity: "Active recovery — swim or easy walk" }
                  ]
                },
                {
                  phase: "PHASE 2 — WEEKS 5–10 · HIGH-VOLUME BUILD",
                  title: "Progressive overload",
                  description: "Increase pack to 12kg on long days. Saturday hikes should hit 6–7hrs. Complete a 2-day overnight hike by week 9 as a fitness benchmark.",
                  days: [
                    { label: "Mon", activity: "75 min run/hike intervals with pack" },
                    { label: "Tue", activity: "Strength — weighted lunges, trap-bar deadlifts, cable rows (4×10)" },
                    { label: "Wed", activity: "2hr hike with 12kg pack, aim for 600m+ elevation" },
                    { label: "Thu", activity: "Mobility + 15 min breathwork (Wim Hof or box breathing)", note: "Conditions lungs for reduced O₂ at altitude" },
                    { label: "Fri", activity: "45 min hill sprints or stair intervals" },
                    { label: "Sat", activity: "Long day hike 6–7hrs, 1,200m+ gain, full 12kg pack" },
                    { label: "Sun", activity: "Rest or easy hike (60 min)" }
                  ]
                },
                {
                  phase: "PHASE 3 — WEEKS 11–14 · PEAK & SIMULATION",
                  title: "Trek-specific simulation",
                  description: "Multi-day hike (2–3 nights) in weeks 12–13. Maximum pack weight. Daily breathwork. Reduce strength to maintenance only.",
                  days: [
                    { label: "Mon–Fri", activity: "5 days active: 2 long hikes (60–90 min), 2 cardio, 1 strength (maintenance)" },
                    { label: "Sat", activity: "Hike 6–8hrs, 1,500m+ gain, 12kg pack — full simulation day" },
                    { label: "Wk 12–13", activity: "Multi-night hike (2–3 days) in mountain terrain if accessible", note: "Benchmark: can you complete day 3 feeling strong?" },
                    { label: "Daily", activity: "10 min diaphragmatic breathwork every morning" }
                  ]
                },
                {
                  phase: "PHASE 4 — WEEKS 15–16 · TAPER",
                  title: "Sharpen and rest",
                  description: "Drop volume by 50%, maintain intensity on short sessions. Body needs to arrive fresh, not depleted.",
                  days: [
                    { label: "Wk 15", activity: "3 hikes (1–1.5hrs each), 1 strength session, sleep 8hrs+" },
                    { label: "Wk 16", activity: "2 easy walks, stretching only, full gear shake-down, rest" }
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        id: "gear",
        label: "Gear & packing",
        content: {
          gear: {
            legend: { show: true },
            categories: [
              {
                category: "CLIMBING HARDWARE (TECHNICAL)",
                items: [
                  { name: "Mountaineering boots (double or single insulated, crampon-compatible)", note: "Must be broken in — do not arrive with new boots", badge: "bring your own" },
                  { name: "Crampons (12-point, technical mountaineering grade)", note: "Available via NHA rental at additional cost", badge: "additional cost" },
                  { name: "Ice axe (technical, 55–65cm)", note: "Available via NHA rental at additional cost", badge: "additional cost" },
                  { name: "Climbing harness (sit harness, adjustable)", badge: "additional cost" },
                  { name: "Jumar / ascender (rope ascending device)", badge: "additional cost" },
                  { name: "Locking carabiners (×4 minimum)", badge: "additional cost" },
                  { name: "Prussik loops (×2) and belay device", badge: "additional cost" },
                  { name: "Helmet (climbing grade)", badge: "additional cost" }
                ]
              },
              {
                category: "CLOTHING — HIGH ALTITUDE",
                items: [
                  { name: "Down suit or high-altitude down jacket + salopettes (rated −25°C or below)", note: "NHA provides a high-quality down jacket for the expedition", badge: "provided by NHA" },
                  { name: "Sleeping bag (rated −30°C expedition grade)", note: "NHA provides expedition sleeping bag — returned after trip", badge: "provided by NHA" },
                  { name: "Waterproof hardshell jacket and pants (Gore-Tex or equivalent)", badge: "bring your own" },
                  { name: "Mid layer fleece (×2) and thermal base layers (×3 merino wool)", badge: "bring your own" },
                  { name: "High-altitude gloves (expedition mitts + liner gloves)", badge: "bring your own" },
                  { name: "Balaclava and warm beanie", note: "NHA beanie provided on arrival", badge: "provided by NHA" },
                  { name: "Neck gaiter / Buff", note: "NHA Buff provided on arrival", badge: "provided by NHA" },
                  { name: "Trekking pants (×2 lightweight), hiking shirts (×3–4), thermal socks (×4 pairs)", badge: "bring your own" }
                ]
              },
              {
                category: "PACK, SHELTER & SAFETY",
                items: [
                  { name: "NHA duffel bag (porter bag)", note: "Provided by NHA in your welcome kit", badge: "provided by NHA" },
                  { name: "Summit pack / climbing pack (30–35L)", badge: "bring your own" },
                  { name: "Trekking poles (×2, collapsible)", badge: "bring your own" },
                  { name: "Headtorch (expedition grade, rated −20°C) + spare batteries", badge: "bring your own" },
                  { name: "Glacier UV400 goggles with side shields (full wraparound)", badge: "bring your own" },
                  { name: "Wide-mouth insulated flask (Nalgene style, 1L ×2)", note: "Store upside down in pack — water freezes top-down keeping threads clear", badge: "bring your own" },
                  { name: "Oral rehydration salts / high-sodium electrolyte tablets", badge: "bring your own" },
                  { name: "Chemical toe/hand warmers (×10 pairs minimum)", badge: "bring your own" },
                  { name: "SPF 50+ sunscreen and high-altitude lip balm", badge: "bring your own" },
                  { name: "Power bank (20,000mAh+), dry bags for electronics", badge: "bring your own" },
                  { name: "NHA trekking map and trip completion certificate", note: "Provided in NHA welcome kit", badge: "provided by NHA" }
                ]
              }
            ]
          }
        }
      },
      {
        id: "nutrition",
        label: "Nutrition",
        content: {
          nutrition: {
            panels: [
              {
                heading: "First-Timer Trail Nutrition & Hydration Strategy (Preparation Months)",
                items: [
                  { title: "The Protein Foundation:", body: "Eat a little more clean protein (chicken, fish, eggs, tofu, lentils) during your training weeks. Your leg muscles are breaking down and rebuilding to become stronger; they need protein to do that." },
                  { title: "Hydrate Early:", body: "Do not wait until you are on the mountain to form good habits. Drink at least 2.5 liters of water daily during your preparation months." }
                ]
              },
              {
                heading: "While on the Trek",
                items: [
                  { title: "The First-Timer Hydration Law:", body: "Cool Mountain Air → Suppressed Thirst Sensation → Forget to Drink → Thick Blood & Mimicked Altitude Sickness → The Fix: Force 4 Liters Daily + Electrolytes (Even with Zero Thirst)." },
                  { title: "Carbohydrates are Your Best Friend:", body: "When walking uphill in thin mountain air, your body burns carbohydrates much faster and more efficiently than fats or protein. Enjoy the local lodge food: plates of rice, pasta, potatoes, porridge, and bread are the cleanest fuels for your muscles." },
                  { title: "Pack \"Joy Food\" and Fuel Bars:", body: "High altitude naturally reduces your appetite and can cause mild nausea. Bring a handful of your favorite snacks from home (candy bars, nuts, or energy bars). When a full meal looks unappealing, these familiar snacks will keep your energy from crashing." },
                  { title: "The 4-Liter Hydration Rule:", body: "You will lose a massive amount of water just by breathing the crisp, dry mountain air. Drink 4 liters of fluid every single day. This includes hot teas, garlic soups, and clean water." },
                  { title: "Use Electrolytes:", body: "Add an oral rehydration salt packet or an electrolyte tablet to at least one of your water bottles each day. It replaces the essential salts you sweat out and helps prevent cramping." }
                ]
              },
              {
                heading: "Mountaineering Nutrition & Hydration Strategy (Phase One: During Preparation at Home)",
                items: [
                  { title: "Protein for Mass Repair:", body: "Consume 1.6 to 2.2 grams of protein per kilogram of body weight daily to rebuild structural muscle fibers broken down by weighted stepping and heavy rucking." },
                  { title: "Glycogen Habituation:", body: "Focus purely on complex carbohydrates. Increase your carb intake by 25% for the 24 hours leading up to your long, back-to-back weekend simulation hikes to train your digestive tract to process fuel under physical stress." },
                  { title: "Hydration Baseline:", body: "Drink 35--40 ml of water per kilogram of body weight daily. Entering high-volume training blocks in a dehydrated state causes premature muscle cramping and severely delays recovery." }
                ]
              },
              {
                heading: "On-Trail & High-Camp Strategy",
                items: [
                  { title: "Approach Trek Fuel (Lodges):", body: "Eat large, carbohydrate-dense meals provided by the lodges (Dal Bhat, garlic pasta, porridge, and potatoes). Avoid meat products above Namche Bazaar or Manang to eliminate the risk of foodborne illnesses from un-refrigerated transport." },
                  { title: "High-Camp & Summit Day Fuel:", body: "Above 5,000m, altitude sickness and physical exhaustion severely suppress your appetite. You must switch to calorie-dense, easily digestible options that don't require heavy chewing: Energy Gels & Chews (instant, simple carbohydrates for steep summit pitches), Powdered Carbohydrate Drinks (mixing cyclic dextrin or sports drinks into your water bottles provides clean energy when solid food causes nausea), Calorie-Dense Comfort Packables (Snickers bars, peanut butter packets, marzipan, and dried fruits that do not freeze solid)." }
                ]
              }
            ],
            snacks: {
              intro: "Base Camp meals are provided by NHA's cook. For Camp 1, Camp 2, and the summit push you will rely on your own high-energy snacks and the NHA high-altitude food pack (available as an additional).",
              items: [
                "Energy gels and liquid calories",
                "Cyclic dextrin powder drink mix",
                "Dark chocolate (70%+)",
                "Peanut butter sachets",
                "Marzipan (does not freeze)",
                "Freeze-dried meals (high camps)",
                "Electrolyte tablets",
                "Mixed nuts and seeds"
              ],
            },
          },
        },
      },
    ],
  },


  'classic-treks': {
    title: 'Nepal Himal Adventures',
    subtitle: 'Preparation guide',
    stats: [
      { label: 'Max elevation',   value: '4,130m'   },
      { label: 'Difficulty',      value: 'Moderate' },
      { label: 'Best seasons',    value: 'Mar / Oct' },
      { label: 'Trek types',      value: '7 routes'  },
    ],
     sections: [
      {
        id: "overview",
        label: "Overview",
        content: {
          panels: [
            {
              heading: "Altitude Hydration Protocol",
              description: "The air at high elevations is cold and dry, causing you to lose significant fluids simply through breathing and exertion.",
              items: [
                {
                  title: "Daily Target:",
                  body: "Drink 4 to 5 liters of fluid daily. This can include clean water, hot broths, and decaffeinated herbal or ginger teas."
                },
                {
                  title: "Electrolyte Replenishment:",
                  body: "Drink at least one electrolyte or oral rehydration mix daily to preserve your mineral balance. Flushing your system with pure water alone can dilute essential sodium levels, compounding altitude fatigue."
                },
                {
                  title: "Water Safety:",
                  body: "Use reliable purification techniques (such as chlorine dioxide tablets, a portable UV filter, or rolling-boiled water). Never drink untreated surface or wilderness tap water."
                }
              ]
            },
            {
              heading: "Critical High-Altitude Risks to Manage",
              items: [
                {
                  title: "Acute Mountain Sickness (AMS):",
                  body: "While these routes feature more gradual elevation gains than the ultra-high passes, places like Annapurna Base Camp (4,130m), Khopra Ridge (3,660m), or Langtang's upper valleys still cross critical thresholds. Watch for early indicators: persistent headaches, nausea, loss of appetite, and dizziness. Never ascend with symptoms; if symptoms worsen, descend immediately."
                },
                {
                  title: "Severe Knee Strain (Patellar Eccentric Overload):",
                  body: "Routes like Ghorepani Poon Hill and Annapurna Base Camp are famous for thousands of stone steps. Dropping significant vertical elevation down these stairs places extreme eccentric load on your knees. Without proper dual trekking poles and eccentric quad strength, joint fatigue can cause acute, stabilizing failure."
                },
                {
                  title: "Dehydration-Induced Altitude Fatigue:",
                  body: "Because the mountain valleys can feel cool, trekkers often lose their sensation of thirst. Dehydration thickens the blood, decreases oxygen transport efficiency, and mimics AMS symptoms. Force water intake even when you feel zero thirst."
                },
                {
                  title: "Gastrointestinal (GI) Issues & Waterborne Illnesses:",
                  body: "Changes in local water sources can lead to acute traveler's diarrhea. At high elevations, GI illnesses cause lightning-fast dehydration and nutrient depletion, entirely destroying physical performance. Carry a personal medical kit containing oral rehydration salts, loperamide, and broad-spectrum antibiotics."
                },
                {
                  title: "Extreme Environmental Microclimates:",
                  body: "Mountain ridges (like Mardi Himal or Khopra) can drop from intense, sun-exposed heat during the day to freezing winds and sudden fog or mist within minutes. Failing to have a high-quality insulating layer and a windproof shell easily accessible in your daypack can lead to rapid core temperature drops."
                }
              ]
            }
          ]
        }
      },
      {
        id: "training",
        label: "Training plan",
        content: {
          training_plan: [
            {
              phase: "Complete Beginner Program",
              title: "Weeks 1--4: Step Foundation & Joint Realignment",
              description: "The priority is preparing your joints, tendons, and lower back for continuous daily climbing while building baseline cardiovascular efficiency.",
              days: [
                {
                  label: "Cardio Focus (3x/week):",
                  activity: "30--45 minute brisk walks. Must be done on a treadmill set to a continuous 4--6% incline or on local hilly paths. Focus on a steady, conversational pace."
                },
                {
                  label: "Strength Focus (2x/week --- Non-consecutive days):",
                  activity: "Bodyweight Squats: 3 sets of 10 reps (Focus on depth and keeping heels flat on the floor). Glute Bridges: 3 sets of 12 reps (Activates the glutes to protect the lower back when carrying a daypack). Calf Raises: 3 sets of 15 reps (Crucial for ankle stability on uneven, stone-stepped trails). Standard Plank: 3 sets of 30 seconds (Builds core stamina for carrying gear)."
                }
              ]
            },
            {
              phase: "Complete Beginner Program",
              title: "Weeks 5--8: Stone Step Simulation & Light Load",
              description: "This phase builds specific conditioning for heavy stepping days and continuous ridge ascents like those found on the paths to Mardi Himal or Poon Hill.",
              days: [
                {
                  label: "Cardio & Backpack Focus (3x/week):",
                  activity: "Two 40-minute sessions on a stairmaster or step-climber set to a slow, steady mountain pacing. One weekend outdoor simulation: A 60--90 minute continuous walk wearing your actual trekking daypack loaded with 3--5 kg of static weight."
                },
                {
                  label: "Strength Focus (2x/week):",
                  activity: "Bodyweight Forward Lunges: 3 sets of 10 reps per leg (Improves single-leg strength and balance). Step-Ups (6--8\" step): 3 sets of 12 reps per leg (Directly simulates mountain stairs). Side Planks: 3 sets of 20 seconds per side (Builds lateral core strength to stabilize your pack weight). Hip Abductions: 3 sets of 15 reps per side (Protects and stabilizes the knees during steep climbs)."
                }
              ]
            },
            {
              phase: "Complete Beginner Program",
              title: "Weeks 9--12: Peak Stair Endurance & Specific Conditioning",
              description: null,
              days: [
                {
                  label: "Cardio & Backpack Focus (3x/week):",
                  activity: "One 45-minute stairmaster or step-climbing session (Focus on deep, slow steps). One mid-week 60-minute fast-paced power walk on hilly terrain. One weekend hike: 2 to 3 hours of continuous walking on variable trails or stairs with a 5--7 kg pack."
                },
                {
                  label: "Strength Circuit Focus (2x/week):",
                  activity: "Move from one exercise straight to the next with minimal rest to build muscular endurance. Run through this circuit 3 times: 12 Bodyweight Squats → 10 Lunges per leg → 15 Step-Ups per leg → 20 Calf Raises → 45-second Plank."
                }
              ]
            },
            {
              phase: "Amateur / Active Program",
              title: "Weeks 1--4: Unilateral Strength & Aerobic Efficiency",
              description: "Active individuals often have great general fitness but lack the specific joint conditioning needed for thousands of uneven steps and downhill braking.",
              days: [
                {
                  label: "Cardio Focus (3x/week):",
                  activity: "Two 45-minute Zone 2 (easy, sustainable cardiovascular pace) runs, rowers, or cycling sessions. One 60-minute incline treadmill walk (8--10% grade) wearing a 5 kg pack."
                },
                {
                  label: "Strength Focus (2x/week):",
                  activity: "Weighted Goblet Squats: 3 sets of 12 reps. Walking Lunges: 3 sets of 15 steps per leg. Romanian Deadlifts (RDLs): 3 sets of 10 reps (Strengthens hamstrings and lower back for load-bearing). Weighted Calf Raises: 3 sets of 15 reps. Plank Variations (with rotations): 3 sets of 60 seconds."
                }
              ]
            },
            {
              phase: "Amateur / Active Program",
              title: "Weeks 5--8: Eccentric Quadriceps Strength & Descent Protection",
              description: "The focus shifts to eccentric quadriceps strength (the \"braking\" action of your thighs) to prevent severe knee pain during massive stone-stair descents.",
              days: [
                {
                  label: "Cardio & Backpack Focus (3x/week):",
                  activity: "One 45-minute high-intensity interval training (HIIT) stair-climbing session. One 60-minute weighted outdoor trail or stair walk. One weekend outdoor hike: 3 to 4 hours over rolling terrain or steep stairs with an 8--10 kg pack."
                },
                {
                  label: "Strength Focus (2x/week):",
                  activity: "Weighted Step-Ups (12--14\" box): 3 sets of 12 reps per leg holding dumbbells. Focus on taking a full 3 seconds to lower your foot back down. Jump Squats: 3 sets of 12 reps (Builds explosive joint resilience and deceleration control). Single-Leg Romanian Deadlifts: 3 sets of 8 reps per leg (Builds exceptional ankle, knee, and hip tracking stability)."
                }
              ]
            },
            {
              phase: "Amateur / Active Program",
              title: "Weeks 9--12: Peak Volume & Strategic Taper",
              description: "Reduce your total workout volume (sets and reps) by 50% during Week 12 to ensure your body fully recovers.",
              days: [
                {
                  label: "Cardio & Backpack Focus (3x/week):",
                  activity: "Two 60-minute simulated step climbs or steep incline walks with full trekking weight (10--12 kg to simulate the physical strain of multi-day loading)."
                },
                {
                  label: "The Back-to-Back Block:",
                  activity: "Weekend Hike Day 1: A 4-hour weighted hike on stairs or steep trails. Weekend Hike Day 2: A 2-hour recovery walk the next morning while carrying the pack."
                },
                {
                  label: "Strength Focus (2x/week):",
                  activity: "Maintain structural strength exercises but reduce your total workout volume (sets and reps) by 50% during Week 12 to ensure your body fully recovers."
                }
              ]
            }
          ],
          training_tracks: [
            {
              label: "Beginner track",
              description: "Choose your track based on your current fitness level. Both programs are 12 weeks and designed specifically for moderate-altitude trekking up to 4,200m.",
              phases: []
            },
            {
              label: "Active / fit track",
              description: "For regular gym-goers, runners, cyclists, or active sports participants. Goal: build eccentric strength, load-bearing endurance, and back-to-back hiking capacity.",
              phases: [
                {
                  phase: "WEEKS 1--4 · UNILATERAL STRENGTH & AEROBIC EFFICIENCY",
                  title: "Sport-to-trek transition",
                  description: "Active individuals often have great general fitness but lack the specific joint conditioning needed for thousands of uneven steps and downhill braking.",
                  days: [
                    { label: "Cardio Focus (3x/week):", activity: "Two 45-minute Zone 2 runs, rowers, or cycling sessions. One 60-minute incline treadmill walk (8--10% grade) wearing a 5 kg pack." },
                    { label: "Strength Focus (2x/week):", activity: "Weighted Goblet Squats 3×12, Walking Lunges 3×15 per leg, Romanian Deadlifts 3×10, Weighted Calf Raises 3×15, Plank Variations 3×60 sec." }
                  ]
                },
                {
                  phase: "WEEKS 5--8 · ECCENTRIC QUAD STRENGTH & DESCENT PROTECTION",
                  title: "Braking strength for stone stairs",
                  description: "Eccentric quad strength is the \"braking\" action of your thighs. Without it, massive stone-stair descents like Ghorepani or ABC will destroy your knees.",
                  days: [
                    { label: "Cardio & Backpack Focus (3x/week):", activity: "One 45-minute HIIT stair-climbing session. One 60-minute weighted outdoor trail or stair walk. One weekend hike: 3 to 4 hours over rolling terrain or steep stairs with an 8--10 kg pack." },
                    { label: "Strength Focus (2x/week):", activity: "Weighted Step-Ups (12--14\" box) 3×12 per leg — take a full 3 seconds to lower your foot back down. Jump Squats 3×12. Single-Leg Romanian Deadlifts 3×8 per leg." }
                  ]
                },
                {
                  phase: "WEEKS 9--12 · PEAK VOLUME & TAPER",
                  title: "Back-to-back blocks and recovery",
                  description: "Reduce strength volume by 50% in Week 12. Body must arrive fresh, not depleted.",
                  days: [
                    { label: "Cardio & Backpack Focus (3x/week):", activity: "Two 60-minute simulated step climbs or steep incline walks with full trekking weight (10--12 kg)." },
                    { label: "The Back-to-Back Block:", activity: "Weekend Day 1: 4-hour weighted hike on stairs or steep trails. Weekend Day 2: 2-hour recovery walk the next morning carrying the same pack." },
                    { label: "Taper:", activity: "Week 12 — cut all strength sets and reps by 50%. Maintain cardio but reduce intensity." }
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        id: "nutrition",
        label: "Nutrition",
        content: {
          nutrition: {
            panels: [
              {
                heading: "High-Altitude Nutrition & Hydration Strategy",
                items: [
                  {
                    title: "1. Phase One: During Preparation (At Home)",
                    body: "Protein for Repair: Aim for 1.2 to 2.0 grams of protein per kilogram of body weight daily to support muscle synthesis as your training volume scales up. Carbohydrate Strategy: Prioritize complex carbohydrates (oats, brown rice, sweet potatoes, whole grains). On your long weekend hike days, slightly increase carbohydrate intake to fully fuel extended physical performance. Hydration Baseline: Drink 30--35 ml of water per kilogram of body weight daily. Dehydration during training severely delays muscle recovery."
                  },
                  {
                    title: "On-Trail High-Altitude Protocol",
                    body: "On these classic valley and ridge routes, metabolic demands increase due to crisp mountain air, rugged terrain, and altitude shifts. At elevations above 3,000 meters, your body changes how it processes nutrients."
                  },
                  {
                    title: "Carbohydrates (The Preferred Fuel):",
                    body: "Under oxygen-depleted conditions, your body burns carbohydrates much more efficiently than fats or proteins. Lean heavily on local freshly cooked foods available along the route, such as grains, rice, potatoes, porridge, and pasta."
                  },
                  {
                    title: "Protein (Muscle Maintenance):",
                    body: "To prevent muscle wasting over consecutive trekking days, consistently consume local fresh eggs, lentil/bean stews, or supplementary protein bars brought from home."
                  },
                  {
                    title: "Fats & Quick Calories (Combating Altitude Appetite Loss):",
                    body: "High altitude can naturally suppress appetite. When a large meal sounds unappealing, rely on calorie-dense, easily consumable trail snacks like nuts, seeds, nut butter packets, and dried fruit during short breaks."
                  },
                ],
              },
            ],
          },
        },
      },
    ],
  },

  // Add this inside the prepGuides Record in Preparation-data.ts
// Covers: Everest Base Camp Trek, Annapurna Circuit Trek, Gokyo Lakes Trek, Langtang Helambu Trek

  'high-altitude-treks': {
    title: 'Nepal Himal Adventures',
    subtitle: 'Preparation guide',
    stats: [
      { label: 'Max elevation',  value: '5,416m'    },
      { label: 'Difficulty',     value: 'Strenuous' },
      { label: 'Best seasons',   value: 'Mar / Oct' },
      { label: 'Trek types',     value: '4 routes'  },
    ],
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        content: {
          panels: [
            {
              heading: 'Extreme Altitude Hydration',
              description: 'The air at 4,000–5,000+ meters is freezing and exceptionally dry. You will lose massive amounts of moisture simply by breathing out warm air as your respiration rate spikes.',
              items: [
                {
                  title: 'Fluid Target',
                  body: 'Drink 4 to 5 liters of fluid every single day. This includes purified water, hot ginger or black tea, and clear vegetable or garlic broths.',
                },
                {
                  title: 'Mineral Density',
                  body: 'Mix oral rehydration salts or electrolyte tablets into at least 1.5 liters of your daily water intake. Plain water alone can dilute essential sodium levels, compounding altitude fatigue.',
                },
                {
                  title: 'Water Sanitation',
                  body: 'Use chemical treatment tablets (chlorine dioxide) or a verified portable UV or hollow-fiber filter. Never consume untreated tap or wilderness water under any circumstances.',
                },
              ],
            },
            {
              heading: 'Critical High-Altitude Risks to Manage',
              items: [
                {
                  title: 'AMS, HAPE, and HACE',
                  body: 'Pushing toward targets like Everest Base Camp (5,364m), Thorong La Pass (5,416m), Gokyo Ri (5,360m), or Laurebina Pass (4,610m) carries absolute medical risk. Monitor for AMS markers: bounding headaches, sudden nausea, and extreme lethargy. If ignored, this can escalate to HAPE or HACE. The universal law is absolute: never climb higher with symptoms; if they worsen, descend immediately.',
                },
                {
                  title: 'Acute Patellar Tendonitis (Downhill Tracking Failure)',
                  body: 'Coming down from a high-altitude crest or pass means dropping massive vertical distance over rugged trails and stone steps. If your quads exhaust, your patellar tendons absorb the raw impact, leading to acute tracking failure. You must use two trekking poles to deflect 20–25% of the weight off your lower joints.',
                },
                {
                  title: 'Thromboembolism & Altitude Dehydration',
                  body: 'Cold mountain air numbs your thirst sensation. When dehydration sets in, your blood thickens, circulation slows, and your risk of developing blood clots (deep vein thrombosis) or severe hypothermia increases exponentially. Force water consumption even when you feel zero thirst.',
                },
                {
                  title: 'High-Altitude Giardiasis & Dysentery',
                  body: 'Pathogens in alpine water sources are highly resilient. A single sip of contaminated water can cause severe gastrointestinal infection within 12–24 hours, leading to rapid fluid loss and weakness that terminates your trek. Keep hand sanitizer accessible and rigorously treat all drinking water.',
                },
                {
                  title: 'Severe Thermal Swings & Flash Hypothermia',
                  body: 'High mountain trails feature intense UV-heavy daytime heat followed by sub-zero winds the second the sun drops behind a ridge. If your clothing is soaked with sweat from a steep climb, you can drop into flash hypothermia during an extended rest stop. Keep a high-loft down jacket and windproof shell easily accessible right at the top of your pack.',
                },
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
              phase: 'COMPLETE BEGINNER PROGRAM — WEEKS 1–4',
              title: 'Incline Foundation & Joint Realignment',
              description: 'The priority is preparing your joints, tendons, and cardiovascular system for continuous daily climbing while building baseline aerobic efficiency.',
              days: [
                {
                  label: 'Cardio',
                  activity: '30–45 min brisk walking 3x/week — must be performed on a treadmill set to a continuous 4–6% incline or on local hilly paths. No flat ground walking. Maintain a steady, conversational pace.',
                },
                {
                  label: 'Strength',
                  activity: 'Bodyweight Deep Squats 3×10, Floor Glute Bridges 3×12, Standing Calf Raises 3×20, Forearm Plank 3×30–45 sec — 2x/week on non-consecutive days.',
                  note: 'Activates the posterior chain to protect your lower back when carrying a daypack',
                },
              ],
            },
            {
              phase: 'COMPLETE BEGINNER PROGRAM — WEEKS 5–8',
              title: 'Structural Loading & Specific Elevation',
              description: 'Builds structural tolerance for long, grueling uphill days such as the steep climbs up to Namche Bazaar, Manang, or the Langtang valley rim.',
              days: [
                {
                  label: 'Cardio',
                  activity: 'Two 40-min stairmaster sessions at slow, deliberate mountain rhythm + one weekend outdoor walk wearing trekking daypack loaded with 4 kg.',
                  note: 'Practice strict rhythmic belly breathing — inhale 2 steps, exhale 2 steps — to optimize lung capacity for lower-oxygen environments',
                },
                {
                  label: 'Strength',
                  activity: 'Bodyweight Alternating Forward Lunges 3×10 per leg, Step-Ups (6–8 inch) 3×15 per leg, Side Planks 3×20 sec per side, Hip Abductions 3×15 per side.',
                },
              ],
            },
            {
              phase: 'COMPLETE BEGINNER PROGRAM — WEEKS 9–12',
              title: 'Peak Alpine Volume & Endurance Circuit',
              description: null,
              days: [
                {
                  label: 'Cardio',
                  activity: 'One 50-min incline treadmill power walk (8–10% grade) with 6 kg pack + one 60-min fast-paced trail hike + one weekend 3-hr continuous mountain walk with full 7 kg daypack.',
                },
                {
                  label: 'Circuit',
                  activity: '3 rounds with zero rest: 12 Squats → 10 Lunges per leg → 15 Step-Ups per leg → 20 Calf Raises → 45-sec Plank.',
                  note: 'Move immediately from one exercise to the next to build specific muscular endurance',
                },
              ],
            },
            {
              phase: 'ACTIVE / AMATEUR PROGRAM — WEEKS 1–4',
              title: 'Unilateral Stability & Aerobic Volume',
              description: 'Active individuals must quickly convert general fitness into single-leg stability and high-altitude blood-oxygen transport efficiency.',
              days: [
                {
                  label: 'Cardio',
                  activity: 'Two 45-min Zone 2 runs, rows, or cycling sessions + one 60-min incline treadmill walk (10% grade) with 6 kg pack.',
                  note: 'Zone 2 aggressively builds mitochondrial density and red blood cell count',
                },
                {
                  label: 'Strength',
                  activity: 'Dumbbell Goblet Squats 3×12, Weighted Walking Lunges 3×12 per leg, Romanian Deadlifts 3×10, Weighted Calf Raises 3×15 (2-sec hold at top), Three-Way Plank Variations 3×45 sec per angle.',
                },
              ],
            },
            {
              phase: 'ACTIVE / AMATEUR PROGRAM — WEEKS 5–8',
              title: 'Eccentric Overload & Knee Resilience',
              description: 'Forces eccentric quad adaptation to protect your knee joints during massive multi-hour downslope drops like descending from Thorong La Pass or dropping back down to the Dudh Koshi river floor.',
              days: [
                {
                  label: 'Cardio',
                  activity: 'One 45-min HIIT stairmaster session (2 min fast / 2 min recovery) + one 60-min weighted trail rucking + one weekend 4-hr technical trail hike with 8–10 kg pack.',
                },
                {
                  label: 'Strength',
                  activity: 'Weighted Step-Ups (12–14" box) 3×12 per leg — take 3 full seconds to lower on every rep. Explosive Jump Squats 3×12. Single-Leg RDLs 3×8 per leg.',
                  note: 'The 3-second lowering tempo is what builds eccentric braking power — do not skip it',
                },
              ],
            },
            {
              phase: 'ACTIVE / AMATEUR PROGRAM — WEEKS 9–12',
              title: 'Peak Tactical Simulation & Strategic Taper',
              description: 'Maintain structural loads through Weeks 9–10. Cut volume by 50% in Week 11. Transition to pure mobility and complete rest in Week 12.',
              days: [
                {
                  label: 'Cardio',
                  activity: 'Two 60-min simulated step-climbing or heavy incline sessions with 10–12 kg pack — simulating extra cold-weather gear and emergency fluids.',
                },
                {
                  label: 'Day 1',
                  activity: '5-hr steep mountain trail walk with full pack weight.',
                },
                {
                  label: 'Day 2',
                  activity: '3-hr trail climb early the next morning with the same pack weight.',
                  note: 'Back-to-back block — directly conditions your body to function on heavily pre-fatigued muscles',
                },
                {
                  label: 'Wk 11',
                  activity: 'Cut all sets and reps by 50%.',
                },
                {
                  label: 'Wk 12',
                  activity: 'Pure mobility, stretching, and complete systemic rest only.',
                },
              ],
            },
          ],
          training_tracks: [
            {
              label: 'Beginner track',
              description: 'Choose your track based on your current fitness level. Both programs are 12 weeks and designed specifically for high-altitude trekking up to 5,400m.',
              phases: [],
            },
            {
              label: 'Active / fit track',
              description: 'For regular gym-goers, runners, lifters, or individuals with a consistent fitness background. Goal: convert general fitness into single-leg stability, eccentric strength, and high-altitude endurance.',
              phases: [
                {
                  phase: 'WEEKS 1–4 · UNILATERAL STABILITY & AEROBIC VOLUME',
                  title: 'Converting fitness to mountain-ready',
                  description: 'Active individuals must quickly build single-leg stability and high-altitude blood-oxygen transport efficiency.',
                  days: [
                    { label: 'Zone 2 ×2', activity: '45-min conversational run, row, or cycling session — builds mitochondrial density and red blood cell count' },
                    { label: 'Incline ×1', activity: '60-min treadmill walk at 10% continuous grade with 6 kg pack' },
                    { label: 'Strength', activity: 'Dumbbell Goblet Squats 3×12, Weighted Walking Lunges 3×12 per leg, Romanian Deadlifts 3×10, Weighted Calf Raises 3×15 (2-sec hold), Three-Way Plank 3×45 sec per angle' },
                  ],
                },
                {
                  phase: 'WEEKS 5–8 · ECCENTRIC OVERLOAD & KNEE RESILIENCE',
                  title: 'Protecting your knees on the descents',
                  description: 'Descending from Thorong La or back down the Dudh Koshi river destroys untrained knees. Eccentric loading is the fix.',
                  days: [
                    { label: 'HIIT', activity: '45-min stairmaster — alternate 2 min fast tempo and 2 min recovery pacing' },
                    { label: 'Ruck', activity: '60-min weighted trail rucking session' },
                    { label: 'Weekend', activity: '4-hr technical trail hike over rolling terrain with 8–10 kg pack' },
                    { label: 'Strength', activity: 'Weighted Step-Ups (12–14" box) 3×12 per leg — 3-sec lowering. Jump Squats 3×12. Single-Leg RDLs 3×8 per leg.', note: '3-second lowering tempo — do not skip this' },
                  ],
                },
                {
                  phase: 'WEEKS 9–12 · PEAK SIMULATION & TAPER',
                  title: 'Back-to-back blocks and full recovery',
                  description: 'Cut volume 50% in Week 11. Pure mobility and rest in Week 12. Body must arrive fresh.',
                  days: [
                    { label: 'Cardio ×2', activity: '60-min step-climbing or incline treadmill with 10–12 kg pack' },
                    { label: 'Day 1', activity: '5-hr steep mountain trail walk — full pack weight' },
                    { label: 'Day 2', activity: '3-hr trail climb next morning — same pack weight', note: 'Back-to-back block mirrors consecutive high-altitude trekking days' },
                    { label: 'Wk 11', activity: 'Cut all sets/reps by 50%' },
                    { label: 'Wk 12', activity: 'Mobility, stretching, and complete rest only' },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 'nutrition',
        label: 'Nutrition',
        content: {
          nutrition: {
            panels: [
              {
                heading: 'During Preparation at Home',
                items: [
                  {
                    title: 'Protein Synthesis',
                    body: 'Consume 1.4 to 2.0 grams of protein per kilogram of body weight daily to repair damaged muscle fibers as your training and pack weight scale up.',
                  },
                  {
                    title: 'Glycogen Management',
                    body: 'Prioritize high-quality complex carbohydrates — oats, brown rice, sweet potatoes, quinoa. Increase carbohydrate intake by 20% the night before and the morning of your long weekend simulation hikes.',
                  },
                  {
                    title: 'Hydration Habituation',
                    body: 'Drink 35 ml of water per kilogram of body weight daily. Training in a dehydrated state forces your heart to work significantly harder to pump thick blood.',
                  },
                ],
              },
              {
                heading: 'On-Trail High-Altitude Protocol',
                description: 'Once you cross 3,000m on any of these circuits, your basal metabolic rate increases drastically due to constant systemic stress from cold weather and hypoxia. Carbohydrates become your primary fuel while appetite is suppressed — requiring caloric density.',
                items: [
                  {
                    title: 'Carbohydrates — The Non-Negotiable Fuel',
                    body: 'At high altitudes, burning fat requires more oxygen than burning carbohydrates. Your body needs carbs to survive. Rely heavily on calorie-dense carbs served at high-altitude tea houses: porridge, rice plates, pasta, and potatoes.',
                  },
                  {
                    title: 'Protein Balance',
                    body: 'Eat clean protein options like eggs, bean or lentil stews, or cheese at every stop. Bring high-quality protein bars from home to preserve muscle tissue over consecutive days of heavy climbing.',
                  },
                  {
                    title: 'Micro-Snacking for Appetite Loss',
                    body: 'Extreme altitude suppresses hunger hormones. When large meals look unappealing, force-feed small calorie-dense snacks every 60 minutes on the trail — nuts, peanut butter packets, chocolate, and dried fruit.',
                  },
                ],
              },
            ],
          },
        },
      },
    ],
  },

  'extreme-high-altitude-treks': {
  title: 'Nepal Himal Adventures',
  subtitle: 'Preparation guide',
  stats: [
    { label: 'Max elevation',  value: '5,535m'    },
    { label: 'Difficulty',     value: 'Very Strenuous' },
    { label: 'Best seasons',   value: 'Mar / Oct' },
    { label: 'Trek types',     value: '5 routes'  },
  ],
  sections: [
    {
      id: 'overview',
      label: 'Overview',
      content: {
        panels: [
          {
            heading: 'Extreme Alpine Hydration Protocol',
            description: 'The atmosphere above 4,500 meters is exceptionally cold and dry. Your lungs must work twice as fast, causing you to lose massive amounts of water purely through respiration.',
            items: [
              {
                title: 'Daily Target:',
                body: 'Drink 4.5 to 5.5 liters of fluids daily. Combine clean water with hot lemon water, garlic soup (highly recommended locally for circulation), and non-caffeinated herbal teas.',
              },
              {
                title: 'Electrolyte Saturation:',
                body: 'Plain water alone can dangerously dilute your blood sodium levels (hyponatremia) when sweating under intense UV sun exposure. Ensure at least 2 liters of your daily intake contains oral rehydration salts or high-sodium electrolyte tablets.',
              },
              {
                title: 'Water Sanitation Safety:',
                body: 'Use a multi-stage approach at high altitudes (such as a hollow-fiber filter followed by chlorine dioxide tablets) or rely strictly on rolling-boiled water from tea houses. Never drink unpurified glacial melt or stream water.',
              },
            ],
          },
          {
            heading: 'Critical High-Altitude Risks to Manage',
            items: [
              {
                title: 'AMS, HAPE, and HACE at Extreme Elevations:',
                body: 'These itineraries consistently cross dangerous altitude thresholds, peaking at places like Renjo La (5,360m), Cho La (5,420m), Kongma La (5,535m), Thorong La (5,416m), or Kang La (5,320m). Monitor yourself constantly for Acute Mountain Sickness (AMS) signals: severe throbbing headaches, vomiting, loss of coordination, or a dry cough. If ignored, this can advance rapidly to deadly HAPE or HACE. The absolute rule of the mountains stands: never ascend with symptoms; if they worsen, immediate descent is your only option.',
              },
              {
                title: 'Ankle Inversion & Moraine Instability (Ligament Failure):',
                body: 'Crossing the rolling debris of changing glaciers (like the Ngozumpa Glacier below Gokyo or the Khumbu Glacier) requires walking over shifting boulders and hidden ice. If your ankle stabilizers tire out, a bad misstep can snap ligaments or fracture bones far from medical evacuation. High-top trekking boots with rigid ankle support and dual trekking poles are non-negotiable safety items.',
              },
              {
                title: 'Hypothermia-Induced Frostbite & Thermal Shock:',
                body: 'High passes are prone to violent, sudden microclimate changes---blizzard conditions, biting winds, and sub-zero temperatures can roll in within 15 minutes. If your base layers are soaked with sweat from a hard uphill climb, the wind will cause rapid cooling. You must layer with high-wicking synthetics, a heavy down jacket, and a fully waterproof, windproof hard shell kept at the very top of your pack.',
              },
              {
                title: 'High-Altitude Snow Blindness (UV Keratitis):',
                body: 'At 5,000 meters, the thin atmosphere offers minimal protection from UV rays, and snow accumulation on passes reflects up to 80% of that radiation directly back into your eyes. Walking across a pass or glacier without Category 3 or Category 4 polarized sunglasses can cause temporary, agonizing blindness within hours.',
              },
              {
                title: 'Severe Gastrointestinal Infections (Dehydration Catalyst):',
                body: 'A gut infection at extreme altitudes is a critical emergency. The combination of vomiting or diarrhea with high-altitude hypoxia can cause rapid, life-threatening dehydration in under 12 hours. Always sanitize your hands before touching food, avoid raw vegetables on the trail, and carry a dedicated medical kit with loperamide, rehydration salts, and azithromycin.',
              },
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
            phase: 'Complete Beginner Program',
            title: 'Weeks 1--4: Structural Incline & Ankle Stabilization',
            description: 'The priority is preparing your tendons, ligaments, and deep core muscles to handle heavy load variations on uneven, shifting surfaces while building a baseline aerobic foundation.',
            days: [
              {
                label: 'Cardio Focus (3x/week):',
                activity: '40-minute walks performed exclusively on a treadmill set to a continuous 6--8% incline or on local steep hills. Maintain a steady, rhythmic breathing pattern. No flat-ground training.',
              },
              {
                label: 'Strength Focus (2x/week --- Non-consecutive days):',
                activity: 'Bodyweight Deep Squats: 3 sets of 12 reps (Focus on holding the bottom position for 1 second to build joint tolerance). Single-Leg Balance Matrix: Stand on one leg on a pillow or soft mat for 45 seconds per side. (Crucial for building the micro-stabilizers in your ankles needed for loose moraine). Floor Glute Bridges: 3 sets of 15 reps (Activates the hips and glutes to offset lower back strain from a heavy daypack). Forearm Plank: 3 sets of 45 seconds (Builds trunk rigidity).',
              },
            ],
          },
          {
            phase: 'Complete Beginner Program',
            title: 'Weeks 5--8: Loaded Step-Ups & Lateral Strength',
            description: 'This phase transitions your body to handle the relentless, uneven climbing steps required to scale high alpine passes like Cho La or Kang La.',
            days: [
              {
                label: 'Cardio & Backpack Focus (3x/week):',
                activity: 'Two 45-minute sessions on a stairmaster or step-climber at a slow, deliberate "Himalayan pace" (slow and continuous). One weekend outdoor simulation: A 2-hour trail hike wearing your actual trekking daypack loaded with 5 kg of static weight (use water bottles or sand).',
              },
              {
                label: 'Strength Focus (2x/week):',
                activity: 'Step-Ups (8--10 inch box): 3 sets of 15 reps per leg (Directly conditions muscles for high mountain steps). Side Lunges (Lateral Lunges): 3 sets of 10 reps per side (Builds structural strength in the inner/outer thighs to manage stabilizing adjustments on shifting rocks). Calf Raises (Edge of a step): 3 sets of 20 reps (Full range of motion to bulletproof the Achilles tendon). Side Planks: 3 sets of 30 seconds per side.',
              },
            ],
          },
          {
            phase: 'Complete Beginner Program',
            title: 'Weeks 9--12: Peak Pass Volume & Muscular Endurance',
            description: null,
            days: [
              {
                label: 'Cardio & Backpack Focus (3x/week):',
                activity: 'One 60-minute incline treadmill walk (10--12% incline) wearing a 7 kg pack. One mid-week 60-minute fast-paced power walk over variable, hilly outdoor terrain. One weekend outdoor simulation: 3 to 4 hours of continuous hiking on steep trails or stairs with a 7--8 kg pack.',
              },
              {
                label: 'Strength Circuit Focus (2x/week):',
                activity: 'Complete these exercises back-to-back with zero rest to simulate the burning fatigue of climbing a pass rim. Repeat the entire loop 3 times: 15 Bodyweight Squats → 12 Alternating Reverse Lunges → 20 Step-Ups per leg → 25 Calf Raises → 60-second Plank.',
              },
            ],
          },
          {
            phase: 'Amateur / Active Program',
            title: 'Weeks 1--4: Unilateral Loading & Anaerobic Threshold',
            description: 'Active individuals must quickly convert linear fitness into single-leg stability and high-capacity blood-oxygen efficiency to handle long days in the hypoxia zone.',
            days: [
              {
                label: 'Cardio Focus (3x/week):',
                activity: 'Two 50-minute Zone 2 (steady, conversational) running or rowing sessions to maximize mitochondrial adaptation and red blood cell production. One 60-minute incline treadmill power walk (10--12% grade) wearing a 7 kg daypack.',
              },
              {
                label: 'Strength Focus (2x/week):',
                activity: 'Heavy Goblet Squats: 3 sets of 10 reps (Forces core stabilization under load). Weighted Walking Lunges: 3 sets of 12 steps per leg holding dumbbells. Romanian Deadlifts (RDLs): 3 sets of 10 reps (Strengthens hamstrings and glutes for pushing power up steep moraine slopes). Deficit Calf Raises: 3 sets of 15 reps (Holding weight, pause at the bottom stretch to strengthen ankle mobility). Hanging Knee Raises or Pallof Presses: 3 sets of 12 reps (Advanced core stabilization).',
              },
            ],
          },
          {
            phase: 'Amateur / Active Program',
            title: 'Weeks 5--8: Eccentric Deceleration & Multi-Directional Stability',
            description: 'This phase mimics the intense structural demand of descending thousands of vertical meters down steep scree, boulder fields, and ice slopes after conquering a pass.',
            days: [
              {
                label: 'Cardio & Backpack Focus (3x/week):',
                activity: 'One 50-minute high-intensity interval training (HIIT) stairmaster session (Alternate 3 minutes of high-effort climbing with 2 minutes of recovery pacing). One mid-week 60-minute weighed outdoor rucking session on local trails. One weekend outdoor simulation: 4 to 5 hours of technical trail hiking with significant elevation changes, carrying a 10 kg pack.',
              },
              {
                label: 'Strength Focus (2x/week):',
                activity: 'Weighted Step-Ups (14--16" box): 3 sets of 12 reps per leg holding dumbbells. Strict Tempo: Take 3 to 4 seconds to lower your foot back to the ground on every single rep to condition your quadriceps for downhill braking. Single-Leg Romanian Deadlifts: 3 sets of 8 reps per leg (Forces ankles, knees, and hips to stabilize balance on uneven, simulated ground). Skater Hops / Lateral Bounds: 3 sets of 12 reps total (Builds explosive joint protection against sudden slips on loose shale).',
              },
            ],
          },
          {
            phase: 'Amateur / Active Program',
            title: 'Weeks 9--12: Peak Tactical Block & Strategic Taper',
            description: 'Cut total workout volume by 50% in Week 11, and transition to pure mobility flows, hip openers, and complete rest in Week 12.',
            days: [
              {
                label: 'Cardio & Backpack Focus (3x/week):',
                activity: 'Two 60--75 minute simulated step or steep incline treadmill sessions wearing a peak 12--14 kg training weight (conditioning your frame for heavy layers, massive water volume, and technical gear).',
              },
              {
                label: 'The Back-to-Back Shock Block:',
                activity: 'Weekend Hike Day 1: 5 to 6 hours of technical trail walking with full pack load. Weekend Hike Day 2: 3 to 4 hours of steep climbing early the next morning with the exact same pack weight. This conditions your central nervous system to push through deep, cumulative fatigue.',
              },
              {
                label: 'Strength Focus (2x/week):',
                activity: 'Maintain maximum output through Weeks 9 and 10. Cut total workout volume by 50% in Week 11, and transition to pure mobility flows, hip openers, and complete rest in Week 12.',
              },
            ],
          },
        ],
        training_tracks: [
          {
            label: 'Beginner track',
            description: 'For individuals transitioning to technical, high-pass trekking with baseline fitness but no prior high-altitude pass experience. Both programs are 12 weeks.',
            phases: [],
          },
          {
            label: 'Active / fit track',
            description: 'For regular gym-goers, runners, structural lifters, or athletes training for maximum alpine resilience. Goal: convert linear fitness into single-leg stability, eccentric deceleration, and high-altitude endurance.',
            phases: [
              {
                phase: 'WEEKS 1--4 · UNILATERAL LOADING & ANAEROBIC THRESHOLD',
                title: 'Converting fitness to mountain-ready',
                description: 'Active individuals must quickly convert linear fitness into single-leg stability and high-capacity blood-oxygen efficiency for long days in the hypoxia zone.',
                days: [
                  { label: 'Zone 2 ×2', activity: '50-minute conversational run or rowing sessions — maximizes mitochondrial adaptation and red blood cell production' },
                  { label: 'Incline ×1', activity: '60-minute treadmill power walk at 10–12% continuous grade with 7 kg pack' },
                  { label: 'Strength', activity: 'Heavy Goblet Squats 3×10, Weighted Walking Lunges 3×12 per leg, Romanian Deadlifts 3×10, Deficit Calf Raises 3×15 (pause at bottom), Hanging Knee Raises or Pallof Presses 3×12' },
                ],
              },
              {
                phase: 'WEEKS 5--8 · ECCENTRIC DECELERATION & MULTI-DIRECTIONAL STABILITY',
                title: 'Descending thousands of meters safely',
                description: 'Descending steep scree, boulder fields, and ice slopes after conquering a pass destroys untrained knees. Eccentric loading is the fix.',
                days: [
                  { label: 'HIIT', activity: '50-minute stairmaster — alternate 3 min high-effort climbing with 2 min recovery pacing' },
                  { label: 'Ruck', activity: '60-minute weighted outdoor rucking session on local trails' },
                  { label: 'Weekend', activity: '4–5 hour technical trail hiking with significant elevation changes — 10 kg pack' },
                  { label: 'Strength', activity: 'Weighted Step-Ups (14–16" box) 3×12 per leg — 3 to 4 sec lowering tempo. Single-Leg RDLs 3×8 per leg. Skater Hops / Lateral Bounds 3×12 total reps.', note: 'Slow lowering tempo builds eccentric braking power for downhill descents' },
                ],
              },
              {
                phase: 'WEEKS 9--12 · PEAK TACTICAL BLOCK & STRATEGIC TAPER',
                title: 'Back-to-back shock block and full recovery',
                description: 'Cut volume 50% in Week 11. Pure mobility, hip openers, and complete rest in Week 12. Body must arrive fresh.',
                days: [
                  { label: 'Cardio ×2', activity: '60–75 minute step-climbing or steep incline treadmill with 12–14 kg pack — conditions your frame for heavy layers, massive water volume, and technical gear' },
                  { label: 'Day 1', activity: '5–6 hours technical trail walking — full pack load' },
                  { label: 'Day 2', activity: '3–4 hours steep climbing next morning — same pack weight', note: 'Back-to-back shock block — conditions CNS to push through deep cumulative fatigue' },
                  { label: 'Wk 11', activity: 'Cut all sets/reps by 50%' },
                  { label: 'Wk 12', activity: 'Pure mobility flows, hip openers, and complete rest only' },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      id: 'nutrition',
      label: 'Nutrition',
      content: {
        nutrition: {
          panels: [
            {
              heading: 'High-Altitude Nutrition & Hydration Strategy',
              items: [
                {
                  title: '1. Phase One: During Preparation (At Home)',
                  body: 'Protein for Deep Tissue Repair: Consume 1.6 to 2.2 grams of protein per kilogram of body weight daily to reconstruct muscle fibers broken down by weighted stepping and steep descents. Glycogen Optimization: Focus on high-quality, complex carbohydrates. Increase your carb intake by 25% for the 24 hours leading up to your long, back-to-back weekend simulation hikes to train your gut to process fuel under stress. Hydration Baseline: Drink 35--40 ml of water per kilogram of body weight daily. Entering high-volume training blocks dehydrated causes premature muscle cramps and drastically delays recovery.',
                },
                {
                  title: '2. Phase Two: On-Trail High-Altitude Protocol',
                  body: 'Crossing high-altitude passes (5,000m+) or trekking to remote lakes like Tilicho (4,919m) scales up your basal metabolic rate significantly due to freezing ambient temperatures, extreme terrain, and severe hypoxia.',
                },
                {
                  title: 'Carbohydrates (The Essential Oxygen Saver):',
                  body: 'In low-oxygen zones, your body requires less oxygen to convert carbohydrates into energy than it does for fats or proteins. Do not restrict carbs. Eat massive, clean portions of local high-altitude fuel: Dal Bhat (lentils and rice), potatoes, garlic pasta, Sherpa stews, and porridge.',
                },
                {
                  title: 'Protein Preservation:',
                  body: 'Keep muscle wasting at bay during multi-week high-pass circuits by consistently eating fresh eggs, chickpea/lentil dishes, yak cheese, or high-density protein bars packed from home.',
                },
                {
                  title: 'Micro-Snacking Against Anorexia (Altitude Appetite Loss):',
                  body: 'Severe elevations disrupt hunger-regulating hormones. You cannot rely on your natural appetite. You must force yourself to eat small, high-calorie snacks (energy gels, nut butter packets, nuts, and dried fruits) every 45 to 60 minutes of movement.',
                },
              ],
            },
          ],
        },
      },
    },
  ],
},

'wilderness-expeditions': {
  title: 'Nepal Himal Adventures',
  subtitle: 'Preparation guide',
  stats: [
    { label: 'Max elevation',  value: '5,360m'    },
    { label: 'Difficulty',     value: 'Extreme' },
    { label: 'Best seasons',   value: 'Mar / Oct' },
    { label: 'Trek types',     value: '6 routes'  },
  ],
  sections: [
    {
      id: 'overview',
      label: 'Overview',
      content: {
        panels: [
          {
            heading: 'Extreme Wilderness Hydration Protocol',
            description: 'The atmosphere in Upper Dolpo and on the high passes of Dhaulagiri is exceptionally cold and desert-dry. Your lungs work twice as fast, causing you to lose massive amounts of water purely through respiration.',
            items: [
              {
                title: 'Daily Target:',
                body: 'Drink 4.5 to 5.5 liters of fluids daily. Combine clean water with hot lemon water, garlic soup (excellent for high-altitude circulation), and non-caffeinated herbal teas provided at camp.',
              },
              {
                title: 'Electrolyte Saturation:',
                body: 'Plain water alone can dangerously dilute your blood sodium levels (hyponatremia) when sweating under intense UV sun exposure. Ensure at least 2 liters of your daily intake contains oral rehydration salts or high-sodium electrolyte tablets.',
              },
              {
                title: 'Water Sanitation Safety:',
                body: 'On camping routes, you are highly dependent on wilderness water sources (glacial streams, rivers). Use a strict multi-stage purification approach (such as a hollow-fiber filter followed by chlorine dioxide tablets) if your crew is not providing rolling-boiled water. Never drink unpurified glacial melt or stream water.',
              },
            ],
          },
          {
            heading: 'Critical High-Altitude & Wilderness Risks to Manage',
            items: [
              {
                title: 'Extreme Isolation & Delayed Medical Evacuation:',
                body: 'Unlike popular tea-house trails (like Everest or Annapurna Base Camp), routes like Upper Dolpo, Kanchenjunga, and the Dhaulagiri Circuit are exceptionally remote. Heli-evacuation can be delayed for days by unpredictable mountain weather, and there are no pharmacies or local clinics. Watch closely for early Acute Mountain Sickness (AMS) indicators (throbbing headaches, loss of appetite, dizziness). If symptoms progress toward HAPE or HACE, you must immediately descend on foot or horse; waiting for a rescue can be fatal.',
              },
              {
                title: 'Ankle Inversion & Moraine Instability (Glacier Travel):',
                body: 'The Dhaulagiri Circuit involves long sections of walking directly on rugged, moving glaciers and sleeping on moraines. Ganja La Pass has a narrow, precarious cliff section that often requires fixed ropes. If your ankle stabilizers tire out, a bad misstep can snap ligaments or fracture bones weeks away from a hospital. High-top trekking boots with rigid ankle support and dual trekking poles are non-negotiable safety items.',
              },
              {
                title: 'Hypothermia-Induced Frostbite in Camping Environments:',
                body: 'Sleeping in a tent at -15C to -30C on snow or rock (such as Dhaulagiri Base Camp or high camps in Upper Dolpo) demands immense physical resilience. If your base layers are soaked with sweat from a hard uphill pass climb, the second you stop walking and enter a freezing tent, your core temperature will plummet. You must change into completely dry, high-wicking synthetic thermals immediately upon reaching camp and use a proper expedition-grade sleeping bag (rated to -20C or lower).',
              },
              {
                title: 'High-Altitude Snow Blindness (UV Keratitis):',
                body: 'At 5,000 meters, the thin atmosphere offers minimal protection from UV rays, and snow accumulation on passes reflects up to 80% of that radiation directly back into your eyes. Walking across passes like Larkya La (5,106m), French Pass (5,360m), or Ganja La (5,122m) without Category 3 or Category 4 polarized wrap-around sunglasses can cause temporary, agonizing blindness within hours.',
              },
              {
                title: 'Severe Gastrointestinal Infections (Dehydration Catalyst):',
                body: 'A gut infection at extreme, isolated wilderness altitudes is a critical emergency. The combination of vomiting or diarrhea with high-altitude hypoxia can cause rapid, life-threatening dehydration in under 12 hours. Always sanitize your hands thoroughly before touching food, avoid unpeeled or raw foods in remote areas, and carry a dedicated medical kit containing loperamide, rehydration salts, and a broad-spectrum antibiotic like azithromycin.',
              },
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
            phase: 'Complete Beginner Program',
            title: 'Weeks 1--4: Deep Incline Loading & Postural Stability',
            description: 'The priority is adapting your connective tissues, lower back, and core to handle daily climbing with a loaded pack while building baseline aerobic capacity.',
            days: [
              {
                label: 'Cardio Focus (3x/week):',
                activity: '45-minute continuous walks performed exclusively on a treadmill set to a 6--8% incline or on steep local hills. Maintain a steady, nasal-breathing pacing. No flat-ground training.',
              },
              {
                label: 'Strength Focus (2x/week --- Non-consecutive days):',
                activity: 'Bodyweight Deep Squats: 3 sets of 12 reps (Hold the bottom position for 2 seconds to build tendon strength around the knees). Floor Glute Bridges: 3 sets of 15 reps (Essential for activating the hips and glutes to prevent lower back pain under pack weight). Standing Calf Raises: 3 sets of 20 reps (Full extension and deep stretch to prepare the lower legs for steep pass inclines). Forearm Plank: 3 sets of 45 seconds (Builds foundational core stiffness).',
              },
            ],
          },
          {
            phase: 'Complete Beginner Program',
            title: 'Weeks 5--8: Weighted Stepping & Multi-Directional Balance',
            description: 'This phase transitions your body to handle the uneven, unpredictable steps found on wild riverbanks, technical moraines, and glacier margins.',
            days: [
              {
                label: 'Cardio & Backpack Focus (3x/week):',
                activity: 'Two 45-minute sessions on a stairmaster or step-climber at a slow, relentless "Himalayan pace." One weekend outdoor simulation: A 2-hour outdoor trail walk wearing your actual trekking daypack loaded with 5--6 kg of static weight (use water bottles or sandbags).',
              },
              {
                label: 'Strength Focus (2x/week):',
                activity: 'Step-Ups (8--10 inch platform): 3 sets of 15 reps per leg (Directly conditions your quads for hours of continuous stepping). Side Lunges (Lateral Lunges): 3 sets of 10 reps per side (Strengthens side-stabilizers to protect against slips on shifting gravel). Single-Leg Balance Matrix: Stand on one leg on a folded towel or pillow for 60 seconds per side (Crucial for building ankle stability on loose rocks). Side Planks: 3 sets of 30 seconds per side.',
              },
            ],
          },
          {
            phase: 'Complete Beginner Program',
            title: 'Weeks 9--12: Peak Endurance Volume & Circuit Loading',
            description: null,
            days: [
              {
                label: 'Cardio & Backpack Focus (3x/week):',
                activity: 'One 60-minute incline treadmill walk (10--12% incline) wearing a 7--8 kg pack. One mid-week 60-minute power walk over highly variable, hilly outdoor terrain. One weekend outdoor simulation: 4 hours of continuous hiking on steep trails or rugged outdoor steps with an 8 kg pack.',
              },
              {
                label: 'Strength Circuit Focus (2x/week):',
                activity: 'Complete these exercises back-to-back with zero rest to simulate the deep muscular burning of scaling high, remote mountain passes. Repeat the full loop 3 times: 15 Bodyweight Squats → 12 Alternating Reverse Lunges → 20 Step-Ups per leg → 25 Calf Raises → 60-second Plank.',
              },
            ],
          },
          {
            phase: 'Amateur / Active Program',
            title: 'Weeks 1--4: Unilateral Loading & Aerobic Capacity',
            description: 'Active individuals must quickly convert general fitness into single-leg endurance and exceptional blood-oxygen transport efficiency to survive 3 to 4 consecutive weeks in remote high-altitude zones.',
            days: [
              {
                label: 'Cardio Focus (3x/week):',
                activity: 'Two 50--60 minute Zone 2 (steady, conversational) running, rowing, or cycling sessions to maximize mitochondrial adaptation and increase red blood cell counts. One 60-minute incline treadmill power walk (10--12% grade) wearing a 7--8 kg daypack.',
              },
              {
                label: 'Strength Focus (2x/week):',
                activity: 'Heavy Goblet Squats: 3 sets of 10 reps (Forces structural trunk stabilization under load). Weighted Walking Lunges: 3 sets of 12 steps per leg holding dumbbells. Romanian Deadlifts (RDLs): 3 sets of 10 reps (Strengthens hamstrings, glutes, and lower back for uphill pushing power). Deficit Calf Raises: 3 sets of 15 reps (Holding weight, pause at the absolute bottom stretch to bulletproof ankle mobility). Hanging Knee Raises: 3 sets of 12 reps (Advanced deep abdominal control).',
              },
            ],
          },
          {
            phase: 'Amateur / Active Program',
            title: 'Weeks 5--8: Eccentric Deceleration & Multi-Day Stamina',
            description: 'This phase focuses on eccentric quad strength---the muscular "braking" mechanism required to drop thousands of vertical meters down punishing, un-tracked passes without destroying your knees.',
            days: [
              {
                label: 'Cardio & Backpack Focus (3x/week):',
                activity: 'One 50-minute high-intensity interval training (HIIT) stairmaster session (Alternate 3 minutes of aggressive climbing with 2 minutes of active recovery pacing). One mid-week 75-minute weighted outdoor rucking session on technical local trails. One weekend outdoor simulation: 5 hours of rugged trail hiking with significant elevation profiles, carrying a 10--12 kg pack.',
              },
              {
                label: 'Strength Focus (2x/week):',
                activity: 'Weighted Step-Ups (14--16" box): 3 sets of 12 reps per leg holding dumbbells. Strict Metric: Take a full 3 to 4 seconds to lower your foot back down to the floor on every rep to build eccentric braking power. Single-Leg Romanian Deadlifts: 3 sets of 8 reps per leg (Forces ankles, knees, and hips to stabilize balance under load on uneven surfaces). Skater Hops / Lateral Bounds: 3 sets of 12 reps total (Builds explosive joint protection against sudden slips on shifting shale or ice).',
              },
            ],
          },
          {
            phase: 'Amateur / Active Program',
            title: 'Weeks 9--12: Peak Shock Block & Strategic Taper',
            description: 'Cut total workout volume by 50% in Week 11, and transition to pure mobility flows, hip openers, and complete systemic rest during Week 12.',
            days: [
              {
                label: 'Cardio & Backpack Focus (3x/week):',
                activity: 'Two 75-minute simulated step or steep incline treadmill sessions wearing a peak 12--14 kg training weight (conditioning your skeletal frame for multi-layered cold gear, heavy water storage, and absolute self-sufficiency).',
              },
              {
                label: 'The Back-to-Back Shock Block:',
                activity: 'Weekend Hike Day 1: 6 hours of technical wilderness trail walking with full pack load. Weekend Hike Day 2: 4 hours of steep climbing early the next morning with the exact same pack weight. This conditions your central nervous system and muscles to perform under severe, cumulative fatigue.',
              },
              {
                label: 'Strength Focus (2x/week):',
                activity: 'Maintain maximum structural loading through Weeks 9 and 10. Cut total workout volume by 50% in Week 11, and transition to pure mobility flows, hip openers, and complete systemic rest during Week 12.',
              },
            ],
          },
        ],
        training_tracks: [
          {
            label: 'Beginner track',
            description: 'For individuals with solid baseline fitness transitioning to multi-week, isolated wilderness camping and high-pass crossings. Both programs are 12 weeks.',
            phases: [],
          },
          {
            label: 'Active / fit track',
            description: 'For regular gym-goers, runners, or athletes training for elite-level endurance on long, isolated, camping-based alpine expeditions. Goal: build single-leg endurance, eccentric deceleration, and multi-day stamina.',
            phases: [
              {
                phase: 'WEEKS 1--4 · UNILATERAL LOADING & AEROBIC CAPACITY',
                title: 'Converting fitness to expedition-ready',
                description: 'Active individuals must quickly convert general fitness into single-leg endurance and exceptional blood-oxygen transport efficiency for 3–4 consecutive weeks in remote high-altitude zones.',
                days: [
                  { label: 'Zone 2 ×2', activity: '50–60 minute conversational run, row, or cycling sessions — maximizes mitochondrial adaptation and increases red blood cell counts' },
                  { label: 'Incline ×1', activity: '60-minute treadmill power walk at 10–12% grade with 7–8 kg pack' },
                  { label: 'Strength', activity: 'Heavy Goblet Squats 3×10, Weighted Walking Lunges 3×12 per leg, Romanian Deadlifts 3×10, Deficit Calf Raises 3×15 (pause at bottom), Hanging Knee Raises 3×12' },
                ],
              },
              {
                phase: 'WEEKS 5--8 · ECCENTRIC DECELERATION & MULTI-DAY STAMINA',
                title: 'Building the braking mechanism',
                description: 'Eccentric quad strength is the muscular "braking" mechanism required to drop thousands of vertical meters down punishing, un-tracked passes without destroying your knees.',
                days: [
                  { label: 'HIIT', activity: '50-minute stairmaster — alternate 3 min aggressive climbing with 2 min active recovery pacing' },
                  { label: 'Ruck', activity: '75-minute weighted outdoor rucking session on technical local trails' },
                  { label: 'Weekend', activity: '5 hours rugged trail hiking with significant elevation profiles — 10–12 kg pack' },
                  { label: 'Strength', activity: 'Weighted Step-Ups (14–16" box) 3×12 per leg — 3 to 4 sec lowering tempo. Single-Leg RDLs 3×8 per leg. Skater Hops / Lateral Bounds 3×12 total reps.', note: 'Slow lowering tempo builds eccentric braking power for steep descents' },
                ],
              },
              {
                phase: 'WEEKS 9–12 · PEAK SHOCK BLOCK & STRATEGIC TAPER',
                title: 'Back-to-back shock block and full recovery',
                description: 'Cut volume 50% in Week 11. Pure mobility, hip openers, and complete rest in Week 12. Body must arrive fresh for wilderness self-sufficiency.',
                days: [
                  { label: 'Cardio ×2', activity: '75-minute step-climbing or steep incline treadmill with 12–14 kg pack — conditions skeletal frame for multi-layered cold gear, heavy water storage, and absolute self-sufficiency' },
                  { label: 'Day 1', activity: '6 hours technical wilderness trail walking — full pack load' },
                  { label: 'Day 2', activity: '4 hours steep climbing next morning — same pack weight', note: 'Back-to-back shock block — conditions CNS and muscles to perform under severe cumulative fatigue' },
                  { label: 'Wk 11', activity: 'Cut all sets/reps by 50%' },
                  { label: 'Wk 12', activity: 'Pure mobility flows, hip openers, and complete systemic rest only' },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      id: 'nutrition',
      label: 'Nutrition',
      content: {
        nutrition: {
          panels: [
            {
              heading: 'Wilderness Expedition Nutrition & Hydration Strategy',
              items: [
                {
                  title: 'During Preparation (At Home)',
                  body: 'Protein for Mass Repair: Consume 1.6 to 2.2 grams of protein per kilogram of body weight daily to rebuild structural muscle fibers broken down by weighted stepping and heavy rucking. Glycogen Habituation: Focus purely on complex carbohydrates. Increase your carb intake by 25% for the 24 hours leading up to your long, back-to-back weekend simulation hikes to train your digestive tract to process fuel under physical stress. Hydration Baseline: Drink 35--40 ml of water per kilogram of body weight daily. Entering high-volume training blocks in a dehydrated state causes premature muscle cramping and severely delays recovery.',
                },
                {
                  title: 'On-Trail Wilderness Strategy (Camping vs. Remote Tea Houses)',
                  body: 'Trekking through extreme wilderness zones like Upper Dolpo, Kanchenjunga, and the Dhaulagiri Circuit radically changes nutrition because you rely on an expedition crew or fixed camp kitchens for long stretches.',
                },
                {
                  title: 'Combating Camp Appetite Fatigue:',
                  body: 'On fully supported camping treks (like Dhaulagiri or Upper Dolpo), meals are fresh but can become logistically monotonous over 25 days. Pack high-flavor, nutrient-dense personal items from home to stimulate eating when altitude suppresses appetite (e.g., premium electrolyte powders, hot sauces, freeze-dried meat snacks, or high-calorie nut packets).',
                },
                {
                  title: 'Carbohydrates (The Essential Oxygen Saver):',
                  body: 'In low-oxygen zones, your body requires less oxygen to convert carbohydrates into energy than it does for fats or proteins. Do not restrict carbs. Eat massive, clean portions of fuel provided by the crew: rice, flatbreads, oats, lentil stews, and potatoes.',
                },
                {
                  title: 'Protein Preservation:',
                  body: 'Keep muscle wasting at bay during long-duration circuits by consistently prioritizing protein sources at camp (eggs, chickpea/lentil dishes, beans) supplemented by your own packed protein bars.',
                },
              ],
            },
          ],
        },
      },
    },
  ],
},

};