import React from "react";
const Testimonial = React.forwardRef(({ name, image, testimonial }, ref) => {
	function test() {
		console.log(testimonialEl.current);
	}

	return (
		<li
			ref={ref}
			className="flex flex-col relative items-center bg-neutralLightGray pt-16 px-8 pb-6 gap-4 w-full shrink-0 max-w-[540px]"
		>
			<img
				src={`images/${image}`}
				alt={`${name} profile picture`}
				className="max-w-full w-16 h-16 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2"
			/>
			<h4 className="text-xl font-bold text-primaryDarkBlue">{name}</h4>
			<blockquote className="text-neutralGrayishBlue text-center leading-6">
				{testimonial}
			</blockquote>
		</li>
	);
});
export default Testimonial;
