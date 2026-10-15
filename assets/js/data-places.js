/* =====================================================================
   URSPACE place data
   ---------------------------------------------------------------------
   Two lists live here:

   1. URS_PROJECTS — large development projects shown in the Design Gallery
      grid. Clicking one opens a popup with "history" and "plan".
   2. URS_SITES    — real unused spaces (closed schools) people can design
      for. Each one has its own page (site.html#its-id) and appears in the
      "Design location" dropdown on the Apply page.

   To add a place: copy one { ... } block, give it a new unique id, and
   put its photo in assets/img/gallery/ or assets/img/sites/.
   Leave a field as "" if you don't have that information yet.
   Fields ending in _en are the English versions, shown when the site is in
   English. If one is missing, the Korean text is shown instead.
   "featured: true" shows a project on the home page (first 3 are used).
   In site text, **like this** shows as bold.
   ===================================================================== */

window.URS_PROJECTS = [
  {
    "id": "cheongnyangni",
    "name": "청량리역 일대 광역중심 개발",
    "name_en": "Cheongnyangni Station Regional Hub Development",
    "location": "서울특별시 동대문구 청량리동·전농동 일대",
    "location_en": "Cheongnyangni-dong and Jeonnong-dong, Dongdaemun-gu, Seoul",
    "region": "서울",
    "image": "assets/img/gallery/g01.webp",
    "history": "청량리역 일대는 오랫동안 서울 동북부의 대표적인 철도·상업 중심지였지만 노후 건축물과 전통시장, 철도시설이 혼재하면서 주변 지역의 개발이 상대적으로 지연되었다. 이후 청량리역의 광역교통 기능이 강화되고 주변 재개발 사업이 진행되면서 서울시는 이 지역을 동북권의 새로운 업무·상업·교통 중심지로 육성하는 개발을 추진하게 되었다.",
    "history_en": "For decades, the area around Cheongnyangni Station was northeastern Seoul's main rail and commercial hub, but a mix of aging buildings, traditional markets and rail facilities held back development in the surrounding neighborhoods. As the station's role in the regional transit network grew and nearby redevelopment projects moved forward, the Seoul Metropolitan Government began developing the area into a new business, commercial and transport center for northeastern Seoul.",
    "plan": "현재 청량리역 주변에는 주거·업무·상업시설이 결합된 고층 복합단지가 조성되고 있으며 역을 중심으로 광역교통 기능도 강화되고 있다. GTX 노선과 기존 철도·지하철을 연계하고 보행공간과 상업시설을 정비해 청량리를 서울 동북권의 핵심 광역교통·경제 거점으로 발전시키는 방향으로 개발이 추진되고 있다.",
    "plan_en": "High-rise complexes combining housing, offices and shops are being built around Cheongnyangni Station, and its role as a regional transit hub is being strengthened. By linking the GTX lines with existing rail and subway lines and upgrading pedestrian spaces and shops, the plan aims to make Cheongnyangni the core transport and economic hub of northeastern Seoul."
  },
  {
    "id": "yeouido",
    "name": "여의도 금융중심 지구단위계획",
    "name_en": "Yeouido Financial District Unit Plan",
    "location": "서울특별시 영등포구 여의도동 일대",
    "location_en": "Yeouido-dong, Yeongdeungpo-gu, Seoul",
    "region": "서울",
    "image": "assets/img/gallery/g02.webp",
    "history": "여의도는 1970년대부터 국회의사당과 금융기관, 방송사 등이 들어서면서 서울의 대표적인 업무·금융 중심지로 성장했다. 그러나 준공 후 수십 년이 지난 건축물이 많아지고 도시공간과 보행환경이 노후화되면서 새로운 정비 필요성이 커졌다. 서울시는 여의도의 국제 금융 경쟁력을 강화하고 노후 도시공간을 재편하기 위해 금융중심 지구단위계획을 추진했다.",
    "history_en": "Since the 1970s, Yeouido has grown into one of Seoul's main business and financial centers, home to the National Assembly, financial institutions and broadcasters. As many buildings passed several decades in age and its streets and public spaces grew worn, the need for renewal increased. The Seoul Metropolitan Government introduced a financial district unit plan to strengthen Yeouido's competitiveness as an international financial center and reorganize its aging urban space.",
    "plan": "현재 여의도는 노후 건축물 재건축과 함께 국제 금융·업무 기능을 강화하는 방향으로 재편되고 있다. 고층 업무시설과 상업·문화시설을 확대하고 한강 및 여의도공원과 연결되는 녹지·보행공간을 조성해 여의도를 국제적인 금융·비즈니스 중심지로 발전시키는 것이 주요 계획이다.",
    "plan_en": "Yeouido is being reshaped by rebuilding aging buildings while strengthening its international finance and business functions. The main plan is to add high-rise offices along with commercial and cultural facilities, and to create green, walkable spaces connected to the Han River and Yeouido Park, developing Yeouido into an international finance and business hub."
  },
  {
    "id": "goyang-changneung",
    "name": "고양 창릉 신도시",
    "name_en": "Goyang Changneung New Town",
    "location": "경기도 고양시 덕양구 원흥동·동산동·용두동 일대",
    "location_en": "Wonheung-dong, Dongsan-dong and Yongdu-dong, Deogyang-gu, Goyang, Gyeonggi Province",
    "region": "경기",
    "image": "assets/img/gallery/g03.webp",
    "history": "고양 창릉 신도시는 수도권 주택 공급 확대와 서울 서북부 지역의 균형발전을 위해 추진된 3기 신도시 사업이다. 해당 지역은 서울과 가까운 입지에도 불구하고 개발제한구역과 농경지가 넓게 분포해 대규모 도시개발이 이루어지지 않았다. 정부는 서울 접근성이 뛰어난 창릉지구를 3기 신도시로 지정하고 주거와 일자리, 교통 기능을 함께 갖춘 자족형 도시로 개발하기 시작했다.",
    "history_en": "Goyang Changneung is one of the third-generation new towns, launched to expand housing supply in the capital region and balance development in northwest Seoul. Although the area is close to Seoul, it was mostly green belt and farmland, so large-scale development had not taken place. The government designated the Changneung district a third-generation new town and began developing it as a self-sufficient city with housing, jobs and transport.",
    "plan": "현재 창릉 신도시는 대규모 주택단지와 업무·상업시설, 공원, 자족시설을 함께 조성하는 방향으로 개발되고 있다. GTX-A 창릉역을 중심으로 광역교통망을 강화하고 창릉천을 활용한 녹지·수변공간을 조성해 서울 서북권의 새로운 주거·경제 중심지로 만드는 것이 핵심이다.",
    "plan_en": "Changneung New Town is being developed with large housing complexes together with offices, shops, parks and facilities that bring jobs to the area. The plan centers on strengthening regional transit around the GTX-A Changneung Station and creating green and waterfront spaces along Changneungcheon Stream, making it a new residential and economic center for northwest Seoul."
  },
  {
    "id": "seoripul",
    "name": "서리풀 정보사부지 복합개발",
    "name_en": "Seoripul Former Intelligence Command Site Development",
    "location": "서울특별시 서초구 서초동 정보사령부 이전부지 일대",
    "location_en": "Former Defense Intelligence Command site, Seocho-dong, Seocho-gu, Seoul",
    "region": "서울",
    "image": "assets/img/gallery/g04.webp",
    "history": "이 지역은 오랫동안 국군 정보사령부가 사용하면서 일반적인 도시개발이 제한되었던 대규모 부지이다. 정보사령부가 이전하면서 서울 도심에 대형 유휴부지가 생겼고, 이를 활용해 서초 지역의 단절된 도시공간을 연결하고 새로운 업무·문화 거점을 만들기 위한 개발 논의가 본격화되었다. 이후 서울시는 서리풀 일대 지구단위계획을 통해 체계적인 개발 방향을 마련했다.",
    "history_en": "For many years this large site was used by the Korea Defense Intelligence Command, which limited ordinary urban development. When the command relocated, a large vacant site opened up in central Seoul, and plans began to use it to reconnect Seocho's divided urban fabric and create a new business and cultural hub. The Seoul Metropolitan Government then set a development direction through a district unit plan for the Seoripul area.",
    "plan": "현재 정보사 이전부지는 업무·상업·문화 기능이 결합된 복합공간으로 개발하는 계획이 추진되고 있다. 첨단 업무시설과 상업·문화시설을 조성하고 녹지와 보행공간을 확대해 예술의전당과 서리풀공원 등 주변 지역을 연결하는 새로운 도시 거점으로 조성하는 것이 핵심이다.",
    "plan_en": "The former command site is planned as a mixed-use place combining business, commercial and cultural functions. The core of the plan is to build advanced offices and commercial and cultural facilities, and to expand green and pedestrian space so the site becomes a new hub linking surrounding areas such as the Seoul Arts Center and Seoripul Park."
  },
  {
    "id": "guryong",
    "name": "개포 구룡마을 도시개발사업",
    "name_en": "Gaepo Guryong Village Urban Development Project",
    "location": "서울특별시 강남구 개포동 구룡마을 일대",
    "location_en": "Guryong Village, Gaepo-dong, Gangnam-gu, Seoul",
    "region": "서울",
    "image": "assets/img/gallery/g05.webp",
    "history": "구룡마을은 1980년대 후반부터 형성된 대규모 무허가 주거지역으로, 강남의 급격한 개발 과정에서도 오랫동안 정비되지 않은 지역으로 남아 있었다. 노후 주택과 부족한 기반시설, 화재 위험 등의 문제가 지속되면서 주거환경 개선 필요성이 제기되었고, 서울시는 구룡마을을 체계적으로 정비하기 위해 도시개발사업을 추진하게 되었다.",
    "history_en": "Guryong Village is a large informal settlement that formed in the late 1980s and stayed unimproved even as Gangnam developed rapidly around it. Long-standing problems with aging houses, poor infrastructure and fire risk raised the need for better living conditions, and the Seoul Metropolitan Government launched an urban development project to redevelop the village systematically.",
    "plan": "현재 구룡마을은 기존 노후 주거지를 철거하고 공공주택을 중심으로 한 새로운 주거단지로 조성하는 방향으로 개발이 추진되고 있다. 주택 공급과 함께 도로, 공원, 녹지 등 기반시설을 확충하고 주변 강남 지역과 연결되는 쾌적한 주거환경을 조성하는 것이 핵심이다.",
    "plan_en": "Guryong Village is being redeveloped by clearing the old housing and building a new residential district centered on public housing. Alongside new homes, the core of the plan is to add roads, parks and green space and create a pleasant residential environment connected to the surrounding Gangnam area."
  },
  {
    "id": "busan-bukhang",
    "name": "부산항 북항 재개발",
    "name_en": "Busan North Port Redevelopment",
    "location": "부산 북항 중구·동구 일대",
    "location_en": "Jung-gu and Dong-gu, North Port, Busan",
    "region": "부산",
    "image": "assets/img/gallery/g06.webp",
    "history": "부산 북항은 대한민국 근대 항만 역사와 함께 성장한 대표적인 항만지역이다. 부산항의 주요 물류 기능을 담당했지만 선박 대형화와 컨테이너 물류 증가로 항만 기능이 부산신항으로 이동하면서 기존 부두의 활용도가 낮아졌다. 항만시설이 부산 원도심과 바다를 단절한다는 문제도 지속적으로 제기되었다. 이에 노후·유휴 항만부지를 국제 해양관광과 업무·문화 중심지로 재편하는 북항 재개발 사업이 추진됐다.",
    "history_en": "Busan's North Port grew up alongside Korea's modern port history. It handled much of Busan Port's cargo, but as ships grew larger and container traffic increased, port operations moved to Busan New Port and the old piers were used less and less. The port facilities were also long criticized for cutting Busan's old downtown off from the sea. The North Port redevelopment was launched to turn aging and idle port land into a center for marine tourism, business and culture.",
    "plan": "북항 1단계는 친수공원, 마리나, 문화·상업시설과 국제여객 기능을 중심으로 개발되고 있으며 관련 기반시설 사업이 계속 진행 중이다. 2단계는 자성대부두와 부산역·부산진역 일대를 포함해 원도심과 항만을 연결하는 대규모 복합개발로 추진된다. 부산시 공개 자료에 따르면 2023년 부산시와 부산항만공사가 사업시행자로 지정됐고, 2024년 자성대부두 이전이 완료됐다.",
    "plan_en": "Phase 1 of North Port is being developed around waterfront parks, a marina, cultural and commercial facilities and international passenger services, with related infrastructure work still under way. Phase 2 is a large mixed-use development covering Jaseongdae Pier and the areas around Busan and Busanjin stations, linking the old downtown with the port. According to Busan city, the city and Busan Port Authority were named as developers in 2023, and Jaseongdae Pier finished relocating in 2024."
  },
  {
    "id": "susaek-dmc",
    "name": "수색역·DMC역 복합개발",
    "name_en": "Susaek Station and DMC Station Mixed-Use Development",
    "location": "서울 은평구 수색동 수색로 261 일대 철도부지",
    "location_en": "Rail land around 261 Susaek-ro, Susaek-dong, Eunpyeong-gu, Seoul",
    "region": "서울",
    "image": "assets/img/gallery/g07.webp",
    "history": "수색역 일대는 오랫동안 철도 차량기지와 철도시설, 물류 기능이 집중된 지역이었다. 철도시설이 대규모 부지를 차지하면서 상암 DMC와 수색·증산 지역 사이의 도시 연결이 단절되는 문제가 있었다. 상암 디지털미디어시티가 서울의 미디어·IT 산업 중심지로 성장하면서 인접 철도부지를 활용해 DMC 기능을 확장하고 서북권 경제거점을 조성해야 한다는 개발 필요성이 커졌다.",
    "history_en": "The Susaek Station area has long been dominated by a rail depot, rail facilities and logistics. Because these take up so much land, they cut Sangam DMC off from the Susaek and Jeungsan neighborhoods. As Digital Media City grew into Seoul's media and IT hub, the need grew to use the neighboring rail land to expand DMC and create an economic hub for northwest Seoul.",
    "plan": "현재 약 24만5천㎡ 철도부지를 복합개발하는 장기 프로젝트로 추진되고 있다. 철도시설 상부와 주변 유휴부지를 활용해 업무·상업·문화·주거 기능을 배치하고 DMC와 수색 지역을 연결하는 보행·도시축을 구축하는 것이 핵심이다. 서울시 자료상 2024년 12월 지구단위계획 결정 고시가 이뤄졌고 목표연도는 2038년으로 제시돼 있다.",
    "plan_en": "A long-term project is under way to develop about 245,000㎡ of rail land. The core of the plan is to place business, commercial, cultural and residential uses above the rail facilities and on surrounding idle land, and to build pedestrian and urban corridors connecting DMC and Susaek. According to Seoul city, the district unit plan was finalized in December 2024, with 2038 set as the target year."
  },
  {
    "id": "gimpo-airport",
    "name": "김포공항 도시재생 혁신지구",
    "name_en": "Gimpo Airport Urban Regeneration Innovation District",
    "location": "서울 강서구 공항동 1373 일원",
    "location_en": "Around 1373 Gonghang-dong, Gangseo-gu, Seoul",
    "region": "서울",
    "image": "assets/img/gallery/g08.webp",
    "history": "김포공항 일대는 오랫동안 서울의 주요 항공 교통 거점 역할을 해왔지만 공항시설과 주차장, 항공업무시설이 넓은 면적을 차지하면서 주변 도시공간과 단절되어 있었다. 인천국제공항 개항 이후 국제선 기능이 축소되고 일부 시설의 노후화와 저활용 문제가 나타났다. 이에 공항을 단순 항공시설이 아니라 미래교통과 첨단산업을 연결하는 도시 거점으로 재편해야 한다는 필요성이 제기되었고, 도시재생 혁신지구 사업이 추진되었다.",
    "history_en": "Gimpo Airport has long been one of Seoul's main aviation hubs, but its terminals, parking and aviation facilities cover a large area and cut it off from the surrounding city. After Incheon International Airport opened, Gimpo's international role shrank, and some facilities became outdated and underused. This raised the need to turn the airport from a purely aviation site into an urban hub connecting future transport and advanced industries, and the urban regeneration innovation district project was launched.",
    "plan": "현재 약 35만㎡ 부지를 3개 블록으로 나누어 개발하는 계획이다. 1블록에는 UAM 등 미래교통과 연계된 복합환승시설을, 2블록에는 항공업무 기능을, 3블록에는 첨단산업 클러스터를 조성한다. 전체적으로 지하 4층~지상 8층, 8개 복합시설과 약 119만㎡ 연면적 규모로 계획돼 있다. 서울시 공개 계획상 2027년 착공 절차를 거쳐 1블록은 2030년, 2·3블록은 2033년 준공·운영 목표다.",
    "plan_en": "The plan divides about 350,000㎡ of land into three blocks. Block 1 will hold a transit complex linked to future transport such as UAM (urban air mobility), Block 2 aviation business functions, and Block 3 an advanced industry cluster. In total, it plans eight mixed-use buildings from 4 floors below ground to 8 above, with about 1.19 million㎡ of floor area. Seoul's published plan targets the start of construction procedures in 2027, with Block 1 opening in 2030 and Blocks 2 and 3 in 2033."
  },
  {
    "id": "nodeul",
    "name": "노들 글로벌 예술섬",
    "name_en": "Nodeul Global Art Island",
    "location": "서울 용산구 노들섬",
    "location_en": "Nodeul Island, Yongsan-gu, Seoul",
    "region": "서울",
    "image": "assets/img/gallery/g09.webp",
    "history": "노들섬은 한강 중앙에 위치한 인공섬으로 과거 중지도라고 불렸다. 20세기 초 한강 개발 과정에서 현재의 형태가 만들어졌으며, 오랫동안 시민 휴식공간이나 개발 예정지로 논의되었다. 여러 대규모 개발 계획이 검토됐지만 사업성 문제 등으로 무산됐고, 2019년 복합문화공간으로 개장했다. 이후 서울시는 노들섬을 서울을 대표하는 국제적인 문화·건축 랜드마크로 재구성하기 위해 글로벌 설계공모를 추진했다.",
    "history_en": "Nodeul Island is a man-made island in the middle of the Han River, once called Jungjido. It took its current shape during Han River development in the early 20th century and was long discussed as a public resting place or a future development site. Several large development plans were considered but fell through for financial reasons, and it opened as a cultural complex in 2019. The Seoul Metropolitan Government then held an international design competition to remake Nodeul Island into a cultural and architectural landmark that represents Seoul internationally.",
    "plan": "현재 노들섬은 ‘노들 글로벌 예술섬’으로 재개발되고 있다. 2024년 국제지명설계공모에서 Thomas Heatherwick의 ‘Soundscape’가 당선됐다. 한국의 산과 음악의 파동을 연상시키는 곡선형 구조와 공중 보행공간, 공연·전시·조망시설을 조성하는 계획이며 서울시는 한강의 새로운 문화예술 랜드마크 조성을 목표로 사업을 추진하고 있다. 공식 정책 자료는 2028년 완공 목표를 제시한다.",
    "plan_en": "Nodeul Island is being redeveloped as the Nodeul Global Art Island. In a 2024 international invited design competition, Thomas Heatherwick's \"Soundscape\" was selected. The plan features curved structures that evoke Korea's mountains and the waves of music, elevated walkways, and performance, exhibition and viewing facilities, with the aim of creating a new cultural landmark on the Han River. Official policy documents give 2028 as the target completion date."
  },
  {
    "id": "seongsu",
    "name": "성수전략정비구역",
    "name_en": "Seongsu Strategic Redevelopment District",
    "location": "서울 성동구 성수동1가 일대",
    "location_en": "Seongsu-dong 1-ga, Seongdong-gu, Seoul",
    "region": "서울",
    "image": "assets/img/gallery/g10.webp",
    "history": "성수전략정비구역은 과거 공장과 창고, 저층 주거지가 혼재했던 성수동 한강변 지역을 대규모 주거·수변도시로 재편하기 위해 추진된 재개발 사업이다. 성수동은 서울의 대표적인 준공업지역으로 성장했지만 노후 주거지와 산업시설이 혼재하면서 체계적인 도시 정비 필요성이 제기되었다. 2009년 전략정비구역으로 지정된 이후 사업이 장기간 지연되었으나, 한강변 도시공간 재편과 성수동 지역 가치 상승을 계기로 개발 논의가 다시 본격화되었다. 2025년 정비계획 결정 고시가 완료되면서 재개발 추진이 본격화됐다.",
    "history_en": "The Seongsu Strategic Redevelopment District is a project to reshape Seongsu-dong's Han River waterfront, once a mix of factories, warehouses and low-rise housing, into a large residential and waterfront neighborhood. Seongsu grew into one of Seoul's best-known semi-industrial areas, but its mix of aging homes and industrial buildings created a need for planned improvement. After it was designated a strategic redevelopment district in 2009, the project was delayed for years, but talks picked up again as the Han River waterfront was reorganized and Seongsu's value rose. The redevelopment gained momentum when its redevelopment plan was officially announced in 2025.",
    "plan": "현재 성수전략정비구역은 1~4지구를 중심으로 대규모 한강변 주거단지를 조성하는 방향으로 추진되고 있다. 한강과 직접 연결되는 약 4만㎡ 규모 수변공원과 보행축을 만들고, 초고층 주거단지와 문화·상업시설을 배치하는 계획이다. 각 지구에서는 최고 65층 안팎의 초고층 설계안도 추진되고 있어 향후 서울 동부 한강변의 새로운 스카이라인을 형성할 가능성이 높다.",
    "plan_en": "The Seongsu district is moving ahead with large riverside residential complexes centered on Zones 1 to 4. The plan creates a waterfront park of about 40,000㎡ and pedestrian routes that connect directly to the Han River, along with high-rise housing and cultural and commercial facilities. Each zone is pursuing designs of up to around 65 floors, which is likely to form a new skyline along the Han River in eastern Seoul."
  },
  {
    "id": "hanam-gyosan",
    "name": "하남 교산 신도시",
    "name_en": "Hanam Gyosan New Town",
    "location": "경기도 하남시 교산동·천현동·춘궁동 일대",
    "location_en": "Gyosan-dong, Cheonhyeon-dong and Chungung-dong, Hanam, Gyeonggi Province",
    "region": "경기",
    "image": "assets/img/gallery/g11.webp",
    "history": "하남 교산 신도시는 서울 강동구와 인접한 지역의 주택 수요를 수용하고 자족 기능을 갖춘 신도시를 조성하기 위해 추진된 3기 신도시 사업이다. 해당 지역은 오랫동안 개발제한구역과 농경지 중심으로 유지되어 왔으며, 서울 접근성이 뛰어남에도 대규모 도시개발이 이루어지지 않았다. 정부는 수도권 주택 공급 확대와 지역 균형발전을 위해 교산지구를 3기 신도시로 지정하고, 역사문화 자원과 자연환경을 활용한 미래형 도시 개발을 추진하게 되었다.",
    "history_en": "Hanam Gyosan is a third-generation new town launched to meet housing demand next to Gangdong-gu, Seoul, and to build a self-sufficient new city. The area had long been green belt and farmland, so despite its easy access to Seoul, no large-scale development had taken place. The government designated the Gyosan district a third-generation new town to expand housing in the capital region and balance regional development, planning a future-oriented city that makes use of its historical, cultural and natural assets.",
    "plan": "현재 하남 교산 신도시는 약 3만3천 세대 규모의 자족형 신도시로 개발되고 있다. 도시 내부에는 주거단지와 함께 업무시설, 상업시설, 문화시설, 공원 등이 계획되어 있으며, 서울지하철 3호선 연장과 광역교통망 확충이 함께 추진되고 있다. 또한 교산동 일대의 역사문화 자원을 보존하면서 친환경 녹지축을 구축하는 방향으로 계획이 수립되었다. 즉, 하남 교산 신도시는 서울 동부권의 주택 수요를 해결하는 동시에 역사·문화·자연환경과 첨단도시 기능을 결합한 미래형 신도시 프로젝트라고 볼 수 있다.",
    "plan_en": "Hanam Gyosan is being developed as a self-sufficient new town of about 33,000 households. Alongside housing, it plans offices, shops, cultural facilities and parks, together with an extension of Seoul Subway Line 3 and expanded regional transit. The plan also preserves the historical and cultural sites around Gyosan-dong while creating an eco-friendly green corridor. In short, it aims to meet housing demand in eastern Seoul while combining history, culture and nature with modern urban functions."
  },
  {
    "id": "namyangju-wangsuk",
    "name": "남양주 왕숙 신도시",
    "name_en": "Namyangju Wangsuk New Town",
    "location": "경기도 남양주시 진접읍·진건읍·퇴계원읍 일대",
    "location_en": "Jinjeop-eup, Jingeon-eup and Toegyewon-eup, Namyangju, Gyeonggi Province",
    "region": "경기",
    "image": "assets/img/gallery/g12.webp",
    "history": "남양주 왕숙 신도시는 수도권 주택 공급 확대와 동북부 균형발전을 위해 추진된 3기 신도시 최대 규모 프로젝트이다. 해당 지역은 농지와 저밀도 주거지역, 개발제한구역이 혼재되어 있었으며, 서울 접근성이 우수함에도 체계적인 도시 기반시설이 부족했다. 정부는 수도권 주택난 해소와 자족형 도시 조성을 위해 왕숙 일대를 3기 신도시 핵심 지구로 선정했고, 대규모 공공주택과 산업·업무 기능을 결합한 미래도시 개발 계획을 수립했다.",
    "history_en": "Namyangju Wangsuk is the largest of the third-generation new towns, launched to expand housing in the capital region and balance development in the northeast. The area was a mix of farmland, low-density housing and green belt, and although it is close to Seoul, it lacked planned urban infrastructure. The government chose Wangsuk as a core third-generation new town to ease the housing shortage and build a self-sufficient city, planning large-scale public housing combined with industry and offices.",
    "plan": "현재 왕숙 신도시는 약 6만6천 세대 규모의 수도권 최대 신도시로 개발되고 있다. GTX-B 노선과 광역교통망을 중심으로 주거·업무·상업·문화 기능을 통합하는 자족도시로 계획되었으며, 왕숙천을 중심으로 대규모 수변공원과 녹지축이 조성될 예정이다. 또한 첨단산업과 창업시설을 유치하여 서울 의존도를 줄이고 지역 내 일자리 창출을 목표로 하고 있다. 즉, 왕숙 신도시는 단순 주택 공급이 아니라 수도권 동북부의 새로운 경제·생활 중심지를 만드는 장기 도시개발 프로젝트라고 볼 수 있다.",
    "plan_en": "Wangsuk is being developed as the largest new town in the capital region, with about 66,000 households. It is planned as a self-sufficient city that brings together housing, offices, shops and culture around the GTX-B line and regional transit, with a large waterfront park and green corridor along Wangsukcheon Stream. It also aims to attract advanced industries and startups to create local jobs and reduce dependence on Seoul. In short, it is a long-term project to build a new economic and living center for the northeastern capital region, not just new housing."
  },
  {
    "id": "pangyo2",
    "name": "판교 제2테크노밸리",
    "name_en": "Pangyo Second Techno Valley",
    "location": "경기도 성남시 수정구 금토동·시흥동 일대",
    "location_en": "Geumto-dong and Siheung-dong, Sujeong-gu, Seongnam, Gyeonggi Province",
    "region": "경기",
    "image": "assets/img/gallery/g13.webp",
    "history": "판교 제2테크노밸리는 판교 제1테크노밸리의 성공 이후 증가하는 첨단산업 수요를 수용하기 위해 추진된 확장 프로젝트이다. 제1테크노밸리는 IT 기업과 스타트업이 집중되며 대한민국 대표 혁신 클러스터로 성장했지만, 입주 공간 부족과 산업 확장 한계가 지속적으로 제기되었다. 이에 정부와 경기도는 금토동과 시흥동 일대를 새로운 도시첨단산업단지로 지정하고, 연구개발과 창업, 첨단산업을 지원하는 제2테크노밸리 조성을 추진하게 되었다.",
    "history_en": "Pangyo Second Techno Valley is an expansion launched to meet growing demand from advanced industries after the success of the first Pangyo Techno Valley. The first valley became Korea's leading innovation cluster as IT companies and startups gathered there, but a lack of space and limits on growth were raised again and again. The government and Gyeonggi Province designated Geumto-dong and Siheung-dong as a new urban high-tech industrial complex and began building a second valley that supports R&D, startups and advanced industries.",
    "plan": "현재 판교 제2테크노밸리는 IT, BT, CT, AI, 모빌리티 등 첨단산업 중심의 혁신 클러스터로 운영 및 확장되고 있다. 창업지원시설, 기업지원허브, 연구개발센터, 업무시설, 공공지원시설이 함께 조성되었으며, 판교 제1테크노밸리와 연결된 통합 혁신 생태계를 구축하고 있다. 정부는 판교를 대한민국 4차 산업혁명 핵심 거점으로 육성하기 위해 지속적인 확장과 산업 유치를 추진하고 있으며, 글로벌 기술기업과 스타트업이 함께 성장하는 미래형 산업도시 모델을 목표로 하고 있다. 즉, 판교 제2테크노밸리는 단순 산업단지가 아니라 혁신 기술과 창업 생태계를 중심으로 한 국가 전략 산업 클러스터라고 볼 수 있다.",
    "plan_en": "Pangyo Second Techno Valley operates and continues to grow as an innovation cluster for advanced industries such as IT, biotech, content, AI and mobility. Startup support facilities, a business support hub, R&D centers, offices and public support facilities have been built, forming one innovation ecosystem with the first Techno Valley. The government continues to expand Pangyo and attract industry to make it a core hub of Korea's fourth industrial revolution, aiming for a future industrial city where global tech companies and startups grow together. In short, it is a national strategic industry cluster built around innovative technology and startups, not just an industrial park."
  },
  {
    "id": "yongin-platform",
    "name": "용인 플랫폼시티",
    "name_en": "Yongin Platform City",
    "location": "경기도 용인시 기흥구 보정동·마북동·신갈동, 수지구 상현동·풍덕천동 일원",
    "location_en": "Bojeong-dong, Mabuk-dong and Singal-dong in Giheung-gu, and Sanghyeon-dong and Pungdeokcheon-dong in Suji-gu, Yongin, Gyeonggi Province",
    "region": "경기",
    "image": "assets/img/gallery/g14.webp",
    "history": "용인 플랫폼시티는 GTX-A 구성역 개통과 수도권 남부 교통망 확충에 대응하기 위해 계획된 대규모 복합신도시 개발 사업이다. 해당 지역은 과거 저밀도 주거지와 일부 산업시설, 미개발 부지가 혼재된 지역이었으며, 판교와 분당, 수원을 연결하는 핵심 입지임에도 체계적인 도시 개발이 이루어지지 않았다. 경기도와 용인시는 GTX 구성역을 중심으로 수도권 남부의 새로운 경제 거점을 만들기 위해 플랫폼시티 계획을 수립했고, 첨단산업과 업무, 주거 기능을 통합한 미래형 도시 개발을 추진하게 되었다.",
    "history_en": "Yongin Platform City is a large mixed-use new town planned in response to the opening of GTX-A Guseong Station and the expansion of transport in the southern capital region. The area was a mix of low-density housing, some industrial sites and undeveloped land, and despite its key location linking Pangyo, Bundang and Suwon, it had not been developed in a planned way. Gyeonggi Province and Yongin city drew up the Platform City plan to create a new economic hub for the southern capital region around GTX Guseong Station, bringing together advanced industry, business and housing.",
    "plan": "현재 용인 플랫폼시티는 약 273만㎡ 규모로 조성되고 있으며, 경기도·용인시·경기주택도시공사·용인도시공사가 공동 시행하고 있다. 개발 구역에는 첨단산업단지, 업무시설, 주거시설, 상업시설, 문화공간이 함께 들어서며 GTX-A 구성역과 연계한 광역교통 중심 도시로 계획되어 있다. 또한 반도체 산업벨트와 판교테크노밸리를 연결하는 첨단산업 거점 역할도 기대되고 있다. 사업은 현재 기반시설 공사와 부지 조성이 진행 중이며 2030년 전후 완공을 목표로 추진되고 있다. 즉, 용인 플랫폼시티는 교통·산업·주거 기능이 결합된 수도권 남부 최대 규모의 미래형 복합도시 프로젝트라고 볼 수 있다.",
    "plan_en": "Yongin Platform City is being built on about 2.73 million㎡, developed jointly by Gyeonggi Province, Yongin city, Gyeonggi Housing & Urban Development Corporation and Yongin Urban Corporation. It will include advanced industrial complexes, offices, housing, shops and cultural spaces, planned as a transit-centered city linked to GTX-A Guseong Station. It is also expected to serve as an advanced industry hub connecting the semiconductor industry belt and Pangyo Techno Valley. Infrastructure and site work are under way, with completion targeted for around 2030. In short, it is the largest future-oriented mixed-use city project in the southern capital region, combining transport, industry and housing."
  },
  {
    "id": "seoul-station-north",
    "name": "서울역 북부역세권 개발",
    "name_en": "Seoul Station North Area Development",
    "location": "서울특별시 중구 봉래동2가 서울역 북부 철도 유휴부지 일대",
    "location_en": "Idle rail land north of Seoul Station, Bongnae-dong 2-ga, Jung-gu, Seoul",
    "region": "서울",
    "image": "assets/img/gallery/g15.webp",
    "history": "서울역 북부역세권 개발은 서울역 북쪽에 위치한 철도 유휴부지와 물류창고 부지를 복합업무·문화 중심지로 재생하기 위해 추진된 사업이다. 이 부지는 오랫동안 철도 관련 시설과 창고로 사용되었지만 활용도가 낮아지면서 사실상 방치된 상태로 남아 있었다. 서울시는 2008년부터 서울역 북부에 국제회의와 전시 기능을 갖춘 복합개발 계획을 검토하기 시작했으며, 서울역을 단순 교통시설이 아닌 국제 관문으로 재탄생시키기 위한 구상을 추진했다. 그러나 사업성 문제와 경기 침체 등으로 오랜 기간 지연되었고, 이후 코레일과 민간사업자 협력을 통해 사업이 재추진되면서 본격적인 개발 단계에 들어가게 되었다.",
    "history_en": "The Seoul Station North development was launched to regenerate idle rail land and warehouse sites north of Seoul Station into a mixed business and cultural center. The site was long used for rail facilities and warehouses, but as their use declined it was left largely abandoned. From 2008, the Seoul Metropolitan Government began considering a mixed-use plan with international conference and exhibition facilities north of the station, aiming to turn Seoul Station from a transport facility into an international gateway. The project was delayed for years by feasibility problems and economic downturns, then restarted through a partnership between Korail and private developers.",
    "plan": "현재 서울역 북부역세권은 국제회의장, 전시장, 호텔, 업무시설, 상업시설, 오피스텔 등이 결합된 국제문화복합단지로 개발되고 있다. 개발 면적은 약 3만㎡ 규모이며, 연면적 약 35만㎡ 규모의 복합단지가 조성될 예정이다. 서울시는 서울역 일대를 ‘글로벌 미래 플랫폼’으로 육성한다는 계획 아래 북부역세권 개발과 복합환승센터 구축, 철도 지하화, 선형공원 조성 등을 함께 추진하고 있으며, 2029년 전후 완공을 목표로 하고 있다. 즉, 서울역 북부역세권 개발은 단순한 역세권 개발이 아니라 서울역과 용산을 연결하는 국제업무·문화·교통 거점을 만드는 대규모 도시재생 프로젝트라고 볼 수 있다.",
    "plan_en": "The Seoul Station North area is being developed as an international cultural complex combining a convention center, exhibition halls, hotels, offices, shops and officetels. The site covers about 30,000㎡, with about 350,000㎡ of floor area planned. Under a plan to make the Seoul Station area a \"global future platform\", the city is also pursuing a transit center, moving rail lines underground and a linear park, with completion targeted for around 2029. In short, this is a large urban regeneration project creating an international business, culture and transport hub that links Seoul Station and Yongsan."
  },
  {
    "id": "jemulpo",
    "name": "제물포 르네상스",
    "name_en": "Jemulpo Renaissance",
    "location": "인천 중구·동구 제물포 일대",
    "location_en": "Jemulpo area, Jung-gu and Dong-gu, Incheon",
    "region": "인천",
    "image": "assets/img/gallery/g16.webp",
    "history": "제물포 르네상스는 개항기 이후 인천의 경제·무역 중심지 역할을 했던 제물포 원도심의 쇠퇴 문제를 해결하기 위해 추진된 도시재생 프로젝트이다. 과거 제물포항과 인천 내항 일대는 한국 근대화와 해상무역의 중심지였지만, 항만 기능이 외곽으로 이동하면서 지역 경제가 급격히 침체되었다. 이후 인천시는 역사·문화 자산을 활용한 원도심 재생 필요성을 강조하며 제물포 르네상스 계획을 발표했다.",
    "history_en": "Jemulpo Renaissance is an urban regeneration project to reverse the decline of Jemulpo, Incheon's old downtown and its center of commerce and trade since the port opened to foreign trade in the late 19th century. Jemulpo Port and Incheon Inner Harbor were once at the heart of Korea's modernization and maritime trade, but as port functions moved outward, the local economy fell sharply. Incheon city then stressed the need to regenerate the old downtown using its historical and cultural assets and announced the Jemulpo Renaissance plan.",
    "plan": "현재 제물포 르네상스는 인천 내항 재개발과 연계해 해양관광·문화·상업·업무 기능이 결합된 복합도시로 조성되고 있다. 수변공간 재정비와 역사문화 관광 활성화, 원도심 주거환경 개선 사업이 함께 추진되고 있으며, 인천시는 제물포를 국제 해양관광 중심지이자 원도심 재생 성공 모델로 육성하는 것을 목표로 하고 있다.",
    "plan_en": "Jemulpo Renaissance is creating a mixed-use city that combines marine tourism, culture, commerce and business, linked with the redevelopment of Incheon Inner Harbor. Waterfront improvements, historical and cultural tourism and better housing in the old downtown are being pursued together, with the aim of making Jemulpo an international marine tourism center and a model for regenerating old city centers."
  },
  {
    "id": "incheon-gyeyang",
    "name": "인천계양 신도시",
    "name_en": "Incheon Gyeyang New Town",
    "location": "인천 계양구 귤현·동양동 일대",
    "location_en": "Gyulhyeon-dong and Dongyang-dong, Gyeyang-gu, Incheon",
    "region": "인천",
    "image": "assets/img/gallery/g17.webp",
    "history": "인천계양 신도시는 서울과 가까운 입지에도 불구하고 개발 제한과 기반시설 부족으로 대규모 개발이 이루어지지 않았던 지역이다. 이후 수도권 서북부 주택 공급 확대와 광역교통망 확충 필요성이 커지면서 정부는 계양 지역을 3기 신도시로 지정했다. 인천공항과 김포공항 접근성이 뛰어난 입지적 장점 때문에 미래 성장 가능성이 높은 지역으로 평가받고 있다.",
    "history_en": "Despite being close to Seoul, the Gyeyang area saw no large-scale development because of development restrictions and poor infrastructure. As the need grew to expand housing and regional transit in the northwestern capital region, the government designated Gyeyang a third-generation new town. Its easy access to both Incheon and Gimpo airports gives it strong growth potential.",
    "plan": "현재 인천계양 신도시는 약 1만7000세대 규모의 스마트 신도시로 개발되고 있다. 친환경 공원과 자율주행·UAM 기반 미래 교통체계, 업무·상업시설이 함께 조성될 예정이며, GTX 및 철도망과 연계한 광역교통 개선도 추진되고 있다. 정부는 인천계양을 수도권 서북부의 미래형 자족도시로 육성하는 것을 목표로 하고 있다.",
    "plan_en": "Incheon Gyeyang is being developed as a smart new town of about 17,000 households. It will include eco-friendly parks, a future transport system based on self-driving vehicles and UAM (urban air mobility), and offices and shops, along with better regional transit linked to GTX and rail lines. The government aims to make Gyeyang a future-oriented, self-sufficient city for the northwestern capital region."
  },
  {
    "id": "third-new-towns",
    "name": "3기 신도시 전체",
    "name_en": "All Third-Generation New Towns",
    "location": "수도권 전역",
    "location_en": "Across the Seoul capital region",
    "region": "경기",
    "image": "assets/img/gallery/g18.webp",
    "history": "3기 신도시는 수도권 집값 안정과 대규모 주택 공급 확대를 위해 2018년부터 정부가 단계적으로 발표한 국가 주도 도시개발 정책이다. 기존 1·2기 신도시 이후 서울과 가까운 지역의 주택 수요가 급격히 증가하면서 새로운 대규모 택지 개발 필요성이 제기되었다. 이에 정부는 남양주 왕숙, 하남 교산, 고양 창릉, 인천 계양 등 수도권 주요 지역을 중심으로 새로운 신도시 조성을 추진하게 되었다.",
    "history_en": "The third-generation new towns are a national urban development policy announced in stages from 2018 to stabilize housing prices in the capital region and greatly expand housing supply. After the first- and second-generation new towns, housing demand near Seoul rose sharply, creating a need for new large-scale housing land. The government began building new towns in key areas of the capital region, including Namyangju Wangsuk, Hanam Gyosan, Goyang Changneung and Incheon Gyeyang.",
    "plan": "현재 3기 신도시는 수도권 전역에서 동시에 개발이 진행되고 있으며, 주택 공급뿐 아니라 자족형 산업단지와 광역교통망 구축을 함께 추진하고 있다. GTX와 도시철도 연계, 스마트시티 기술, 친환경 공원 조성 등이 핵심 개발 요소로 포함되어 있으며, 정부는 서울 중심 의존도를 줄이고 지역 내 일자리와 생활 인프라를 동시에 구축하는 것을 목표로 하고 있다.",
    "plan_en": "The third-generation new towns are being developed at the same time across the capital region, combining housing with self-sufficient industrial complexes and regional transit networks. Links to GTX and urban rail, smart city technology and eco-friendly parks are key elements, and the government aims to reduce dependence on Seoul by building local jobs and everyday infrastructure at the same time."
  },
  {
    "id": "gwangmyeong-siheung",
    "name": "광명시흥 3기 신도시",
    "name_en": "Gwangmyeong-Siheung Third-Generation New Town",
    "location": "경기 광명시·시흥시 일대",
    "location_en": "Gwangmyeong and Siheung, Gyeonggi Province",
    "region": "경기",
    "image": "assets/img/gallery/g19.webp",
    "history": "광명시흥 3기 신도시는 수도권 주택 공급 부족 문제를 해결하기 위해 정부가 추진한 3기 신도시 정책의 핵심 사업 중 하나이다. 이 지역은 과거 공장, 물류시설, 농경지 등이 혼재된 개발 제한 지역이었으며, 서울 접근성이 뛰어남에도 체계적인 도시 개발이 부족했다. 이후 정부는 수도권 서남부 균형발전과 대규모 주택 공급을 위해 광명·시흥 지역을 3기 신도시로 지정했다.",
    "history_en": "Gwangmyeong-Siheung is one of the core projects of the government's third-generation new town policy, launched to address the housing shortage in the capital region. The area was a development-restricted mix of factories, logistics facilities and farmland, and despite excellent access to Seoul, it lacked planned urban development. The government designated Gwangmyeong and Siheung a third-generation new town to balance development in the southwestern capital region and supply housing on a large scale.",
    "plan": "현재 광명시흥 3기 신도시는 약 7만 세대 규모의 대규모 자족형 신도시로 개발되고 있다. 주거단지뿐 아니라 첨단산업단지, 공원, 광역교통망, 자족업무시설이 함께 조성될 예정이며, GTX와 도시철도 연계도 추진되고 있다. 정부는 친환경 스마트도시 개념을 적용해 수도권 서남부의 새로운 산업·주거 중심지로 육성할 계획이다.",
    "plan_en": "Gwangmyeong-Siheung is being developed as a large, self-sufficient new town of about 70,000 households. Along with housing, it will include advanced industrial complexes, parks, regional transit and business facilities, with links to GTX and urban rail also planned. Applying an eco-friendly smart city concept, the government plans to make it a new industrial and residential center for the southwestern capital region."
  },
  {
    "id": "changdong-sanggye",
    "name": "창동상계 신경제중심지",
    "name_en": "Changdong-Sanggye New Economic Center",
    "location": "서울 도봉구 창동·노원구 상계동 일대",
    "location_en": "Chang-dong, Dobong-gu and Sanggye-dong, Nowon-gu, Seoul",
    "region": "서울",
    "image": "assets/img/gallery/g20.webp",
    "history": "창동상계 신경제중심지는 오랫동안 주거 중심 베드타운 역할을 해온 서울 동북권 지역의 경제 기반을 강화하기 위해 추진된 도시재생 프로젝트이다. 이 지역은 대규모 아파트 단지가 밀집해 있었지만 업무·문화시설이 부족했고, 서울 중심부에 비해 발전 속도가 느리다는 문제가 지속적으로 제기되었다. 이후 서울시는 동북권 균형발전을 목표로 창동·상계 일대를 문화·창업·산업 중심지로 전환하는 계획을 발표했다",
    "history_en": "Changdong-Sanggye New Economic Center is an urban regeneration project to strengthen the economic base of northeastern Seoul, which has long served as a bedroom community. The area is packed with large apartment complexes but lacked offices and cultural facilities, and its slower development compared with central Seoul was a long-standing concern. The Seoul Metropolitan Government then announced a plan to transform Chang-dong and Sanggye into a center for culture, startups and industry to balance development in the northeast.",
    "plan": "현재 창동상계 신경제중심지는 서울아레나, 창동역 복합환승센터, 청년창업시설, 문화산업 클러스터 등을 포함한 대규모 복합개발 사업으로 진행되고 있다. GTX-C 노선과 광역교통망 확충 계획도 함께 추진되며, 음악·공연 산업과 창업 기능을 결합한 새로운 경제 중심지 조성이 목표이다. 서울시는 이를 통해 동북권 자족 기능을 강화하고 지역 경제 활성화를 추진하고 있다.",
    "plan_en": "Changdong-Sanggye is under way as a large mixed-use development including Seoul Arena, a Changdong Station transit center, youth startup facilities and a cultural industry cluster. The GTX-C line and expanded regional transit are also planned, with the goal of creating a new economic center that combines the music and performance industries with startups. Through this, the city aims to make northeastern Seoul more self-sufficient and revitalize the local economy."
  },
  {
    "id": "magok-mice",
    "name": "마곡 MICE 복합단지",
    "name_en": "Magok MICE Complex",
    "location": "서울 강서구 마곡동 일대",
    "location_en": "Magok-dong, Gangseo-gu, Seoul",
    "region": "서울",
    "image": "assets/img/gallery/g21.webp",
    "history": "마곡 MICE 복합단지는 과거 농경지와 저개발 지역이었던 마곡지구를 첨단산업과 국제업무 중심지로 육성하기 위해 추진된 사업이다. 서울 서남권은 상대적으로 개발이 늦었던 지역이었지만, 김포공항과 인접한 입지적 장점 때문에 성장 가능성이 높게 평가되었다. 이후 서울시는 LG사이언스파크를 중심으로 한 첨단산업 클러스터를 조성했고, 이를 기반으로 전시·컨벤션 기능까지 확대하기 위해 MICE 복합단지 개발을 추진하게 되었다.",
    "history_en": "The Magok MICE Complex is part of a project to turn the Magok district, once farmland and an underdeveloped area, into a center for advanced industry and international business. Southwestern Seoul developed relatively late, but its location next to Gimpo Airport gave it strong growth potential. Seoul then built an advanced industry cluster centered on LG Science Park and, building on it, pursued a MICE complex to add exhibition and convention functions.",
    "plan": "현재 마곡 MICE 복합단지는 대규모 전시장, 컨벤션센터, 호텔, 업무시설, 상업시설 등을 포함한 국제 비즈니스 단지로 개발되고 있다. 서울시는 코엑스급 MICE 시설을 서남권에 추가 조성해 지역 균형발전을 추진하고 있으며, 김포공항과 첨단산업단지를 연계한 글로벌 비즈니스 허브 구축을 목표로 하고 있다. 향후 마곡은 연구개발과 국제행사가 결합된 미래형 산업·업무 중심지로 성장할 예정이다.",
    "plan_en": "The Magok MICE Complex is being developed as an international business district with large exhibition halls, a convention center, hotels, offices and shops. The city is adding COEX-scale MICE (meetings, incentives, conventions and exhibitions) facilities in southwestern Seoul to balance regional development, aiming to build a global business hub that links Gimpo Airport with the advanced industrial complex. Magok is expected to grow into a future industrial and business center combining R&D with international events."
  },
  {
    "id": "jamsil-mice",
    "name": "잠실 스포츠·MICE 복합공간",
    "name_en": "Jamsil Sports and MICE Complex",
    "location": "서울 송파구 잠실동 10 일대",
    "location_en": "Around 10 Jamsil-dong, Songpa-gu, Seoul",
    "region": "서울",
    "image": "assets/img/gallery/g22.webp",
    "history": "잠실 스포츠·MICE 복합공간 개발은 1988 서울올림픽을 위해 조성된 잠실종합운동장 일대 시설의 노후화 문제에서 시작되었다. 잠실운동장은 오랫동안 서울을 대표하는 스포츠·문화 공간 역할을 했지만, 시설이 오래되면서 국제 경쟁력이 약화되었다. 이후 서울시는 잠실 일대를 스포츠·전시·관광·업무 기능이 결합된 미래형 복합단지로 재개발하기 위해 대규모 프로젝트를 추진하게 되었다.",
    "history_en": "The Jamsil Sports and MICE Complex grew out of the aging of the Jamsil Sports Complex, built for the 1988 Seoul Olympics. Jamsil long served as one of Seoul's signature sports and cultural venues, but as its facilities aged, it lost international competitiveness. The Seoul Metropolitan Government then launched a large project to redevelop Jamsil as a future-oriented complex combining sports, exhibitions, tourism and business.",
    "plan": "현재 잠실 스포츠·MICE 복합공간은 국제 전시장, 컨벤션센터, 호텔, 스포츠시설, 수변공원 등을 포함한 대규모 복합단지로 개발되고 있다. 기존 잠실야구장은 돔구장 형태로 재건축될 예정이며, MICE 산업과 관광 기능을 강화하기 위한 업무·상업시설도 함께 조성된다. 서울시는 한강과 탄천을 연결하는 보행 중심 수변 공간도 함께 개발해 잠실 일대를 국제 관광·비즈니스 중심지로 육성할 계획이다.",
    "plan_en": "The Jamsil Sports and MICE Complex is being developed as a large complex with an international exhibition center, convention center, hotels, sports facilities and a waterfront park. The existing Jamsil Baseball Stadium will be rebuilt as a domed stadium, with offices and shops added to strengthen the MICE and tourism industries. The city also plans pedestrian-friendly waterfront space linking the Han River and Tancheon Stream, making Jamsil an international tourism and business center."
  },
  {
    "id": "yeongdong-daero",
    "name": "영동대로 지하공간 복합개발",
    "name_en": "Yeongdong-daero Underground Mixed-Use Development",
    "location": "서울 강남구 삼성동 영동대로 일대",
    "location_en": "Yeongdong-daero, Samseong-dong, Gangnam-gu, Seoul",
    "region": "서울",
    "image": "assets/img/gallery/g23.webp",
    "history": "영동대로 지하공간 복합개발은 삼성역 일대 교통 혼잡 문제와 수도권 광역교통망 확충 계획에 따라 추진된 대규모 지하 복합개발 사업이다. 강남권은 오랫동안 서울의 주요 업무 중심지 역할을 해왔지만, 철도와 버스 환승 체계가 분산되어 교통 효율성이 낮다는 문제가 있었다. 이후 GTX와 광역철도 계획이 본격화되면서 서울시는 영동대로 지하 공간을 통합 개발해 수도권 교통의 핵심 허브로 만들겠다는 계획을 발표했다.",
    "history_en": "The Yeongdong-daero underground development is a large project launched to ease traffic congestion around Samseong Station and to expand the capital region's transit network. Gangnam has long been one of Seoul's main business centers, but its rail and bus transfers were scattered and inefficient. As the GTX and regional rail plans moved forward, Seoul announced a plan to develop the space beneath Yeongdong-daero as a single hub for the capital region's transit.",
    "plan": "현재 영동대로 지하공간 복합개발은 GTX-A·C 노선과 위례신사선, 지하철 2호선·9호선 등을 연결하는 국내 최대 규모의 복합환승센터 조성 사업으로 진행되고 있다. 지하에는 대규모 환승 공간과 상업·문화시설이 함께 들어설 예정이며, 지상 공간은 보행 친화형 광장과 녹지 중심 공간으로 재편된다. 서울시는 이를 통해 삼성역 일대를 국제교류복합지구의 핵심 교통 중심지로 육성하고, 강남권 접근성을 획기적으로 개선하는 것을 목표로 하고 있다.",
    "plan_en": "The Yeongdong-daero development is building Korea's largest transit center, connecting the GTX-A and GTX-C lines, the Wirye-Sinsa line and Subway Lines 2 and 9. Underground, it will hold large transfer spaces with shops and cultural facilities, and the street level will be reorganized into pedestrian-friendly plazas and green space. Through this, Seoul aims to make the Samseong Station area the transport core of the International Exchange Complex District and greatly improve access to Gangnam.",
    "featured": true
  },
  {
    "id": "gbc-district",
    "name": "국제교류복합지구",
    "name_en": "International Exchange Complex District",
    "location": "서울 강남구 삼성동 ~ 송파구 잠실동 일대",
    "location_en": "Samseong-dong, Gangnam-gu to Jamsil-dong, Songpa-gu, Seoul",
    "region": "서울",
    "image": "assets/img/gallery/g24.webp",
    "history": "국제교류복합지구는 1980년대 서울올림픽과 아시안게임을 계기로 조성된 잠실종합운동장과 코엑스를 중심으로 발전한 지역을 국제업무·MICE 중심지로 재편하기 위해 추진된 개발 계획이다. 삼성동 코엑스 일대는 오랫동안 서울의 대표적인 전시·컨벤션 중심지 역할을 해왔지만, 시설 노후화와 교통 혼잡 문제가 지속적으로 제기되었다. 이후 서울시는 강남권 국제 경쟁력을 강화하기 위해 잠실운동장, 현대차 GBC 부지, 영동대로 복합환승센터 등을 하나로 연결하는 국제교류복합지구 구상을 발표했고, 서울 동남권을 글로벌 비즈니스·관광·MICE 중심지로 육성하는 장기 개발 전략을 추진하게 되었다.",
    "history_en": "The International Exchange Complex District is a plan to reshape the area that grew around the Jamsil Sports Complex and COEX, built for the Seoul Olympics and Asian Games in the 1980s, into a center for international business and MICE. The COEX area in Samseong-dong has long been Seoul's main exhibition and convention center, but aging facilities and traffic congestion were persistent problems. To strengthen Gangnam's international competitiveness, the city announced a plan that connects the Jamsil Sports Complex, the Hyundai Motor GBC site and the Yeongdong-daero transit center, and set a long-term strategy to make southeastern Seoul a global center for business, tourism and MICE.",
    "plan": "현재 국제교류복합지구는 코엑스, 잠실 스포츠·MICE 단지, 영동대로 복합환승센터, 현대차 글로벌비즈니스센터(GBC)를 연계한 초대형 도시개발 프로젝트로 추진되고 있다. 개발 구역에는 국제업무시설, 호텔, 전시장, 문화시설, 대규모 상업공간과 수변공원이 조성될 예정이며, GTX와 광역철도 중심의 교통 허브 구축도 함께 진행된다. 서울시는 강남권 전체를 국제 비즈니스와 관광 기능이 결합된 글로벌 중심지로 조성하는 것을 목표로 하고 있으며, 단계별 개발을 통해 2030년대 완성을 추진하고 있다.",
    "plan_en": "The International Exchange Complex District is a very large urban development linking COEX, the Jamsil sports and MICE complex, the Yeongdong-daero transit center and the Hyundai Motor Global Business Center (GBC). It will include international offices, hotels, exhibition halls, cultural facilities, large retail space and a waterfront park, along with a transit hub centered on GTX and regional rail. Seoul aims to make the whole Gangnam area a global center combining international business and tourism, with completion planned in phases through the 2030s.",
    "featured": true
  },
  {
    "id": "yongsan-core",
    "name": "용산서울코어",
    "name_en": "Yongsan Seoul Core",
    "location": "서울 용산구 한강로3가",
    "location_en": "Hangang-ro 3-ga, Yongsan-gu, Seoul",
    "region": "서울",
    "image": "assets/img/gallery/g25.webp",
    "history": "용산국제업무지구는 원래 철도정비창과 물류·차량기지로 사용되던 용산역 일대 대규모 국유·철도 부지를 국제업무 중심지로 바꾸려는 계획에서 출발했다. 2000년대 중반부터 ‘한강로·용산역세권을 서울의 글로벌 비즈니스 허브로 만들겠다’는 구상이 본격화되었고, 2007년 전후 대규모 민간개발 방식으로 추진되었지만, 글로벌 금융위기와 사업비 부담, 토지 보상 및 이해관계 갈등, 서부이촌동 통합개발 논란 등이 겹치며 2013년 사실상 무산되었다. 이후 약 10년 동안 사업은 멈춰 있었지만, 용산이 서울역·용산역·한강을 연결하는 핵심 입지라는 점 때문에 재추진 필요성이 계속 제기되었고, 서울시는 2024년 다시 도시개발구역 지정과 개발계획 수립 절차를 진행했다. 현재 계획은 용산구 한강로3가 일대 약 45만㎡를 업무·주거·문화·상업·녹지 기능이 결합된 ‘입체복합수직도시’이자 탄소중립형 국제업무지구로 조성하는 방향이며, 2024년 개발계획 고시와 사업시행자 지정, 2025년 실시계획인가를 거쳐 기반시설 공사와 토지공급을 추진하고, 2028년 전후 기반시설 완성 및 2030년대 초반 입주를 목표로 하고 있다.",
    "history_en": "The Yongsan International Business District began as a plan to turn the large state and rail land around Yongsan Station, once used as a rail maintenance depot and for logistics and vehicle bases, into an international business center. The idea of making the Hangang-ro and Yongsan Station area Seoul's global business hub took off in the mid-2000s, and around 2007 it was pursued as a large private development. But the global financial crisis, high project costs, disputes over land compensation and stakeholders, and controversy over including Seobu Ichon-dong combined to effectively cancel it in 2013. The project then stalled for about 10 years, but calls to revive it continued because Yongsan is a key location linking Seoul Station, Yongsan Station and the Han River, and in 2024 the city again designated it an urban development zone and drew up a development plan. The current plan is to make about 450,000㎡ around Hangang-ro 3-ga a carbon-neutral international business district and a \"vertical compact city\" combining business, housing, culture, commerce and green space. Following the development plan announcement and designation of developers in 2024 and approval of the implementation plan in 2025, infrastructure work and land supply are under way, with infrastructure finished around 2028 and the first occupants moving in in the early 2030s.",
    "plan": "용산서울코어는 앞으로 용산국제업무지구를 서울의 새로운 글로벌 비즈니스 중심지로 조성하는 것을 목표로 추진된다. 개발 대상지는 서울 용산구 한강로3가 일대 약 45만6천㎡ 규모이며, 코레일과 SH공사가 사업시행자로 참여해 먼저 도로, 공원, 문화시설, 주차장 등 기반시설을 공공이 조성하고, 이후 민간이 개별 필지를 개발하는 방식으로 진행된다. 개발 구역은 크게 국제업무존, 업무복합존, 업무지원존으로 나뉘며, 국제업무존에는 글로벌 기업 본사와 초고층 업무시설을 유치하고, 업무복합존에는 오피스·리테일·주거 기능을 결합하며, 업무지원존에는 주거·의료·교육시설 등을 배치하는 계획이다. 서울시는 2028년까지 토지 조성과 기반시설 공사를 마무리하고, 2031년 건축물 준공 및 첫 입주, 2035년 전체 조성을 목표로 하고 있다. 즉, 용산서울코어는 단순한 업무지구 개발이 아니라, 업무·주거·상업·문화·녹지가 한 공간 안에서 연결되는 고밀도 복합도시를 만드는 장기 도시개발 프로젝트라고 볼 수 있다.",
    "plan_en": "Yongsan Seoul Core aims to make the Yongsan International Business District Seoul's new global business center. The site covers about 456,000㎡ around Hangang-ro 3-ga, Yongsan-gu. Korail and SH Corporation are the developers: the public sector first builds infrastructure such as roads, parks, cultural facilities and parking, and private developers then build on individual plots. The district is divided into an international business zone, a mixed business zone and a business support zone. The international business zone will attract global headquarters and super-tall offices, the mixed zone will combine offices, retail and housing, and the support zone will hold housing, medical and educational facilities. Seoul aims to finish land preparation and infrastructure by 2028, complete the first buildings with the first occupants in 2031, and finish the whole district by 2035. In short, Yongsan Seoul Core is a long-term project to build a dense mixed-use city where business, housing, commerce, culture and green space connect in one place.",
    "featured": true
  }
];

window.URS_SITES = [
  {
    "id": "myeongwol",
    "name": "명월국민학교",
    "name_en": "Myeongwol Elementary School (former)",
    "location": "제주특별자치도 제주시 한림읍 명월리",
    "location_en": "Myeongwol-ri, Hallim-eup, Jeju City, Jeju Special Self-Governing Province",
    "region": "제주",
    "years": "1955년 개교 → 1993년 3월 폐교된 초등학교",
    "years_en": "Elementary school opened in 1955, closed in March 1993",
    "status": "unused",
    "summary": "2018년, 마을회 주도로 기존 시설을 전면 리모델링하여 카페·갤러리·복합문화공간으로 새롭게 재탄생한 장소입니다.",
    "summary_en": "In 2018, the village association led a full remodel of the old buildings, reopening them as a café, gallery and cultural space.",
    "details": [
      "옛 학용품, 빈티지 문구류, 오래된 가구 등을 활용한 감성적인 인테리어로 꾸며져 방문객들에게 강한 향수와 지역 정체성을 전달해 왔습니다.",
      "지역 커뮤니티 전시회, 소규모 공연, 문화 프로그램 등이 활발히 운영되던 공간이었으나, 최근 재임대 논란 및 운영 이슈로 인해 현재는 임대 또는 휴업 상태입니다.",
      "현재 이 공간은 새로운 활용 아이디어와 창의적 리모델링 방향을 기다리는 잠재력 높은 후보지입니다. 여러분의 디자인 제안으로 이곳을 다시 지역의 활기 중심지로 되살려 주세요."
    ],
    "details_en": [
      "Decorated with old school supplies, vintage stationery and old furniture, its interior gave visitors a strong sense of nostalgia and local identity.",
      "It was an active space for community exhibitions, small performances and cultural programs, but after a recent dispute over re-leasing and other operating issues, it is now up for lease or temporarily closed.",
      "Today it is a promising site waiting for new uses and a creative remodel. With your design, bring it back to life as the lively center of the village."
    ],
    "image": "assets/img/sites/s01.webp"
  },
  {
    "id": "mureung",
    "name": "무릉초 무릉동분교장",
    "name_en": "Mureung Elementary School, Mureung-dong Branch",
    "location": "제주 서귀포시 대정읍 무릉리 581-1",
    "location_en": "581-1 Mureung-ri, Daejeong-eup, Seogwipo, Jeju",
    "region": "제주",
    "years": "1965년 개교 → 1994년 폐교",
    "years_en": "Opened in 1965, closed in 1994",
    "status": "unused",
    "summary": "한때 지역 아이들의 배움터였던 이 공간은 현재 폐교를 기반으로 한 농촌형 커뮤니티 공간으로 새로운 역할을 이어가고 있습니다.",
    "summary_en": "Once a place of learning for local children, this school has gone on to serve as a rural community space.",
    "details": [
      "폐교 이후, 마을 농산물 직거래 장터, 체험장, 카페 운영 등 다양한 형태로 재활용되며 지역 주민들의 소득 창출과 커뮤니티 활성화를 동시에 실현했던 공간으로 활용된 기록이 있습니다.",
      "자연에 둘러싸인 농촌 환경 속에서 농업, 체험, 휴식, 지역 문화가 결합된 ‘농업 + 문화 + 커뮤니티’ 중심의 공간으로 운영되며, 도시에서는 경험하기 힘든 교류형·체험형 장소로 기능해 왔습니다.",
      "현재 이 공간은 새로운 운영 및 리모델링 방향을 기다리는 상태로, ‘농업 + 문화 + 커뮤니티 + 숙박/체험’이 결합된 복합 치유·체험형 공간으로 재탄생할 수 있는 높은 잠재력을 지니고 있습니다.",
      "여러분의 창의적인 디자인 아이디어로, 이곳을 자연과 사람이 연결되는 제주형 공공 공간으로 다시 완성해 주세요."
    ],
    "details_en": [
      "After it closed, records show it was reused as a village farmers' market, a hands-on activity space and a café, earning income for residents while bringing the community together.",
      "Surrounded by nature in a farming village, it ran as a place that combined farming, culture and community, offering the kind of exchange and hands-on experience that is hard to find in the city.",
      "It is now waiting for a new way to operate and be remodeled, with strong potential to become a healing and hands-on space that combines farming, culture, community and overnight stays.",
      "With your creative design ideas, complete it again as a Jeju-style public space that connects people and nature."
    ],
    "image": "assets/img/sites/s02.webp"
  },
  {
    "id": "sanyeong",
    "name": "고산초 산영분교장",
    "name_en": "Gosan Elementary School, Sanyeong Branch",
    "location": "제주 제주시 한경면 산양리",
    "location_en": "Sanyang-ri, Hangyeong-myeon, Jeju City, Jeju",
    "region": "제주",
    "years": "1958년 개교 → 1995년 3월 폐교된 초등학교 분교였습니다.",
    "years_en": "Elementary school branch opened in 1958, closed in March 1995",
    "status": "unused",
    "summary": "이후 별도의 활용 없이 오랜 기간 미활용(방치) 상태로 남아 있었지만, 기존 건물과 넓은 부지는 여전히 남아 있어, 향후 새로운 콘텐츠나 커뮤니티 공간으로의 리모델링 가능 후보지로 주목받고 있습니다.",
    "summary_en": "It sat unused for many years after closing, but the buildings and large grounds remain, and it is drawing attention as a candidate for remodeling into a new cultural or community space.",
    "details": [
      "제주의 서부 자연환경 속이라는 입지를 살려, 문화·교육·창작·체험 등이 결합된 ‘농촌 + 자연 + 커뮤니티’ 복합 공간으로 재탄생시킬 잠재력이 충분합니다.",
      "여러분의 디자인 제안과 상상력으로, 이 공간을 다시 지역 주민과 방문객이 머무르고 교류하는 제주형 공공 플랫폼으로 완성해 주세요."
    ],
    "details_en": [
      "Set in the natural landscape of western Jeju, it has every potential to become a combined \"rural + nature + community\" space for culture, education, creative work and hands-on activities.",
      "With your design proposal and imagination, complete it as a Jeju-style public platform where residents and visitors stay and connect."
    ],
    "image": "assets/img/sites/s03.webp"
  },
  {
    "id": "yeongun",
    "name": "한려초등학교 영운분교장",
    "name_en": "Hallyeo Elementary School, Yeongun Branch",
    "location": "경상남도 통영시 산양읍 영운리",
    "location_en": "Yeongun-ri, Sanyang-eup, Tongyeong, South Gyeongsang Province",
    "region": "경남",
    "years": "1967년 개교 → 2021년 2월 28일 폐교된 공립 초등학교 분교",
    "years_en": "Public elementary school branch opened in 1967, closed on February 28, 2021",
    "status": "unused",
    "summary": "섬 지역 아이들의 배움터였던 이 공간은, 학생 수 감소와 통합 결정으로 공식 폐교되었습니다.",
    "summary_en": "Once the school for children on the island, it officially closed after student numbers fell and it was merged into another school.",
    "details": [
      "폐교 이후 현재까지 별도 활용 없이 미활용 상태로 남아 있으며, 바다와 산이 동시에 보이는 섬 입지라는 독보적인 공간적 잠재력을 지니고 있습니다.",
      "이곳은 **‘섬 + 자연 + 예술 + 체류 + 커뮤니티’**가 결합된 복합 거점으로 재탄생할 수 있는 높은 가능성을 가진 장소입니다.",
      "여러분의 디자인 제안으로, 이곳을 섬 소멸을 막는 문화·체험·체류 플랫폼으로 되살려 주세요."
    ],
    "details_en": [
      "It has stayed unused since it closed, and its island setting, with views of both the sea and the mountains, gives it a unique potential.",
      "It has strong potential to be reborn as a combined hub for **\"island + nature + art + stays + community\"**.",
      "With your design, revive it as a platform for culture, activities and stays that helps keep the island from emptying out."
    ],
    "image": "assets/img/sites/s04.webp"
  },
  {
    "id": "gabae",
    "name": "동부초등학교 가배분교장(가배국민학교)",
    "name_en": "Dongbu Elementary School, Gabae Branch (former Gabae Elementary School)",
    "location": "경상남도 거제시 동부면 가배리",
    "location_en": "Gabae-ri, Dongbu-myeon, Geoje, South Gyeongsang Province",
    "region": "경남",
    "years": "1950년대 개교 → 1999년 폐교된 공립 초등학교 분교",
    "years_en": "Public elementary school branch opened in the 1950s, closed in 1999",
    "status": "unused",
    "summary": "어촌 마을 아이들의 배움터였던 가배분교는, 학생 수 감소로 1999년 공식 폐교되었습니다.",
    "summary_en": "Once the school for a fishing village's children, the Gabae branch officially closed in 1999 as student numbers fell.",
    "details": [
      "이후 현재까지 임대·매각·리모델링 없이 장기간 미활용 상태로 남아 있으며, 바다와 맞닿은 어촌 마을 한가운데 위치해 있습니다.",
      "이곳은 ‘어촌 + 해양 + 로컬문화 + 체험형 커뮤니티’ 중심 공간으로 전환할 수 있는 이상적인 조건을 갖추고 있습니다.",
      "여러분의 상상력으로, 이 폐교를 어촌 라이프랩·해양 문화 스테이션으로 재탄생시켜 주세요."
    ],
    "details_en": [
      "It has stayed unused ever since, with no lease, sale or remodel, and it sits in the middle of a fishing village right by the sea.",
      "It has ideal conditions to become a space centered on \"fishing village + sea + local culture + hands-on community\".",
      "Use your imagination to turn this closed school into a fishing-village life lab and marine culture station."
    ],
    "image": "assets/img/sites/s05.webp"
  },
  {
    "id": "wondong",
    "name": "두촌초등학교 원동분교장",
    "name_en": "Duchon Elementary School, Wondong Branch",
    "location": "강원특별자치도 홍천군 두촌면 원동리",
    "location_en": "Wondong-ri, Duchon-myeon, Hongcheon County, Gangwon Special Self-Governing Province",
    "region": "강원",
    "years": "1953년 개교 → 1996년 3월 1일 폐교된 공립 분교",
    "years_en": "Public school branch opened in 1953, closed on March 1, 1996",
    "status": "unused",
    "summary": "산골 마을 아이들의 배움터였던 원동분교는, 1996년 공식 폐교되었습니다.",
    "summary_en": "Once the school for a mountain village's children, the Wondong branch officially closed in 1996.",
    "details": [
      "이후 교사동과 운동장 모두 철거되지 않은 채 미활용 상태로 존치되어 있으며, 숲·하천·농경지가 어우러진 전형적인 농촌 입지를 지니고 있습니다.",
      "이곳은 **‘농촌 + 자연 치유 + 체류 + 생태 교육’**이 결합된 복합 리트리트 공간으로 확장 가능한 잠재 후보지입니다.",
      "여러분의 디자인 제안으로, 이곳을 농촌형 체류 캠퍼스로 다시 설계해 주세요."
    ],
    "details_en": [
      "Its classroom building and playground were never demolished and remain unused, in a typical rural setting of forest, stream and farmland.",
      "It is a potential site for a retreat that combines **\"rural life + healing in nature + stays + ecology education\"**.",
      "With your design, redesign it as a rural campus for longer stays."
    ],
    "image": "assets/img/sites/s06.webp"
  },
  {
    "id": "jangam",
    "name": "백봉초등학교 장암분교장(장암국민학교)",
    "name_en": "Baekbong Elementary School, Jangam Branch (former Jangam Elementary School)",
    "location": "충청북도 괴산군 청안면 장암리",
    "location_en": "Jangam-ri, Cheongan-myeon, Goesan County, North Chungcheong Province",
    "region": "충북",
    "years": "1951년 → 1999년 폐교된 공립 분교",
    "years_en": "Public school branch, 1951 to 1999",
    "status": "unused",
    "summary": "농촌 마을 배움터였던 장암분교는 1999년 공식 폐교되었습니다.",
    "summary_en": "Once the school for a farming village, the Jangam branch officially closed in 1999.",
    "details": [
      "현재까지 건물과 부지가 모두 남아 있으나 활용되지 않고, 교육청 폐교재산으로 관리 중인 유휴 공간입니다.",
      "이 공간은 **‘숲 + 농촌 + 커뮤니티 + 휴식’**이 결합된 힐링형 로컬 플랫폼으로 재생할 수 있는 조건을 갖추고 있습니다.",
      "여러분의 디자인으로, 이곳을 농촌 치유형 커뮤니티 캠퍼스로 되살려 주세요."
    ],
    "details_en": [
      "Its buildings and grounds still stand but are unused, managed by the education office as closed-school property.",
      "It has the right conditions to be regenerated as a healing local platform that combines **\"forest + rural life + community + rest\"**.",
      "With your design, bring it back as a rural, healing community campus."
    ],
    "image": "assets/img/sites/s07.webp"
  },
  {
    "id": "ungok",
    "name": "백봉초등학교 운곡분교장 (운곡국민학교)",
    "name_en": "Baekbong Elementary School, Ungok Branch (former Ungok Elementary School)",
    "location": "충청북도 괴산군 연풍면 운곡리",
    "location_en": "Ungok-ri, Yeonpung-myeon, Goesan County, North Chungcheong Province",
    "region": "충북",
    "years": "1953년 → 1995년 폐교된 공립 분교",
    "years_en": "Public school branch, 1953 to 1995",
    "status": "unused",
    "summary": "운곡분교는 1995년 공식 폐교 이후, 현재까지 활용 없이 방치된 폐교입니다.",
    "summary_en": "Since it officially closed in 1995, the Ungok branch has been left abandoned and unused.",
    "details": [
      "산과 들이 펼쳐진 깊은 농촌 지역에 위치해 있으며, 외부 간섭이 적어 장기 체류형 공간으로 전환하기 좋은 입지를 갖추고 있습니다.",
      "이곳은 **‘자연 + 체류 + 창작 + 마을 커뮤니티’**가 결합된 복합 공간으로 재탄생할 수 있습니다.",
      "여러분의 아이디어로, 이곳을 자연 속 로컬 크리에이티브 캠퍼스로 완성해 주세요."
    ],
    "details_en": [
      "It sits deep in farm country among mountains and fields, and with little outside disturbance it is well placed to become a space for long stays.",
      "It can be reborn as a combined space for **\"nature + stays + creative work + village community\"**.",
      "With your ideas, complete it as a local creative campus in the middle of nature."
    ],
    "image": "assets/img/sites/s08.webp"
  },
  {
    "id": "sajeong",
    "name": "무극초등학교 사정분교장(음성 제2상소학교 부설 사정간이학교)",
    "name_en": "Mugeuk Elementary School, Sajeong Branch (formerly Sajeong Simplified School of Eumseong No. 2 Sangso School)",
    "location": "충청북도 음성군 음성읍 사정리",
    "location_en": "Sajeong-ri, Eumseong-eup, Eumseong County, North Chungcheong Province",
    "region": "충북",
    "years": "1939년 → 1995년 폐교된 공립 분교",
    "years_en": "Public school branch, 1939 to 1995",
    "status": "unused",
    "summary": "사정분교는 1995년 공식 폐교 이후 현재까지 미활용 상태로 유지되고 있습니다.",
    "summary_en": "Since it officially closed in 1995, the Sajeong branch has remained unused.",
    "details": [
      "농촌 마을 중심에 위치한 이 공간은 주민 커뮤니티, 체험 공간, 로컬 창업 거점으로 재탄생할 수 있는 구조를 지니고 있습니다.",
      "이곳은 ‘농촌 + 커뮤니티 + 재생 + 체류’ 복합 플랫폼 후보지입니다.",
      "여러분의 디자인으로, 이 폐교를 로컬 라이프 허브로 되살려 주세요."
    ],
    "details_en": [
      "Located in the center of a farming village, its layout suits a new life as a community space for residents, a place for hands-on activities, or a base for local startups.",
      "It is a candidate site for a combined \"rural + community + regeneration + stays\" platform.",
      "With your design, bring this closed school back to life as a hub for local life."
    ],
    "image": "assets/img/sites/s09.webp"
  },
  {
    "id": "jangpung",
    "name": "장연초등학교 장풍분교장",
    "name_en": "Jangyeon Elementary School, Jangpung Branch",
    "location": "충청북도 괴산군 장연면 장암리 285번지",
    "location_en": "285 Jangam-ri, Jangyeon-myeon, Goesan County, North Chungcheong Province",
    "region": "충북",
    "years": "1939년 개교 → 1995년 폐교된 공립 분교",
    "years_en": "Public school branch opened in 1939, closed in 1995",
    "status": "unused",
    "summary": "장풍분교는 농촌 지역 아이들의 배움터로 운영되다, 1995년 학생 수 감소로 공식 폐교되었습니다.",
    "summary_en": "The Jangpung branch served as the school for a farming area until it officially closed in 1995 as student numbers fell.",
    "details": [
      "폐교 이후 현재까지 별도의 활용 없이 미활용 상태로 유지되고 있으며, 건물과 부지는 철거되지 않은 채 농촌 마을 중심부에 그대로 남아 있습니다.",
      "농촌 마을 중심에 위치한 이 공간은 주민 커뮤니티, 체험 공간, 로컬 창업 거점으로 재탄생할 수 있는 구조를 지니고 있습니다.",
      "이곳은 ‘농촌 + 커뮤니티 + 재생 + 체류’가 결합된 복합 플랫폼 후보지입니다.",
      "여러분의 디자인으로, 이 폐교를 로컬 라이프 허브로 다시 되살려 주세요."
    ],
    "details_en": [
      "It has stayed unused since it closed, and its buildings and grounds still stand, never demolished, in the center of the village.",
      "Located in the center of a farming village, its layout suits a new life as a community space for residents, a place for hands-on activities, or a base for local startups.",
      "It is a candidate site for a combined \"rural + community + regeneration + stays\" platform.",
      "With your design, bring this closed school back to life again as a hub for local life."
    ],
    "image": "assets/img/sites/s10.webp"
  }
];
