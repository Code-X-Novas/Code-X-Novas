import Navbar from "../../components/Navbar";
import SynchroTask from "../../assets/Works/synchrotask.png";
import SkillLoop from "../../assets/Works/skillloop.png";
import UrbanPilgrim from "../../assets/Works/urbanpilgrim.png";
import TakshilaFm from "../../assets/Works/takshilafm.png";
import eCommerce from "../../assets/Works/ecommerce.png";
import curve from "../../assets/Works/curve-glow.png";
import corner from "../../assets/Works/corner-glow.png";
import Contact from "../Contact";
import React, { useState } from "react";

export default function WorkPage() {
	const [activeCategory, setActiveCategory] = useState("All");

	return (
		<>
			<Navbar />

			<div className="relative w-full bg-white overflow-hidden">
				{/* Decorative background elements */}
				<img src={curve} alt="curve" className="hidden lg:block absolute top-0 right-0 w-[420px] opacity-80 pointer-events-none -z-10" />
				<img src={corner} alt="corner" className="hidden lg:block absolute bottom-0 left-0 w-[380px] opacity-70 pointer-events-none -z-10" />

				<section className="relative z-10 pt-[95px] sm:pt-[120px] md:pt-[120px] lg:pt-[120px] pb-[10px] px-6 md:px-[5%] max-w-[1400px] mx-auto text-left">
					<h3 className="uppercase mb-[10px] text-[#2352A5] font-[600] text-[13px] sm:text-[14px] md:text-[16px]" style={{ fontFamily: "Sora", letterSpacing: "1px" }}>
						Our Works
					</h3>

					<h1 className="font-[700] text-black leading-[1.05] mb-3 text-[30px] sm:text-[42px] md:text-[48px] lg:text-[56px]" style={{ fontFamily: "Sora" }}>
						Designed. Developed.
						<br />
						<span className="text-[#0B74D1]">Delivered.</span>
					</h1>

					<p className="text-[#333] font-[400] text-[14px] sm:text-[16px] md:text-[16px] leading-[1.6] max-w-[820px]">
						Every project we deliver blends creativity with technology — built to solve problems, inspire users, and push possibilities forward.
					</p>
				</section>

				<section className="relative w-full py-6 px-6 md:px-[5%] bg-white text-left">
					<div className="max-w-[1400px] mx-auto">
						{/* Filter row */}
						<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
							{/* Categories - horizontally scrollable on small screens */}
							<div className="w-full sm:w-auto mb-3 sm:mb-0">
								<div className="overflow-x-auto whitespace-nowrap py-2 -mx-6 px-6 sm:mx-0 sm:px-0">
									<div className="inline-flex gap-3">
										{["All", "Animation", "Development", "Illustration", "Social Media", "Website", "App Design"].map((c) => (
											<button
												key={c}
												onClick={() => setActiveCategory(c)}
												aria-pressed={activeCategory === c}
												className={`inline-flex items-center flex-shrink-0 text-[13px] sm:text-[14px] px-4 py-2 rounded-full transition-all duration-200 focus:outline-none ${
													activeCategory === c
														? 'bg-gradient-to-r from-[#2352A5] to-[#3CA9E2] text-white shadow-md border-none'
														: 'bg-transparent text-[#08306F] border border-dashed border-[#83B9FF]'
												}
												`}
											>
												{c}
											</button>
										))}
									</div>
								</div>
							</div>

							{/* Search - compact: smaller height/width, icon button instead of text button */}
							<div className="flex items-center space-x-3 w-full sm:w-auto mt-3 sm:mt-0">
								<div className="flex items-center bg-white border rounded-full shadow-sm px-2 py-1 w-full sm:w-[260px] h-9">
									<input
										placeholder="Search"
										className="w-full outline-none text-sm placeholder:text-gray-400 py-1"
										aria-label="Search"
									/>

									{/* Magnifying glass icon button (small) */}
									<button
										aria-label="Search"
										className="ml-2 flex-shrink-0 p-1 rounded-full text-[#2352A5] hover:bg-gray-100"
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2352A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<circle cx="11" cy="11" r="6" />
											<line x1="21" y1="21" x2="16.65" y2="16.65" />
										</svg>
									</button>
								</div>
							</div>
						</div>

						{/* First row: two large cards side-by-side on md+ */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
							<div>
								<div className="relative bg-white rounded-lg overflow-hidden shadow-md">
									<img src={SynchroTask} alt="Synchrotask" className="w-full h-[360px] md:h-[420px] object-cover rounded-lg" />
									<div className="p-6">
										<h3 className="text-[20px] md:text-[22px] font-[600] text-[#0B1730]">Synchrotask</h3>
										<p className="text-[13px] text-[#6B7280] mt-2">AI-Powered Productivity with Human Precision</p>
									</div>

									{/* circular arrow */}
									<div className="absolute right-4 top-1/2 transform -translate-y-1/2">
										<button className="w-10 h-10 bg-white/95 border border-gray-200 rounded-full flex items-center justify-center shadow-md">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#0B1730">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5l7 7-7 7" />
											</svg>
										</button>
									</div>
								</div>
							</div>

							<div>
								<div className="relative bg-white rounded-lg overflow-hidden shadow-md">
									<img src={SkillLoop} alt="Skill Loop" className="w-full h-[360px] md:h-[420px] object-cover rounded-lg" />
									<div className="p-6">
										<h3 className="text-[20px] md:text-[22px] font-[600] text-[#0B1730]">Skill Loop</h3>
										<p className="text-[13px] text-[#6B7280] mt-2">AI-Powered Productivity with Human Precision</p>
									</div>

									<div className="absolute right-4 top-1/2 transform -translate-y-1/2">
										<button className="w-10 h-10 bg-white/95 border border-gray-200 rounded-full flex items-center justify-center shadow-md">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#0B1730">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5l7 7-7 7" />
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>

						{/* Second row: three smaller cards */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
							<div className="relative bg-white rounded-lg overflow-hidden shadow-sm">
								<img src={UrbanPilgrim} alt="Urban Pilgrim" className="w-full h-[220px] object-cover" />
								<div className="p-4">
									<h4 className="text-[16px] font-[600]">Urban Pilgrim</h4>
									<p className="text-[12px] text-[#6B7280] mt-1">Urban Wellness Rooted in Indian Wisdom</p>
								</div>
								<div className="absolute right-4 top-1/2 transform -translate-y-1/2">
									<button className="w-10 h-10 bg-white/95 border border-gray-200 rounded-full flex items-center justify-center shadow">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#0B1730">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5l7 7-7 7" />
										</svg>
									</button>
								</div>
							</div>

							<div className="relative bg-white rounded-lg overflow-hidden shadow-sm">
								<img src={eCommerce} alt="Ecommerce Website" className="w-full h-[220px] object-cover" />
								<div className="p-4">
									<h4 className="text-[16px] font-[600]">Ecommerce Website</h4>
									<p className="text-[12px] text-[#6B7280] mt-1">AI-Powered Productivity</p>
								</div>
								<div className="absolute right-4 top-1/2 transform -translate-y-1/2">
									<button className="w-10 h-10 bg-white/95 border border-gray-200 rounded-full flex items-center justify-center shadow">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#0B1730">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5l7 7-7 7" />
										</svg>
									</button>
								</div>
							</div>

							<div className="relative bg-white rounded-lg overflow-hidden shadow-sm">
								<img src={TakshilaFm} alt="Takshila FM" className="w-full h-[220px] object-cover" />
								<div className="p-4">
									<h4 className="text-[16px] font-[600]">Takshila FM</h4>
									<p className="text-[12px] text-[#6B7280] mt-1">AI-Powered Productivity</p>
								</div>
								<div className="absolute right-4 top-1/2 transform -translate-y-1/2">
									<button className="w-10 h-10 bg-white/95 border border-gray-200 rounded-full flex items-center justify-center shadow">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#0B1730">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5l7 7-7 7" />
										</svg>
									</button>
								</div>
							</div>
						</div>

						<div className="text-center mb-14">
							<button className="px-8 py-3 rounded-md bg-gradient-to-r from-[#2352A5] to-[#3CA9E2] text-white text-lg shadow-md">Load More</button>
						</div>
					</div>
				</section>

				<div>
					<div className="w-full border-t border-gray-300 opacity-70 sm:mt-[40px] relative z-[5]" />
					<Contact />
				</div>
			</div>
		</>
	);
}
