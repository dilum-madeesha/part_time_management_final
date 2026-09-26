import LandingNav from "./landing/LandingNav";
import LandingHero from "./landing/LandingHero";
import LandingServices from "./landing/LandingServices";

import LandingEmployees from "./landing/LandingEmployees";
import LandingJob from "./landing/LandingJobType";
import LandingFeed from "./landing/LandingFeed";
// import LandingNewsletter from "./landingcom/LandingNewsletter";
import LandingFooter from "./landing/LandingFooter";
import LandingTeam from "./landing/LandingTeam";
import ContactPage from "./landing/LandingContact";

export default function LandingPage() {
	return (
		<div className="min-h-screen bg-white font-sans antialiased">
			<LandingNav />


			<div id="learn-more">
				<div id="home" className="scroll-mt-16">
					<LandingHero />
				</div>
				<div id="employee" className="scroll-mt-16">
					<LandingEmployees />
				</div>


				<div id="services" className="scroll-mt-16">
					<LandingServices />
				</div>

				<div id="types" className="scroll-mt-16">
					<LandingJob />
				</div>
				<div id="feedback" className="scroll-mt-16">
					<LandingFeed />
				</div>


				<div id="team" className="scroll-mt-16">
					<LandingTeam />
				</div>
				<div id="contact" className="scroll-mt-16">
					<ContactPage />
				</div>
				{/* <LandingNewsletter /> */}
			</div>
			<div id="footer" className="scroll-mt-16">
				<LandingFooter />
			</div>
		</div>
	);
}
