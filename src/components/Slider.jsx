import React from "react";
import Testimonial from "./Testimonial.jsx";

function Slider() {
	const testimonials = [
		{
			name: "Anisha Li",
			image: "avatar-anisha.png",
			testimonial:
				"“Manage has supercharged our team’s workflow. The ability to	maintain visibility on larger milestones at all times keeps everyone motivated.”",
		},
		{
			name: "Ali Bravo",
			image: "avatar-ali.png",
			testimonial:
				"“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
		},
		{
			name: "Richard Watts",
			image: "avatar-richard.png",
			testimonial:
				"“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
		},
		{
			name: "Shanai Gough",
			image: "avatar-shanai.png",
			testimonial:
				"“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
		},
	];
	const gap = 32 / 2;
	const [counter, setCounter] = React.useState(0);
	const [amountOfSlides, setAmoutnOfSlides] = React.useState(null);
	const [windowWidth, setWindowWidth] = React.useState(0);
	const [timeout, timeoutSetter] = React.useState(null);
	const slider = React.useRef(null);
	const slidesRef = React.useRef([]);

	if (slidesRef.current.length !== testimonials.length) {
		// add or remove refs
		slidesRef.current = Array(testimonials.length)
			.fill()
			.map((_, i) => slidesRef.current[i] || React.createRef());
	}
	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	React.useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize, false);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	React.useEffect(() => {
		setAmoutnOfSlides(
			testimonials.length -
				Math.floor(
					window.innerWidth / (slidesRef.current[0].offsetWidth + gap)
				) +
				1
		);
	}, [windowWidth]);

	const dots = React.useRef([]);

	const dotClick = (index) => {
		clearTimeout(timeout);
		transitionTestimonial(index);
		setCounter(index);
	};

	const transitionTestimonial = (slide) => {
		slider.current.style.transition = "transform 0.4s ease-in-out";
		const translateWidth = windowWidth > 540 ? 540 + gap : windowWidth;
		slider.current.style.transform =
			"translateX(" + -translateWidth * slide + "px)";
	};

	const autoTransition = () => {
		const newCounterVal = counter + 1;
		if (amountOfSlides && newCounterVal >= amountOfSlides) {
			setCounter(0);
			transitionTestimonial(0);
		} else {
			setCounter(newCounterVal);
			transitionTestimonial(newCounterVal);
		}
	};

	React.useEffect(() => {
		clearTimeout(timeout);
		timeoutSetter(setTimeout(() => autoTransition(), 3500));
		return () => clearTimeout(timeout);
	}, [counter]);

	return (
		<section className="py-10 px-4 testimonials overflow-x-hidden">
			<div className="wrap">
				<ul
					className="slider flex gap-8 max-w-[1684px] mx-auto"
					ref={slider}
				>
					{testimonials.map((testimonial, index) => (
						<Testimonial
							ref={(el) => (slidesRef.current[index] = el)}
							key={testimonial.name}
							name={testimonial.name}
							image={testimonial.image}
							testimonial={testimonial.testimonial}
						/>
					))}
				</ul>
				<ul
					className="dots flex gap-2 w-full justify-center mt-10"
					id="testimonial-dots"
				>
					{Array.from({ length: amountOfSlides }).map(
						(slide, index) => (
							<li
								onClick={() => dotClick(index)}
								ref={(el) => (dots.current[index] = el)}
								key={index}
								className={`${
									counter === index ? "bg-red-500" : ""
								} w-2 h-2 border border-primaryBrightRed bg-white cursor-pointer rounded-full`}
							></li>
						)
					)}
				</ul>
			</div>
		</section>
	);
}

export default Slider;
