import { TrekData } from './ExpeditionPage';

export const expeditions: Record<string, TrekData> = {
  'tent-peak-abc': {
    title: 'Tent Peak Climbing with Annapurna Base Camp',
    duration: '19 Days',
    difficulty: 'Challenging / Alpine',
    elevation: '5,663 m / 18,579 ft',
    season: 'Spring (Mar–May) & Autumn (Sep–Nov)',
    groupSize: '2 or more',
    activity: 'Trekking / Climbing',
    accommodation: 'Tea House / Hotel & Base Camp (Mini Tented Village)',
    heroImages: ['/assets/images/tent-peak.jpg', '/assets/images/annapurna-base-camp.jpg', '/assets/images/poon-hill.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Expeditions', href: '/Nepal#expeditions' },
      { label: 'Tent Peak Climbing with ABC', href: '#' },
    ],
    description: `Where earth meets sky: trace the sacred trails of the Annapurna Sanctuary to a triumphant summit of Tharpu Chuli (Tent Peak). This 19-day expedition combines a trek into the heart of the Annapurna Sanctuary with a technical ascent of 5,663m.`,
    highlights: [
      'Summit Tharpu Chuli (Tent Peak) at 5,663m',
      'The 360° Amphitheater View of Annapurna I (8,091m), Annapurna South, and sacred Machhapuchhre (Fishtail)',
      'Visit Annapurna Base Camp (4,130m) — the natural amphitheater of giants',
      'The legendary Poon Hill sunrise (3,210m)',
      'Sacred Machhapuchhre (Fishtail Peak) — untouched and revered',
      'Gurung heritage and culture in traditional villages like Ghandruk and Chhomrong',
      'Lush rhododendron forests in full bloom (spring season)',
      'Relax in Jhinu Danda\'s natural hot springs',
    ],
    overview: [
    "The Tent Peak Climbing with Annapurna Base Camp expedition is a spectacular high-altitude journey that combines a trek into the heart of the Annapurna Sanctuary with a technical ascent of Tharpu Chuli (5,663m). The adventure begins with a scenic trek through the rhododendron forests of the Modi Khola valley, passing through Machhapuchhre Base Camp before reaching the natural amphitheater of Annapurna Base Camp (4,130m). A standard 19-day itinerary is essential to facilitate a safe and gradual acclimatization process, allowing the body to adapt to the thin air of the sanctuary before establishing high camps on the glacial moraine of Tent Peak.",

    "Success on this expedition depends on a solid foundation of physical fitness and a willingness to engage with basic mountaineering techniques. While the approach is a classic trek, the ascent of Tent Peak involves navigating across a rubble-covered glacier and climbing steep snow slopes of 45-50 degrees, requiring the use of crampons, an ice axe, and fixed ropes. Logistically, this journey requires the Annapurna Conservation Area Project (ACAP) permit, the TIMS card, and a specific climbing permit issued by the NMA. The ideal windows for the climb are the stable autumn months (October-November) and the vibrant spring season (March-May), and specialized travel insurance covering high-altitude rescue and mountaineering is mandatory.",

    "The 19-day Tent Peak and ABC expedition offers an unparalleled 360-degree immersion into the Annapurna Massif, providing a \"wilder\" climbing experience within one of Nepal's most famous trekking destinations. Starting from the lower foothills, the trail winds through traditional Gurung villages like Chhomrong, where the local culture and hospitality provide a warm contrast to the stark alpine environment ahead. This itinerary is specifically designed to showcase the diverse beauty of the sanctuary, from the lush bamboo forests of the lower valley to the towering south face of Annapurna I (8,091m), which remains your constant, awe-inspiring companion.",

    "The expedition reaches its dramatic climax at the summit of Tent Peak (5,663m), offering a unique vantage point from the center of the sanctuary with views of Annapurna South, Hiunchuli, and the \"fishtail\" peak of Machhapuchhre. This experience is more than a high-altitude feat; it is a profound journey through a sacred landscape, connecting the vibrant life of the foothills to the pristine, glacial silence of the high peaks. The final leg follows a reflective descent back through the valley to the natural hot springs of Jihnu Danda, concluding a world-class mountaineering odyssey that perfectly balances physical triumph with deep natural and cultural immersion.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and private transfer to your hotel. Rest, unpack, and enjoy free time exploring the vibrant streets of Thamel." },
    { day: 2, title: "Kathmandu Sightseeing & Climb Preparation", description: "Morning guided tour of historic city landmarks. Afternoon detailed climbing briefing, medical protocol overview, and a thorough inspection of personal and group mountaineering gear. Welcome dinner at a traditional Nepali restaurant in the evening." },
    { day: 3, title: "Drive to Pokhara (900 m)", description: "Board a comfortable tourist bus early in the morning for a scenic journey heading west out of the Kathmandu Valley. Follow the winding highway alongside the Trishuli and Marsyangdi rivers, passing terraced hillsides and rural towns to arrive at the beautiful lakeside city of Pokhara. (7-8 hours' drive)" },
    { day: 4, title: "Drive to Tikhedhunga & Trek to Ulleri (2,070 m)", description: "Take a morning drive via private vehicle from Pokhara through Nayapul to Tikhedhunga (1,540m). From here, cross a suspension bridge and begin the famous, steep challenge of the Ulleri hill—a sustained climb up more than 3,000 stone steps through local villages to reach Ulleri. (3-4 hours' drive, 2-3 hours trek)" },
    { day: 5, title: "Trek to Ghorepani (2,840 m)", description: "Climb gently through beautiful, dense rhododendron, oak, and pine forests, listening to the sounds of nearby streams and waterfalls. The trail opens into the high ridge settlement of Ghorepani, offering dramatic views of the massive Dhaulagiri and Annapurna massifs. (5-6 hours)" },
    { day: 6, title: "Sunrise Hike to Poon Hill (3,210 m) & Trek to Tadapani (2,610 m)", description: "Pre-dawn hike up to the viewpoint of Poon Hill for an unforgettable sunrise over the snow-capped walls of Dhaulagiri, Nilgiri, Machhapuchhre (Fishtail), and the Annapurnas. Return to the lodge for breakfast, then trek along alpine ridges and through deep forest canyons to Tadapani. (1-2 hours sunrise hike, 6-7 hours trek)" },
    { day: 7, title: "Trek to Chomrong (2,140 m)", description: "Leave Tadapani and descend sharply through lush rhododendron forests into the deep valley of the Kimrong Khola. Cross the suspension bridge, climb up the opposite side of the valley, and traverse a scenic path to enter the large, terraced Gurung village of Chomrong, situated directly beneath Machhapuchhre. (5-6 hours)" },
    { day: 8, title: "Trek to Dovan (2,600 m)", description: "Descent the long stone staircase out of Chomrong to cross the Chomrong Khola, then climb steeply through beautiful bamboo and oak forests past Sinuwa. Follow the high trail into the deep, forested gorge of the Modi Khola valley to reach Dovan. (5-6 hours)" },
    { day: 9, title: "Trek to Deurali (3,230 m)", description: "Trek steadily uphill through the dense bamboo forests of the sanctuary's lower bottleneck. Pass the Hinku Cave, watching the vegetation thin out as you climb past Himalaya Hotel and enter the sub-alpine valley landscape near the glacial riverbanks at Deurali. (4-5 hours)" },
    { day: 10, title: "Trek to Annapurna Base Camp (4,130 m)", description: "Trek past Machhapuchhre Base Camp (3,700 m) where the canyon wall breaks open into the dramatic, wide glacier amphitheater of the Annapurna Sanctuary. Walk a final, gradual uphill trail alongside the south glacier to reach Annapurna Base Camp, surrounded by a 360-degree wall of giant 7,000 and 8,000-meter peaks. (5-6 hours)" },
    { day: 11, title: "Trek to Tharpu Chuli / Tent Peak Base Camp (4,400 m)", description: "Leave the main trekking trails behind and step onto the raw glacier floor. Descend onto the dynamic South Annapurna Glacier moraine, navigate across the shifting rock and ice terrain, and complete a steady, rugged climb up the opposite slopes to establish your tents at Tent Peak Base Camp. (5-6 hours)" },
    { day: 12, title: "Move to High Camp (5,000 m)", description: "A challenging, high-altitude carry up a steep ridge line over loose rock, grass, and scree. Establish your high-perched tent camp. Spend the afternoon hydrating, inspecting your harnesses, double boots, and crampons, and reviewing safety ropes for the upcoming summit push. (3-4 hours)" },
    { day: 13, title: "Summit Day: Tent Peak / Tharpu Chuli (5,695 m) & Return to Base Camp", description: "The Ultimate Objective: Wake around midnight for a 1:00-2:00 AM alpine start. Climb across the rocky ridge lines and step onto the snow glacier fields, utilizing rope teams. Navigate the crevasses and scale a final, steep snow wall using fixed lines to step onto the sharp, pointed peak of Tent Peak. Enjoy spectacular views from the center of the Sanctuary before carefully descending back to High Camp for a hot drink, then continue down to Base Camp. (9-10 hours)" },
    { day: 14, title: "Trek to Deurali (3,230 m)", description: "Pack up your personal gear at Base Camp, say goodbye to the mountain, and re-cross the dynamic South Annapurna Glacier moraine. Pass through Annapurna Base Camp and begin a long, oxygen-rich descent down valley alongside the Modi Khola to reach Deurali. (6-7 hours)" },
    { day: 15, title: "Trek to Chomrong (2,140 m)", description: "Retrace your steps down valley, descending through the bamboo and rhododendron forests past Bamboo and Sinuwa. Drop down to the riverbed before climbing the final, steep stone staircase back into the comfortable settlement of Chomrong. (6-7 hours)" },
    { day: 16, title: "Trek to Ghandruk (1,940 m)", description: "Follow a scenic trail that splits away from the main sanctuary path, heading through the beautiful, stone-paved terraced farmlands of the Gurung people. Arrive at Ghandruk, a large and culturally rich traditional village featuring classic slate-roofed houses and beautiful views of Annapurna South. (5-6 hours)" },
    { day: 17, title: "Drive to Pokhara via Siwai", description: "Complete a short, pleasant downhill walk through the lower sections of Ghandruk to reach the road head at Siwai. Meet your private vehicle for a scenic drive out of the foothills, returning to your lakeside hotel in Pokhara for hot showers and a celebratory evening. (3-4 hours' drive)" },
    { day: 18, title: "Drive to Kathmandu (1,400 m)", description: "Board a comfortable tourist bus in the morning to retrace the highway route back through the scenic foothills and along the river valleys into the Kathmandu Valley. Private transfer to your hotel. (7-8 hours' drive)" },
    { day: 19, title: "Departure", description: "Final breakfast at the hotel and a private transfer to Tribhuvan International Airport for your international flight home." }
  ],
    ctaText: 'Tent Peak with ABC',
  },
  'everest-base-camp-lobuche-east': {
    title: 'Everest Base Camp & Lobuche East',
    duration: '19 Days',
    difficulty: 'Challenging / Semi-Technical',
    elevation: '6,119 m / 20,070 ft',
    season: 'Spring (Mar–May) & Autumn (Sep–Nov)',
    groupSize: '2 or more',
    activity: 'Strenuous Trekking / Moderate Technical Climbing',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/everestbasecamp1.jpg', '/assets/images/everestbasecamp2.jpg', '/assets/images/lobuche1.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Expeditions', href: '/Nepal#expeditions' },
      { label: 'Everest Base Camp & Lobuche East', href: '#' },
    ],
    description: `The Khumbu Double Crown: A premier progression from the world's most historic base camp to a 6,000-meter alpine summit. This 19-day expedition combines the legendary Everest Base Camp trek with a technical ascent of Lobuche East (6,119m).`,
    highlights: [
      'Summit Lobuche East at 6,119m — a world-class mountaineering achievement',
      'The Grand Stand of the Giants — panoramic views of Everest, Lhotse, Nuptse, Makalu, Cho Oyu, and Ama Dablam',
      'Visit the world\'s greatest base camp at 5,364m',
      'The masterpiece vantage point of Kala Patthar (5,550m)',
      'Pre-climb glacier training academy',
      'Spiritual sanctuary of Tengboche Monastery (3,867m)',
      'Explore the vibrant Sherpa hub of Namche Bazaar (3,440m)',
    ],
    overview: [
    "The Everest Base Camp and Lobuche East expedition is a prestigious high-altitude challenge that combines the world's most famous trek with a technical 6,000m summit. The journey begins with a flight to Lukla (2,846m) and follows the legendary Khumbu trail toward Everest Base Camp (5,364m) and Kala Patthar (5,545m) before shifting focus to the ultimate objective: the 6,119m summit of Lobuche East. A standard 18-to-20-day itinerary is essential to ensure a robust acclimatization profile, utilizing the trek to Base Camp as a natural \"training phase\" to prepare the body for the technical demands of the peak.",

    "Success on this dual-objective mission depends on elite-level physical conditioning, focusing on cardiovascular endurance and lower-body strength at least 4 months before arrival. The terrain is exceptionally diverse, transitioning from rocky glacial moraines to steep, technical ice and snow sections that require professional mountaineering boots, crampons, and harness systems. Logistically, this expedition requires the Sagarmatha National Park permit, the Khumbu local permit, and a specific NMA climbing permit for Lobuche. The ideal windows for the climb are the stable post-monsoon months (October-November) and the clear pre-monsoon season (March-May), and comprehensive insurance covering high-altitude rescue is an absolute necessity.",

    "The 20-day Everest Base Camp and Lobuche East trek is an iconic journey that offers a more adventurous and technical alternative to the standard trekking route. Starting in the bustling Sherpa hub of Namche Bazaar, the trail winds through high-altitude monasteries and ancient villages before reaching the edge of the Khumbu Glacier. This itinerary is specifically designed to maximize performance, using the nights spent at Gorak Shep to build red blood cell counts before moving to the secluded Lobuche High Camp for the final technical summit push.",

    "The expedition reaches its dramatic climax at the summit of Lobuche East (6,119m), providing one of the most spectacular vantage points in the world, with a direct line of sight to Everest, Lhotse, Nuptse, and Ama Dablam. This experience is more than a high-altitude feat; it is a profound journey that bridges the gap between trekking and true mountaineering, connecting the historical legacy of the Everest trail with the physical triumph of a Himalayan peak. The final leg follows a triumphant descent back through the Pheriche Valley, concluding a world-class mountaineering odyssey that balances cultural immersion with a significant alpine achievement.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and private transfer to your hotel. Rest, unpack, and enjoy your free time exploring the vibrant streets of Thamel." },
    { day: 2, title: "Kathmandu Sightseeing & Trek Preparation", description: "Morning guided tour of historic city landmarks (such as Pashupatinath, Boudhanath, or Swayambhunath). Afternoon comprehensive briefing, medical protocol orientation, and a thorough gear check. Welcome dinner at a traditional Nepali restaurant in the evening before an early sleep." },
    { day: 3, title: "Fly to Lukla & Trek to Phakding (2,610 m)", description: "Catch an early morning 35-minute flight from Kathmandu (or a 20-minute flight from Manthali/Ramechhap following a 5-to-6-hour drive) to Lukla (2,840 m). Meet your trekking crew, organize your duffel bags, and begin your journey with a gentle 3-to-4-hour downhill and flat trek to Phakding." },
    { day: 4, title: "Trek to Namche Bazaar (3,440 m)", description: "Follow the trail beside the Dudh Koshi River, crossing several high suspension bridges. Complete your first major, steep uphill climb through pine forests to reach the bustling Sherpa capital of Namche Bazaar. (5-6 hours)" },
    { day: 5, title: "Namche Bazaar Rest Day (Acclimatization)", description: "A mandatory acclimatization day. Take a scenic morning hike up to the Hotel Everest View (3,962m) for your first stunning panoramas of Everest, Lhotse, and Ama Dablam. Return to Namche to spend the afternoon resting and sleeping low." },
    { day: 6, title: "Trek to Tengboche Monastery (3,860 m)", description: "Follow a scenic ridge trail before descending to the riverbed for lunch at Phunki Tenga. Complete a steady afternoon climb through rhododendron forests to reach the famous ridge-top Tengboche Monastery, framed by Ama Dablam. (5-6 hours)" },
    { day: 7, title: "Trek to Dingboche (4,410 m)", description: "Descend through beautiful conifer and birch woods to cross the Imja Khola. Walk past the upper alpine village of Pangboche and advance into the wide, stone-walled valley plains of Dingboche. (5-6 hours)" },
    { day: 8, title: "Chukhung Valley Day Hike (Acclimatization)", description: "To safely prepare your body for higher elevations, take a rewarding day hike up the Chukhung Valley to 4,730m. Enjoy close-up views of Island Peak and the Lhotse face before returning to Dingboche to rest and sleep low. (4-5 hours round trip)" },
    { day: 9, title: "Trek to Lobuche (4,930 m)", description: "Ascend the broad valley floor before climbing the steep moraine to Thukla. Pause at the emotional Chukpo Lari memorial plateau, dedicated to fallen climbers, before continuing alongside the lateral moraine of the Khumbu Glacier to Lobuche. (5-6 hours)" },
    { day: 10, title: "Trek to Everest Base Camp (5,364 m) & Return to Gorak Shep (5,164 m)", description: "Trek across rugged glacial debris and undulating moraine to the final outpost of Gorak Shep. Drop your heavy packs, rest briefly, and complete the rocky trail to Everest Base Camp. Stand among the ice pinnacles at the foot of the Khumbu Icefall before returning to Gorak Shep for the night. (7-8 hours total)" },
    { day: 11, title: "Hike Kala Patthar (5,555 m) & Trek down to Lobuche (4,930 m)", description: "Embark on a rigorous pre-dawn climb up Kala Patthar for the absolute finest sunrise view over Mount Everest's summit ridge. Descend to Gorak Shep for breakfast, then trek back down valley along the glacier moraine to sleep at the guesthouses in Lobuche. (5-6 hours total)" },
    { day: 12, title: "Trek to Lobuche East Base Camp (4,950 m)", description: "Leave the main trekking route on a 5-to-6-hour hike to Lobuche East Base Camp. Settle into your tented wilderness camp, meet your climbing guides for a detailed strategy briefing, and inspect your technical expedition gear. Rest early to prepare for the mountain." },
    { day: 13, title: "Move to Lobuche High Camp (5,400 m)", description: "A short but demanding carry over steep rocky terrain and slabs to establish your high-perched camp on the ridge line. Spend the afternoon hydrating, resting inside your tents, and completing a practical review of your crampon and fixed-rope techniques before sleeping high." },
    { day: 14, title: "Summit Day: Lobuche East (6,119 m) & Return to Base Camp", description: "The Ultimate Objective: Wake around midnight for a 2:00-3:00 AM alpine start. Clip into the fixed ropes to scale the steep, exposed snow and ice headwall. Follow the spectacular ridge line to step onto the summit of Lobuche East as dawn breaks over the Himalaya. Carefully descend back to High Camp for a hot drink, then continue down to Base Camp. (10-11 hours)" },
    { day: 15, title: "Climbing Weather Contingency / Buffer Day", description: "A built-in reserve day at the mountain. If bad weather delays your summit attempt on Day 14, this day ensures a secondary climbing window. Alternatively, it serves as a valuable rest and physical recovery day after a successful summit." },
    { day: 16, title: "Trek to Pangboche (3,930 m)", description: "Pack up your personal gear at Base Camp, say goodbye to the peak, and begin a rewarding descent from the high altitudes. Take a steady, measured pace as your legs will be tired from the summit push, crossing the lower alpine valleys to reach Pangboche. (6-7 hours)" },
    { day: 17, title: "Trek to Namche Bazaar (3,440 m)", description: "Retrace your steps down valley. Climb briefly back up to Tengboche Monastery before descending steeply to the valley floor. Cross the suspension bridges and traverse the panoramic hillside trail to return to Namche Bazaar for a celebratory meal. (6-7 hours)" },
    { day: 18, title: "Trek to Lukla (2,840 m)", description: "Complete your final day on the trail. Descend the long Namche hill, retrace your steps along the Dudh Koshi Valley through Phakding, and make a final uphill push to Lukla. Celebrate a safe and successful peak climb with your entire team. (5-6 hours)" },
    { day: 19, title: "Fly back to Kathmandu (1,400 m)", description: "Catch an early morning 35-minute flight from Lukla back to Kathmandu (or via Ramechhap with a 5-to-6-hour drive). Private vehicle transfers will take you to your hotel. Share memories during a celebratory farewell dinner in the capital." },
    { day: 20, title: "Final Departure", description: "Enjoy your final breakfast at the hotel before your private transfer to Tribhuvan International Airport for your flight home." }
  ],
    ctaText: 'EBC & Lobuche East',
  },

  'pisang-peak': {
    title: 'Pisang Peak Climbing',
    duration: '15 Days',
    difficulty: 'Challenging / Non-Technical',
    elevation: '6,091 m / 19,980 ft',
    season: 'Spring (Mar–May) & Autumn (Sep–Nov)',
    groupSize: '2 or more',
    activity: 'Trekking / Moderate Climbing',
    accommodation: 'Tea House / Hotel & Base Camp (Mini Tented Village)',
    heroImages: ['/assets/images/pptl1.jpg', '/assets/images/pptl2.jpeg', '/assets/images/pp3.jpeg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Expeditions', href: '/Nepal#expeditions' },
      { label: 'Pisang Peak Climbing', href: '#' },
    ],
    description: `One of the most accessible 6,000m summits in the Annapurna region, Pisang Peak offers the perfect "sightseeing peak" for aspiring mountaineers. This 15-day expedition follows the scenic Annapurna Circuit trail to the 6,091m summit.`,
    highlights: [
      'Summit Pisang Peak (6,091m) — the Pyramid Summit of the Annapurna region',
      'The "Double High" Experience — unparalleled mountain views',
      'The Gates to Heaven (Swarga Dwari)',
      'A bird\'s-eye view of the entire Annapurna Massif',
      'Upper Pisang cultural immersion in traditional Tibetan-Buddhist villages',
      'Sacred Muktinath Temple — a pilgrimage site for Hindus and Buddhists',
      'The high-altitude desert of Mustang',
    ],
    overview: [
    "The Pisang Peak Climbing expedition is widely considered one of the most accessible 6,000m summits in the Annapurna region, making it an ideal \"sightseeing peak\" for aspiring mountaineers. The journey typically begins with a drive to Chame (2,670m) or Dharapani and follows the scenic Annapurna Circuit trail toward the 6,091m summit. A 15-day itinerary is perfectly structured to ensure safety, providing essential acclimatization days in the upper villages of the Manang Valley to prepare your body for the steep, uniform snow slopes of the mountain's western flank.",

    "Success on this climb depends on solid cardiovascular fitness and lower-body endurance, with training recommended to start at least 3 months before departure. While the route is categorized as non-technical, the final ascent involves a steep snow headwall of approximately 45-50 degrees, requiring the use of crampons, an ice axe, and fixed ropes. Logistically, this trek requires an NMA climbing permit, the Annapurna Conservation Area Project (ACAP) permit, and a TIMS card. The ideal windows for a successful summit are the stable post-monsoon months (October-November) and the vibrant pre-monsoon season (March-May), and comprehensive travel insurance covering high-altitude rescue is an absolute necessity.",

    "The 15-day Pisang Peak expedition offers a unique blend of high-altitude adventure and the classic cultural immersion of the Annapurna Circuit. Starting through the deep pine forests and dramatic curved rock faces of the Marsyangdi River valley, the trail opens to the arid, Tibetan-influenced landscapes of Upper Pisang. This itinerary is specifically designed to showcase the diverse beauty of the Manang district, keeping the massive, ice-capped summits of the Annapurna Massif and Gangapurna as your constant, towering companions throughout the approach.",

    "The trek reaches its rewarding climax at the summit of Pisang Peak (6,091m), where climbers are treated to a spectacular 360-degree panorama of the Damodar Himalaya and the Annapurna range. This experience is more than a physical achievement; it is a profound crossing of ecological zones, from lush subtropical hills to the stark, windswept beauty of the high-alpine glaciers. The final leg follows a reflective journey over the Thorong La Pass (5,416m) and down to the sacred temples of Muktinath, concluding a world-class Himalayan odyssey that balances the thrill of the summit with deep spiritual discovery.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,350 m)", description: "Airport pick-up and private transfer to your hotel. Rest, unpack, and enjoy free time exploring the vibrant streets of Thamel." },
    { day: 2, title: "Kathmandu Sightseeing & Climb Preparation", description: "Morning guided tour of historic city landmarks. Afternoon detailed climbing briefing, medical protocol overview, and a thorough inspection of personal and group gear. Welcome dinner at a traditional Nepali restaurant in the evening." },
    { day: 3, title: "Drive from Kathmandu to Dharapani (1,860 m)", description: "Depart Kathmandu early in a private 4WD vehicle for a scenic, long journey. Drive alongside the Trishuli and Marsyangdi rivers, eventually transitioning to a rugged mountain road that enters the gorges of the Annapurna region to reach Dharapani, where the trail meets the Manaslu Circuit route. (8-10 hours drive)" },
    { day: 4, title: "Trek from Dharapani to Chame (2,670 m)", description: "Trek uphill through dense pine, fir, and rhododendron forests, climbing steeply past Timang village for your first grand views of Lamjung Himal. Continue along the riverbank to reach Chame, the administrative hub of the Manang district. (5-6 hours)" },
    { day: 5, title: "Trek from Chame to Upper Pisang (3,300 m)", description: "Walk through a narrowing river valley flanked by dramatic rock walls, including the towering, curved rock face of Paungda Danda. The landscape becomes noticeably drier and more alpine as you enter Upper Manang and arrive at the traditional stone village of Upper Pisang. (5-6 hours)" },
    { day: 6, title: "Acclimatization Day in Upper Pisang (3,300 m)", description: "A dedicated rest day to adapt to the altitude before moving onto the mountain. Spend the day exploring the traditional houses of Upper Pisang, visiting its prominent Tibetan Buddhist monastery, and taking short hikes to enjoy panoramic views of Annapurna II and III." },
    { day: 7, title: "Trek to Pisang Peak Base Camp (4,380 m)", description: "Leave the main Annapurna Circuit trail and begin a steady, steep uphill climb toward the mountain. The trail winds through thin pine and juniper forests before opening up into alpine pastures to establish camp at Pisang Peak Base Camp. (6-7 hours)" },
    { day: 8, title: "Move to High Camp (5,400 m)", description: "A demanding, high-altitude carry up a steep ridge line over loose scree and rocky terrain. Establish your high-perched tented camp on the southwest ridge. Spend the afternoon hydrating, practicing rope and crampon techniques, and preparing your gear for the upcoming summit push. (6-7 hours)" },
    { day: 9, title: "Summit Day (6,091 m) and Descend to Base Camp (4,380 m)", description: "The Ultimate Objective: Wake around midnight for a 2:00 AM alpine start. Clip into the fixed lines to scale the steep, exposed snow and ice headwall of the southwest ridge. Step onto the sharp summit of Pisang Peak as dawn illuminates the entire Annapurna Massif, Manaslu, and Damodar peaks. Carefully descend back to High Camp for a hot drink, pack up, and continue down to Base Camp. (9-10 hours)" },
    { day: 10, title: "Trek from Base Camp to Manang (3,540 m)", description: "Pack up your personal gear at Base Camp, say goodbye to the peak, and begin a steady descent back down the alpine ridges. Rejoin the main valley trail and trek through the dry, rain-shadow landscape of Manang, passing through Braga to reach the ancient cultural hub of Manang. (6-7 hours)" },
    { day: 11, title: "Trek from Manang to Yak Kharka (4,110 m)", description: "Leave the Marsyangdi Valley floor and climb steadily out of the main basin. Cross the Jarsang Khola and follow the alpine trail through juniper bushes and grazing pastures, climbing gently into the high valley of Yak Kharka. (5-6 hours)" },
    { day: 12, title: "Trek to Thorong Phedi (4,450 m)", description: "Follow the trail along the lateral banks of the valley, crossing a wooden bridge to navigate a narrow, rocky path below active scree slopes. Arrive at Thorong Phedi, the bustling base settlement at the foot of the high pass, to rest early. (5-6 hours)" },
    { day: 13, title: "Cross Thorong La Pass (5,416 m) to Muktinath (3,760 m)", description: "The High Pass: A long, challenging day starting at 4:00 AM. Complete a rigorous, steady climb to the summit of Thorong La Pass, marked by colorful prayer flags and views of the Dhaulagiri range. Make a long, steep knee-burning descent down valley to emerge into the sacred pilgrimage center of Muktinath. (7-8 hours)" },
    { day: 14, title: "Drive/Fly to Pokhara and Return to Kathmandu", description: "Take a morning drive down through the wind-blown Kali Gandaki valley to Jomsom for a short flight to Pokhara, followed by a connecting flight or private drive back to Kathmandu. Transfer to your hotel, leaving you with a free evening for a celebratory farewell dinner." },
    { day: 15, title: "Departure", description: "Final breakfast at the hotel and a private transfer to Tribhuvan International Airport for your international flight home." }
  ],
    ctaText: 'Pisang Peak',
  },

  'yala-peak': {
    title: 'Yala Peak Climbing',
    duration: '14 Days',
    difficulty: 'Challenging',
    elevation: '5,500 m / 18,045 ft',
    season: 'Spring (Mar–May) & Autumn (Sep–Nov)',
    groupSize: '2 or more',
    activity: 'Trekking / Climbing',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/yala-peak.jpg', '/assets/images/langtang.jpg', '/assets/images/kyanjin-gompa.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Expeditions', href: '/Nepal#expeditions' },
      { label: 'Yala Peak Climbing', href: '#' },
    ],
    description: `The perfect entry-level peak climbing experience in the Langtang region. Yala Peak (5,500m) offers a scenic, direct introduction to Himalayan glacier mountaineering with stunning views of Shishapangma, the only 8,000m peak completely in Tibet.`,
    highlights: [
      'Summit Yala Peak (5,500m) — a gateway to Himalayan mountaineering',
      'The staggering Shishapangma horizon — views of the Tibetan 8,000m peak',
      'Deep Tamang cultural heritage integration',
      'The sacred sanctuary of Kyanjin Gompa (3,830m)',
      'The rushing Langtang Khola gorge',
      'Spectacular views of Langtang Lirung (7,227m) and Dorje Lakpa',
      'Optional hike to Tserko Ri (4,984m) for sweeping panoramas',
    ],
    overview: [
    "The Yala Peak Climbing expedition is an ideal entry-level mountaineering experience that requires good physical fitness and a spirit for adventure. The journey begins with a scenic drive from Kathmandu to Syabrubesi (1,500m) and winds through the beautiful Langtang National Park toward the trek's primary objective: the summit of Yala Peak at 5,520m. A standard 10-to-12-day itinerary is essential to ensure proper acclimatization, with strategic rest days in Kyanjin Gompa to allow your body to adapt to the high-alpine environment before moving to the high camp.",

    "Success at this peak depends on consistent cardiovascular training and hiking experience at least 2 months before departure. The terrain transitions from lush rhododendron forests to rocky moraines and snow-covered slopes, requiring sturdy trekking boots, crampons, and a versatile layering system to handle the shift from temperate valley weather to the freezing temperatures near the summit. Logistically, this trek is located within the Langtang National Park, requiring the Langtang National Park entry permit and a TIMS card. The ideal windows for climbing are the stable post-monsoon months (October-November) and the blooming pre-monsoon season (March-May), and travel insurance covering high-altitude trekking is an absolute necessity.",

    "The 12-day Yala Peak expedition is a fantastic alternative for those who want a summit experience without the technical complexity of higher peaks. Starting in the deep, forested gorges of the Langtang Valley, the trail passes through resilient Tamang villages where the local culture remains warm and welcoming. This itinerary is specifically designed to showcase the dramatic recovery of the Langtang region, all while keeping the stunning, ice-capped peaks of Langtang Lirung (7,227m) and Dorje Lakpa as your constant, towering backdrops.",

    "The trek reaches its rewarding climax at the summit of Yala Peak (5,520m), where climbers are treated to a spectacular panorama of Shishapangma (the only 8,000m peak in Tibet) and the sprawling Ganesh Himal range. This experience is more than a climbing feat; it is a perfect introduction to Himalayan mountaineering, connecting the vibrant culture of the Langtang Valley to the pristine, high-altitude wilderness. The final leg follows a reflective descent back through the valley, concluding a world-class journey that balances accessible adventure with profound mountain views.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and private transfer to your hotel. Rest, unpack, and enjoy free time exploring the vibrant streets of Thamel." },
    { day: 2, title: "Kathmandu Sightseeing & Climb Preparation", description: "Morning guided tour of historic city landmarks. Afternoon detailed climbing briefing, medical protocol overview, and a thorough inspection of personal and group mountaineering gear. Welcome dinner at a traditional Nepali restaurant in the evening." },
    { day: 3, title: "Drive to Syabru Besi (1,462 m)", description: "Depart Kathmandu early in the morning for a rugged and scenic drive heading north toward the Tibet border. Follow the winding mountain highways alongside the Trishuli River, passing through rural towns, terraced hillsides, and the entry points of Langtang National Park to reach Syabru Besi. (7-8 hours' drive)" },
    { day: 4, title: "Trek to Lama Hotel (2,500 m)", description: "Begin your trek by crossing the Bhote Koshi and following the Langtang Khola upstream. Walk through dense, lush forests of oak, maple, and bamboo, crossing several suspension bridges and climbing steadily up through the narrow river canyon to reach Lama Hotel. (5-6 hours)" },
    { day: 5, title: "Trek to Langtang Village (3,400 m)", description: "Continue a steady climb through the canyon forests, catching your first glimpses of Langtang Lirung through the trees. The trail opens significantly at Ghoda Tabela (3,000m), transitioning into a wide, alpine valley lined with mani walls and traditional stone houses before arriving at Langtang Village. (5-6 hours)" },
    { day: 6, title: "Trek to Kyanjin Gompa (3,830 m)", description: "Take a shorter, scenic morning walk further up the widening glacier valley. Pass through small yak-herding settlements and cross wooden bridges beneath massive glacial moraines. Arrive early at the high-altitude settlement of Kyanjin Gompa, surrounded by a dramatic amphitheater of snowy peaks. (4-5 hours)" },
    { day: 7, title: "Kyanjin Gompa Exploration & Acclimatization", description: "A vital acclimatization day to safely adapt to the elevation before heading onto the mountain. Take a morning hike up to the viewpoint of Kyanjin Ri (4,773m) or Tserko Ri (4,984m) for incredible, sweeping views of Langtang Lirung, Yala Peak, and the surrounding glaciers. Return to the village to visit the local yak cheese factory and rest." },
    { day: 8, title: "Trek to Yala Peak Base Camp (4,500 m)", description: "Leave the main valley trails behind and begin a steady, steep uphill climb along a rugged ridge line heading east. Walk past alpine pastures and rocky slopes to reach the quiet, high-altitude terrain of Yala Peak Base Camp, where your tented camp is established. (5-6 hours)" },
    { day: 9, title: "Summit Day: Yala Peak (5,500 m) & Return to Kyanjin Gompa", description: "The Ultimate Objective: Wake around midnight for a 2:00 AM alpine start. Scramble up steep rocky trails and step onto the snow-covered slopes near the summit ridge. The climb is non-technical but physically demanding. Step onto the summit of Yala Peak as dawn breaks, enjoying unparalleled views of Shishapangma (the only 8,000m peak completely in Tibet), Dorje Lakpa, and Langtang Lirung. Carefully descend back to Base Camp for hot tea, pack up, and return to Kyanjin Gompa. (8-9 hours)" },
    { day: 10, title: "Climbing Weather Contingency Day", description: "A built-in reserve day on the mountain. If high winds or heavy snow delay your summit attempt on Day 9, this day ensures a secondary climbing window. Alternatively, it serves as a valuable rest day to explore the valley or relax in Kyanjin Gompa." },
    { day: 11, title: "Trek back to Lama Hotel (2,500 m)", description: "Pack up your gear and begin a long, rewarding descent down valley. Retrace your steps through the wide valley plains of Langtang Village and drop down through the dense pine and bamboo forests alongside the roaring Langtang Khola to return to Lama Hotel. (5-6 hours)" },
    { day: 12, title: "Trek to Syabru Besi (1,462 m)", description: "Complete your final day on the trail. Retrace your steps down the river canyon, passing through the lush bamboo wilderness and small riverside settlements. Complete a final, gentle walk along the riverbed to return to Syabru Besi, where you can celebrate a safe and successful climb with your crew. (6-7 hours)" },
    { day: 13, title: "Drive back to Kathmandu (1,400 m)", description: "Board your vehicle in the morning to retrace the winding mountain roads back through the foothills and along the river valleys into the Kathmandu Valley. Private transfer to your hotel, leaving you with a free evening for last-minute shopping and a celebratory farewell meal. (7-8 hours' drive)" },
    { day: 14, title: "Departure", description: "Final breakfast at the hotel and a private transfer to Tribhuvan International Airport for your international flight home." }
  ],
    ctaText: 'Yala Peak',
  },

  'everest-high-passes-island-peak': {
    title: 'Everest High Passes & Island Peak',
    duration: '24 Days',
    difficulty: 'Challenging / Semi-Technical',
    elevation: '6,187 m / 20,299 ft',
    season: 'Feb–Jun & Sep–Dec',
    groupSize: '2 or more',
    activity: 'Multi-Activity (Trekking & Climbing)',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/everestbasecamp1.jpg', '/assets/images/island2.jpeg', '/assets/images/island3.jpeg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Expeditions', href: '/Nepal#expeditions' },
      { label: 'Everest High Passes & Island Peak', href: '#' },
    ],
    description: `The ultimate Khumbu Grand Slam: three 5,000-meter passes and a 6,000-meter summit achievement. This 24-day expedition combines the legendary Three High Passes—Renjo La, Cho La, and Kongma La—with a technical ascent of Island Peak (6,189m).`,
    highlights: [
      'Complete the Three High Passes trilogy: Renjo La (5,360m), Cho La (5,420m), and Kongma La (5,535m)',
      'Summit Island Peak (Imja Tse) at 6,189m',
      'Photography across the region with guaranteed ascents of Gokyo Ri (5,357m) and Kala Patthar (5,550m)',
      'Visit Everest Base Camp (5,364m)',
      'The shimmering turquoise Gokyo Lakes',
      'Traverse active moving glaciers including the Ngozumpa Glacier',
      'Front-row view of Lhotse\'s massive south face from the summit ridge',
    ],
    overview: [
    "The Everest High Passes and Island Peak Expedition is the definitive alpine challenge in the Khumbu region, masterfully combining a massive high-altitude circuit with a technical mountaineering summit. The journey targets the completion of the legendary Three High Passes—Renjo La (5,360m), Cho La (5,420m), and Kongma La (5,535m)—alongside a detour to Everest Base Camp (5,364m). This brutal circuit serves as a built-in, elite acclimatization profile for the grand finale: a technical push to the summit of Island Peak (Imja Tse) at 6,189m. A standard 20-to-24-day itinerary is crucial to safely manage this relentless workload, allowing for necessary weather cushions, rest days, and specialized rope training.",

    "Success on this demanding itinerary requires exceptional physical preparation and mental toughness, with a training regimen focused on weighted uphill endurance initiated at least 4 to 6 months before departure. The terrain is extraordinarily demanding and varied, crossing shifting glacial moraines like the Ngozumpa Glacier, steep ice-glazed passes, and the vertical headwalls of Island Peak that require crampons, an ice axe, and fixed-rope jumar ascents. Logistically, this multi-activity expedition requires a complex permit portfolio, including the Sagarmatha National Park permit, the Khumbu Pasang Lhamu local permit, and an official NMA peak climbing permit. The primary operational windows are the highly stable autumn months (October-November) and the crisp pre-monsoon spring (March-May), and premium travel insurance explicitly covering technical mountaineering and helicopter evacuation up to 6,500m is a non-negotiable prerequisite.",

    "Far removed from the standard, crowded highway of the main EBC trail, this grand circuit takes a broad, clockwise loop that explores the hidden corners of the Sherpa heartland. Starting with a flight to Lukla, the route branches early toward the remote, pristine Bhote Koshi Valley and the quiet village of Thame before conquering the first pass. This meticulous design ensures that trekkers spend nearly two weeks consistently sleeping and performing above 4,000m. The reward is a grand-scale visual feast that features the four highest peaks in the region—Everest, Lhotse, Makalu, and Cho Oyu—seen from every conceivable angle, alongside the turquoise alpine waters of the Gokyo Lakes and the imposing face of Ama Dablam.",

    "The expedition reaches its grand physical and spiritual climax on the knife-edge summit ridge of Island Peak (6,189m), offering a surreal, front-row view of Lhotse's massive south face. Accompanied by a dedicated climbing Sherpa, the transition from basic teahouse trekking to full tented camping at Island Peak Base Camp marks the final shift into true mountaineering. Following a triumphant summit push, the journey features a reflective, rapid descent through the vibrant cultural centers of Pangboche and Tengboche Monastery. This concludes a world-class Himalayan epic that balances the raw accomplishment of crossing three giant passes with the undisputed glory of standing atop a 6,000-meter peak",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, harsh weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we will do our best to find the best practical solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It is also a clever idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you are covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and private transfer to your hotel. Rest, unpack, and enjoy your free time exploring the vibrant streets of Thamel." },
    { day: 2, title: "Kathmandu Sightseeing & Trek Preparation", description: "Morning guided tour of historic city landmarks. Afternoon comprehensive trek and climb briefing, gear inspection, and medical protocol orientation. In the evening, enjoy a welcome dinner at a traditional Nepali restaurant before an early sleep." },
    { day: 3, title: "Fly to Lukla & Trek to Phakding (2,610 m)", description: "Early morning flight from Kathmandu (or drive to Manthali/Ramechhap for a 20-minute flight) to Lukla. Meet your trekking and climbing crew, organize duffel bags for the porters, and begin your journey with a gentle downhill and flat trek to Phakding. (3-4 hours)" },
    { day: 4, title: "Trek to Namche Bazaar (3,440 m)", description: "Trek along the banks of the Dudh Koshi River, crossing several high suspension bridges. Complete the final, famous steep uphill climb through alpine pine forests to enter the bustling Sherpa capital of Namche Bazaar. (5-6 hours)" },
    { day: 5, title: "Namche Bazaar Rest Day (Acclimatization)", description: "A mandatory acclimatization day. Take a scenic morning hike up to the Hotel Everest View (3,880m) for stunning, expansive panoramas of Everest, Lhotse, Nuptse, and Ama Dablam. Return to Namche to spend the afternoon resting and exploring the local markets. (4-5 hours)" },
    { day: 6, title: "Trek to Phortse Tenga (3,680 m)", description: "Leave the busy main trail and descend through rhododendron and pine forests toward the river, climbing slightly along the quiet valley side to reach the serene settlement of Phortse Tenga. (5-6 hours)" },
    { day: 7, title: "Trek to Machhermo (4,470 m)", description: "Climb steadily up the scenic Dudh Koshi Valley, passing through high summer yak pastures and small seasonal hamlets while enjoying views of Cho Oyu to reach Machhermo. (5-6 hours)" },
    { day: 8, title: "Trek to Gokyo Lakes (4,800 m)", description: "Ascend past the terminal moraine of the Ngozumpa Glacier. Walk alongside the pristine first and second lakes before reaching your lodge at the third Gokyo Lake, situated beneath the striking peak of Gokyo Ri. (5-6 hours)" },
    { day: 9, title: "Hike Gokyo Ri (5,483 m) & Return to Gokyo", description: "Early morning steep climbs up to the summit ridge of Gokyo Ri for sweeping panoramic views of Everest, Lhotse, Makalu, and Cho Oyu. Descend to the lake for a restful afternoon to recover and hydrate. (5-6 hours)" },
    { day: 10, title: "Trek to Thangnak (4,500 m)", description: "A shorter but scenic day traversing across the undulating, rocky moraine of the massive Ngozumpa Glacier to the foot of the pass at Thangnak. (4-5 hours)" },
    { day: 11, title: "Cross Cho La Pass (5,368 m) & Trek to Dzongla (4,830 m)", description: "Pass 1: Early pre-dawn starts to scramble up steep boulder fields and cross the icy glacier plateau of Cho La Pass. Descend a steep, rocky trail to the beautiful outpost of Dzongla. (7-8 hours)" },
    { day: 12, title: "Trek to Lobuche (4,910 m)", description: "Follow an easy panoramic trail along the hillside above Cholaste Lake, joining the classic Everest route to reach the small guesthouse settlement of Lobuche. (4-5 hours)" },
    { day: 13, title: "Hike Kala Patthar (5,555 m) & Return to Gorak Shep (5,164 m)", description: "Trek up along the rocky moraine to Gorak Shep. In the afternoon, complete a challenging climb up Kala Patthar for sunset views over Mount Everest and the surrounding giants before returning to Gorak Shep. (7-8 hours)" },
    { day: 14, title: "Visit Everest Base Camp (5,364 m) & Return to Lobuche (4,910 m)", description: "Trek across the undulating glacier trail to reach Everest Base Camp. Explore the historic site at the foot of the Khumbu Icefall, then turn back and retrace your steps down valley to sleep at the lower elevation of Lobuche. (8-9 hours)" },
    { day: 15, title: "Cross Kongma La Pass (5,535 m) & Trek to Chukhung (4,710 m)", description: "Pass 2: An intense, pre-dawn climb up the high, rocky trail to the crest of Kongma La Pass, the highest of the three passes. Descend steep scree slopes and traverse the valley floor to reach Chukhung. (8-9 hours)" },
    { day: 16, title: "Trek to Island Peak Base Camp (5,240 m)", description: "Follow a steady trail along the lateral moraine of the Imja Glacier, walking beneath the massive southern face of Lhotse to establish camp at Island Peak Base Camp. (4-5 hours)" },
    { day: 17, title: "Base Camp Rest & Skills Training (Acclimatization)", description: "A mandatory rest and preparation day. Review climbing safety protocols, practice fixed-rope techniques using jumars and descenders, and complete a final check of harnesses, crampons, and high-altitude gear." },
    { day: 18, title: "Summit Island Peak (6,187 m) & Return to Chukhung (4,710 m)", description: "Summit Day: Midnight start climbing the steep rock gullies, cross the snow-covered glacier using crampons, and ascend the fixed-line headwall to the summit peak of Island Peak (Imja Tse). Enjoy victory views before descending back to Base Camp and continuing to Chukhung. (9-10 hours)" },
    { day: 19, title: "Climbing Weather Contingency Day", description: "A built-in reserve day to protect the itinerary and provide a secondary summit window in case of high winds or bad weather on the mountain." },
    { day: 20, title: "Trek to Tengboche (3,860 m)", description: "Descend through the wide Imja Valley, passing through the village of Pangboche and walking down to the historic monastery settlement of Tengboche. (6-7 hours)" },
    { day: 21, title: "Trek to Namche Bazaar (3,440 m) via Khumjung", description: "Cross the river and ascend to the traditional village of Khumjung to visit the local monastery, then complete a pleasant forest traverse back to Namche Bazaar for a celebratory meal. (5-6 hours)" },
    { day: 22, title: "Trek to Lukla (2,840 m)", description: "Complete your final day on the trail. Descend the long \"Namche Hill,\" retrace your steps along the Dudh Koshi Valley through Phakding, and climb the final hill back into Lukla to celebrate with your crew. (6-7 hours)" },
    { day: 23, title: "Fly back to Kathmandu (1,400 m)", description: "Morning flight from Lukla back to Kathmandu (or via flight to Manthali/Ramechhap followed by a private drive). Private transfer back to your hotel, leaving you with a free afternoon for relaxation and hot showers." },
    { day: 24, title: "Departure", description: "Final breakfast at the hotel and a private transfer to Tribhuvan International Airport for your flight home." }
  ],
    ctaText: 'High Passes & Island Peak',
  },

  'ama-dablam': {
    title: 'Ama Dablam Expedition',
    duration: '29 Days',
    difficulty: 'Technical / Advanced',
    elevation: '6,812 m / 22,349 ft',
    season: 'Spring (Apr–May) & Autumn (Oct–Nov)',
    groupSize: '2 or more',
    activity: 'Technical Mountaineering (Rock, Ice & Mixed)',
    accommodation: 'Tea House / Hotel & High Camps (Tented)',
    heroImages: ['/assets/images/amadablam1.jpg', '/assets/images/amadablam2.jpg', '/assets/images/amadablam3.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Expeditions', href: '/Nepal#expeditions' },
      { label: 'Ama Dablam Expedition', href: '#' },
    ],
    description: `The world's most aesthetic summit (6,812m) and a definitive "rite of passage" for experienced alpinists. Ama Dablam's iconic pyramid shape requires mastery of technical rock, ice, and mixed-terrain climbing on the legendary Southwest Ridge.`,
    highlights: [
      'Summit Ama Dablam (6,812m) — one of the world\'s most beautiful mountains',
      'The iconic "Mother\'s Necklace" — witness the massive hanging glacier that gives the mountain its name',
      'The legendary Yellow Tower — a technical rock climbing challenge',
      'Spectacular "bird\'s-eye" high camps with unrivaled 360-degree views',
      'Unrivaled 360-degree views of Everest, Lhotse, and Makalu',
      'Cultural trek through the Khumbu to Base Camp',
      'A "Grail" for seasoned climbers seeking the ultimate Himalayan test',
    ],
    overview: [
    "The Ama Dablam Expedition is a world-renowned mountaineering challenge that stands as a definitive \"rite of passage\" for experienced alpinists. Rising to a height of 6,812m, the mountain's iconic pyramid shape requires a mastery of technical rock, ice, and mixed-terrain climbing. The journey begins with a flight to Lukla (2,846m) and follows the classic Khumbu trail before diverting to the Ama Dablam Base Camp. A standard 25-to-30-day itinerary is mandatory to allow for rigorous acclimatization cycles and the establishing of high camps, ensuring climbers are prepared for the intense exposure and physical demands of the upper mountain.",

    "Success on Ama Dablam depends on advanced technical proficiency, including comfort on fixed ropes, vertical rock sections (up to 5.7 grade), and steep ice pitches. Climbers should initiate an elite-level training program at least 6 months prior, focusing on upper body strength, precision footwork, and sustained cardiovascular power. Logistically, this expedition is highly regulated, requiring a specific climbing permit from the Department of Tourism, as well as the Sagarmatha National Park and Khumbu Pasang Lhamu permits. The primary windows for the ascent are the stable autumn months (October-November) and the spring season (April-May), with specialized insurance covering high-altitude long-line rescue being a strict necessity.",

    "The 30-day Ama Dablam expedition is often cited as the most \"honest\" test in the Himalayas, where height is secondary to technical skill. The itinerary often includes a \"warm-up\" trek to Everest Base Camp or a climb of Lobuche East (6,119m) to build the necessary red blood cell counts and technical rhythm. This approach ensures that when you arrive at the foot of the Southwest Ridge, your body is primed for the vertical challenges ahead, from the granite slabs of the Yellow Tower to the airy, exposed ridges that define the climb.",

    "The expedition reaches its breathtaking climax at the sharp summit of Ama Dablam (6,812m), providing an unparalleled, close-up panorama of Everest, Lhotse, and Makalu. Standing on the summit is more than a high-altitude feat; it is a demonstration of technical composure and climbing precision in one of the world's most spectacular alpine arenas. The final descent through the traditional Sherpa villages of Pangboche and Khumjung offers a reflective conclusion to a world-class mountaineering odyssey that balances extreme physical triumph with the deep cultural heritage of the Khumbu.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and private transfer to your hotel. Rest and enjoy free time to explore the vibrant streets of Thamel." },
    { day: 2, title: "Kathmandu Sightseeing & Climb Briefing", description: "Morning guided tour of historic city landmarks. Afternoon detailed climbing briefing, government liaison officer introduction, and a thorough inspection of personal and group gear. In the evening, enjoy a welcome dinner at a traditional Nepali restaurant." },
    { day: 3, title: "Final Preparation & Permit Day (Kathmandu)", description: "A dedicated day in Kathmandu for the final processing of your official Ama Dablam climbing permits with the Department of Tourism. Use the afternoon for any last-minute equipment rentals or purchase high-altitude snacks and supplies." },
    { day: 4, title: "Fly to Lukla & Trek to Phakding (2,610 m)", description: "Early morning flight from Kathmandu (or drive to Manthali/Ramechhap for a 20-minute flight) to Lukla. Meet your trekking and climbing crew, organize your duffel bags for the porters, and begin your trek along flat and downhill trails to Phakding. (3-4 hours)" },
    { day: 5, title: "Trek to Namche Bazaar (3,440 m)", description: "Trek along the banks of the Dudh Koshi River, crossing several high suspension bridges, including the famous Hillary Suspension Bridge. Complete the final, steep uphill climb to enter the bustling Sherpa capital of Namche Bazaar. (5-6 hours)" },
    { day: 6, title: "Namche Rest Day (Acclimatization)", description: "A critical acclimatization day. Take a morning hike up to the Hotel Everest View (3,880 m) for stunning, expansive panoramas of Everest, Lhotse, and your ultimate objective: Ama Dablam. Return to Namche for an afternoon of rest." },
    { day: 7, title: "Trek to Tengboche Monastery (3,860 m)", description: "Follow a scenic panoramic trail winding along the valley wall before descending to Phunki Tenga for lunch. Complete a steady, steep afternoon climb through rhododendron and pine forests to the iconic ridge top of Tengboche Monastery. (5-6 hours)" },
    { day: 8, title: "Trek to Pangboche (3,930 m)", description: "Descent through beautiful birch and rhododendron woods to cross the Imja Khola. Climb gently back up to the upper village of Pangboche, home to the oldest monastery in the Khumbu region and close-up views of Ama Dablam. (2-3 hours)" },
    { day: 9, title: "Trek to Ama Dablam Base Camp (4,600 m)", description: "Cross the river and leave the main Everest trail behind, climbing steadily up through alpine meadows and yak pastures. Arrive at the wide, grassy plateau of Ama Dablam Base Camp, where your private kitchen and tented camp are fully established. (5-6 hours)" },
    { day: 10, title: "Base Camp Rest & Acclimatization", description: "A dedicated rest day at Base Camp. Spend the day sorting climbing hardware, fitting high-altitude boots, adjusting crampons, and participating in a traditional Puja ceremony with your climbing Sherpas to bless your gear and expedition." },
    { day: 11, title: "Ama Dablam Climbing Period (Days 11-25)", description: "The Climb: Over these 15 days, your team will execute rotation climbs and make the final summit push. You will utilize a science-based approach to safety, establishing Camp 1 (5,700 m) and Camp 2 (5,900m) via the Southwest Ridge. The route features exceptional, sustained technical rock climbing and exposed snow/ice fields up to the iconic summit of Ama Dablam (6,812 m), followed by a controlled descent back to Base Camp." },
    { day: 26, title: "Trek to Namche Bazaar (3,440 m)", description: "Pack up your personal gear at Base Camp, say goodbye to the mountain, and begin your descent. Retrace your steps down through Pangboche and Tengboche, crossing the riverbed before making the final push back to the comfort of Namche Bazaar. (6-7 hours)" },
    { day: 27, title: "Trek to Lukla (2,840 m)", description: "Complete your final day on the trail. Descend the long \"Namche Hill,\" retrace your steps along the Dudh Koshi Valley, and climb the final hill back into Lukla to celebrate a successful expedition with your entire crew. (6-7 hours)" },
    { day: 28, title: "Fly to Kathmandu", description: "Morning flight from Lukla back to Kathmandu (or via flight to Manthali/Ramechhap followed by a private drive). Private transfer back to your hotel, leaving you with a free afternoon for relaxation, hot showers, and last-minute shopping." },
    { day: 29, title: "Departure", description: "Final breakfast at the hotel and a private transfer to Tribhuvan International Airport for your flight home." }
  ],
    ctaText: 'Ama Dablam',
  },

  'mera-peak': {
    title: 'Mera Peak Climbing',
    duration: '20 Days',
    difficulty: 'Challenging / Semi-Technical',
    elevation: '6,470 m / 21,227 ft',
    season: 'Spring (Mar–May) & Autumn (Sep–Nov)',
    groupSize: '2 or more',
    activity: 'Trekking / Climbing',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/mera1.jpg', '/assets/images/mera2.jpeg', '/assets/images/mera3.jpeg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Expeditions', href: '/Nepal#expeditions' },
      { label: 'Mera Peak Climbing', href: '#' },
    ],
    description: `The roof of trekking peaks: the ultimate high-altitude walking expedition across hidden valleys and wild glacial plateaus. Mera Peak (6,470m) stands as the highest official "trekking peak" in Nepal, offering unparalleled panoramic views of five 8,000-meter peaks.`,
    highlights: [
      'Summit the highest trekking peak in Nepal at 6,470m',
      'The five-8,000er summit masterpiece — views of Everest, Lhotse, Cho Oyu, Makalu, and Kanchenjunga',
      'The wild, unspoiled Hinku Valley entry —远离 crowded EBC trail',
      'Pristine high camp staging at 5,780m',
      'Gradual, foot-safe glacier march suitable for novice climbers',
      'Deeply immersive wilderness approach through Panggom, Ramailo Danda, and Chhatra Khola',
      'Visit century-old Buddhist stupas like Lungsumbga Gompa',
    ],
    overview: [
    "Mera Peak (6,476m) stands crowned as the highest official \"trekking peak\" in Nepal, offering an unparalleled introductory mountaineering expedition into the spectacular Mahalangur section of the Himalayas. Situated on the edge of the pristine Hinku Valley, this expedition is highly sought after by ambitious trekkers and novice climbers looking to transition into high-altitude alpine mountaineering. A standard 16-to-18-day itinerary provides the necessary structural runway to safely navigate the rapid ascent, allowing for dedicated acclimatization and fundamental pre-climb training before pushing toward the sub-zero environment of the summit.",

    "While classified as a non-technical \"walk-up\" peak with a straightforward normal route, achieving success on Mera Peak demands excellent physical fitness and exceptional cardiovascular endurance. The approach avoids vertical rock climbing, but it requires navigating extensive, heavily crevassed high-altitude glaciers using crampons, an ice axe, and fixed-rope team travel. The true crux of the expedition is the extreme altitude and cold; the final push kicks off from Mera High Camp (5,780m), a windswept, high-alpine outpost perched on a rocky shelf where nighttime temperatures routinely plummet well below freezing, requiring a premium heavyweight layering system.",

    "Logistically, a successful summit requires a complex and tightly regulated permit portfolio managed by an authorized agency. Trekkers must secure an official Mera Peak Climbing Permit issued by the Nepal Mountaineering Association (NMA), alongside the Makalu Barun National Park Entry Permit and the Khumbu Pasang Lhamu Rural Municipality Permit to enter the region legally. The premier operational windows are the highly stable post-monsoon autumn (September-November) and the crisp pre-monsoon spring (March-May). Due to the sustained exposure to extreme altitude, specialized travel insurance explicitly guaranteeing high-altitude medical coverage and helicopter evacuation up to 6,500m is a mandatory safety baseline.",

    "The expedition reaches its breathtaking climax on the small, snow-dome summit of Mera Peak, rewarding climbers with what is widely considered the finest panoramic viewpoint in the entire Himalaya. From this 6,476m vantage point, the horizon opens to an unobstructed, front-row view of five of the world's fourteen 8,000-meter peaks simultaneously: Mt. Everest (8,848m), Lhotse (8,516m), Cho Oyu (8,210m), Makalu (8,463m), and Kanchenjunga (8,586m). The journey concludes with a triumphant descent back through the pristine wilderness of the Hinku Valley and a crossing over the scenic Zatrwa La Pass (4,610m) to Lukla, sealing a monumental mountaineering milestone that blends raw physical achievement with grand-scale alpine theater.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and private transfer to your hotel. Rest, unpack, and enjoy free time exploring the vibrant streets of Thamel." },
    { day: 2, title: "Kathmandu Sightseeing & Climb Preparation", description: "Morning guided tour of historic city landmarks. Afternoon detailed climbing briefing, medical protocol overview, and a thorough inspection of personal mountaineering gear. Welcome dinner at a traditional Nepali restaurant in the evening." },
    { day: 3, title: "Fly to Lukla & Trek to Paiya / Chutok (2,800 m)", description: "Early morning flight from Kathmandu (or a 5-to-6-hour private drive to Manthali/Ramechhap for a 20-minute flight) to Lukla. Meet your crew and head south out of Lukla, leaving the busy main trail behind to wind down local farmlands and forested hillsides to Paiya. (3-4 hours)" },
    { day: 4, title: "Trek to Pangkongma (2,900 m)", description: "Descent to the wooden bridge over the Paiya Khola before climbing steadily up through bamboo and rhododendron forests. Traverse the narrow trade pass of Khari La, enjoying views of the Dudh Koshi Valley before reaching the traditional village of Pangkongma. (6-7 hours)" },
    { day: 5, title: "Trek to Nashing Dingma (2,963 m)", description: "Climb up to the Pangkongma La Pass for scenic views of the Hinku Valley. Descend on steep stone steps through thick forests to cross the Hinku Khola on a suspension bridge, followed by a steady uphill climb to Nashing Dingma. (6-7 hours)" },
    { day: 6, title: "Trek to Chholem Kharka (3,600 m)", description: "Trek uphill along the ridge, ascending through lush pastures and forests of oak, pine, and giant rhododendrons. The trail offers beautiful mountain vistas as you reach the summer yak grazing pastures of Chholem Kharka. (6-7 hours)" },
    { day: 7, title: "Trek to Khola Kharka (4,270 m)", description: "Continue a demanding climb up the high ridge line, crossing the scenic Panch Pokhari Pass and passing a cluster of sacred alpine lakes. Enjoy sweeping panoramas of the surrounding wilderness before descending slightly to Khola Kharka. (6-7 hours)" },
    { day: 8, title: "Trek to Kothe (3,600 m)", description: "Follow a rugged, winding path that drops steeply through pristine pine, bamboo, and rhododendron forests into the deep valley of the Hinku River, eventually rejoining the main Hinku Valley trail to settle in at Kothe. (6-7 hours)" },
    { day: 9, title: "Trek to Tangnag (4,350 m)", description: "Walk along the shadow of the massive western ridge of Mera Peak, tracking beside the boulder-strewn Hinku Khola. Pass the ancient, 200-year-old Lungsumbga Buddhist monastery cave to reach the high-altitude grazing settlement of Tangnag. (6-7 hours)" },
    { day: 10, title: "Tangnag Rest Day (Acclimatization)", description: "A critical, mandatory rest day to adapt to the thin air. Take a scenic morning acclimatization hike up the ridges toward Charpate Sanu and Sabai Tsho glacial lake to push your altitude threshold, then return to Tangnag to rest." },
    { day: 11, title: "Trek to Khare (4,900 m)", description: "Climb steadily past the lateral moraine of the Dig Glacier and cross the wide, open plains of Dig Kharka. The trail steepens as you navigate the rocky paths up to Khare, the main alpine base for Mera Peak climbing teams. (4-5 hours)" },
    { day: 12, title: "Khare Rest & Technical Climbing Practice", description: "A dedicated training day. Meet your climbing Sherpas to fit high-altitude plastic double boots, harnesses, and crampons. Spend the afternoon practicing fixed-line ascents using mechanical jumars and mastering rope safety protocols on the ice slopes just above camp." },
    { day: 13, title: "Trek to Mera High Camp (5,800 m)", description: "Trek up through a rocky boulder field to the edge of the Mera Glacier. Step onto the ice, clip into your rope team, and complete a long, steady snow climb across the Mera La Pass before pushing higher up the open glacier slope to establish your tents at High Camp. (7-8 hours)" },
    { day: 14, title: "Summit Day: Mera Peak (6,470 m) & Return to Khare", description: "The Ultimate Objective: Wake around midnight for a 1:00-2:00 AM alpine start. Climb the open snow slopes of the glacier under headlights, watching the sunrise illuminate Everest, Lhotse, Makalu, and Kanchenjunga. Complete a final, steep technical push up the summit dome using fixed lines to step onto the grand summit of Mera Peak. Carefully descend back to High Camp for a hot drink, then continue down valley to Khare. (10-15 hours)" },
    { day: 15, title: "Climbing Weather Contingency Day", description: "A built-in reserve day at the mountain. If high winds or heavy snow delay your summit attempt on Day 14, this day ensures a secondary climbing window. If unused, it provides an additional rest day or allows a more relaxed descent to Lukla." },
    { day: 16, title: "Trek to Kothe (3,600 m)", description: "Pack your gear, say goodbye to the high peaks, and begin a long, rewarding descent down valley. Retrace your steps back through the meadows of Tangnag and alongside the riverbed to return to the oxygen-rich air of Kothe. (6-7 hours)" },
    { day: 17, title: "Trek to Thuli Kharka (4,200 m)", description: "Leave the river valley floor behind and begin a steady uphill climb across the western ridges of the Hinku Valley. Walk through alpine pastures and juniper fields, traversing a rugged trail to reach the high-perched settlement of Thuli Kharka. (6-7 hours)" },
    { day: 18, title: "Trek to Lukla (2,840 m) via Zatrwa La Pass (4,610 m)", description: "The Final Pass: Wake early for a steady, rocky climb to the crest of the Zatrwa La Pass. Enjoy a final look back across the Hinku Valley before completing a long, steep knee-burning descent on stone steps down into Lukla. Celebrate a safe and successful summit with your entire crew. (7-8 hours)" },
    { day: 19, title: "Fly back to Kathmandu (1,400 m)", description: "Morning flight from Lukla back to Kathmandu (or via flight to Ramechhap followed by a 5-to-6-hour private drive). Private transfer back to your hotel, leaving you with a free afternoon for hot showers, relaxation, and last-minute shopping." },
    { day: 20, title: "Departure", description: "Final breakfast at the hotel and a private transfer to Tribhuvan International Airport for your flight home." }
  ],
    ctaText: 'Mera Peak',
  },

  'pisang-peak-thorong-la': {
    title: 'Pisang Peak & Thorung La Pass',
    duration: '22 Days',
    difficulty: 'Strenuous / Semi-Technical',
    elevation: '6,091 m / 19,980 ft',
    season: 'Spring (Mar–May) & Autumn (Sep–Nov)',
    groupSize: '2 or more',
    activity: 'Strenuous Trekking / Technical (Snow & Ice)',
    accommodation: 'Tea House / Hotel & Base Camp (Mini Tented Village)',
    heroImages: ['/assets/images/pptl1.jpg', '/assets/images/pptl2.jpeg', '/assets/images/pptl3.jpeg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Expeditions', href: '/Nepal#expeditions' },
      { label: 'Pisang Peak & Thorung La Pass', href: '#' },
    ],
    description: `Follow the Marsyangdi River to the stars, standing atop Pisang Peak for a bird's-eye view before crossing the world's most famous pass. This 22-day expedition combines a technical 6,000m summit with the legendary Thorong La Pass (5,416m).`,
    highlights: [
      'Summit Pisang Peak (6,091m) — the Pyramid Summit',
      'Cross the world\'s highest pass — Thorong La (5,416m)',
      'The "Great Barrier" panorama of the Annapurna Massif',
      'Trek beneath the awe-inspiring Paungda Danda (The "Great Wall of Annapurna")',
      'Explore medieval Tibetan villages — Upper Pisang, Ngawal, and Braka',
      'High-altitude desert transition through Mustang',
      'Visit the 108 sprouts of sacred Muktinath Temple',
      'The deepest gorge in the world — Kali Gandaki',
      'End with sunrise at Poon Hill (3,210m)',
    ],
    overview: [
    "The Pisang Peak and Thorong La Pass expedition is a comprehensive high-altitude odyssey that combines a challenging 6,000m summit with the world's most iconic mountain crossing. The journey begins with a scenic drive to the Marsyangdi Valley, steadily ascending toward the dual objectives: the 6,091m summit of Pisang Peak and the legendary Thorong La Pass at 5,416m. A 22-day itinerary is essential to facilitate a robust acclimatization profile, utilizing the initial trek through the Manang district to naturally build the stamina required for both the technical summit push and the high-altitude pass crossing.",

    "Success on this extended circuit depends on elite-level physical conditioning, focusing on cardiovascular capacity and weighted hiking at least 4 months before departure. The terrain is exceptionally diverse, transitioning from lush rhododendron forests to the steep, uniform snow slopes of Pisang Peak, which require the use of crampons, ice axes, and fixed ropes. Logistically, this trek requires the NMA climbing permit for Pisang Peak, along with the ACAP permit and TIMS card. The ideal windows for the expedition are the stable post-monsoon months (October-November) and the clear pre-monsoon season (March-May), and comprehensive insurance covering helicopter evacuation is an absolute necessity.",

    "The 22-day Pisang Peak and Thorong La expedition is a world-class journey that offers a deeper, more technical immersion than the standard Annapurna Circuit. Starting in the emerald foothills of the Marsyangdi River, the trail winds through traditional Manangi villages where ancient Buddhist traditions and stone-built architecture remain remarkably intact. This itinerary is specifically designed to showcase the dramatic transition from the humid lower valleys to the arid, rain-shadow landscapes of the Tibetan plateau, keeping the massive summits of Annapurna II and IV as your constant, majestic companions.",

    "The trek reaches its dual climaxes at the summit of Pisang Peak (6,091m) and the prayer-flag-strewn crest of the Thorong La Pass (5,416m). From these high vantage points, trekkers are rewarded with a breathtaking panorama that stretches from the Manaslu range to the immense Dhaulagiri Massif. This experience is more than a physical feat; it is a profound crossing of the Great Himalayan Range, concluding with a reflective descent into the sacred valley of Muktinath and the windswept Kali Gandaki, balancing the triumph of a 6,000m peak with deep cultural and spiritual discovery.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and private transfer to your hotel. Rest, unpack, and enjoy free time exploring the vibrant streets of Thamel." },
    { day: 2, title: "Kathmandu Sightseeing & Climb Preparation", description: "Morning guided tour of historic city landmarks. Afternoon detailed climbing briefing, medical protocol overview, and a thorough inspection of personal and group gear. Welcome dinner at a traditional Nepali restaurant in the evening." },
    { day: 3, title: "Drive to Syange (1,100 m)", description: "Depart Kathmandu early in a private 4WD vehicle for a long, scenic journey. Drive alongside the Trishuli and Marsyangdi rivers, eventually transitioning to a rugged mountain road that enters the gorges of the Annapurna region to reach Syange. (7-8 hours drive)" },
    { day: 4, title: "Trek to Tal (1,700 m)", description: "Begin your trek following the Marsyangdi River upstream. Cross several suspension bridges and pass through small waterfalls before completing a final climb to reach Tal, a beautiful village situated on a wide, flat valley floor at the foot of a massive waterfall. (5-6 hours)" },
    { day: 5, title: "Trek to Dharapani / Danakyu (1,860 m)", description: "Walk through stone-paved paths and terraced fields, passing through the village of Dharapani, where the trail meets the Manaslu Circuit route. Continue a gentle ascent through forests to settle in at Danakyu. (5-6 hours)" },
    { day: 6, title: "Trek to Chame (2,670 m)", description: "Trek uphill through dense pine, fir, and rhododendron forests, climbing steeply past Timang village for your first grand views of Lamjung Himal. Continue along the riverbank to reach Chame, the administrative hub of the Manang district. (5-6 hours)" },
    { day: 7, title: "Trek to Pisang Village (3,300 m)", description: "Walk through a narrowing river valley flanked by dramatic rock walls, including the towering, curved rock face of Paungda Danda. The landscape becomes noticeably drier and more alpine as you enter Upper Manang and arrive at Pisang. (5-6 hours)" },
    { day: 8, title: "Pisang Village Exploration & Acclimatization", description: "A dedicated rest day to adapt to the altitude before moving onto the mountain. Spend the day exploring the traditional stone houses of Upper Pisang, visiting its prominent Tibetan Buddhist monastery, and taking short hikes to enjoy panoramic views of Annapurna II and III." },
    { day: 9, title: "Trek to Pisang Peak Base Camp (4,380 m)", description: "Leave the main Annapurna Circuit trail and begin a steady, steep uphill climb toward the mountain. The trail winds through thin pine and juniper forests before opening up into alpine pastures to establish camp at Pisang Peak Base Camp. (6-7 hours)" },
    { day: 10, title: "Move to Pisang Peak High Camp (5,450 m)", description: "A demanding, high-altitude carry up a steep ridge line over loose scree and rocky terrain. Establish your high-perched tented camp on the southwest ridge. Spend the afternoon hydrating and preparing your gear for the upcoming summit push. (6-7 hours)" },
    { day: 11, title: "High Camp Rest & Technical Climbing Practice", description: "A vital preparation and altitude adaptation day at High Camp. Meet your climbing Sherpas to review the route, inspect fixed-rope safety lines, and practice ascending techniques using mechanical jumars and descending with rappelling gear on the snow slopes near camp." },
    { day: 12, title: "Summit Day: Pisang Peak (6,091 m) & Return to Base Camp", description: "The Ultimate Objective: Wake around midnight for a 2:00 AM alpine start. Clip into the fixed lines to scale the steep, exposed snow and ice headwall of the southwest ridge. Step onto the sharp summit of Pisang Peak as dawn illuminates the entire Annapurna Massif, Manaslu, and Damodar peaks. Carefully descend back to High Camp for a hot drink, pack up, and continue down to Base Camp. (9-10 hours)" },
    { day: 13, title: "Climbing Weather Contingency Day", description: "A built-in reserve day on the mountain. If high winds or heavy snow delay your summit attempt on Day 12, this day ensures a secondary climbing window. Alternatively, it serves as a valuable rest and physical recovery day." },
    { day: 14, title: "Trek to Pisang Village (3,300 m)", description: "Pack up your personal gear at Base Camp, say goodbye to the peak, and begin a long, steady descent back down the alpine ridges to return to the comfort of the guesthouses in Pisang Village. (5-6 hours)" },
    { day: 15, title: "Trek to Manang (3,540 m)", description: "Trek through the dry, rain-shadow landscape of Manang. Take the spectacular upper route via Ghyaru and Ngawal for panoramic views of the Annapurnas or follow the easier lower river valley route through Braga to reach the ancient cultural hub of Manang. (6-7 hours)" },
    { day: 16, title: "Trek to Yak Kharka (4,050 m)", description: "Leave the Marsyangdi Valley floor and climb steadily out of the main basin. Cross the Jarsang Khola and follow the alpine trail through juniper bushes and grazing pastures, climbing gently into the high valley of Yak Kharka. (5-6 hours)" },
    { day: 17, title: "Trek to Thorong Phedi (4,450 m)", description: "Follow the trail along the lateral banks of the valley, crossing a wooden bridge to navigate a narrow, rocky path below active scree slope. Arrive at Thorong Phedi, the bustling base settlement at the foot of the high pass, to rest early. (5-6 hours)" },
    { day: 18, title: "Cross Thorong La Pass (5,416 m) & Trek to Muktinath (3,760 m)", description: "The High Pass: A long, challenging day starting at 4:00 AM. Complete a rigorous, steady climb to the summit of Thorong La Pass, marked by colorful prayer flags and views of the Dhaulagiri range. Make a long, steep knee-burning descent down valley to emerge into the sacred pilgrimage center of Muktinath. (7-8 hours)" },
    { day: 19, title: "Trek to Jomsom (2,720 m)", description: "Walk through the arid, desert-like landscapes of the Lower Mustang region. Descend past Jharkot village and drop down into the wide, wind-blown canyon floor of the Kali Gandaki River, tracking the flat riverbed trail to arrive at the administrative town of Jomsom. (5-6 hours)" },
    { day: 20, title: "Fly to Pokhara (900 m)", description: "Board a scenic morning flight from Jomsom to Pokhara (30 mins), flying directly through the deep gorge between the Annapurna and Dhaulagiri massifs. Transfer to your lakeside hotel, leaving you with a free afternoon to relax, enjoy hot showers, or go boating on Phewa Lake." },
    { day: 21, title: "Drive to Kathmandu (1,400 m)", description: "Board a comfortable tourist bus in the morning to retrace the highway route back through the foothills and along the river valleys into the Kathmandu Valley. Private transfer to your hotel. (7-8 hours' drive)" },
    { day: 22, title: "Departure", description: "Final breakfast at the hotel and a private transfer to Tribhuvan International Airport for your international flight home." }
  ],
    ctaText: 'Pisang Peak & Thorong La',
  },
  'island-peak': {
    title: 'Island Peak Climbing',
    duration: '16 Days',
    difficulty: 'Challenging / Semi-Technical',
    elevation: '6,187 m / 20,293 ft',
    season: 'Spring (Mar–May) & Autumn (Sep–Nov)',
    groupSize: '2 or more',
    activity: 'Trekking / Climbing',
    accommodation: 'Tea House / Hotel & Base Camp (Mini Tented Village)',
    heroImages: ['/assets/images/island1.jpeg', '/assets/images/island2.jpeg', '/assets/images/island3.jpeg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Expeditions', href: '/Nepal#expeditions' },
      { label: 'Island Peak Climbing', href: '#' },
    ],
    description: `The quintessential Himalayan climb: bridging the gap between trekking and true mountaineering in the shadow of the world's highest peaks. This 16-day Island Peak expedition follows the legendary Khumbu trail before a technical ascent of Imja Tse (6,187m).`,
    highlights: [
      'The Summit Triumph (6,187 m)',
      'Front-Row Seat to Lhotse (8,516 m) — the world\'s fourth-highest mountain',
      'The "Island in a Sea of Ice"',
      'Spiritual Heart of the Khumbu — Tengboche Monastery',
      'The Vibrant Capital of Namche Bazaar',
      'Authentic Expedition Camping — Transition from teahouses to tented camp at Base Camp (5,240 m)',
      'Glacier Navigation & Headwall Challenge',
    ],
    overview: [
      `The Island Peak Climbing expedition (locally known as Imja Tse) is a premier mountaineering challenge that requires excellent physical stamina and a basic understanding of technical climbing skills. The journey begins with a thrilling flight to Lukla (2,846m) and follows the legendary trail through the Khumbu Valley before turning toward the trek's ultimate objective: the 6,189m summit of Island Peak. A standard 14- to 16-day itinerary is essential to ensure proper acclimatization, with strategic nights in Namche Bazaar and Dingboche to allow your body to adapt to the thin air of the Everest region.`,
      `Success on this peak depends on rigorous and focused training, emphasizing cardiovascular endurance and strength-building at least 3 to 4 months before departure. The terrain is diverse and demanding, moving from rocky scrambles to a steep snow-and-ice headwall that requires professional-grade mountaineering boots, crampons, and a harness. Logistically, this expedition requires specific permits including the Sagarmatha National Park permit, the Khumbu Pasang Lhamu local permit, and the NMA climbing permit. The ideal windows for climbing are the stable post-monsoon months (October-November) and the clear pre-monsoon season (March-May), and comprehensive insurance covering high-altitude rescue is a non-negotiable requirement.`,
      `The 16-day Island Peak expedition is an iconic Himalayan adventure that serves as the perfect "steppingstone" for those looking to transition from trekking to mountaineering. Starting in the vibrant Sherpa capital of Namche Bazaar, the trail winds through high-altitude pastures and the spiritual heart of the region at Tengboche Monastery. This itinerary is specifically designed to maximize your chances of success, providing a hands-on "pre-climb" training session at High Camp to familiarize you with the fixed ropes and man-hauling techniques required for the final summit push.`,
      `The expedition reaches its dramatic climax at the summit of Island Peak (6,189m), where climbers are rewarded with an intimate, panoramic view of the massive Lhotse South Wall, Ama Dablam, and Makalu. This experience is more than a high-altitude feat; it is a profound immersion into the world of Himalayan climbing, connecting the bustling tea houses of the lower valley to the stark, silent majesty of the high glaciers. The final leg follows a triumphant descent through the Imja Valley, concluding a world-class mountaineering odyssey that balances intense physical triumph with the legendary hospitality of the Sherpa people.`,
      `NOTE: We strive to follow the planned itinerary, but unforeseen circumstances such as weather, flight delays, or health concerns may require adjustments. We strongly recommend arriving one or two days early.`,
    ],
    itinerary: [
      { day: 1,  title: 'Arrival in Kathmandu (1,400 m)',                                   description: 'Airport pick-up and private transfer to your hotel. Rest, unpack, and enjoy free time exploring the vibrant streets of Thamel.' },
      { day: 2,  title: 'Kathmandu Sightseeing & Climb Preparation',                        description: 'Morning guided tour of historic city landmarks. Afternoon detailed climbing briefing, medical protocol overview, and a thorough inspection of personal and group gear. Welcome dinner at a traditional Nepali restaurant in the evening.' },
      { day: 3,  title: 'Fly to Lukla & Trek to Phakding (2,610 m)',                        description: 'Early morning flight from Kathmandu (or a 5- to 6-hour private drive to Manthali/Ramechhap for a 20-minute flight) to Lukla (2,840m). Meet your trekking and climbing crew, organize duffel bags for the porters, and begin your journey with a gentle downhill and flat trek to Phakding. (3-4 hours)' },
      { day: 4,  title: 'Trek to Namche Bazaar (3,440 m)',                                   description: 'Trek along the banks of the Dudh Koshi River, crossing several high suspension bridges, including the famous Hillary Suspension Bridge. Complete the final, steep uphill climb through alpine pine forests to enter the vibrant Sherpa capital of Namche Bazaar. (5-6 hours)' },
      { day: 5,  title: 'Namche Bazaar Rest Day (Acclimatization)',                         description: 'A mandatory acclimatization day. Take a scenic morning hike up to the Hotel Everest View (3,880m) for stunning, expansive panoramas of Everest, Lhotse, Nuptse, and Ama Dablam. Return to Namche to spend the afternoon resting and exploring the local markets.' },
      { day: 6,  title: 'Trek to Tengboche Monastery (3,860 m)',                            description: 'Follow a scenic ridge trail winding along the valley wall before descending to the riverbed for lunch at Phunki Tenga. Complete a steady, steep afternoon climb through rhododendron and conifer forests to reach the famous ridge-top Tengboche Monastery. (5-6 hours)' },
      { day: 7,  title: 'Trek to Dingboche (4,410 m)',                                       description: 'Descent through beautiful conifer and birch woods to cross the Imja Khola. Climb gently past the upper alpine village of Pangboche and advance into the wide, stone-walled valley plains of Dingboche. (5-6 hours)' },
      { day: 8,  title: 'Trek to Chukhung (4,730 m)',                                        description: 'Walk through pristine alpine landscapes and stone-walled fields as you enter the upper Imja Valley. The trail climbs gently alongside the roaring riverbeds, offering increasingly dramatic views of the massive Lhotse face as you approach the settlement of Chukhung. (4-5 hours)' },
      { day: 9,  title: 'Trek to Island Peak Base Camp (5,240 m)',                          description: 'Follow a steady, rugged trail along the lateral moraine of the Imja Glacier. Walk beneath the staggering southern walls of the mountain to reach the wide, rocky terrain of Island Peak Base Camp, where your tented camp is fully established. (4-5 hours)' },
      { day: 10, title: 'Base Camp Rest & Skills Training (Acclimatization)',               description: 'A dedicated rest and preparation day at Base Camp. Meet your climbing Sherpas for a thorough technical review. Practice ascending fixed lines using mechanical ascenders (Jumars), mastering rappel techniques with figure-eight descenders, and adjusting your harnesses and crampons. Rest early for the summit push.' },
      { day: 11, title: 'Summit Island Peak (6,187 m) & Return to Chukhung (4,710 m)',      description: 'Summit Day: Wake around midnight for a 1:00 AM alpine start. Scramble up steep rock gullies and navigate the mountain\'s glacier sections using crampons and rope teams. Clip into the fixed lines to scale the exposed snow and ice headwall, leading onto the spectacular, narrow ridge line. Step onto the summit of Island Peak (Imja Tse) as dawn breaks across the Himalaya. Carefully descend back to Base Camp for a hot drink, then continue to Chukhung. (9-10 hours)' },
      { day: 12, title: 'Trek to Tengboche (3,860 m)',                                       description: 'Begin your journey down valley. Descend past the stone walls of Dingboche and Pangboche, dropping down through the alpine scenery to reach the comfortable guesthouses surrounding the Tengboche Monastery. (6-7 hours)' },
      { day: 13, title: 'Trek to Namche Bazaar (3,440 m) via Khumjung',                     description: 'Cross the river and ascend to the traditional valley village of Khumjung (3,780m) to visit the local monastery and experience local Sherpa culture. Complete a pleasant forest traverse back to Namche Bazaar for a celebratory meal. (5-6 hours)' },
      { day: 14, title: 'Trek to Lukla (2,840 m)',                                           description: 'Complete your final day on the trail. Descend the long "Namche Hill," retrace your steps along the Dudh Koshi Valley through Phakding, and climb the final hill back into Lukla to celebrate a safe and successful peak climb with your entire crew. (6-7 hours)' },
      { day: 15, title: 'Fly back to Kathmandu (1,400 m)',                                   description: 'Morning flight from Lukla back to Kathmandu (or via flight to Ramechhap followed by a private drive). Private transfer back to your hotel, leaving you with a free afternoon for relaxation, hot showers, and last-minute shopping.' },
      { day: 16, title: 'Transfer to International Airport — Final Departure',               description: 'Final breakfast at the hotel and a private transfer to Tribhuvan International Airport for your flight home.' },
    ],
    ctaText: 'Island Peak',
  },

  
};