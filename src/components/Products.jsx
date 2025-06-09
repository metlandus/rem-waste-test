import { useEffect, useState } from "react";
import big from "../assets/big.svg";
import small from "../assets/small.svg";

function Products() {
	const [skips, setSkips] = useState(null);
	const [openSkipId, setOpenSkipId] = useState(null);

	useEffect(() => {
		async function getSkips() {
			const res = await fetch(
				"https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
			);
			const data = await res.json();
			setSkips(data);
		}
		getSkips();
	}, []);

	return (
		<div className="products">
			{skips && (
				<ul>
					{skips.map((skip) => (
						<li
							key={skip.id}
							className="bg-slate-800 border-1 border-[#475569] rounded-lg flex flex-col justify-between items-center p-4 mb-4 hover:border-blue-500 hover:shadow-md transition-all duration-200
"
						>
							<div className="flex w-full justify-between items-center">
								<h2 className="font-bold text-xl">
									{skip.size} Yard Skip
								</h2>
								<p className="font-bold text-xl text-sky-500">
									£{skip.price_before_vat}
								</p>
							</div>

							<div
								className={`w-full overflow-hidden transition-all duration-600 flex flex-col items-center gap-8 ${
									openSkipId === skip.id
										? " max-h-250  opacity-100 p-4"
										: "max-h-0 opacity-0 p-0 mt-0"
								}`}
							>
								<div className="border-t-1 border-gray-400 w-full mt-2 opacity-60"></div>
								<h2 className="font-semibold text-slate-100 text-xl">
									Skip Details
								</h2>
								<div className="flex flex-col md:flex-row md:gap-12 gap-6 w-full">
									<div
										className="w-full flex justify-center rounded-lg mb-4 md:max-w-3/8"
										style={{
											background:
												"radial-gradient(circle, rgba(104, 122, 156, 1) 0%, rgba(17, 55, 102, 1) 100%)",
											minHeight: "120px",
										}}
									>
										<img
											src={skip.size > 16 ? big : small}
											alt="skip container placeholder img"
											className=" p-12 rounded-lg "
										/>
									</div>
									<div className="md:flex md:flex-col items-start">
										{!skip.allowed_on_road && (
											<div className="flex flex-row items-center justify-center gap-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="inline w-5 h-5 text-yellow-400"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 9v2m0 4h.01M21 20H3a1 1 0 01-.86-1.5l9-16a1 1 0 011.72 0l9 16A1 1 0 0121 20z"
													/>
												</svg>
												<p className="text-yellow-400">
													Not allowed on the road.
												</p>
											</div>
										)}

										{!skip.allows_heavy_waste && (
											<div className="flex flex-row items-center justify-center gap-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="inline w-5 h-5 text-red-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 9v2m0 4h.01M21 20H3a1 1 0 01-.86-1.5l9-16a1 1 0 011.72 0l9 16A1 1 0 0121 20z"
													/>
												</svg>
												<p className="text-red-500">
													Heavy waste is not allowed.
												</p>
											</div>
										)}
										<div className="flex flex-row items-center justify-center gap-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="inline w-5 h-5 opacity-0"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 9v2m0 4h.01M21 20H3a1 1 0 01-.86-1.5l9-16a1 1 0 011.72 0l9 16A1 1 0 0121 20z"
												/>
											</svg>
											<p className="text-slate-300">
												{skip.hire_period_days} day hire
												period.
											</p>
										</div>
									</div>
								</div>
								<button className="bg-green-700 hover:bg-green-800 transition-colors duration-200 rounded-full px-4 py-1 cursor-pointer">
									Select This Skip
								</button>
							</div>
							<button
								className={`rounded-full px-4 cursor-pointer text-white transition-colors duration-200 mt-4 ${
									openSkipId === skip.id
										? "bg-red-500 hover:bg-red-600"
										: "bg-blue-600 hover:bg-blue-700"
								}`}
								onClick={() => {
									setOpenSkipId(
										openSkipId === skip.id ? null : skip.id
									);

									// Scroll into view when opening details
									if (openSkipId !== skip.id) {
										document
											.getElementById(`skip-${skip.id}`)
											.scrollIntoView({
												behavior: "smooth",
												block: "end",
											});
									}
								}}
							>
								{openSkipId === skip.id ? "Close" : "Details"}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Products;
