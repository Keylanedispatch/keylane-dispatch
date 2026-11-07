export type EquipmentSEO = {
 slug:string; name:string; title:string; description:string; intro:string;
 loads:string; planning:string; paperwork:string; fit:string; question:string; answer:string;
};
export const equipmentSEO:EquipmentSEO[]=[
 {slug:"dry-van",name:"Dry Van",title:"Dry Van Dispatch Services for U.S. Owner-Operators",
 description:"Dry van load searches and broker coordination for authorized U.S. carriers. See KeyLane's dispatch process, first-load offer, and pricing.",
 intro:"Dry van freight involves enclosed trailers carrying products that do not normally require temperature control. Your lanes, available trailer capacity, pickup windows, and broker qualifications all influence which loads make sense.",
 loads:"We review pickup and delivery locations, appointment windows, loaded miles, deadhead, weight, and the equipment details in the listing before bringing opportunities to you.",
 planning:"Share your preferred freight markets, minimum acceptable rate considerations, home-time requirements, and capacity. You approve each load. We do not force dispatch.",
 paperwork:"We can help organize broker communications, rate confirmations, and pickup instructions while you manage your carrier authority, insurance, and operational compliance.",
 fit:"Dry van support is appropriate for carriers with compatible enclosed trailers and authority to operate the planned lanes.",
 question:"Does KeyLane guarantee dry van loads?",
 answer:"No. Available freight depends on origin, destination, capacity, season, broker rules, and current market conditions."
 },
 {slug:"reefer",name:"Reefer",title:"Reefer Dispatch Services for Refrigerated Trucking",
 description:"Refrigerated freight dispatch support for U.S. reefer carriers. Coordinate temperature requirements, appointments, lanes, and broker communications.",
 intro:"Reefer loads need closer attention to commodity instructions, trailer capabilities, and appointment timing. A profitable-looking rate is only one part of deciding whether a refrigerated load fits your operation.",
 loads:"We review posted load information, pickup and delivery windows, lanes, mileage, and stated temperature requirements with your team before you decide.",
 planning:"Tell us your reefer trailer specifications, preferred markets, availability, and requirements around temperature-sensitive cargo. The carrier is responsible for monitoring and maintaining the load temperature.",
 paperwork:"Our team helps keep load details, rate confirmations, and scheduling communications organized. Special instructions should always be confirmed directly against the broker's and shipper's documents.",
 fit:"Reefer support is designed for authorized carriers operating compatible refrigerated equipment.",
 question:"Will KeyLane control trailer temperature?",
 answer:"No. Your driver and carrier remain responsible for equipment operation, temperature settings, monitoring, and freight handling."
 },
 {slug:"flatbed",name:"Flatbed",title:"Flatbed Truck Dispatch Services Across the USA",
 description:"Flatbed dispatch coordination for U.S. motor carriers. Find load opportunities that fit dimensions, securement needs, lanes, and equipment.",
 intro:"Flatbed operations can involve oversized shapes, specialized loading requirements, tarping, and securement planning. The right opportunity depends on the actual trailer, freight dimensions, and your carrier's capabilities.",
 loads:"Before sending a potential load for your review, we focus on origin and destination, stated cargo dimensions, weight, pickup arrangements, and special equipment requirements.",
 planning:"Tell us trailer length, available accessories, preferred lanes, and whether your operation can accommodate tarping or other cargo-specific requirements.",
 paperwork:"KeyLane can help coordinate rate confirmations and broker communications. The carrier remains responsible for cargo securement, permits, and regulatory compliance.",
 fit:"Flatbed support fits authorized carriers equipped and qualified to transport open-deck freight.",
 question:"Does KeyLane provide securement or permits?",
 answer:"No. Your carrier handles proper securement, equipment, permits, and compliance. We help coordinate available load information."
 },
 {slug:"hotshot",name:"Hotshot",title:"Hotshot Truck Dispatch for Pickup and Trailer Carriers",
 description:"Hotshot dispatch services for authorized U.S. pickup-and-trailer carriers. Review load options, equipment fit, broker rules and lanes.",
 intro:"Hotshot carriers work with varied pickup-and-trailer setups. Payload, deck length, licensing, and broker eligibility can differ widely between operations.",
 loads:"We help identify freight listings that may match your truck-and-trailer combination, location, lane preferences, capacity, and scheduling constraints.",
 planning:"Provide truck and trailer specifications, applicable authority and insurance information, and how far you are willing to reposition for freight.",
 paperwork:"We help organize broker discussions and shipping documents while your carrier determines whether the load is safe and legally permitted for your vehicle.",
 fit:"Hotshot support is reviewed case by case based on your equipment, authority, insurance, and broker acceptance.",
 question:"Can a new hotshot authority work with KeyLane?",
 answer:"We can review your operation, but some brokers impose authority-age, equipment, and insurance eligibility rules."
 },
 {slug:"box-truck",name:"Box Truck",title:"Box Truck Dispatch Services for U.S. Carriers",
 description:"Box truck load-search and dispatch coordination for eligible U.S. carriers. Compare lanes, vehicle capacities, and broker requirements.",
 intro:"Box trucks have different cargo dimensions, liftgate options, weight ratings, and operating ranges. Freight that works for one box truck may not suit another.",
 loads:"We help assess load location, dimensions, cargo weight, available appointments, and applicable broker requirements before the carrier makes a decision.",
 planning:"Tell us box length, usable cargo capacity, liftgate capability if any, and whether you serve regional lanes or longer trips.",
 paperwork:"We help track load details and dispatch communications. You remain responsible for the truck's weight limits, licensing, and insurance compliance.",
 fit:"Box truck support is reviewed according to your vehicle configuration, authority, and broker eligibility.",
 question:"Do you offer guaranteed daily box truck freight?",
 answer:"No. Opportunities vary by region, equipment, customer demand, and broker qualification."
 },
 {slug:"power-only",name:"Power Only",title:"Power-Only Dispatch for U.S. Trucking Companies",
 description:"Power-only truck dispatch services for qualified tractor operators. Coordinate tractor-only opportunities, trailer compatibility, and load details.",
 intro:"Power-only work uses a tractor to move a trailer supplied or arranged by another party. Trailer interchange rules and insurance terms deserve attention before accepting an assignment.",
 loads:"We review the pickup point, trailer details, destination, broker instructions, schedule, and whether the opportunity appears compatible with your tractor.",
 planning:"Tell us your tractor configuration, equipment, preferred lanes, availability, and trailer-handling requirements.",
 paperwork:"We assist with broker communication and rate-confirmation organization. The carrier must review trailer interchange, custody, insurance, and operating obligations.",
 fit:"Power-only dispatch support is for appropriately authorized tractor operators who meet applicable trailer and broker requirements.",
 question:"Does KeyLane supply trailers?",
 answer:"No. KeyLane is a dispatch service, not a trailer provider. Trailer supply and interchange arrangements belong to the parties named in the load agreement."
 }
];
export const equipmentBySlug=(slug:string)=>equipmentSEO.find(e=>e.slug===slug);
