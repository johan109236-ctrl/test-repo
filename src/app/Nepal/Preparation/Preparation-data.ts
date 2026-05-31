

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

};